<template>
    <label id="header"></label><br><br><br>
  <div>
    <div class="card">
      <div class="card-header">Empleado</div>
  
      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Puesto</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleado" :key="empleado.pkEmpleado">
              <td>{{ empleado.pkEmpleado }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.apellidos }}</td>
              <td>{{ empleado.direccion }}</td>
              <td>{{ empleado.ciudad }}</td>
              <td>{{ empleado.puesto.nombre }}</td>
              <td>{{ empleado.departamento.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                |<button
                  type="button"
                  v-on:click="borrar(empleado.pkEmpleado)"
                  class="btn btn-danger"
                >
                  Eliminar</button
                >|

                <RouterLink :to="{path:'/Editare/'+empleado.pkEmpleado}" class="btn btn-warning">Editar</RouterLink>
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
      empleado: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      axios.get("https://localhost:7204/Empleado").then((result) => {
        console.log(result.data.result);
        this.empleado = result.data.result;
      });
    },
  
    borrar(pkEmpleado) {
      console.log(pkEmpleado);
  
      axios.delete("https://localhost:7204/Empleado/Borrar/" + pkEmpleado);
  
      window.location.href = "listare";
    },
  
    Editar(pkEmpleado) {
      console.log(pkEmpleado);
      window.location.href = "editare";
    },
  
    Crear() {
      window.location.href = "creare";
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