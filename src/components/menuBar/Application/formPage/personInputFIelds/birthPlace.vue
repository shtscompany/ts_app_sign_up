<template id="birthPlaceTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="birthPlaceTitle"></label>
    <!-- <span>{{ validity() + " " + birthPlaceValueValid }}</span> -->
    <input
      type="text"
      class="form-control"
      :placeholder="placeHolder"
      v-model="birthPlaceValue"
      v-bind:class="{
        'form-control': true,
        'is-invalid':
          !validBirthPlaceValue(birthPlaceValue) && birthPlaceValueBlured,
      }"
      v-on:blur="birthPlaceValueBlured = true"
      maxlength="20"
      requeired
    />
    <div class="invalid-feedback" v-text="errorBirthPlaceValueTitle"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      birthPlaceTitle: "დაბადების ადგილი:",
      errorBirthPlaceValueTitle: "გთხოვთ ჩაწეროთ სწორი დაბადების ადგილი.",
      validBirthPlace: "კარგია!",
      placeHolder: "დაბადების ადგილი",
      birthPlaceValueBlured: false,
    };
  },
  methods: {
    validate: function () {
      this.birthPlaceValueBlured = true;
      if (this.validBirthPlaceValue(this.birthPlaceValue)) {
        this.valid = true;
      }
    },
    validBirthPlaceValue: function (birthPlaceValue) {
      let re = /^[a-zA-Zა-ჰàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/;
      return re.test(this.birthPlaceValue);
    },
    validity() {
      return (this.$store.state.birthPlaceValueValid = this.validBirthPlaceValue(
        this.birthPlaceValue
      ));
    },
  },
  computed: {
    birthPlaceValue: {
      get() {
        return this.$store.state.birthPlaceValue;
      },
      set(value) {
        this.$store.commit("updateBirthPlaceValue", value);
      },
    },
    birthPlaceValueValid: {
      get() {
        return this.$store.state.birthPlaceValueValid;
      },
    },
  },
};
</script>