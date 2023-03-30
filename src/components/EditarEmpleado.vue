<template>
    <label id="header"></label><br><br><br>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Empleado</div>
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
                >Ingresa el nombre del empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
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
                v-model="datos.direccion"
                aria-describedby="helpId"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa su direccion</small
              >
            </div>
            <div class="form-group">
              <label for="">Ciudad:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="datos.ciudad"
                aria-describedby="helpId"
                placeholder="00/00/00"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa su ciudad</small
              >
            </div>
            <label for="fkCliente">Seleccionar un Fk Empleado:</label>
              <select id="fkCliente" v-model="datos.fkPuesto" class="form-control">
                <option v-for="puesto in puestos" :key="puesto.pkPuesto" :value="puesto.pkPuesto">
                  {{puesto.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + datos.fkPuesto }}</span>
            <br/><br>

            <label for="fkCliente">Seleccionar un Fk Empleado:</label>
              <select id="fkCliente" v-model="datos.fkDepartamento" class="form-control">
                <option v-for="departamento in departamentos" :key="departamento.pkDepartamento" :value="departamento.pkDepartamento">
                  {{departamento.nombre}}
                </option>
              </select>
              <span>Seleccionado: {{ 'fk ' + datos.fkDepartamento }}</span>
            <br/><br>
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
          apellidos: '',
          direccion: '',
          ciudad: '',
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Empleado/ByID/" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Empleado")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });

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
      submitForm() {
        axios.put("https://localhost:7204/Empleado/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listare')
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