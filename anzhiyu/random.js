var posts=["2025/01/10/py_one/","2025/01/09/wan_1/post/","2025/01/06/hello-world/","2023/05/10/web/html/","2023/05/10/web/js/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };