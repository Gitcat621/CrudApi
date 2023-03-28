<template>
  <label id="header"></label><br><br><br>
<div>
  <div class="card">
    <div class="card-header">Factura</div>

    <div class="card_body">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>RazonSocial</th>
            <th>fecha</th>
            <th>RFC</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="factura in factura" :key="factura.pkFactura">
            <td>{{ factura.pkFactura }}</td>
            <td>{{ factura.razonSocial }}</td>
            <td>{{ factura.fecha }}</td>
            <td>{{ factura.rfc }}</td>
            <td>{{ factura.cliente.nombre }}</td>
            <td>
              <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                |<button
                  type="button"
                  v-on:click="borrar(factura.pkFactura)"
                  class="btn btn-danger"
                >
                  Eliminar</button
                >|

                <RouterLink :to="{path:'/Cris/'+factura.pkFactura}" class="btn btn-warning">Editar</RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      |<button type="button" v-on:click="Crear" class="btn btn-success"
      >Nuevo registro</button>
    </div><br>
  </div>
</div>
</template>


<script>
import axios from "axios";
export default {
data() {
  return {
    factura: [],
  };
},
created: function () {
  this.consultar();
},
methods: {
  consultar() {
    axios.get("https://localhost:7204/Factura").then((result) => {
      console.log(result.data.result);
      this.factura = result.data.result;
    });
  },

  borrar(pkFactura) {
    console.log(pkFactura);

    axios.delete("https://localhost:7204/Factura/Borrar/" + pkFactura);

    window.location.href = "listarf";
  },

  Editar(pkFactura) {
    console.log(pkFactura);
    window.location.href = "editarf";
  },

  Crear() {
    window.location.href = "crearf";
  },
},
};
</script>

<style>
#header{
text-align: center;
color: white;
width: 100%;
height: 55px;
background-color: #0f0092;
}
</style>