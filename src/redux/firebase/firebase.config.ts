import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuAD0QnWpeuH0OsuluQTsVnA3mCvDbLho",
  authDomain: "charm-box-gifts-shop.firebaseapp.com",
  projectId: "charm-box-gifts-shop",
  storageBucket: "charm-box-gifts-shop.firebasestorage.app",
  messagingSenderId: "761499700014",
  appId: "1:761499700014:web:798d076f2336ecb48748bf"
};

export const app = initializeApp(firebaseConfig);
