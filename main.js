const key = document.querySelector('.key-input')
const errorMessage = document.querySelector('#error-msg')
let userKey = document.querySelector('#userKey').value
const isTyping = false
const delayInMilliseconds = 1200
const subButton = document.querySelector('#subButton')
let users = [ 
    {username: 'Killa', key: '001Killa'},
    {username: 'Tino', key: '002Chami'},
    {username: 'Owen', key: '003Chini'},
    {username: 'Mwiza', key: '004Mwiza'},
    {username: 'Thami', key: '005Ches'},
    {username: 'Rhuli', key: '006Slayers'},
    {username: 'Khotso', key: '007Slider'},
    {username: 'Yadav', key: '008Yadav'},
    {username: 'Wavy', key: '009Wavy'}
]


function getUserKey() {
    userKey = document.querySelector('#userKey').value;
        console.log('Your key is: ' + userKey);
}

function checkUser() {
    userKey = document.querySelector('#userKey').value;

    const regUser = users.filter(function(user) {
        if(userKey === user.key) {
            console.log(`Welcome ${user.username} !`)
            location.href = "/games.html";
            errorMessage.innerHTML = ""
        } 
    })

    if(regUser.length === 0) {
        errorMessage.innerHTML = `OH OH ! ${userKey} is not a registered user`
    }

    /*
    if(regUser) {
        console.log(`Welcome ${regUser.username} !`)
        //location.href = "/games.html";
    } else {
        console.log(`OH OH ! ${userKey} is not a registered user`)
    }*/

    //user => user.key===userKey ? console.log(`Welcome ${user.name}!`) : console.log(`OH OH ! ${userKey} is not a registered user`)

    // users.forEach(user => {
    //     if(users.key === userKey) {
    //         alert(`Welcome ${user.username} !`)
    //     }
    //     else {
    //         //alert(`Sorry, ${userKey} is not a registered key :(`)
    //     }
    // })
}

// key.addEventListener('keydown', typing)
// key.addEventListener('keyup', notTyping)


subButton.addEventListener('click',checkUser, false)
