import React from 'react';
import { StyleSheet, View } from 'react-native';
import ConfirmDialog from '../components/ConfirmDialog';
import PrimaryButton from '../components/PrimaryButton';
import TitleAndDescription from '../components/TitleAndDescription';
import PinContext from '../contexts/Pin';
import CardsService from '../services/Cards.service';

export default function ClearAllData() {

    const pinContext = React.useContext(PinContext);

    const [visibleConfirmClearAllData, setVisibleConfirmClearAllData] = React.useState(false);

    async function clearAllData() {
        await CardsService.deleteAllCards();
        await pinContext.clearPin();
    }

    return (
        <React.Fragment>
            <ConfirmDialog 
                title="Again, confirm the action?"
                paragraph="When you clear all your cards and passwords, the data cannot be recovered."
                visible={visibleConfirmClearAllData}
                onDismiss={() => setVisibleConfirmClearAllData(false)}
                onYes={clearAllData}
                onNo={() => setVisibleConfirmClearAllData(false)}
            />

            <View style={styles.container}>
                <TitleAndDescription
                    notShowLogo
                    title="Do you want to clear all your cards and passwords?"
                    description="Remember that everything is saved on your device safely and offline." 
                />

                <PrimaryButton text="CLEAR ALL DATA" onPress={() => setVisibleConfirmClearAllData(true)} />
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
    }
});