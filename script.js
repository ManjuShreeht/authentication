function clickhome() {
    document.getElementById('home-form').style.display = "block";
    document.getElementById('login-form').style.display = "none";
    document.getElementById('register-form').style.display = "none";
    document.getElementById('homeactive').classList.add("active")
    document.getElementById('logactive').classList.remove("active")
    document.getElementById('regactive').classList.remove("active")

}

function clicklog() {
    document.getElementById('home-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';

    document.getElementById('homeactive').classList.remove("active")
    document.getElementById('logactive').classList.add("active")
    document.getElementById('regactive').classList.remove("active")


}

function clickreg() {
    document.getElementById('home-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('homeactive').classList.remove("active")
    document.getElementById('logactive').classList.remove("active")
    document.getElementById('regactive').classList.add("active")


}

/*multiple user data stor */
let user_db = [];
let savedemail = '';
let savedpassword = '';

function validate() {

    let error = false;
    let firstname = document.getElementById('first_name').value;

    let lastname = document.getElementById('last name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password1 = document.getElementById('password1').value;
    if (firstname.length < 2) {
        error = true;
        document.getElementById('span').style.display = 'block';
    } else {

        document.getElementById('span').style.display = 'none';
    }
    if (lastname.length < 2) {
        error = true;
        document.getElementById('span1').style.display = 'block';
    } else {

        document.getElementById('span1').style.display = 'none';
    }
    if (

        email.includes("@") &&
        email.includes(".") &&
        email.lastIndexOf(".") < email.length - 2 &&
        email.indexOf("@") > 0 && email.indexOf("@") + 1 < email.lastIndexOf(".")
    ) {

        document.getElementById("span2").style.display = "none";

    } else {
        error = true;
        document.getElementById("span2").style.display = "block";

    }
    if (password == "" || password.length < 5) {
        error = true;
        document.getElementById('span3').style.display = 'block'
    } else {
        document.getElementById('span3').style.display = 'none'
    }

    if (password !== password1 || password1 === "") {
        error = true;
        document.getElementById('span4').style.display = 'block';
    } else {
        document.getElementById('span4').style.display = 'none';
    }

    if (!error) {
        let userdetails = {
            firstname,
            lastname,
            email,
            password: encryptpassword(password),
        }
        user_db.push(userdetails);

        alert(" saved successfully")
        document.getElementById('first_name').value = '';

        document.getElementById('last name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password1').value = '';
    }

}

function login() {
    const login_password = document.getElementById('login-password').value;
    const login_username = document.getElementById('login-username').value;

    if (user_db.find(user => user.email === login_username && decrypt(user.password) === login_password)) {
        alert("granted");
    } else {
        alert("not")
    }
    document.getElementById('login-password').value = '';


    document.getElementById('login-username').value = '';




}


let encryptionrule = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M',
    'a': 'n',
    'b': 'o',
    'c': 'p',
    'd': 'q',
    'e': 'r',
    'f': 's',
    'g': 't',
    'h': 'u',
    'i': 'v',
    'j': 'w',
    'k': 'x',
    'l': 'y',
    'm': 'z',
    'n': 'a',
    'o': 'b',
    'p': 'c',
    'q': 'd',
    'r': 'e',
    's': 'f',
    't': 'g',
    'u': 'h',
    'v': 'i',
    'w': 'j',
    'x': 'k',
    'y': 'l',
    'z': 'm',
    '0': '5',
    '1': '6',
    '2': '7',
    '3': '8',
    '4': '9',
    '5': '0',
    '6': '1',
    '7': '2',
    '8': '3',
    '9': '4',
    '!': '#',
    '$': '%',
    '&': '+',
    '-': '@',
    '': '~',
    '#': '!',
    '%': '$',
    '+': '&',
    '@': '-',
    '~': ''
}

function encryptpassword(inputstring) {

    let encryptedstring = '';

    for (let char of inputstring) {
        encryptedstring = encryptedstring + encryptionrule[char]
    }
    return encryptedstring;
}

function decrypt(encreptedstring) {
    let originalstring = '';
    let keys = Object.keys(encryptionrule)
    let values = Object.values(encryptionrule)
    for (let char of encreptedstring) {
        let requiredindex = values.indexOf(char);
        originalstring = originalstring + keys[requiredindex]
    }
    return originalstring;
}