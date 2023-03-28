<template>
    <div class="update-form-container">
      <h1>Actualizar registro</h1>
      <form @submit.prevent="submitForm" class="update-form">
        <div class="form-group">
          <label for="razonSocial">Razón Social:</label>
          <input type="text" id="razonSocial" v-model="datos.razonSocial" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="fecha">Fecha:</label>
          <input type="text" id="fecha" v-model="datos.fecha" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="rfc">RFC:</label>
          <input type="text" id="rfc" v-model="datos.rfc" class="form-control">
        </div>
  
        <div class="form-group">
          <label for="fkCliente">Seleccionar un Fk:</label>
          <select id="fkCliente" v-model="datos.fkCliente" class="form-control">
            <!-- <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id" :selected="cliente.id === datos.fkCliente">{{cliente.nombre}}</option> -->
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
              {{cliente.cliente.nombre}}
            </option>
          </select>
        </div>
  
        <button type="submit" class="btn btn-primary">Guardar cambios</button>
      </form>
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
          fkCliente: null
        },
        clientes: []
      }
    },
    mounted() {
      // Obtener el id del registro a actualizar de la URL
      this.id = this.$route.params.id;
      // Obtener los datos del registro desde la API utilizando su id
      axios.get("https://localhost:7204/Factura/ByID/" + this.id)
        .then(response => {
          // Asignar los datos del registro a la propiedad "datos"
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      // Obtener la lista de clientes desde la API
      axios.get("https://localhost:7204/Factura")
        .then(response => {
          // Asignar la lista de clientes a la propiedad "clientes"
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      submitForm() {
        // Enviar los datos actualizados a la API utilizando un PUT
        axios.put("https://localhost:7204/Factura/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            // Redirigir al usuario a la página de detalles del registro actualizado
            this.$router.push('/')
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
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