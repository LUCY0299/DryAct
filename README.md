<<<<<<< HEAD
# DryAct

## 前後端設計框架
- 前端用vue.js
- 後端用FastAPI
## 三個頁面的設計
- 第一頁(首頁)
  根據DryAct\新版_研究題目0718.docx的內容描述製作一個吸引人、有質感、背景有自然元素但是簡約乾淨、中間幫我生成可以代表我研究題目logo、在logo下方加入一個橢圓形響應式按鈕按下後跳轉到第二個頁面
- 第二頁    
  串聯https://fhy.wra.gov.tw/fhyv2/ 頁面顯示在頁面中央，周圍有長方形邊框，色調與第一頁的風格相同，並且整個頁面簡約好看有質感，在右下方加入一個顯眼的圓形按鈕，按下後跳轉到第三頁
- 第三頁    
  嵌入Tally.so，程式碼如下
 <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>乾旱問卷</title>
    <script async src="https://tally.so/widgets/embed.js"></script>
    <style type="text/css">
      html { margin: 0; height: 100%; overflow: hidden; }
      iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
    </style>
  </head>
  <body>
    <iframe data-tally-src="https://tally.so/r/mBWe85?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="乾旱問卷"></iframe>
  </body>
</html>
>>>>>>> d4c4316 (first commit)
