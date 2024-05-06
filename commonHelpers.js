(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const S=document.getElementById("icon");S.addEventListener("click",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?S.src="img/icons/dark-theme-icon.svg":S.src="img/icons/light-theme-icon.svg"});const E=document.getElementById("birth-year-form"),U=document.getElementById("year__btn"),y=document.getElementById("year__text");U.addEventListener("click",K);function K(e){e.preventDefault(),E.year.value%4===0&&E.year.value>0?(y.textContent="Ви народилися у високосний рік!",y.style.color="#039900"):E.year.value%4!==0&&E.year.value>0?(y.textContent="Ви народилися не у високосний рік!",y.style.color="#990000"):(y.textContent="Введіть коректну дату!",y.style.color="#990000")}E.addEventListener("blur",()=>{E.year.value="",y.textContent=""});const X=document.getElementById("guess-number-form"),z=document.getElementById("guess__btn"),b=document.getElementById("guess__text");z.addEventListener("click",Q);function Q(e){e.preventDefault();const t=Math.floor(Math.random()*10+1);let n=Number(X.usernumber.value);t===n?(b.textContent=`Вітаю, ви вгадали число! ${t}`,b.style.color="#039900"):n>10?(b.textContent="Введіть число від 1 до 10!",b.style.color="#990000"):(b.textContent=`Ви програли, комп’ютер загадав ${t}`,b.style.color="#990000")}const Z=document.getElementById("buttons-list"),k=document.getElementById("comp-choice"),h=document.getElementById("winner-text"),ee=document.getElementById("comp-result"),te=document.getElementById("user-result");let ne=0,oe=0;function se(e){e==="stone"?k.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/stone.svg" />':e==="scissors"?k.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/scissors.svg" />':e==="paper"?k.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/paper.svg" />':k.innerHTML=""}Z.addEventListener("click",e=>{const t=["stone","scissors","paper"],n=Math.floor(Math.random()*3),s=t[n];se(s),e.target.id===s?(h.textContent="Нічия!",h.style.color="var(--secondary-color)"):e.target.id==="stone"&&s==="scissors"||e.target.id==="scissors"&&s==="paper"||e.target.id==="paper"&&s==="stone"?(h.textContent="Ви виграли раунд!",h.style.color="#039900",te.textContent=oe+=1):(h.textContent="Комп’ютер виграв раунд!",h.style.color="#900",ee.textContent=ne+=1)});const I=document.getElementById("time-calculator-form"),re=document.getElementById("button"),d=document.getElementById("result");re.addEventListener("click",ie);function ie(e){e.preventDefault();const t=Math.floor(I.usernumber.value/60/24),n=Math.floor(I.usernumber.value/60%24),s=I.usernumber.value%60;I.usernumber.value<=0?(d.textContent="Введіть додатнє число",d.style.color="red"):n<=9&&s<=9?(d.textContent=`${t} дн. 0${n}:0${s}:00`,d.style.color="var(--secondary-color)"):n<=9?(d.textContent=`${t} дн. 0${n}:${s}:00`,d.style.color="var(--secondary-color)"):s<=9?(d.textContent=`${t} дн. ${n}:0${s}:00`,d.style.color="var(--secondary-color)"):(d.textContent=`${t} дн. ${n}:${s}:00`,d.style.color="var(--secondary-color)")}function R(e,t){return parseFloat(getComputedStyle(e).getPropertyValue(t))||0}function L(e,t,n){e.style.setProperty(t,n)}function $(e,t,n){L(e,t,R(e,t)+n)}const G=document.querySelectorAll("[data-ground]"),ae=.05;function ce(){L(G[0],"--left",0),L(G[1],"--left",100)}function le(e,t){G.forEach(n=>{$(n,"--left",e*t*ae*-1),R(n,"--left")<=-100&&$(n,"--left",200)})}const g=document.getElementById("dinosaur"),ue=.45,de=.0015,me=2,D=100;let C,x,_,w;function fe(){C=!1,x=0,_=0,w=0,L(g,"--bottom",0),document.removeEventListener("keydown",F),document.addEventListener("keydown",F)}function ge(e,t){be(e,t),he(e)}function pe(){return g.getBoundingClientRect()}function ye(){g.src="img/dinosaur/dino-lose.png"}function be(e,t){if(C){g.src="img/dinosaur/dino-stationary.png";return}_>=D&&(x=(x+1)%me,g.src=`img/dinosaur/dino-run-${x}.png`,_-=D),_+=e*t}function he(e){C&&($(g,"--bottom",w*e),R(g,"--bottom")<=0&&(L(g,"--bottom",0),C=!1),w-=de*e)}function F(e){e.code!=="Space"||C||(w=ue,C=!0)}const Ee=document.querySelector(".dinosaur__overlay"),Le=.05,q=500,Ce=2e3;let T;function ve(){T=q,document.querySelectorAll("[data-cactus]").forEach(e=>{e.remove()})}function Be(e,t){document.querySelectorAll("[data-cactus]").forEach(n=>{$(n,"--left",e*t*Le*-1),R(n,"--left")<=-100&&n.remove()}),T<=0&&(ke(),T=Ie(q,Ce)/t),T-=e}function Me(){return[...document.querySelectorAll("[data-cactus]")].map(e=>e.getBoundingClientRect())}function ke(){const e=document.createElement("img");e.dataset.cactus=!0,e.src="/img/dinosaur/cactus.png",e.classList.add("dinosaur__cactus"),L(e,"--left",100),Ee.append(e)}function Ie(e,t){return Math.floor(Math.random()*(t-e+1)+e)}const xe=document.getElementById("dinosaur__start-btn"),_e=document.getElementById("score");document.addEventListener("keydown",O,{once:!0});const Te=1e-5;let v,M,N;function P(e){if(v==null){v=e,window.requestAnimationFrame(P);return}const t=e-v;if(le(t,M),ge(t,M),Be(t,M),Re(t),Ae(t),$e())return je();v=e,window.requestAnimationFrame(P)}function $e(){const e=pe();return Me().some(t=>we(t,e))}function we(e,t){return e.left<t.right&&e.top<t.bottom&&e.right>t.left&&e.bottom>t.top}function Re(e){M+=e*Te}function Ae(e){N+=e*.01,_e.textContent=Math.floor(N)}xe.addEventListener("click",O);function O(){v=null,M=1,N=0,ce(),fe(),ve(),window.requestAnimationFrame(P)}function je(){ye(),setTimeout(()=>{document.addEventListener("keydown",handleStart,{once:!0}),startScreenElem.classList.remove("hide")},100)}const B=document.getElementById("field"),f=document.getElementById("ball"),m=f.offsetWidth/2;let H=!1;B.addEventListener("click",Se);function Se(e){if(!H){let t=e.offsetX,n=e.offsetY;t=t>B.offsetWidth-f.offsetWidth+m?B.offsetWidth-f.offsetWidth+m:t,n=n>B.offsetHeight-f.offsetHeight+m?B.offsetHeight-f.offsetHeight+m:n,t=t<m?m:t,n=n<m?m:n,f.classList.add("rotating"),H=!0,f.style.left=`${t-m}px`,f.style.top=`${n-m}px`,setTimeout(()=>{f.classList.remove("rotating"),H=!1},1e3)}}const c=[{name:"Albert",surname:"Einstein",image:"img/scientists/albert-einstein.jpg",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",image:"img/scientists/isaac-newtont.jpg",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",image:"img/scientists/galileo-galilei.jpg",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",image:"img/scientists/marie-curie.jpg",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",image:"img/scientists/johannes-kepler.jpg",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",image:"img/scientists/nicolaus-copernicus.jpg",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",image:"img/scientists/max-planck.jpg",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/katharine-blodgett.jpg?raw=true",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/ada-lovelace.jpg?raw=true",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/sarah-goode.jpg?raw=true",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/lise-meitner.jpg?raw=true",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/hanna-hammarstrom.jpg?raw=true",born:1829,dead:1909,id:12}],l=document.getElementById("scientist-gallery"),He=document.getElementById("scientist__filter-list");function u(e){return e.map(({name:t,surname:n,image:s,born:r,dead:a,id:p})=>`
      <li id="${p}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${s}');">
      <div class="scientist__text-thumb">
      <p>${t} ${n}</p>
      <p>${r}-${a}</p>
      </div>
      </li>`).join("")}l.innerHTML=u(c);He.addEventListener("click",Ge);function Ge(e){switch(e.target.id){case"1":const t=c.filter(({born:o})=>o>=1800&&o<1900);l.innerHTML=u(t);break;case"2":const n=c.find(({name:o,surname:i})=>o==="Albert"&&i==="Einstein");l.innerHTML=u([n]);break;case"3":const s=[...c].sort((o,i)=>o.name.localeCompare(i.name));l.innerHTML=u(s);break;case"4":const r=c.filter(({surname:o})=>o.startsWith("C"));l.innerHTML=u(r);break;case"5":const a=[...c].sort((o,i)=>o.dead-o.born-(i.dead-i.born));l.innerHTML=u(a);break;case"6":const p=c.filter(({name:o})=>o[0]!=="A");l.innerHTML=u(p);break;case"7":const W=[...c].sort((o,i)=>i.born-o.born)[0];l.innerHTML=u([W]);break;case"8":const J=c.reduce((o,i)=>{const A=i.dead-i.born,j=o.dead-o.born;return A>j?i:o}),V=c.reduce((o,i)=>{const A=i.dead-i.born,j=o.dead-o.born;return A<j?i:o});l.innerHTML=u([J,V]);break;case"9":const Y=c.filter(({name:o,surname:i})=>o[0]===i[0]);l.innerHTML=u(Y);break;default:l.innerHTML=u(c)}}
//# sourceMappingURL=commonHelpers.js.map
