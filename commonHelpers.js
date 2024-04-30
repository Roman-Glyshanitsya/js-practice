(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const y=document.getElementById("icon");y.addEventListener("click",()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?y.src="/img/icons/dark-theme-icon.svg":y.src="/img/icons/light-theme-icon.svg"});const g=document.getElementById("year__input"),k=document.getElementById("year__btn"),u=document.getElementById("year__text");k.addEventListener("click",E);function E(c){c.preventDefault(),g.value%4===0&&g.value>0?(u.textContent="Ви народилися у високосний рік!",u.style.color="#039900"):g.value%4!==0&&g.value>0?(u.textContent="Ви народилися не у високосний рік!",u.style.color="#990000"):(u.textContent="Введіть коректну дату!",u.style.color="#990000")}const M=document.getElementById("guess__input"),v=document.getElementById("guess__btn"),p=document.getElementById("guess__text");v.addEventListener("click",j);function j(c){c.preventDefault();const r=Math.floor(Math.random()*10+1);let d=Number.parseInt(M.value);r===d?(p.textContent=`Вітаю, ви вгадали число! ${r}`,p.style.color="#039900"):(p.textContent=`Ви програли, комп’ютер загадав ${r}`,p.style.color="#990000")}document.getElementById("dinosaur__start-btn");const i=[{name:"Albert",surname:"Einstein",image:"js-practice/src/img/scientists/albert-einstein.jpg",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",image:"https://github.com/Roman-Glyshanitsya/js-practice/blob/main/src/img/scientists/isaac-newtont.jpg?raw=true",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",image:"/img/scientists/galileo-galilei.jpg",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",image:"/img/scientists/marie-curie.jpg",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",image:"/img/scientists/johannes-kepler.jpg",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",image:"/img/scientists/nicolaus-copernicus.jpg",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",image:"/img/scientists/max-planck.jpg",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",image:"/img/scientists/katharine-blodgett.jpg",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",image:"/img/scientists/ada-lovelace.jpg",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",image:"/img/scientists/sarah-goode.jpg",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",image:"/img/scientists/lise-meitner.jpg",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",image:"/img/scientists/hanna-hammarström.jpg",born:1829,dead:1909,id:12}],a=document.getElementById("scientist-gallery"),H=document.getElementById("scientist__filter-list");function o(c){return c.map(({name:r,surname:d,image:m,born:t,dead:s,id:l})=>`
      <li id="${l}" class="scientist__item" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${m}');">
      <div class="scientist__text-thumb">
      <p>${r} ${d}</p>
      <p>${t}-${s}</p>
      </div>
      </li>`).join("")}a.innerHTML=o(i);H.addEventListener("click",I);function I(c){switch(c.target.id){case"1":const r=i.filter(({born:e})=>e>=1800&&e<1900);a.innerHTML=o(r);break;case"2":const d=i.find(({name:e,surname:n})=>e==="Albert"&&n==="Einstein");a.innerHTML=o([d]);break;case"3":const m=[...i].sort((e,n)=>e.name.localeCompare(n.name));a.innerHTML=o(m);break;case"4":const t=i.filter(({surname:e})=>e.startsWith("C"));a.innerHTML=o(t);break;case"5":const s=[...i].sort((e,n)=>e.dead-e.born-(n.dead-n.born));a.innerHTML=o(s);break;case"6":const l=i.filter(({name:e})=>e[0]!=="A");a.innerHTML=o(l);break;case"7":const L=[...i].sort((e,n)=>n.born-e.born)[0];a.innerHTML=o([L]);break;case"8":const h=i.reduce((e,n)=>{const b=n.dead-n.born,f=e.dead-e.born;return b>f?n:e}),B=i.reduce((e,n)=>{const b=n.dead-n.born,f=e.dead-e.born;return b<f?n:e});a.innerHTML=o([h,B]);break;case"9":const _=i.filter(({name:e,surname:n})=>e[0]===n[0]);a.innerHTML=o(_);break;default:a.innerHTML=o(i)}}
//# sourceMappingURL=commonHelpers.js.map
