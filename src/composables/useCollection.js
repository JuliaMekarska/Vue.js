import { ref } from 'vue';
import { projectFirestore } from '../firebase/config.js';

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(error.message);
      error.value = 'Could not send the message';
    }
  };

  return { error, addDoc };
};
export default useCollection;
