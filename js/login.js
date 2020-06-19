function login_check(){
 	var fso;
	try { 
	fso=new ActiveXObject("Scripting.FileSystemObject"); 
	} catch (e) { 
	alert("当前浏览器不支持，注册请用IE浏览器");
	return;
	}
	var openf1=fso.OpenTextFile("D:\\Desktop\\html作业\\Cook\\COOK1.txt");
	var openf2=fso.OpenTextFile("D:\\Desktop\\html作业\\Cook\\COOK2.txt");
	var name2=openf1.ReadLine();
	var paw2=openf2.ReadLine();
	var name1=document.getElementById('userName_login').value;
	var paw1=document.getElementById('userPaw_login').value;
	if (name1!=name2) {
		alert("用户名不存在！");
	}
	else if (paw1!=paw2){
		alert("密码错误！");
	}
	else{
		alert("登陆成功！");
	}
}