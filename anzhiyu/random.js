var posts=["2025/02/09/orther/time/","2025/01/11/web/ms_html/","2025/01/10/py_one/","2025/01/09/wan_1/post/","2025/01/06/hello-world/","2023/05/10/web/html/","2023/05/10/web/js/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"简约而不失优雅的hexo主题","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"寅春树","hundredSuffix":"","link":"www.chunten.com","avatar":"https://www.chunten.com/upload/default/20230815/072d7b7cf9530cfae192f57d066ac876.png","descr":"生活明朗，万物可爱"},{"name":"小明的部落格","hundredSuffix":"","link":"https://www.xmdblog.com/","avatar":"https://s2.loli.net/2023/12/24/RUJTdZMYVPFlbBD.jpg","descr":"生活明朗，万物可爱"},{"name":"Eily","hundredSuffix":"","link":"https://ngc2237.love","avatar":"https://ngc2237.love/imgUrl/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人","siteshot":"https://bu.dusays.com/2024/10/25/671b50dc2dd2b.png"},{"name":"小李同学 Coding","link":"https://blog.xxfer.cn/","avatar":"https://blog.xxfer.cn/img/config/kpbl.jpg","descr":"在深度学习的真火里，寻找解释世界的终极灵丹妙药...","siteshot":"https://blog.xxfer.cn/img/config/siteshoot.png"},{"name":"陵长镜","link":"https://r1n.top","avatar":"https://s1.imagehub.cc/images/2024/11/21/821d8da0340bf81203c956d7d09ea37e.jpeg","descr":"Everything collapses, but you rise."},{"name":"璜珀的小屋","link":"https://blog.hpcesia.com/","avatar":"https://blog.hpcesia.com/img/myavatar.webp","descr":"一个想要摆烂却又不甘于躺平的人","siteshot":"https://blog.hpcesia.com/img/siteshot.webp"},{"name":"XingJiのBlog","link":"https://love.xingji.fun/","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"https://i.p-i.vip/47/20240920-66ed7b6730ca9.png"},{"name":"青稚の空间","link":"https://blog.linux-qitong.top/","avatar":"https://blog.linux-qitong.top/img/avatar.jpg","descr":"越努力，越幸运.","siteshot":"https://blog.linux-qitong.top/img/qingzhi.webp"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://bu.dusays.com/2023/09/27/6513053bebdb2.webp","descr":"以博客记录生活与热爱！","topimg":"https://bu.dusays.com/2023/10/02/651a4d79bb412.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };