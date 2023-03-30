<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Usuario</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
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
                placeholder="2023-03-26T22:31:58.806Z"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>

            {{ usuario }}
            
            <label for="fkCliente">Seleccionar un Fk Rol:</label>
              <select id="fkCliente" v-model="usuario.fkRol" class="form-control">
                <option v-for="rol in roles" :key="rol.pkRol" :value="rol.pkRol">
                  {{rol.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + usuario.fkRol }}</span>

              <label for="">Seleccionar un Fk Empleado:</label>
              <select id="" v-model="usuario.fkEmpleado" class="form-control">
                <option v-for="empleado in empleados" :key="empleado.pkEmpleado" :value="empleado.pkEmpleado">
                  {{empleado.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + datos.fkEmpleado }}</span>
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
        datos: {
          fkRol: 0,
          fkEmpleado: 0
        },
        roles: [],
        empleados: []
      }
    },
    mounted() {
      axios.get("https://localhost:7204/Rol")
        .then(response => {
          this.roles = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });

      axios.get("https://localhost:7204/Empleado")
        .then(response => {
          this.empleados = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });
    },
    methods: {
      agregarRegistro() {
        console.log(this.usuario.data);
  
        var datosEnviar = {
          User: this.usuario.user,
          Password: this.usuario.password,
          FechaRegistro: this.usuario.fechaRegistro,
          FkEmpleado: this.usuario.fkEmpleado,
          FkRol: this.usuario.fkRol
        };
        
        axios
          .post("https://localhost:7204/Usuario/Crear", datosEnviar)
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