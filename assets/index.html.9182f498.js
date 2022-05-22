import{_ as s,r as l,o as d,c as i,b as e,a as t,w as o,F as h,d as n,e as a}from"./app.ece9721a.js";const c={},p=n(`<h2 id="_1-git" tabindex="-1"><a class="header-anchor" href="#_1-git" aria-hidden="true">#</a> 1. Git</h2><ol><li>\u901A\u8FC7homebrew\u5B89\u88C5Git</li></ol><ul><li>\u5B89\u88C5homebrew</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>/usr/bin/ruby -e <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre></div><ul><li>\u5B89\u88C5git</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">git</span>
</code></pre></div><ol start="2"><li>\u521B\u5EFAssh key\u5E76\u914D\u7F6E</li></ol><ul><li>\u8BBE\u7F6E\u597Dusername\u548Cemail\uFF0C\u6BCF\u6B21commit\u90FD\u4F1A\u8BB0\u5F55\uFF08\u914D\u9519\u4E0D\u4F1A\u6709\u5C0F\u7EFF\u70B9github\u8BB0\u5F55\u54E6\uFF09</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;Zhengqbbb&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;1074059947@qq.com&quot;</span>
</code></pre></div><ul><li>\u521B\u5EFAssh key</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;1074059947@qq.com&quot;</span>
</code></pre></div><h2 id="_2-node" tabindex="-1"><a class="header-anchor" href="#_2-node" aria-hidden="true">#</a> 2. Node</h2><blockquote><p>\u8FD9\u8FB9Node\u4F7F\u7528brew\u5B89\u88C5</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>
</code></pre></div><h3 id="_2-1-nrm" tabindex="-1"><a class="header-anchor" href="#_2-1-nrm" aria-hidden="true">#</a> 2.1 nrm</h3><blockquote><p>npm\u5FEB\u901F\u6362\u6E90\u5DE5\u5177</p></blockquote><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g nrm
</code></pre></div><ol start="2"><li>\u5E38\u89C1\u547D\u4EE4</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>nrm <span class="token function">ls</span> <span class="token comment"># \u5217\u51FA\u53EF\u9009\u7684\u6E90</span>
nrm use taobao<span class="token comment"># \u5207\u6362\u6E90</span>
nrm <span class="token builtin class-name">test</span> <span class="token comment"># \u6D4B\u8BD5\u6240\u6709\u6E90\u901F\u5EA6</span>
nrm <span class="token builtin class-name">test</span> <span class="token function">npm</span>  <span class="token comment"># \u6D4B\u8BD5\u5355\u6E90\u901F\u5EA6</span>
</code></pre></div><h3 id="_2-2-nvm" tabindex="-1"><a class="header-anchor" href="#_2-2-nvm" aria-hidden="true">#</a> 2.2 nvm</h3><blockquote><p>\u5207\u6362Node\u5DE5\u5177</p></blockquote><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div><ol start="2"><li>\u5E38\u89C1\u547D\u4EE4</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7DNode 12 \u7248\u672C</span>
nvm <span class="token function">install</span> <span class="token number">12</span>
<span class="token comment"># \u4E0B\u8F7DNode 14 \u7248\u672C</span>
nvm <span class="token function">install</span> <span class="token number">14</span>
<span class="token comment"># \u5F53\u524D\u7EC8\u7AEF\u4F1A\u8BDDNode\u7248\u672C\u5207\u6362\u5230 14</span>
nvm use <span class="token number">14</span>
</code></pre></div><h2 id="_3-\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_3-\u7EC8\u7AEF" aria-hidden="true">#</a> 3. \u7EC8\u7AEF</h2><h3 id="_3-1-\u6587\u4EF6\u5939\u5F00\u542F\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6587\u4EF6\u5939\u5F00\u542F\u7EC8\u7AEF" aria-hidden="true">#</a> 3.1 \u6587\u4EF6\u5939\u5F00\u542F\u7EC8\u7AEF</h3><blockquote><p>\u5728\u8BBF\u8FBE\u6587\u4EF6\u5939\u4E2D\u53F3\u952E\u5FEB\u901F\u6253\u5F00\u7EC8\u7AEF\u548CVSCode\u7684\u65B9\u6CD5\u6709\u5F88\u591A\uFF0C\u6211\u4F7F\u7528\u7684:</p></blockquote><dl><dt><a href="https://github.com/Ji4n1ng/OpenInTerminal" target="_blank" rel="noopener noreferrer">OpenInTerminal</a></dt><dd>\u5728\u8BBF\u8FBE\u6587\u4EF6\u5939\u4E2D\u53F3\u952E\u5FEB\u901F\u6253\u5F00\u7EC8\u7AEF\u548CVSCode</dd></dl><h3 id="_3-2-\u7EC8\u7AEF\u795E\u5668\u2014\u2014iterm2" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7EC8\u7AEF\u795E\u5668\u2014\u2014iterm2" aria-hidden="true">#</a> 3.2 \u7EC8\u7AEF\u795E\u5668\u2014\u2014iTerm2</h3>`,31),u=e("dt",null,[e("a",{href:"https://iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"},"iTerm2")],-1),b=a("\u5206\u4EAB\u4E00\u4E0B\u6211\u7684 "),m=a("Termianl \u6298\u817E\u65B9\u6848"),g=n('<h2 id="_4-\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> 4. \u5E94\u7528\u7A0B\u5E8F</h2><h3 id="_4-1-\u751F\u4EA7\u529B\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-1-\u751F\u4EA7\u529B\u5DE5\u5177" aria-hidden="true">#</a> 4.1 \u751F\u4EA7\u529B\u5DE5\u5177</h3><blockquote><p>\u5F3A\u529B\u63A8\u8350\u8FD9\u4E24\u4E2A\u6211\u64CD\u4F5C\u6700\u9891\u7387\u7684\u8F6F\u4EF6\uFF0CControlaxPro\u4E5F\u662F\u6211\u4E70\u7684\u7B2C\u4E00\u4E2AApp Store\u7684\u4ED8\u8D39\u8F6F\u4EF6</p></blockquote><ol><li><mark>ControlaxPro</mark> : <a href="https://macupdater.net/app_updates/appinfo/com.wayhold.Controlax/index.html" target="_blank" rel="noopener noreferrer">\u4E0B\u8F7D\u94FE\u63A5</a></li></ol><ul><li>\u4ECB\u7ECD\uFF1A\u4ED6\u53EF\u4EE5\u901A\u8FC7\u4F60\u8BBE\u7F6E\u7684<strong>\u5FEB\u6377\u952E\u5FEB\u901F\u6253\u5F00\u8F6F\u4EF6\uFF0C\u7F51\u9875\uFF0C\u6587\u4EF6\u5939\u548C\u7CFB\u7EDF\u64CD\u4F5C</strong></li><li>\u6548\u679C\uFF1A<img src="https://tva1.sinaimg.cn/large/6ccee0e1gy1gxp91blafaj22i415unpd.jpg" alt="\u6574\u4F53\u6548\u679C"></li></ul><ol start="2"><li><mark>Alfred</mark> : <a href="https://www.macwk.com/soft/alfred-4" target="_blank" rel="noopener noreferrer">\u4E0B\u8F7D\u94FE\u63A5</a></li></ol><ul><li>\u4ECB\u7ECD\uFF1A\u6211\u4E3B\u8981\u662F\u7528\u526A\u8D34\u677F\u7684history</li><li>\u6548\u679C\uFF1A<a href="https://www.alfredapp.com/help/features/clipboard/" target="_blank" rel="noopener noreferrer">https://www.alfredapp.com/help/features/clipboard/</a></li></ul><h3 id="_4-2-\u9F20\u6807\u6EDA\u8F6E\u65B9\u5411\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#_4-2-\u9F20\u6807\u6EDA\u8F6E\u65B9\u5411\u66F4\u6539" aria-hidden="true">#</a> 4.2 \u9F20\u6807\u6EDA\u8F6E\u65B9\u5411\u66F4\u6539</h3><dl><dt><a href="https://github.com/Caldis/Mos?from=MosApplication&amp;version=3.3.2" target="_blank" rel="noopener noreferrer">Moc</a></dt><dd>\u7531\u4E8EMac\u89E6\u63A7\u677F\u65B9\u5411\uFF0C\u5BFC\u81F4\u6211\u4EEC\u5916\u63A5\u9F20\u6807\u65F6\u6EDA\u8F6E\u4E60\u60EF\u662F\u65B9\u5411\u7684\uFF0C\u8FD9\u4E2A\u5C0F\u8F6F\u4EF6\u5C31\u53EF\u4EE5<strong>\u53EA\u5E2E\u6211\u4EEC\u66F4\u6539\u5916\u63A5\u9F20\u6807\u7684\u6EDA\u8F6E\u65B9\u5411\u53D8\u4E3A\u6B63\u5E38</strong>\u3002</dd></dl><h3 id="_4-3-vscode" tabindex="-1"><a class="header-anchor" href="#_4-3-vscode" aria-hidden="true">#</a> 4.3 VSCode</h3>',10),f=e("dt",null,[e("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},"VSCode")],-1),_=a("\u5F00\u53D1\u5FC5\u5907\uFF0C"),k=a("\u5206\u4EAB\u4E00\u4E0B\u6211\u7684VSCode\u63D2\u4EF6\u4EE5\u53CA\u914D\u7F6E"),w=n('<h3 id="_4-4-markdown" tabindex="-1"><a class="header-anchor" href="#_4-4-markdown" aria-hidden="true">#</a> 4.4 Markdown</h3><dl><dt><a href="https://www.typora.io/" target="_blank" rel="noopener noreferrer">Typora</a></dt><dd>md\u6587\u4EF6\u7F16\u8F91\u67E5\u770B</dd><dt><a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer">Obsidian</a></dt><dd>\u6700\u8FD1\u6BD4\u8F83\u5E38\u7528\u7684\u662F\u9ED1\u66DC\u77F3\u8FDB\u884C\u7F16\u8F91\u6211\u7684md\u6587\u4EF6\u5DE5\u4F5C\u533A\uFF0C\u5B9E\u73B0iCould\u7684\u4E91\u540C\u6B65</dd></dl><h3 id="_4-5-\u89C6\u9891\u64AD\u653E\u5668" tabindex="-1"><a class="header-anchor" href="#_4-5-\u89C6\u9891\u64AD\u653E\u5668" aria-hidden="true">#</a> 4.5 \u89C6\u9891\u64AD\u653E\u5668</h3><dl><dt><a href="https://www.elmedia-video-player.com/" target="_blank" rel="noopener noreferrer">Elmedia Player</a></dt><dd>\u76F8\u6BD4VLC\u6BD4\u8F83\u8F7B\u91CF\u5316\uFF0C\u4E3B\u8981\u662F\u53EF\u4EE5\u6D41\u7545\u9884\u89C8 .webm \u683C\u5F0F\u7684\u89C6\u9891</dd><dt><a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer">VLC</a></dt><dd>\u67E5\u770Brtmp\u6D41\u89C6\u9891\u5FC5\u5907\uFF0C\u4F46\u662F\u5728 Mac \u4E0A\u4F53\u9A8C\u8FD8\u662F\u6BD4 Windows \u5DEE\u4E00\u70B9</dd></dl><h3 id="_4-6-\u4E0B\u8F7D\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-6-\u4E0B\u8F7D\u8F6F\u4EF6" aria-hidden="true">#</a> 4.6 \u4E0B\u8F7D\u8F6F\u4EF6</h3><dl><dt><a href="https://www.mac-downloader.com/" target="_blank" rel="noopener noreferrer">Folx</a></dt><dd>\u7C7B\u4F3C\u4E8E\u8FC5\u96F7\u4F46\u4E0D\u6D41\u6C13\uFF0C\u53EF\u4EE5\u7528\u6765\u4E0B\u8F7Dtorrent\u79CD\u5B50\u6587\u4EF6</dd></dl><h3 id="_4-7-\u5916\u63A5\u5C4F\u5E55\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_4-7-\u5916\u63A5\u5C4F\u5E55\u63A7\u5236" aria-hidden="true">#</a> 4.7 \u5916\u63A5\u5C4F\u5E55\u63A7\u5236</h3><dl><dt><a href="https://github.com/MonitorControl/MonitorControl" target="_blank" rel="noopener noreferrer">MonitorControl</a></dt><dd>\u89E3\u51B3Mac\u5916\u63A5\u5C4F\u5E55\u65E0\u6CD5\u8BBE\u7F6E\u5176<strong>\u97F3\u91CF\u3001\u4EAE\u5EA6</strong></dd></dl><h3 id="_4-8-\u5783\u573E\u6E05\u695A\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-8-\u5783\u573E\u6E05\u695A\u8F6F\u4EF6" aria-hidden="true">#</a> 4.8 \u5783\u573E\u6E05\u695A\u8F6F\u4EF6</h3><dl><dt><a href="https://lemon.qq.com/" target="_blank" rel="noopener noreferrer">Tencent Lemon</a></dt><dd>\u817E\u8BAF\u5728windows\u7684\u8F6F\u4EF6\u5F88\u6D41\u6C13\uFF0Cmac\u8FD8\u884C\u7528\u7740\u633A\u65B9\u4FBF\u7684\uFF0C\u65E5\u5E38\u6E05\u7406\u5783\u573E\u8FD8\u6709\u5378\u8F7D\u8F6F\u4EF6\u6E05\u695A\u6B8B\u7559\u6587\u4EF6</dd></dl><h3 id="_4-9-\u538B\u7F29\u6587\u4EF6\u89E3\u538B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-9-\u538B\u7F29\u6587\u4EF6\u89E3\u538B\u6587\u4EF6" aria-hidden="true">#</a> 4.9 \u538B\u7F29\u6587\u4EF6\u89E3\u538B\u6587\u4EF6</h3><p><a href="https://ezip.awehunt.com/" target="_blank" rel="noopener noreferrer">eZip</a></p><h3 id="_4-10-\u5206\u5C4F\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-10-\u5206\u5C4F\u5DE5\u5177" aria-hidden="true">#</a> 4.10 \u5206\u5C4F\u5DE5\u5177</h3><dl><dt><a href="https://www.spectacleapp.com/" target="_blank" rel="noopener noreferrer">Spectacle</a></dt><dd>mac \u81EA\u5E26\u7684\u5206\u5C4F\u5F88\u96BE\u7528\uFF0C\u65E0\u5948\u53EA\u80FD\u627E\u4E00\u4E2A\u514D\u8D39\u7684\uFF0C\u901A\u8FC7\u5FEB\u6377\u952E\uFF0C\u5C06\u76EE\u524D\u4F7F\u7528\u7684\u8F6F\u4EF6\u5206\u5C4F</dd></dl><h3 id="_4-11-\u6D4B\u901F\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-11-\u6D4B\u901F\u5DE5\u5177" aria-hidden="true">#</a> 4.11 \u6D4B\u901F\u5DE5\u5177</h3><dl><dt><a href="https://www.speedtest.net/apps/mac" target="_blank" rel="noopener noreferrer">Speedtest</a></dt><dd>\u7F51\u901F\u5E26\u5BBD\u68C0\u6D4B</dd></dl><h3 id="_4-12-\u957F\u622A\u56FE\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-12-\u957F\u622A\u56FE\u5DE5\u5177" aria-hidden="true">#</a> 4.12 \u957F\u622A\u56FE\u5DE5\u5177</h3><dl><dt><a href="https://xnipapp.com/" target="_blank" rel="noopener noreferrer">Xnip</a></dt><dd>mac \u957F\u5217\u8868\u622A\u56FE\u5DE5\u5177\u5927\u90E8\u5206\u4ED8\u8D39\uFF0C\u800CXnip\u90E8\u5206\u529F\u80FD\u9700\u8981\u4ED8\u8D39\uFF0C\u5E76\u4E14\u5E26logo\u6C34\u5370</dd></dl><h3 id="_4-13-\u7A97\u53E3\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#_4-13-\u7A97\u53E3\u5207\u6362" aria-hidden="true">#</a> 4.13 \u7A97\u53E3\u5207\u6362</h3><dl><dt><a href="https://bahoom.com/hyperswitch" target="_blank" rel="noopener noreferrer">HyperSwitch</a></dt><dd>\u89E3\u51B3Mac <code>cmd + tab</code> \u65E0\u6CD5\u540C\u5E94\u7528\u7A97\u53E3\u5207\u6362\u95EE\u9898</dd></dl><p>[\u5F3A\u5927\u7684\u795E\u5947\u5730\u5740] =&gt; (https://www.macwk.com/)</p><br><br><blockquote><p>I just try my best to make thing well, Could you give a <a href="https://github.com/Zhengqbbb/zhengqbbb.github.io" target="_blank" rel="noopener noreferrer">star \u2B50</a> to encourage me ?</p></blockquote><blockquote><p>\u6211\u662F Qbenben\uFF0C\u4E00\u4E2A\u7231\u6298\u817E\u5728\u6C89\u6D78\u5728\u4EE3\u7801\u4E16\u754C\u6253\u602A\u5347\u7EA7\u7684\u6DF1\u5733\u5C0F\u9753\u4ED4\uFF0C\u611F\u8C22\u60A8\u7684\u9605\u8BFB\u3002<a href="https://github.com/Zhengqbbb" target="_blank" rel="noopener noreferrer">Github</a> \xB7 <a href="https://www.qbenben.com/" target="_blank" rel="noopener noreferrer">Blog</a></p></blockquote>',25);function x(v,q){const r=l("RouterLink");return d(),i(h,null,[p,e("dl",null,[u,e("dd",null,[b,t(r,{to:"/docs/play/terminal.html"},{default:o(()=>[m]),_:1})])]),g,e("dl",null,[f,e("dd",null,[_,t(r,{to:"/docs/play/vscode.html"},{default:o(()=>[k]),_:1})])]),w],64)}var y=s(c,[["render",x],["__file","index.html.vue"]]);export{y as default};
