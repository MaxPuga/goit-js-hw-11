import{a as p,S as m,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="54632285-9bf1eb309cadbee9430723f7a",g="https://pixabay.com/api/";function y(o){return p.get(g,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
    <li class="gallery-item">
      <a href="${s}">
        <img src="${i}" alt="${e}" />
      </a>
      <div class="info">
  <p><b>Likes</b>${t}</p>
  <p><b>Views</b>${n}</p>
  <p><b>Comments</b>${f}</p>
  <p><b>Downloads</b>${d}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}S(),q(),y(r).then(i=>{if(i.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(()=>{a.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{v(),c.reset()})});
//# sourceMappingURL=index.js.map
