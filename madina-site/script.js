/* Madina Aluminium Traders - site scripts */
document.documentElement.className+=" js"

var WA="923087381458"; /* WhatsApp number, international format, no + */
function link(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
document.getElementById("wa").href=link("Assalam o Alaikum, I would like to enquire about aluminium & glass solutions.");
function bx(){return [].slice.call(document.querySelectorAll("#ddp input"))}
function tg(){document.getElementById("ddp").classList.toggle("open")}
function clr(){bx().forEach(function(b){b.checked=false});up()}
function up(){var s=bx().filter(function(b){return b.checked}),t=document.getElementById("tags");
document.getElementById("ddt").textContent=s.length?s.length+" item"+(s.length>1?"s":"")+" selected":"Select items…";
t.innerHTML="";s.forEach(function(b){var e=document.createElement("span");e.textContent=b.value;var x=document.createElement("b");x.textContent="×";x.onclick=function(){b.checked=false;up()};e.appendChild(x);t.appendChild(e)})}
bx().forEach(function(b){b.onchange=up});
document.addEventListener("click",function(e){if(!document.getElementById("dd").contains(e.target))document.getElementById("ddp").classList.remove("open")});
function q(){var v=function(i){return document.getElementById(i).value.trim()},s=bx().filter(function(b){return b.checked}).map(function(b){return "• "+b.value});
if(v("o"))s.push("• Other: "+v("o"));
if(!s.length){setTimeout(function(){document.getElementById("ddp").classList.add("open")},0);document.getElementById("ddb").scrollIntoView({block:"center"});return}
var t="Hello Madina Aluminium Traders, I'd like a quote.\nName: "+(v("n")||"-")+"\nPhone: "+(v("ph")||"-")+"\nLocation: "+(v("c")||"-")+"\nProject type: "+document.querySelector("input[name=pt]:checked").value+"\nItems required:\n"+s.join("\n")+"\nDetails: "+(v("m")||"-");
window.open(link(t),"_blank")}

(function(){var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".grid,.why,.about,.quote").forEach(function(p){[].forEach.call(p.children,function(c,i){c.classList.add("rv");c.style.setProperty("--d",(i*.1)+"s")})});
document.querySelectorAll(".sh,.stats").forEach(function(c){c.classList.add("rv")});
function cnt(el){var n=+el.dataset.n,s=el.dataset.s,t0=null;if(rm){el.textContent=n+s;return}
function f(t){t0=t0||t;var p=Math.min((t-t0)/1400,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e)+s;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var c=e.target;io.unobserve(c);c.classList.add("in");
c.querySelectorAll&&c.querySelectorAll("[data-n]").forEach(cnt);
setTimeout(function(){c.classList.remove("rv","in");c.style.removeProperty("--d")},1500)})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var hd=document.querySelector("header"),pg=document.getElementById("pg");
addEventListener("scroll",function(){var d=document.documentElement,y=scrollY;hd.classList.toggle("sc",y>10);pg.style.width=(y/(d.scrollHeight-innerHeight)*100)+"%"},{passive:true})})();

(function(){var lb=document.getElementById("lb"),li=document.getElementById("lbi");
function cl(){lb.classList.remove("open");li.removeAttribute("src")}
document.querySelectorAll(".cc").forEach(function(b){b.addEventListener("click",function(){var i=b.querySelector("img");li.src=i.src;li.alt=i.alt;lb.classList.add("open")})});
lb.addEventListener("click",function(e){if(e.target!==li)cl()});
addEventListener("keydown",function(e){if(e.key==="Escape")cl()})})();
