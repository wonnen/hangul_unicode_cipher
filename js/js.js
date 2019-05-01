var key1 = "리코가세상에서제일좋아"; key1_l = key1.split('');
var key2 = "세상에서리코가제일이뻐"; key2_l = key2.split('');
var key3 = "제일착한리코야사랑해요"; key3_l = key3.split('');
for(i=0; i<11; i++){
    key1_l[i] = key1.charCodeAt(i)-44032;
    key2_l[i] = key2.charCodeAt(i)-44032;
    key3_l[i] = key3.charCodeAt(i)-44032;
}

function encode(){
    var input = document.getElementById("original").value;
    var input_l = input.split('');

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
            if(input_l[i]%3 == 0){
                input_l[i] += key1_l[i%11];
            }else if(input_l[i]%3 == 1){
                input_l[i] += key2_l[i%11];
            }else{
                input_l[i] += key3_l[i%11];
            }

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
            if(input_l[i]%3 == 0){
                input_l[i] -= key1_l[i%11];
            }else if(input_l[i]%3 == 1){
                input_l[i] -= key2_l[i%11];
            }else{
                input_l[i] -= key3_l[i%11];
            }

            if(input_l[i] < 44032){
                input_l[i] += 11171;
            }
        }
        input_l[i] = String.fromCharCode(input_l[i]);
    }

    output = input_l.join('');
    document.getElementById("original").value = output;
}