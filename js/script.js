// ============================================================
//  酸柠檬 — 新标签页  v2.0
//  分段清晰 / 捷径收藏分离 / 稳定可靠
// ============================================================

// ============================================================
//  1. 路径检测
// ============================================================
// 扁平结构，全部从根路径引用

// ============================================================
//  2. 壁纸列表
// ============================================================
var WPS = [
  'assets/wp-default.svg?v=9d0526eb',
  'assets/wp-blue.svg?v=0fb926f1',
  'assets/wp-teal.svg?v=3637af4a',
  'assets/wp-pink.svg?v=a392b4b5',
  'assets/wp-grey.svg?v=a949c596',
  'assets/macos-catalina-mountains.jpg?v=5318ebec',
  'assets/macos-mojave-fusion.jpg?v=e7949fec',
  'assets/macos-monterey-stock-.jpg?v=f0799373',
  'assets/macos-sierra-sierra.jpg?v=e0d58a84',
  'assets/vector-art-colorful.jpg?v=d89aa0c6',
  'assets/waves-aerial-view.jpg?v=e0b6edb5',
  'assets/landscape-rocks.jpg?v=a9066e88'
];

// ============================================================
//  3. 搜索引擎
// ============================================================
var ENGINES = {
  bing:   { u: 'https://cn.bing.com/search?q=',    n: '必应', s: '必应' },
  baidu:  { u: 'https://www.baidu.com/s?wd=',      n: '百度', s: '百度' },
  google: { u: 'https://www.google.com/search?q=', n: '谷歌', s: '谷歌' }
};

// ============================================================
//  4. 默认捷径
// ============================================================
// SVG 图标辅助函数（用于提供默认图标，保证跨设备显示一致）
function icon(name, size, cls) {
  var style = size ? ' style="width:' + size + 'px;height:' + size + 'px"' : '';
  return '<svg class="icon ' + (cls || '') + '"' + style + ' viewBox="0 0 24 24"><use href="#icon-' + name + '"></use></svg>';
}

