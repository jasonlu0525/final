<template>
  <template v-if="propShoppingCart.hasOwnProperty('carts') && propShoppingCart.carts.length > 0">
    <tr
      v-for="(item, index) in propShoppingCart.carts"
      :key="index"
      class="row g-0 align-items-center"
    >
      <td class="col-md-5 border-0">
        <div class="d-flex align-items-center">
          <img class="col-6" :src="item.product.imageUrl" alt="" />
          <h3 class="ms-2 fs-4 mb-0">{{ item.product.title }}</h3>
        </div>
      </td>
      <td class="col-md-2 border-0">NT$ {{ item.product.price.toLocaleString() }} 元</td>
      <td class="col-md-2 border-0">
        <div class="fs-4 d-flex align-items-center">
          <span
            class="d-block pe-2 | cursor-pointer"
            @click="
              changeQty({
                config: { qty: item.qty - 1, product_id: item.product_id },
                id: item.id,
              })
            "
            :class="{ 'cursor-not-allowed': item.qty - 1 == 0 }"
          >
            <i class="bi bi-dash"></i>
          </span>
          <input class="col-5 text-center" type="number" readonly :value="item.qty" />
          <span
            class="d-block ps-2 | cursor-pointer"
            @click="
              changeQty({
                config: { qty: item.qty + 1, product_id: item.product_id },
                id: item.id,
              })
            "
          >
            <i class="bi bi-plus"></i>
          </span>
        </div>
      </td>
      <td class="col-md-2 border-0">NT$ {{ item.final_total.toLocaleString() }} 元</td>
      <td class="col-md-1 border-0" @click="emitDeleteCart(item.id)">
        <span class="cursor-pointer"><i class="bi bi-x-lg"></i></span>
      </td>
    </tr>

    <tr v-if="propShoppingCart.carts.length > 0">
      <td class="col-md-1 border-0">
        <button class="btn btn-danger bg-danger" type="button" @click="emitDeleteCartAll()">
          全部刪除
        </button>
      </td>
    </tr>
  </template>

  <template v-else>
    <h2 class="text-danger text-center py-5">尚無資料</h2>
  </template>
</template>

<script>
import CartDataModel from '@/components/utils/CartModel';

export default { ...CartDataModel };
</script>
