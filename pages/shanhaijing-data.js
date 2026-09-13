// 山海经 · 异兽图鉴 数据（手动维护，仿 blog-data.js）
// 试作 Demo：3 只代表性异兽，原文取自权威本，白话/解读为整理说明。
// 字段：id 名称拼音 region 出处山系 pos 地图坐标[x,y,z] original 原文 baihua 白话 note 形象解读 svg 自绘立绘
window.SHANHAIJING = {
  title: '山海经 · 异兽图鉴',
  subtitle: '试作 Demo · 点发光图腾查看异兽',
  creatures: [
    {
      id: 'jiuweihu',
      name: '九尾狐',
      pinyin: 'jiǔ wěi hú',
      region: '南山经 · 青丘之山',
      pos: [-22, 0, -6],
      original: '又东三百里，曰青丘之山，其阳多玉，其阴多青䨼。有兽焉，其状如狐而九尾，其音如婴儿，能食人，食者不蛊。',
      baihua: '再向东三百里是青丘山，南坡多玉，北坡多青䨼（一种石青）。山中有种异兽，模样像狐狸却有九条尾巴，叫声像婴儿啼哭，能吃人；人若吃了它的肉，便不会被妖邪蛊惑。',
      note: '《山海经》最具辨识度的神兽之一。早期是太平祥瑞之兆，后世文学与志怪渐将其染上媚惑色彩。九尾、婴儿啼、食人而不蛊，是它最经典的几组特征。',
      svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\
<defs>\
<path id="tail" d="M70 120 C42 112 22 92 16 62 C28 80 46 94 70 102 Z" fill="#e8852b" stroke="#b5530f" stroke-width="1"/>\
<circle id="tipt" cx="16" cy="62" r="4" fill="#fff"/>\
</defs>\
<use href="#tail" transform="rotate(-50 70 120)"/><use href="#tail" transform="rotate(-37 70 120)"/><use href="#tail" transform="rotate(-24 70 120)"/><use href="#tail" transform="rotate(-12 70 120)"/><use href="#tail" transform="rotate(0 70 120)"/><use href="#tail" transform="rotate(12 70 120)"/><use href="#tail" transform="rotate(24 70 120)"/><use href="#tail" transform="rotate(37 70 120)"/><use href="#tail" transform="rotate(50 70 120)"/>\
<use href="#tipt" transform="rotate(-50 70 120)"/><use href="#tipt" transform="rotate(-37 70 120)"/><use href="#tipt" transform="rotate(-24 70 120)"/><use href="#tipt" transform="rotate(-12 70 120)"/><use href="#tipt" transform="rotate(0 70 120)"/><use href="#tipt" transform="rotate(12 70 120)"/><use href="#tipt" transform="rotate(24 70 120)"/><use href="#tipt" transform="rotate(37 70 120)"/><use href="#tipt" transform="rotate(50 70 120)"/>\
<ellipse cx="105" cy="125" rx="34" ry="26" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>\
<circle cx="140" cy="100" r="22" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>\
<path d="M128 84 L124 62 L142 78 Z" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>\
<path d="M152 84 L162 62 L160 82 Z" fill="#f0913a" stroke="#b5530f" stroke-width="1.5"/>\
<path d="M132 104 q-8 14 2 22 q12 -2 12 -16 Z" fill="#fff"/>\
<circle cx="134" cy="96" r="2.5" fill="#222"/><circle cx="148" cy="96" r="2.5" fill="#222"/>\
<circle cx="159" cy="107" r="2.5" fill="#222"/>\
<rect x="92" y="145" width="6" height="18" rx="3" fill="#b5530f"/><rect x="118" y="145" width="6" height="18" rx="3" fill="#b5530f"/>\
</svg>'
    },
    {
      id: 'jingwei',
      name: '精卫',
      pinyin: 'jīng wèi',
      region: '北山经 · 发鸠之山',
      pos: [18, 0, 12],
      original: '有鸟焉，其状如乌，文首、白喙、赤足，名曰精卫，其鸣自詨。是炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。',
      baihua: '山中有种鸟，样子像乌鸦，头有花纹、白嘴、红脚，名叫精卫，叫声像在呼唤自己的名字。它本是炎帝的小女儿女娃；女娃在东海游玩淹死，化作精卫鸟，常常衔着西山的树枝石子，想填平东海。',
      note: '精卫填海是中国最著名的悲剧神话之一，象征不屈与执念。出自《北山经·发鸠之山》，与女娃溺亡的传说相连。',
      svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\
<ellipse cx="100" cy="110" rx="30" ry="22" fill="#2b2b33" stroke="#111" stroke-width="1.5"/>\
<circle cx="125" cy="92" r="16" fill="#2b2b33" stroke="#111" stroke-width="1.5"/>\
<path d="M118 84 q10 -6 18 2 q-8 6 -18 2 Z" fill="#e8e8ee"/>\
<path d="M140 92 L162 90 L140 98 Z" fill="#e8852b"/>\
<line x1="160" y1="91" x2="186" y2="82" stroke="#7a4a1e" stroke-width="3" stroke-linecap="round"/>\
<path d="M92 104 q20 -10 40 4 q-18 10 -40 -4 Z" fill="#3a3a44"/>\
<line x1="96" y1="132" x2="96" y2="152" stroke="#d23b2b" stroke-width="3"/>\
<line x1="108" y1="132" x2="108" y2="152" stroke="#d23b2b" stroke-width="3"/>\
<circle cx="129" cy="89" r="2.6" fill="#fff"/>\
<path d="M72 110 L50 122 L74 124 Z" fill="#2b2b33" stroke="#111" stroke-width="1"/>\
</svg>'
    },
    {
      id: 'fenghuang',
      name: '凤凰',
      pinyin: 'fèng huáng',
      region: '南山经 · 丹穴之山',
      pos: [4, 0, -22],
      original: '又东五百里，曰丹穴之山……有鸟焉，其状如鸡，五采而文，名曰凤皇，首文曰德，翼文曰义，背文曰礼，膺文曰仁，腹文曰信。是鸟也，饮食自然，自歌自舞，见则天下安宁。',
      baihua: '再向东五百里是丹穴山……山中有鸟，样子像鸡，身披五彩花纹，名叫凤皇（凤凰）。它头上的花纹是“德”，翅上是“义”，背上是“礼”，胸上是“仁”，腹上是“信”。这鸟饮食顺应自然，自歌自舞，一旦出现，天下便安宁。',
      note: '凤凰在《山海经》中是德、义、礼、仁、信俱全的瑞鸟，现世预示天下安宁，与后世“百鸟朝凤”的祥瑞形象一脉相承。出自《南山经·丹穴之山》。',
      svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">\
<g fill="none" stroke-width="6" stroke-linecap="round">\
<path d="M80 120 C50 150 40 180 30 195" stroke="#e23b2b"/>\
<path d="M84 120 C60 158 56 188 52 200" stroke="#f0a020"/>\
<path d="M88 120 C72 160 74 192 76 202" stroke="#2fae6a"/>\
<path d="M92 120 C86 158 92 190 98 200" stroke="#3a8fd0"/>\
<path d="M96 120 C100 158 110 188 120 198" stroke="#e23b2b"/>\
</g>\
<g fill="#fff"><circle cx="30" cy="195" r="4"/><circle cx="52" cy="200" r="4"/><circle cx="76" cy="202" r="4"/><circle cx="98" cy="200" r="4"/><circle cx="120" cy="198" r="4"/></g>\
<ellipse cx="110" cy="105" rx="22" ry="28" fill="#e8503b" stroke="#a5210f" stroke-width="1.5"/>\
<path d="M118 84 C124 70 138 64 146 70 C150 78 146 90 134 92 Z" fill="#f0a020" stroke="#a5210f" stroke-width="1.5"/>\
<path d="M146 70 q8 -14 2 -22 q-2 12 -10 18 Z" fill="#e23b2b"/>\
<path d="M148 74 L164 72 L148 80 Z" fill="#f5c542"/>\
<path d="M100 96 q-30 -6 -44 18 q26 4 44 -6 Z" fill="#3a8fd0" stroke="#1f5f9e" stroke-width="1"/>\
<circle cx="138" cy="76" r="2.5" fill="#222"/>\
<line x1="108" y1="132" x2="106" y2="150" stroke="#a5210f" stroke-width="3"/>\
<line x1="116" y1="132" x2="118" y2="150" stroke="#a5210f" stroke-width="3"/>\
</svg>'
    }
  ]
};
