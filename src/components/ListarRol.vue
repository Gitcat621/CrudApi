<template>
  <div>
    <div class="card">
      <div class="card-header">Rol</div>

      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in rol" :key="rol.pkRol">
              <td>{{ rol.pkRol }}</td>
              <td>{{ rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrar(rol.pkRol)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|

                  <RouterLink :to="{path:'/Editarr/'+rol.pkRol}" class="btn btn-warning">Editar</RouterLink>
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
    rol: [],
  };
},
created: function () {
  this.consultar();
},
methods: {
  consultar() {
    axios.get("https://localhost:7204/Rol").then((result) => {
      console.log(result.data.result);
      this.rol = result.data.result;
    });
  },

  borrar(pkRol) {
    console.log(pkRol);

    axios.delete("https://localhost:7204/Rol/Borrar/" + pkRol);

    window.location.href = "listarr";
  },

  Editar(id) {
    console.log(id);
    window.location.href = "editarr";
  },

  Crear() {
    window.location.href = "crearr";
  },
},
};
</script>
