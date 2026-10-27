import{i as v,l as g,p as h,a as f,w as b,b as y}from"./logo-C8YL3_UU.js";const $=[{id:"B01",family:"设计令牌 Design Tokens",vue:{status:"done"},react:{status:"done"},portal:"foundation",note:"brand 单一真源，双端同消费"},{id:"B02",family:"品牌适配与主题",vue:{status:"done"},react:{status:"done"},portal:"guidelines",note:"品牌→框架单向，宿主决定主题来源"},{id:"C01",family:"按钮与开关",vue:{status:"done",section:"button"},react:{status:"done",section:"button"}},{id:"C02",family:"输入与表单皮肤",vue:{status:"done",section:"form-modern"},react:{status:"done",section:"form-modern"}},{id:"C03",family:"单选多选选择",vue:{status:"done",section:"form-modern"},react:{status:"done",section:"form-modern"}},{id:"C04",family:"远程检索与成员角色",vue:{status:"done",section:"members-roles"},react:{status:"done",section:"members-roles"},note:"source 接口进包，平台 adapter 留应用"},{id:"C05",family:"日期与金额",vue:{status:"done",section:"form-modern"},react:{status:"done",section:"form-modern"}},{id:"C06",family:"字段与布局",vue:{status:"done",section:"field-recipes"},react:{status:"done",section:"field-recipes"}},{id:"C07",family:"反馈与空态进度",vue:{status:"done",section:"feedback"},react:{status:"done",section:"feedback"}},{id:"C08",family:"浮层与抽屉",vue:{status:"done",section:"overlay"},react:{status:"done",section:"overlay"}},{id:"C09",family:"表格",vue:{status:"done",section:"table-modern"},react:{status:"done",section:"table-modern"}},{id:"C10",family:"批量选择",vue:{status:"done",section:"table-modern"},react:{status:"done",section:"table-modern"}},{id:"C11",family:"导航",vue:{status:"done",section:"navigation"},react:{status:"done",section:"navigation"},note:"双端章节镜像：导航独立节，NavMenu/NavSegmented/SidebarShell 对齐 vue"},{id:"C12",family:"上传",vue:{status:"done",section:"form-modern"},react:{status:"done",section:"form-modern"},note:"BFF/预览 adapter 留应用"},{id:"C13",family:"成员标签与头像",vue:{status:"done",section:"members-roles"},react:{status:"done",section:"members-roles"}},{id:"C14",family:"历史列表",vue:{status:"done",section:"history"},react:{status:"done",section:"history"},note:"history-contract 双端同契约"},{id:"C15",family:"对话与搜索呈现",vue:{status:"done",section:"message-runtime"},react:{status:"done",section:"message-runtime"},note:"Vue 组合呈现：EmooMessage+useMessageScroll+EP carousel/时间线；问卷为 React 特有适用项"},{id:"C16",family:"框架特有原语",vue:{status:"done",section:"overlay"},react:{status:"done",section:"overlay"},note:"Vue 按 EP 相应能力适配（collapse 等）；OTP/Resizable 等 React 特有件不造同名空壳"},{id:"C17",family:"图标与工具本地化",vue:{status:"done",section:"icons"},react:{status:"done",section:"icons"},note:"icons / locales / 纯工具"},{id:"A01",family:"平台 adapter",vue:{status:"outside"},react:{status:"outside"},note:"SSO/联系人/上传 BFF 留消费应用（M6）"},{id:"E01",family:"专业扩展",vue:{status:"outside"},react:{status:"outside"},note:"CAD/富文本/大屏等留项目，品牌需归一"}],C={rows:$};var k={brand:{version:"0.0.5",dist:"2026-10-27 04:01"},vue:{version:"0.0.5",dist:"2026-10-27 04:01"},react:{version:"0.0.5",dist:"2026-10-27 04:01"}};const a=k,l=v();let s=l.dark,o=l.color;const u='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',m='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',M={done:"完成",partial:"部分",planned:"规划中",outside:"应用侧"},c=(t,e)=>{const n=M[t.status]??t.status;return t.section?`<a class="chip" data-status="${t.status}" href="${e}#${t.section}">${n} ↗</a>`:`<span class="chip" data-status="${t.status}">${n}</span>`},i=(t,e,n)=>`
  <article class="pkg-card">
    <header><h3>@emoo-ai/${t==="brand"?"brand":e==="vue"?"ui-vue":"ui-react"}</h3>
      <span class="pkg-ver">${a[e].version}</span></header>
    <p>${n}</p>
    <code>npm i @emoo-ai/${t==="brand"?"brand":e==="vue"?"ui-vue":"ui-react"}</code>
  </article>`;document.querySelector("#app").innerHTML=`
  <header class="pg-topbar">
    <a class="pg-brand" href="./"><img src="${g}" alt="EMOO logo" /><span>EMOO UI</span><small>组件门户</small></a>
    <div class="pg-actions">
      <div class="pg-dots" data-testid="portal-palette">${h.map(t=>`<button class="pg-dot${t.value===o?" is-active":""}" title="主题色：${t.label}" aria-label="主题色：${t.label}" data-testid="portal-color-${t.key}" data-color="${t.value}" style="background:${t.value}"></button>`).join("")}</div>
      <button class="pg-toggle" data-testid="portal-theme-toggle" aria-label="切换亮暗主题">${s?u:m}</button>
    </div>
  </header>

  <main class="portal-main">
    <section class="hero">
      <h1>一套品牌，<span class="grad">两个框架</span></h1>
      <p class="lead">emoo 设计系统：一套品牌设计语言，Vue 与 React 两套组件实现，全线产品视觉一致。</p>
      <div class="entry-cards">
        <a class="entry-card" href="./design/">
          <strong>品牌设计</strong>
          <span>品牌的色彩、字体与组件使用规范 · 支持亮暗双主题</span>
          <em>查看 →</em>
        </a>
        <a class="entry-card" href="./vue/">
          <strong>Vue</strong>
          <span>Vue 版全部组件在线演示,可直接交互试用</span>
          <em>进入 →</em>
        </a>
        <a class="entry-card" href="./react/">
          <strong>React</strong>
          <span>React 版全部组件在线演示,可直接交互试用</span>
          <em>进入 →</em>
        </a>
      </div>
    </section>

    <section class="pkgs">
      <h2>三包</h2>
      <div class="pkg-grid">
        ${i("brand","brand","品牌设计令牌：亮暗色板、字阶、圆角、阴影与动效，不依赖任何框架。")}
        ${i("ui-vue","vue","基于 Element Plus 的品牌皮肤与业务复合组件。")}
        ${i("ui-react","react","基于 Radix 的无障碍原语与业务复合组件。")}
      </div>
    </section>

    <section class="matrix-sec">
      <h2>能力矩阵</h2>
      <p class="caption">Vue 与 React 双端能力覆盖一览。</p>
      <p class="matrix-legend">
        <span><i class="chip chip--done"></i>完成 = 组件库内、可直接试用</span>
        <span><i class="chip chip--partial"></i>部分 = 组合呈现或框架适配</span>
        <span><i class="chip chip--side"></i>应用侧 = 由接入应用或项目实现，库只定义接口</span>
      </p>
      <div class="matrix-scroll">
        <table class="matrix" data-testid="portal-matrix">
          <thead><tr><th>ID</th><th>能力族</th><th>Vue</th><th>React</th><th>备注</th></tr></thead>
          <tbody>
            ${C.rows.map(t=>`
            <tr>
              <td class="row-id">${t.id}</td>
              <td>${t.family}</td>
              ${t.portal?`<td colspan="2"><a class="chip" data-status="done" href="./design/#${t.portal}">完成 ↗</a></td>`:`<td>${c(t.vue,"./vue/")}</td><td>${c(t.react,"./react/")}</td>`}
              <td class="row-note">${t.note??""}</td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer class="portal-footer">
    <span>brand@${a.brand.version} · ui-vue@${a.vue.version} · ui-react@${a.react.version}（dist 构建于 ${a.brand.dist}）</span>
  </footer>`;const r=document.querySelector('[data-testid="portal-theme-toggle"]'),p=[...document.querySelectorAll(".pg-dot")],d=()=>{document.documentElement.classList.toggle("dark",s),f(o,s),b(s),y(o),r.innerHTML=s?u:m,r.setAttribute("aria-label",s?"切换到亮色":"切换到暗色");for(const e of p)e.classList.toggle("is-active",e.dataset.color===o)};r.addEventListener("click",()=>{s=!s,d()});for(const t of p)t.addEventListener("click",()=>{o=t.dataset.color,d()});d();
