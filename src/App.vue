<template>
  <router-view />
</template>

<script>
export default {
  name: 'Comp',
  setup() {
    //  const axios = inject('axios'); // inject axios
  },
};
</script>

<style lang="scss">
@import 'bootstrap';
@import '~bootstrap-icons/font/bootstrap-icons.css';

@import './assets/stylesheet/base.scss';
</style>
