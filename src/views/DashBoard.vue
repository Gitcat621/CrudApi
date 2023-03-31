<template>
    <div>
    <main role="main" class="pb-3">
            <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="">
              <label for="abrir-cerrar">DASHBOARD</label>
                <div id="sidebar" class="sidebar">
                    <div class="Hola">
                        <h6>⠀</h6><img id="icon" src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png"><h6>⠀</h6>
                      <p id="Tury">Alejandro</p><br><br><br><br><br>
                    </div>
                    <ul class="menu"><br>
                    <!--donde estan los simbolos de gato se pone la direcciona que se redireccionara-->
                    <li><RouterLink class="" to="/"><i class="fa-solid fa-house-chimney"></i> Home</RouterLink></li>
                    <li><RouterLink to="/Listar"><i class="fa-solid fa-list"></i> Usuario</RouterLink></li>
                    <li><RouterLink to="/Listarr"><i class="fa-solid fa-list"></i> Rol</RouterLink></li>
                    <li><RouterLink to="/Listarp"><i class="fa-solid fa-list"></i> Puesto</RouterLink></li>
                    <li><RouterLink to="/Listarf"><i class="fa-solid fa-list"></i> Factura</RouterLink></li>
                    <li><RouterLink to="/Listare"><i class="fa-solid fa-list"></i> Empleados</RouterLink></li>
                    <li><RouterLink to="/Listard"><i class="fa-solid fa-list"></i> Departamento</RouterLink></li>
                    <li><RouterLink to="/Listarc"><i class="fa-solid fa-list"></i> Clientes</RouterLink></li>
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

    /* COLOR DEL HEADER */
    label[for="abrir-cerrar"] {
        cursor:pointer;
        padding: 1rem;
        background: rgb(255, 134, 154);
        color:#fff;
        display:inline-block;
        position: fixed;
        width: 10000px;
        top: 0;
        margin-left:220px;
    font-size: 20px;
    }
    
    /* DASHBORAD COLOR */
    .sidebar {
        position: fixed;
        height: 100%;
        width: 230px;
        background-color: rgb(255, 255, 255);
    }

    /* //texto// */
    .sidebar a {
        display: block;
        font-size: 120%;
        color: #000000;
        text-decoration: none;
        
    }

    /* COLOR DE LA SELECCION */
    .sidebar a:hover{
        color:#fff;
        background-color: rgb(250, 32, 195);
    
    }

    #icon{
    width: 38px;
    height: 38px;
}

#Tury
{
    font-size: 1cm;
}

.menu{
        position: relative;
        font-family: 'Orbitron', sans-serif;
}

/* COLOR PARTE DE ARRIBA DASH */
.Hola{
    margin: 5px;
    background-color: rgb(152, 226, 255);
    color:#ffffff;
    display: flex;
    place-items: center;
    top: 2;
    left: 30%;
    font-size: 10px;
    font-family: 'Oswald', sans-serif;
    }

.hr {
  height: 1px;
  background-color: rgb(0, 0, 0);
}
</style>