<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ""
    },
    typeOfInput: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: () => ""
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  },
  data: () => ({
    content: "",
    errorMessages: "",
    formCheck: [v => (!v?.length ? "This field is really required" : "")]
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
    :ref="content"
    v-model="content"
    :type="typeOfInput"
    clearable
    outlined
    :rules="formCheck"
    :label="label"
    :error-messages="errorMessages"
    :placeholder="placeholder"
    required
  ></v-text-field>
</template>
