## 什麼是 DOM？
DOM 文件物件模型全名為 Document Object Model，中文翻譯為 文件物件模型。
簡單來說就是 HTML 的各個標籤，會形成一個樹狀結構
![pic_htmltree](https://i.imgur.com/vag9LtK.gif)

[參考資料](https://ithelp.ithome.com.tw/articles/10202689)


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

> 先捕獲，再冒泡

捕獲：抓到指定元素
冒泡：抓到的元素往上一個個不漏的抓
（指定元素的父元素們都會觸發）
![螢幕快照 2020-08-08 下午11.49.34](https://i.imgur.com/81xQxxq.png)


## 什麼是 event delegation，為什麼我們需要它？
event delegation 事件代理


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
