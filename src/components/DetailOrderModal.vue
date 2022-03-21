<template>
  <div
    ref="detailModalDom"
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">詳細資訊</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="editor.canEdit = false"
          ></button>
        </div>

        <div class="modal-body" v-if="editor.data.user">
          <h3 class="text-center bg-dark text-white py-3 mb-3">顧客資料</h3>

          <!-- <template v-if="editor.canEdit"> -->
          <Form
            ref="form"
            v-slot="{ errors }"
            class="mb-3"
            @submit="
              $emit('emit-update-order', {
                id: editor.data.id,
                config: editor.data,
                index: editor.data.num - 1,
                $currentPage: editor.currentPage,
              })
            "
          >
            <section class="mb-3">
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>

                <field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  v-model="editor.data.user.name"
                  rules="required"
                  placeholder="請輸入姓名"
                  :readonly="!editor.canEdit"
                ></field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  v-model="editor.data.user.email"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email|required"
                  placeholder="請輸入 Email"
                  :readonly="!editor.canEdit"
                ></field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">電話</label>
                <field
                  id="phone"
                  name="電話"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  v-model="editor.data.user.tel"
                  :rules="isPhone"
                  placeholder="請輸入電話"
                  :readonly="!editor.canEdit"
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
                  v-model="editor.data.user.address"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  :readonly="!editor.canEdit"
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
                  v-model="editor.data.message"
                  placeholder="請輸入留言"
                  as="textarea"
                  :readonly="!editor.canEdit"
                ></field>
              </div>
            </section>

            <button
              class="btn btn-primary d-block ms-auto mb-3"
              type="button"
              @click="
                (editor.canEdit = true),
                  (editor.readonlyData = JSON.parse(JSON.stringify(editor.data)))
              "
              v-if="editor.canEdit === false"
            >
              編輯
            </button>

            <div class="d-flex justify-content-end" v-if="editor.canEdit">
              <button
                type="button"
                class="btn btn-dark text-white me-3"
                @click="
                  (editor.canEdit = false),
                    (editor.data = JSON.parse(JSON.stringify(editor.readonlyData)))
                "
              >
                取消
              </button>
              <button
                type="submit"
                class="btn btn-primary text-white"
                :disabled="Object.keys(errors).length > 0"
              >
                更新
              </button>
            </div>
          </Form>

          <section>
            <h3 class="text-center bg-dark text-white py-3 mb-3">訂單資料</h3>
          </section>
          <table class="table">
            <tbody>
              <tr>
                <th>訂單編號</th>
                <td>{{ editor.data.id }}</td>
              </tr>
              <tr>
                <th scope="row">訂單日期</th>
                <td>{{ new Date(editor.data.create_at * 1000).toLocaleDateString() }}</td>
              </tr>
              <tr>
                <th scope="row">訂單狀態</th>
                <td>{{ editor.data?.is_paid ? '已處理' : '未處理' }}</td>
              </tr>
              <tr>
                <th scope="row">訂單明細</th>
                <td>
                  <ul class="ps-0 mb-0">
                    <li
                      v-for="(item, index) in Object.values(editor.data.products)"
                      :key="index"
                      class="d-flex justify-content-between"
                    >
                      {{ item.product.title }} <span> {{ item.qty }} 件</span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="text-end">總金額 {{ editor.data.total }} 元</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import detailModalModel from '@/components/utils/DetailModalModel';

import { ref, defineExpose, watch } from 'vue';
import { Modal } from 'bootstrap';

const detailModalDom = ref(null);
let detailModal = null;
const form = ref(null);

const editor = ref({
  canEdit: false,
  data: {},
  readonlyData: {},
  currentPage: 1, // 目前頁面在第幾頁，預設為第 1 頁
});

const generateModal = () => {
  detailModal = new Modal(detailModalDom.value);
  detailModal.show();
};

const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : '需要正確的電話號碼';
};

watch(editor, () => {
  // editor.value.readonlyData = editor.value.data;
});

defineExpose({
  detailModalDom,
  generateModal,
  editor,
});
</script>

<!-- </template> -->

<!-- <template v-else>
            <section class="mb-3">
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>

                <input
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  v-model="singleData.user.name"
                  placeholder="請輸入姓名"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  v-model="singleData.user.email"
                  placeholder="請輸入 Email"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">電話</label>
                <input
                  id="phone"
                  name="電話"
                  type="text"
                  class="form-control"
                  v-model="singleData.user.tel"
                  placeholder="請輸入電話"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <input
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  v-model="singleData.user.address"
                  placeholder="請輸入地址"
                  readonly
                />
              </div>

              <div class="mb-3">
                <input
                  id="message"
                  name="留言"
                  type="text"
                  class="form-control"
                  v-model="singleData.message"
                  placeholder="請輸入留言"
                  as="textarea"
                  readonly
                />
              </div>
            </section>
          </template> -->

<!-- <button
            class="btn btn-primary d-block ms-auto mb-3"
            type="button"
            @click="(editor.canEdit = true), (editor.temp = JSON.parse(JSON.stringify(singleData)))"
            v-if="editor.canEdit === false"
          >
            編輯
          </button> -->
