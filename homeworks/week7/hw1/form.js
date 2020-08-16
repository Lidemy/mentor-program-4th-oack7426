// 暱稱是否為空 (OK)
// 電子郵件是否為空 (OK)
// 手機號碼是否為空 (OK)
// 報名類型是否有勾選(OK)
// 怎麼知道這個活動的是否為空 (OK)

// 如果沒有通過檢查:
// 請在欄位的 input 下方顯示紅字提醒， (OK)
// 有通過的話跳出一個 alert(OK) 展示使用者填寫的資料(OK)。


/* eslint-disable */
document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    var hasfill = false;
    var hasfillradio = false;
    var list = "";
    // 這段是判斷input[type="text"]
    var $inputAll = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < $inputAll.length; i++) {
        var $error = document.querySelectorAll('.js-input-text .error');
        if ($inputAll[i].value == "") {
            $error[i].setAttribute('style', 'display:block');
            hasfill = false;
        } else {
            $error[i].setAttribute('style', 'display:none');
            list += $inputAll[i].name + "=" + $inputAll[i].value;
            hasfill = true;
        }
    }
    // 這段是判斷input[type="radio"]
    var $errorRadio = document.querySelector('.js-input-radio .error');
    if (document.querySelector('input[type="radio"]').checked == "") {
        $errorRadio.setAttribute('style', 'display:block');
        hasfillradio = false;
    } else {
        $errorRadio.setAttribute('style', 'display:none');
        list += document.querySelector('input[type="radio"]').name + "=" + document.querySelector('input[type="radio"]').value;
        hasfillradio = true;
    }
    // 判斷是否都填寫，是：跳出alert
    if (hasfill && hasfillradio) {
        alert(list);
    }
});
/* eslint-enable */
