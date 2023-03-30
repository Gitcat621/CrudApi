<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Usuario</div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="">User:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="datos.user"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Password:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="datos.password"
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el passwordr</small
              >
            </div>
            <div class="form-group">
              <label for="">FechaRegistro:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="datos.fechaRegistro"
                aria-describedby="helpId"
                placeholder="00/00/00"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de hoy</small
              >
            </div>

            {{ datos }}

            <label for="fkCliente">Seleccionar un Fk Rol:</label>
              <select id="fkCliente" v-model="datos.fkRol" class="form-control">
                <option v-for="rol in roles" :key="rol.pkRol" :value="rol.pkRol">
                  {{rol.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + datos.fkRol }}</span>

              <label for="fkCliente">Seleccionar un Fk Empleado:</label>
              <select id="fkCliente" v-model="datos.fkEmpleado" class="form-control">
                <option v-for="empleado in empleados" :key="empleado.pkEmpleado" :value="empleado.pkEmpleado">
                  {{empleado.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + datos.fkEmpleado }}</span>
            <br />

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
          user: '',
          password: '',
          fechaRegistro: '',
          fkRol: '',
          fkEmpleado: ''
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Usuario/ByID/" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Usuario")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });

        axios.get("https://localhost:7204/Rol")
        .then(response => {
          this.roles = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });

      axios.get("https://localhost:7204/Empleado")
        .then(response => {
          this.empleados = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });
    },
    methods: {
      submitForm() {
        axios.put("https://localhost:7204/Usuario/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listar')
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