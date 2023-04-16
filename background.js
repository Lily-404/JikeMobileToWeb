// background.js

// 监听 webRequest 事件
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // 获取原始链接
    var originalUrl = details.url;
    
    // 检查链接是否为移动端即刻动态页面
    if (originalUrl.startsWith("https://m.okjike.com/originalPosts/")) {
      // 修改链接为网页端链接
      var redirectUrl = originalUrl.replace("https://m.okjike.com/originalPosts/", "https://web.okjike.com/originalPost/");
      
      // 返回重定向信息
      return { redirectUrl: redirectUrl };
    }
  },
  {
    urls: ["https://m.okjike.com/originalPosts/*"], // 需要监听的链接匹配模式
    types: ["main_frame"], // 监听的请求类型
  },
  ["blocking"] // 需要使用 "blocking" 类型以便进行重定向
);
