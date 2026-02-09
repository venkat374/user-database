import { firebaseAuthInstance, firestoreInstance } from "./firebaseConfig";

export const authProvider = firebaseAuthInstance as any;
export const dataProvider = firestoreInstance as any;
