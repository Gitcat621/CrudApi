<template>
    <div>
    <main role="main" class="pb-3">
            <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="">
              <label for="abrir-cerrar">&#9776; <span class="abrir">Abrir</span><span class="cerrar">Cerrar</span></label>
                <div id="sidebar" class="sidebar">
                    <div class="Hola">
                      <img id="icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png">                      <p id="Tury">User</p>
                    </div>
                    <ul class="menu"> 
                    <!--donde estan los simbolos de gato se pone la direcciona que se redireccionara-->
                    <li><li><RouterLink to="/">Home</RouterLink></li></li>
                    <li><RouterLink to="/About">About</RouterLink></li>
                    <li><a href="" itemid="Destino"><i class="fa-solid fa-person"></i> Roles</a></li>
                    <li><a href="" itemid="Destino"><i class="fa-solid fa-location-dot"></i> Destinos</a></li>
                    <li><a href="" itemid="Paquetes"><i class="fa-solid fa-tag"></i> Paquetes</a></li>
                     <li><a href="" itemid="Camion"><i class="fa-solid fa-truck"></i> Camionetas</a></li>
                     <li><a href="" itemid="Destino"><i class="fa-solid fa-calendar-days"></i> Salidas</a></li>
                     <li><a href="" itemid="Destino"><i class="fa-solid fa-cart-shopping"></i> Carrito</a></li>
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
        background-color:#333;
        color:#fff;
        display:inline-block;
        position: fixed;
        height: 100%;
        width: 100px;
        top: 0;
        right: 0;
    
    }

    .cerrar {
        display:none;
    }

    #sidebar {
        width:0;
    }
    
    #contenido {
        margin-right:0;
    }
    
    input#abrir-cerrar:checked ~ #sidebar {
        width:200px;
        
    }
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"], input#abrir-cerrar:checked ~ #contenido {
        margin-right:200px;
        transition: margin-left .4s;
    }
    
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"] .cerrar {
        display:inline;
    }
    
    input#abrir-cerrar:checked + label[for="abrir-cerrar"] .abrir {
        display:none;
    }
    
    .sidebar {
        position: fixed;
        height: 100%;
        width: 0;
        top: 0;
        right: 0;
        z-index: 1;
        background-color: rgb(0, 80, 53);
        overflow-x: hidden;
        transition: 0.4s;
        padding: 1rem 0;
        box-sizing:border-box;
    }

    .sidebar a {
        display: block;
        font-size: 120%;
        color: #eee;
        text-decoration: none;
        
    }

    .sidebar a:hover{
        color:#fff;
        background-color: rgb(4, 63, 43);
    
    }

    #icon{
    width: 100px;
    height: 100pxS;
}

#Tury
{
    font-size: 1cm;
}

.Hola{
      color:#fff;
      margin: 0%;
      top: 0;
      left: 30%;
    }

</style>