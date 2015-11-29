<html>
    <head>
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <script src="frameworks/jquery-1.11.3.min.js"></script>
    <script src="js/index.js" type="text/javascript"></script>
    </head>
    
    <body onload="backgroundChange()">
        <div id="l"></div>
        <div id="container">
            
            <div id="logInDiv">
                <button class="pannelButton" onclick="show_login()">Log In</button>
            </div>
            
            <div id ="singUpDiv">
                <button class="pannelButton" onclick="show_signup()">Sign up</button>
            </div>
        </div>
        
        <div id="login_form">
            <form class="myform"  action = "main.php">

 	          <input type="text" placeholder="username" name="user"><br>
				<input type="password" placeholder="password" name="password"><br>
				<input type="submit" value="Login">
            </form>
        </div>
        <div id="signup_form">
            <form class="myform">
                <input type="text" placeholder="Email" name="mail"><br>
 	          <input type="text" placeholder="username" name="user"><br>
				<input type="password" placeholder="password" name="password"><br>
				<input type="button" value="sign up">
            </form>
        </div>
        
    </body>
    
</html>