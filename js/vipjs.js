var data = [{
		name: "线 路 1",
		url: "https://jx.elwtc.com/vip/?url="
	},
	{
		name: "线 路 2",
		url: "https://okjx.cc/?url="

	},
	{
		name: "线 路 3",
		url: "https://www.bavei.com/vip/?url="
	},
	{
		name: "线 路 4",
		url: "https://www.bavei.com/vip/?url="
	},
	{
		name: "线 路 5",
		url: "http://vip.jlsprh.com/?url="
	},
	{
		name: "线 路 6",
		url: "http://jx.drgxj.com/?url="
	},

	//		api格式：{name:"线路名称",url:"接口地址"}, 可自行修改和添加
];
for (var i in data) {
	var opt = document.createElement("option");
	opt.value = data[i].url;
	opt.innerText = data[i].name;
	document.getElementById("api").appendChild(opt);
}

function play() {
	var url = document.getElementById("url").value;
	if (url.indexOf('http') == -1) {
		alert('视频地址不正确！');
		return;
	}
	var api = document.getElementById("api").value;
	url = api + url;
	document.getElementById("player").innerHTML =
		'<iframe marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%" src="' +
		url + '"></iframe>';
}
