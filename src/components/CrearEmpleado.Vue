<template>
  <label id="header"></label><br><br><br>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="empleado.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del usuario</small
            >
          </div>
          <div class="form-group">
            <label for="">apellidos:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="nombre"
              v-model="empleado.apellidos"
              aria-describedby="helpId"
              placeholder="Apellidos"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el passwordr</small
            >
          </div>
          <div class="form-group">
            <label for="">Direccion:</label>
            <input
              type="text"
              class="form-control"
              name="precio"
              id="precio"
              v-model="empleado.direccion"
              aria-describedby="helpId"
              placeholder="Direccion"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la fecha de hoy</small
            >
          </div>
          <div class="form-group">
            <label for="">ciudad:</label>
            <input
              type="text"
              class="form-control"
              name="precio"
              id="precio"
              v-model="empleado.ciudad"
              aria-describedby="helpId"
              placeholder="Ciudad"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el id del empleado</small
            >
          </div> 
          <div class="form-group">
            <label for="">IDPuesto:</label>
            <input
              type="text"
              class="form-control"
              name="precio"
              id="precio"
              v-model="empleado.fkPuesto"
              aria-describedby="helpId"
              placeholder="1-10"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el id del empleado</small
            >
          </div> 
          <div class="form-group">
            <label for="">IDDepartamento:</label>
            <input
              type="text"
              class="form-control"
              name="precio"
              id="precio"
              v-model="empleado.fkDepartamento"
              aria-describedby="helpId"
              placeholder="1-10"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el id del empleado</small
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
      empleado: {},
    };
  },

  methods: {
    agregarRegistro() {
      console.log(this.empleado.data);

      var datosEnviar = {
        Nombre: this.empleado.nombre,
        Apellidos: this.empleado.apellidos,
        Direccion: this.empleado.direccion,
        Ciudad: this.empleado.ciudad,
        FkPuesto: this.empleado.fkPuesto,
        FkDepartamento: this.empleado.fkDepartamento
      };

      axios
        .post("https://localhost:7204/Empleado/Crear", datosEnviar)
        .then((result) => {
          console.log(result);
          window.location.href = "listare";
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