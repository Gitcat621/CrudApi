import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'
import ListarUsuario from "../components/ListarUsuario.vue";
import CrearUsuario from "../components/CrearUsuario.vue";
import EditarUsuario from "../components/EditarUsuario.vue";
import BuscarUsuario from "../components/BuscarUsuario.vue";
    // ----------------------Rol------------------------------------------
import ListarRol from "../components/ListarRol.vue";
import CrearRol from "../components/CrearRol.vue";
import EditarRol from "../components/EditarRol.vue";
// import BuscarRol from "../components/BuscarRol.vue";
    // ----------------------Puesto------------------------------------------
import ListarPuesto from "../components/ListarPuesto.vue";
import CrearPuesto from "../components/CrearPuesto.vue";
import EditarPuesto from "../components/EditarPuesto.vue";
// import BuscarRol from "../components/BuscarRol.vue";
    // ----------------------Factura------------------------------------------
import ListarFactura from "../components/ListarFactura.vue";
import CrearFactura from "../components/CrearFactura.vue";
import EditarFactura from "../components/EditarFactura.vue";
// import BuscarRol from "../components/BuscarRol.vue";
// ----------------------Empleado------------------------------------------
import ListarEmpleado from "../components/ListarEmpleado.vue";
import CrearEmpleado from "../components/CrearEmpleado.vue";
import EditarEmpleado from "../components/EditarEmpleado.vue";
// import BuscarRol from "../components/BuscarRol.vue";
// ----------------------Departamento------------------------------------------
import ListarDepartamento from "../components/ListarDepartamento.vue";
import CrearDepartamento from "../components/CrearDepartamento.vue";
import EditarDepartamento from "../components/EditarDepartamento.vue";
// import BuscarRol from "../components/BuscarRol.vue";
// ----------------------Cliente------------------------------------------
import ListarCliente from "../components/ListarCliente.vue";
import CrearCliente from "../components/CrearCliente.vue";
import EditarCliente from "../components/EditarCliente.vue";
// import BuscarRol from "../components/BuscarRol.vue";

import Padre from "../components/Padre.vue";
import Hijo from "../components/Hijo.vue";
import Cris from '../components/Cris.vue';
import Cris2 from '../components/Cris2.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario,
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearUsuario,
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarUsuario,
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: BuscarUsuario,
    },
    // ----------------------Rol------------------------------------------
    {
      path: '/listarr',
      name: 'listarr',
      component: ListarRol,
    },
    {
      path: '/crearr',
      name: 'crearr',
      component: CrearRol,
    },
    {
      path: '/editarr/:id',
      name: 'editarr',
      component: EditarRol,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },
    // ----------------------Puesto------------------------------------------
    {
      path: '/listarp',
      name: 'listarp',
      component: ListarPuesto,
    },
    {
      path: '/crearp',
      name: 'crearp',
      component: CrearPuesto,
    },
    {
      path: '/editarp/:id',
      name: 'editarp',
      component: EditarPuesto,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },
        // ----------------------Factura------------------------------------------
    {
      path: '/listarf',
      name: 'listarf',
      component: ListarFactura,
    },
    {
      path: '/crearf',
      name: 'crearf',
      component: CrearFactura,
    },
    {
      path: '/editarf/:id',
      name: 'editarf',
      component: EditarFactura,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },
    // ----------------------Empleado------------------------------------------
    {
      path: '/listare',
      name: 'listare',
      component: ListarEmpleado,
    },
    {
      path: '/creare',
      name: 'creare',
      component: CrearEmpleado,
    },
    {
      path: '/editare/:id',
      name: 'editare',
      component: EditarEmpleado,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },
    // ----------------------Departamento------------------------------------------
    {
      path: '/listard',
      name: 'listard',
      component: ListarDepartamento,
    },
    {
      path: '/creard',
      name: 'creard',
      component: CrearDepartamento,
    },
    {
    path: '/editard/:id',
    name: 'editard',
    component: EditarDepartamento,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },
    // ----------------------Cliente------------------------------------------
    {
      path: '/listarc',
      name: 'listarc',
      component: ListarCliente,
    },
    {
      path: '/crearc',
      name: 'crearc',
      component: CrearCliente,
    },
    {
      path: '/editarc/:id',
      name: 'editarc/',
      component: EditarCliente,
    },
    // {
    //   path: '/buscarr',
    //   name: 'buscarr',
    //   component: BuscarRol,
    // },

    {
      path: '/padre',
      name: 'padre',
      component: Padre,
    },
    {
      path: '/hijo',
      name: 'hijo',
      component: Hijo,
    },
    {
      path: '/cris/:id',
      name: 'cris',
      component: Cris,
    },
    {
      path: '/cris2/',
      name: 'cris2',
      component: Cris2,
    },



    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component: () => import('../views/DashBoard.vue')
    }
  ]
})

export default router
