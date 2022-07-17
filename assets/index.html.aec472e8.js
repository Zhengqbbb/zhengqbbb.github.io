import{_ as e,o,c as t,d as r}from"./app.f30b0e16.js";const c={},i=r('<p>\u6211\u7684\u5F00\u53D1\u5FC3\u8DEF\u5386\u7A0B</p><br><p align="center"><a target="_blank" href="https://github.com/Zhengqbbb/cz-git">Github</a> \xB7 <a target="_blank" href="https://cz-git.qbb.sh">\u4E2D\u6587\u6587\u6863</a></p><p><img src="https://user-images.githubusercontent.com/40693636/154906217-e0b1c5d0-9294-4072-8082-c0cdd9392023.gif" alt="demo-gif"></p><hr><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><blockquote><p>\u672C\u6587\u4E0D\u4F1A\u8BB2\u8FF0 cz-git \u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4E3B\u8981\u8BB2\u8FF0\u6211\u5728\u5F00\u53D1\u8FD9\u6B3E\u9002\u914D\u5668\u4E2D\u7684\u5FC3\u8DEF\u5386\u7A0B\u3002</p></blockquote><ul><li>\u968F\u7740\u591A\u4EBA\u5F00\u53D1\u56E2\u961F\u63A8\u8FDB\u7740\u524D\u7AEF\u5DE5\u7A0B\u5316\u7684\u4E0D\u65AD\u53D1\u5C55\uFF0C\u56E2\u961F\u89C4\u8303\u4E0E\u9879\u76EE\u7CFB\u7EDF\u5316\u914D\u5957\u5DE5\u5177\u94FE\u6761\u4E5F\u5728\u4E0D\u65AD\u8BDE\u751F\u3002</li><li>\u4ECE <code>lerna</code> \u6216\u5230\u6700\u8FD1\u5174\u8D77\u7684 <code>pnpm</code> \u7BA1\u7406 <code>monoreo workspace</code>\u3002</li><li><code>eslint</code> \u914D\u5408 <code>pretter</code> \u786E\u4FDD\u56E2\u961F\u4EE3\u7801\u683C\u5F0F\u7EDF\u4E00\u6027\u3002</li><li><code>commitizen</code> \u914D\u5408 <code>commitlint</code> \u4E0E <code>lint-staged</code> \u4E0E <code>husky</code> \u4E4B\u95F4\u7684\u914D\u5408\uFF0C\u628A\u5173\u6700\u540E\u63D0\u4EA4\u4EE3\u7801\u8D28\u91CF\u4E0E commit \u4FE1\u606F\u89C4\u8303\u3002</li><li>\u518D\u5230\u5229\u7528 <code>circleci</code>, <code>github action</code> \u6216 <code>gitee go</code> \u8FDB\u884CCI/CD(\u6301\u7EED\u96C6\u6210\u3001\u6301\u7EED\u4EA4\u4ED8\u548C\u6301\u7EED\u90E8\u7F72)\u3002</li></ul><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p><strong>\u4EC0\u4E48\u662F commitlint</strong> : git commit \u65F6\u5BF9\u4E8E commit message \u8FDB\u884C\u89C4\u8303\u68C0\u67E5\u7684\u5DE5\u5177\uFF0C\u4FDD\u8BC1\u56E2\u961F\u7684\u4E00\u81F4\u6027\u3002</p><p><strong>\u4EC0\u4E48\u662F commitizen</strong> : \u57FA\u4E8ENode.js\u7684 <code>git commit</code> \u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F85\u52A9\u751F\u6210\u6807\u51C6\u5316\u89C4\u8303\u5316\u7684 commit message\u3002</p><p><strong>\u4EC0\u4E48\u662F adapter(\u9002\u914D\u5668)</strong> : \u66F4\u6362 commitizen \u547D\u4EE4\u884C\u5DE5\u5177\u7684<strong>\u4EA4\u4E92\u65B9\u5F0F</strong>\u63D2\u4EF6\u3002</p><hr><p><strong>cz-git \u6709\u4EC0\u4E48\u7279\u70B9</strong></p><ul><li>\u53CB\u597D\u578B\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C<strong>\u201C\u61D2\u5B57\u4F18\u5148\u201D</strong> \uFF01\u652F\u6301\u5728\u547D\u4EE4\u884C\u641C\u7D22\u548C\u9009\u62E9\uFF0C\u51CF\u5C11\u62FC\u5199\u9519\u8BEF\u3002</li><li><strong>\u9AD8\u5EA6\u81EA\u5B9A\u4E49</strong>, \u4F46\u8F93\u51FA\u683C\u5F0F\u9075\u5FAA\u6807\u51C6\u7684 <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits" target="_blank" rel="noopener noreferrer">Angular commit</a> \u89C4\u8303\u3002</li><li>\u66F4\u597D\u7EF4\u62A4 monorepo \u5DE5\u7A0B\u5316\u9879\u76EE \u4E0E <strong>commitlint</strong> \u914D\u5408\u7ED9\u4E88\u547D\u4EE4\u884C\u7684\u76F8\u5173\u6821\u9A8C\u4FE1\u606F\u3002</li><li>\u66F4\u597D\u7684\u4E0Eissue\u94FE\u63A5\uFF0C\u5C24\u5176 <strong>gitee</strong> | \u2705 \u652F\u6301\u5728 commit \u4E2D\u6DFB\u52A0 <strong>emoji</strong>\u3002</li></ul><h2 id="\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528</h2><h3 id="cz-conventional-changelog" tabindex="-1"><a class="header-anchor" href="#cz-conventional-changelog" aria-hidden="true">#</a> cz-conventional-changelog</h3><blockquote><p>commitizen \u5B98\u65B9\u7684\u9002\u914D\u5668(\u8D77\u521D\u6240\u4F7F\u7528)</p></blockquote><ul><li>\u6DFB\u52A0\u914D\u7F6E\u9700\u8981\u5199\u5728 <code>package.json</code> \u4E2D\uFF0C\u5E76\u4E14\u53EF\u652F\u6301\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u592A\u5C11</li><li>\u4EA4\u4E92\u65B9\u5F0F\u5E76\u4E0D\u53CB\u597D\uFF0C\u91CD\u590D\u6027\u8F93\u5165\u7684\u4E1C\u897F\u592A\u591A</li></ul><h3 id="cz-customizable" tabindex="-1"><a class="header-anchor" href="#cz-customizable" aria-hidden="true">#</a> cz-customizable</h3><blockquote><p>\u53EF\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u9002\u914D\u5668(cz-git \u8D77\u521D\u53C2\u7167\u5BF9\u8C61)</p></blockquote><ul><li>\u968F\u7740\u4F7F\u7528 <code>monoreo</code> \uFF0C\u6211\u5F00\u59CB\u5BFB\u6C42\u66F4\u597D\u7684\u9002\u914D\u5668\u6765\u89E3\u51B3\u6211<strong>\u9700\u8981\u91CD\u590D\u8F93\u5165 <code>scopes</code> \u7684\u95EE\u9898\uFF0C\u4F46\u4E0D\u4E45\u540E\u6211\u53D1\u73B0\u8FD9\u5E76\u4E0D\u662F\u6211\u60F3\u8981\u7684</strong>\u3002</li><li>\u968F\u7740\u6211\u7684 packages \u4E0D\u65AD\u589E\u5927\uFF0C<strong>\u4EC5\u652F\u6301\u9009\u62E9\u7684\u4EA4\u4E92\u65B9\u5F0F\u4F53\u9A8C\u4F1A\u5F88\u96BE\u53D7</strong>\uFF0C\u9700\u8981\u4ECE\u4E0A\u5230\u4E0B\u4E0D\u65AD\u5BFB\u627E\u3002</li><li>\u914D\u7F6E\u6587\u4EF6\u95EE\u9898\uFF0C\u6211\u9700\u8981\u989D\u5916\u589E\u52A0 <code>.cz-config.js</code> \u5728\u6211\u7684\u9879\u76EE\u4E2D\uFF0C\u5982\u6B64\u4E00\u6765\u6211\u914D\u5408 <code>commitlint</code> \u9700\u8981\u914D\u7F6E\u4E24\u4E2A\u5730\u65B9\uFF0C\u8FD9\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u8054\u52A8\u914D\u5408\u83B7\u53D6\u3002</li><li>\u652F\u6301\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u8FD8\u662F\u592A\u5C11\uFF0C\u6BD4\u5982\u6211\u60F3\u8981 \u8DF3\u8FC7\u9009\u9879 \u7F6E\u4E8E\u9876\u90E8\uFF0C\u4EE5\u914D\u5408\u56E2\u961F commit \u6574\u4F53\u4E60\u60EF\u7B49\uFF0C\u8FD9\u4E9B\u5927\u5927\u5C0F\u5C0F\u4F1A\u5F88\u5F71\u54CD\u4F7F\u7528\u4F53\u9A8C\u3002</li></ul><h2 id="\u89E3\u51B3\u75DB\u70B9\u4EE5\u53CA\u5FC3\u8DEF\u5386\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u75DB\u70B9\u4EE5\u53CA\u5FC3\u8DEF\u5386\u7A0B" aria-hidden="true">#</a> \u89E3\u51B3\u75DB\u70B9\u4EE5\u53CA\u5FC3\u8DEF\u5386\u7A0B</h2><ol><li><strong>\u5DE5\u7A0B\u5E08\u8FFD\u6C42\u7684\u6781\u81F4 \u201D\u61D2\u201C</strong> \uFF1A\u4F5C\u4E3A\u5F00\u53D1\u5DE5\u7A0B\u5E08\u7684\u6211\u4EEC\u5E73\u65F6\u4F1A\u5229\u7528\u6211\u4EEC\u7684\u4E60\u60EF\u7ED3\u5408\u6211\u4EEC\u7684\u6280\u672F\uFF0C\u53BB\u60F3\u529E\u6CD5\u5904\u7406\u597D\u91CD\u590D\u6027\u7684\u5DE5\u4F5C\u6216\u8005\u6076\u5FC3\u96BE\u53D7\u7684\u4E8B\u60C5\uFF0C\u8FD9\u4E5F\u662F\u6211\u6240<strong>\u8FFD\u6C42\u5411\u5F80</strong>\u7684\u3002</li><li><strong>\u4EC0\u4E48\u662F\u53CB\u597D\u4EA4\u4E92\u578B\u547D\u4EE4\u884C\u5DE5\u5177</strong> \uFF1A\u547D\u4EE4\u884C\u5DE5\u5177\u7684\u8BBE\u8BA1\u4E00\u5B9A\u8981\u5177\u6709\u5F15\u5BFC\u6027\uFF0C\u8981\u6709\u5F88\u597D\u7684\u652F\u6301\u4EA4\u4E92\u578B\u7684<strong>complate</strong>\u3002<br><br>\u6BD4\u5982\u8BF4\u6211\u4E3A\u6211\u7684 <code>monorepo</code> ui\u5E93\u4E2D table \u6DFB\u52A0\u4E86\u6D4B\u8BD5\u3002\u6211\u5728 commit \u7684\u65F6\u5019<strong>\u8111\u6D77\u91CC\u7B2C\u4E00\u65F6\u95F4\u6D6E\u73B0</strong>\u662F test table\u3002\u4F46\u5982\u679C\u50CF\u4E4B\u524D\u9002\u914D\u5668\u8981\u6211\u53BB\u9009\u62E9\u5927\u91CF\u9009\u9879\uFF0C\u5C31\u4F1A\u5F88\u70E6\uFF0C\u5931\u53BB\u4E86\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177\u7684\u4FBF\u5229\u6027\uFF0C\u5E76\u4E14\u8FD8\u6709\u62FC\u5199\u51FA\u9519\u7684\u98CE\u9669\u3002<br>\u6211\u60F3\u8981\u7684\u662F \u53EA\u7528\u8F93\u5165 <code>te</code> \u56DE\u8F66\u8F93\u51FA<code>test</code>, <code>ta</code> \u56DE\u8F66\u8F93\u51FA <code>table</code>\uFF0C\u8FD9\u6837\u7528\u8D77\u6765\u624D\u8212\u670D\u3002<br><br></li><li><strong>\u5982\u4F55\u652F\u6301\u597D\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u4EE5\u53CA\u914D\u7F6E</strong> \uFF1A\u8FD9\u4E2A\u5DE5\u5177\u7684\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u80AF\u5B9A\u662F\u7ED3\u5408<strong>\u56E2\u961F\u4E60\u60EF</strong>\u81EA\u5B9A\u4E49\u8BBE\u8BA1\u3002<br>\u6BD4\u5982\u5927\u591A\u6570\u60C5\u51B5\u6211\u4EEC\u7684 commit <code>scopes</code>(\u8303\u56F4) \u662F\u4E3A\u7A7A\u76F4\u63A5\u8DF3\u8FC7\uFF0C\u90A3\u4E48\u6211\u4EEC\u7684\u7B2C\u4E00\u9879\u5E94\u8BE5\u662F <code>empty</code>\u3002\u5982\u679C\u662F\u56E2\u961F\u9AD8\u5EA6\u89C4\u8303\u4E86\u89C4\u5219\u7684\u8F93\u51FA\uFF0C\u90A3\u4E48\u6211\u4EEC\u7684 <code>empty</code> \u5E94\u8BE5\u4E0D\u663E\u793A\u6216\u8005\u7F6E\u4E8E\u5E95\u90E8\u3002</li><li><strong>\u6700\u540E\u4E5F\u662F\u6211\u53D1\u73B0\u81F3\u5173\u91CD\u8981\u7684\u4E00\u70B9</strong> \uFF1A\u4F7F\u7528 <mark>gitee</mark> \u8FDB\u884C\u5F00\u53D1\u7BA1\u7406\u4E2D\uFF0C\u5229\u7528 commit message\u53EF\u4EE5\u6539\u53D8issue\u72B6\u6001\u3002<a href="https://gitee.com/help/articles/4141#article-header2" target="_blank" rel="noopener noreferrer">Commit \u5173\u8054Issue</a> <br><strong>\u901A\u8FC7\u8BBE\u7F6E\u4EFB\u52A1\u72B6\u6001\u6307\u4EE4\uFF0C\u5373\u8D77issue\u72B6\u6001\u53D8\u66F4\u7684\u522B\u540D\uFF0C\u901A\u8FC7\u9009\u62E9\u522B\u540D\u548C\u8F93\u5165issue\u53F7\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u5173\u8054\u5E76\u7BA1\u7406issue</strong><br> \u518D\u914D\u5408\u547D\u4EE4\u884C\u4E2D\u6240\u652F\u6301\u641C\u7D22\u4E0E\u9009\u62E9\uFF0C\u5C31\u4F1A\u8FBE\u5230\u5F88\u597D\u7684\u4F53\u9A8C\u3002<br> \u6BD4\u5982\u50CF\u6211\u5C31\u7ECF\u5E38\u4F1A\u7B49\u5230\u5F00\u53D1\u5B8C\u6210\u540E\u624D\u5230<mark>\u7F51\u9875</mark>\u5C06 issue \u5F85\u8FDB\u884C\u8F6C\u4E3A\u5F85\u5B8C\u6210\u518D\u8FDB\u884C\u6D41\u7A0B\uFF0C\u6CA1\u6709\u5F88\u597D\u7684\u5173\u8054\u4EE3\u7801\u63D0\u4EA4\u7559\u75D5\u3002\u73B0\u5728\u6211\u53EA\u9700\u8981\u5728\u521B\u5EFA\u5206\u652F\u7684\u65F6\u5019\u5206\u652F\u540D\u643A\u5E26issue number\u3002\u7ED3\u5408\u6211\u8BBE\u7F6E<code>finish</code>\u4E3A \u5C06\u4EFB\u52A1\u8F6C\u4E3A\u5F85\u5B8C\u6210\uFF0C\u8FD9\u6837\u6211\u5C31\u80FD\u5728 commit \u7684\u65F6\u5019\u66F4\u6539issue\u72B6\u6001\u5E76\u7559\u75D5\u4EE3\u7801\u63D0\u4EA4\u8BB0\u5F55\u65B9\u4FBF\u56DE\u6EAF\u3002</li></ol><br><br><p>\u57FA\u4E8E\u4EE5\u4E0A\u7684\u521D\u5FC3\u6211\u5F00\u53D1\u4E86 <a href="https://github.com/Zhengqbbb/cz-git" target="_blank" rel="noopener noreferrer">cz-git</a>\uFF0C\u6B22\u8FCE\u5927\u5BB6\u524D\u6765\u4F7F\u7528\u3002\u5982\u679C\u89C9\u5F97\u4E0D\u9519\u7684\u53EF\u4EE5\u7ED9\u4E2A\u5C0F\u661F\u661F~</p><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><p>\u4F60\u8981\u95EE\u6211\u8FD9\u8FBE\u5230\u4F60\u7684\u76EE\u7684\u4E86\u5417 \uFF1F \u5176\u5B9E\u6211\u8FD8\u6CA1\u6709</p><ol><li>\u57FA\u4E8E <code>Node.js</code> \u6765\u542F\u52A8\u7684\u547D\u4EE4\u884C\uFF0C\u5149\u662F\u542F\u52A8 Node.js \u5C31\u6162\u4E86\u3002\u4F46\u5982\u679C\u4F60\u5982\u679C\u4F60\u53EA\u63A5\u89E6\u4E86<code>Node.js</code> \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u5E94\u8BE5\u6CA1\u6709\u611F\u89C9\uFF0C\u4F46\u5BF9\u4E8E\u6211\u6765\u8BF4\u7ECF\u5E38\u63A5\u89E6\u547D\u4EE4\u884C\u751F\u6001\u7684\u4EBA\u800C\u8A00\u4F1A\u5F88\u96BE\u53D7\u3002\u8FD9\u79CD\u611F\u89C9\u5C31\u50CF\u662F\u4F7F\u7528\u4E86 <code>144 Hz</code> \u7684\u663E\u793A\u5668\u5C4F\u5E55\u56DE\u4E0D\u5230 <code>60 Hz</code> \u7684\u611F\u89C9\u3002</li><li><strong>\u4F9D\u8D56 Node.js \u73AF\u5883</strong>\uFF0C\u65E0\u6CD5\u505A\u5230\u96F6\u4F9D\u8D56\u7684\u517C\u5BB9\u6027\u652F\u6301\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u683C\u5C40\u5C0F\u4E86\u3002\u6BD4\u65B9\u4F60\u8981\u7ED9\u5176\u4ED6\u90E8\u95E8\u7684\u5B89\u5229 <code>cz-git</code>\uFF0C\u4F60\u9700\u8981\u544A\u8BC9\u4ED6\uFF0C\u9700\u8981\u5B89\u88C5Node.js\u518D...\u624D\u80FD\u4F7F\u7528\u3002</li><li>\u62FF <code>Go\uFF0CRust</code> \u6765\u5236\u4F5C <code>commitizen</code> \uFF1F \u7B54\u6848\u662F\u4E0D\u4F1A\uFF0C\u4F53\u79EF\u548C\u901F\u5EA6\u6211\u8FD8\u662F\u65E0\u6CD5\u63A5\u53D7<br> \u5F15\u7528 <a href="https://github.com/skywind3000/z.lua" target="_blank" rel="noopener noreferrer">zlua</a> \u4F5C\u8005\u7684\u4E00\u53E5\u8BDD: (\u4F46\u4E5F\u4E0D\u662FLua\uFF0C\u9700\u8981\u4F9D\u8D56Lua\u73AF\u5883)</li></ol><blockquote><p>\u5F88\u591A\u547D\u4EE4\u884C\u5DE5\u5177 go/rust \u5199\u6210\uFF0C\u52A8\u4E0D\u52A8\u5C31 2MB / 3MB\uFF0C\u4ED6\u4EEC\u90FD\u8FD8\u6CA1\u6709\u5B8C\u6210\u52A0\u8F7D,lua \u811A\u672C\u53EF\u80FD\u90FD\u8FD0\u884C\u5B8C\u4E86</p></blockquote><p>\u6316\u5751\uFF0C\u5F85\u6211\u7EE7\u7EED\u6DF1\u8015\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\u518D\u6765\u63ED\u6653</p><hr><br><br><blockquote><p>I just try my best to make thing well, Could you give a <a href="https://github.com/Zhengqbbb/cz-git" target="_blank" rel="noopener noreferrer">star \u2B50</a>.<br> \u6211\u662F Qbenben\uFF0C\u4E00\u4E2A\u7231\u6298\u817E\u5728\u6C89\u6D78\u5728\u4EE3\u7801\u4E16\u754C\u6253\u602A\u5347\u7EA7\u7684\u6DF1\u5733\u5C0F\u9753\u4ED4\uFF0C\u611F\u8C22\u60A8\u7684\u9605\u8BFB\u3002<a href="https://github.com/Zhengqbbb" target="_blank" rel="noopener noreferrer">Github</a> \xB7 <a href="https://blog.qbb.sh/" target="_blank" rel="noopener noreferrer">Blog</a></p></blockquote>',36),n=[i];function a(s,l){return o(),t("div",null,n)}var g=e(c,[["render",a],["__file","index.html.vue"]]);export{g as default};