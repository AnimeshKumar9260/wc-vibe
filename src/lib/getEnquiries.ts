import app from "./firebase";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

const db = getFirestore(app);

export async function getEnquiries() {
  const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
