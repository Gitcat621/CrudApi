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
              >Ingresa el nombre del empleado</small
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
              >Ingresa los apellidos</small
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
              >Ingresa la direccion</small
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
              >Ingresa la ciudad</small
            >
          </div> 
          <label for="fkCliente">Seleccionar un Fk Puesto:</label>
              <select id="fkCliente" v-model="datos.fkPuesto" class="form-control">
                <option v-for="puesto in puestos" :key="puesto.id" :value="puesto.id">
                  {{puesto.nombre}}
                </option>
              </select>
          <div class="form-group">
            <label for="fkCliente">Seleccionar un Fk Departamento:</label>
              <select id="fkCliente" v-model="datos.fkDepartamento" class="form-control">
                <option v-for="departamento in departamentos" :key="departamento.id" :value="departamento.id">
                  {{departamento.nombre}}
                </option>
              </select>
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
      datos: {
          fkPuesto: null,
          fkDepartamento: null
        },
        puestos: [],
        departamentos: []
    };
  },
  mounted() {
      axios.get("https://localhost:7204/Puesto")
        .then(response => {
          this.puestos = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });

      axios.get("https://localhost:7204/Departamento")
        .then(response => {
          this.departamentos = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });
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