// ============================================================
// 彩色兜底图标库：自定义网站 favicon 获取失败时，按域名稳定分配一款
// B 组：浅色底 + 彩色线条 SVG；E 组：浅色底 + 彩色象形字符
// ============================================================
var FALLBACK_ICONS = [
  // === B 组：浅底 + 彩色线条 SVG ===
  { bg: '#eef2ff', color: '#6366f1', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>' },                    // B1 地球
  { bg: '#ecfdf5', color: '#059669', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>' }, // B2 星星
  { bg: '#fef3c7', color: '#d97706', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' },         // B3 链接
  { bg: '#fce7f3', color: '#db2777', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },                  // B4 气泡
  { bg: '#f0f9ff', color: '#0284c7', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' },                  // B5 书签
  { bg: '#fdf2f8', color: '#be185d', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' }, // B6 闪电
  { bg: '#f5f3ff', color: '#7c3aed', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },           // B7 搜索
  // === E 组：浅底 + 彩色象形字符 ===
  { bg: '#fff7ed', color: '#ea580c', ch: '✦' },
  { bg: '#f0fdfa', color: '#0d9488', ch: '❂' },
  { bg: '#eff6ff', color: '#2563eb', ch: '◆' },
  { bg: '#fdf4ff', color: '#a855f7', ch: '✿' },
  { bg: '#fef9c3', color: '#a16207', ch: '❋' },
  { bg: '#f0fdf4', color: '#15803d', ch: '☘' },
  { bg: '#f5f3ff', color: '#6d28d9', ch: '✺' },
  { bg: '#fefce8', color: '#d97706', ch: '☀' }  // E8 太阳
];

// 兜底图标：按域名 hash 稳定取一款彩色图标（同一网站始终同一款，不随机跳）
function getDefaultIcon(s, size) {
  size = size || 32;
  var icons = FALLBACK_ICONS;
  var idx = 0;
  if (s && s.u) {
    var key = String(s.u).replace(/^https?:\/\//, '').replace(/[^a-z0-9]/gi, '');
    var h = 0;
    for (var i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    idx = h % icons.length;
  }
  var it = icons[idx];
  var inner = it.svg ||
    '<span style="font-size:' + Math.round(size * 0.62) + 'px;line-height:1">' + it.ch + '</span>';
  return '<span style="display:inline-flex;align-items:center;justify-content:center;width:' + size + 'px;height:' + size + 'px;border-radius:8px;background:' + it.bg + ';color:' + it.color + ';flex-shrink:0;vertical-align:middle">' + inner + '</span>';
}

function renderIcon(s, size) {
  size = size || 32;
  var fs = Math.round(size * 0.65);
  var wrapStyle = 'display:inline-block;text-align:center;width:' + size + 'px;height:' + size + 'px;line-height:' + size + 'px;font-size:' + fs + 'px;vertical-align:middle;border-radius:8px;background:rgba(0,0,0,.04)';

  // 1. 用户手动指定的图标 / 默认定死图标 → 直接显示（不转义，SVG 代码需要原样渲染）
  if (s.i && s.i !== 'auto') {
    var si = String(s.i).trim();
    // 图片路径（本地品牌图 / 外链图片）→ 用 img 显示真实彩色图标
    if (si.indexOf('brand/') !== -1 || /^https?:\/\/.+\.(png|jpe?g|gif|ico|svg|webp)(\?|$)/i.test(si)) {
      return '<img src="' + _esc(si) + '" alt="" loading="lazy" style="width:' + size + 'px;height:' + size + 'px;object-fit:contain;vertical-align:middle;border-radius:8px">';
    }
    // 只含 SVG/emoji 的直接输出；含其他 HTML 标签的转义防注入
    if (/^<svg/.test(si) || si.length <= 4) {
      return '<span style="' + wrapStyle + '">' + si + '</span>';
    }
    return '<span style="' + wrapStyle + '">' + _esc(si) + '</span>';
  }

  // 2. 兜底图标（地球）
  var defaultIcon = getDefaultIcon(s, size);

  // 无 URL 或非 http(s) → 直接用兜底
  if (!s.u || s.u.indexOf('http') !== 0) {
    return '<span style="' + wrapStyle + '">' + defaultIcon + '</span>';
  }

  var domain;
  try {
    domain = new URL(s.u).hostname;
  } catch (e) {
    domain = s.u.replace(/^https?:\/\//, '').split('/')[0];
  }

  // 3. 从网站根目录获取 favicon.ico，成功显示真实图标，失败显示兜底
  var src = 'https://' + domain + '/favicon.ico';

  return '<span class="_icon-wrap" style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:' + size + 'px;height:' + size + 'px;flex-shrink:0;vertical-align:middle">' +
           '<span class="_fb" style="line-height:0">' + defaultIcon + '</span>' +
           '<img src="' + src + '" onload="window._favLoaded(this)" onerror="window._favError(this)" ' +
             'style="position:absolute;top:0;left:0;width:' + size + 'px;height:' + size + 'px;border-radius:8px;opacity:0;transition:opacity .2s"/>' +
         '</span>';
}

// favicon 加载成功：尺寸>10px 才有效，否则视为无效，显示兜底
window._favLoaded = function(img) {
  if (img.naturalWidth <= 10 || img.naturalHeight <= 10) {
    window._favError(img);
    return;
  }
  var fb = img.parentNode.querySelector('._fb');
  if (fb) fb.style.display = 'none';
  img.style.opacity = 1;
};

// favicon 加载失败：移除 img，自动露出底层的兜底 SVG 图标
window._favError = function(img) {
  img.remove();
};

var DEF_SHORTS = [
  // 默认网站图标：本地品牌彩色图片（assets/brand/*），不联网、永远稳定
  // cat 为分类标签（渲染时自动插入分组标题，同 cat 的连续项归为一组）
  // === AI 对话 ===
  { n: '豆包',     u: 'https://doubao.com',           i: 'assets/brand/doubao.png',    cat: 'AI 对话' },
  { n: 'DeepSeek', u: 'https://chat.deepseek.com',    i: 'assets/brand/deepseek.svg',  cat: 'AI 对话' },
  { n: 'Kimi',     u: 'https://kimi.moonshot.cn',     i: 'assets/brand/kimi.ico',      cat: 'AI 对话' },
  { n: '千问',     u: 'https://tongyi.aliyun.com',    i: 'assets/brand/tongyi.svg',    cat: 'AI 对话' },
  { n: '文心一言', u: 'https://yiyan.baidu.com',      i: 'assets/brand/yiyan.ico',     cat: 'AI 对话' },
  { n: '元宝',     u: 'https://yuanbao.tencent.com',  i: 'assets/brand/yuanbao.ico',   cat: 'AI 对话' },
  // === 常用工具 ===
  { n: 'GitHub',   u: 'https://github.com',           i: 'assets/brand/github.png',    cat: '常用工具' },
  { n: '邮箱',     u: 'https://mail.qq.com',          i: 'assets/brand/mailqq.ico',    cat: '常用工具' },
  { n: '翻译',     u: 'https://fanyi.baidu.com',      i: 'assets/brand/fanyi.ico',     cat: '常用工具' },
  { n: '百度网盘', u: 'https://pan.baidu.com',        i: 'assets/brand/panbaidu.ico',  cat: '常用工具' },
  { n: '微信',     u: 'https://wx.qq.com',            i: 'assets/brand/weixin.png',    cat: '常用工具' },
  { n: '高德地图', u: 'https://amap.com',             i: 'assets/brand/amap.ico',      cat: '常用工具' },
  // === 影音娱乐 ===
  { n: 'B站',      u: 'https://www.bilibili.com',     i: 'assets/brand/bili.ico',      cat: '影音娱乐' },
  { n: '抖音',     u: 'https://www.douyin.com',       i: 'assets/brand/douyin.ico',    cat: '影音娱乐' },
  { n: '音乐',     u: 'https://music.163.com',        i: 'assets/brand/music163.ico',  cat: '影音娱乐' },
  { n: '爱奇艺',   u: 'https://www.iqiyi.com',        i: 'assets/brand/iqiyi.ico',     cat: '影音娱乐' },
  { n: '微博',     u: 'https://weibo.com',            i: 'assets/brand/weibo.ico',     cat: '影音娱乐' },
  { n: '腾讯视频', u: 'https://v.qq.com',             i: 'assets/brand/tenvideo.ico',  cat: '影音娱乐' }
];

// ============================================================
//  5. 底部 Dock
// ============================================================
var DOCK_ITEMS = [
  { n: '主页', u: 'index.html', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-home"></use></svg>', fn: 'goHome' },
  { n: '网站', u: 'javascript:void(0)', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-grid"></use></svg>', fn: 'toggleShortPanel' },
  { n: '关于', u: 'pages/guanyu.html', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-info"></use></svg>', fn: 'goPage' },
  { n: '发现', u: 'pages/found.html', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-lightbulb"></use></svg>', fn: 'goPage' },
  { n: '工具箱', u: 'pages/toolbox.html', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-toolbox"></use></svg>', fn: 'goPage' },
  { n: '设置', u: 'javascript:void(0)', i: '<svg class="dock-icon" viewBox="0 0 24 24"><use href="#icon-gear"></use></svg>', fn: 'toggleSettings' }
];

// ============================================================
//  6. 恢复默认设置
// ============================================================
function confirmRestoreDefault() {
  confirmAction('恢复默认', '确定恢复所有默认设置吗？这将清空所有自定义数据。', function() {
    restoreAllToDefault();
  });
}

function restoreAllToDefault() {
  localStorage.removeItem('lime_custom_wps');
  CUSTOM_WPS = [];
  shortcuts = DEF_SHORTS.slice();
  localStorage.setItem('lime_shorts_v', SHORTS_V);
  localStorage.setItem('lime_shorts', JSON.stringify(shortcuts));
  wpIdx = 0;
  localStorage.setItem('lime_wp', 'wp:' + WPS[0]);
  blurVal = 0;
  localStorage.setItem('lime_blur', '0');
  briVal = 100;
  localStorage.setItem('lime_bri', '100');
  engine = 'bing';
  localStorage.setItem('lime_eng', 'bing');
  localStorage.setItem('lime_v', APP_VERSION);
  renderShorts();
  applyWp();
  applyEngine();
  var blurEl = document.getElementById('blurR');
  var briEl = document.getElementById('briR');
  if (blurEl) blurEl.value = 0;
  if (briEl) briEl.value = 100;
  alert('已恢复默认设置');
}

// ============================================================
//  6.5 全局状态
// ============================================================
var APP_VERSION = 3;
if (parseInt(localStorage.getItem('lime_v') || '0') < APP_VERSION) {
  // 版本升级时重置默认设置：搜索引擎默认必应（本地若存过其他引擎则强制归位）
  localStorage.setItem('lime_eng', 'bing');
  localStorage.setItem('lime_v', APP_VERSION);
}
var engine     = localStorage.getItem('lime_eng') || 'bing';
var SHORTS_V = 7;
// 安全解析：localStorage 数据可能被手动篡改或写入截断，JSON.parse 失败时回退默认值，避免整页白屏
function _safeParse(raw, fallback) {
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch (e) { return fallback; }
}
var shortcuts = (function() {
  var sv = localStorage.getItem('lime_shorts_v');
  var raw = sv == SHORTS_V ? localStorage.getItem('lime_shorts') : null;
  var arr = raw ? _safeParse(raw, DEF_SHORTS.slice()) : DEF_SHORTS.slice();
  // 迁移：默认网站的图标以 DEF_SHORTS 为准（本地可能存了旧 SVG 字符串），自定义网站保持用户数据
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < DEF_SHORTS.length; j++) {
      if (arr[i] && DEF_SHORTS[j].u === arr[i].u) { arr[i].i = DEF_SHORTS[j].i; break; }
    }
  }
  return arr;
})();
// 自定义壁纸持久化存储，避免刷新后丢失
var CUSTOM_WPS = _safeParse(localStorage.getItem('lime_custom_wps'), []);
function getAllWps() { return CUSTOM_WPS.concat(WPS); }
// 壁纸偏好：新格式存壁纸 URL（wp: 前缀），旧格式存索引（迁移为 URL，避免列表变动导致错位）
var wpPref = localStorage.getItem('lime_wp') || '';
var wpIdx  = (function() {
  var all = getAllWps();
  var idx = 0;
  if (wpPref.slice(0, 3) === 'wp:') {
    idx = all.indexOf(wpPref.slice(3));
  } else {
    var i = parseInt(wpPref, 10);
    if (!isNaN(i) && all.length) {
      idx = Math.min(Math.max(i, 0), all.length - 1);
      localStorage.setItem('lime_wp', 'wp:' + all[idx]);
    }
  }
  if (idx < 0) idx = 0;
  return idx;
})();
// 解析 localStorage 的数值设置：杜绝 NaN → 传给 CSS blur(NaNpx) 时浏览器变成极端模糊
function _numClamp(raw, fallback, min, max) {
  var n = parseInt(raw, 10);
  if (isNaN(n) || !isFinite(n)) n = fallback;
  return Math.min(Math.max(n, min), max);
}
var blurVal    = _numClamp(localStorage.getItem('lime_blur'),    0,   0, 40);
var briVal     = _numClamp(localStorage.getItem('lime_bri'),   100, 30, 150);

var ctxIdx     = -1;   // 捷径右键索引

var _cb = null;  // 确认弹窗回调

// ============================================================
//  7. HTML 转义工具
// ============================================================
function _esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
// URL 协议白名单：仅允许 http(s) 与协议相对 URL（//），阻止 javascript:/data: 等危险协议注入
function _safeUrl(u) {
  u = String(u || '').trim();
  if (/^https?:\/\//.test(u) || u.indexOf('//') === 0) return u;
  return '#';
}

// ============================================================
//  8. 初始化（页面加载入口）
// ============================================================
function init() {
  applyWp();
  applyEngine();
  renderShorts();
  renderDock();
  updateClock();
  setInterval(updateClock, 1000);

  var blurR = document.getElementById('blurR');
  var briR  = document.getElementById('briR');
  if (blurR) blurR.value = blurVal;
  if (briR)  briR.value  = briVal;
  setBlur(blurVal);
  setBright(briVal);

  // 搜索框聚焦 → 背景模糊
  var sb = document.getElementById('searchBox');
  if (sb) {
    sb.addEventListener('focus', function(){ document.getElementById('wp').classList.add('focus-blur'); });
    sb.addEventListener('blur',  function(){ document.getElementById('wp').classList.remove('focus-blur'); });
    // 搜索建议：输入时下方提示
    sb.addEventListener('input', function(){ showSearchHint(this.value); });
    sb.addEventListener('focus', function(){ showSearchHint(this.value); });
    sb.addEventListener('blur', function(){ setTimeout(hideSearchHint, 150); });
    sb.addEventListener('keydown', function(e){ if (e.key === 'Escape') hideSearchHint(); });
    var shEl = document.getElementById('searchHint');
    if (shEl) shEl.addEventListener('click', onSearchHintClick);
  }

  // 点击空白关闭右键菜单
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#ctxMenu'))    document.getElementById('ctxMenu').classList.remove('show');
  });
  document.addEventListener('contextmenu', function(e) {
    if (!e.target.closest('.short-item') && !e.target.closest('.dock-item')) {
      document.getElementById('ctxMenu').classList.remove('show');
    }
  });
}

// 仅主页有 #clock 时执行 init
if (document.getElementById('clock')) init();

// ============================================================
//  9. 时钟
// ============================================================
function updateClock() {
  var n = new Date();
  var h = n.getHours().toString().padStart(2,'0');
  var m = n.getMinutes().toString().padStart(2,'0');
  var s = n.getSeconds().toString().padStart(2,'0');
  document.getElementById('clock').textContent = h + ':' + m + ':' + s;
  var ds = ['日','一','二','三','四','五','六'];
  document.getElementById('date').textContent =
    n.getFullYear()+'年'+(n.getMonth()+1)+'月'+n.getDate()+'日 周'+ds[n.getDay()];
}

// ============================================================
//  10. 壁纸 & 视觉效果
// ============================================================
function applyWp() {
  var all = getAllWps();
  if (wpIdx >= all.length) wpIdx = all.length - 1;
  if (wpIdx < 0) wpIdx = 0;
  document.getElementById('wp').style.backgroundImage = 'url("' + all[wpIdx] + '")';
  localStorage.setItem('lime_wp', 'wp:' + all[wpIdx]);
  renderWpGrid();
}
function setWp(i) {
  wpIdx = i;
  applyWp();
}
function setCustWp(u) {
  u = (u || '').trim();
  if (!u) return;
  // 自定义壁纸持久化到 localStorage，刷新后不丢失
  CUSTOM_WPS.unshift(u);
  localStorage.setItem('lime_custom_wps', JSON.stringify(CUSTOM_WPS));
  wpIdx = 0;
  applyWp();
  document.getElementById('customWp').value = '';
}
function setBlur(v) {
  blurVal = _numClamp(v, 0, 0, 40);
  document.getElementById('wp').style.setProperty('--wp-blur', blurVal + 'px');
  localStorage.setItem('lime_blur', blurVal);
}
function setBright(v) {
  briVal = _numClamp(v, 100, 30, 150);
  document.getElementById('wp').style.setProperty('--wp-bright', (briVal / 100).toString());
  localStorage.setItem('lime_bri', briVal);
}
function renderWpGrid() {
  var grid = document.getElementById('wpGrid');
  if (!grid) return;
  var all = getAllWps();
  var h = '';
  for (var i = 0; i < all.length; i++) {
    var cls = (i === wpIdx) ? ' active' : '';
    // 转义单引号和反斜杠，避免 URL 中含特殊字符导致 CSS 注入
    var safeUrl = String(all[i]).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    h += '<div class="wp-item' + cls + '" style="background-image:url(\'' + safeUrl + '\')" onclick="setWp(' + i + ')"><div class="chk"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div></div>';
  }
  grid.innerHTML = h;
}

// ============================================================
//  11. 搜索引擎
// ============================================================
function setEngine(name) {
  if (!ENGINES[name]) return;
  engine = name;
  localStorage.setItem('lime_eng', name);
  applyEngine();
  closeEngineDD();
}
function applyEngine() {
  var lbl = document.getElementById('engineDDLabel');
  var panel = document.getElementById('engineDDPanel');
  var info = ENGINES[engine] || ENGINES.bing;
  if (lbl) lbl.textContent = info.s;
  if (panel) {
    var html = '';
    Object.keys(ENGINES).forEach(function (k) {
      var cls = 'engine-dd-opt' + (k === engine ? ' active' : '');
      html += '<div class="' + cls + '" data-k="' + k + '" onclick="setEngine(\'' + k + '\')">' + ENGINES[k].n + '</div>';
    });
    panel.innerHTML = html;
  }
}
function toggleEngineDD(e) {
  if (e) e.stopPropagation();
  var dd = document.getElementById('engineDD');
  if (!dd) return;
  dd.classList.toggle('open');
}
function closeEngineDD() {
  var dd = document.getElementById('engineDD');
  if (dd) dd.classList.remove('open');
}
document.addEventListener('click', function () { closeEngineDD(); });
function doSearch(v) {
  v = v.trim();
  if (!v) return;
  // URL 判断：必须以 http(s):// 开头，或形如 domain.tld/path（不允许空格、不含中文）
  var isUrl = /^https?:\/\//.test(v) || /^[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}(\/[^\s]*)?$/.test(v);
  if (isUrl) {
    window.open(v.indexOf('http') === 0 ? v : 'https://' + v, '_self');
  } else {
    window.open(ENGINES[engine].u + encodeURIComponent(v), '_self');
  }
}

// ============================================================
//  11. 搜索建议（搜索引擎联想建议）
// ============================================================
function showSearchHint(q) {
  var el = document.getElementById('searchHint');
  if (!el) return;
  q = (q || '').trim();
  if (!q) { el.style.display = 'none'; return; }
  // 先渲染本地提示，随后异步拉取搜索引擎联想建议并刷新
  renderSearchHint(q, []);
  if (_sugTimer) clearTimeout(_sugTimer);
  _sugTimer = setTimeout(function () {
    fetchSearchSuggest(q, engine, function (list) { renderSearchHint(q, list); });
  }, 180);
}

function renderSearchHint(q, remote) {
  var el = document.getElementById('searchHint');
  if (!el) return;
  // 输入已变化或已失焦，丢弃过期结果
  if ((document.getElementById('searchBox').value || '').trim() !== q) return;
  var ql = q.toLowerCase();
  var items = [{ t: 'search', n: q }];
  (remote || []).forEach(function (s) {
    if (items.length >= 9) return;
    if (!s || String(s).toLowerCase() === ql) return;
    items.push({ t: 'sug', n: String(s) });
  });
  var h = '';
  items.forEach(function (it) {
    if (it.t === 'search') {
      h += '<div class="sh-item" data-q="' + _esc(it.n) + '"><svg class="sh-ico"><use href="#icon-search"></use></svg><span class="sh-name">搜索 “' + _esc(it.n) + '”</span></div>';
    } else {
      h += '<div class="sh-item" data-q="' + _esc(it.n) + '"><svg class="sh-ico"><use href="#icon-zap"></use></svg><span class="sh-name">' + _esc(it.n) + '</span></div>';
    }
  });
  el.innerHTML = h;
  el.style.display = 'block';
}

// 搜索引擎联想建议接口（JSONP/CORS，境外源被墙时静默失败）
var _sugTimer = null;
var _sugToken = 0;
function fetchSearchSuggest(q, eng, cb) {
  var token = ++_sugToken;
  var done = false;
  function finish(list) {
    if (done || token !== _sugToken) return;
    done = true;
    cb(list || []);
  }
  var cbName = '';
  var url = '';
  if (eng === 'baidu') {
    cbName = '_sug_' + token;
    url = 'https://suggestion.baidu.com/su?wd=' + encodeURIComponent(q) + '&cb=' + cbName;
    window[cbName] = function (d) { finish(d && d.s || []); };
  } else if (eng === 'bing') {
    cbName = '_sug_' + token;
    url = 'https://api.bing.com/osjson.aspx?query=' + encodeURIComponent(q) + '&JsonType=callback&JsonCallback=' + cbName;
    window[cbName] = function (d) { finish((d && d[1]) || []); };
  } else if (eng === 'google') {
    cbName = '_sug_' + token;
    url = 'https://suggestqueries.google.com/complete/search?client=firefox&q=' + encodeURIComponent(q) + '&callback=' + cbName;
    window[cbName] = function (d) { finish((d && d[1]) || []); };
  } else {
    finish([]);
    return;
  }
  var s = document.createElement('script');
  s.src = url;
  s.onload = function () { if (s.parentNode) s.parentNode.removeChild(s); };
  s.onerror = function () { finish([]); if (s.parentNode) s.parentNode.removeChild(s); };
  document.head.appendChild(s);
  setTimeout(function () { finish([]); if (s.parentNode) s.parentNode.removeChild(s); }, 3000);
}

function hideSearchHint() {
  var el = document.getElementById('searchHint');
  if (el) el.style.display = 'none';
}

function onSearchHintClick(e) {
  var el = document.getElementById('searchHint');
  var t = e.target;
  while (t && t !== el && !t.dataset.url && !t.dataset.q) t = t.parentNode;
  if (!t || t === el) return;
  if (t.dataset.url) { window.open(t.dataset.url, '_self'); }
  else if (t.dataset.q) { doSearch(t.dataset.q); }
}

// ============================================================
//  12. 捷径 (Shortcuts)
//     功能: 首页网格渲染 / 右键菜单 / 弹窗增删改 / 设置面板表格
// ============================================================

// 首页捷径网格（含分类标签：预设分类 + 自定义，末尾固定保留"自定义"+加号）
function renderShorts() {
  var grid = document.getElementById('shortGrid');
  if (!grid) return;
  var defCats = ['AI 对话', '常用工具', '影音娱乐'];
  var h = '', lastCat = '';
  for (var i = 0; i < shortcuts.length; i++) {
    var s = shortcuts[i];
    var cat = s.cat || '';
    // 非预设分类的项统一归入"自定义"（用户添加的、或恢复后未匹配预设分类的）
    if (!cat || defCats.indexOf(cat) === -1) cat = '自定义';
    if (cat !== lastCat) {
      // 自定义分类标题行附带管理按钮：导入 / 导出 / 恢复默认（管理桌面捷径）
      h += '<div class="short-cat"><span>' + _esc(cat) + '</span>'
         + (cat === '自定义' ? '<span class="short-cat-ops">'
            + '<button class="btn-sm btn-outline" onclick="exportShorts()">导出</button>'
            + '<button class="btn-sm btn-outline" onclick="document.getElementById(\'importShortFile\').click()">导入</button>'
            + '<button class="btn-sm del" onclick="confirmRestoreDefault()">恢复默认</button>'
            + '</span>' : '')
         + '</div>';
      lastCat = cat;
    }
    h += '<a class="short-item" href="' + _esc(_safeUrl(s.u)) + '" target="_blank" data-idx="' + i + '" oncontextmenu="ctxShort(event,' + i + ')">'
       + '<span class="s-ico">' + renderIcon(s) + '</span>'
       + '<span class="s-lbl">' + _esc(s.n) + '</span></a>';
  }
  // 确保"自定义"分组始终在末尾展示（即使自定义项为空也保留入口）
  if (lastCat !== '自定义') {
    h += '<div class="short-cat"><span>自定义</span><span class="short-cat-ops">'
       + '<button class="btn-sm btn-outline" onclick="exportShorts()">导出</button>'
       + '<button class="btn-sm btn-outline" onclick="document.getElementById(\'importShortFile\').click()">导入</button>'
       + '<button class="btn-sm del" onclick="confirmRestoreDefault()">恢复默认</button>'
       + '</span></div>';
  }
  h += '<div class="short-item add" onclick="shortAddNew()">+</div>';
  grid.innerHTML = h;
}

// ========== 网站弹窗内联添加/编辑（不叠加弹窗） ==========
var _shortEditIdx = -1;

function shortAddNew() {
  _shortEditIdx = -1;
  document.getElementById('shortAddTitle').textContent = '添加网站';
  document.getElementById('shortAddIcon').value = '';
  document.getElementById('shortAddName').value = '';
  document.getElementById('shortAddUrl').value = '';
  shortToggleForm(true);
}

function shortEdit(i) {
  if (i < 0 || i >= shortcuts.length) return;
  _shortEditIdx = i;
  var s = shortcuts[i];
  document.getElementById('shortAddTitle').textContent = '编辑网站';
  document.getElementById('shortAddIcon').value = s.i === 'auto' ? '' : (s.i || '');
  document.getElementById('shortAddName').value = s.n;
  document.getElementById('shortAddUrl').value = s.u;
  shortToggleForm(true);
}

function shortToggleForm(show) {
  document.getElementById('shortGrid').style.display = show ? 'none' : '';
  document.getElementById('shortAddForm').style.display = show ? '' : 'none';
}

function shortAddCancel() {
  shortToggleForm(false);
  _shortEditIdx = -1;
  renderShorts();
}

function shortAddSave() {
  var n = document.getElementById('shortAddName').value.trim();
  var u = document.getElementById('shortAddUrl').value.trim();
  var i = document.getElementById('shortAddIcon').value.trim();
  // 名称、网址必填，缺失时标红提示
  document.getElementById('shortAddName').style.borderColor = n ? '' : '#ef4444';
  document.getElementById('shortAddUrl').style.borderColor  = u ? '' : '#ef4444';
  if (!n || !u) return;
  // 空图标等价于 'auto'，走默认推断和 favicon 加载
  var item = { n: n, u: u, i: i === '' ? 'auto' : i, cat: '自定义' };
  if (_shortEditIdx >= 0) { shortcuts[_shortEditIdx] = item; }
  else { shortcuts.push(item); }
  saveShorts();
  _shortEditIdx = -1;
  shortToggleForm(false);
  renderShorts();
}

// 捷径右键菜单
function ctxShort(e, i) {
  e.preventDefault();
  ctxIdx = i;
  var m = document.getElementById('ctxMenu');
  m.classList.add('show');
  // 先显示才能拿到尺寸；钳制位置避免菜单溢出屏幕右下边缘
  var x = Math.min(e.clientX, window.innerWidth  - m.offsetWidth  - 4);
  var y = Math.min(e.clientY, window.innerHeight - m.offsetHeight - 4);
  m.style.left = Math.max(4, x) + 'px';
  m.style.top  = Math.max(4, y) + 'px';
}
function editShortcut() {
  if (ctxIdx < 0 || ctxIdx >= shortcuts.length) return;
  shortEdit(ctxIdx);
  ctxIdx = -1;
  document.getElementById('ctxMenu').classList.remove('show');
}
function deleteShortcut() {
  if (ctxIdx < 0 || ctxIdx >= shortcuts.length) return;
  var s = shortcuts[ctxIdx];
  confirmAction('确认删除', '确定删除捷径「' + s.n + '」吗？', function() {
    shortcuts.splice(ctxIdx, 1);
    saveShorts();
    ctxIdx = -1;
  });
  document.getElementById('ctxMenu').classList.remove('show');
}

// 捷径持久化
function saveShorts() {
  localStorage.setItem('lime_shorts_v', SHORTS_V);
  localStorage.setItem('lime_shorts', JSON.stringify(shortcuts));
  renderShorts();
}

// ============================================================
//  13. 捷径导入 / 导出（原收藏管理功能已移除，管理入口迁至快捷入口弹窗）
// ============================================================

// 网站快捷入口弹窗：显示全部捷径
function toggleShortPanel() {
  var ov = document.getElementById('shortPanelOverlay');
  if (!ov) return;
  ov.classList.toggle('show');
  if (ov.classList.contains('show')) {
    // 重新打开时回到网格视图
    _shortEditIdx = -1;
    document.getElementById('shortGrid').style.display = '';
    document.getElementById('shortAddForm').style.display = 'none';
    renderShorts();
  }
}

// 捷径 导出（JSON 备份）
function exportShorts() {
  var a = document.createElement('a');
  var blob = new Blob([JSON.stringify(shortcuts, null, 2)], {type:'application/json'});
  var url = URL.createObjectURL(blob);
  a.href = url;
  a.download = 'shortcuts.json';
  a.click();
  setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
}
// 捷径 导入（JSON 备份 → 覆盖；浏览器 HTML 书签 → 追加到自定义）
function importShorts(input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function() {
    try {
      var text = reader.result;
      var fname = (file.name || '').toLowerCase();
      var isJson = fname.endsWith('.json') || text.trim().charAt(0) === '[' || text.trim().charAt(0) === '{';

      if (isJson) {
        // JSON 格式（本站导出的备份）→ 覆盖
        var data = JSON.parse(text);
        if (!Array.isArray(data)) throw new Error();
        shortcuts = data;
        saveShorts();
        alert('导入成功！共 ' + shortcuts.length + ' 个快捷入口');
      } else {
        // HTML 书签文件（浏览器导出的 Netscape Bookmark 格式）→ 追加到自定义
        var doc = new DOMParser().parseFromString(text, 'text/html');
        var links = doc.querySelectorAll('a');
        var imported = [];
        for (var i = 0; i < links.length; i++) {
          var href = links[i].getAttribute('href');
          var name = (links[i].textContent || '').trim();
          if (href && name && href.indexOf('http') === 0) {
            imported.push({ n: name, u: href, i: 'auto', cat: '自定义' });
          }
        }
        if (imported.length === 0) throw new Error();
        shortcuts = shortcuts.concat(imported);
        saveShorts();
        alert('导入成功！新增 ' + imported.length + ' 个，共 ' + shortcuts.length + ' 个快捷入口');
      }
    } catch(e) { alert('导入失败：格式不正确（支持本站导出的 JSON 或浏览器导出的 HTML 书签）'); }
  };
  reader.readAsText(file);
  input.value = '';
}

// ============================================================
//  14. 底部 Dock 栏
// ============================================================
// Dock 内链导航：用 location.href 在当前页打开，避免开新标签
window.goHome = function() { location.href = 'index.html'; };
window.goPage = function() {
  var btn = this && this.getAttribute ? this : event.target;
  while (btn && !btn.getAttribute('data-u')) btn = btn.parentElement;
  if (btn) location.href = btn.getAttribute('data-u');
};

function renderDock() {
  var dock = document.getElementById('bottomDock');
  if (!dock) return;
  var h = '';
  for (var i = 0; i < DOCK_ITEMS.length; i++) {
    var d = DOCK_ITEMS[i];
    var iconHtml = d.i === 'auto' ? renderIcon({n: d.n, u: d.u, i: 'auto'}, 20) : d.i;
    if (d.fn) {
      // fn: 'goPage' 时传 data-u 用于当前页导航；其他 fn 直接调用
      var attr = '';
      if (d.fn === 'goPage') attr = ' data-u="' + d.u + '"';
      else if (d.fn === 'goHome') attr = '';
      h += '<button class="dock-item" onclick="' + (d.fn === 'goPage' ? 'goPage.call(this)' : d.fn + '()') + '"' + attr + '>' + iconHtml + '<span class="dock-lbl">' + d.n + '</span></button>';
    } else {
      h += '<a class="dock-item" href="' + d.u + '" target="_blank">' + iconHtml + '<span class="dock-lbl">' + d.n + '</span></a>';
    }
  }
  dock.innerHTML = h;
}

// ============================================================
//  15. 确认弹窗
// ============================================================
function confirmAction(title, msg, cb) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirmOverlay').classList.add('show');
  _cb = cb;
}
function closeConfirm() {
  document.getElementById('confirmOverlay').classList.remove('show');
  _cb = null;
}
function execConfirm() {
  // 先取出并清空回调再执行，防御双击或回调内再次触发 confirmAction 导致重复执行
  var cb = _cb;
  _cb = null;
  if (cb) cb();
  closeConfirm();
}

// ============================================================
//  16. 设置面板 开关
// ============================================================
function toggleSettings() {
  toggleModal('settings');
}
function toggleModal(id) {
  var modal = document.getElementById(id + 'Modal');
  if (!modal) return;
  modal.classList.toggle('show');
  if (id === 'settings') {
    renderWpGrid();
  }
}

// ============================================================
//  17. 关闭浏览器表单历史
//  Chrome/Edge 对 autocomplete="off" 的表单历史下拉仍然生效，
//  通过给输入框设置随机的 name 属性，让浏览器无法按 name 关联历史记录。
// ============================================================
(function(){
  var ids = ['searchBox', 'editIcon', 'editName', 'editUrl', 'customWp'];
  var rnd = (Math.random() + 1).toString(36).substring(2, 10);
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) {
      el.setAttribute('autocomplete', 'off');
      el.setAttribute('name', 'f' + rnd + '_' + i);
    }
  }
})();
