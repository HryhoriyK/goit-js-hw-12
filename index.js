import{a as b,S as L,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const S="50356760-297b4a10951e523a88448dbdf",q="https://pixabay.com/api/";async function f(e,o=1){try{return(await b.get(q,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(s){return console.error("Помилка при отриманні зображень:",s),{hits:[],totalHits:0}}}const d=document.querySelector(".gallery");let w=new L(".gallery a");function u(e){const o=e.map(({webformatURL:s,largeImageURL:n,tags:t,likes:r,views:i,comments:h,downloads:v})=>`
      <li class="gallery-item">
        <div class="image-container">
        <a href="${n}">
          <img src="${s}" alt="${t}">
        </a>
        </div>
        <div class="info">
          <div class="info-items">
          <p class="info-item">Likes</p>
          <p class="info-value">${r}</p>
          </div class="info-items">
          <div>
          <p class="info-item">Views</p>
          <p class="info-value">${i}</p>
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
    `).join("");d.insertAdjacentHTML("beforeend",o),w.refresh()}function E(){d.innerHTML=""}function m(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function p(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function B(){const e=document.querySelector(".load-more");e&&(e.style.display="block")}function y(){const e=document.querySelector(".load-more");e&&(e.style.display="none")}const P=document.querySelector(".form"),x=document.querySelector(".load-more");let l="",a=1;const g=15;P.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements["search-text"].value.trim(),!l){c.error({message:"Please enter a search term!"});return}a=1,m(),E(),y();const o=await f(l,a);p(),o.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,backgroundColor:"#f70303",color:"#fafafb",titleSize:"18px",messageSize:"16px",titleColor:"#ffffff",messageColor:"#ffffff",width:"322px"}):(u(o.hits),o.totalHits>g&&B())});x.addEventListener("click",async()=>{try{a+=1,m();const e=await f(l,a);p(),u(e.hits),M(),a*g>=e.totalHits&&(y(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.error("Помилка при завантаженні нових зображень:",e),c.error({message:"Error loading images. Try again later!"})}});function M(){const e=document.querySelector(".gallery li");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
