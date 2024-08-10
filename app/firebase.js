
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBT_AuuKw6rRpa-XYL_YuA1ao88S04jr7w",
  authDomain: "ai-customer-support-58501.firebaseapp.com",
  projectId: "ai-customer-support-58501",
  storageBucket: "ai-customer-support-58501.appspot.com",
  messagingSenderId: "33523706771",
  appId: "1:33523706771:web:4b0e9f09e5f0284971d666",
  measurementId: "G-B6V8DNNJSF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

