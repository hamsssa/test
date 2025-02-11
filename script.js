//////DOM ELEMENTS

const submitButton = document.getElementById('boton');
const nameInput = document.getElementById('nom');
const userList = document.querySelector('ul');
const UsersCreados = document.getElementById('UsuariosCreados');
const UsersBorrados = document.getElementById('UsuariosBorrados');
const UsersActualizados = document.getElementById('UsuariosActualizados');
const lightmode = document.getElementById('darkmode');
const body = document.getElementById('body');


let contadorBorrados = 0;
let contadorActualizados = 0;
let contadorCreados = 0;


//let isDefault = true;

//lightmode.addEventListener('click', function()
//{
    //if (isDefault)     
    //{
      //  this.innerHTML = 'Dark Mode';
       // document.body.style.setProperty('background-image', 'radial-gradient(circle, #34c759, #cccccc)');
    //} 
    
   // else 
   // {
    //    this.innerHTML = 'Light Mode';
   //     document.body.style.setProperty('background-image', 'radial-gradient(circle, #0e846e, #000000)');
   // }
   // isDefault = !isDefault; 
//});


submitButton.addEventListener('click', function() 
{
    let numbers = false;
    let vacio = false;

    //validation error
    if (nameInput.value.trim() === "") 
    {
        vacio = true;
    }
    for (let i = 0; i < nameInput.value.length; i++) 
    {
        if (!isNaN(nameInput.value[i]) || nameInput.value[i] == '<') 
        {
            numbers = true;
            break;
        }
    }
    if (vacio) 
    {
        alert("Vous n'avez rien mis");
        console.error("String vide")
    } 
    else if (numbers) 
    {
        alert('Vous ne pouvez pas avoir des nombres');
    } 
    else 
    {
        userList.insertAdjacentHTML('beforeend', `<li class="list-item">${nameInput.value} <button class="delete">❌</button><button class="actualizar">✏️</button></li>`);
        contadorCreados++;
        UsersCreados.innerHTML = `Utilisateurs créés: ${contadorCreados}`;
        nameInput.value = ''; 
    }
});

userList.addEventListener('click', function(event) 
{
    let numbers = false;

    if (event.target.classList.contains('delete')) 
    {
        const li = event.target.parentNode;
        li.remove();
        contadorBorrados++;
        UsersBorrados.innerHTML = `Utilisateurs supprimés: ${contadorBorrados}`;
    }
    else if (event.target.classList.contains('actualizar')) 
        {

        let newNombre = prompt('Mettez le nouveau nom');

        if (newNombre === null || newNombre.trim() === "") 
        {
            console.error("String vide")
            alert("Vous n'avez rien mis");
        }
        for (let i = 0; i < newNombre.length; i++) 
        {
            if (!isNaN(newNombre[i]) || newNombre[i] == '<') 
            {
                numbers = true;
                break;
            }
        }
        if (numbers) 
        {
            alert('Vous ne pouvez pas avoir des nombres');
        } 
        else 
        {
            const li = event.target.parentNode;
            li.innerHTML = `${newNombre} <button class="delete">❌</button><button class="actualizar">✏️</button>`;
            contadorActualizados++;
            UsersActualizados.innerHTML = `Utilisateurs mis a jour: ${contadorActualizados}`;
        }
    }
});
