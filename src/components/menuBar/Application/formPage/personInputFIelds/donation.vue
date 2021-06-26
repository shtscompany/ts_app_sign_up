<template id="nameTemplate">
  <div class="col-md-6 mb-3">
    <label v-text="donationTitle"></label>
    <!-- <span>{{ validity() + " " + donationValid }}</span> -->
    <input
      type="text"
      v-bind:class="{
        'form-control': true,
        'is-invalid': !validDonation(donation) && donationBlured,
      }"
      v-on:blur="donationBlured = true"
      :placeholder="placeHolder"
      v-model="donation"
      maxlength="3"
      required
    />
    <div class="invalid-feedback" v-text="errorDonationTitle"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      donationTitle: "ყოველ თვიური დონაცია",
      errorDonationTitle: "გთხოვთ ჩაწეროთ დონაციის ოდენობა",
      validDonationTitle: "კარგია!",
      placeHolder: "თანხა",
      donationBlured: false,
    };
  },
  methods: {
    validDonation: function (donation) {
      let re = /^[0-9]{1,4}$/;
      return re.test(this.donation);
    },
    validity() {
      return (this.$store.state.donationValid = this.validDonation(
        this.donation
      ));
    },
  },
  computed: {
    donation: {
      get() {
        return this.$store.state.donation;
      },
      set(value) {
        this.$store.commit("updateDonation", value);
      },
    },
    donationValid: {
      get() {
        return this.$store.state.donationValid;
      },
    },
  },
};
</script>