import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIKmcWNUUQvWXfvQmbIXEQgHeLhkVk_vQ",
  authDomain: "tt-webevent.firebaseapp.com",
  projectId: "tt-webevent",
  storageBucket: "tt-webevent.appspot.com",
  messagingSenderId: "394925709853",
  appId: "1:394925709853:web:d3cb953b23c6cb761304f4",
  measurementId: "G-VM58P7LNLP"
};

let app;
let db;
let analytics;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  // Dynamically import and initialize analytics only on the client side
  import("firebase/analytics").then((analyticsModule) => {
    analytics = analyticsModule.getAnalytics(app);
  });
}

const provider = new GoogleAuthProvider();

export { db, app, provider, analytics };