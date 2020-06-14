<script>
import TextField from "../components/textField";
import TextArea from "../components/textarea";
export default {
  components: {
    TextField,
    TextArea
  },
  data: () => ({
    errorMessages: null,
    budget: null,
    campaign_objective: null,
    facebook_account_id: null,
    facebook_page_id: null,
    total_budget: null,
    start_date: null,
    end_date: null,
    landing_page_url: null,
    landing_page_display_url: null,
    ad_title: null,
    ad_message: null,
    ad_description: null,
    ad_image_url: null
  }),

  computed: {
    form() {
      return {
        budget: this.budget,
        campaign_objective: this.campaign_objective,
        facebook_account_id: this.facebook_account_id,
        facebook_page_id: this.facebook_page_id,
        total_budget: this.total_budget,
        start_date: this.start_date,
        end_date: this.end_date,
        landing_page_url: this.landing_page_url,
        landing_page_display_url: this.landing_page_display_url,
        ad_title: this.ad_title,
        ad_message: this.ad_message,
        ad_description: this.ad_description,
        ad_image_url: this.ad_image_url
      };
    }
  },

  methods: {
    submit() {
      this.formHasErrors = false;

      if (this.$refs.form.validate()) {
        console.log(this.form);
        this.$refs.form.reset();
      }
    },
    clear() {
      this.$refs.form.reset();
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
              v-model="campaign_objective"
              label="Campaign Objective"
              type="text"
            />
            <TextField
              v-model="facebook_account_id"
              label="Facebook Account Id"
              type="text"
            />
            <TextField
              v-model="facebook_page_id"
              label="Facebook Page Id"
              type="text"
            />
            <TextField
              v-model="total_budget"
              label="Monthly budget (in €)"
              type="number"
              placeholder="500"
            />
            <TextField
              v-model="start_date"
              label="Start Date"
              type="date"
              placeholder="When to start the campaign"
            />
            <TextField
              v-model="end_date"
              label="End Date"
              type="date"
              placeholder="When to finish the campaign"
            />
            <TextField
              v-model="landing_page_url"
              label="Landing Page URL"
              type="url"
              placeholder="Paste the Page URL"
            />
            <TextField
              v-model="landing_page_display_url"
              label="Landing Page Display URL"
              type="url"
              placeholder="Paste the Page Display URL"
            />
            <TextField
              v-model="ad_title"
              label="ad_title"
              type="text"
              placeholder="Your Ad Title"
            />

            <TextArea label=" Ad Message" v-model="ad_message" />
            <TextArea label=" Ad Description" v-model="ad_description" />

            <TextField
              v-model="ad_image_url"
              label="Ad Image URl"
              type="url"
              placeholder="Insert Your Image URL"
            />
          </v-card-text>
          <v-divider class="mt-2"></v-divider>
          <v-card-actions>
            <v-btn text @click="clear">Cancel</v-btn>
            <v-spacer></v-spacer>

            <v-btn color="success" @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
    <h2 class="text-center subheading py-3">{{ form }}</h2>
  </v-row>
</template>
