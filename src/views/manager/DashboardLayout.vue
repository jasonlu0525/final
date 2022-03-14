<template>
  <nav class="bg-dark p-3  dashboard-menu  vh-auto  vh-lg-100 navbar-light navbar-expand-lg">
    <section class="mb-lg-5 position-relative">
      <button
        class="navbar-toggler bg-white d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="mb-0 text-white text-center fs-3 position-absolute top-50 start-50 translate-middle
      position-lg-static translate-middle-lg-y-0
     ">MR.PREPARE</h1>
    </section>

    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
      <img
        class="rounded-circle"
        width="96"
        height="96"
        src="https://randomuser.me/api/portraits/men/74.jpg"
        alt="user"
      />
      <ul class="navbar-nav">
        <li><router-link class="nav-link active" to="/dashboard">orders</router-link></li>
        <li><router-link class="nav-link active" to="/dashboard/product">product</router-link></li>
        <li><router-link class="nav-link active" to="/dashboard/coupon">coupon</router-link></li>
        <li></li>
      </ul>
    </div>
  </nav>
<div class="container-fluid">
  <div class="row justify-content-center dashboard-main overflow-hidden py-4">
    <div class="col-lg-10">
      <router-view />
    </div>
  </div>
</div>

</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

#app {
  overflow: hidden;
}

.dashboard-menu {

  width: 100%;

  @include media-breakpoint-up(lg) {
      position: absolute;
  z-index: 999;
    width: 296px;
  }
}
@include media-breakpoint-up(lg) {
  .dashboard-main {
    margin-left: 296px;
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router';

import commonPackage from '@/components/utils/commonPackage';

const { postLoginCheck } = commonPackage();
const router = useRouter();

postLoginCheck({}).catch((err) => {
  router.push('/login');
  alert(err.response.data.message);
});
</script>
