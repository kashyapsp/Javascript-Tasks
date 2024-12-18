function login(username, password) {
    const correctUsername = 'Abc';
    const correctPassword = 'Abc@123';

    if (username === correctUsername) {
        if (password === correctPassword) {
            console.log("login success");
        } else {
            console.log("incorrect username or password");
        }
    } else {
        console.log("incorrect username or password");
    }
}
login('Abc', 'Abc@123'); 
