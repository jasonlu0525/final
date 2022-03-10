<template>
  <div
    class="modal fade"
    id="detailModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    ref="test"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">{{ singleData.title }}</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <img :src="singleData.imageUrl" class="h-100" />
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-between">
              <div>
                <span class="badge bg-primary mb-3">
                  {{ singleData.category }}
                </span>
                <p class="mb-3">{{ singleData.description }}</p>
                <p>
                  NT$ {{ singleData.price }}
                  <del>{{ singleData.origin_price }}</del>
                </p>
              </div>

              <button
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
                @click="
                  $emit('emit-addToCart', {
                    product_id: singleData.id,
                    qty: 1,
                  })
                "
              >
                加入購物車
              </button>
            </div>
          </div>
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
