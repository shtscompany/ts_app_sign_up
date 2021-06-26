<template id="birthDateTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="birthDateTitle">{{ birthDateTitle }} hi</label>
    <!-- <span>{{ validity() + " " + birthDateValueValid }}</span> -->
    <vuejs-datepicker
      :language="ge"
      :format="customDateFormat"
      monday-first
      input-class="form-control"
      :placeholder="placeHolder"
      v-model="birthDateValue"
      required
    ></vuejs-datepicker>

    <div class="invalid-feedback" v-text="errorBirthDateTitle"></div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: function () {
    return {
      ge: vdp_translation_ge.js,
      birthDateTitle: "დაბადების თარიღი:",
      errorBirthDateTitle: "გთხოვთ მონიშნეთ დაბადების თარიღი.",
      validBirthDateText: "კარგია!",
      placeHolder: "თარიღი",
      birthDateBlured: false,
    };
  },
  components: {
    vuejsDatepicker,
  },
  methods: {
    customDateFormat(birthDateValue) {
      let formated = moment(birthDateValue).format("DD.MM.YYYY");
      this.birthDate = formated;
      return formated;
    },
    validBirthDateValue: function (name) {
      // hot empty string or space
      let re = /(.|\s)*\S(.|\s)*/;
      return re.test(this.birthDateValue);
    },
    validity() {
      return (this.$store.state.birthDateValueValid = this.validBirthDateValue(
        this.birthDateValue
      ));
    },
  },
  computed: {
    birthDateValue: {
      get() {
        return this.$store.state.birthDateValue;
      },
      set(value) {
        this.$store.commit("updateBirthDateValue", value);
      },
    },
    birthDateValueValid: {
      get() {
        return this.$store.state.birthDateValueValid;
      },
    },
  },
};
</script>