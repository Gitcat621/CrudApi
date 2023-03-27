<template>
    <label id="header"></label><br><br><br>
  <div>
    <div class="card">
      <div class="card-header">Departamento</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="departamento in departamento" :key="departamento.pkDepartamento">
              <td>{{ departamento.pkDepartamento }}</td>
              <td>{{ departamento.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrar(departamento.pkDepartamento)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|

                  |<button
                    type="button"
                    v-on:click="Editar(departamento.pkDepartamento)"
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
    departamento: [],
  };
},
created: function () {
  this.consultar();
},
methods: {
  consultar() {
    axios.get("https://localhost:7204/Departamento").then((result) => {
      console.log(result.data.result);
      this.departamento = result.data.result;
    });
  },

  borrar(pkDepartamento) {
    console.log(pkDepartamento);

    axios.delete("https://localhost:7204/Departamento/Borrar/" + pkDepartamento);

    window.location.href = "listard";
  },

  Editar(pkDepartamento) {
    console.log(pkDepartamento);
    window.location.href = "editard";
  },

  Crear() {
    window.location.href = "creard";
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