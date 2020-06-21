## 教你朋友 CLI
有天，你的麻吉 h0w 哥跑來找你說：「欸！能不能教我 command line 到底是什麼，然後怎麼用啊？我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。就交給你了，教學寫好記得傳給我，ㄅㄅ」

可...可惡，居然這樣子就跑走了。但因為他是你的麻吉，所以你也沒辦法拒絕。

因此這個作業要請你寫一篇簡短的文章，試圖教會 h0w 哥什麼是 command line 以及如何使用，並且要教他如何達成他想要的功能。


---

 ## CLI 到底系蝦米?
 CLI (command line) 簡單來說就是另一種方式控制電腦，只是用純文字的方式來控制，中文稱"命令行介面"。  
 舉個例子，一般來說"重新命名檔案"的步驟是
 ```
 找到檔案 -> 按右鍵改名 -> Enter確認
 ```  
 ![圖型式操作介面](https://i.imgur.com/Z7cbWsO.png)

那用 CLI 的話，一樣的步驟可以全部簡化為純文字指令操作
```
mv {檔名} {新的檔名}
```

![命令行介面](https://i.imgur.com/hTVlgav.png)

讓人省去開一堆視窗的困擾，只要下指令你就有辦法操作整台電腦，就是這麼簡單啦！(￣▽￣)~*


## CLI 要怎麼開始哩？
雖然只是用指令就可以操控電腦，但也得要先有個下指令操控電腦的地方，    
所以要先裝環境，就像寫字你也得要有紙才能寫，難不成有筆就把整個世界都當紙來寫？

**安捏母湯**

![安捏母湯](https://i.imgur.com/fy0H4IG.jpg)


環境安裝請依照以下指示安裝，什麼? 你說太簡略看不懂?  
那只好祭出其他大大的教學文讓你看懂了  
 ~~文章看不懂請不要來找我~~  

#### windows 環境
安裝 git-bash  
[安裝在 Windows 作業系統](https://gitbook.tw/chapters/environment/install-git-in-windows.html)

#### mac 環境
**way1:** 打開內建環境 terminal  
[在 Mac 上打開或結束「終端機」](https://support.apple.com/zh-tw/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)

**way2:** 安裝 iTerm 2  
[透過在 MAC 上安裝ITERM2 活潑你的終端機](https://dustinhsiao21.com/2019/04/09/%E9%80%8F%E9%81%8E%E5%9C%A8-mac-%E4%B8%8A%E5%AE%89%E8%A3%9Diterm2-%E6%B4%BB%E6%BD%91%E4%BD%A0%E7%9A%84%E7%B5%82%E7%AB%AF%E6%A9%9F/)


### CLI 到底要怎麼操控電腦?
~~就下指令，不然哩?~~  
[Command Line指令](https://lidemy-notes-oack7426.coderbridge.io/2020/06/14/Command-Line-teach/)

**題目:**
- 建立一個叫做 wifi 的資料夾  
- 在 wifi 的資料夾裡面建立一個叫 afu.js 的檔案  

關於題目所說的，會用的有這幾個指令  

`cd`     切換到指定資料夾  
`mkdir`  建立資料夾  
`touch`  建立檔案or更改檔案時間（改成最新時間）  

```
**詳細步驟**

cd /c/Users/30114/Desktop  切換到桌面 
mkdir wifi  建立wifi資料夾
cd ./wifi  切換到wifi資料夾
touch afu.js  建立afu.js檔案
```

![完成how哥要求](https://i.imgur.com/0drcyOB.png)

安捏我們就完成 h0w 哥要的教學文啦(ﾉ∀`*)

