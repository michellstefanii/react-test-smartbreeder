let users = JSON.parse(localStorage.getItem('users')) || [];

export function addUser(user) {

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    return {
        type: 'ADD_USER',
        payload: user
    }
}

export function logIn(user) {

    let filteredUsers = users.filter(users => {
        return users.username === user.username && users.password === user.password;
    });

    if (filteredUsers.length) {
        let user = filteredUsers[0];
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        alert('usuario nao encontrado')
        return {
            type: 'LOGIN_FAIL'
        }
    }
    return {
        type: 'LOGGED_IN'
    }
}

export function logOut() {

    localStorage.removeItem('user');

    return {
        type: 'LOGGED_OUT'
    }
}