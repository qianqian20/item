"use strict";$(function(){var t=location.search.split("=")[1];$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:t},function(t){var n,i;n='<div id = "midpic"><img src="'+t[0].goodsListImg+'"><div id = "zoom"></div></div><ul id="smallpic">\n\t\t\t\t\t<li><img src="'+t[0].goodsListImg+'"></li>\n\t\t\t\t\t<li><img src="../images/25.jpg"></li>\n\t\t\t\t\t<li><img src="../images/26.jpg"></li>\n\t\t\t\t\t<li><img src="../images/27.jpg"></li>\n\t\t\t\t\t<li><img src="../images/28.jpg"></li>\n\t\t\t\t</ul><div id = "bigpic"><img src = "'+t[0].goodsListImg+'"></div>',i='\n\t\t\t\t<div class="title">\n\t\t\t\t\t<span>[包邮]</span>\n\t\t\t\t\t<a href="">戴维贝拉 dave&bella</a>\n\t\t\t\t\t<span>'+t[0].goodsName+'</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="title2">\n\t\t\t\t\t<a href="">戴维贝拉超级大牌日</a>\n\t\t\t\t\t<span>'+t[0].detail+'</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="price-box">\n\t\t\t\t\t<div class="price-tit">\n\t\t\t\t\t\t<span>售价</span>\n\t\t\t\t\t\t<span>￥<em>'+t[0].price+'</em></span>\n\t\t\t\t\t\t<span>￥<i>268.00</i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="youhui">\n\t\t\t\t\t\t<span>优惠</span>\n\t\t\t\t\t\t<span>满减</span>\n\t\t\t\t\t\t<span>大牌日【每满200减20·不封顶】</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="lingquan">\n\t\t\t\t\t\t<span>领券</span>\n\t\t\t\t\t\t<span>满6减5券</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br /><br />\n\t\t\t\t<div class="num">\n\t\t\t\t\t<p>数量</p>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type="button" id="btn11"  value="-" />\n\t\t\t\t\t\t<strong>1</strong>\n\t\t\t\t\t\t<input type="button" id="btn12" value="+" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p class="add" data-id = "'+t[0].goodsID+'">加入购物车</p>\n\t\t\t',$("#main-left").html(n),$(".main-right").html(i),$("#btn11").click(function(){var t=Number($(this).siblings("strong").html());--t<=1&&(t=1),$(this).siblings("strong").text(t)}),$("#btn12").click(function(){var t=Number($(this).siblings("strong").html());t++,$(this).siblings("strong").text(t)}),$(".add").click(function(){var i=$(this).attr("data-id"),s=$(this).siblings(".num").find("strong").html();$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(t){0!=t?(console.log("aa"),s=Number(s),$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:i,number:s},function(t){1==t?alert("添加成功"):0==t&&alert("购物车添加失败")})):$.each(t,function(t,n){n.goodsID==i&&(s=Number(n.number)+Number(s),$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:i,number:s},function(t){1==t?alert("购物车添加成功"):0==t&&alert("购物车添加失败")}))})})});for(var e=document.getElementById("main-left"),o=document.getElementById("midpic"),s=o.children[0],a=document.getElementById("zoom"),d=document.getElementById("bigpic"),l=d.children[0],p=document.getElementById("smallpic").children,c=function(n){p[n].onmouseover=function(){var t=p[n].children[0];s.src=t.src,l.src=t.src}},g=0;g<p.length;g++)c(g);o.onmouseover=function(){a.style.display="block",d.style.display="block"},o.onmouseout=function(){a.style.display="none",d.style.display="none"},o.onmousemove=function(t){var n=t||event,i=n.pageX-e.offsetLeft-a.offsetWidth/2,s=n.pageY-e.offsetTop-a.offsetHeight/2;i<=0&&(i=0),i>=o.offsetWidth-a.offsetWidth&&(i=o.offsetWidth-a.offsetWidth),s<=0&&(s=0),s>=o.offsetHeight-a.offsetHeight&&(s=o.offsetHeight-a.offsetHeight),a.style.left=i+"px",a.style.top=s+"px",l.style.left=-a.offsetLeft/o.offsetWidth*l.offsetWidth+"px",l.style.top=-a.offsetTop/o.offsetHeight*l.offsetHeight+"px"}})});