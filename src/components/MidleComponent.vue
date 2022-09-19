<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <h2>Quản Lý Món Ăn</h2>
    <div class="row pb-5">
      <div class="col-9 p-0">
        <input class="form-control form-control-dark w-100" v-model="searchName" type="text" placeholder="Search"
               aria-label="Search">
      </div>
      <div class="col-3 p-0 d-flex justify-content-start">
        <button class="btn btn-primary mr-4" @click="handleClickSearch(searchName)"> Search</button>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
          Thêm Món Ăn
        </button>
      </div>
    </div>
    <user-list-component></user-list-component>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <add-user-component></add-user-component>
    </div>

  </main>
</template>

<script>
import UserListComponent from "@/components/UserListComponent";
import {mapActions} from "vuex"
import AddUserComponent from "@/components/AddUserComponent";


export default {
  name: "MidleComponent",

  state() {
    return {
      searchName: ''
    }
  },

  methods: {
    // handleClickSearch(){
    //   this.$store.dispatch('searchNameMutation', this.searchName)
    // }
    ...mapActions({
      handleClickSearch: 'searchNameAction',
    })

  },

  components: {
    UserListComponent,
    AddUserComponent
  },
}
</script>

<style scoped>

</style>
