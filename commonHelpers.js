import{a as b,S as L,i as f}from"./assets/vendor-b11e2a50.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const E="44238533-8b617bda18ddca61b92d6b256",I="https://pixabay.com/api/";async function h(e,n=1,s=15){try{return(await b.get(I,{params:{key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:s}})).data}catch{throw new Error("Network response was not ok")}}function v(e){e.innerHTML=""}const B=new L(".gallery a",{captionsData:"alt",captionDelay:250});B.refresh();function P(e){e.style.display="block"}function y(e){e.style.display="none"}function m(e,n){const s=e.map(t=>`
      <a href="${t.largeImageURL}" class="gallery-item">
        <img src="${t.webformatURL}" alt="${t.tags}">
        <div>
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </a>
    `).join("");n.insertAdjacentHTML("beforeend",s)}function p(e){f.error({title:"Error",message:e})}function g(e){f.info({title:"Info",message:e})}const S=document.getElementById("search-form"),w=document.getElementById("search-input"),l=document.getElementById("gallery"),u=document.getElementById("loader"),a=document.getElementById("load-more-btn");let i=1;const c=15;S.addEventListener("submit",async e=>{e.preventDefault();const n=w.value.trim();if(n===""){p("Search query cannot be empty!");return}v(l),P(u),i=1,a.style.display="none";try{const s=await h(n,i,c);y(u);const t=s.hits;if(t.length===0){g("Sorry, there are no images matching your search query. Please try again!");return}m(t,l),t.length<c?a.style.display="none":a.style.display="block"}catch(s){y(u),a.style.display="none",p("Something went wrong. Please try again later."),console.error(s)}});a.addEventListener("click",async()=>{i++;try{const e=await h(w.value.trim(),i,c);m(e.hits,l),window.scrollBy({top:l.getBoundingClientRect().height*2,behavior:"smooth"}),(e.hits.length<c||e.totalHits<=i*c)&&(a.style.display="none",g("We're sorry, but you've reached the end of search results."))}catch(e){console.error(e)}});
//# sourceMappingURL=commonHelpers.js.map