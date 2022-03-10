<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center" id="app">
    <div class="row justify-content-center w-100">
      <div class="col-md-6 col-lg-3 bg-white rounded p-5 content-box">
        <form @submit.prevent="login">
          <h1 class="fw-bold mb-3">請先登入</h1>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="Email1"
              aria-describedby="email"
              placeholder="Email address"
              v-model.trim="loginData.username"
            />
            <label for="Email1">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Password"
              v-model="loginData.password"
            />
            <label for="Password">Password</label>
          </div>

          <button type="submit" class="btn btn-primary w-100">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import commonPackage from '@/components/utils/commonPackage';

export default {
  setup() {
    const router = useRouter();
    const { postLogin } = commonPackage();
    const loginData = ref({
      username: '',
      password: '',
    });

    const login = () => {
      console.log(loginData, loginData.value);
      postLogin(loginData.value).then((result) => {
        const { token, expired } = result.data;

        document.cookie = `user=${token};expires=${new Date(expired)};path=/`;

        router.replace('dashboard');
      });
    };

    return { loginData, login };
  },
};
</script>
