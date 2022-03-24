<template v-if="propPagination">
  <ul class="pagination justify-content-end mb-0">
    <li
      v-if="propPagination.has_pre"
      class="page-item"
      :class="{ disabled: !propPagination.has_pre }"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="
          changePage({
            hasPrevOrNextPage: propPagination.has_pre,
            page: propPagination.current_page - 1,
          })
        "
      >
        ＜
      </a>
    </li>

    <li
      class="page-item"
      :class="{ active: item === propPagination.current_page }"
      v-for="item in propPagination.total_pages"
      :key="item"
    >
      <a
        v-if="item !== propPagination.current_page"
        class="page-link"
        href="#"
        @click.prevent="
          changePage({
            hasPrevOrNextPage: true,
            page: item,
          })
        "
      >
        {{ item }}
      </a>
      <span class="page-link" v-else>{{ item }}</span>
    </li>

    <li
      v-if="propPagination.has_next"
      class="page-item"
      :class="{ disabled: !propPagination.has_next }"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="
          changePage({
            hasPrevOrNextPage: propPagination.has_next,
            page: propPagination.current_page + 1,
          })
        "
      >
        >
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['propPagination'],
  setup(props, { emit }) {
    const changePage = function (pageInfo) {
      if (!pageInfo.hasPrevOrNextPage) {
        return;
      }
      emit('emit-change-page', pageInfo.page);
    };
    return {
      changePage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
