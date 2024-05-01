(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const j=document.getElementById("icon");j.addEventListener("click",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?j.src="/img/icons/dark-theme-icon.svg":j.src="/img/icons/light-theme-icon.svg"});const h=document.getElementById("birth-year-form"),G=document.getElementById("year__btn"),b=document.getElementById("year__text");G.addEventListener("click",H);function H(s){s.preventDefault(),h.year.value%4===0&&h.year.value>0?(b.textContent="Ви народилися у високосний рік!",b.style.color="#039900"):h.year.value%4!==0&&h.year.value>0?(b.textContent="Ви народилися не у високосний рік!",b.style.color="#990000"):(b.textContent="Введіть коректну дату!",b.style.color="#990000")}h.addEventListener("blur",()=>{h.year.value="",b.textContent=""});const w=document.getElementById("guess-number-form"),R=document.getElementById("guess__btn"),y=document.getElementById("guess__text");R.addEventListener("click",T);function T(s){s.preventDefault();const e=Math.floor(Math.random()*10+1);let t=Number(w.usernumber.value);e===t?(y.textContent=`Вітаю, ви вгадали число! ${e}`,y.style.color="#039900"):t>10?(y.textContent="Введіть число від 1 до 10!",y.style.color="#990000"):(y.textContent=`Ви програли, комп’ютер загадав ${e}`,y.style.color="#990000")}const _=document.getElementById("buttons-list"),v=document.getElementById("comp-choice"),p=document.getElementById("winner-text"),N=document.getElementById("comp-result"),W=document.getElementById("user-result");let A=0,O=0;function P(s){s==="stone"?v.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/stone.svg" />':s==="scissors"?v.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/scissors.svg" />':s==="paper"?v.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/paper.svg" />':v.innerHTML=""}_.addEventListener("click",s=>{const e=["stone","scissors","paper"],t=Math.floor(Math.random()*3),o=e[t];P(o),s.target.id===o?(p.textContent="Нічия!",p.style.color="var(--secondary-color)"):s.target.id==="stone"&&o==="scissors"||s.target.id==="scissors"&&o==="paper"||s.target.id==="paper"&&o==="stone"?(p.textContent="Ви виграли раунд!",p.style.color="#039900",W.textContent=O+=1):(p.textContent="Комп’ютер виграв раунд!",p.style.color="#900",N.textContent=A+=1)});const E=document.getElementById("time-calculator-form"),Y=document.getElementById("button"),d=document.getElementById("result");Y.addEventListener("click",D);function D(s){s.preventDefault();const e=Math.floor(E.usernumber.value/60/24),t=Math.floor(E.usernumber.value/60%24),o=E.usernumber.value%60;E.usernumber.value<=0?(d.textContent="Введіть додатнє число",d.style.color="red"):t<=9&&o<=9?(d.textContent=`${e} дн. 0${t}:0${o}:00`,d.style.color="var(--secondary-color)"):t<=9?(d.textContent=`${e} дн. 0${t}:${o}:00`,d.style.color="var(--secondary-color)"):o<=9?(d.textContent=`${e} дн. ${t}:0${o}:00`,d.style.color="var(--secondary-color)"):(d.textContent=`${e} дн. ${t}:${o}:00`,d.style.color="var(--secondary-color)")}document.getElementById("dinosaur__start-btn");const L=document.getElementById("field"),g=document.getElementById("ball"),u=g.offsetWidth/2;let x=!1;L.addEventListener("click",F);function F(s){if(!x){let e=s.offsetX,t=s.offsetY;e=e>L.offsetWidth-g.offsetWidth+u?L.offsetWidth-g.offsetWidth+u:e,t=t>L.offsetHeight-g.offsetHeight+u?L.offsetHeight-g.offsetHeight+u:t,e=e<u?u:e,t=t<u?u:t,g.classList.add("rotating"),x=!0,g.style.left=`${e-u}px`,g.style.top=`${t-u}px`,setTimeout(()=>{g.classList.remove("rotating"),x=!1},1e3)}}const c=[{name:"Albert",surname:"Einstein",image:"/img/scientists/albert-einstein.jpg",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/isaac-newtont.jpg?raw=true",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/galileo-galilei.jpg?raw=true",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/marie-curie.jpg?raw=true",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/johannes-kepler.jpg?raw=true",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/nicolaus-copernicus.jpg?raw=true",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/max-planck.jpg?raw=true",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/katharine-blodgett.jpg?raw=true",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/ada-lovelace.jpg?raw=true",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/sarah-goode.jpg?raw=true",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/lise-meitner.jpg?raw=true",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/hanna-hammarstrom.jpg?raw=true",born:1829,dead:1909,id:12}],l=document.getElementById("scientist-gallery"),K=document.getElementById("scientist__filter-list");function m(s){return s.map(({name:e,surname:t,image:o,born:r,dead:a,id:f})=>`
      <li id="${f}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${o}');">
      <div class="scientist__text-thumb">
      <p>${e} ${t}</p>
      <p>${r}-${a}</p>
      </div>
      </li>`).join("")}l.innerHTML=m(c);K.addEventListener("click",X);function X(s){switch(s.target.id){case"1":const e=c.filter(({born:n})=>n>=1800&&n<1900);l.innerHTML=m(e);break;case"2":const t=c.find(({name:n,surname:i})=>n==="Albert"&&i==="Einstein");l.innerHTML=m([t]);break;case"3":const o=[...c].sort((n,i)=>n.name.localeCompare(i.name));l.innerHTML=m(o);break;case"4":const r=c.filter(({surname:n})=>n.startsWith("C"));l.innerHTML=m(r);break;case"5":const a=[...c].sort((n,i)=>n.dead-n.born-(i.dead-i.born));l.innerHTML=m(a);break;case"6":const f=c.filter(({name:n})=>n[0]!=="A");l.innerHTML=m(f);break;case"7":const M=[...c].sort((n,i)=>i.born-n.born)[0];l.innerHTML=m([M]);break;case"8":const $=c.reduce((n,i)=>{const B=i.dead-i.born,C=n.dead-n.born;return B>C?i:n}),k=c.reduce((n,i)=>{const B=i.dead-i.born,C=n.dead-n.born;return B<C?i:n});l.innerHTML=m([$,k]);break;case"9":const I=c.filter(({name:n,surname:i})=>n[0]===i[0]);l.innerHTML=m(I);break;default:l.innerHTML=m(c)}}
//# sourceMappingURL=commonHelpers.js.map
