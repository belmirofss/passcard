import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AlertSnack from '../components/AlertSnack';
import ColorPicker from '../components/ColorPicker';
import InputPassword from '../components/InputPassword';
import { Colors } from '../enums/Colors';
import { Card } from '../models/Card';
import CardsService from '../services/Cards.service';

type ParamList = {
    Card: {
      card: Card;
    };
};

export default function CardForm() {

    const MAX_LENGTH_PASSWORD = 12;
    const MAX_LENGTH_NAME = 36;

    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Card'>>();
    const card = route.params?.card;

    const [name, setName] = useState(card ? card.name : '');
    const [password, setPassword] = useState(card ? card.password : '');
    const [color, setColor] = useState(card ? card.color : '');
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');

    async function save(): Promise<void> {

        if (!name || !password) {
            setAlertMessage("There are fields not informe. Please inform them!");
            setAlertVisible(true);
            return;
        }

        if (!color) {
            setAlertMessage("No color selected. Please select one!");
            setAlertVisible(true);
            return;
        }

        if (name.length > MAX_LENGTH_NAME) {
            setAlertMessage("You named the card too big. Please put a smaller one!");
            setAlertVisible(true);
            return;
        }

        if (password.length > MAX_LENGTH_PASSWORD) {
            setAlertMessage("The password entered is too large. Wouldn't it be smaller?");
            setAlertVisible(true);
            return;
        }

        if (!password.match(/^[0-9]+$/)) {
            setAlertMessage("Password is invalid. Please enter only numeric characters.");
            setAlertVisible(true);
            return;
        }

        if (card?.id) {
            await CardsService.update(card.id, {
                name,
                password,
                color
            });
        } else {
            await CardsService.create({
                name,
                password,
                color
            });
        }

        navigation.navigate("Cards");
    }

    return (
        <React.Fragment>
            <AlertSnack
                message={alertMessage}
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} 
            />

            <View style={styles.container}>
                <View>
                    <TextInput
                        mode="outlined"
                        label="Name the card"
                        value={name}
                        onChangeText={text => setName(text)}
                        maxLength={MAX_LENGTH_NAME}
                        autoFocus
                        autoCorrect={false}
                        theme={{
                            colors: {
                                background: 'white'
                            }
                        }}
                    />

                    <InputPassword
                        label="Enter the card password"
                        password={password} 
                        setPassword={setPassword}
                        maxLength={MAX_LENGTH_PASSWORD}
                    />

                    <ColorPicker 
                        label="Select a color for the card"
                        color={color}
                        setColor={setColor} 
                    />
                </View>

                <Button
                    style={styles.saveButton}
                    contentStyle={{
                        paddingVertical: 12
                    }}
                    theme={{
                        roundness: 100
                    }}
                    mode="contained" 
                    onPress={() => save()}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
                </Button>
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
    saveButton: {
        width: '100%',
        marginTop: 24
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.SECONDARY
    }
});