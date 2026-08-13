// 題庫資料 - 各科目範例題目
const QUESTION_BANK = {

  chinese: [
    { id:"c1", difficulty:"easy", text:"下列哪個成語使用正確？", options:["他這次考試名落孫山，真是太倒楣了","這道菜色香味俱全，令人垂涎三尺","他首當其衝，成為第一名","她不厭其煩地向上司拍馬屁"], answer:1, explanation:"「垂涎三尺」比喻看到好東西非常貪饞渴望，用來形容食物誘人是正確用法。" },
    { id:"c2", difficulty:"easy", text:"「春蠶到死絲方盡，蠟炬成灰淚始乾」出自哪位詩人？", options:["杜甫","李白","李商隱","白居易"], answer:2, explanation:"此句出自唐代詩人李商隱的《無題》，以春蠶吐絲、蠟燭燃淚比喻深情。" },
    { id:"c3", difficulty:"medium", text:"下列文句中，「之」字的用法與「水陸草木之花」相同的是？", options:["何陋之有","予獨愛蓮之出淤泥而不染","無絲竹之亂耳","菊，花之隱逸者也"], answer:3, explanation:"「水陸草木之花」與「菊，花之隱逸者也」中的「之」皆為結構助詞，表示修飾關係（的）。" },
    { id:"c4", difficulty:"medium", text:"《儒林外史》的作者是？", options:["曹雪芹","吳承恩","吳敬梓","羅貫中"], answer:2, explanation:"《儒林外史》是清代吳敬梓所著的長篇小說，以諷刺科舉制度為主題。" },
    { id:"c5", difficulty:"hard", text:"「信言不美，美言不信；善者不辯，辯者不善」出自哪部典籍？", options:["《論語》","《孟子》","《道德經》","《莊子》"], answer:2, explanation:"此句出自老子的《道德經》第八十一章，是全書的結尾，強調真實質樸的重要性。" },
  ],

  english: [
    { id:"e1", difficulty:"easy", text:"Choose the correct word: She has been working here ___ three years.", options:["since","for","during","by"], answer:1, explanation:"\"for\" is used with a duration of time (three years). \"since\" is used with a point in time." },
    { id:"e2", difficulty:"easy", text:"Which sentence is grammatically correct?", options:["She don't like coffee","He don't want to go","They doesn't know","I don't understand"], answer:3, explanation:"\"I don't understand\" is correct. With 'I', we use 'do not (don't)'." },
    { id:"e3", difficulty:"medium", text:"The word \"benevolent\" most closely means:", options:["harmful","well-meaning and kindly","indifferent","aggressive"], answer:1, explanation:"\"Benevolent\" means well-meaning and kindly, often used to describe a kind, charitable person." },
    { id:"e4", difficulty:"medium", text:"Complete the sentence: Had she known about the meeting, she ___ attended.", options:["will have","would have","would","will"], answer:1, explanation:"This is a third conditional (hypothetical past). The structure is: Had + subject + past participle, subject + would have + past participle." },
    { id:"e5", difficulty:"hard", text:"Which of the following correctly uses the subjunctive mood?", options:["I suggest that he goes home","It is important that she is on time","The doctor recommends that the patient rest","He insists that she will apologize"], answer:2, explanation:"In the subjunctive mood, we use the base form of the verb. \"...that the patient rest\" (not rests) is the correct subjunctive form." },
  ],

  math: [
    { id:"m1", difficulty:"easy", text:"若 f(x) = 2x + 3，則 f(4) = ？", options:["8","10","11","12"], answer:2, explanation:"f(4) = 2×4 + 3 = 8 + 3 = 11" },
    { id:"m2", difficulty:"easy", text:"一個圓的半徑為 5，其面積為？（π ≈ 3.14）", options:["15.7","31.4","78.5","157"], answer:2, explanation:"圓面積 = πr² = 3.14 × 5² = 3.14 × 25 = 78.5" },
    { id:"m3", difficulty:"medium", text:"解方程式 x² - 5x + 6 = 0，x 的值為？", options:["x=1 或 x=6","x=2 或 x=3","x=-2 或 x=-3","x=1 或 x=5"], answer:1, explanation:"x² - 5x + 6 = (x-2)(x-3) = 0，所以 x = 2 或 x = 3" },
    { id:"m4", difficulty:"medium", text:"從 1 到 100 的整數中，能被 3 整除的數有幾個？", options:["30","32","33","34"], answer:2, explanation:"能被 3 整除：3, 6, 9, ..., 99。共有 99÷3 = 33 個。" },
    { id:"m5", difficulty:"hard", text:"若 sin θ = 3/5（0° < θ < 90°），則 tan θ = ？", options:["3/4","4/3","3/5","4/5"], answer:0, explanation:"由 sin θ = 3/5，利用畢氏定理：cos θ = 4/5，所以 tan θ = sin θ/cos θ = (3/5)/(4/5) = 3/4" },
  ],

  physics: [
    { id:"p1", difficulty:"easy", text:"牛頓第二運動定律的公式為？", options:["F = mv","F = ma","F = m/a","F = v/t"], answer:1, explanation:"牛頓第二定律：F = ma，即力等於質量乘以加速度。" },
    { id:"p2", difficulty:"easy", text:"光在真空中的速度約為？", options:["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"], answer:1, explanation:"光在真空中的速度約為 3×10⁸ m/s（30萬公里/秒）。" },
    { id:"p3", difficulty:"medium", text:"一物體質量 2kg 從靜止出發，受到 10N 的合力作用，5秒後速度為？", options:["10 m/s","20 m/s","25 m/s","50 m/s"], answer:2, explanation:"加速度 a = F/m = 10/2 = 5 m/s²，v = at = 5×5 = 25 m/s" },
    { id:"p4", difficulty:"medium", text:"電阻 R = 10Ω，電壓 V = 20V，電流 I = ？", options:["0.5 A","2 A","200 A","0.2 A"], answer:1, explanation:"依歐姆定律 I = V/R = 20/10 = 2 A" },
    { id:"p5", difficulty:"hard", text:"質量 m 的物體在高度 h 處的重力位能（g 為重力加速度）為？", options:["mgh²","½mgh","mgh","mg/h"], answer:2, explanation:"重力位能 Ep = mgh，其中 m 為質量，g 為重力加速度，h 為高度。" },
  ],

  chemistry: [
    { id:"ch1", difficulty:"easy", text:"水的化學式為？", options:["H₂O₂","HO","H₂O","H₃O"], answer:2, explanation:"水（Water）的化學式為 H₂O，由兩個氫原子和一個氧原子組成。" },
    { id:"ch2", difficulty:"easy", text:"元素週期表中原子序為 1 的元素是？", options:["氦（He）","氧（O）","碳（C）","氫（H）"], answer:3, explanation:"氫（H）的原子序為 1，是週期表中最輕的元素。" },
    { id:"ch3", difficulty:"medium", text:"pH = 7 的溶液為？", options:["強酸","弱酸","中性","鹼性"], answer:2, explanation:"pH = 7 表示中性溶液，pH < 7 為酸性，pH > 7 為鹼性。" },
    { id:"ch4", difficulty:"medium", text:"下列哪個是氧化反應的正確描述？", options:["得到電子","失去氫","失去氧","失去電子"], answer:3, explanation:"氧化反應定義：失去電子（或失去氫、得到氧）。還原反應相反。" },
    { id:"ch5", difficulty:"hard", text:"乙醇（C₂H₅OH）完全燃燒的產物為？", options:["CO 和 H₂O","CO₂ 和 H₂","CO₂ 和 H₂O","C 和 H₂O"], answer:2, explanation:"乙醇完全燃燒：C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O，產物為二氧化碳和水。" },
  ],

  biology: [
    { id:"b1", difficulty:"easy", text:"細胞的能量工廠是？", options:["細胞核","細胞膜","粒線體","葉綠體"], answer:2, explanation:"粒線體（Mitochondria）是細胞進行有氧呼吸、產生 ATP 的場所，被稱為細胞的能量工廠。" },
    { id:"b2", difficulty:"easy", text:"光合作用的場所是？", options:["粒線體","核糖體","葉綠體","細胞核"], answer:2, explanation:"葉綠體是植物進行光合作用的場所，利用光能將 CO₂ 和 H₂O 合成有機物。" },
    { id:"b3", difficulty:"medium", text:"DNA 的雙螺旋結構由哪位科學家發現？", options:["孟德爾","達爾文","華生與克里克","巴斯德"], answer:2, explanation:"1953 年，詹姆斯·華生（Watson）和法蘭西斯·克里克（Crick）發現了 DNA 的雙螺旋結構。" },
    { id:"b4", difficulty:"medium", text:"人體血液中負責運輸氧氣的是？", options:["白血球","血小板","紅血球","血漿"], answer:2, explanation:"紅血球中含有血紅素（Hemoglobin），能與氧氣結合，負責在全身輸送氧氣。" },
    { id:"b5", difficulty:"hard", text:"下列哪個不是有性生殖的特徵？", options:["具有遺傳多樣性","需要兩個親本","後代與親本基因完全相同","能增加物種適應性"], answer:2, explanation:"有性生殖的後代遺傳了來自兩個親本的基因，具有遺傳多樣性，後代不會與親本基因完全相同。" },
  ],

  history: [
    { id:"h1", difficulty:"easy", text:"台灣在清朝時期，最早被設立為省份是哪一年？", options:["1683年","1895年","1885年","1860年"], answer:2, explanation:"1885年，清朝將台灣正式設立為行省，劉銘傳為首任巡撫。" },
    { id:"h2", difficulty:"easy", text:"馬關條約（1895年）主要將台灣割讓給哪個國家？", options:["英國","法國","日本","美國"], answer:2, explanation:"1895年甲午戰爭後，清朝與日本簽訂馬關條約，將台灣、澎湖割讓給日本。" },
    { id:"h3", difficulty:"medium", text:"法國大革命爆發於哪一年？", options:["1776年","1789年","1800年","1815年"], answer:1, explanation:"法國大革命爆發於1789年，是世界近代史上重要的民主革命事件。" },
    { id:"h4", difficulty:"medium", text:"第二次世界大戰結束的年份是？", options:["1943年","1944年","1945年","1946年"], answer:2, explanation:"二戰於1945年結束，歐洲戰場於5月8日結束（V-E Day），太平洋戰場於9月2日結束（V-J Day）。" },
    { id:"h5", difficulty:"hard", text:"下列何者是工業革命最早發生的國家？", options:["法國","德國","美國","英國"], answer:3, explanation:"工業革命（18世紀中葉）最早發生在英國，以蒸汽機的廣泛應用為標誌，逐漸擴展至歐洲及世界各地。" },
  ],

  geography: [
    { id:"g1", difficulty:"easy", text:"台灣最高峰是？", options:["雪山","合歡山","玉山","阿里山"], answer:2, explanation:"玉山（海拔3952公尺）是台灣及東北亞第一高峰，也是台灣五嶽之首。" },
    { id:"g2", difficulty:"easy", text:"台灣位於哪個氣候帶？", options:["溫帶","寒帶","熱帶與亞熱帶","沙漠氣候"], answer:2, explanation:"台灣北部屬亞熱帶，南部屬熱帶，北回歸線橫貫嘉義附近，為熱帶與亞熱帶氣候。" },
    { id:"g3", difficulty:"medium", text:"亞馬遜河主要流經哪個國家？", options:["阿根廷","秘魯","巴西","哥倫比亞"], answer:2, explanation:"亞馬遜河是世界最大的河流（以水量計算），約60%流域位於巴西境內。" },
    { id:"g4", difficulty:"medium", text:"下列哪個山脈是歐洲與亞洲的天然分界線之一？", options:["阿爾卑斯山","喜馬拉雅山","烏拉山","庇里牛斯山"], answer:2, explanation:"烏拉山（Ural Mountains）是歐洲與亞洲的傳統地理分界線之一，位於俄羅斯境內。" },
    { id:"g5", difficulty:"hard", text:"下列哪種農業生產方式最適合台灣西部平原？", options:["游牧業","刀耕火種","集約農業","粗放農業"], answer:2, explanation:"台灣西部平原（嘉南平原等）地狹人稠，適合集約農業（密集使用勞動力、資本和技術以提高單位產量）。" },
  ],

  civics: [
    { id:"cv1", difficulty:"easy", text:"依據中華民國憲法，行政院院長由誰任命？", options:["立法院","司法院","總統","監察院"], answer:2, explanation:"依中華民國憲法增修條文，行政院院長由總統任命，不需經立法院同意。" },
    { id:"cv2", difficulty:"easy", text:"台灣現行的選舉制度，投票年齡下限為？", options:["16歲","18歲","20歲","22歲"], answer:1, explanation:"2022年修憲後，公民投票年齡已降至18歲，2023年起全面適用18歲選舉權。" },
    { id:"cv3", difficulty:"medium", text:"依市場機制，當某商品需求增加而供給不變時，價格會如何變動？", options:["下降","不變","上升","先升後降"], answer:2, explanation:"需求增加，需求曲線右移，在供給不變的情況下，均衡價格會上升，均衡數量也增加。" },
    { id:"cv4", difficulty:"medium", text:"「法律之前，人人平等」體現了哪種法律原則？", options:["比例原則","信賴保護原則","平等原則","明確性原則"], answer:2, explanation:"平等原則：相同事物應給予相同對待，不同事物給予不同對待，禁止恣意差別對待。" },
    { id:"cv5", difficulty:"hard", text:"下列何者屬於「社會基本權」？", options:["言論自由","財產權","工作權","人身自由"], answer:2, explanation:"工作權屬於社會基本權（社會權），包含工作、生存、受教育等權利，需要國家積極作為來保障。" },
  ],

  exam_gaokao: [
    { id:"ex1", year:2023, subject:"國文", difficulty:"medium", text:"（108課綱學測）閱讀下文，回答問題：「天下皆知美之為美，斯惡已；皆知善之為善，斯不善已。」此段出自？", options:["《論語》","《孟子》","《道德經》","《莊子》"], answer:2, explanation:"此段出自老子《道德經》第二章，說明美醜、善惡是相對的概念。" },
    { id:"ex2", year:2023, subject:"英文", difficulty:"medium", text:"（學測英文）Choose the best answer: The scientist's experiment was ___; it produced results that no one had expected.", options:["conventional","groundbreaking","redundant","trivial"], answer:1, explanation:"\"groundbreaking\" means innovative and pioneering, which fits the context of unexpected results." },
    { id:"ex3", year:2022, subject:"數學", difficulty:"hard", text:"（學測數學）設 a, b 為正整數，且 a + b = 10，則 ab 的最大值為？", options:["21","24","25","30"], answer:2, explanation:"由 AM-GM 不等式，當 a = b = 5 時，ab 有最大值 5×5 = 25。" },
    { id:"ex4", year:2022, subject:"自然", difficulty:"medium", text:"（學測自然）下列哪個物理量的單位是「帕斯卡（Pa）」？", options:["能量","壓力","力","速度"], answer:1, explanation:"帕斯卡（Pascal, Pa）是壓力的SI單位，等於每平方公尺施加1牛頓的力（N/m²）。" },
    { id:"ex5", year:2021, subject:"社會", difficulty:"medium", text:"（學測社會）聯合國《世界人權宣言》於哪一年通過？", options:["1945年","1946年","1948年","1950年"], answer:2, explanation:"聯合國《世界人權宣言》於1948年12月10日通過，確立了基本人權的普世標準。" },
    { id:"ex6", year:2021, subject:"國文", difficulty:"hard", text:"（學測國文）「吾十有五而志於學，三十而立，四十而不惑，五十而知天命，六十而耳順，七十而從心所欲，不踰矩。」此段出自？", options:["《孟子》","《論語》","《中庸》","《大學》"], answer:1, explanation:"此段出自《論語·為政篇》，是孔子自述一生學習修養的歷程。" },
    { id:"ex7", year:2020, subject:"英文", difficulty:"hard", text:"（學測英文）The phrase \"turn over a new leaf\" means:", options:["to change one's behavior for the better","to literally turn a page","to start a new book","to ignore past mistakes"], answer:0, explanation:"\"Turn over a new leaf\" is an idiom meaning to start behaving in a better or more responsible way." },
    { id:"ex8", year:2020, subject:"數學", difficulty:"hard", text:"（學測數學）若 log₂8 = x，則 x = ？", options:["2","3","4","8"], answer:1, explanation:"log₂8 = log₂(2³) = 3，因為 2³ = 8。" },
  ]
};

// 取得指定科目題目（可依難度篩選）
function getQuestions(subject, difficulty = "all", count = 10) {
  let pool = QUESTION_BANK[subject] || [];
  if (difficulty !== "all") {
    pool = pool.filter(q => q.difficulty === difficulty);
  }
  // 隨機取樣
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 取得考古題（可依年份、科目篩選）
function getExamQuestions(year = "all", subject = "all", difficulty = "all") {
  let pool = QUESTION_BANK["exam_gaokao"] || [];
  if (year !== "all")       pool = pool.filter(q => q.year === parseInt(year));
  if (subject !== "all")    pool = pool.filter(q => q.subject === subject);
  if (difficulty !== "all") pool = pool.filter(q => q.difficulty === difficulty);
  return pool;
}
