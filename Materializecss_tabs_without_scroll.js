//http://materializecss.com/tabs.html
/*
* CSS: #mytabs{overflow-x:hidden;}
*/
$('#mytabs').tabs({onShow:function(tab){
    var cW = document.documentElement.clientWidth/2;
    var pos = $('#mytabs a.active')[0].parentElement.getBoundingClientRect().left;
    var sw = $('#mytabs a.active').width()/2;
    pos = pos+sw;
    $('#mytabs').scrollLeft($('#tabs-swipe-demo').scrollLeft()-(cW-pos));
  }});
