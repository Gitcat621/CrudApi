<template>
  <label id="header"></label><br><br><br>
<div>
  <div class="card">
    <div class="card-header">Usuario</div>

    <div class="card_body">
      <label>BUSCAR POR ID</label>
      <input placeholder="Insertr ID" v-model="id" v-on:input="consultarUsuario" class="form-control"/>
      <label>{{ pk }}</label>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Password</th>
            <th>FechaRegistro</th>
            <th>Empleado</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="datos in datos" :key="datos.id">
            <td>{{ datos.pkUsuario }}</td>
            <td>{{ datos.user }}</td>
            <td>{{ usudatosario.password }}</td>
            <td>{{ datos.fechaRegistro }}</td>
            <td>{{ datos.empleado.nombre }}</td>
            <td>{{ datos.rol.nombre }}</td>
            <td>
            </td>
          </tr> -->
        </tbody>
      </table>
      |<button type="button" v-on:click="Crear" class="btn btn-success"
  >Nuevo registro</button>
  |<button type="button" v-on:click="Buscar" class="btn btn-primary"
  >Buscar por ID</button>
</div><br>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: '',
      pk: '',
      datos: {
          pkUsuario: '',
          user: '',
          password: '',
          fechaRegistro: '',
          fkRol: '',
          fkEmpleado: ''
        },
    };
  },
methods: {
  consultarUsuario(id) {
  console.log(id);

},
// consultarUsuario() {
//   this.id = this.$route.params.id;
//   axios.get("https://localhost:7204/Usuario/ByID/" + this.id)
//   .then(response => {
//     this.datos = response.data.result;
//   })
//     .catch(error => {
//     console.error(error);
//   });
// },


borrarUsuario(id) {
  console.log(id);

  axios.delete("https://localhost:7204/Usuario/Borrar/" + id);

  window.location.href = "listar";
},

Crear() {
  window.location.href = "crear";
},

Buscar() {
  window.location.href = "buscar";
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