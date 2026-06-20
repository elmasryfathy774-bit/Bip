// ============================================
// إعدادات Firebase الخاصة بمشروع "وصلة"
// هذا الملف يُستورد في كل صفحة (login, signup, chat...)
// عشان مايتكررش الإعداد في كل ملف
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs5bpE5ghPIRvKSwdv5Ux9X3BLf6_v7Ds",
  authDomain: "studio-7558309738-de8bd.firebaseapp.com",
  projectId: "studio-7558309738-de8bd",
  storageBucket: "studio-7558309738-de8bd.firebasestorage.app",
  messagingSenderId: "706229187023",
  appId: "1:706229187023:web:1aae9ace7e289d0198a2ba"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
