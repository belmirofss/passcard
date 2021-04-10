import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appbar, Menu } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
    title: string;
    showBackButton?: boolean;
    showMenuButton?: boolean;
}

export default function Header(props: HeaderProps) {

    const navigation = useNavigation();

    const [visibleMenu, setVisibleMenu] = React.useState(false);

    const changePinButtonClick = (): void => {
        setVisibleMenu(false);
        navigation.navigate('ChangePIN')
    }

    return (
        <Appbar.Header 
            theme={{
                colors: {
                    primary: 'white'
                }
            }}
            statusBarHeight={0}
        >
            <Appbar.Content title={props.title} />
            {
                props.showBackButton &&
                <Appbar.BackAction onPress={() => navigation.goBack()} />
            }
            {
                props.showMenuButton &&
                <Menu
                    visible={visibleMenu}
                    onDismiss={() => setVisibleMenu(false)}
                    anchor={
                        <Appbar.Action 
                            icon={() => <MaterialIcons 
                                name="more-vert"
                                size={24} 
                                color={Colors.PRIMARY} 
                            />}
                            color={Colors.PRIMARY} 
                            onPress={() => setVisibleMenu(true)} 
                        />
                    }>
                    <Menu.Item 
                        title="Change PIN"
                        icon={() => <MaterialCommunityIcons 
                            name="key-change"
                            size={24} 
                            color={Colors.PRIMARY} 
                        />}
                        titleStyle={{
                            marginRight: 0
                        }}
                        onPress={changePinButtonClick} 
                    />
                    <Menu.Item 
                        title="Clean all"
                        icon={() => <MaterialCommunityIcons 
                            name="delete-forever"
                            size={24} 
                            color={Colors.PRIMARY} 
                        />}
                        onPress={() => {console.log('Option 2 was pressed')}}
                    />
                    <Menu.Item 
                        title="About"
                        icon={() => <MaterialCommunityIcons 
                            name="information"
                            size={24} 
                            color={Colors.PRIMARY} 
                        />}
                        onPress={() => {console.log('Option 3 was pressed')}}
                    />
                </Menu>
            }
        </Appbar.Header>
    );
}