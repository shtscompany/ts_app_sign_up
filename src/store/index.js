import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    famName: "",
    birthDateValue: "",
    birthPlaceValue: "",
    emailValue: "",
    telValue: "",
    addressFactValue: "",
    donation: "",

    nameValid: false,
    famNameValid: false,
    birthDateValueValid: false,
    birthPlaceValueValid: false,
    emailValueValid: false,
    telValueValid: false,
    addressFactValueValid: false,
    donationValid: false,

    checked: ""
  },
  mutations: {
    nextButtonDisabled(state) {
      state.nextDisabled = state.nameValid;
    },
    // name and validation getter
    updateName(state, name) {
      state.name = name;
    },
    updateNameValid(state, nameValid) {
      state.nameValid = nameValid;
    },

    // family name and validation getter
    updateFamName(state, famName) {
      state.famName = famName;
    },
    updateFamNameValid(state, famNameValid) {
      state.famNameValid = famNameValid;
    },
    // birth date and validation getter
    updateBirthDateValue(state, birthDateValue) {
      state.birthDateValue = birthDateValue;
    },
    updateBirthDateValueValid(state, birthDateValueValid) {
      state.birthDateValueValid = birthDateValueValid;
    },

    // birth date place and validation getter
    updateBirthPlaceValue(state, birthPlaceValue) {
      state.birthPlaceValue = birthPlaceValue;
    },
    updateBirthPlaceValueValid(state, birthPlaceValueValid) {
      state.birthPlaceValueValid = birthPlaceValueValid;
    },

    // email and validation getter
    updateEmailValue(state, emailValue) {
      state.emailValue = emailValue;
    },
    updateEmailValueValid(state, emailValueValid) {
      state.emailValueValid = emailValueValid;
    },

    // telephon and validation getter
    updateTelValue(state, telValue) {
      state.telValue = telValue;
    },
    updateTelValueValid(state, telValueValid) {
      state.telValueValid = telValueValid;
    },

    // address and validation getter
    updateAddressFactValue(state, addressFactValue) {
      state.addressFactValue = addressFactValue;
    },
    updateAddressFactValueValid(state, addressFactValueValid) {
      state.addressFactValueValid = addressFactValueValid;
    },

    // donation and validation getter
    updateDonation(state, donation) {
      state.donation = donation;
    },
    updateDonationValid(state, donationValid) {
      state.donationValid = donationValid;
    },

    // check input for rules activates send button
    updateChecked(state, checked) {
      state.checked = checked;
    }
  }
});
