// ==========================================
//  脚本入口：根据页面 body 类名判断执行哪个页面的逻辑
// ==========================================
(function() {
    const body = document.body;

    // ---------- index.html 逻辑 ----------
    if (body.classList.contains('index-page')) {
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

        // 搜索功能
        const engineSelect = document.getElementById('engine-select'),
              searchInput = document.getElementById('search-input'),
              searchBtn = document.getElementById('search-btn');
        if (engineSelect && searchInput && searchBtn) {
            function search() { 
                const kw = searchInput.value.trim(); 
                if(kw) window.open(engineSelect.value + encodeURIComponent(kw), '_blank'); 
            }
            searchBtn.addEventListener('click', search);
            searchInput.addEventListener('keydown', e => e.key === 'Enter' && search());
        }

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

        // 诗词模块
        const poetryLib = [
            { title:'静夜思', author:'唐·李白', content:'床前明月光，疑是地上霜。举头望明月，低头思故乡。' },
            { title:'登鹳雀楼', author:'唐·王之涣', content:'白日依山尽，黄河入海流。欲穷千里目，更上一层楼。' },
            { title:'春晓', author:'唐·孟浩然', content:'春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。' },
            { title:'相思', author:'唐·王维', content:'红豆生南国，春来发几枝。愿君多采撷，此物最相思。' },
            { title:'江雪', author:'唐·柳宗元', content:'千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。' },
            { title:'梅花', author:'宋·王安石', content:'墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。' },
            { title:'出塞', author:'唐·王昌龄', content:'秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。' }
        ];
        const poetryContent = document.getElementById('poetryContent');
        function updatePoetry(){ 
            if(!poetryContent) return;
            let idx = Math.floor(Math.random() * poetryLib.length), p = poetryLib[idx]; 
            poetryContent.innerHTML = `<div class="poetry-title">${p.title}</div><div class="poetry-author">${p.author}</div><div class="poetry-text">${p.content}</div>`; 
        }
        document.getElementById('refresh-poetry')?.addEventListener('click', updatePoetry);
        document.getElementById('setHomepage')?.addEventListener('click', () => alert('请在浏览器设置中将当前页设为主页'));

        // 初始化
        loadCustomLinks();
        updatePoetry();
        setInterval(updatePoetry, 3600000);
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