function check(){
	var name=document.getElementById('userName').value;
	var pa1=document.getElementById('userPaw').value;
	var pa2=document.getElementById('userPawC').value;
	var nameCenter=new Array("123456","1234567");
	for (var i = nameCenter.length - 1; i >= 0; i--) {
		if (name==nameCenter[i]) {
			alert("用户名已存在,请重新输入！");
			return false;
		}
	}
	if (name.length<6||name.length>12) {
		alert("用户名的长度为6—12个字符，请修改用户名！");
		return false;
	}
	else if(pa1.length<6||pa1.length>16) {
		alert("密码长度为6-16个字符，请确认后重新输入！");
		return false;
	}
	else if (pa1!=pa2) {
		alert("两次输入的密码不一致，请重新输入！");
		return false;
	}
	else{
		alert("注册成功！");
	}
}
function writeFile(){
	var fso;
	try { 
	fso=new ActiveXObject("Scripting.FileSystemObject"); 
	} catch (e) { 
	alert("当前浏览器不支持，注册请用IE浏览器");
	return;
	} 
	nameReturn=document.getElementById('userName').value;
	pawReturn=document.getElementById('userPaw').value;
	var f1 = fso.createtextfile("D:\\Desktop\\html作业\\Cook\\COOK1.txt",true);
	var f2 = fso.createtextfile("D:\\Desktop\\html作业\\Cook\\COOK2.txt",true);
	f1.writeLine(nameReturn);
	f2.writeLine(pawReturn);
}
