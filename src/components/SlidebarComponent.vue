<template>
  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                <h5> Danh Sách Món Ăn</h5>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!--  Content Component-->
      <midle-component></midle-component>


    </div>
  </div>


</template>

<script>
import MidleComponent from "@/components/MidleComponent";


export default {
  name: "SlidebarComponent",
  components: {
    MidleComponent,

  }

}
</script>

<style scoped>

</style>
