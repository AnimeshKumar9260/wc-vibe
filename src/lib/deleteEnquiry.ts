import app from "./firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function deleteEnquiry(id: string) {
  await deleteDoc(doc(db, "enquiries", id));
}
