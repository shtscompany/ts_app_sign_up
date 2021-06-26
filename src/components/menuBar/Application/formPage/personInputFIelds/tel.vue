<template id="telTemplate">
  <div class="col-md-6 mb-3">
    <div class="form-group">
      <label for="mobile" v-text="telTitle"></label>
      <!-- <span>{{ validity() + " " + telValueValid }}</span> -->
      <input
        v-model="telValue"
        :placeholder="placeHolder"
        v-bind:class="{
          'form-control': true,
          'is-invalid': !validTel(telValue) && telBlured,
        }"
        v-on:blur="telBlured = true"
        requeired
      />
      <div class="invalid-feedback" v-text="errorTelTitle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      telTitle: "ტელეფონი:",
      errorTelTitle: "გთხოვთ ჩაწეროთ სწორი ტელეფონის ნომერი",
      validTelName: "კარგია!",
      placeHolder: "საკონტაქტო ნომერი",
      telBlured: false,
    };
  },
  methods: {
    validTel: function (telValue) {
      let re = /^[0-9]{9,18}$/;
      return re.test(this.telValue);
    },
    validity() {
      return (this.$store.state.telValueValid = this.validTel(this.telValue));
    },
  },
  computed: {
    telValue: {
      get() {
        return this.$store.state.telValue;
      },
      set(value) {
        this.$store.commit("updateTelValue", value);
      },
    },
    telValueValid: {
      get() {
        return this.$store.state.telValueValid;
      },
    },
  },
};
</script>