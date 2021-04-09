import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AlertSnack from '../components/AlertSnack';
import ColorPicker from '../components/ColorPicker';
import InputPassword from '../components/InputPassword';
import CardsService from '../services/Cards.service';

export default function NewCard() {

    const MAX_LENGTH = 24;

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('');
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

        if (name.length > MAX_LENGTH) {
            setAlertMessage("You named the card too big. Please put a smaller one!");
            setAlertVisible(true);
            return;
        }

        if (password.length > MAX_LENGTH) {
            setAlertMessage("The password entered is too large. Wouldn't it be smaller?");
            setAlertVisible(true);
            return;
        }

        await CardsService.create({
            name,
            password,
            color
        });

        navigation.navigate("Cards");
    }

    return (
        <React.Fragment>
            <AlertSnack
                message={alertMessage}
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} />

            <View style={styles.container}>
                <View>
                    <TextInput
                        mode="outlined"
                        label="Name the card"
                        value={name}
                        onChangeText={text => setName(text)}
                        maxLength={MAX_LENGTH}
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
                        maxLength={MAX_LENGTH} />

                    <ColorPicker 
                        label="Select a color for the card"
                        color={color}
                        setColor={setColor} />
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
        color: '#d9d9d9'
    }
});