<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Factura</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">RazonSocial:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="factura.razonSocial"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Razon"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la Razon Social</small
              >
            </div>
            <div class="form-group">
              <label for="">fecha:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="factura.fecha"
                aria-describedby="helpId"
                placeholder="--/--/--"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha</small
              >
            </div>
            <div class="form-group">
              <label for="">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="factura.rfc"
                aria-describedby="helpId"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el RFC correspondiente</small
              >
            </div>
            <label for="fkCliente">Seleccionar un Fk Cliente:</label>
            <select v-model="factura.fkCliente">
              <option v-for="cliente in clientes" v-bind:value="cliente.pkCliente">
                {{ cliente.nombre }}
              </option>
            </select><br>
            <span>Seleccionado: {{ factura.fkCliente }}</span>
            <br/><br><br>
  
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
        factura: {},
        datos: {
          fkCliente: null
        },
        clientes: []
      };
    },
    mounted() {
      axios.get("https://localhost:7204/Cliente")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      agregarRegistro() {
        console.log(this.factura.data);
  
        var datosEnviar = {
          RazonSocial: this.factura.razonSocial,
          Fecha: this.factura.fecha,
          RFC: this.factura.rfc,
          FkCliente: this.factura.fkCliente
        };
  
        axios
          .post("https://localhost:7204/Factura/Crear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarf";
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