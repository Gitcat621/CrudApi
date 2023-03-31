<template>
    <div id="Todo">
    <div id="contenedor">
        <div id="central">
            <div id="login">
                <div  id="logo">
                    <img src="https://www.nyan.cat/cats/original.gif">
                </div>
                <div class="titulo">
                    INICIAR SESION
                </div>

                <div id="loginform">
                    <input type="text" id="user" placeholder="Email">
                    <input type="password" placeholder="Password" id="Password">
                    <button><RouterLink to="/DashBoard">SIGN IN</RouterLink></button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style> 
    
    #contenedor {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin: 0;
        padding: 0;
        min-width: 100vw;
        min-height: 100vh;
        width: 100%;
        height: 100%;
        right: 200px;
    }
    
    #central {
        max-width: 320px;
        width: 100%;
    }
    
    /* COLOR INICIAR SESION */
    .titulo {
        font-size: 230%;
        font-weight: bolder;
        color:#000000;
        text-align: center;
        margin-bottom: 20px;
    }
    
    /* COLOR DEL CUADRO LOGIN */
    #login {

        width: 100%;
        padding: 50px 30px;
        /* background: linear-gradient(blue, pink); */
        background-color: rgb(255, 255, 255);
        
        
        -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
        -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
        
        border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        -webkit-border-radius: 3px 3px 3px 3px;
        
        box-sizing: border-box;
    }
    
    #login input {
        font-family: 'Overpass', sans-serif;
        font-size: 110%;
        color: #1b262c;
        
        display: block;
        width: 100%;
        height: 40px;
        
        margin-bottom: 10px;
        padding: 5px 5px 5px 10px;
        
        box-sizing: border-box;
        
        border: none;
        border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        -webkit-border-radius: 3px 3px 3px 3px;
    }
    
   
    
    #login input::placeholder {
        font-family: 'Overpass', sans-serif;
        color: #555555;
    }
    
    #login button {
        font-family: 'Overpass', sans-serif;
        font-size: 160%;
        color:#f70404;
        font-weight: bolder;
        width: 100%;
        height: 40px;
        border: none;
        
        border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        -webkit-border-radius: 3px 3px 3px 3px;

        /* COLOR DEL BOTON */
        background-color: rgb(250, 32, 195);
        
        margin-top: 10px;
    }
    
    #login button:hover {
        background-color: #00b8e6;
        color:#13a1ff;
    }

    #logo{
        height: 80px;
        display: flex;
        justify-content: center;
    }

    #Todo{
        background: linear-gradient(pink, blue);
        margin: 20px;
    }

    #user, #Password{
        background-color: rgb(189, 189, 189);
    }
</Style>