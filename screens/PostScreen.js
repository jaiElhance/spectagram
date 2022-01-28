import React from 'react';
import {SnapshotViewIOSBase, StyleSheet} from 'react-native'
import { firebaseConfig } from '../config';

fetchUser = () => {
    let theme;
    firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value", (snapshot) => {
        theme = snapshot.val().current_theme
        this.setState({ light_theme: theme === "light" })
    })
}

export default class PostScreen extends Component {
  
}
