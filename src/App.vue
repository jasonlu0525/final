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
// @import 'bootstrap';
// @import '~bootstrap-icons/font/bootstrap-icons.css';

// @import './assets/stylesheet/base.scss';

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

@import '~bootstrap-icons/font/bootstrap-icons.css';

@import './assets/stylesheet/base.scss';

@import '../node_modules/bootstrap/scss/functions';
@import '../node_modules/bootstrap/scss/variables';
@import '../node_modules/bootstrap/scss/mixins';

@import './assets/stylesheet/util.scss';

@import '~bootstrap/scss/bootstrap';
</style>
