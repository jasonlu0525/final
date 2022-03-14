<template>
  <section class="bg-dark p-3 text-center dashboard-menu vh-100 navbar-light">
    <section class="mb-5">
      <h1 class="text-white text-center fs-3">MR.PREPARE</h1>
    </section>
    <button
      class="navbar-toggler text-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <img
      class="rounded-circle"
      width="96"
      height="96"
      src="https://randomuser.me/api/portraits/men/74.jpg"
      alt="user"
    />
    <ul>
      <li><router-link to="/dashboard">orders</router-link></li>
      <li><router-link to="/dashboard/product">product</router-link></li>
      <li><router-link to="/dashboard/coupon">coupon</router-link></li>
      <li></li>
    </ul>
  </section>

  <div class="row justify-content-center dashboard-main overflow-hidden py-4">
    <div class="col-lg-10">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
.dashboard-menu {
  position: absolute;
  width: 296px;
  z-index: 999;
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
