import { useIsFocused, useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from '../models/Card';
import CardsService from '../services/Cards.service';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardView from '../components/CardView';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cards() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [cards, setCards] = React.useState<Card[]>([]);
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(1);
    const [showPassword, setShowPassword] = React.useState(true);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

    async function listCards(): Promise<void> {
        const cards = await CardsService.list();
        setCards(cards);
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
        listCards();
    }, [isFocused]);

    return (
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
                                backgroundColor: '#2b2b2b'
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
                            onSnapToItem={index => setActiveSlideIndex(index)} />

                        <View style={styles.wrapperActions}>
                            <Button
                                style={styles.actionButton}
                                contentStyle={{
                                    paddingVertical: 2
                                }}
                                theme={{
                                    roundness: 100
                                }}
                                mode="contained" 
                                onPress={() => setShowPassword(showPassword ? false : true)}>
                                <MaterialCommunityIcons 
                                    name={showPassword ? 'eye' : 'eye-off'} 
                                    size={16} />
                            </Button>

                            <Button
                                style={styles.actionButton}
                                contentStyle={{
                                    paddingVertical: 2
                                }}
                                theme={{
                                    roundness: 100
                                }}
                                mode="contained" 
                                onPress={() => navigation.navigate('EditCard', {card: cards[activeSlideIndex]})}>
                                <MaterialCommunityIcons name="circle-edit-outline" size={16} />
                            </Button>

                            <Button
                                style={styles.actionButton}
                                contentStyle={{
                                    paddingVertical: 2
                                }}
                                theme={{
                                    roundness: 100
                                }}
                                mode="contained" 
                                onPress={() => console.log("A")}>
                                <MaterialCommunityIcons name="delete-circle-outline" size={16} />
                            </Button>
                        </View> 
                    </View>
                }
            </View>

            <Button
                style={styles.newCardButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                theme={{
                    roundness: 100
                }}
                mode="contained" 
                onPress={() => navigation.navigate('NewCard')}>
                <Text style={styles.newCardButtonText}>NEW CARD</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    newCardButton: {
        width: '100%',
        marginTop: 24
    },
    newCardButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9d9d9'
    },
    actionButton: {
        marginTop: 8,
        width: 20,
        marginRight: 4
    },
    actionButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#d9d9d9'
    },
    wrapperActions: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});