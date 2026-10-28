(function(){
var nav=document.querySelector('.site-nav'),btn=document.getElementById('navtoggle');
if(!nav||!btn){return;}
btn.addEventListener('click',function(){
var open=nav.classList.toggle('nav-open');
btn.setAttribute('aria-expanded',open?'true':'false');
btn.setAttribute('aria-label',open?'Close menu':'Open menu');
});
var mq=window.matchMedia('(max-width:900px)');
function reset(e){if(!e.matches){nav.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');}}
if(mq.addEventListener){mq.addEventListener('change',reset);}else if(mq.addListener){mq.addListener(reset);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){nav.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');}});
})();
