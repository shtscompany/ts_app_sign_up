<template id="nameTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="factAddressTitle"></label>
    <!-- <span>{{ validity() + " " + addressFactValueValid }}</span> -->
    <input
      type="text"
      v-bind:class="{
        'form-control': true,
        'is-invalid': !validAddressValue(addressFactValue) && addressFactBlured,
      }"
      v-on:blur="addressFactBlured = true"
      :placeholder="placeHolder"
      v-model="addressFactValue"
      required
    />
    <div class="invalid-feedback" v-text="errorfactAddressTitle"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      factAddressTitle: "ფაქტიური მისამართი",
      errorfactAddressTitle: "გთხოვთ ჩაწეროთ თქვენი მისამართი",
      validName: "კარგია!",
      placeHolder: "მისამართი",
      addressFactBlured: false,
      valid: false,
      submitted: false,
    };
  },
  methods: {
    validAddressValue: function (addressFactValue) {
      // hot empty string or space
      let re = /(.|\s)*\S(.|\s)*/;
      return re.test(this.addressFactValue);
    },
    validity() {
      return (this.$store.state.addressFactValueValid = this.validAddressValue(
        this.addressFactValue
      ));
    },
  },
  computed: {
    addressFactValue: {
      get() {
        return this.$store.state.addressFactValue;
      },
      set(value) {
        this.$store.commit("updateAddressFactValue", value);
      },
    },
    addressFactValueValid: {
      get() {
        return this.$store.state.addressFactValueValid;
      },
    },
  },
};
</script>