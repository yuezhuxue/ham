# HAM exam practice
# [https://yuezhuxue.gitee.io/ham/](https://yuezhuxue.gitee.io/ham/)

## 使用方法
1. 首次进入练习页面需点击**初始化**
2. 点击**查询**，如果已完成题数为0，则正常，  
    否则表示此款浏览器不支持本地cookie操作
3. 点击**下一题**开始练习，点击ABCD按钮回答  
    答对从随机池移除该题，答错不移除
4. 点击**查看答案**显示答案
5. **导出**按钮，一键导出cookie到剪贴板
6. **导入**按钮，从按钮上面的输入框导入cookie





## Cookie格式
每个页面只能修改对应版本的cookie
|cookie头|cookie内容|
|--------|---------|
|aa|A,0,0,0...|
|ba|BA,0,0,0...|
|bb|BB,0,0,0...|
|ab|B,0,0,0...|
|ca|CA,0,0,0...|
|cb|CB,0,0,0...|
|cc|CC,0,0,0...|
|abc|C,0,0,0...|