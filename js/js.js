var key = "리코가세상에서제일좋아"; key_l = key.split('');
for(i=0; i<11; i++){
    key_l[i] = key.charCodeAt(i)-44032;
}

function getRandomInt(){
    var rand =  Math.floor(Math.random()*(55203-44032+1))+44032;
    return rand;
}

function encode(){
    var input = document.getElementById("original").value;
    var input_l = input.split('');
    var rand = getRandomInt();

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
            input_l[i] += key_l[i%11];
            if(input_l[i] > 55203){
                input_l[i] -= 11171;
            }

            input_l[i] += (rand - 44032);
            if(input_l[i] > 55203){
                input_l[i] -= 11171;
            }
        }
        input_l[i] = String.fromCharCode(input_l[i]);
    }

    r_moji = String.fromCharCode(rand);
    output = input_l.join('');
    document.getElementById("encoded").value = r_moji + output;
}

function decode(){
    var input = document.getElementById("encoded").value;
    var input_l = input.split('');
    var rand = input.charCodeAt(0);
    input_l.splice(0, 1);

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
            input_l[i] -= (rand - 44032);
            if(input_l[i] < 44032){
                input_l[i] += 11171;
            }

            input_l[i] -= key_l[i%11];
            if(input_l[i] < 44032){
                input_l[i] += 11171;
            }
        }
        input_l[i] = String.fromCharCode(input_l[i]);
    }

    output = input_l.join('');
    document.getElementById("original").value = output;
}