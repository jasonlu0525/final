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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
@import '~bootstrap-icons/font/bootstrap-icons.css';
@import '../node_modules/bootstrap/scss/functions'; //  variables.scss 依賴 functions
@import '../node_modules/bootstrap/scss/mixins';
@import './assets/stylesheet/helpers/variables'; // util.scss 依賴  variables
@import './assets/stylesheet/util.scss';
@import './assets/stylesheet/base.scss';
@import '~bootstrap/scss/bootstrap';
@import './assets/stylesheet/vendors/sweeralert';
</style>
