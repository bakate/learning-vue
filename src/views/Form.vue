<script>
export default {
  data: () => ({
    errorMessages: "",
    budget: null,
    startDate: null,
    endDate: null,
    facebook_title: null,
    facebook_text: null,
    facebook_description: null,
    formHasErrors: false,
    formCheck: [v => !!v || "This field is really required"]
  }),

  computed: {
    form() {
      return {
        budget: this.budget,
        startDate: this.startDate,
        endDate: this.endDate,
        facebook_title: this.facebook_title,
        facebook_text: this.facebook_text,
        facebook_description: this.facebook_description
      };
    }
  },

  watch: {
    name() {
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
            <v-text-field
              ref="budget"
              v-model="budget"
              clearable
              prefix="€"
              :rules="formCheck"
              :error-messages="errorMessages"
              label="Monthly budget (in €)"
              placeholder="10,000"
              required
              outlined
              type="number"
            ></v-text-field>
            <v-text-field
              ref="startDate"
              v-model="startDate"
              outlined
              clearable
              type="date"
              :rules="formCheck"
              label="Start Date"
              placeholder="When to start"
              required
            ></v-text-field>
            <v-text-field
              ref="endDate"
              v-model="endDate"
              type="date"
              clearable
              outlined
              :rules="formCheck"
              label="End Date"
              placeholder="When to finish"
              required
            ></v-text-field>
            <v-textarea
              ref="facebook_title"
              v-model="facebook_title"
              clearable
              auto-grow
              rows="1"
              outlined
              :rules="formCheck"
              label="Facebook title"
            ></v-textarea>
            <v-textarea
              ref="facebook_text"
              v-model="facebook_text"
              clearable
              auto-grow
              rows="1"
              outlined
              :rules="formCheck"
              label="Facebook text"
            ></v-textarea>
            <v-textarea
              clearable
              auto-grow
              rows="1"
              outlined
              :rules="formCheck"
              ref="facebook_description"
              v-model="facebook_description"
              label="Facebook Description"
            ></v-textarea>
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
