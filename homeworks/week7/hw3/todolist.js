// 可以新增 todo
// 可以刪除 todo
// 可以標記 todo 為完成/未完成

function delet(el) {
  const elParent = el.parentNode;
  elParent.remove();
}

function add() {
  const addTodolist = document.getElementById('addTodolist').value;
  const newList = document.createElement('li');
  const newText = `
    <label>
        <input type="checkbox">
        <span>${addTodolist}</span>
    </label>
    <button class="js-remove">刪除</button>
    `;
  if (addTodolist === '') {
    /* eslint-disable */
    alert('請輸入內容');
    /* eslint-enable */
    return;
  }
  newList.innerHTML = newText;
  document.getElementById('todolistWrap').appendChild(newList);
}

function deletAll() {
  for (let i = 0; i < document.querySelectorAll('.js-remove').length; i += 1) {
    document.querySelectorAll('.js-remove')[i].addEventListener('click', (e) => {
      delet(e.target);
    });
  }
}
deletAll();

document.getElementById('addBtn').addEventListener('click', () => {
  add();
  deletAll();
});
