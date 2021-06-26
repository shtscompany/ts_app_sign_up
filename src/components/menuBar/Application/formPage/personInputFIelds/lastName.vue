<template id="familyNameTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="famNameTitle"></label>
    <!-- <span>{{ validity() + " " + famNameValid }}</span> -->
    <input
      type="text"
      class="form-control"
      :placeholder="placeHolder"
      v-model="famName"
      v-bind:class="{
        'form-control': true,
        'is-invalid': !validFamName(famName) && famNameBlured,
      }"
      v-on:blur="famNameBlured = true"
      maxlength="20"
      requeired
    />
    <div class="invalid-feedback" v-text="errorFamNameTitle"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      famNameTitle: "გვარი",
      errorFamNameTitle: "გთხოვთ ჩაწეროთ სწორი გვარი.",
      validFamNameTitle: "კარგია!",
      placeHolder: "გვარი",
      famNameBlured: false,
      submitted: false,
    };
  },
  methods: {
    validFamName: function (famName) {
      let re = /^[a-zA-Zა-ჰàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,20}$/;
      return re.test(this.famName);
    },
    validity() {
      return (this.$store.state.famNameValid = this.validFamName(this.famName));
    },
  },
  computed: {
    famName: {
      get() {
        return this.$store.state.famName;
      },
      set(value) {
        this.$store.commit("updateFamName", value);
      },
    },
    famNameValid: {
      get() {
        return this.$store.state.famNameValid;
      },
    },
  },
};
</script>