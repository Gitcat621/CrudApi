<template>
    <label id="header"></label><br><br><br>

        <div class="form-group">
            <div class="card">ID User</div>
            <input @input="id" v-on:input="this.consultarUsuario" class="form-control"/>
        </div><br><br>

  <div>
    <div class="card">
      <div class="card-header">Usuario</div>
      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Password</th>
              <th>FechaRegistro</th>
              <th>IDempleado</th>
              <th>IDrol</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuario" :key="usuario.id">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.user }}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ usuario.fechaRegistro }}</td>
              <td>{{ usuario.idEmpleado }}</td>
              <td>{{ usuario.idRol }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrarUsuario(usuario.id)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|

                  |<button
                    type="button"
                    v-on:click="EditarUsuario(usuario.id)"
                    class="btn btn-warning"
                  >
                    Editar</button
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
data() {
  return {
    usuario: [],
  };
},
created: function () {
  this.consultarUsuario();
},
methods: {
  consultarUsuario(id) {
    console.log(id)
    axios.get("https://localhost:7204/Usuario/BuscarPorID/" + id).then((result) => {
      console.log(result.data.result);
      this.usuario = result.data.result;
    });
  },

  borrarUsuario(id) {
    console.log(id);

    axios.delete("https://localhost:7204/Usuario/Borrar/" + id);

    window.location.href = "listar";
  },

  EditarUsuario(id) {
    console.log(id);
    window.location.href = "editar";
  },
},
};
</script>