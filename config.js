import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
     apiKey: "AIzaSyC1pKMCya4lzUAmOt5gh94InqVdvW2KNLI",
     authDomain: "team-voting-96844.firebaseapp.com",
     projectId: "team-voting-96844",
     storageBucket: "team-voting-96844.appspot.com",
     messagingSenderId: "819022676753",
     appId: "1:819022676753:web:e61bb51ab9e331900082b0"  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();