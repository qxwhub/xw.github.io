// 山海经 · 地图探索 数据（手动维护）
// 结构：places = 地点（小地图坐标 mini[x%,y%] + 主画布场景 finds）
// 每只 find 字段：id 名称 type(兽/鸟/草/木) region 出处 svg 自绘立绘
//   original 原文 baihua 白话 note 形象解读 scene 在主画布里的坐标[x%,y%]
// 试作 Demo：3 个地点，每地点含异兽与异草/异木，验证「小地图导航→主屏场景→散点发现」闭环。
window.SHANHAIJING_MAP = {
  places: [
    {
      id: 'nan', name: '南山经', mini: [50, 82],
      sceneName: '丹穴 · 青丘诸山',
      finds: [
        {
          id: 'fox', name: '九尾狐', type: '兽', region: '青丘之山',
          scene: [30, 56],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<path id="tailN" d="M70 120 C42 112 22 92 16 62 C28 80 46 94 70 102 Z" fill="#e8852b" stroke="#b5530f" stroke-width="1"/>
<circle id="tiptN" cx="16" cy="62" r="4" fill="#fff"/>
</defs>
<use href="#tailN" transform="rotate(-50 70 120)"/><use href="#tailN" transform="rotate(-37 70 120)"/><use href="#tailN" transform="rotate(-24 70 120)"/><use href="#tailN" transform="rotate(-12 70 120)"/><use href="#tailN" transform="rotate(0 70 120)"/><use href="#tailN" transform="rotate(12 70 120)"/><use href="#tailN" transform="rotate(24 70 120)"/><use href="#tailN" transform="rotate(37 70 120)"/><use href="#tailN" transform="rotate(50 70 120)"/>
<use href="#tiptN" transform="rotate(-50 70 120)"/><use href="#tiptN" transform="rotate(-37 70 120)"/><use href="#tiptN" transform="rotate(-24 70 120)"/><use href="#tiptN" transform="rotate(-12 70 120)"/><use href="#tiptN" transform="rotate(0 70 120)"/><use href="#tiptN" transform="rotate(12 70 120)"/><use href="#tiptN" transform="rotate(24 70 120)"/><use href="#tiptN" transform="rotate(37 70 120)"/><use href="#tiptN" transform="rotate(50 70 120)"/>
<ellipse cx="105" cy="125" rx="34" ry="26" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>
<circle cx="140" cy="100" r="22" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>
<path d="M128 84 L124 62 L142 78 Z" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>
<path d="M152 84 L162 62 L160 82 Z" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>
<path d="M132 104 q-8 14 2 22 q12 -2 12 -16 Z" fill="#fff"/>
<circle cx="134" cy="96" r="2.5" fill="#222"/><circle cx="148" cy="96" r="2.5" fill="#222"/><circle cx="159" cy="107" r="2.5" fill="#222"/>
<rect x="92" y="145" width="6" height="18" rx="3" fill="#b5530f"/><rect x="118" y="145" width="6" height="18" rx="3" fill="#b5530f"/>
</svg>`,
          original: '又东三百里，曰青丘之山……有兽焉，其状如狐而九尾，其音如婴儿，能食人，食者不蛊。',
          baihua: '青丘山中有种异兽，模样像狐狸却有九条尾巴，叫声像婴儿啼哭，能吃人；人若吃了它的肉，便不会被妖邪蛊惑。',
          note: '《山海经》最具辨识度的神兽。早期为太平祥瑞之兆，后世渐染媚惑色彩。九尾、婴儿啼、食人而不蛊是最经典特征。'
        },
        {
          id: 'fenghuang', name: '凤凰', type: '鸟', region: '丹穴之山',
          scene: [70, 40],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke-width="6" stroke-linecap="round">
<path d="M80 120 C50 150 40 180 30 195" stroke="#e23b2b"/>
<path d="M84 120 C60 158 56 188 52 200" stroke="#f0a020"/>
<path d="M88 120 C72 160 74 192 76 202" stroke="#2fae6a"/>
<path d="M92 120 C86 158 92 190 98 200" stroke="#3a8fd0"/>
<path d="M96 120 C100 158 110 188 120 198" stroke="#e23b2b"/>
</g>
<g fill="#fff"><circle cx="30" cy="195" r="4"/><circle cx="52" cy="200" r="4"/><circle cx="76" cy="202" r="4"/><circle cx="98" cy="200" r="4"/><circle cx="120" cy="198" r="4"/></g>
<ellipse cx="110" cy="105" rx="22" ry="28" fill="#e8503b" stroke="#a5210f" stroke-width="1.5"/>
<path d="M118 84 C124 70 138 64 146 70 C150 78 146 90 134 92 Z" fill="#f0a020" stroke="#a5210f" stroke-width="1.5"/>
<path d="M146 70 q8 -14 2 -22 q-2 12 -10 18 Z" fill="#e23b2b"/>
<path d="M148 74 L164 72 L148 80 Z" fill="#f5c542"/>
<path d="M100 96 q-30 -6 -44 18 q26 4 44 -6 Z" fill="#3a8fd0" stroke="#1f5f9e" stroke-width="1"/>
<circle cx="138" cy="76" r="2.5" fill="#222"/>
<line x1="108" y1="132" x2="106" y2="150" stroke="#a5210f" stroke-width="3"/>
<line x1="116" y1="132" x2="118" y2="150" stroke="#a5210f" stroke-width="3"/>
</svg>`,
          original: '又东五百里，曰丹穴之山……有鸟焉，其状如鸡，五采而文，名曰凤皇……见则天下安宁。',
          baihua: '丹穴山中有鸟，样子像鸡，身披五彩花纹，名叫凤皇（凤凰）。它饮食顺应自然、自歌自舞，一旦出现，天下便安宁。',
          note: '凤凰是德、义、礼、仁、信俱全的瑞鸟，现世预示天下安宁。出自《南山经·丹穴之山》。'
        },
        {
          id: 'zhuyu', name: '祝余', type: '草', region: '招摇之山',
          scene: [52, 74],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<line x1="100" y1="182" x2="100" y2="92" stroke="#3aa56a" stroke-width="5" stroke-linecap="round"/>
<path d="M100 130 q-42 -10 -56 -38 q36 4 56 28 Z" fill="#2f8f5a" stroke="#1d6b40" stroke-width="1.5"/>
<path d="M100 152 q42 -8 58 -36 q-36 2 -58 26 Z" fill="#3aa56a" stroke="#1d6b40" stroke-width="1.5"/>
<path d="M100 92 q-16 -24 -6 -46 q18 16 6 46 Z" fill="#7fe0a0" stroke="#3aa56a" stroke-width="1.5"/>
<path d="M100 92 q16 -24 6 -46 q-18 16 -6 46 Z" fill="#aef0c4" stroke="#3aa56a" stroke-width="1.5"/>
<circle cx="100" cy="46" r="9" fill="#bd" /><circle cx="100" cy="46" r="9" fill="#aef0c4" stroke="#3aa56a" stroke-width="1.5"/>
</svg>`,
          original: '（招摇之山）有草焉，其状如韭而青华，其名曰祝余，食之不饥。',
          baihua: '招摇山上有种草，样子像韭菜却开青色花，名叫祝余；人吃了它就不会感到饥饿。',
          note: '山海经里典型的"食之有益"类异草，与"不饥""已疥"等效用并列，是上古博物想象的一部分。'
        }
      ]
    },
    {
      id: 'bei', name: '北山经', mini: [50, 18],
      sceneName: '发鸠 · 绣山诸山',
      finds: [
        {
          id: 'jingwei', name: '精卫', type: '鸟', region: '发鸠之山',
          scene: [40, 42],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="100" cy="110" rx="30" ry="22" fill="#2b2b33" stroke="#111" stroke-width="1.5"/>
<circle cx="125" cy="92" r="16" fill="#2b2b33" stroke="#111" stroke-width="1.5"/>
<path d="M118 84 q10 -6 18 2 q-8 6 -18 2 Z" fill="#e8e8ee"/>
<path d="M140 92 L162 90 L140 98 Z" fill="#e8852b"/>
<line x1="160" y1="91" x2="186" y2="82" stroke="#7a4a1e" stroke-width="3" stroke-linecap="round"/>
<path d="M92 104 q20 -10 40 4 q-18 10 -40 -4 Z" fill="#3a3a44"/>
<line x1="96" y1="132" x2="96" y2="152" stroke="#d23b2b" stroke-width="3"/>
<line x1="108" y1="132" x2="108" y2="152" stroke="#d23b2b" stroke-width="3"/>
<circle cx="129" cy="89" r="2.6" fill="#fff"/>
<path d="M72 110 L50 122 L74 124 Z" fill="#2b2b33" stroke="#111" stroke-width="1"/>
</svg>`,
          original: '有鸟焉，其状如乌，文首、白喙、赤足，名曰精卫……常衔西山之木石，以堙于东海。',
          baihua: '发鸠山中有鸟，像乌鸦、头有花纹、白嘴红脚，名叫精卫。它本是炎帝之女女娃，溺于东海后化为鸟，常衔木石填海。',
          note: '精卫填海是中国最著名的悲剧神话之一，象征不屈与执念。出自《北山经·发鸠之山》。'
        },
        {
          id: 'ba', name: '茇', type: '草', region: '绣山',
          scene: [64, 64],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<line x1="100" y1="182" x2="100" y2="96" stroke="#5a9a6a" stroke-width="5" stroke-linecap="round"/>
<path d="M100 136 q-40 -8 -52 -34 q32 2 52 24 Z" fill="#4f8f5e" stroke="#2d6b40" stroke-width="1.5"/>
<path d="M100 156 q40 -6 54 -32 q-32 0 -54 22 Z" fill="#5aa06a" stroke="#2d6b40" stroke-width="1.5"/>
<path d="M100 98 q-14 -22 -4 -42 q16 14 4 42 Z" fill="#eef0e8" stroke="#cfcfc4" stroke-width="1.5"/>
<path d="M100 98 q14 -22 4 -42 q-16 14 -4 42 Z" fill="#ffffff" stroke="#cfcfc4" stroke-width="1.5"/>
<circle cx="100" cy="54" r="10" fill="#f3f3ee" stroke="#cfcfc4" stroke-width="1.5"/>
<circle cx="100" cy="54" r="4" fill="#e0c84a"/>
</svg>`,
          original: '（绣山）有草焉，其状如韭而白华，其名曰茇，食之已疥。',
          baihua: '绣山上有种草，样子像韭菜却开白花，名叫茇；人吃了它能治愈疥疮。',
          note: '又一味"食之愈疾"的异草，体现《山海经》"草木皆药"的博物观。'
        }
      ]
    },
    {
      id: 'zhong', name: '中山经', mini: [50, 50],
      sceneName: '少室之山',
      finds: [
        {
          id: 'dixiu', name: '帝休', type: '木', region: '少室之山',
          scene: [50, 52],
          svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect x="93" y="104" width="13" height="76" rx="4" fill="#7a5230" stroke="#4e3318" stroke-width="1.5"/>
<path d="M100 112 q-30 -10 -42 -34 M100 122 q30 -8 44 -32" stroke="#4e3318" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="60" cy="74" r="16" fill="#3aa56a" stroke="#1d6b40" stroke-width="1.5"/>
<circle cx="100" cy="58" r="21" fill="#46b87a" stroke="#1d6b40" stroke-width="1.5"/>
<circle cx="140" cy="76" r="16" fill="#3aa56a" stroke="#1d6b40" stroke-width="1.5"/>
<g fill="#ffd84a"><circle cx="92" cy="54" r="3"/><circle cx="108" cy="64" r="3"/><circle cx="66" cy="72" r="3"/><circle cx="136" cy="74" r="3"/></g>
<g fill="#222"><circle cx="92" cy="54" r="1.6"/><circle cx="108" cy="64" r="1.6"/><circle cx="66" cy="72" r="1.6"/><circle cx="136" cy="74" r="1.6"/></g>
</svg>`,
          original: '少室之山，其上有木焉，其名曰帝休，叶状如杨，其枝五衢，黄华黑实，服之不怒。',
          baihua: '少室山上有种树，名叫帝休，叶子像杨树，枝条向五方伸展，开黄花、结黑果；人服用了它，便不会发怒。',
          note: '一味"服之不怒"的异木，与祝余、茇同属《山海经》"草木疗心"的想象谱系。'
        }
      ]
    }
  ]
};
