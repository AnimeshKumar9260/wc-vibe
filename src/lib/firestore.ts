import app from "./firebase";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const db = getFirestore(app);

export async function addEnquiry(data: { name: string; email: string; message: string }) {
  return await addDoc(collection(db, "enquiries"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
