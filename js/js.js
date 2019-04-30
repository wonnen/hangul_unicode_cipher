function encode(){
    var input = document.getElementById("original").value;
    var input_l = input.split('');

    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);

        if((input_l[i] >= 44032) && (input_l[i] <= 55203)){
            input_l[i] += 10000;

            if(input_l[i] > 55203){
                input_l[i] -= 11183;
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
            input_l[i] -= 10000;

            if(input_l[i] < 44032){
                input_l[i] += 11183;
            }
        }
        input_l[i] = String.fromCharCode(input_l[i]);
    }

    output = input_l.join('');
    document.getElementById("original").value = output;
}