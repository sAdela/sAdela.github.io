

var clicked = [false, false, false, false, false, false, false, false, false];
var clickedComp = [false, false, false, false, false, false, false, false, false];

function lastMove(){
    for (var i=0; i<9; i++){
        if (!clicked[i])
            return false;
    }
    return true;
}


function remove(){
    var dijalog = document.getElementById("dijalog");
    var bg = document.getElementById("bg");
    dijalog.style.display ="none";
    bg.style.display="none";
    $("#a, #b, #c, #d, #e, #f, #g, #h, #i").text("");
    clicked = [false, false, false, false, false, false, false, false, false];
    clickedComp = [false, false, false, false, false, false, false, false, false];
}

function draw(el){
    
    if(!clicked[el.id.charCodeAt() - 97]){

        clicked[el.id.charCodeAt() - 97] = true;
        $("#"+el.id).html("<img src=pictures/iks.png>");
        computerPlay(el);
    }
}


function dialog(str){
    var dijalog = document.getElementById("dijalog");
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var bg = document.getElementById("bg");
    dijalog.style.left = (width / 2 - 250) + "px";
    dijalog.style.top = (height / 2 - 170) + "px";
    dijalog.style.display ="block";
    bg.style.display ="block";
    $("#info").text(str);
}


function computerPlay(el){

        var played = el.id.charCodeAt() - 97;
        if(played == 0){
            
            if(clicked[1] == true && clicked[2] == true && clickedComp[1] == false && clickedComp[2] == false)
                dialog("You won");
            else if (clicked[3] == true && clicked[6] == true && clickedComp[3] == false && clickedComp[6] == false)
                dialog("You won");
            else if (clicked[4] == true && clicked[8] == true && clickedComp[4] == false && clickedComp[8] == false)
                dialog("You won!");
        if(!lastMove()){
            if (clicked[1] == false && clicked[2] == true){
                var id = String.fromCharCode(98);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[1] = true;
                clickedComp[1] = true;
            }
            else if (clicked[1] == true && clicked[2] == false){
                var id = String.fromCharCode(99);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            
            else if (clicked[3] == true && clicked[6] == false){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            else if (clicked[3] == false && clicked[6] == true){
                var id = String.fromCharCode(100);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[3] = true;
                clickedComp[3] = true;
            }
            
            else if (clicked[4] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[8] = true;
                clickedComp[8] = true;
            }
            else if (clicked[4] == false && clicked[8] == true){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                    }
                }  
            checkComputerWin();
    }
        else if(played == 1){
            if(clicked[0] == true && clicked[2] == true && clickedComp[0] == false && clickedComp[2] == false)
                dialog("You won!");
            else if (clicked[4] == true && clicked[7] == true && clickedComp[4] == false && clickedComp[7] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[0] == false && clicked[2] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[2] == false){
                var id = String.fromCharCode(99);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            
            else if (clicked[4] == true && clicked[7] == false){
                var id = String.fromCharCode(104);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[7] = true;
                clickedComp[7] = true;
            }
            else if (clicked[4] == false && clicked[7] == true){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        else if(played == 2){
            if(clicked[0] == true && clicked[1] == true && clickedComp[0] == false && clickedComp[1] == false)
                dialog("You won!");
            else if (clicked[5] == true && clicked[8] == true && clickedComp[5] == false && clickedComp[8] == false)
                dialog("You won!");
            else if (clicked[4] == true && clicked[6] == true && clickedComp[4] == false && clickedComp[6] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[0] == false && clicked[1] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[1] == false){
                var id = String.fromCharCode(98);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[1] = true;
                clickedComp[1] = true;
            }
            
            else if (clicked[5] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[9] = true;
                clickedComp[9] = true;
            }
            else if (clicked[5] == false && clicked[8] == true){
                var id = String.fromCharCode(102);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            
            else if (clicked[4] == true && clicked[6] == false){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            else if (clicked[4] == false && clicked[6] == true){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand])
                        rand = Math.random() * 9;
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        else if (played == 3){
            if(clicked[0] == true && clicked[6] == true && clickedComp[0] == false && clickedComp[6] == false)
                dialog("You won!");
            else if (clicked[4] == true && clicked[5] == true && clickedComp[4] == false && clickedComp[5] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[0] == false && clicked[6] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[6] == false){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
           
            else if (clicked[4] == true && clicked[5] == false){
                var id = String.fromCharCode(102);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[5] = true;
                clickedComp[5] = true;
            }
            else if (clicked[4] == false && clicked[5] == true){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        else if (played == 4){
            if(clicked[0] == true && clicked[8] == true && clickedComp[0] == false && clickedComp[8] == false)
                dialog("You won!");
            else if (clicked[1] == true && clicked[7] == true && clickedComp[1] == false && clickedComp[7] == false)
                dialog("You won!");
            else if (clicked[2] == true && clicked[6] == true && clickedComp[2] == false && clickedComp[6] == false)
                dialog("You won!");
            else if (clicked[3] == true && clicked[5] == true && clickedComp[3] == false && clickedComp[5] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[0] == false && clicked[8] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[8] = true;
                clickedComp[8] = true;
            }
            
            else if (clicked[1] == true && clicked[7] == false){
                var id = String.fromCharCode(104);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[7] = true;
                clickedComp[7] = true;
            }
            else if (clicked[1] == false && clicked[7] == true){
                var id = String.fromCharCode(98);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[1] = true;
                clickedComp[1] = true;
            }
           
            else if (clicked[2] == true && clicked[6] == false){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            else if (clicked[2] == false && clicked[6] == true){
                var id = String.fromCharCode(98);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            
            else if (clicked[3] == true && clicked[5] == false){
                var id = String.fromCharCode(102);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[5] = true;
                clickedComp[5] = true;
            }
            else if (clicked[3] == false && clicked[5] == true){
                var id = String.fromCharCode(100);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[3] = true;
                clickedComp[3] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand])
                        rand = Math.random() * 9;
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        else if (played == 5){
            if(clicked[2] == true && clicked[8] == true && clickedComp[2] == false && clickedComp[8] == false)
                dialog("You won!");
            else if (clicked[3] == true && clicked[4] == true && clickedComp[3] == false && clickedComp[4] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[2] == false && clicked[8] == true){
                var id = String.fromCharCode(99);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            else if (clicked[2] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[8] = true;
                clickedComp[8] = true;
            }
            
            else if (clicked[3] == true && clicked[4] == false){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            else if (clicked[3] == false && clicked[4] == true){
                var id = String.fromCharCode(100);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[3] = true;
                clickedComp[3] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        else if (played == 6){
            if(clicked[0] == true && clicked[3] == true && clickedComp[0] == false && clickedComp[3] == false)
                dialog("You won!");
            if (clicked[2] == true && clicked[4] == true && clickedComp[2] == false && clickedComp[4] == false)
                dialog("You won!");
            if (clicked[7] == true && clicked[8] == true && clickedComp[7] == false && clickedComp[8] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[0] == false && clicked[3] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[3] == false){
                var id = String.fromCharCode(100);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[3] = true;
                clickedComp[3] = true;
            }
            
            else if (clicked[2] == true && clicked[4] == false){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            else if (clicked[2] == false && clicked[4] == true){
                var id = String.fromCharCode(99);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            
            else if (clicked[7] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[8] = true;
                clickedComp[8] = true;
            }
            else if (clicked[7] == false && clicked[8] == true){
                var id = String.fromCharCode(104);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[7] = true;
                clickedComp[7] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                    }
                }
            checkComputerWin();

        }
        else if(played == 7){
            if(clicked[1] == true && clicked[4] == true && clickedComp[1] == false && clickedComp[4] == false)
                dialog("You won!");
            else if (clicked[6] == true && clicked[8] == true && clickedComp[6] == false && clickedComp[8] == false)
                dialog("You won!");
            if(!lastMove()){
             if(clicked[1] == false && clicked[4] == true){
                var id = String.fromCharCode(98);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[1] = true;
                clickedComp[1] = true;
            }
            else if (clicked[1] == true && clicked[4] == false){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            
            else if (clicked[6] == true && clicked[8] == false){
                var id = String.fromCharCode(105);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[8] = true;
                clickedComp[8] = true;
            }
            else if (clicked[6] == false && clicked[8] == true){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
            checkComputerWin();

        }
        else if(played == 8){
            if(clicked[0] == true && clicked[4] == true && clickedComp[0] == false && clickedComp[4] == false)
                dialog("You won!");
            else if (clicked[2] == true && clicked[5] == true && clickedComp[2] == false && clickedComp[5] == false)
                dialog("You won!");
            else if (clicked[6] == true && clicked[7] == true && clickedComp[6] == false && clickedComp[7] == false)
                dialog("You won!"); 
            if(!lastMove()){
             if(clicked[0] == false && clicked[4] == true){
                var id = String.fromCharCode(97);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[0] = true;
                clickedComp[0] = true;
            }
            else if (clicked[0] == true && clicked[4] == false){
                var id = String.fromCharCode(101);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[4] = true;
                clickedComp[4] = true;
            }
            
            else if (clicked[2] == true && clicked[5] == false){
                var id = String.fromCharCode(102);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[5] = true;
                clickedComp[5] = true;
            }
            else if (clicked[2] == false && clicked[5] == true){
                var id = String.fromCharCode(99);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[2] = true;
                clickedComp[2] = true;
            }
            
            else if (clicked[6] == true && clicked[7] == false){
                var id = String.fromCharCode(104);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[7] = true;
                clickedComp[7] = true;
            }
            else if (clicked[6] == false && clicked[7] == true){
                var id = String.fromCharCode(103);
                $("#" + id).html("<img src=pictures/oks.png>");
                clicked[6] = true;
                clickedComp[6] = true;
            }
            
            else{   
                    var rand = Math.random() * 9;
                    while(clicked[rand] == true)
                        rand = Math.random() * 9;
                    rand = parseInt(rand);
                    console.log(rand);
                    clicked[rand] = true;
                    clickedComp[rand] = true;
                    var num = rand + 97;
                    var id = String.fromCharCode(num);
                    $("#" + id).html("<img src=pictures/oks.png>");
                }
            }
                checkComputerWin();
        }
        if(lastMove()){
        if(!checkComputerWin()){
            dialog("It's draw!");
        }
    }
    
}

/*provjeriti da li je zadnji potez*/
/*provjeravati da li je kompjuter pobjedio*/
/*provjeravati nerjeseno*/
/*poredati funkcije tako da ne bude kao da se automatski stavlja i O*/
/*dodati timer i bodove*/

function checkComputerWin(){
    if (clickedComp[0] == true && clickedComp[1] == true && clickedComp[2] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[3] == true && clickedComp[4] == true && clickedComp[5] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[6] == true && clickedComp[7] == true && clickedComp[8] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[0] == true && clickedComp[3] == true && clickedComp[6] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[1] == true && clickedComp[4] == true && clickedComp[7] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[2] == true && clickedComp[5] == true && clickedComp[8] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[0] == true && clickedComp[4] == true && clickedComp[8] == true){
        dialog("You lose!");
        return true;
    }
    else if (clickedComp[2] == true && clickedComp[4] == true && clickedComp[6] == true){
        dialog("You lose!");
        return true;
    }
    return false;
}
