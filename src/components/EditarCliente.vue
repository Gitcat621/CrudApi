<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Cliente</div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="datos.nombre"
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
                v-model="datos.apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el passwordr</small
              >
            </div>
            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="datos.telefono"
                aria-describedby="helpId"
                placeholder="9981-"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>
            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="datos.email"
                aria-describedby="helpId"
                placeholder="email.com"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>
            <div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="datos.direccion"
                aria-describedby="helpId"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
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
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          direccion: ''
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Cliente/ByID/" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Cliente")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      submitForm() {
        axios.put("https://localhost:7204/Cliente/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listarc')
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