<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>

    <h2>Quản Lý Món Ăn</h2>
    <div class="row pb-5">
      <div class="col-9 p-0">
        <input class="form-control form-control-dark w-100"  v-model="searchName" type="text" placeholder="Search"
               aria-label="Search">
      </div>
      <div class="col-3 p-0 d-flex justify-content-start">
        <button class="btn btn-primary mr-4" @click="handleClickSearch"> Search</button>
        <button class="btn btn-danger ">Thêm Món Ăn</button>
      </div>
    </div>
    <user-list-component></user-list-component>

  </main>
</template>

<script>
import UserListComponent from "@/components/UserListComponent";


export default {
  name: "MidleComponent",

  state() {
    return {
      searchName: ''
    }
  },

  methods: {
    handleClickSearch() {
      this.$store.dispatch('searchNameMutation',this.searchName)
    }
  },
  components: {
    UserListComponent
  },
}
</script>

<style scoped>

</style>
