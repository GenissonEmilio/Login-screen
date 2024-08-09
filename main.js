document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#formu');
  const esqueceu = document.querySelector('.botao');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (event) {
      window.location.href = 'teste.html'
    }
    
  })
  
  esqueceu.addEventListener('click', () => {
    alert('Tá achando que pode esquecer a senha Neggen')
  })
  
  
})