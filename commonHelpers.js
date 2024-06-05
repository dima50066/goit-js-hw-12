import{S as f,i as u}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const p="44238533-8b617bda18ddca61b92d6b256",m="https://pixabay.com/api/";async function y(t){const r=await fetch(`${m}?key=${p}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return await r.json()}function h(t){t.innerHTML=""}function g(t){t.style.display="block"}function c(t){t.style.display="none"}function w(t,r){const n=t.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}">
        <div>
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>
    `).join("");r.insertAdjacentHTML("beforeend",n),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l(t){u.error({title:"Error",message:t})}function b(t){u.info({title:"Info",message:t})}const L=document.getElementById("search-form"),I=document.getElementById("search-input"),d=document.getElementById("gallery"),i=document.getElementById("loader");L.addEventListener("submit",async t=>{t.preventDefault();const r=I.value.trim();if(r===""){l("Search query cannot be empty!");return}h(d),g(i);try{const n=await y(r);c(i);const s=n.hits;if(s.length===0){b("Sorry, there are no images matching your search query. Please try again!");return}w(s,d)}catch(n){c(i),l("Something went wrong. Please try again later."),console.error(n)}});
//# sourceMappingURL=commonHelpers.js.map
