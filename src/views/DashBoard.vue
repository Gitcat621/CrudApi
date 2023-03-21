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
                    <li><RouterLink to="/About"><i class="fa-solid fa-circle-info"></i> About</RouterLink></li>
                    <li><RouterLink to="/Listar"><i class="fa-solid fa-list"></i> Listar</RouterLink></li>
                    <li><RouterLink to="/Crear"><i class="fa-solid fa-pencil"></i> Crear</RouterLink></li>
                    <li><a href="" itemid="Paquetes"><i class="fa-solid fa-tag"></i> Paquetes</a></li>
                     <li><a href="" itemid="Camion"><i class="fa-solid fa-truck"></i> Camionetas</a></li>
                     <li><a href="" itemid="Destino"><i class="fa-solid fa-calendar-days"></i> Salidas</a></li>
                     <li><RouterLink to="/Login"><i class="fa-solid fa-right-to-bracket"></i> Login</RouterLink></li>
                     <li><a href="" itemid="Destino"><i class="fa-solid fa-xmark"></i> Salir</a></li>
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