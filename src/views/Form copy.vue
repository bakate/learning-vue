<script>
import TextField from "../components/textField";
import TextArea from "../components/textarea";
export default {
  components: { TextField, TextArea },
  data: () => ({
    errorMessages: "",
    budget: null,
    startDate: null,
    endDate: null,
    formHasErrors: false,
    formCheck: [v => (!v?.length ? "This field is really required" : "")]
  }),

  computed: {
    form() {
      return {
        budget: this.budget,
        startDate: this.startDate,
        endDate: this.endDate
      };
    }
  },

  watch: {
    content() {
      this.errorMessages = "";
    }
  },

  methods: {
    resetForm() {
      this.errorMessages = "";
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      if (this.$refs.form.validate()) {
        console.log(this.form);
        this.resetForm();
      }
    }
  }
};
</script>
<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <h1 class="subheading grey--text py-3">
        Tell us more about your campaign
      </h1>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <TextField
              ref="campaign_objective"
              name="campaign_objective"
              content="campaign_objective"
              label="Campaign Objective"
              placeholder="Choose a content"
            />
            <TextField
              ref="facebook_account_id"
              name="facebook_account_id"
              content="facebook_account_id"
              label="Facebook id"
              placeholder="11223344"
            />
            <TextField
              ref="facebook_page_id"
              name="facebook_page_id"
              content="facebook_page_id"
              label="Facebook Page id"
              placeholder="114612110223527"
            />
            <TextField
              ref="budget"
              content="budget"
              name="budget"
              label="Monthly budget (in €)"
              placeholder="10,000"
              type="number"
            />

            <TextField
              ref="startDate"
              name="startDate"
              content="startDate"
              label="Start Date"
              placeholder="When to start"
              type="date"
            />

            <TextField
              ref="endDate"
              name="endDate"
              content="endDate"
              label="End Date"
              placeholder="When to finish"
              type="date"
            />

            <TextArea label="ad-title" name="ad-title" content="ad-title" />
            <TextArea label="ad-text" name="ad-text" content="ad-text" />
            <TextArea
              label="ad-description"
              name="ad-description"
              content="ad-description"
            />
          </v-card-text>
          <v-divider class="mt-2"></v-divider>
          <v-card-actions>
            <v-btn text>Cancel</v-btn>
            <v-spacer></v-spacer>

            <v-btn color="success" @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
