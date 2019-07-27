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

export const getShares = () => {
    const share = Parse.Object.extend('shares');
    const query = new Parse.Query(share);
    //query.equalTo("sender", 'A string');
    //query.equalTo("quest", 'A string');
    return query.find().then((shares) => {
        return shares
    });
}

export const getSpecificShares = (ownerId) => {
    const share = Parse.Object.extend('shares');
    const query = new Parse.Query(share);
    query.equalTo("ownerUserId", ownerId);
    //query.equalTo("quest", 'A string');
    return query.find().then((shares) => {
        return shares
    });
}

export const saveShare = (owner, ownerId, detail) => {
    const shares = Parse.Object.extend('shares');
    const myNewObject = new shares();

    myNewObject.set('owner', owner);
    myNewObject.set('ownerUserId', ownerId);
    myNewObject.set('detail', detail);

    myNewObject.save().then(
        (result) => {
            console.log('shares created', result);
            return result
        }, (error) => {
            console.error('Error while creating shares: ', error);
            return error
        }
    );
}