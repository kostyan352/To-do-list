let oList = document.querySelector(".tasks");
let input = document.querySelector(".form__field");
let addBtn = document.querySelector("#fff");
let delBtn = document.querySelector(".button");
let h = document.querySelector("h3");
let tasks = [];
let num = 0

addBtn.onclick = function () {
  num++
  tasks.unshift(input.value);
  input.value = "";
  createTask();
  h.textContent = `Список задач: (Количество новых задач: ${num})`
};

delBtn.onclick = () => {
  del();
};


function createTask() {
  let task = document.createElement("li");
  task.innerHTML = `<div class="holder">
  <div class="checkbox">
    <input type="checkbox" class="check" id="check5" />
    <label for="check5" class="label">
      <svg width="500" height="50" viewBox="0 0 500 50" style="">
        <rect x="15" y="20" width="25" height="25" stroke="black" fill="none" stroke-opacity=".5" />
        <g transform="translate(0,-1002.3622)">
          <path d="m 15,1033 c 11,-9 27,2 39,-1 4,-1 7,-3 12,-3 11,0 20,2 30,7 5,2 42,2 48,0 4,-2 8,-3 13,-6 7,-3 26,0 35,0 14,0 28,-3 42,-3 37,0 73,6 107,-2 6,-1 18,-0.01 24,2 3,1 7,-0 11,0 21,4 42,2 63,-4 14,-4 49,12 55,7" stroke="black" fill="none" stroke-width="3"
          class="path2" />
        </g>
      </svg>
      <span style="position:absolute;top:10px;margin-left:50px">${tasks[0]}</span>
    </label>
  </div>
</div>`;
  oList.before(task);
}

function del() {
  let box = document.querySelectorAll(".check");
  for (let li of box) {
    if (li.checked) {
      li.parentElement.parentElement.parentElement.remove();
      num--
    }
  }
  h.textContent = `Список задач: (Количество новых задач: ${num})`
}

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});