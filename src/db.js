//@ts-check

import { config } from "./config";
import firebase from "firebase";
let database, uid;
export const init = () => {
  firebase.initializeApp(config);
  database = firebase.database();
  return firebase.auth().signInAnonymously().then(()=>{
      uid = firebase.auth().currentUser.uid;
  });
};

export const set = (path, value) => {
    database.ref(`${path}/${uid}`).set(value);
}
export const get = (path) => {
    return database.ref(`${path}/${uid}}`).once('value')
}
