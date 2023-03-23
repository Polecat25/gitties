const user =document.getElementById('user')
const pass =document.getElementById('pass')
const botton =document.getElementById('boton')
botton.addEventListener('click', (e) => {
    e.preventDefault()
    const DATA ={
            user: user.value,
            pass: pass.value
    }
    console.log(DATA);
})

/* botton.addEventListener('click', () => {
    alert('You clicked the button');
  }); */