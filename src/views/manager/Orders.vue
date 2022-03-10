<template>
  <table class="table table-hover">
    <thead>
      <tr class="">
        <th scope="col">訂單編號</th>
        <th scope="col">聯絡人</th>
        <th scope="col">聯絡地址</th>
        <th scope="col">電子郵件</th>
        <th scope="col">訂單品項</th>
        <th scope="col">訂單日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">操作</th>
      </tr>
    </thead>

    <template v-if="orderData.hasOwnProperty('orders') && orderData.orders.length > 0">
      <tbody>
        <tr v-for="(item, index) in orderData.orders" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.address }}</td>
          <td>{{ item.user.email }}</td>

          <td>
            <ul class="ps-0 mb-0">
              <li v-for="(item, index) in Object.values(item.products)" :key="index" class="mb-3">
                {{ item.product.title }}-{{ item.product.price }} 元 * {{ item.qty }}
                {{ item.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ new Date(item.create_at * 1000).toLocaleDateString() }}</td>
          <td :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
            {{ item.is_paid ? '已付款' : '未付款' }}
          </td>
          <td :class="{ 'text-success': item.is_paid, 'text-danger': !item.is_paid }">
            <button
              class="btn btn-info d-block w-100 mb-3 text-white"
              type="button"
              @click="openDataModal({ item, index })"
            >
              詳細資訊
            </button>
            <button
              class="btn btn-danger d-block w-100 text-white"
              type="button"
              @click="deleteSingleOrder({ id: item.id, index })"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </template>
    <tbody v-else-if="orderData.hasOwnProperty('orders') && orderData.orders.length === 0">
      <tr>
        <td colspan="8"><h2 class="text-danger text-center">目前還沒有訂單</h2></td>
      </tr>
    </tbody>
  </table>

  <div class="d-flex justify-content-between">
    <button
      class="btn btn-danger bg-danger"
      type="button"
      @click="deleteAllOrders()"
      :disabled="orderData.hasOwnProperty('orders') && orderData.orders.length === 0"
    >
      刪除全部訂單
      {{
        orderData.hasOwnProperty('orders') && orderData.orders.length === 0
          ? '(目前沒有訂單，因此不能刪除訂單 )'
          : ''
      }}
    </button>
    <pagination
      v-if="orderData.pagination"
      :propPagination="orderData.pagination"
      @emit-change-page="orderChangePage"
    ></pagination>
  </div>
  <detail-order-modal ref="detailModalDom" @emit-update-order="updateOrder"></detail-order-modal>
</template>
<script>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import pagination from '@/components/Pagination.vue';
import commonPackage from '@/components/utils/commonPackage';
import detailOrderModal from '@/components/DetailOrderModal.vue';

export default {
  components: {
    pagination,
    detailOrderModal,
  },
  setup() {
    const {
      getAdminOrder, deleteOrder, deleteOrders, putOrder,
    } = commonPackage();

    const orderData = ref({});
    const detailModalDom = ref(null);

    getAdminOrder({})
      .then((result) => {
        orderData.value = result.data;

        console.log(orderData.value);
      })
      .catch((err) => {
        console.dir(err);
      });

    const deleteSingleOrder = (deleteMessage) => {
      deleteOrder({ id: deleteMessage.id })
        .then(() => {
          // 在 request 前先處理畫面，把產品刪掉
          orderData.value.orders.splice(deleteMessage.index, 1);

          return getAdminOrder({ generateLoader: false });
        })
        .catch(() => {})
        .then((result) => {
          orderData.value = result.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    const deleteAllOrders = () => {
      deleteOrders({}).then(() => {
        orderData.value.orders = []; // 直接將 orders 清空，減少一次 GET 請求
      });
    };

    const orderChangePage = (page) => {
      getAdminOrder({ page }).then((result) => {
        orderData.value = result.data;

        detailModalDom.value.editor.currentPage = page; // 把現在的頁碼 傳送給 modal ， 讓訂單更新之後請求該訂單所在的頁碼
      });
    };

    const openDataModal = ({ item }) => {
      detailModalDom.value.detailModal = new Modal(document.querySelector('#detailModal')).show();
      detailModalDom.value.singleData = item; // 把訂單的資料傳入 modal

      // detailModalDom.value.editor.index = index;
      // 把要訂單的 index 索引， 傳入 modal 元件 ， 用於將更新後的資料 寫回 modal 的資料
    };

    const updateOrder = ({
      id, // 訂單 id
      config, // 帶上的參數
      index, // 該筆訂單在陣列中的位置
      $currentPage, // 該筆訂單在第幾頁
    }) => {
      putOrder({ id, config, index })
        .then(() => getAdminOrder({ generateLoader: false, page: $currentPage }))
        .then((result) => {
          orderData.value = result.data;

          detailModalDom.value.editor.canEdit = false;
          detailModalDom.value.singleData = orderData.value.orders[index];
          // 將更新後的資料 寫回 modal  ( 使用 orderChangePage() 寫入的 index  )
        });
    };

    return {
      orderData,
      deleteSingleOrder,
      deleteOrders,
      deleteAllOrders,
      orderChangePage,

      detailModalDom,
      openDataModal,

      updateOrder,
    };
  },
};
</script>
