<template>
  <div class="pagination">
    <ul :v-bind="pagination" v-for="(page, i) in pages" :key="i">
      <li @click="handlePagination(i + 1)">{{ i + 1 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pagination', 'handlePagination'],
  data() {
    const pages = Array(this.pagination.totalPages)
    return {
      pages
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  background-color: #28b5f67e;
  padding: 1rem;

  & ul {
    list-style: none;
    margin: 0 1rem;
    padding: 0;
    background-color: #28b5f6;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: #1B6DDD;
    & li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>