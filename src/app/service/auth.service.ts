import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  loginWithGoogle(auth){
    return this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
