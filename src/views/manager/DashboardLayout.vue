<template>
  <nav class=" py-3 dashboard-menu vh-auto vh-lg-100 navbar-light navbar-expand-lg">
    <section class="mb-lg-5 px-3 position-relative">
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
      <h1
        class="mb-0 text-white text-center fs-3 position-absolute top-50 start-50
        translate-middle position-lg-static translate-middle-lg-y-0"
      >
        MR.PREPARE
      </h1>
    </section>

    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center order-last order-lg-first
        p-3">
          <img
            class="rounded-circle dashboard-body-image"
            width="96"
            height="96"
            src="https://randomuser.me/api/portraits/men/74.jpg"
            alt="user"
          />
          <a href="#" class="material-icons fs-2 text-dark"> logout </a>
        </div>

        <ul class="navbar-nav flex-wrap">
          <li class="w-100">
            <router-link class="nav-link  p-3 ps-8  pb-7" to="/dashboard/">訂單管理</router-link>
          </li>
          <li class="w-100">
            <router-link class="nav-link p-3 ps-8 pb-7" to="/dashboard/product">產品管理</router-link>
          </li>
          <li class="w-100">
            <router-link class="nav-link p-3 ps-8 pb-7" to="/dashboard/coupon">優惠券管理</router-link>
          </li>
          <li class="w-100" to="/"> <a href="#" class="nav-link p-3 ps-8 pb-7"
           rel="noopener noreferrer">回到前台</a> </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row justify-content-center dashboard-body overflow-hidden py-4">
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

.dashboard-body {
  &-image {
    width: 48px;
    height: 48px;
    @include media-breakpoint-up(lg) {
      width: 96px;
      height: 96px;
    }
  }

  @include media-breakpoint-up(lg) {
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
