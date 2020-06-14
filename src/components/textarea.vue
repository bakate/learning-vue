<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: () => ""
    }
  },
  data: () => ({
    content: "",
    formCheck: [v => (!v?.length ? "This field is really required" : "")]
  })
};
</script>

<template>
  <v-textarea
    clearable
    auto-grow
    rows="1"
    outlined
    v-model="content"
    :rules="formCheck"
    :label="label"
  ></v-textarea>
</template>
