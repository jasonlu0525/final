<template>
  <div
    class="modal fade"
    id="detailModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
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

        <div class="modal-body" v-if="singleData.user">
          <h3 class="text-center bg-dark text-white py-3 mb-3">顧客資料</h3>

          <template v-if="editor.canEdit">
            <Form
              v-slot="{ errors }"
              class="mb-3"
              @submit.prevent="
                $emit('emit-update-order', {
                  id: editor.temp.id,
                  config: editor.temp,
                  index: editor.temp.num - 1,
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
                    v-model="editor.temp.user.name"
                    rules="required"
                    placeholder="請輸入姓名"
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
                    v-model="editor.temp.user.email"
                    :class="{ 'is-invalid': errors['email'] }"
                    rules="email|required"
                    placeholder="請輸入 Email"
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
                    v-model="editor.temp.user.tel"
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
                    v-model="editor.temp.user.address"
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
                    v-model="editor.temp.message"
                    :class="{ 'is-invalid': errors['留言'] }"
                    placeholder="請輸入留言"
                    as="textarea"
                  ></field>
                  <error-message name="留言" class="invalid-feedback"></error-message>
                </div>
              </section>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-dark text-white me-3"
                  @click="editor.canEdit = false"
                >
                  取消
                </button>
                <button type="submit" class="btn btn-primary text-white">更新</button>
              </div>
            </Form>
          </template>

          <template v-else>
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
                <label for="message" class="form-label">留言</label>
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
          </template>

          <button
            class="btn btn-primary d-block ms-auto mb-3"
            type="button"
            @click="(editor.canEdit = true), (editor.temp = JSON.parse(JSON.stringify(singleData)))"
            v-if="editor.canEdit === false"
          >
            編輯
          </button>

          <setion>
            <h3 class="text-center bg-dark text-white py-3 mb-3">訂單資料</h3>
          </setion>
          <table class="table">
            <tbody>
              <tr>
                <th>訂單編號</th>
                <td>{{ singleData.id }}</td>
              </tr>
              <tr>
                <th scope="row">訂單日期</th>
                <td>{{ new Date(singleData.create_at * 1000).toLocaleDateString() }}</td>
              </tr>
              <tr>
                <th scope="row">訂單狀態</th>
                <td>{{ singleData.is_paid ? '已處理' : '未處理' }}</td>
              </tr>
              <tr>
                <th scope="row">訂單明細</th>
                <td>
                  <ul class="ps-0 mb-0">
                    <li
                      v-for="(item, index) in Object.values(singleData.products)"
                      :key="index"
                      class="d-flex justify-content-between"
                    >
                      {{ item.product.title }} <span> {{ item.qty }} 件</span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="text-end">總金額 {{ singleData.total }} 元</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailModalModel from '@/components/utils/DetailModalModel';

export default {
  ...detailModalModel,
};
</script>
