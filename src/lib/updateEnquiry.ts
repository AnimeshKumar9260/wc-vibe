import app from "./firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function markEnquiryCompleted(id: string, completed: boolean) {
  await updateDoc(doc(db, "enquiries", id), { completed });
}
