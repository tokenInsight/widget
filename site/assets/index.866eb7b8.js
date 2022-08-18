import{i as a,o as c,a as n,j as t}from"./index.e72b5e87.js";const e={class:"doc"},i=t(`<h1 id="coinprice">CoinPrice</h1><p>\u8FD9\u662F\u4E00\u4E2A\u5E01\u4EF7\u683C\u4FE1\u606F\u7EC4\u4EF6</p><h2 id="\u6F14\u793A">\u6F14\u793A</h2><div id="btc" class="m-20"></div><div class="pre-js"><pre><span class="hljs-keyword">const</span> widget = <span class="hljs-keyword">new</span> <span class="hljs-title class_">TokenInsightWidget</span>(<span class="hljs-string">&#39;cec31bc1-b8d9-4c93-8c38-aaf740793101&#39;</span>);
widget.<span class="hljs-title function_">createPrice</span>({
  <span class="hljs-attr">el</span>: <span class="hljs-string">&#39;#btc&#39;</span>,
  <span class="hljs-attr">tid</span>: <span class="hljs-string">&#39;bitcoin&#39;</span>
});</pre></div>`,5),l=[i],r={name:"index",setup(o){return a(()=>{new TokenInsightWidget("cec31bc1-b8d9-4c93-8c38-aaf740793101").createPrice({el:"#btc",tid:"bitcoin"})}),(s,p)=>(c(),n("div",e,l))}};export{r as default};
