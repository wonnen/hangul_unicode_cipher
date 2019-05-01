var key = "리코가세상에서제일좋아"; key_l = key.split('');
for(i=0; i<11; i++){
    key_l[i] = key.charCodeAt(i)-44032;
}

function encode(){
    var input = document.getElementById("original").value;
    var input_l = input.split('');

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
            input_l[i] += key_l[i%11];
            if(input_l[i] > 55203){
                input_l[i] -= 11171;
            }
        }
        input_l[i] = String.fromCharCode(input_l[i]);
    }

    output = input_l.join('');
    document.getElementById("encoded").value = output;
}

function decode(){
    var input = document.getElementById("encoded").value;
    var input_l = input.split('');

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
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