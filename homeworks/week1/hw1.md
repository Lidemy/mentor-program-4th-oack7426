## 交作業流程
請用文字一步步敘述應該如何交作業。

範例：

1. 新開一個 branch：`git branch hw1`
2. 切換到 branch：`git checkout hw1`
---
>tips:  
>作業基本上是「當週的每一個都寫好」再一起交，而不是寫完一個交一個

### step1 設定 GitHub 交作業專案
GitHub classroom 網址：https://classroom.github.com/a/SbDvk2VA  
複製作業到自己的 GitHub 帳號

### step2 把專案載到本地端

```
git clone {專案網址}
```

### step3 建 branch 寫作業

```
** 創建 brnach 並同時切換過去
git checkout -b {branch name}
```
>tips:  
>寫任何作業都記得要開 branch 寫，千萬不要在 master 上寫！

### step4 完成作業把 branch 推上 GitHub

```
git push origin {branch name}
```
### step5 把 branch 合併到 master
1.到 GitHub 專案網站  
2.Pull requests 分頁  
3.點擊 Compare & pull request 按鈕 

>tips:  
>沒出現分支可改為 -  
>點擊 New pull request 按鈕 >> 選擇分支 >> Create pull request 按鈕

4.寫 commit 內容  

>tips:  
>有問題可以寫在 commit 裡

5.回到學習系統點擊"新增作業"按鈕，發PR

>tips:  
>PR網址是剛剛合併 master 的 Pull requests 頁面網址    
>...../pull/...












