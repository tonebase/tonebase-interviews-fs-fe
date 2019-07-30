// === STORES ===
import { store } from "react-easy-state";

const TabNavStore = store({
  currentTab: "",
  switchToTab: (newTab = "") => {
    if (newTab) TabNavStore.currentTab = newTab;
  },
  resetStore: () => {
    TabNavStore.currentTab = "";
  }
});

export default TabNavStore;
