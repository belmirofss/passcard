import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface InputPasswordProps {
    label: string;
    password: string;
    setPassword(password: string): void;
    maxLength?: number;
    keyboardType?: KeyboardTypeOptions;
    autoFocus?: boolean;
}

export default function InputPassword(props: InputPasswordProps) {

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    return (
        <View style={styles.wrapperPasswordInput}>
            <TextInput
                style={styles.passwordInput}
                mode="outlined"
                label={props.label}
                value={props.password}
                onChangeText={text => props.setPassword(text)}
                keyboardType={props.keyboardType}
                maxLength={props.maxLength}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                autoFocus={props.autoFocus}
                theme={{
                    colors: {
                        background: 'white'
                    }
                }}
            />

            <Button
                mode="contained"
                color="#d9d9d9" 
                onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <MaterialCommunityIcons 
                    name={secureTextEntry ? 'eye' : 'eye-off'} 
                    size={24} 
                    color="black" />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperPasswordInput: {
        marginTop: 6,
        flexDirection: "row",
        alignItems: 'center'
    },
    passwordInput: {
        flex: 1,
        marginRight: 4
    }
});