// 可以新增 todo
// 可以刪除 todo
// 可以標記 todo 為完成/未完成
function add() {
  const addTodolist = document.getElementById('addTodolist').value;
  const newList = document.createElement('li');
  const newText = `
    <label>
        <input type="checkbox">
        <span>${addTodolist}</span>
    </label>
    <button onclick="delet(this)">刪除</button>
    `;
  newList.innerHTML = newText;
  document.getElementById('todolistWrap').appendChild(newList);
}

/* eslint-disable */
function delet(el) {
  const elParent = el.parentNode;
  elParent.remove();
}
/* eslint-enable */

document.getElementById('addBtn').addEventListener('click', add);
