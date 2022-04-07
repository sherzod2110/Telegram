const input = document.getElementById('input');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
const form = document.querySelector(".form")

form.addEventListener('submit', (evt)=>{
  evt.preventDefault()
  let newLI = document.createElement('li')

  if(input.value ==  ''){
    alert('text yozz')
  }  else{
    newLI.textContent = input.value
    result.appendChild(newLI)
  }
  input.value = ''   
  input.focus()    
})