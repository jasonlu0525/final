<template>
  <div class="d-flex justify-content-between mb-11">
    <h1 class="mb-0 fs-3">文章管理</h1>
    <button class="btn btn-primary" type="button">新增文章</button>
  </div>

  <div class="table-responsive text-nowrap mb-4">
    <table class="table table-hover mb-0">
      <thead>
        <tr>
          <th scope="row">分類</th>
          <td>產品名稱</td>
          <td>原價</td>
          <td>售價</td>
          <td>是否啟用</td>
          <td>編輯</td>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item, index) in adminProductsData.products" :key="index">
          <th scope="row">{{ item.category }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td :class="{ 'text-success': item.is_enabled, 'text-danger': !item.is_enabled }">
            {{ item.is_enabled ? '已啟用' : '未啟用' }}
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="
                  generateModal({
                    targetModal: adjustProductModalDom,
                    id: item.id,
                    page,
                    coipedData: JSON.parse(JSON.stringify(item)),
                    action: 'put',
                  })
                "
              >
                編輯</button
              ><button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="
                  generateModal({
                    targetModal: deleteModalDom,
                    id: item.id,
                    page,
                    action: 'delete',
                  })
                "
              >
                刪除
              </button>

            </div>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>

  <!-- <pagination
    v-if="adminProductsData.pagination"
    :propPagination="adminProductsData.pagination"
    @emit-change-page="productChangePage"
  ></pagination> -->
</template>

<script setup>
// import { ref } from 'vue';
// import pagination from '@/components/Pagination.vue';
// import deleteModal from '@/components/DeleteModal.vue';
// import adjustProductModal from '@/components/AdjustProductModal.vue';
// import commonPackage from '@/components/utils/commonPackage';

// const {
//   getAdminProducts,

//   deleteAdminProduct,
//   putAdminProduct,
//   postAdminProduct,
// } = commonPackage();
// const adminProductsData = ref({});
// const deleteModalDom = ref(null); // 元件
// const adjustProductModalDom = ref(null);

// getAdminProducts({}).then((result) => {
//   adminProductsData.value = result.data;
// });

// const productChangePage = (page) => {
//   getAdminProducts({ page }).then((result) => {
//     adminProductsData.value = result.data;
//   });
// };

// const deleteSingleProduct = ({ id, page }) => {
//   deleteAdminProduct({ id })
//     .then(() => getAdminProducts({ page }))

//     .then((result) => {
//       adminProductsData.value = result.data;
//     });
// };

// const generateModal = ({
//   targetModal, // 要打開的 modal 元件
//   id, // 編輯功能會用到 id
//   page = adminProductsData.value.pagination.current_page, // 打開 modal 時在第幾頁，必填
//   coipedData = {}, // 複製的資料 | 新增功能預設帶入空物件
//   action = 'put', // 請求方法 ，必填
// }) => {
//   //  targetModal 已
//   targetModal.genertaeModal({
//     id,
//     page,
//     coipedData,
//     action,
//   });
// };

// const onAddNewProduct = (modalData) => {
//   postAdminProduct({ config: modalData.copiedData })
//     .then(() => getAdminProducts({ page: modalData.page, generateLoader: false }))
//     .then((result) => {
//       adminProductsData.value = result.data;
//     });
// };
// const onEditProduct = (modalData) => {
//   putAdminProduct({ id: modalData.id, config: modalData.copiedData })
//     .then(() => getAdminProducts({ page: modalData.page, generateLoader: false }))

//     .then((result) => {
//       adminProductsData.value = result.data;
//     });
// };
</script>
