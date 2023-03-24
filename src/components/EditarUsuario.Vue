<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="editarRegistro">
            <div class="form-group">
                <label for="">ID User:</label>
                <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="usuario.id"
                aria-describedby="helpId"
                id="nombre"
                placeholder="ID"
              />
            </div>
            <div class="form-group">
              <label for="">User:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="usuario.user"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Password:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="usuario.password"
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el passwordr</small
              >
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="usuario.fechaRegistro"
                aria-describedby="helpId"
                placeholder="00/00/00"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>
            <div class="form-group">
              <label for="">IDempleado:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="usuario.idEmpleado"
                aria-describedby="helpId"
                placeholder="1-10"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el id del empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">IDrol:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="usuario.idRol"
                aria-describedby="helpId"
                placeholder="1-10"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el id del rol</small
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
        usuario: {},
      };
    },
  
    methods: {
        editarRegistro(id) {
        console.log(this.usuario.data);
  
        var datosEnviar = {
          User: this.usuario.user,
          Password: this.usuario.password,
          FechaRegistro: this.usuario.fechaRegistro,
          IDEmpleado: this.usuario.idEmpleado,
          IDRol: this.usuario.idRol,
        };
        
        console.log(this.id + "aaaaaaaaaa");
        axios
          .put("https://localhost:7204/Usuario/Editar/" + id, datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listar";
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