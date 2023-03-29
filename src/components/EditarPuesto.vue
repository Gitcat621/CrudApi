<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Puesto</div>
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
                >Ingresa el nombre del puesto</small
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
          nombre: ''
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Puesto/ByID/" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Puesto")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      submitForm() {
        axios.put("https://localhost:7204/Puesto/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listarp')
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