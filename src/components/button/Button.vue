<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      Type: String,
      Required: true,
    },
  },
};
</script>
<style></style>
