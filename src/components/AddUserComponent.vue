<template>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Thêm Món Ăn</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Tên Món Ăn</label>
              <input type="text" v-model="nameMonAn" class="form-control" id="" placeholder="Tên món ăn">
            </div>
            <div class="form-group col-md-3">
              <label for="">Giá</label>
              <input v-model="gia" type="text" class="form-control" id="" placeholder="Giá món">
            </div>
            <div class="form-group col-md-3">
              <label for="">ID</label>
              <input type="text" v-model="id" class="form-control" id="" placeholder="ID món ăn">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Nội dung</label>
            <input type="text" v-model="noiDung" class="form-control" id="" placeholder="Thông  tin món ăn">
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputCity">Link Hình Ảnh</label>
              <input type="text" v-model="hinhAnh" class="form-control" id="">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Loại Món Ăn</label>
              <select id="inputState" v-model="loai" class="form-control">
                <option selected></option>
                <option value="AnNhanh">Ăn Nhanh</option>
                <option value="AnKem">Ăn Kèm</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      nameMonAn: '',
      noiDung: '',
      hinhAnh: '',
      loai: '',
      gia: ''

    }
  },

  name: "AddUserComponent"
}
</script>

<style scoped>

</style>