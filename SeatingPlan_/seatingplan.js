var CENIMA_SIZE = 10;

var seatArray = initArray();


$( document ).ready(function() 
{
  populateContainer(seatArray);
});




function initArray()
{
    var array = [];

    for(var i = 0; i<  CENIMA_SIZE;i++)
    {
        array[i] = new Array(CENIMA_SIZE);
        for(var j = 0;j<CENIMA_SIZE;j++)
        {

            (j%2 == 0)? array[i][j] = "0" : array[i][j] = "1";
        }
    }
    array[3][0] = "-";
    array[3][1] = "-";
    array[3][2] = "-";
    array[3][3] = "-";
    array[3][4] = "-";
    array[3][5] = "-";
    array[3][6] = "-";
    array[3][7] = "-";
    array[3][8] = "-";
    array[3][9] = "-";

    array[4][2] = "-";
    array[4][3] = "-";
    array[4][4] = "-";
    array[4][5] = "-";
    array[4][6] = "-";
    array[4][7] = "-";

    array[7][0] = "-";
    array[7][1] = "-";
    array[7][2] = "-";
    array[7][3] = "-";
    array[7][4] = "-";
    array[7][5] = "-";
    array[7][6] = "-";
    array[7][7] = "-";
    array[7][8] = "-";
    array[7][9] = "-";


    return array;
}

function populateContainer(a)
{
    var container = document.getElementById("container");
    for (var i=0; i < a.length; i++)
    {
        for (var j = 0; j < a[i].length; j++) 
        { 
            switch(a[i][j])
            {
                case "0": 
                $("<div/>", 
                {
                    "id": "openSeat",
                    hover: function() 
                    {
                        $(this).css('background-image','url(images/onHover.png)')
                        $(this).mouseout(function(event) 
                        {
                            $(this).css('background-image','url(images/openSeat.png)');
                        });;
                    }
                }).appendTo('#container');
                break;

                case "1": 
                $("<div/>", 
                {
                    "id": "reservedSeat",

                }).appendTo('#container');
                break;

                case "-":
                $("<div id = 'noSeat'></div>").appendTo('#container');
                break;
            }
        }
        $("</br>").appendTo('#container');
    }
}