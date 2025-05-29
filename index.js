import{a as L,S,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const b="50356760-297b4a10951e523a88448dbdf",q="https://pixabay.com/api/";async function f(e,o=1){try{const i=await L.get(q,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});return console.log("API відповідь:",i.data),i.data}catch(i){return console.error("Помилка при отриманні зображень:",i),{hits:[],totalHits:0}}}const d=document.querySelector(".gallery");let w=new S(".gallery a");function u(e){const o=e.map(({webformatURL:i,largeImageURL:n,tags:t,likes:r,views:s,comments:h,downloads:v})=>`
      <li class="gallery-item">
        <div class="image-container">
        <a href="${n}">
          <img src="${i}" alt="${t}">
        </a>
        </div>
        <div class="info">
          <div class="info-items">
          <p class="info-item">Likes</p>
          <p class="info-value">${r}</p>
          </div class="info-items">
          <div>
          <p class="info-item">Views</p>
          <p class="info-value">${s}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Comments</p>
          <p class="info-value">${h}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Downloads</p>
          <p class="info-value">${v}</p>
          </div>
        </div>
      </li>
    `).join("");d.innerHTML=o,w.refresh()}function E(){d.innerHTML=""}function m(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function p(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function P(){const e=document.querySelector(".load-more");e&&(e.style.display="block")}function y(){const e=document.querySelector(".load-more");e&&(e.style.display="none")}const B=document.querySelector(".form"),x=document.querySelector(".load-more");let l="",a=1;const g=15;B.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements["search-text"].value.trim(),!l){c.error({message:"Please enter a search term!"});return}a=1,m(),E(),y();const o=await f(l,a);p(),o.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,backgroundColor:"#f70303",color:"#fafafb",titleSize:"18px",messageSize:"16px",titleColor:"#ffffff",messageColor:"#ffffff",width:"322px"}):(u(o.hits),o.totalHits>g&&P())});x.addEventListener("click",async()=>{try{a+=1,m();const e=await f(l,a);p(),u(e.hits),M(),a*g>=e.totalHits&&(y(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.error("Помилка при завантаженні нових зображень:",e),c.error({message:"Error loading images. Try again later!"})}});function M(){const e=document.querySelector(".gallery li");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
