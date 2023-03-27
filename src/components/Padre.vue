<template>
    <div class="todo">
        <h1>Padre</h1>
        <input v-model="compartir">

        <section>
            <h1>Hijo</h1>
            <Hijo :msg="compartir" @padre="Enpadre" />
        </section>
    </div>

    <div>
      <div class="card">
        <div class="card-header">Usuario</div>
        <!-- <input v-model="pkUsuario"> -->
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Password</th>
                <th>FechaRegistro</th>
                <th>Empleado</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuario" :key="usuario.pkUsuario">
                <td>{{ usuario.pkUsuario }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.empleado.nombre }}</td>
                <td>{{ usuario.rol.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.pkUsuario)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|

                    |<button
                      type="button"
                      v-on:click="EditarUsuario(usuario.pkUsuario)"
                      class="btn btn-warning"
                    >
                      Editar</button
                    >
                  </div>
                </td>
              </tr>
            </tbody>
            <label v-on="pkUsuario">{{ pk }}</label>
          </table>
          |<button type="button" v-on:click="Crear" class="btn btn-success"
      >Nuevo registro</button>
    </div><br>
        </div>
      </div>

      <section>
            <h1>PRUEBA</h1>
            <EditarPrueba :msg2="pkUsuario" @PK="EnPadre2" />
        </section>

</template>

<script>
import Hijo from '../components/Hijo.vue';
import EditarPrueba from '../components/EditarPrueba.vue';
import axios from "axios";
export default{
    components:{
        Hijo,
        EditarPrueba
    },
    data: function(){
        return{
            usuario: [],
            compartir: '',
            pk: '',
            msghijo: '',
            msgprueba: ''
        };
    },
    created: function () {
    this.consultarUsuario();
    },
    watch:{
        compartir: function(){
            this.$root.$emit('send', this.compartir)
            this.$root.$emit('send2', this.pkUsuario)
        },
    },
    methods:{
        EnPadre(msg){
            this.msghijo = msg;
        },

        EnPadre2(msg2){
            this.msgprueba = msg2;
        },

        consultarUsuario() {
        axios.get("https://localhost:7204/Usuario").then((result) => {
        console.log(result.data.result);
        this.usuario = result.data.result;
        });
        },

        borrarUsuario(id) {
        console.log(id);

        axios.delete("https://localhost:7204/Usuario/Borrar/" + id);

        window.location.href = "listar";
        },

        EditarUsuario(pkUsuario) {
        console.log(pkUsuario);
        this.pk = pkUsuario;
        // window.location.href = "editar";
        },

        Crear() {
        window.location.href = "crear";
        },
    }
} 
</script>