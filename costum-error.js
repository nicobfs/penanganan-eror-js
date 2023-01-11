let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 //JSON.parse akan mengonversi data String menjadi object. 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 //Apabila format String tidak sesuai, 
 //maka fungsi tersebut akan melemparkan SyntaxError
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}