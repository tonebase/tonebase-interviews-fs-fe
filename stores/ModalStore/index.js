// === STORES ===
import { store } from "react-easy-state";

// === 3RD PARTY ===
import axios from "axios";

const ModalStore = store({
  // Current modal data
  modalIsOpen: false,
  openModalName: "",
  openModalSlug: "",
  preOpenScrollPosition: 0,
  // Data props
  modalError: false,
  cachedModalData: {},
  modalData: null,
  // Modal tab navigation
  currentModalTab: "",
  switchToModalTab: (newTab = "") => {
    if (newTab) ModalStore.currentModalTab = newTab;
  },
  // Modal triggers
  openModal: (modalName = "", modalConfig = {}) => () => {
    console.log(">> Opening modal =>", modalName, modalConfig);

    if (modalName) {
      // Store the scroll position to restore on close
      const scrollTop = window.pageYOffset;
      if (scrollTop && !ModalStore.preOpenScrollPosition)
        ModalStore.preOpenScrollPosition = scrollTop;

      // Close open modals
      ModalStore.closeModals(false);

      // Trigger the new modal values
      ModalStore.modalIsOpen = true;
      ModalStore.openModalName = modalName;
      ModalStore.blurBackground();

      // Add in any slugs, etc. when applicable
      if (modalConfig) {
        if (modalConfig.slug) ModalStore.openModalSlug = modalConfig.slug;
      }
    }
  },
  toggleModal: (modalName = "", modalConfig = {}) => () => {
    console.log(">> Toggling modal =>", modalName, modalConfig);

    if (modalName) {
      if (modalName === ModalStore.openModalName) {
        ModalStore.closeModals();
      } else {
        ModalStore.openModal(modalName, modalConfig);
      }
    }
  },
  closeModals: (adjustScroll = true) => {
    console.log(">> Closing all modals");

    // Cache the modal data in our slug > data mapping object
    if (ModalStore.modalData) {
      const currentModalSlug = ModalStore.modalData.slug;
      if (currentModalSlug && !ModalStore.cachedModalData[currentModalSlug]) {
        ModalStore.cachedModalData[currentModalSlug] = ModalStore.modalData;
      }
    }

    // Clear open modal properties
    ModalStore.modalIsOpen = false;
    ModalStore.openModalName = "";
    ModalStore.openModalSlug = "";

    // Clear data + errors
    ModalStore.modalError = null;
    ModalStore.modalData = null;

    // Remove scroll lock and blurs
    ModalStore.unBlurBackground();

    // Restore old scroll position
    if (adjustScroll && ModalStore.preOpenScrollPosition) {
      window.scrollTo(0, ModalStore.preOpenScrollPosition + 60);
      ModalStore.preOpenScrollPosition = 0;
    }
  },
  closeSingleModal(modalName = "") {
    console.log(">> Closing single modal =>", modalName);
    if (ModalStore.openModalName === modalName) {
      ModalStore.closeModals();
    }
  },
  // View functions
  blurBackground() {
    // const appWrapper = document.getElementById("appWrapper");
    // if (appWrapper) {
    //   appWrapper.classList.add("__modalOpen");
    // }

    const body = document.body;
    if (body) {
      body.classList.add("__noScroll");
    }
  },
  unBlurBackground() {
    // const appWrapper = document.getElementById("appWrapper");
    // if (appWrapper) {
    //   appWrapper.classList.remove("__modalOpen");
    // }

    const body = document.getElementsByTagName("BODY")[0];
    if (body) {
      body.classList.remove("__noScroll");
    }
  },
  // Data functions
  async getModalData(dataURL) {
    console.log(">> Getting modal data =>", dataURL);

    // Check if we already grabbed this data and can load it from cache
    // >> Prevent duplicate requests when the user already accesses this slug
    if (ModalStore.cachedModalData[ModalStore.openModalSlug]) {
      console.log("Found modal data in cache, avoiding API request.");
      ModalStore.modalData =
        ModalStore.cachedModalData[ModalStore.openModalSlug];
    } else {
      console.log("Did not find modal data in slug => Making API request.");

      if (dataURL) {
        const response = await axios.get(dataURL);

        if (response && response.data) {
          ModalStore.modalError = null;
          ModalStore.modalData = response.data;

          console.log("... Received modal data =>", ModalStore.modalData);
        } else {
          ModalStore.modalError =
            "The data was not found or the API returned an error. Please refresh and try again!";
        }
      } else {
        ModalStore.modalError =
          "The data could not be loaded! Please refresh the page and try again!";
      }
    }
  }
});

export default ModalStore;
