import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'

export const signUp = (username, email, password) => {
    let user = new Parse.User()
    user.set('username', username)
    user.set('email', email)
    user.set('password', password)

    return user.signUp()
}

export const logIn = (username, password) => {
    return Parse.User.logIn(username, password)
}

export const logOut = () => {
    return Parse.User.logOut()
}

export const initializeParse = (serverURL, applicationId, jsKey, masterKey) => {
    Parse.setAsyncStorage(AsyncStorage);
    Parse.serverURL = serverURL; // This is your Server URL
    Parse.initialize(
        applicationId, // This is your Application ID
        jsKey, // This is your Javascript key
        masterKey // This is your Master key (never use it in the frontend)
    )
}

export const getQuests = () => {
    const quest = Parse.Object.extend('quest');
    const query = new Parse.Query(quest);
    //query.equalTo("sender", 'A string');
    //query.equalTo("quest", 'A string');
    return query.find().then((quests) => {
        return quests
    });
}