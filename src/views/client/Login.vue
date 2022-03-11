<template>
  <div class="container-fluid bg bg-login bg-mask--dark">
    <div class="row justify-content-center align-items-center vh-100">
      <section class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-4 gx-xs-4 gx-lg-5">
        <h1 class="text-center text-white mb-5 display-5 fw-normal">後台管理</h1>
        <Form @submit="login" v-slot="{ errors }" class="bg-white rounded-3 p-4 p-sm-5 p-lg-5">
          <div class="mb-4 mb-sm-5 mb-lg-5">
            <label for="email" class="mb-3 fs-4 fs-xs-3 fs-sm-1">帳號</label>
            <field
              type="email"
              name="帳號"
              class="form-control fs-xs-4 fs-sm-2"
              :class="{ 'is-invalid': errors['帳號'] }"
              id="email"
              placeholder="name@example.com"
              rules="required|email"
              v-model="user.username"
            >
            </field>
            <error-message name="帳號" class="fs-6 fs-xs-5 mt-2 invalid-feedback"></error-message>
          </div>
          <div class="mb-4 mb-sm-5 mb-lg-5">
            <label for="password" class="mb-3 fs-4 fs-xs-3 fs-sm-1">密碼</label>
            <field
              type="password"
              name="密碼"
              class="form-control fs-xs-4 fs-sm-2"
              :class="{ 'is-invalid': errors['密碼'] }"
              id="password"
              placeholder="請輸入密碼"
              v-model="user.password"
              rules="required"
              autocomplete
            >
            </field>
            <error-message name="密碼" class="fs-6 fs-xs-5 mt-2 invalid-feedback"></error-message>
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100 fs-4 fs-sm-1"
            :disabled="Object.keys(errors).length > 0"
          >
            登入
          </button>
        </Form>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.bg-login {
  background-image: url(https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100);
}

// https: //images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=
// rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import commonPackage from '@/components/utils/commonPackage';

const router = useRouter();
const { postLogin } = commonPackage();
const user = ref({
  username: '',
  password: '',
});

const login = () => {
  postLogin(user.value, false).then((result) => {
    const { token, expired } = result.data;

    document.cookie = `user=${token};expires=${new Date(expired)};path=/`;

    router.replace('dashboard');
  });
};
</script>
