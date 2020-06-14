<script>
export default {
  props: ["value", "type", "label", "placeholder"],
  data: () => ({
    errorMessages: "",
    formHasErrors: false,
    formCheck: [v => !!v || "This field is really required"]
  }),
  watch: {
    name() {
      this.errorMessages = "";
    }
  }
};
</script>
<template>
  <v-text-field
    :type="type"
    @input="$emit('input', $event)"
    :value="value"
    clearable
    outlined
    :rules="formCheck"
    :label="label"
    :error-messages="errorMessages"
    :placeholder="placeholder"
    required
  ></v-text-field>
</template>
