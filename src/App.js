import React from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { Button, Container, Row, Col } from 'reactstrap';
import CredentialForm from './Components/CredentialForm';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  emailProvider: new firebase.auth.EmailAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

function App({ user, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword }) {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12">
            { user ? <h1>You are logged in.</h1> : <h1>Please log in or register.</h1> }
          </Col>
          <Col sm="6">
            { user ? null : <CredentialForm fnSubmit={signInWithEmailAndPassword} type="Login"/> }
          </Col>
          <Col>
            {
              user ? null
              : <CredentialForm fnSubmit={createUserWithEmailAndPassword} type="Register"/>
            }
          </Col>
          <Col xs="12">
            { user ? <Button color="primary" onClick={signOut}>Log out</Button> : null }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
