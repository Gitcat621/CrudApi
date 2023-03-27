<template>
    <label id="header"></label><br><br><br>
  <div>
    <div class="card">
      <div class="card-header">Puesto</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="puesto in puesto" :key="puesto.pkPuesto">
              <td>{{ puesto.pkPuesto }}</td>
              <td>{{ puesto.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrar(puesto.pkPuesto)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|

                  |<button
                    type="button"
                    v-on:click="Editar(puesto.pkPuesto)"
                    class="btn btn-warning"
                  >
                    Editar</button
                  >
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
    puesto: [],
  };
},
created: function () {
  this.consultar();
},
methods: {
  consultar() {
    axios.get("https://localhost:7204/Puesto").then((result) => {
      console.log(result.data.result);
      this.puesto = result.data.result;
    });
  },

  borrar(pkPuesto) {
    console.log(pkPuesto);

    axios.delete("https://localhost:7204/Puesto/Borrar/" + pkPuesto);

    window.location.href = "listarp";
  },

  Editar(pkPuesto) {
    console.log(pkPuesto);
    window.location.href = "editarp";
  },

  Crear() {
    window.location.href = "crearp";
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