import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ColorPicker from '../components/ColorPicker';
import InputPassword from '../components/InputPassword';

export default function NewCard() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    function save() {

    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    mode="outlined"
                    label="Name the card"
                    value={name}
                    onChangeText={text => setName(text)}
                    maxLength={24}
                />

                <InputPassword
                    label="Enter the card password"
                    password={password} 
                    setPassword={setPassword}
                    maxLength={24} />

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