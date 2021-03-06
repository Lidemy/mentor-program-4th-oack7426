## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
註: 蠻怕有寫到課程有講的，所以多寫了幾個

#### `<b>` 標籤 
文字粗體

#### `<i>` 標籤 
文字斜體

#### `<code>` 標籤 
顯示程式碼片段


#### `<textarea >` 標籤 
多行文字輸入框

#### `<section>` 標籤 
自訂的區塊，通常包含 title (h1~h6) 及內容。
註: `<section>` 不等於 `<div>`

#### `<article>` 標籤 
`<article>` 是獨立的區塊包含完整的內容，相較於 `<section>`有更高的獨立性及完整性。


## 請問什麼是盒模型（box modal）
#### ` box-sizing: content-box;`
網頁預設值，會把 `padding` 、 `border` 的數值都算在總寬高上。
(你以為的寬不是你以為的)
![盒模型原理1](https://i.imgur.com/e5ZGe0f.png)


#### `box-sizing: border-box;` 
讓寬高跟設定的一樣，不受 `padding` 、 `border` 影響
![盒模型原理2](https://i.imgur.com/qLH6fIK.png)

 
## 請問 display: inline, block 跟 inline-block 的差別是什麼？
#### `display: inline` 行內元素
不可設定寬高跟`padding` 、 `border` 、 `margin` ，由內容撐開

#### `display: block` 區塊元素
可設定寬高，元素寬度會撐到最大 `width:100%` 把整個頁面的左右塞滿

#### `display: inline-block` 行內區塊元素
與 `display: inline`最大的差別在於可設定寬高跟`padding` 、 `border` 、 `margin` ，兼具`display: inline` 跟 `display: block` 特性。 
註: 寬度跟 `display: inline` 一樣不會預設占滿整個頁面。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

#### `position: static` 預設值
不會被「特別定位」，就按照瀏覽器預設的位置排版。  


#### `position: relative` 相對定位 (父元素)
沒特別設定的話跟 `position: static` 一樣，主要是拿來當`position: absolute`的定位點。  

設定 `top`、`left`、`right`、`bottom`的效果類似於 `margin`，瀏覽器安排的元素位置還在，就只是從那個位置做移動。但不論如何做移動，都不會影響到其他元素的位置。  


#### `position: absolute` 絕對定位 (子元素)
`absolute` 的定位點是往上找第一個 `position` 不是 `static` 的元素（`fixed`/`relative`/`absolute`）
`position: absolute` 在頁面上沒有瀏覽器安排的位置(類似於浮在版面上)。
此設定會影響到其他元素的位置，畢竟原本的元素位置是直接消失變成浮空了。


#### `position: fixed` 浮動元素
很類似 `position: absolute`，但定位點是瀏覽器視窗。
`position: fixed` 在頁面上沒有瀏覽器安排的位置(類似於浮在版面上)。
由於定位點是瀏覽器視窗，所以滾動時依然會存在(永遠都在)
此設定會影響到其他元素的位置，畢竟原本的元素位置是直接消失變成浮空了。

註:此設定最常使用在惱人廣告跟 `header`