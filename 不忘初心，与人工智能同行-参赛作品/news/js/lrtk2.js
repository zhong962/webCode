$(function(){
 $('a').focus(function(){this.blur();});
 SI.Files.stylizeAll();
 slider1.init();


 $('input.text-default').each(function(){
  $(this).attr('default',$(this).val());
 }).focus(function(){
  if($(this).val()==$(this).attr('default'))
   $(this).val('');
 }).blur(function(){
  if($(this).val()=='')
   $(this).val($(this).attr('default'));
 });

 $('input.text,textarea.text').focus(function(){
  $(this).addClass('textfocus');
 }).blur(function(){
  $(this).removeClass('textfocus');
 });

 var popopenobj=0,popopenaobj=null;
 $('a.popup').click(function(){
  var pid=$(this).attr('rel').split('|')[0],_os=parseInt($(this).attr('rel').split('|')[1]);
  var pobj=$('#'+pid);
  if(!pobj.length)
   return false;
  if(typeof popopenobj=='object' && popopenobj.attr('id')!=pid){
   popopenobj.hide(50);
   $(popopenaobj).parent().removeClass(popopenobj.attr('id').split('-')[1]+'-open');
   popopenobj=null;
  }
  return false;
 });
 $('p.images img').click(function(){
  var newbg=$(this).attr('src').split('bg/bg')[1].split('-thumb')[0];
  $(document.body).css('backgroundImage','url(\'../images/bg/bg'+newbg+'.jpg)');
 
  $(this).parent().find('img').removeClass('on');
  $(this).addClass('on');
  return false;
 });
 
 $('div.sc-large div.img:has(div.tml)').each(function(){
  $('div.tml',this).hide();
  $(this).append('<a href="#" class="tml_open"> </a>').find('a').css({
   left:parseInt($(this).offset().left)+864,top:parseInt($(this).offset().top)+1
  }).click(function(){
   $(this).siblings('div.tml').slideToggle();
   return false;
  }).focus(function(){this.blur();}); 
 });
});
var slider1={
 num:-1,
 cur:0,
 cr:[],
 al:null,
 at:10*1000,
 ar:true,
 init:function(){
  if(!slider1.data || !slider1.data.length)
   return false;

  var d=slider1.data;
  slider1.num=d.length;
  var pos=Math.floor(Math.random()*1);//slider1.num);
  for(var i=0;i<slider1.num;i++){
   $('#'+d[i].id).css({left:((i-pos)*1000)});
   $('#slide1-nav').append('<a id="slide1-link-'+i+'" href="#" onclick="slider1.slide('+i+');return false;" onfocus="this.blur();">'+(i+1)+'</a>');
  }

  $('img,div#slide-controls',$('div#slide-holder')).fadeIn();
  slider1.text(d[pos]);
  slider1.on(pos);
  slider1.cur=pos;
  window.setTimeout('slider1.auto();',slider1.at);
 },
 auto:function(){
  if(!slider1.ar)
   return false;

  var next=slider1.cur+1;
  if(next>=slider1.num) next=0;
  slider1.slide(next);
 },
 slide:function(pos){
  if(pos<0 || pos>=slider1.num || pos==slider1.cur)
   return;

  window.clearTimeout(slider1.al);
  slider1.al=window.setTimeout('slider1.auto();',slider1.at);

  var d=slider1.data;
  for(var i=0;i<slider1.num;i++)
   $('#'+d[i].id).stop().animate({left:((i-pos)*1000)},1000,'swing');
  
  slider1.on(pos);
  slider1.text(d[pos]);
  slider1.cur=pos;
 },
 on:function(pos){
  $('#slide1-nav a').removeClass('on');
  $('#slide1-nav a#slide1-link-'+pos).addClass('on');
 },
 text:function(di){
  slider1.cr['a']=di.client;
  slider1.cr['b']=di.desc;
  slider1.ticker('#slide1-client span',di.client,0,'a');
  slider1.ticker('#slide1-desc',di.desc,0,'b');
 },
 ticker:function(el,text,pos,unique){
  if(slider1.cr[unique]!=text)
   return false;

  ctext=text.substring(0,pos)+(pos%2?'-':'_');
  $(el).html(ctext);

  if(pos==text.length)
   $(el).html(text);
  else
   window.setTimeout('slider1.ticker("'+el+'","'+text+'",'+(pos+1)+',"'+unique+'");',30);
 }
};
// STYLING FILE INPUTS 1.0 | Shaun Inman <http://www.shauninman.com/> | 2007-09-07
if(!window.SI){var SI={};};
SI.Files={
 htmlClass:'SI-FILES-STYLIZED',
 fileClass:'file',
 wrapClass:'cabinet',
 
 fini:false,
 able:false,
 init:function(){
  this.fini=true;
 },
 stylize:function(elem){
  if(!this.fini){this.init();};
  if(!this.able){return;};
  
  elem.parentNode.file=elem;
  elem.parentNode.onmousemove=function(e){
   if(typeof e=='undefined') e=window.event;
   if(typeof e.pageY=='undefined' &&  typeof e.clientX=='number' && document.documentElement){
    e.pageX=e.clientX+document.documentElement.scrollLeft;
    e.pageY=e.clientY+document.documentElement.scrollTop;
   };
   var ox=oy=0;
   var elem=this;
   if(elem.offsetParent){
    ox=elem.offsetLeft;
    oy=elem.offsetTop;
    while(elem=elem.offsetParent){
     ox+=elem.offsetLeft;
     oy+=elem.offsetTop;
    };
   };
  };
 },
 stylizeAll:function(){
  if(!this.fini){this.init();};
  if(!this.able){return;};
 }
};