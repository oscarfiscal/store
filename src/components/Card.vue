<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb3">
      <div class="card">
          <img :src="producto.photo" alt="" class="card-img-top">
      <div class="card-body">
          <h5 class="card-title">{{producto.name}}</h5>
        
            <p class="card-text">$ <span>{{producto.price}}</span></p>
        <button class="btn btn-dark">Agregar</button>
        </div>
        </div>
    </div>
    

</template>

<script>
export default {
props:['producto'],
}
</script>

<style>

</style>