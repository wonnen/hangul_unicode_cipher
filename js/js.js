function encode(){
    var input = document.getElementById("original").value;
    var input_l = input.split('');
    for(i=0; i<input_l.length; i++){
        input_l[i] = input.charCodeAt(i);
    }
    output = input_l.join('');
    document.getElementById("original").value = output;
}