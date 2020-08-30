// 暱稱是否為空 (OK)
// 電子郵件是否為空 (OK)
// 手機號碼是否為空 (OK)
// 報名類型是否有勾選(OK)
// 怎麼知道這個活動的是否為空 (OK)

// 如果沒有通過檢查:
// 請在欄位的 input 下方顯示紅字提醒， (OK)
// 有通過的話跳出一個 alert(OK) 展示使用者填寫的資料(OK)。
function form(e) {
  e.preventDefault();
  let hasfill = false;
  let hasfillradio = false;
  let list = '';
  // 這段是判斷input[type="text"]
  const $inputAll = document.querySelectorAll('input[type="text"]');
  const $error = document.querySelectorAll('.js-input-text .error');
  for (let i = 0; i < $inputAll.length; i += 1) {
    if ($inputAll[i].value === '') {
      $error[i].setAttribute('style', 'display:block');
      hasfill = false;
    } else {
      $error[i].setAttribute('style', 'display:none');
      list += `${$inputAll[i].name} = ${$inputAll[i].value}  \n`;
      hasfill = true;
    }
  }
  // 這段是判斷input[type="radio"].
  const $radio = document.querySelector('input[type="radio"]');
  const $radioType = document.getElementsByName($radio.name);
  const $errorRadio = document.querySelector('.js-input-radio .error');
  for (let j = 0; j < $radioType.length; j += 1) {
    if ($radioType[j].checked) {
      list += `${$radio.name}  =  ${$radioType[j].value} \n`;
      $errorRadio.setAttribute('style', 'display:none');
      hasfillradio = true;
      break;
    } else {
      $errorRadio.setAttribute('style', 'display:block');
      hasfillradio = false;
    }
  }
  // 判斷是否都填寫，是：跳出alert
  if (hasfill && hasfillradio) {
    /* eslint-disable */
    alert(list);
    /* eslint-enable */
  }
}

document.getElementById('submit-btn').addEventListener('click', form);
