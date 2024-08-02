let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let streamNumber = document.getElementById('stream-number');


let addUserButton = document.querySelector('.add-user');
let clearListButton = document.querySelector('.clear-list');

let userArray = [];

function addUser() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let streamNumberValue = streamNumber.value;

    if (firstNameValue && lastNameValue && streamNumberValue) {
        let user = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            streamNumber: streamNumberValue
        };

        userArray.push(user);
        renderUsers();

        
        firstName.value = '';
        lastName.value = '';
        streamNumber.value = '';
    } else {
        alert('Вы не заполнили поля');
    }
}


function renderUsers() {
    const usersList = document.querySelector('.users-list');
    usersList.innerHTML = ''; 

    userArray.forEach((user, i) => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `Имя: ${user.firstName}, Фамилия: ${user.lastName}, Номер потока: ${user.streamNumber} <button class="delete" onclick="deleteUser(${i})">Удалить</button>`;
        usersList.appendChild(userItem);
    });
}

function deleteUser(index) {
    userArray.splice(index, 1);
    renderUsers();
}


function clearUsers() {
    userArray = [];
    renderUsers();
}


addUserButton.addEventListener('click', addUser);
clearListButton.addEventListener('click', clearUsers);
