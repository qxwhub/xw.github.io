// ==========================================
//  脚本入口：根据页面 body 类名判断执行哪个页面的逻辑
// ==========================================
(function() {
    const body = document.body;

    // ---------- index.html 逻辑 ----------
    if (body.classList.contains('index-page')) {
        // ===== 宇宙星空粒子背景（多主题 + 鼠标交互） =====
        (function() {
            var canvas = document.getElementById('starCanvas');
            if (!canvas) return;
            var ctx = canvas.getContext('2d');
            var w, h, mouseX = -999, mouseY = -999, mouseTargetX = -999, mouseTargetY = -999;
            var stars = [], shootingStars = [], mouseTrail = [];
            var themeIdx = parseInt(localStorage.getItem('starTheme') || '0');

            var themes = [
                { name: '深空', bg: '#0a1030', starColor: [255,255,255], glowColor: [130,160,255], nebula: [[20,35,100,0.3],[10,18,60,0.18],[4,6,20,0]], mouseGlow: [80,120,255,0.25] },
                { name: '极光', bg: '#0a1830', starColor: [180,255,220], glowColor: [80,240,180], nebula: [[15,45,70,0.3],[8,25,50,0.18],[2,8,20,0]], mouseGlow: [50,200,160,0.25] },
                { name: '星云', bg: '#100a25', starColor: [255,200,255], glowColor: [200,120,255], nebula: [[45,20,60,0.3],[25,10,35,0.18],[8,3,12,0]], mouseGlow: [180,100,240,0.25] },
                { name: '晨曦', bg: '#1a0f15', starColor: [255,220,180], glowColor: [255,160,80], nebula: [[50,30,25,0.28],[25,16,14,0.16],[8,5,4,0]], mouseGlow: [255,140,60,0.25] },
                { name: '幻境', bg: '#0c1530', starColor: [180,220,255], glowColor: [100,180,255], nebula: [[20,35,80,0.3],[10,20,50,0.18],[3,6,16,0]], mouseGlow: [70,150,240,0.25] }
            ];

            var t = themes[themeIdx];

            function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; initStars(); }
            resize();
            window.addEventListener('resize', resize);

            function initStars() {
                stars = [];
                var count = Math.floor(w * h / 4000);
                for (var i = 0; i < count; i++) {
                    stars.push({
                        x: Math.random() * w, y: Math.random() * h,
                        ox: Math.random() * w, oy: Math.random() * h,
                        r: Math.random() * 2.0 + 0.2,
                        twinkleSpeed: Math.random() * 0.03 + 0.003,
                        twinkleOffset: Math.random() * Math.PI * 2,
                        alpha: Math.random() * 0.6 + 0.4,
                        hue: Math.random() < 0.12 ? 1 : 0
                    });
                }
            }

            function addShootingStar() {
                if (shootingStars.length < 3 && Math.random() < 0.01) {
                    var c = t.starColor;
                    shootingStars.push({
                        x: Math.random() * w * 0.7, y: Math.random() * h * 0.4,
                        len: Math.random() * 100 + 60, speed: Math.random() * 10 + 6,
                        angle: Math.PI / 4 + Math.random() * 0.3, life: 1,
                        r: c[0], g: c[1], b: c[2]
                    });
                }
            }

            // 鼠标跟踪
            canvas.addEventListener('mousemove', function(e) {
                mouseTargetX = e.clientX;
                mouseTargetY = e.clientY;
                if (mouseX === -999) { mouseX = mouseTargetX; mouseY = mouseTargetY; }
            });
            canvas.addEventListener('mouseleave', function() {
                mouseTargetX = -999; mouseTargetY = -999;
            });

            function draw() {
                ctx.fillStyle = t.bg;
                ctx.fillRect(0, 0, w, h);

                // 星云
                for (var n = 0; n < 3; n++) {
                    var neb = ctx.createRadialGradient(
                        w * (0.2 + n * 0.25), h * (0.25 + n * 0.15), 0,
                        w * 0.5, h * 0.5, Math.max(w, h) * 0.8
                    );
                    neb.addColorStop(0, 'rgba(' + t.nebula[0][0] + ',' + t.nebula[0][1] + ',' + t.nebula[0][2] + ',' + t.nebula[0][3] + ')');
                    neb.addColorStop(0.4, 'rgba(' + t.nebula[1][0] + ',' + t.nebula[1][1] + ',' + t.nebula[1][2] + ',' + t.nebula[1][3] + ')');
                    neb.addColorStop(1, 'rgba(' + t.nebula[2][0] + ',' + t.nebula[2][1] + ',' + t.nebula[2][2] + ',' + t.nebula[2][3] + ')');
                    ctx.fillStyle = neb;
                    ctx.fillRect(0, 0, w, h);
                }

                // 鼠标平滑移动
                if (mouseTargetX !== -999) {
                    mouseX += (mouseTargetX - mouseX) * 0.08;
                    mouseY += (mouseTargetY - mouseY) * 0.08;
                }

                // 鼠标光晕
                if (mouseX > 0) {
                    var mg = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
                    mg.addColorStop(0, 'rgba(' + t.mouseGlow[0] + ',' + t.mouseGlow[1] + ',' + t.mouseGlow[2] + ',' + t.mouseGlow[3] + ')');
                    mg.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.fillStyle = mg;
                    ctx.fillRect(mouseX - 200, mouseY - 200, 400, 400);
                }

                // 鼠标轨迹粒子
                if (mouseX > 0) {
                    mouseTrail.push({ x: mouseX, y: mouseY, life: 1, r: Math.random() * 1.5 + 0.5 });
                    if (mouseTrail.length > 40) mouseTrail.shift();
                }
                for (var mt = mouseTrail.length - 1; mt >= 0; mt--) {
                    var p = mouseTrail[mt];
                    p.life -= 0.025;
                    if (p.life <= 0) { mouseTrail.splice(mt, 1); continue; }
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(' + t.starColor[0] + ',' + t.starColor[1] + ',' + t.starColor[2] + ',' + (p.life * 0.5) + ')';
                    ctx.fill();
                }

                // 星星（受鼠标吸引）
                var now = Date.now() * 0.001;
                for (var i = 0; i < stars.length; i++) {
                    var s = stars[i];
                    // 鼠标吸引力
                    if (mouseX > 0) {
                        var dx = mouseX - s.x;
                        var dy = mouseY - s.y;
                        var dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 180) {
                            var force = (1 - dist / 180) * 0.015;
                            s.x += dx * force;
                            s.y += dy * force;
                        } else {
                            s.x += (s.ox - s.x) * 0.003;
                            s.y += (s.oy - s.y) * 0.003;
                        }
                    } else {
                        s.x += (s.ox - s.x) * 0.003;
                        s.y += (s.oy - s.y) * 0.003;
                    }
                    // 边界
                    if (s.x < -20) s.x = w + 20; if (s.x > w + 20) s.x = -20;
                    if (s.y < -20) s.y = h + 20; if (s.y > h + 20) s.y = -20;

                    var alpha = s.alpha * (0.5 + 0.5 * Math.sin(now * s.twinkleSpeed * 50 + s.twinkleOffset));
                    // 靠近鼠标时更亮
                    if (mouseX > 0) {
                        var mdx = mouseX - s.x, mdy = mouseY - s.y;
                        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                        if (mdist < 150) alpha = Math.min(1, alpha + (1 - mdist / 150) * 0.5);
                    }
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                    var sc = t.starColor;
                    if (s.hue) {
                        var hc = Math.sin(now * 1.5 + i) * 60 + 30;
                        sc = [255, 200 + hc * 0.5, 180 + hc];
                    }
                    ctx.fillStyle = 'rgba(' + sc[0] + ',' + sc[1] + ',' + sc[2] + ',' + alpha + ')';
                    ctx.fill();
                    if (s.r > 0.9 && alpha > 0.6) {
                        ctx.beginPath();
                        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(' + t.glowColor[0] + ',' + t.glowColor[1] + ',' + t.glowColor[2] + ',' + (alpha * 0.12) + ')';
                        ctx.fill();
                    }
                }

                // 流星
                for (var j = shootingStars.length - 1; j >= 0; j--) {
                    var ss = shootingStars[j];
                    ss.x += Math.cos(ss.angle) * ss.speed;
                    ss.y += Math.sin(ss.angle) * ss.speed;
                    ss.life -= 0.012;
                    if (ss.life <= 0 || ss.x > w + 200 || ss.y > h + 200) { shootingStars.splice(j, 1); continue; }
                    var tailX = ss.x - Math.cos(ss.angle) * ss.len;
                    var tailY = ss.y - Math.sin(ss.angle) * ss.len;
                    var g = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
                    g.addColorStop(0, 'rgba(' + ss.r + ',' + ss.g + ',' + ss.b + ',0)');
                    g.addColorStop(1, 'rgba(' + ss.r + ',' + ss.g + ',' + ss.b + ',' + ss.life + ')');
                    ctx.beginPath();
                    ctx.moveTo(tailX, tailY);
                    ctx.lineTo(ss.x, ss.y);
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.8;
                    ctx.stroke();
                }

                addShootingStar();
                requestAnimationFrame(draw);
            }
            draw();

            // 背景切换按钮
            var themeBtn = document.getElementById('themeSwitchBtn');
            if (themeBtn) {
                themeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    themeIdx = (themeIdx + 1) % themes.length;
                    t = themes[themeIdx];
                    localStorage.setItem('starTheme', themeIdx);
                    initStars();
                    shootingStars = [];
                });
            }
        })();

        // 侧边栏开关
        const sidebarToggle = document.getElementById('sidebarToggle'),
              sidebar = document.getElementById('sidebar'),
              sidebarClose = document.getElementById('sidebarClose'),
              mask = document.getElementById('mask');
        if (sidebarToggle && sidebar && sidebarClose && mask) {
            function openSidebar() { sidebar.classList.add('open'); mask.classList.add('show'); sidebarToggle.classList.add('hide'); }
            function closeSidebar() { sidebar.classList.remove('open'); mask.classList.remove('show'); sidebarToggle.classList.remove('hide'); }
            sidebarToggle.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
            sidebarClose.addEventListener('click', closeSidebar);
            mask.addEventListener('click', closeSidebar);
        }

        // 搜索功能 - 引擎切换
        const engines = [
            { name: '必应', url: 'https://www.bing.com/search?q=' },
            { name: '百度', url: 'https://www.baidu.com/s?wd=' },
            { name: '谷歌', url: 'https://www.google.com/search?q=' },
            { name: '搜狗', url: 'https://www.sogou.com/web?query=' }
        ];
        let currentEngineIndex = 0;
        const searchInput = document.getElementById('search-input'),
              searchBtn = document.getElementById('search-btn'),
              engineIndicator = document.getElementById('engineIndicator'),
              engineName = document.querySelector('.engine-name');

        function search() { 
            const kw = searchInput.value.trim(); 
            if(kw) window.open(engines[currentEngineIndex].url + encodeURIComponent(kw), '_blank'); 
        }
        if (engineIndicator && engineName) {
            engineIndicator.addEventListener('click', () => {
                currentEngineIndex = (currentEngineIndex + 1) % engines.length;
                engineName.textContent = engines[currentEngineIndex].name;
            });
        }
        searchBtn?.addEventListener('click', search);
        searchInput?.addEventListener('keydown', e => e.key === 'Enter' && search());

        // 自定义链接折叠
        const customToggleBtn = document.getElementById('customToggleBtn'),
              customAddForm = document.getElementById('customAddForm');
        if (customToggleBtn && customAddForm) {
            customToggleBtn.addEventListener('click', () => { 
                customAddForm.classList.toggle('show'); 
                customToggleBtn.classList.toggle('rotate'); 
            });
        }

        // 自定义链接管理
        function loadCustomLinks() {
            let links = JSON.parse(localStorage.getItem('customLinks') || '[]');
            const container = document.getElementById('custom-links-container');
            if (!container) return;
            container.innerHTML = '';
            links.forEach((link, idx) => {
                let wrap = document.createElement('div');
                wrap.className = 'custom-link-wrapper';
                let a = document.createElement('a');
                a.href = link.url;
                a.className = 'link-item';
                a.target = '_blank';
                a.textContent = link.name;
                let del = document.createElement('button');
                del.className = 'custom-link-delete';
                del.textContent = '✕';
                del.dataset.index = idx;
                del.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(confirm(`确定删除【${link.name}】吗？`)) {
                        let arr = JSON.parse(localStorage.getItem('customLinks') || '[]');
                        arr.splice(idx, 1);
                        localStorage.setItem('customLinks', JSON.stringify(arr));
                        loadCustomLinks();
                    }
                });
                wrap.appendChild(a);
                wrap.appendChild(del);
                container.appendChild(wrap);
            });
        }

        function saveCustomLink(name, url) {
            let links = JSON.parse(localStorage.getItem('customLinks') || '[]');
            links.push({ name, url });
            localStorage.setItem('customLinks', JSON.stringify(links));
            loadCustomLinks();
        }

        const customAddBtn = document.getElementById('custom-add-btn');
        if (customAddBtn) {
            customAddBtn.addEventListener('click', () => {
                let name = document.getElementById('custom-name').value.trim();
                let url = document.getElementById('custom-url').value.trim();
                if(name && url) {
                    if(!url.startsWith('http://') && !url.startsWith('https://')) alert('链接需以 http:// 或 https:// 开头');
                    else { 
                        saveCustomLink(name, url); 
                        document.getElementById('custom-name').value = ''; 
                        document.getElementById('custom-url').value = ''; 
                    }
                } else alert('请填写网站名称和链接');
            });
        }

        // 导出/导入
        document.getElementById('customExportBtn')?.addEventListener('click', () => {
            let links = JSON.parse(localStorage.getItem('customLinks') || '[]');
            if(!links.length) return alert('暂无链接可导出');
            let dataStr = JSON.stringify(links, null, 2),
                blob = new Blob([dataStr], {type: 'application/json'}),
                url = URL.createObjectURL(blob),
                a = document.createElement('a');
            a.href = url; a.download = `custom_links_${Date.now()}.json`; a.click(); URL.revokeObjectURL(url);
        });
        document.getElementById('customImportBtn')?.addEventListener('click', () => document.getElementById('import-file').click());
        document.getElementById('import-file')?.addEventListener('change', e => {
            let file = e.target.files[0]; if(!file) return;
            let reader = new FileReader();
            reader.onload = ev => {
                try {
                    let imported = JSON.parse(ev.target.result);
                    if(!Array.isArray(imported)) throw new Error('格式错误');
                    let mode = document.querySelector('input[name="import-mode"]:checked')?.value;
                    let current = mode === 'append' ? JSON.parse(localStorage.getItem('customLinks') || '[]') : [];
                    let merged = [...current, ...imported];
                    localStorage.setItem('customLinks', JSON.stringify(merged));
                    loadCustomLinks();
                    alert(`导入成功 (${imported.length} 条)`);
                } catch(err) { alert('文件无效，请选择正确的 JSON 文件'); }
                finally { document.getElementById('import-file').value = ''; }
            };
            reader.readAsText(file);
        });

        // 初始化
        loadCustomLinks();
        document.getElementById('setHomepage')?.addEventListener('click', () => alert('请在浏览器设置中将当前页设为主页'));

        // 时钟更新
        const clockTime = document.getElementById('clockTime');
        const clockDate = document.getElementById('clockDate');
        function updateClock() {
            if (!clockTime || !clockDate) return;
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            clockTime.textContent = h + ':' + m;
            const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            clockDate.textContent = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日 ' + weekdays[now.getDay()];
        }
        updateClock();
        setInterval(updateClock, 10000);

    }

    // ---------- xz01.html 逻辑 ----------
    if (body.classList.contains('xz-page')) {
        const cardGrid = document.getElementById('cardGrid');
        
        // 下载按钮事件委托（支持后续复制的卡片）
        if (cardGrid) {
            cardGrid.addEventListener('click', function(e) {
                const btn = e.target.closest('.xz-download-btn');
                if (!btn) return;
                e.preventDefault();
                const fileUrl = btn.getAttribute('data-fileurl');
                const isOnline = btn.getAttribute('data-is-online') === 'true';
                if (fileUrl) {
                    if (isOnline || fileUrl.includes('pan.baidu.com')) {
                        window.open(fileUrl, '_blank');
                    } else {
                        const a = document.createElement('a');
                        a.href = fileUrl;
                        a.download = btn.getAttribute('data-filename') || '';
                        a.click();
                    }
                } else {
                    alert('链接缺失');
                }
            });
        }

        // 搜索功能：实时过滤卡片（支持后续新增卡片）
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        function filterCards(keyword) {
            const k = keyword.trim().toLowerCase();
            // 动态获取当前所有卡片
            const allCards = document.querySelectorAll('.xz-card');
            allCards.forEach(card => {
                const title = (card.querySelector('.xz-card-title')?.textContent || '').toLowerCase();
                const desc = (card.querySelector('.xz-card-desc')?.textContent || '').toLowerCase();
                if (k === '' || title.includes(k) || desc.includes(k)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        if (searchInput) {
            // 输入时实时搜索
            searchInput.addEventListener('input', () => filterCards(searchInput.value));
            // 按回车搜索
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    filterCards(searchInput.value);
                }
            });
        }
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (searchInput) filterCards(searchInput.value);
            });
        }
    }

    // guanyu.html 无脚本逻辑
})();
