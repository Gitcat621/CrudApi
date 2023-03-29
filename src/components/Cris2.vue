<template>
    <div class="update-form-container">
      <h1>Combo Box</h1>
      <div class="form-group">
          <label for="fkCliente">Seleccionar un Fk Cliente:</label>
          <select id="fkCliente" v-model="datos.fkRol" class="form-control">
            <!-- <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id" :selected="cliente.id === datos.fkCliente">{{cliente.nombre}}</option> -->
            <option v-for="rol in roles" :key="rol.id" :value="rol.id">
              {{rol.nombre}}
            </option>
          </select>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        datos: {
          fkRol: null
        },
        roles: []
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
    },
  }
  </script>
  
  <style>
  .update-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .update-form {
    max-width: 500px;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    }
  
  </style>