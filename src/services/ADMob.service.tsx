import Constants from 'expo-constants';

import { AdMobInterstitial } from 'expo-ads-admob';

const testID = 'ca-app-pub-3940256099942544/1033173712';
const productionId  = 'ca-app-pub-6575307967199593/3856662334';

const adUnitID = Constants.isDevice && !__DEV__ ? productionId : testID;

export default {
    showInterstitial: async () => {
        await AdMobInterstitial.setAdUnitID(adUnitID);
        await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }
};