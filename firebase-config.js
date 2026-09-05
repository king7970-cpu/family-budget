/* ===== Firebase cloud sync setup =====
   Shared by index.html, add.html and add-kids.html so every device that
   opens the app reads/writes the SAME Firestore document in real time. */

const firebaseConfig = {
  apiKey: "AIzaSyDvEpl_tQO4fdTbnQvEcyL7S65voSi0PHo",
  authDomain: "family-finanas.firebaseapp.com",
  projectId: "family-finanas",
  storageBucket: "family-finanas.firebasestorage.app",
  messagingSenderId: "673795560221",
  appId: "1:673795560221:web:a780998e392ba0f29807f4",
};

try {
  firebase.initializeApp(firebaseConfig);
  const firestoreDb = firebase.firestore();
  window.budgetDocRef = firestoreDb.collection('budget').doc('family');
} catch (e) {
  console.error('Firebase init failed — falling back to local-only storage.', e);
  window.budgetDocRef = null;
}
