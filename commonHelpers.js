(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const j=document.getElementById("icon");j.addEventListener("click",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?j.src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/12898105bb66a4c2b486a06e94e02a25500877fa/src/img/icons/dark-theme-icon.svg":j.src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/12898105bb66a4c2b486a06e94e02a25500877fa/src/img/icons/light-theme-icon.svg"});const f=document.getElementById("year__input"),w=document.getElementById("year__btn"),b=document.getElementById("year__text");w.addEventListener("click",R);function R(r){r.preventDefault(),f.value%4===0&&f.value>0?(b.textContent="Ви народилися у високосний рік!",b.style.color="#039900"):f.value%4!==0&&f.value>0?(b.textContent="Ви народилися не у високосний рік!",b.style.color="#990000"):(b.textContent="Введіть коректну дату!",b.style.color="#990000")}const H=document.getElementById("guess__input"),I=document.getElementById("guess__btn"),h=document.getElementById("guess__text");I.addEventListener("click",_);function _(r){r.preventDefault();const t=Math.floor(Math.random()*10+1);let i=Number.parseInt(H.value);t===i?(h.textContent=`Вітаю, ви вгадали число! ${t}`,h.style.color="#039900"):(h.textContent=`Ви програли, комп’ютер загадав ${t}`,h.style.color="#990000")}const C=document.getElementById("buttons-list"),B=document.getElementById("comp-choice");document.getElementById("winner-text");const x=document.getElementById("comp-result"),T=document.getElementById("user-result");let $=0,N=0;x.textContent=`${$}`;T.textContent=`${N}`;C.addEventListener("click",r=>{const t=["stone","scissors","paper"],i=Math.floor(Math.random()*3),l=t[i];l==="stone"&&(B.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/stone.svg" />'),l==="scissors"&&(B.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/scissors.svg" />'),l==="paper"&&(B.innerHTML='<img src="https://raw.githubusercontent.com/Roman-Glyshanitsya/js-practice/7839aaa232fe0e01754605b788e94eafe6daf656/src/img/icons/paper.svg" />')});document.getElementById("dinosaur__start-btn");const p=document.getElementById("field"),u=document.getElementById("ball"),d=u.offsetWidth/2;let E=!1;p.addEventListener("click",W);function W(r){if(!E){let t=r.offsetX,i=r.offsetY;t=t>p.offsetWidth-u.offsetWidth+d?p.offsetWidth-u.offsetWidth+d:t,i=i>p.offsetHeight-u.offsetHeight+d?p.offsetHeight-u.offsetHeight+d:i,t=t<d?d:t,i=i<d?d:i,u.classList.add("rotating"),E=!0,u.style.left=`${t-d}px`,u.style.top=`${i-d}px`,setTimeout(()=>{u.classList.remove("rotating"),E=!1},1e3)}}const o=[{name:"Albert",surname:"Einstein",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/albert-einstein.jpg?raw=true",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/isaac-newtont.jpg?raw=true",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/galileo-galilei.jpg?raw=true",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/marie-curie.jpg?raw=true",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/johannes-kepler.jpg?raw=true",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/nicolaus-copernicus.jpg?raw=true",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/max-planck.jpg?raw=true",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/katharine-blodgett.jpg?raw=true",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/ada-lovelace.jpg?raw=true",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/sarah-goode.jpg?raw=true",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/lise-meitner.jpg?raw=true",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/hanna-hammarstrom.jpg?raw=true",born:1829,dead:1909,id:12}],c=document.getElementById("scientist-gallery"),A=document.getElementById("scientist__filter-list");function m(r){return r.map(({name:t,surname:i,image:l,born:s,dead:a,id:g})=>`
      <li id="${g}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${l}');">
      <div class="scientist__text-thumb">
      <p>${t} ${i}</p>
      <p>${s}-${a}</p>
      </div>
      </li>`).join("")}c.innerHTML=m(o);A.addEventListener("click",O);function O(r){switch(r.target.id){case"1":const t=o.filter(({born:e})=>e>=1800&&e<1900);c.innerHTML=m(t);break;case"2":const i=o.find(({name:e,surname:n})=>e==="Albert"&&n==="Einstein");c.innerHTML=m([i]);break;case"3":const l=[...o].sort((e,n)=>e.name.localeCompare(n.name));c.innerHTML=m(l);break;case"4":const s=o.filter(({surname:e})=>e.startsWith("C"));c.innerHTML=m(s);break;case"5":const a=[...o].sort((e,n)=>e.dead-e.born-(n.dead-n.born));c.innerHTML=m(a);break;case"6":const g=o.filter(({name:e})=>e[0]!=="A");c.innerHTML=m(g);break;case"7":const G=[...o].sort((e,n)=>n.born-e.born)[0];c.innerHTML=m([G]);break;case"8":const v=o.reduce((e,n)=>{const y=n.dead-n.born,L=e.dead-e.born;return y>L?n:e}),M=o.reduce((e,n)=>{const y=n.dead-n.born,L=e.dead-e.born;return y<L?n:e});c.innerHTML=m([v,M]);break;case"9":const k=o.filter(({name:e,surname:n})=>e[0]===n[0]);c.innerHTML=m(k);break;default:c.innerHTML=m(o)}}
//# sourceMappingURL=commonHelpers.js.map
