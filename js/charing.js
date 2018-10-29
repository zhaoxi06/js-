window.onload = function(){
	BOOKSLEN = 21;
	text = ["追风筝的人","查令十字街84号","基督山伯爵","平凡的世界","活着","白夜行","解忧杂货店","嫌疑人X的献身","灿烂千阳","至味在人间","奇特的一生","穆斯林的葬礼","西游记","萌芽","百年孤独","悲惨世界","老人与海","哈姆雷特","围城","罪与罚","麦田里的守望者"];
	//创建BOOKSLEN 个div
	for(var i=0;i<BOOKSLEN;i++){
		var book = document.createElement("div");
		book.setAttribute("class","book");
		var imgshow = document.createElement("img");
		imgshow.src = "./img/charing/book" + i + ".jpg";
		book.appendChild(imgshow);
		var covertext = document.createElement("div");
		covertext.setAttribute("class","cover");
		covertext.innerHTML = text[i];
		book.appendChild(covertext);
		document.body.appendChild(book);
	}

	var aBooks = document.getElementsByClassName("book");
	

	//给book设置旋转的角度
	for(var i=0;i<BOOKSLEN;i++){
		deg = randomRotateDeg();
		l = 30 + randomBookLeft();
		t = 30 + randomBookTop();
		aBooks[i].style.left = l + "px";
		aBooks[i].style.top = t + "px";
		// aBooks[i].offsetLeft = left + "px";
		// aBooks[i].offsetTop = top + "px";
		aBooks[i].style.transform = "rotate("+deg+"deg)";
	}

	//鼠标移入时隐藏cover中的文字
	var N = 1;
	for(var i=0;i<BOOKSLEN;i++){
		var content = '';
		cover = aBooks[i].getElementsByClassName("cover")[0];
		aBooks[i].onmouseover = function(){
			var cover = this.getElementsByClassName("cover")[0];
			content = cover.innerHTML;
			cover.innerHTML = "";
			// 增加文字渐变过渡效果，现在没有哦
			cover.style.backgroundColor = "rgba(0,0,0,0)";
			this.style.transform = "rotate(0)";
			this.style.width = 180+"px";
			//调整一下层级
			this.style.zIndex = 1;
		};
		aBooks[i].onmouseout = function(){
			(N==1) ? N=-1 : N=1; //使div的每次旋转的方向都跟上一次方向不一样
			var cover = this.getElementsByClassName("cover")[0];
			cover.innerHTML = content;
			cover.style.backgroundColor = "rgba(0,0,0,0.3)";
			this.style.transform = "rotate("+7*N+"deg)";
			this.style.width = 120+"px";
			this.style.zIndex = 0;
		}

	}

	function randomRotateDeg(){
		return Math.floor(Math.random()*360);
	}
	function randomBookTop(){
		maxHeight = document.documentElement.clientHeight - 240;
		return Math.floor(Math.random()*maxHeight);
	}
	function randomBookLeft(){
		maxWidth = document.documentElement.clientWidth-200;
		return Math.floor(Math.random()*maxWidth);
	}

	//拖拽
	function drag(){

	}
}