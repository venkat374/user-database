import { DataProvider } from "@refinedev/core";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firestoreInstance } from "../firebaseConfig";

export const dataProvider: DataProvider = {
  getList: async ({ resource }) => {
    const querySnapshot = await getDocs(
      collection(firestoreInstance, resource)
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      data,
      total: data.length,
    };
  },

  getOne: async ({ resource, id }) => {
    const ref = doc(firestoreInstance, resource, id as string);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      throw new Error("Document not found");
    }

    return {
      data: {
        id: snap.id,
        ...snap.data(),
      },
    };
  },

  create: async ({ resource, variables }) => {
    const docRef = await addDoc(
      collection(firestoreInstance, resource),
      variables
    );

    return {
      data: {
        id: docRef.id,
        ...variables,
      },
    };
  },

  update: async ({ resource, id, variables }) => {
    const ref = doc(firestoreInstance, resource, id as string);
    await updateDoc(ref, variables);

    return {
      data: {
        id,
        ...variables,
      },
    };
  },

  deleteOne: async ({ resource, id }) => {
    const ref = doc(firestoreInstance, resource, id as string);
    await deleteDoc(ref);

    return {
      data: { id },
    };
  },

  getApiUrl: () => "",
};
