<template>
    <label id="header"></label><br><br><br>
  <div>
    <div class="card">
      <div class="card-header">Factura</div>
  
      <div class="card_body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>nombre</th>
              <th>apellido</th>
              <th>telefono</th>
              <th>email</th>
              <th>direccion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in cliente" :key="cliente.pkCliente">
              <td>{{ cliente.pkCliente }}</td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.apellidos }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.direccion }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrar(cliente.pkCliente)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|
  
                  |<button
                    type="button"
                    v-on:click="Editar(cliente.pkCliente)"
                    class="btn btn-warning"
                  >
                    Editar</button
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        |<button type="button" v-on:click="Crear" class="btn btn-success"
      >Nuevo registro</button>
    </div><br>
    </div>
  </div>
  </template>
  
  
  <script>
  import axios from "axios";
  export default {
  data() {
    return {
        cliente: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      axios.get("https://localhost:7204/Cliente").then((result) => {
        console.log(result.data.result);
        this.cliente = result.data.result;
      });
    },
  
    borrar(pkCliente) {
      console.log(pkCliente);
  
      axios.delete("https://localhost:7204/Cliente/Borrar/" + pkCliente);
  
      window.location.href = "listarc";
    },
  
    Editar(pkCliente) {
      console.log(pkCliente);
      window.location.href = "editarc";
    },
  
    Crear() {
      window.location.href = "crearc";
    },
  },
  };
  </script>
  
  <style>
  #header{
  text-align: center;
  color: white;
  width: 100%;
  height: 55px;
  background-color: #0f0092;
  }
  </style>