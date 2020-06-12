// === STORES ===
import { store } from 'react-easy-state';

const GoogleStore = store({
  inputValue: '',
  setInputValue: (value = '') => {
    GoogleStore.inputValue = value;
  },
});

export default GoogleStore;
