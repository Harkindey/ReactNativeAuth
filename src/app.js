import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCNwDl0k5aisvXKkvTJN0R7b9aTAGIBycI',
            authDomain: 'auth-b37ab.firebaseapp.com',
            databaseURL: 'https://auth-b37ab.firebaseio.com',
            projectId: 'auth-b37ab',
            storageBucket: 'auth-b37ab.appspot.com',
            messagingSenderId: '126662161514'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
