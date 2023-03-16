<template>
    <div id="contenedor">
        <div id="central">
            <div id="login">
                <div class="titulo">
                    INICIAR SESION
                </div>

                <div id="loginform">
                    <input type="text" id="user" placeholder="Email">
                    <input type="password" placeholder="Password" id="Password">
                    <button><RouterLink to="/DashBoard">INICIAR SESION</RouterLink></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style> 
    
    /* #contenedor {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin: 0;
        padding: 0;
        min-width: 100vw;
        min-height: 100vh;
        width: 100%;
        height: 100%;
    } */
    
    #central {
        max-width: 320px;
        width: 100%;
    }
    
    .titulo {
        font-size: 200%;
        font-weight: bolder;
        color:#008f4c;
        text-align: center;
        margin-bottom: 20px;
    }
    
    #login {
        width: 100%;
        padding: 50px 30px;
        background-color: #2b2a2a;
        
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
        color:#ffffff;
        font-weight: bolder;
        width: 100%;
        height: 40px;
        border: none;
        
        border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        -webkit-border-radius: 3px 3px 3px 3px;
        
        background-color: #303030;
        
        margin-top: 10px;
    }
    
    #login button:hover {
        background-color: #4d4d4d;
        color:#bbe1fa;
    }
</Style>