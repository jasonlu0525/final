<template>
  <section class="container">
    <h2>產品</h2>
    <ul class="mb-0">
      <li>
        <a href="#" class="d-block" data-bs-toggle="offcanvas" data-bs-target="#shpping-cart"
          >購物車 <i class="bi bi-cart-fill"></i>
        </a>
      </li>
    </ul>

    <offfanvas-shopping-cart
      :prop-shopping-cart="cartData"
      @emit-delete-cart="refreshCart"
      @emit-put-cart="refreshCart"
    ></offfanvas-shopping-cart>
    <div class="row justify-content-end">
      <div class="col-lg-10 mb-3">
        <ul class="row list-unstyled">
          <li
            class="col-md-6 col-lg-4 mb-3 p-3"
            v-for="item in productData.products"
            :key="item.id"
          >
            <div class="card">
              <div class="card-hover">
                <img :src="item.imageUrl" class="card-img card-img-top" :alt="item.description" />

                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <p>
                    原價 :<del> {{ item.origin_price.toLocaleString() }}元</del>/{{ item.unit }}
                  </p>
                  <p>特價 : {{ item.price.toLocaleString() }}元/{{ item.unit }}</p>
                  <div class="row">
                    <div class="col-6">
                      <a
                        href="#"
                        class="w-100 btn btn-primary stretcked-link"
                        @click.prevent="addToCart({ product_id: item.id, qty: 1 })"
                        >加入購物車</a
                      >
                    </div>
                    <div class="col-6">
                      <router-link
                        class="w-100 btn btn-secondary stretcked-link"
                        :to="`/product/${item.id}`"
                        >了解更多</router-link
                      >
                      <!-- <a
                        href="#"
                        class="w-100 btn btn-secondary stretcked-link"
                        @click.prevent="createModal(item)"
                        >了解更多</a
                      > -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <detail-product-modal
          ref="detailModalDom"
          @emit-add-to-cart="addToCart"
        ></detail-product-modal>

        <pagination
          v-if="productData.products"
          :prop-pagination="productData.pagination"
          @emit-change-page="onChangePage"
        ></pagination>
      </div>
    </div>

    <!-- <shopping-cart
      :prop-shopping-cart="cartsList"
      @emit-change-qty="on_changeQty"
      @emit-delete-cart="on_deleteCart"
    ></shopping-cart> -->
  </section>
</template>

<script>
// inject
import { ref } from 'vue';
import { Modal } from 'bootstrap';
// import axios from 'axios';
import commonPackage from '@/components/utils/commonPackage';
import pagination from '@/components/Pagination.vue';
import offfanvasShoppingCart from '@/components/CartOffcanvas.vue';
import detailProductModal from '@/components/DetailProductModal.vue';

// axios.delete('https://vue3-course-api.hexschool.io/v2/api/jason/carts');

export default {
  components: {
    pagination,
    detailProductModal,
    offfanvasShoppingCart,
  },
  setup() {
    const { getProduct, postCart, getCart } = commonPackage();
    const productData = ref({});
    const cartData = ref({});
    const detailModalDom = ref(null);

    getProduct().then((result) => {
      productData.value = result.data;
    });
    getCart().then((result) => {
      cartData.value = result.data.data;
    });

    const onChangePage = (page) => {
      getProduct(page).then((result) => {
        productData.value = result.data;
      });
    };

    const addToCart = function (prodcutInfo) {
      postCart(prodcutInfo)
        .then(() => {
          getCart(false).then((result) => {
            cartData.value = result.data.data;
          });
        })
        .catch((err) => {
          alert(err.respondse.data.message);
        });
    };

    const refreshCart = (newCartdata) => {
      // 刪除之後 新的 cartData
      cartData.value = newCartdata;
    };

    const createModal = (singleProductObj) => {
      detailModalDom.value.detailModal = new Modal(document.querySelector('#detailModal')).show();

      detailModalDom.value.singleData = singleProductObj;
    };

    return {
      productData,
      cartData,
      detailModalDom,
      onChangePage,
      addToCart,
      createModal,
      refreshCart,
    };
  },
};
</script>
