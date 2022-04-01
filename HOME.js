function time(){
	document.getElementById('tim').innerHTML = Date();

}
function image(){
document.getElementById('image').src = 'https://img2.baidu.com/it/u=1627093550,2915358928&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500';
}
function para(){
	document.getElementById('para').innerHTML = '多媒体应用型的笔记本电脑是结合强大的图形及多媒体处理能力又兼有一定的移动性的综合体;'

}
function warn() {
	alert("I am a warning")
}
function text() {
	document.getElementById('para').style.backgroundColor = 'yellow';
	document.getElementById('para').style.fontFamily = 'Arial';
	document.getElementById('para').style.textAlign = 'center';
}
function degree() {
	document.getElementById('C').innerHTML = (20-32)/1.8
}
function cal() {
	var a = parseInt(prompt('number1'));
	var b = parseInt(prompt('number2'));
	alert(a+b);
}
function name() {
	var o = prompt('Nice to meet you ');
	var m = prompt('Fist name');
	var k = prompt('last name');
    alert(o+m+k);
}