<template>
    <label id="header"></label><br><br><br>

        <div class="form-group">
            <div class="card">ID User</div>
            <input @input="id" v-on:input="this.mounted" class="form-control"/>
        </div><br><br>

        {{ id }}
        {{ datos }}

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="">User:</label>
            <input v-model="datos.user"/>
            <div class="form-group">
              <label for="">Password:</label>
              <input v-model="datos.password"/>
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input v-model="datos.fechaRegistro">
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input v-model="datos.fkEmpleado">
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input v-model="datos.fkRol">
            </div>
          </div>
        </form>
</template>

<script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        id: 0,
        datos: {
          user: '',
          password: '',
          fechaRegistro: '',
          fkRol:'',
          fkEmpleado:''
        },
      }
    },
    mounted(id) {
      console.log(id);
      axios.get("https://localhost:7204/Usuario/ByID/" + id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
</script>