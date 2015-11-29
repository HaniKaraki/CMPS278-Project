var a = ['url(images/MAD_MAX_FURY_ROAD_sci_fi_futuristic_action_fighting_adventure_1mad_max_apocalyptic_road_warrior_1920x1080.jpg)','url(images/spectre_2015_james_bond_007-wide.jpg)','url(images/488005.jpg)','url(images/interstellar-2560x1440.jpg)','url(images/black-mass-movie-poster-4k.jpg)','url(images/Frozen.jpg)'];
var i = 0;
function backgroundChange(){
    $("#l").fadeIn(1000);
    $("#l").delay(7000).fadeOut(2000);
        $("#login_form").fadeOut();
        $("#signup_form").fadeOut();



    setInterval(chooseBackground, 10000);
}
function chooseBackground(){
    if(i==a.length){
        i=0;
    }
    document.getElementById("l").style.backgroundImage = a[i];
    $("#l").fadeIn(1000);
    $("#l").delay(7000).fadeOut(2000);
    i++;

}
function show_login(){
    $("#signup_form").fadeOut();
    $("#login_form").fadeIn();
}
function show_signup(){
    $("#login_form").fadeOut();
    $("#signup_form").fadeIn();
}