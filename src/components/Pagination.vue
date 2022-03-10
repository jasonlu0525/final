<template v-if="propPagination">
  <ul class="pagination justify-content-end mb-0">
    <li
      class="page-item"
      :class="{ disabled: !propPagination.has_pre }"
      @click.prevent="
        changePage({
          hasPrevOrNextPage: propPagination.has_pre,
          page: propPagination.current_page - 1,
        })
      "
    >
      <a class="page-link" href="#">上一頁</a>
    </li>

    <li
      class="page-item"
      :class="{ active: item === propPagination.current_page }"
      v-for="item in propPagination.total_pages"
      :key="item"
      @click.prevent="
        changePage({
          hasPrevOrNextPage: true,
          page: item,
        })
      "
    >
      <a class="page-link" href="#"> {{ item }} </a>
    </li>

    <li
      class="page-item"
      :class="{ disabled: !propPagination.has_next }"
      @click.prevent="
        changePage({
          hasPrevOrNextPage: propPagination.has_next,
          page: propPagination.current_page + 1,
        })
      "
    >
      <a class="page-link" href="#">下一頁</a>
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
