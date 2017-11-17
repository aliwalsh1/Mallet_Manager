const CreateUser = document.querySelector('.CreateUser');
CreateUser.addEventListener('submit', (e) => {
    alert('creating account');
    e.preventDefault();
    const username = CreateUser.querySelector('.username').value;
    const password = CreateUser.querySelector('.password').value;
    post('/createUser', { username, password })
});
const Login = document.querySelector('.Login');
Login.addEventListener('submit', (e) => {
    alert('logging in');
    e.preventDefault();
    const username = Login.querySelector('.username').value;
    const password = Login.querySelector('.password').value;
    post('/login', { username, password })
        .then(({ status }) => {
            console.log('checking authentication');
            if (status === 200) {
                alert('login success');
                window.location="home.html";
            }
            else alert('login failed')
        })
})
function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}