<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Cliente</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="cliente.nombre"
                aria-describedby="helpId"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el passwordr</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="cliente.apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>
            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="cliente.telefono"
                aria-describedby="helpId"
                placeholder="Telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el id del empleado</small
              >
            </div> 
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="cliente.email"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Email"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="cliente.direccion"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <br />
  
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
        cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.cliente.data);
  
        var datosEnviar = {
          Nombre: this.cliente.nombre,
          Apellidos: this.cliente.apellidos,
          Telefono: this.cliente.telefono,
          Email: this.cliente.email,
          Direccion: this.cliente.direccion
        };
  
        axios
          .post("https://localhost:7204/Cliente/Crear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarc";
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