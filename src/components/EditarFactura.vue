<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Usuario</div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="">RazonSocial:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="datos.razonSocial"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la Razon social</small
              >
            </div>
            <div class="form-group">
              <label for="">fecha:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="datos.fecha"
                aria-describedby="helpId"
                placeholder="Password"
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
                v-model="datos.rfc"
                aria-describedby="helpId"
                placeholder="00/00/00"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el RFC</small
              >
            </div>
            <br />
  
            <button type="submit" class="btn btn-primary">Guardar cambios</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        id: null,
        datos: {
          razonSocial: '',
          fecha: '',
          rfc: '',
          cliente: ''
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Factura/ByID/" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Factura")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      submitForm() {
        axios.put("https://localhost:7204/Factura/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listarf')
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
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