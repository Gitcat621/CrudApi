<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Rol</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Rol:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="rol.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del rol</small>

            </div><br>
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        rol: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.rol.data);
  
        var datosEnviar = {
          Nombre: this.rol.nombre
        };
  
        axios
          .post("https://localhost:7204/Rol/Crear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarr";
          });
      },
    },
  };
  </script>

<style scoped>
#header{
  text-align: center;
  color: white;
  width: 100%;
  height: 55px;
  background-color: #0f0092;
}
</style>