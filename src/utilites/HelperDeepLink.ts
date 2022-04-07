import dynamicLinks from '@react-native-firebase/dynamic-links';

export const getUIdByDynamicLink = async () => {

    const myLink = await dynamicLinks().getInitialLink();
    
    if (myLink && myLink.url) {
    
    let id = myLink.url?.split('=').pop();
    
    return id;
    
    }
    
    return null;
    
    };