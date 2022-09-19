<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">Thứ Tự</th>
        <th scope="col">Tên Món ăn</th>
        <th scope="col">Nội Dung</th>
        <th scope="col">Hình Ảnh</th>
        <th scope="col">Giá</th>
        <th scope="col">Loại món ăn</th>
        <th scope="col"> Hành Động</th>
      </tr>
      </thead>
      <tbody>

      <user-detail-component v-for="(monAn,index) in monAnListSearchName" :key="index"
                             :monAn="monAn"></user-detail-component>
      </tbody>
    </table>
  </div>
</template>

<script>

import UserDetailComponent from "@/components/UserDetailComponent";
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {


  name: "UserListComponent",
  components: {
    UserDetailComponent
  },
  computed: {
    ...mapState({
      getListMonAn: state => state.monAnList,
    }),

    ...mapGetters([
      'filterLoaiMonAn',
      'monAnListSearchName',
      'deleteMonAnlist'
    ])
  }

}
</script>

<style scoped>

</style>
