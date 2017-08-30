function qwerty(val)
{
var txt;
txt = document.getElementById('text').value;
if(val != 'DEL')
{
txt = txt + '' + val;
}
if(val == 'DEL')
{
txt = txt.substr(0,(txt.length)-1);
}
if(val == ''){
	txt = txt + '\n';
}
if(val == ' '){
	txt = txt + '' + '';
}
if(val=='DEAALL'){
	txt = txt.substr(0,0);
}
document.getElementById('text').value = txt;
}