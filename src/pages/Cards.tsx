import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Card } from '../models/Card';
import CardsService from '../services/Cards.service';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardView from '../components/CardView';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../enums/Colors';
import ConfirmDialog from '../components/ConfirmDialog';
import PrimaryButton from '../components/PrimaryButton';
import IconButton from '../components/IconButton';
import AlertSnack from '../components/AlertSnack';
import ADMobService from '../services/ADMob.service';

type ParamList = {
    Message: {
        message: string;
    };
};

export default function Cards() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute<RouteProp<ParamList, 'Message'>>();

    const [cards, setCards] = React.useState<Card[]>([]);
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const [showPassword, setShowPassword] = React.useState(false);
    const [visibleConfirmDelete, setVisibleConfirmDelete] = React.useState(false);
    const [deletedCard, setDeletedCard] = React.useState<Card | null>();
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

    async function listCards(): Promise<void> {
        const cards = await CardsService.list();
        setCards(cards);
    }   

    function questionDeleteTheCard(card: Card) {
        setDeletedCard(card);
        setVisibleConfirmDelete(true);
    }

    const deleteCard = async () => {
        if (deletedCard?.id) {
            await CardsService.delete(deletedCard.id);
            const cardIndex = cards.findIndex(card => card.id == deletedCard.id);
            cards.splice(cardIndex, 1);
            setCards(cards);
        }

        closeDialogAndReset();
    }

    const closeDialogAndReset = () => {
        setDeletedCard(null);
        setVisibleConfirmDelete(false);
    }

    const renderItem = (renderItem: {
        item: Card,
        index: number
    }) => {
        return (
            <CardView card={renderItem.item} showPassword={showPassword} />
        );
    }

    React.useEffect(() => {
        ADMobService.showInterstitial();
    }, []);

    React.useEffect(() => {
        setAlertVisible(route.params?.message ? true : false);
        setAlertMessage(route.params?.message ? route.params?.message : '');
        navigation.setParams({
            message: null
        });
        listCards();
    }, [isFocused]);

    return (
        <React.Fragment>
            <ConfirmDialog 
                title="Do you really want to delete the card?"
                paragraph={`When you delete the card "${deletedCard?.name}", this action cannot be undone.`}
                visible={visibleConfirmDelete}
                onDismiss={() => setVisibleConfirmDelete(false)}
                onYes={deleteCard}
                onNo={closeDialogAndReset}
            />

            <AlertSnack
                message={alertMessage}
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} 
            />

            <View style={styles.container}>
                <View>
                    {
                        cards.length > 0 &&
                        <View>
                            <Pagination
                                dotsLength={cards.length}
                                activeDotIndex={activeSlideIndex}
                                dotStyle={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: Colors.PRIMARY
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />

                            <Carousel 
                                data={cards}
                                renderItem={renderItem}
                                layout="stack"
                                sliderWidth={SLIDER_WIDTH} 
                                itemWidth={ITEM_WIDTH}
                                containerCustomStyle={{
                                    marginLeft: ITEM_WIDTH * -0.05
                                }}
                                onSnapToItem={index => setActiveSlideIndex(index)} 
                            />

                            <View style={styles.wrapperActions}>

                                <IconButton 
                                    icon={showPassword ? 'eye' : 'eye-off'} 
                                    onPress={() => setShowPassword(showPassword ? false : true)}
                                />

                                <IconButton 
                                    icon="circle-edit-outline"
                                    onPress={() => navigation.navigate('EditCard', {card: cards[activeSlideIndex]})}
                                />

                                <IconButton 
                                    icon="delete-circle-outline"
                                    onPress={() => questionDeleteTheCard(cards[activeSlideIndex])}
                                />
                            </View> 
                        </View>
                    }

                    {
                        cards.length == 0 &&
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name="credit-card-off" size={48} color={Colors.PRIMARY} />
                            <Text style={styles.noCardRegisteredText}>
                                No card registered. Register the first one by clicking the button below.
                            </Text>
                        </View>
                    }
                </View>

                <PrimaryButton text="NEW CARD" onPress={() => navigation.navigate('NewCard')} />
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    wrapperActions: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    noCardRegisteredText: {
        fontSize: 18,
        textAlign: 'center'
    }
});