<template>
    <div>
    <main role="main" class="pb-3">
            <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="">
              <label for="abrir-cerrar">DASHBOARD</label>
                <div id="sidebar" class="sidebar">
                    <div class="Hola">
                      <img id="icon" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png">
                      <p id="Tury">User</p>
                    </div>
                    <p class="sep">---------------------------------</p>
                    <ul class="menu"> 
                    <!--donde estan los simbolos de gato se pone la direcciona que se redireccionara-->
                    <li><RouterLink to="/"><i class="fa-solid fa-house-chimney"></i> Home</RouterLink></li>
                    <li><RouterLink to="/Listar"><i class="fa-solid fa-list"></i> Usuario</RouterLink></li>
                    <li><RouterLink to="/Listarr"><i class="fa-solid fa-list"></i> Rol</RouterLink></li>
                    <li><RouterLink to="/Listarp"><i class="fa-solid fa-list"></i> Puesto</RouterLink></li>
                    <li><RouterLink to="/Listarf"><i class="fa-solid fa-list"></i> Factura</RouterLink></li>
                    <li><RouterLink to="/Listare"><i class="fa-solid fa-list"></i> Empleados</RouterLink></li>
                    <li><RouterLink to="/Listard"><i class="fa-solid fa-list"></i> Departamento</RouterLink></li>
                    <li><RouterLink to="/padre"><i class="fa-solid fa-list"></i> padre</RouterLink></li>
                    <li><RouterLink to="/hijo"><i class="fa-solid fa-list"></i> hijo</RouterLink></li>
                    <li><RouterLink to="/prueba"><i class="fa-solid fa-list"></i> p</RouterLink></li>
                  </ul>
                 </div>
    </main>
</div>
</template>

<style>

input#abrir-cerrar {
        visibility:hidden;
        position: absolute;
        top: -9999px;
    }

    label[for="abrir-cerrar"] {
        cursor:pointer;
        padding: 1rem;
        background-color:#0f0092;
        color:#fff;
        display:inline-block;
        position: fixed;
        width: 10000px;
        top: 0;
        margin-left:190px;
    
    }

    input#abrir-cerrar:checked ~ #sidebar {
        width:200px;
        
    }
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"], input#abrir-cerrar:checked ~ #contenido {
        margin-left:200px;
        transition: margin-left .4s;
    }
    
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"] .cerrar {
        display:none;
    }
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"] .abrir {
        display:inline;
    }
    
    .sidebar {
        position: fixed;
        height: 100%;
        background-color: rgb(66, 63, 242);
    }

    .sidebar a {
        display: block;
        font-size: 120%;
        color: #eee;
        text-decoration: none;
        
    }

    .sidebar a:hover{
        color:#fff;
        background-color: #002792;
    
    }

    #icon{
    width: 100px;
    height: 100pxS;
}

#Tury
{
    font-size: 1cm;
}

.menu{
        position: relative;
}

.Hola{
    color:#fff;
    display: flex;
    place-items: center;
    top: 0;
    left: 30%;
    }
.sep
{
    color: white;
}
</style>