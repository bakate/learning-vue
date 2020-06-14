<script>
export default {
  props: ["label", "value"],

  data: () => ({
    formCheck: [v => (!v?.length ? "This field is really required" : "")]
  })
};
</script>

<template>
  <v-textarea
    clearable
    auto-grow
    :value="value"
    rows="1"
    outlined
    @input="$emit('input', $event)"
    :rules="formCheck"
    :label="label"
  ></v-textarea>
</template>
