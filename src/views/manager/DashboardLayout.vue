<template>
  <nav
    class="py-3 py-lg-8 dashboard-menu bg-dark text-white navbar-dark navbar-expand-lg
    d-lg-flex flex-lg-column vh-auto vh-lg-100"
  >
    <section class="mb-lg-11 px-3 px-lg-8 position-relative">
      <button
        class="navbar-toggler d-lg-none"
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

    <div
      class="collapse navbar-collapse align-items-lg-stretch flex-lg-column mt-7 mt-lg-0
      justify-content-lg-between"
      id="navbarToggleExternalContent"
    >
      <ul class="navbar-nav d-lg-block">
        <li class="">
          <router-link
            class="nav-link p-3 ps-8 pb-7 d-flex align-items-center"
            :to="{ name: 'orders' }"
          >
            <span class="material-icons-outlined me-4"> local_shipping </span>
            訂單管理</router-link
          >
        </li>
        <li class="">
          <router-link
            class="nav-link p-3 ps-8 pb-7 d-flex align-items-center"
            to="/dashboard/product"
          >
            <span class="material-icons-outlined me-4"> inventory </span>
            產品管理</router-link
          >
        </li>
        <li class="">
          <router-link
            class="nav-link p-3 ps-8 pb-7 d-flex align-items-center"
            to="/dashboard/coupon"
          >
            <span class="material-icons-outlined me-4"> discount </span>
            <span> 優惠券管理</span></router-link
          >
        </li>
        <li class="">
          <router-link
            class="nav-link p-3 ps-8 pb-7 d-flex align-items-center"
            to="/dashboard/article"
          >
            <span class="material-icons-outlined me-4"> article </span>
            <span>文章管理</span></router-link
          >
        </li>
        <li class="">
          <a
            href="#"
            class="nav-link p-3 ps-8 pb-7 d-flex align-items-center"
            rel="noopener noreferrer"
          >
            <span class="material-icons-outlined me-4"> home </span>
            回到前台</a
          >
        </li>
      </ul>

      <div class="btn-group dropend ps-8 align-items-center">
        <a class="d-flex justify-content-between align-items-center py-3" data-bs-toggle="dropdown">
          <img
            class="rounded-circle dashboard-menu-image"
            width="96"
            height="96"
            src="https://randomuser.me/api/portraits/men/74.jpg"
            alt="user"
          />
        </a>
        <section class="ms-4">
          <h4 class="fs-6 mb-1">Jason</h4>
          <small>@gmail.com </small>
        </section>
        <ul class="dropdown-menu rounded-3 p-0" aria-labelledby="dropdownMenuButton1">
          <li class="dropdown-item">
            <a href="#" class="d-flex align-items-center w-100 text-muted py-2">
              <span class="material-icons w-auto text-dark">logout</span>登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="dashboard-body">
    <div class="container-fluid py-8 gx-lg-8">
      <div class="row justify-content-center overflow-hidden">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.dashboard-menu {
  position: sticky;
  left: 0;
  top: 0;
  @include media-breakpoint-up(lg) {
    position: fixed;
    z-index: 999;
    width: 296px;
  }
  &-image {
    width: 48px;
    height: 48px;
    @include media-breakpoint-up(lg) {
      // width: 96px;
      // height: 96px;
    }
  }
}
.dashboard-body {
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

postLoginCheck({ generateLoader: false })
  .then(() => {
    console.log('postLoginCheck');
  })
  .catch((err) => {
    router.push('/login');
    alert(err.response.data.message);
  });
</script>
