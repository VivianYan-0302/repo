// ===== 智慧問答題庫 =====
// body 中的英文術語請用 <span class="en-term">...</span> 標記，其餘全用中文說明
const QA_BANK = [

  // ==================== 英文 ====================
  {
    subjectKey: 'english', subject: '🔤 英文',
    title: '現在完成式怎麼用？',
    keywords: ['現在完成式','完成式','have','has','pp','過去分詞'],
    body: `現在完成式（<span class="en-term">Present Perfect Tense</span>）用來表示「在過去某個時間發生、但與現在仍有關聯」的動作或狀態。<br/><br/>
<strong>句型結構：</strong><br/>
主詞 ＋ <span class="en-term">have / has</span> ＋ 過去分詞（<span class="en-term">past participle</span>）<br/><br/>
<strong>常見使用情境：</strong><br/>
① 動作已完成，結果影響現在（例：我已經吃飽了）<br/>
② 從過去延續到現在的狀態（搭配 <span class="en-term">for</span>、<span class="en-term">since</span>）<br/>
③ 人生經歷（曾不曾做過某件事）`,
    example: `I <span class="en-term">have finished</span> my homework.（我已經完成作業了。）<br/>
She <span class="en-term">has lived</span> here <span class="en-term">for</span> three years.（她住在這裡已經三年了。）`,
    tags: ['英文文法','時態','學測常考']
  },
  {
    subjectKey: 'english', subject: '🔤 英文',
    title: '被動語態是什麼？',
    keywords: ['被動','被動語態','passive','be動詞','過去分詞'],
    body: `被動語態（<span class="en-term">Passive Voice</span>）用來強調「動作的承受者」而非「動作的執行者」。<br/><br/>
<strong>句型結構：</strong><br/>
主詞（承受者）＋ <span class="en-term">be</span> 動詞 ＋ 過去分詞（<span class="en-term">past participle</span>）＋ <span class="en-term">by</span> ＋ 執行者（可省略）<br/><br/>
<strong>各時態被動：</strong><br/>
現在式：<span class="en-term">is / am / are</span> ＋ 過去分詞<br/>
過去式：<span class="en-term">was / were</span> ＋ 過去分詞<br/>
未來式：<span class="en-term">will be</span> ＋ 過去分詞`,
    example: `The book <span class="en-term">was written</span> by the famous author.（這本書是由那位著名作者所寫的。）`,
    tags: ['英文文法','被動語態','學測常考']
  },
  {
    subjectKey: 'english', subject: '🔤 英文',
    title: '假設語氣（if子句）怎麼用？',
    keywords: ['假設語氣','if','假設','條件句','subjunctive','were','would'],
    body: `假設語氣（<span class="en-term">Subjunctive / Conditional Sentences</span>）分三種類型：<br/><br/>
<strong>第一條件句（真實可能發生）：</strong><br/>
<span class="en-term">If</span> ＋ 現在式，主句用 <span class="en-term">will / can / may</span> ＋ 原形動詞<br/><br/>
<strong>第二條件句（與現在事實相反）：</strong><br/>
<span class="en-term">If</span> ＋ 過去式（<span class="en-term">be</span> 動詞一律用 <span class="en-term">were</span>），主句用 <span class="en-term">would / could / might</span> ＋ 原形動詞<br/><br/>
<strong>第三條件句（與過去事實相反）：</strong><br/>
<span class="en-term">If</span> ＋ <span class="en-term">had</span> ＋ 過去分詞，主句用 <span class="en-term">would have</span> ＋ 過去分詞`,
    example: `（第二條件句）<span class="en-term">If</span> I <span class="en-term">were</span> rich, I <span class="en-term">would</span> travel the world.（如果我很有錢，我就會環遊世界。）`,
    tags: ['英文文法','假設語氣','學測難點']
  },
  {
    subjectKey: 'english', subject: '🔤 英文',
    title: 'supply 和 demand 是什麼意思？',
    keywords: ['supply','demand','供需','供給','需求'],
    body: `<span class="en-term">Supply</span>（供給）指的是生產者願意在某個價格下提供的商品或服務數量。<br/>
<span class="en-term">Demand</span>（需求）指的是消費者願意在某個價格下購買的商品或服務數量。<br/><br/>
<strong>供需法則（<span class="en-term">Law of Supply and Demand</span>）：</strong><br/>
・<span class="en-term">Demand</span> 增加 → 價格上漲（在供給不變的情況下）<br/>
・<span class="en-term">Supply</span> 增加 → 價格下跌（在需求不變的情況下）<br/><br/>
這是公民與社會科「經濟學」的核心概念，也常出現在英文閱讀測驗的商業或社會議題文章中。`,
    example: `The <span class="en-term">demand</span> for masks increased during the pandemic, causing prices to rise.（疫情期間口罩的需求增加，導致價格上漲。）`,
    tags: ['英文單字','經濟用語','跨科應用']
  },
  {
    subjectKey: 'english', subject: '🔤 英文',
    title: '關係代名詞 who、which、that 怎麼用？',
    keywords: ['關係代名詞','who','which','that','relative','形容詞子句'],
    body: `關係代名詞（<span class="en-term">Relative Pronouns</span>）用來連接兩個句子，引導形容詞子句修飾前面的名詞。<br/><br/>
<strong>使用規則：</strong><br/>
・<span class="en-term">who</span>：先行詞為「人」<br/>
・<span class="en-term">which</span>：先行詞為「事物或動物」<br/>
・<span class="en-term">that</span>：先行詞為「人或事物」皆可（但不用在逗號後的非限定子句）<br/>
・<span class="en-term">whose</span>：表所有格（誰的），先行詞為人或事物<br/>
・<span class="en-term">whom</span>：作受詞，先行詞為人（正式用法）`,
    example: `The student <span class="en-term">who</span> sits next to me is very smart.（坐在我旁邊的那個學生很聰明。）<br/>
The book <span class="en-term">which / that</span> I borrowed is interesting.（我借的那本書很有趣。）`,
    tags: ['英文文法','形容詞子句','學測常考']
  },

  // ==================== 數學 ====================
  {
    subjectKey: 'math', subject: '➗ 數學',
    title: '什麼是微積分？',
    keywords: ['微積分','微分','積分','導數','calculus','導函數','極限'],
    body: `微積分（<span class="en-term">Calculus</span>）是研究「變化率」與「累積量」的數學分支，分為兩大部分：<br/><br/>
<strong>① 微分（<span class="en-term">Differentiation</span>）：</strong><br/>
研究函數在某一點的「瞬間變化率」，也就是斜率。導函數（<span class="en-term">derivative</span>）記為 f'(x) 或 dy/dx。<br/>
應用：求函數的極值（最大值、最小值）、切線斜率。<br/><br/>
<strong>② 積分（<span class="en-term">Integration</span>）：</strong><br/>
研究函數曲線下的「面積累積」。定積分可計算兩曲線間的面積、體積等。<br/><br/>
<strong>微積分基本定理：</strong>微分與積分互為反運算。`,
    example: `若 f(x) = x²，則 f'(x) = 2x（對 x² 微分得到 2x）。`,
    tags: ['數學','高三課程','微積分']
  },
  {
    subjectKey: 'math', subject: '➗ 數學',
    title: '排列與組合有什麼差別？',
    keywords: ['排列','組合','permutation','combination','P','C','階乘'],
    body: `<strong>排列（<span class="en-term">Permutation</span>）：</strong><br/>
從 n 個不同物品中，取出 r 個並按「順序」排列的方法數。<br/>
公式：P(n, r) = n! / (n－r)!<br/>
重點：<strong>順序有差</strong>（ABC 和 BAC 是不同的排列）<br/><br/>
<strong>組合（<span class="en-term">Combination</span>）：</strong><br/>
從 n 個不同物品中，取出 r 個「不計順序」的選取方法數。<br/>
公式：C(n, r) = n! / (r! × (n－r)!)<br/>
重點：<strong>順序無差</strong>（ABC 和 BAC 是同一種組合）<br/><br/>
<strong>判斷訣竅：</strong>問題中若強調「排列」、「站位」、「第幾名」→ 用排列；若說「選出」、「委員」、「組隊」→ 用組合。`,
    example: `從 5 人中選 3 人組隊：C(5,3) = 10 種。<br/>從 5 人中選 3 人排成一列：P(5,3) = 60 種。`,
    tags: ['數學','排列組合','高二課程']
  },
  {
    subjectKey: 'math', subject: '➗ 數學',
    title: '三角函數 sin、cos、tan 是什麼？',
    keywords: ['三角函數','sin','cos','tan','正弦','餘弦','正切','sine','cosine','tangent'],
    body: `三角函數（<span class="en-term">Trigonometric Functions</span>）是以直角三角形的邊長比值定義的函數：<br/><br/>
・<span class="en-term">sin θ</span>（正弦）＝ 對邊 / 斜邊<br/>
・<span class="en-term">cos θ</span>（餘弦）＝ 鄰邊 / 斜邊<br/>
・<span class="en-term">tan θ</span>（正切）＝ 對邊 / 鄰邊 ＝ sin θ / cos θ<br/><br/>
<strong>常用特殊角值：</strong><br/>
<table style="font-size:0.85rem;border-collapse:collapse;margin-top:0.4rem;">
  <tr><th style="padding:4px 10px;border:1px solid #dde4ec;">θ</th><th style="padding:4px 10px;border:1px solid #dde4ec;">sin θ</th><th style="padding:4px 10px;border:1px solid #dde4ec;">cos θ</th><th style="padding:4px 10px;border:1px solid #dde4ec;">tan θ</th></tr>
  <tr><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">0°</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">0</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">1</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">0</td></tr>
  <tr><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">30°</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">1/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√3/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√3/3</td></tr>
  <tr><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">45°</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√2/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√2/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">1</td></tr>
  <tr><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">60°</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√3/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">1/2</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">√3</td></tr>
  <tr><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">90°</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">1</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">0</td><td style="padding:4px 10px;border:1px solid #dde4ec;text-align:center;">不存在</td></tr>
</table>`,
    example: `一直角三角形，對邊＝3，斜邊＝5，則 sin θ ＝ 3/5 ＝ 0.6。`,
    tags: ['數學','三角函數','高二課程']
  },

  // ==================== 物理 ====================
  {
    subjectKey: 'physics', subject: '⚛️ 物理',
    title: '牛頓三大運動定律是什麼？',
    keywords: ['牛頓','運動定律','慣性','F=ma','作用力','反作用力','newton'],
    body: `牛頓（<span class="en-term">Isaac Newton</span>）提出的三大運動定律（<span class="en-term">Newton\'s Laws of Motion</span>）是古典力學的基礎：<br/><br/>
<strong>第一定律（慣性定律 <span class="en-term">Law of Inertia</span>）：</strong><br/>
物體在不受外力（或合力為零）時，靜者恆靜、動者恆做等速直線運動。<br/>
→ 慣性（<span class="en-term">Inertia</span>）：物體抵抗運動狀態改變的性質，質量越大慣性越大。<br/><br/>
<strong>第二定律（<span class="en-term">F = ma</span>）：</strong><br/>
物體所受合力等於質量乘以加速度。<br/>
合力（<span class="en-term">Force</span>，單位：牛頓 N）＝ 質量（<span class="en-term">Mass</span>，kg）× 加速度（<span class="en-term">Acceleration</span>，m/s²）<br/><br/>
<strong>第三定律（作用力與反作用力）：</strong><br/>
任何兩物體之間的作用力（<span class="en-term">action</span>）與反作用力（<span class="en-term">reaction</span>）大小相等、方向相反，且同時作用在不同物體上。`,
    example: `一輛質量 1000 kg 的車受到 2000 N 合力，加速度 a ＝ F/m ＝ 2000/1000 ＝ 2 m/s²。`,
    tags: ['物理','力學','高一課程']
  },
  {
    subjectKey: 'physics', subject: '⚛️ 物理',
    title: '什麼是電磁感應？',
    keywords: ['電磁感應','法拉第','磁場','電流','感應電流','faraday','electromagnetic'],
    body: `電磁感應（<span class="en-term">Electromagnetic Induction</span>）是由英國科學家法拉第（<span class="en-term">Michael Faraday</span>）在1831年發現的現象：<br/><br/>
<strong>核心概念：</strong>當穿過一個封閉線圈的磁通量（<span class="en-term">Magnetic Flux</span>）發生變化時，線圈中就會產生感應電流（<span class="en-term">Induced Current</span>）。<br/><br/>
<strong>楞次定律（<span class="en-term">Lenz\'s Law</span>）：</strong><br/>
感應電流的方向，必定會產生磁場來「阻礙」引起感應的磁通量變化。<br/><br/>
<strong>應用：</strong>發電機（<span class="en-term">Generator</span>）、變壓器（<span class="en-term">Transformer</span>）、感應爐都是電磁感應原理的應用。`,
    example: `將磁鐵插入線圈時，磁通量增加，線圈產生感應電流阻止磁通量繼續增加。`,
    tags: ['物理','電磁學','高二課程']
  },

  // ==================== 化學 ====================
  {
    subjectKey: 'chemistry', subject: '🧪 化學',
    title: 'pH值是什麼意思？',
    keywords: ['pH','酸鹼','氫離子','中性','酸性','鹼性','pH值'],
    body: `<span class="en-term">pH</span> 值（酸鹼值）是衡量溶液酸鹼性的指標，定義為氫離子濃度（<span class="en-term">[H⁺]</span>）的負對數：<br/>
pH ＝ −log[H⁺]<br/><br/>
<strong>pH 值範圍：0 ～ 14</strong><br/>
・pH ＜ 7：<strong>酸性</strong>（pH 越小，酸性越強）<br/>
・pH ＝ 7：<strong>中性</strong>（純水在25°C）<br/>
・pH ＞ 7：<strong>鹼性</strong>（pH 越大，鹼性越強）<br/><br/>
<strong>日常生活例子：</strong><br/>
・檸檬汁 ≈ pH 2（強酸）<br/>
・純水 ＝ pH 7（中性）<br/>
・肥皂水 ≈ pH 9～10（弱鹼）<br/>
・漂白水 ≈ pH 12（強鹼）`,
    example: `用石蕊試紙（<span class="en-term">litmus paper</span>）測試：酸性溶液使藍色試紙變紅，鹼性溶液使紅色試紙變藍。`,
    tags: ['化學','酸鹼','高一課程']
  },
  {
    subjectKey: 'chemistry', subject: '🧪 化學',
    title: '氧化還原反應是什麼？',
    keywords: ['氧化','還原','氧化還原','得失電子','redox','oxidation','reduction'],
    body: `氧化還原反應（<span class="en-term">Redox Reaction / Oxidation-Reduction Reaction</span>）是化學中一類涉及電子轉移的反應。<br/><br/>
<strong>氧化（<span class="en-term">Oxidation</span>）：</strong>物質「失去電子」（或氧化數升高）→「失電子者被氧化」<br/>
<strong>還原（<span class="en-term">Reduction</span>）：</strong>物質「得到電子」（或氧化數降低）→「得電子者被還原」<br/><br/>
<strong>記憶口訣：</strong><span class="en-term">OIL RIG</span><br/>
<span class="en-term">O</span>xidation <span class="en-term">I</span>s <span class="en-term">L</span>oss（氧化是失去電子）<br/>
<span class="en-term">R</span>eduction <span class="en-term">I</span>s <span class="en-term">G</span>ain（還原是得到電子）<br/><br/>
<strong>兩者必定同時發生：</strong>一個物質被氧化，另一個就必定被還原。`,
    example: `鐵生鏽：鐵（<span class="en-term">Fe</span>）失去電子→被氧化；氧氣（<span class="en-term">O₂</span>）得到電子→被還原。`,
    tags: ['化學','氧化還原','學測重點']
  },

  // ==================== 生物 ====================
  {
    subjectKey: 'biology', subject: '🌿 生物',
    title: '什麼是光合作用？',
    keywords: ['光合作用','葉綠體','二氧化碳','oxygen','photosynthesis','光能','葡萄糖'],
    body: `光合作用（<span class="en-term">Photosynthesis</span>）是植物、藻類等生物利用<strong>光能</strong>，將二氧化碳（<span class="en-term">CO₂</span>）和水（<span class="en-term">H₂O</span>）合成葡萄糖（<span class="en-term">Glucose</span>）並釋放氧氣（<span class="en-term">O₂</span>）的過程。<br/><br/>
<strong>發生場所：</strong>葉綠體（<span class="en-term">Chloroplast</span>）中的類囊體（<span class="en-term">Thylakoid</span>）和基質（<span class="en-term">Stroma</span>）<br/><br/>
<strong>化學方程式：</strong><br/>
6CO₂ ＋ 6H₂O ＋ 光能 → C₆H₁₂O₆（葡萄糖）＋ 6O₂<br/><br/>
<strong>兩大階段：</strong><br/>
① 光反應（<span class="en-term">Light Reaction</span>）：在類囊體膜上進行，分解水分子、產生 <span class="en-term">ATP</span> 和 <span class="en-term">NADPH</span><br/>
② 卡爾文循環（<span class="en-term">Calvin Cycle</span>）：在葉綠體基質進行，利用 CO₂ 合成葡萄糖`,
    example: `植物在白天行光合作用，吸收 CO₂、釋放 O₂；夜晚則只進行細胞呼吸，吸收 O₂、釋放 CO₂。`,
    tags: ['生物','植物生理','學測核心']
  },
  {
    subjectKey: 'biology', subject: '🌿 生物',
    title: 'DNA是什麼？',
    keywords: ['DNA','去氧核糖核酸','基因','遺傳','雙螺旋','nucleic acid','deoxyribonucleic'],
    body: `<span class="en-term">DNA</span>（去氧核糖核酸，<span class="en-term">Deoxyribonucleic Acid</span>）是生物體內攜帶遺傳資訊的分子，是基因（<span class="en-term">Gene</span>）的化學本質。<br/><br/>
<strong>結構：</strong>雙螺旋（<span class="en-term">Double Helix</span>），由兩條互補的去氧核苷酸鏈（<span class="en-term">Polynucleotide</span>）螺旋纏繞而成。<br/><br/>
<strong>四種鹼基（<span class="en-term">Bases</span>）：</strong><br/>
・<span class="en-term">A</span>（腺嘌呤 <span class="en-term">Adenine</span>）配對 <span class="en-term">T</span>（胸腺嘧啶 <span class="en-term">Thymine</span>）<br/>
・<span class="en-term">G</span>（鳥嘌呤 <span class="en-term">Guanine</span>）配對 <span class="en-term">C</span>（胞嘧啶 <span class="en-term">Cytosine</span>）<br/><br/>
<strong>功能：</strong>儲存、複製與傳遞遺傳資訊，指導蛋白質的合成（<span class="en-term">Protein Synthesis</span>）。`,
    example: `若一條 DNA 鏈的鹼基序列為 ATCG，另一條互補鏈則為 TAGC。`,
    tags: ['生物','分子生物學','學測核心']
  },
  {
    subjectKey: 'biology', subject: '🌿 生物',
    title: '什麼是細胞呼吸？',
    keywords: ['細胞呼吸','有氧呼吸','ATP','粒線體','aerobic','respiration','葡萄糖'],
    body: `細胞呼吸（<span class="en-term">Cellular Respiration</span>）是細胞分解有機物（主要是葡萄糖）、釋放能量並合成 <span class="en-term">ATP</span> 的過程。<br/><br/>
<strong>有氧呼吸（<span class="en-term">Aerobic Respiration</span>）：</strong><br/>
需要氧氣，在粒線體（<span class="en-term">Mitochondria</span>）中進行，效率高。<br/>
方程式：C₆H₁₂O₆ ＋ 6O₂ → 6CO₂ ＋ 6H₂O ＋ <strong>36～38 個 ATP</strong><br/><br/>
<strong>無氧呼吸（<span class="en-term">Anaerobic Respiration</span> / 發酵 <span class="en-term">Fermentation</span>）：</strong><br/>
不需氧氣，在細胞質基質中進行，效率低，只產生 2 個 <span class="en-term">ATP</span>。<br/>
・酵母菌：葡萄糖 → 酒精 ＋ CO₂<br/>
・肌肉細胞：葡萄糖 → 乳酸（<span class="en-term">Lactic Acid</span>）`,
    example: `運動後肌肉痠痛，是因為短時間劇烈運動時，肌肉進行無氧呼吸產生乳酸所導致。`,
    tags: ['生物','細胞代謝','高一課程']
  },

  // ==================== 歷史 ====================
  {
    subjectKey: 'history', subject: '📜 歷史',
    title: '台灣何時成為日本殖民地？',
    keywords: ['日本','殖民','台灣','馬關條約','甲午戰爭','1895','日治'],
    body: `<strong>1895年</strong>，清朝與日本簽訂《馬關條約》（<span class="en-term">Treaty of Shimonoseki</span>）後，台灣割讓給日本，開始長達<strong>50年</strong>的日本統治時期（1895～1945年）。<br/><br/>
<strong>背景：</strong>1894年中日甲午戰爭，清朝戰敗，於1895年4月17日簽訂馬關條約。<br/><br/>
<strong>重要事件時間軸：</strong><br/>
・1895年：馬關條約簽訂，台灣民主國成立（旋即瓦解）<br/>
・1895～1915年：武裝抗日運動（如乙未戰爭、西來庵事件）<br/>
・1915年後：日本推行「內地延長主義」<br/>
・1937年：皇民化運動開始<br/>
・1945年：二戰結束，台灣光復（10月25日）`,
    example: `馬關條約第二款：「清國割讓台灣全島及所有附屬各島嶼、澎湖列島給日本帝國。」`,
    tags: ['歷史','台灣史','學測重點']
  },
  {
    subjectKey: 'history', subject: '📜 歷史',
    title: '法國大革命的原因和影響是什麼？',
    keywords: ['法國大革命','french revolution','1789','自由','平等','博愛','啟蒙'],
    body: `法國大革命（<span class="en-term">French Revolution</span>，1789～1799年）是近代史上最重要的政治革命之一。<br/><br/>
<strong>主要原因：</strong><br/>
① 財政危機：法國參與美國獨立戰爭後債台高築<br/>
② 社會不平等：三個等級（<span class="en-term">Three Estates</span>）制度，第三等級（平民）負擔最重<br/>
③ 啟蒙思想（<span class="en-term">Enlightenment</span>）影響：洛克、盧梭的天賦人權觀念廣泛流傳<br/>
④ 糧食危機：1788年歉收，麵包價格暴漲<br/><br/>
<strong>重要影響：</strong><br/>
・推翻君主專制，確立「自由、平等、博愛（<span class="en-term">Liberté, Égalité, Fraternité</span>）」理念<br/>
・《人權與公民宣言》（<span class="en-term">Declaration of the Rights of Man</span>）成為人權文獻先驅<br/>
・拿破崙崛起，將革命理念傳播至全歐洲`,
    example: `1789年7月14日，巴黎市民攻佔巴士底監獄（<span class="en-term">Bastille</span>），成為法國大革命爆發的象徵。`,
    tags: ['歷史','世界史','法國','高二課程']
  },

  // ==================== 地理 ====================
  {
    subjectKey: 'geography', subject: '🗺️ 地理',
    title: '什麼是季風？台灣的季風有什麼特色？',
    keywords: ['季風','monsoon','東北季風','西南季風','台灣','氣候'],
    body: `季風（<span class="en-term">Monsoon</span>）是因陸地和海洋吸熱、散熱速度不同，導致大氣壓力差異，形成<strong>隨季節改變方向</strong>的大規模風系。<br/><br/>
<strong>台灣的季風：</strong><br/>
・<strong>東北季風（冬季，10月～翌年3月）：</strong>風從東北方吹來，帶來低溫和水氣，使東北部（基隆、宜蘭）降雨豐沛。<br/>
・<strong>西南季風（夏季，5月～9月）：</strong>風從西南方吹來，攜帶大量水氣，為台灣帶來大量降雨（梅雨、颱風）。<br/><br/>
<strong>地形影響：</strong>中央山脈造成「迎風面」（雨量多）和「背風面」（焚風、雨影效應）的明顯差異。`,
    example: `宜蘭冬雨多（東北季風迎風面）；台東夏天有焚風（中央山脈阻擋西南季風）。`,
    tags: ['地理','氣候','台灣地理']
  },

  // ==================== 公民 ====================
  {
    subjectKey: 'civics', subject: '⚖️ 公民',
    title: '什麼是供給和需求？價格怎麼決定？',
    keywords: ['供給','需求','price','均衡','市場機制','supply','demand','價格'],
    body: `<strong>需求（<span class="en-term">Demand</span>）：</strong>消費者在各種價格下願意且能夠購買的數量。價格越高，需求量通常越少（需求法則）。<br/><br/>
<strong>供給（<span class="en-term">Supply</span>）：</strong>生產者在各種價格下願意且能夠提供的數量。價格越高，供給量通常越多（供給法則）。<br/><br/>
<strong>均衡價格（<span class="en-term">Equilibrium Price</span>）：</strong><br/>
當供給量等於需求量時，市場達到均衡，此時的價格稱為均衡價格，數量稱為均衡數量。<br/><br/>
<strong>價格變動：</strong><br/>
・需求增加（需求曲線右移）→ 均衡價格上升<br/>
・供給增加（供給曲線右移）→ 均衡價格下降`,
    example: `疫情期間，口罩需求大增（需求曲線右移），在供給短時間未能增加的情況下，口罩價格急速上升。`,
    tags: ['公民','經濟學','市場機制']
  },
  {
    subjectKey: 'civics', subject: '⚖️ 公民',
    title: '什麼是人權？基本人權有哪些？',
    keywords: ['人權','基本人權','天賦人權','人身自由','平等權','rights','憲法'],
    body: `人權（<span class="en-term">Human Rights</span>）是每個人生而具有、不可剝奪的基本權利，源自「天賦人權（<span class="en-term">Natural Rights</span>）」的思想。<br/><br/>
<strong>中華民國憲法保障的基本人權：</strong><br/>
① 平等權（<span class="en-term">Equality</span>）：法律之前人人平等，不因性別、宗教、種族等差別對待<br/>
② 人身自由（<span class="en-term">Personal Liberty</span>）：不受非法逮捕、拘禁<br/>
③ 言論、講學、著作、出版自由（<span class="en-term">Freedom of Speech</span>）<br/>
④ 秘密通訊自由<br/>
⑤ 宗教自由（<span class="en-term">Freedom of Religion</span>）<br/>
⑥ 集會、結社自由<br/>
⑦ 居住、遷徙自由<br/>
⑧ 工作權、財產權、受教育之權利<br/>
⑨ 選舉、罷免、創制、複決之政治參與權`,
    example: `1948年聯合國通過《世界人權宣言（<span class="en-term">Universal Declaration of Human Rights</span>）》，確立人權的普世標準。`,
    tags: ['公民','人權','憲法']
  },

  // ==================== 國文 ====================
  {
    subjectKey: 'chinese', subject: '📖 國文',
    title: '議論文的結構是什麼？怎麼寫好議論文？',
    keywords: ['議論文','論點','論據','論證','結構','寫作','作文'],
    body: `議論文是以「說理」為目的的文章，結構分為三個核心要素：<br/><br/>
<strong>① 論點（主張）：</strong>文章要論述的核心觀點，通常在開頭或結論明確表達。<br/>
<strong>② 論據（證據）：</strong>支撐論點的材料，分為：<br/>
・事實論據：真實的事件、數據、案例<br/>
・道理論據：名言、定理、公認的道理<br/>
<strong>③ 論證（推理）：</strong>用論據證明論點的推理過程。<br/><br/>
<strong>常見的議論文結構：</strong><br/>
「總—分—總」：開頭點出論點 → 分段論述 → 結尾總結<br/><br/>
<strong>提升議論文品質的技巧：</strong><br/>
・善用「雖然…但是…」、「固然…然而…」等轉折句增加思辨深度<br/>
・加入反例或反駁，展現多角度思考<br/>
・結論呼應開頭，首尾一貫`,
    example: `開頭點明論點→第一段舉事實例子→第二段引名言佐證→第三段反駁反方→結論重申並昇華主題。`,
    tags: ['國文','作文','議論文']
  },
  {
    subjectKey: 'chinese', subject: '📖 國文',
    title: '常見文言虛詞「之」、「而」、「以」的用法',
    keywords: ['文言文','虛詞','之','而','以','助詞','連詞'],
    body: `文言虛詞是閱讀文言文的關鍵，以下是三個最常考的虛詞：<br/><br/>
<strong>「之」的用法：</strong><br/>
① 結構助詞（的）：如「水陸草木之花」→水陸草木的花<br/>
② 動詞（往、到）：如「吾欲之南海」→我想去南海<br/>
③ 代詞（他/她/它）：如「學而時習之」→學了並時常複習它<br/>
④ 助詞（無義，調音節）：如「怅恨久之」<br/><br/>
<strong>「而」的用法：</strong><br/>
① 順承（然後）：「學而時習之」<br/>
② 轉折（但是）：「人不知而不慍」<br/>
③ 修飾（地）：「默而識之」<br/><br/>
<strong>「以」的用法：</strong><br/>
① 介詞（用、憑）：「以刀割之」<br/>
② 連詞（因為）：「不以物喜，不以己悲」<br/>
③ 連詞（來、而）：「吾日三省吾身」`,
    example: `「先帝不以臣卑鄙」中的「以」是「因為」的意思，翻譯為：先帝不因為我身份低微而輕視我。`,
    tags: ['國文','文言文','虛詞','學測必考']
  }
];
