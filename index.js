function register(username, email, password){
    console.log(`Registering user: ${username}, Email: ${email}`);
    const user = {
        username,
        email,
        password
    };
    // Simulate saving user
    console.log('User registered:', user);
    return user;
}



// index.js
function login(username, password) {
  if (!username || !password) {
    throw new Error("Missing credentials");
  }
  return true;
}

function logout(){
    return "User Logged out";
}

function testSimulation() {
  console.log("This is a test simulationi!");
}


function authenticate(username, password) {
    // Simulated user data for authentication
    const registeredUser = {
        username: "testuser",
        password: "password123"
    };

    if (username === registeredUser.username && password === registeredUser.password) {
        return true;
    } else {
        return false;
    }
}

function greetUser(name){
    console.log("Hello user  hill", name);
}