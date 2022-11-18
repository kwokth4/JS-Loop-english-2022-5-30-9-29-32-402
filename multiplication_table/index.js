for(var i = 1; i < 10; i++){
    for(var j = 1; j <= i ; j++){
        process.stdout.write(i+'*'+j+"="+(i*j)+" ");
    }
    process.stdout.write("\n");
}
