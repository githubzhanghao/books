

function log(s){
    console.log(s);
}

function w(s){
    try{
        document.write(JSON.stringify(s));
    }
    catch {
        document.write(s);
    }
    
    document.write('<br/>')
}

// export { log, w};