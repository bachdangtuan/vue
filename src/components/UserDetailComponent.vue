<template>
  <tr>
    <td>{{ monAn.id }}</td>
    <td>{{ monAn.nameMonAn }}</td>
    <td>{{ monAn.noiDung }}</td>
    <td>{{ monAn.hinhAnh }}</td>
    <td>{{ monAn.gia }}</td>
    <td>{{ monAn.loai }}</td>
    <td>
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger m-lg-2" @click="test(monAn.id)">Xóa</button>
    </td>
  </tr>


</template>

<script>
export default {
  name: "UserDetailComponent",
  props: {
    monAn: {
      type: Object,
    }
  },
  methods: {


    // test(id) {
    //   this.$store.dispatch('deleteNameAction',id)
    // }
    // ...mapActions([
    //   'deleteNameAction'
    // ]),

  },
}
</script>

<style scoped>

</style>
