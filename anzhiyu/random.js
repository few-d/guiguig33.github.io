var posts=["2023/05/10/dnoi/","2025/01/06/hello-world/","2025/01/09/post/","2023/05/10/html/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };