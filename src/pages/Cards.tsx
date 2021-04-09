import { useIsFocused, useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from '../models/Card';
import CardsService from '../services/Cards.service';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardView from '../components/CardView';

export default function Cards() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [cards, setCards] = React.useState<Card[]>([]);
    const [activeSlide, setActiveSlide] = React.useState(1);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

    async function listCards(): Promise<void> {
        const cards = await CardsService.list();
        setCards(cards);
        console.log(cards);
    }   

    const renderItem = (renderItem: {
        item: Card,
        index: number
    }) => {

        return (
            <CardView card={renderItem.item} />
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
                        <Carousel 
                            data={cards}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH} 
                            itemWidth={ITEM_WIDTH}
                            loop 
                            onSnapToItem={(index) => setActiveSlide(index) }/>

                            <Pagination
                                dotsLength={cards.length}
                                activeDotIndex={activeSlide}
                                dotStyle={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: '#2b2b2b'
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
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
    }
});