let oList = document.querySelector('.tasks')
let input = document.querySelector('.inputTask')
let addBtn = document.querySelector('.addBtn')
let delBtn = document.querySelector('.delBtn')
let h = document.querySelector('h3')
let tasks = []

addBtn.onclick = function() {
  tasks.unshift(input.value)
  input.value = ''
  createTask()
  calc()
  delBtn.removeAttribute('hidden')
}

delBtn.onclick = () => {
  del()
  calc()
}

function createTask() {
  let task = document.createElement('li')
  task.innerHTML = `<input type='checkbox' class="choose"></input> ${tasks[0]}`
  oList.before(task)
  
}
function calc() {
  let box = document.querySelectorAll('.choose')
  h.textContent = `Список задач: (Количество новых задач: ${box.length})`
}

function del () {
  let box = document.querySelectorAll('.choose')
   for (let li of box) {
    if (li.checked) {
      li.parentElement.remove()
    }
   }
}

