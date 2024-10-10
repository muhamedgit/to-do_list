import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import {db} from '../config';

const todosCollection = collection(db, 'tasks');

export const addTodo = async (todo) => {
  await addDoc(todosCollection, todo);
};

export const getTodos = async () => {
  const snapshot = await getDocs(todosCollection);
  return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
};

export const deleteTodo = async (id) => {
  const todoDoc = doc(db, 'tasks', id);
  await deleteDoc(todoDoc);
};
export const updateTodoCompletion = async (id, completed) => {
  const todoRef = doc(db, 'tasks', id);
  try {
    await updateDoc(todoRef, {
      completed: completed,
    });
  } catch (error) {
    console.error('Error updating todo completion:', error);
  }
};
