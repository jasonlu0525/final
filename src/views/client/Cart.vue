<template>
  <div class="container" id="vue-shpopping-cart">
    <div class="row justify-content-center">
      <h1 class="text-center mb-3">我的購物車</h1>
      <div class="col-lg-8 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="row g-0 d-none d-md-flex">
                <th scope="col" class="col-5">品項</th>
                <th scope="col" class="col-2">單價</th>
                <th scope="col" class="col-2">數量</th>
                <th scope="col" class="col-2">金額</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <CartTables
                :propShoppingCart="cartData"
                @emit-delete-cart="refreshCart"
                @emit-delete-all-cart="refreshCart"
                @emit-put-cart="refreshCart"
              ></CartTables>
            </tbody>
          </table>
        </div>

        <div id="totalPrice" class="">總計 - NT$ {{ cartData.final_total }} 元</div>
      </div>

      <div class="col-lg-4">
        <Form @submit="onSubmit" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <field
              id="email"
              name="email"
              type="email"
              class="form-control"
              v-model="orderInfo.email"
              :class="{ 'is-invalid': errors['email'] }"
              rules="email|required"
              placeholder="請輸入 Email"
            ></field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">姓名</label>
            <field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              v-model="orderInfo.name"
              rules="required"
              placeholder="請輸入姓名"
            ></field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">電話</label>
            <field
              id="phone"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              v-model="orderInfo.tel"
              :rules="isPhone"
              placeholder="請輸入電話"
            ></field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">地址</label>
            <field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              rules="required"
              v-model="orderInfo.address"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
            ></field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <field
              id="message"
              name="留言"
              type="text"
              class="form-control"
              rules="required"
              v-model="message"
              :class="{ 'is-invalid': errors['留言'] }"
              placeholder="請輸入留言"
              as="textarea"
            ></field>
            <error-message name="留言" class="invalid-feedback"></error-message>
          </div>

          <button class="btn btn-primary" type="submit" :disabled="cartData === ''">
            送出訂單
          </button>
        </Form>

        <!--
        <shopping-car-submit-form @emit-clear-cart="on_clear_cart" :prop-cart-data="cartsList">
        </shopping-car-submit-form> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { Modal } from 'bootstrap';
import commonPackage from '@/components/utils/commonPackage';
import CartTables from '@/components/CartTable.vue';

export default {
  components: {
    CartTables,
  },
  setup() {
    const { getCart, postOrder } = commonPackage();
    const cartData = ref({});
    getCart().then((result) => {
      cartData.value = result.data.data;
    });

    const orderInfo = ref({
      email: '',
      name: '',
      tel: '',
      address: '',
    });

    const message = ref('');

    const refreshCart = (newCartdata = { carts: [], total: 0, final_total: 0 }) => {
      // 刪除之後 新的 cartData
      cartData.value = newCartdata;
    };

    const onSubmit = (values, { resetForm }) => {
      postOrder({ orderInfo: orderInfo.value, message: message.value })
        .then(() => {
          refreshCart();
          resetForm();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    };

    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    };

    return {
      cartData,
      refreshCart,

      message,
      orderInfo,

      onSubmit,

      isPhone,
    };
  },
};
</script>
