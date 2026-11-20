/* 发现页文章数据（手动维护） */
window.BLOG = {
  "posts": [
    {
      "id": 1,
      "title": "CadPanel AutoCAD 增强插件",
      "date": "2026-08-16",
      "tag": "项目",
      "summary": "一套开源的 AutoCAD 效率工具箱：插件一键加载、DWG 图库、项目文件管理、AI 外部连接，另附批量打印、房间区域识别子插件。",
      "content": "<div class=\"blog-res\"><div class=\"res-card\"><div class=\"res-head\"><span class=\"res-ico ico-cad\">🛠️</span><div><b>CadPanel</b><em>AutoCAD 增强插件 · ZIP 27.1 MB</em></div></div><p>一套开源的 AutoCAD 效率工具箱：以可停靠的功能面板统一管理「插件一键加载、DWG 图库、项目文件管理、AI 外部连接」四大能力，另附批量打印、房间区域识别子插件。输入命令 <b>PCAD</b> 打开功能面板，<b>HOMECAD</b> 打开在线帮助。</p><ul><li><b>插件管理</b>：自动扫描插件目录，识别 lsp / vlx / dll / scr / fas / arx / exe / bat / ps1 等类型，自动解析出命令名（如 Z 轴归零→FLT、贱人工具箱→Y），单击磁贴即可加载执行，免去反复 NETLOAD</li><li><b>DWG 图库</b>：图块自动生成缩略图（两级缓存，重启秒出），拖拽即可插入当前图纸、双击直接打开；支持关键字搜索、重命名，还能把图纸中选中的任意图元一键拾取存为图库文件</li><li><b>文件管理</b>：项目常用文件 / 文件夹快捷方式一键即开，也可浏览任意目录；按扩展名彩色图标区分，删除走回收站可还原，支持剪贴板粘贴</li><li><b>AI 驱动 CAD（MCP）</b>：通过标准 MCP 协议让 AI 助手直接操作 AutoCAD——绘图、标注、图块、图层、查询测量、批量打印等 176 项工具；会话令牌、权限分类、危险关键字拦截等多层安全防护</li><li><b>批量打印（BPPDF）</b>：智能识别图框、自动匹配纸张、勾选与排序图框、合并输出 PDF；支持命令行模式，供自动化脚本调用</li><li><b>房间区域识别（ROOMREGION）</b>：点选一根完成面线段，自动匹配同图层 / 同颜色 / 同线型线段并生成封闭区域轮廓，原图零修改</li><li><b>内置工具</b>：Z 轴归零、参照路径批量修复、贱人工具箱、源泉设计工具箱（含数百个室内设计图块、SHX 字体、填充图案、图层预设与安装程序）</li><li>兼容 AutoCAD 2022–2026，Windows 10 / 11；三层异常兜底、自动写日志；插件与图库目录放入文件即自动出现在面板</li></ul><a class=\"dl-btn\" href=\"../Resources/CadPanelPublish.zip\" rel=\"noopener\">下载 CadPanel</a></div></div>",
      "top": 1
    },
    {
      "title": "工具集上线：多媒体播放中心",
      "date": "2026-08-14",
      "tag": "更新",
      "summary": "本站新增多媒体工具集：在线电视 + 本地播放二合一播放中心、本地/在线视频播放、音频提取、格式转换等，全部在浏览器内完成。",
      "content": "<p>本站首页新增「多媒体」工具集入口，包括：</p><ul><li>播放中心：左侧电视频道列表 / 本地文件二合一，右侧同一画面播放，顶部可粘贴在线链接（mp4 · mp3 · m3u8 直播 · flv · dash）</li><li>本地播放器：复古电视皮肤，播放本地视频 / 音频，也支持粘贴在线地址</li><li>音频提取：视频转音频、在线音频下载</li><li>录音 / 录屏：浏览器直接录制</li><li>格式转换：常见音视频格式互转</li></ul><p>所有处理均在本地浏览器完成，不上传服务器。</p>",
      "id": 2
    },
    {
      "title": "关于本站",
      "date": "2026-08-10",
      "tag": "随笔",
      "summary": "这是一个个人导航与工具站，汇集日常高频使用的工具与链接，方便随时取用。",
      "content": "<p>本站是一个轻量个人站点，包含：</p><ul><li>导航：常用网站入口，可自由管理</li><li>发现：作者开发的软件与更新日志</li><li>工具箱：文件传输、多媒体播放、图片处理、格式转换等在线工具</li></ul><p>站点部署在阿里云香港，无账号体系，数据默认保存在本地浏览器。</p>",
      "id": 3
    },
    {
      "id": 4,
      "title": "GitHub 代码仓库",
      "date": "2026-08-16",
      "tag": "项目",
      "summary": "本站源码已开源到 GitHub，包含完整代码、自动同步配置，可在线访问。",
      "content": "<div class=\"blog-res\"><div class=\"res-card\"><div class=\"res-head\"><span class=\"res-ico\">📦</span><div><b>酸柠檬导航站源码</b><em>GitHub 公开仓库 · 完整代码</em></div></div><p>本站的完整源码已托管到 GitHub，包含：</p><ul><li><b>首页导航</b>：快捷入口管理、分类筛选、右键菜单</li><li><b>发现页</b>：个人博客、文章卡片流、后台管理</li><li><b>播放中心</b>：在线电视、本地播放、ffmpeg 转码、音频提取</li><li><b>文件传输</b>：P2P 传输、线上存取、二维码配对</li><li><b>音乐解密</b>：ncm/kgm/vpr 格式解密播放</li><li><b>GitHub Actions</b>：每天自动同步博客文章</li></ul><p><b>技术栈</b>：纯前端（HTML/CSS/JS）+ Node.js 后台 + nginx 反代</p><p><b>在线访问</b>：<a href=\"https://qxwhub.github.io/xw.github.io/index.html\" target=\"_blank\" rel=\"noopener\">qxwhub.github.io/xw.github.io</a></p><p><b>仓库地址</b>：<a href=\"https://github.com/qxwhub/xw.github.io\" target=\"_blank\" rel=\"noopener\">qxwhub/xw.github.io</a></p></div></div>"
    }
  ]
};
