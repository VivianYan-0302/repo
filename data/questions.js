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
    // ===== 國文 =====
    { id:"ex_c1", year:2023, subject:"國文", difficulty:"medium", text:"「天下皆知美之為美，斯惡已；皆知善之為善，斯不善已。」此段出自？", options:["《論語》","《孟子》","《道德經》","《莊子》"], answer:2, explanation:"此段出自老子《道德經》第二章，說明美醜、善惡是相對的概念。" },
    { id:"ex_c2", year:2021, subject:"國文", difficulty:"hard", text:"「吾十有五而志於學，三十而立，四十而不惑，五十而知天命，六十而耳順，七十而從心所欲，不踰矩。」此段出自？", options:["《孟子》","《論語》","《中庸》","《大學》"], answer:1, explanation:"此段出自《論語·為政篇》，是孔子自述一生學習修養的歷程。" },
    { id:"ex_c3", year:2022, subject:"國文", difficulty:"medium", text:"「先天下之憂而憂，後天下之樂而樂」出自哪篇文章？", options:["《師說》","《出師表》","《岳陽樓記》","《赤壁賦》"], answer:2, explanation:"此句出自北宋范仲淹的《岳陽樓記》，表達了憂國憂民、以天下為己任的高尚情操。" },
    { id:"ex_c4", year:2020, subject:"國文", difficulty:"easy", text:"「床前明月光，疑是地上霜」的作者是？", options:["杜甫","王維","李白","孟浩然"], answer:2, explanation:"此句出自唐代詩人李白的《靜夜思》，描寫遊子思鄉之情。" },
    { id:"ex_c5", year:2023, subject:"國文", difficulty:"hard", text:"下列哪個文言虛詞「而」是表示「轉折」的用法？", options:["學而時習之","任重而道遠","人不知而不慍","吾日三省吾身"], answer:2, explanation:"「人不知而不慍」中的「而」表示轉折（但是、卻），意為「別人不了解我，我卻不生氣」。" },
    { id:"ex_c6", year:2022, subject:"國文", difficulty:"medium", text:"《桃花源記》的作者是哪個朝代的人？", options:["唐代","宋代","東晉","明代"], answer:2, explanation:"《桃花源記》作者陶淵明（陶潛）是東晉時代的著名詩人，以田園詩著稱。" },
    { id:"ex_c7", year:2021, subject:"國文", difficulty:"easy", text:"「山重水複疑無路，柳暗花明又一村」出自哪位詩人？", options:["陸游","蘇軾","辛棄疾","杜甫"], answer:0, explanation:"此句出自南宋陸游的《遊山西村》，比喻在困境中出現轉機。" },
    { id:"ex_c8", year:2020, subject:"國文", difficulty:"hard", text:"下列哪一項不是「論語」的體裁特徵？", options:["語錄體","記載孔子及弟子言行","四書之一","敘事完整的長篇散文"], answer:3, explanation:"《論語》是語錄體散文，記載孔子及弟子言行，篇幅短小，不是敘事完整的長篇散文。" },

    // ===== 英文 =====
    { id:"ex_e1", year:2023, subject:"英文", difficulty:"medium", text:"Choose the best answer: The scientist's experiment was ___; it produced results that no one had expected.", options:["conventional","groundbreaking","redundant","trivial"], answer:1, explanation:"\"groundbreaking\" means innovative and pioneering, which fits the context of unexpected results." },
    { id:"ex_e2", year:2020, subject:"英文", difficulty:"hard", text:"The phrase \"turn over a new leaf\" means:", options:["to change one's behavior for the better","to literally turn a page","to start a new book","to ignore past mistakes"], answer:0, explanation:"\"Turn over a new leaf\" is an idiom meaning to start behaving in a better or more responsible way." },
    { id:"ex_e3", year:2022, subject:"英文", difficulty:"medium", text:"Choose the correct form: She ___ to the gym every day before she got injured.", options:["goes","went","has gone","will go"], answer:1, explanation:"過去習慣用過去式 \"went\"，表示過去規律性的動作（在受傷之前）。" },
    { id:"ex_e4", year:2021, subject:"英文", difficulty:"easy", text:"Which word means the opposite of \"ancient\"?", options:["old","historic","modern","traditional"], answer:2, explanation:"\"modern\" means contemporary or new, which is the opposite of \"ancient\" (very old)." },
    { id:"ex_e5", year:2023, subject:"英文", difficulty:"hard", text:"___ he studied hard, he failed the exam.", options:["Because","Although","Since","Unless"], answer:1, explanation:"\"Although\" introduces a contrast/concession clause, meaning 'despite the fact that he studied hard, he still failed'." },
    { id:"ex_e6", year:2022, subject:"英文", difficulty:"medium", text:"The word \"meticulous\" most closely means:", options:["careless","showing great attention to detail","very fast","generous"], answer:1, explanation:"\"Meticulous\" means showing great attention to detail, being very careful and precise." },
    { id:"ex_e7", year:2021, subject:"英文", difficulty:"easy", text:"Choose the correct preposition: She is very good ___ playing the piano.", options:["in","on","at","for"], answer:2, explanation:"\"good at\" is the correct collocation when describing someone's skill or ability in an activity." },
    { id:"ex_e8", year:2020, subject:"英文", difficulty:"hard", text:"The passive voice of \"The teacher will explain the rules\" is:", options:["The rules will be explained by the teacher","The rules are explained by the teacher","The teacher is explaining the rules","The rules were explained by the teacher"], answer:0, explanation:"未來式主動 → 未來式被動：will + be + past participle。\"The rules will be explained by the teacher.\"" },

    // ===== 數學 =====
    { id:"ex_m1", year:2022, subject:"數學", difficulty:"hard", text:"設 a, b 為正整數，且 a + b = 10，則 ab 的最大值為？", options:["21","24","25","30"], answer:2, explanation:"由 AM-GM 不等式，當 a = b = 5 時，ab 有最大值 5×5 = 25。" },
    { id:"ex_m2", year:2020, subject:"數學", difficulty:"hard", text:"若 log₂8 = x，則 x = ？", options:["2","3","4","8"], answer:1, explanation:"log₂8 = log₂(2³) = 3，因為 2³ = 8。" },
    { id:"ex_m3", year:2023, subject:"數學", difficulty:"medium", text:"等差數列首項為 2，公差為 3，則第 10 項為？", options:["27","29","32","30"], answer:1, explanation:"等差數列第 n 項 = a₁ + (n-1)d = 2 + (10-1)×3 = 2 + 27 = 29。" },
    { id:"ex_m4", year:2021, subject:"數學", difficulty:"easy", text:"一個正六邊形的內角和為？", options:["540°","600°","720°","900°"], answer:2, explanation:"多邊形內角和 = (n-2)×180°，六邊形 = (6-2)×180° = 720°。" },
    { id:"ex_m5", year:2022, subject:"數學", difficulty:"medium", text:"若 f(x) = x² - 2x + 1，則 f(3) = ？", options:["2","4","6","8"], answer:1, explanation:"f(3) = 3² - 2×3 + 1 = 9 - 6 + 1 = 4。" },
    { id:"ex_m6", year:2020, subject:"數學", difficulty:"hard", text:"從 5 個不同顏色的球中取 3 個，有幾種取法？", options:["10","15","20","60"], answer:0, explanation:"組合 C(5,3) = 5!/(3!×2!) = (5×4)/(2×1) = 10 種。" },
    { id:"ex_m7", year:2023, subject:"數學", difficulty:"medium", text:"圓方程式 x² + y² = 25 的半徑為？", options:["5","10","25","√5"], answer:0, explanation:"標準圓方程式 x² + y² = r²，對照得 r² = 25，故 r = 5。" },
    { id:"ex_m8", year:2021, subject:"數學", difficulty:"hard", text:"sin30° × cos60° + cos30° × sin60° = ？", options:["0","1/2","√3/2","1"], answer:3, explanation:"此為 sin(30°+60°) = sin90° = 1，應用和角公式 sin(A+B) = sinAcosB + cosAsinB。" },

    // ===== 自然（物理＋化學＋生物）=====
    { id:"ex_n1", year:2022, subject:"自然", difficulty:"medium", text:"下列哪個物理量的單位是「帕斯卡（Pa）」？", options:["能量","壓力","力","速度"], answer:1, explanation:"帕斯卡（Pascal, Pa）是壓力的SI單位，等於每平方公尺施加1牛頓的力（N/m²）。" },
    { id:"ex_n2", year:2023, subject:"自然", difficulty:"easy", text:"光合作用的主要場所是細胞中的？", options:["粒線體","核糖體","葉綠體","細胞核"], answer:2, explanation:"葉綠體是植物進行光合作用的場所，含有葉綠素，可吸收光能。" },
    { id:"ex_n3", year:2021, subject:"自然", difficulty:"medium", text:"下列何者為酸性物質？", options:["氫氧化鈉（NaOH）","碳酸氫鈉（NaHCO₃）","鹽酸（HCl）","氨水（NH₃）"], answer:2, explanation:"鹽酸（HCl）是強酸，溶於水會完全解離出氫離子（H⁺），pH < 7。" },
    { id:"ex_n4", year:2020, subject:"自然", difficulty:"hard", text:"在密閉容器中，一定質量的理想氣體，溫度不變而體積縮小一半，壓力變為原來的？", options:["1/2倍","2倍","4倍","不變"], answer:1, explanation:"由波以耳定律（Boyle's Law）PV = 常數（溫度固定），體積縮半則壓力加倍。" },
    { id:"ex_n5", year:2023, subject:"自然", difficulty:"medium", text:"DNA 複製遵循的原則是？", options:["全保留複製","半保留複製","分散複製","隨機複製"], answer:1, explanation:"DNA 採半保留複製（Semiconservative Replication），複製後每條新 DNA 含有一條原有鏈和一條新合成鏈。" },
    { id:"ex_n6", year:2022, subject:"自然", difficulty:"hard", text:"電流通過導體時，其電阻與下列哪項因素無關？", options:["導體的材質","導體的長度","導體的截面積","通過的電流大小"], answer:3, explanation:"電阻 R = ρL/A，由材質（電阻率ρ）、長度（L）、截面積（A）決定，與通過的電流大小無關。" },
    { id:"ex_n7", year:2021, subject:"自然", difficulty:"easy", text:"下列哪個是化學變化？", options:["冰融化成水","鹽溶於水","鐵生鏽","玻璃破碎"], answer:2, explanation:"鐵生鏽（氧化反應）是化學變化，生成了新物質（氧化鐵）；其他三者為物理變化。" },
    { id:"ex_n8", year:2020, subject:"自然", difficulty:"medium", text:"人體消化澱粉的酵素是？", options:["蛋白酶","脂肪酶","澱粉酶","纖維素酶"], answer:2, explanation:"澱粉酶（Amylase）由唾液腺和胰腺分泌，負責將澱粉分解為麥芽糖和葡萄糖。" },

    // ===== 社會（歷史＋地理＋公民）=====
    { id:"ex_s1", year:2021, subject:"社會", difficulty:"medium", text:"聯合國《世界人權宣言》於哪一年通過？", options:["1945年","1946年","1948年","1950年"], answer:2, explanation:"聯合國《世界人權宣言》於1948年12月10日通過，確立了基本人權的普世標準。" },
    { id:"ex_s2", year:2023, subject:"社會", difficulty:"easy", text:"台灣的北回歸線橫貫哪個縣市附近？", options:["台中","嘉義","台南","彰化"], answer:1, explanation:"北回歸線（北緯23.5°）通過嘉義縣及花蓮縣，嘉義市設有北回歸線標誌。" },
    { id:"ex_s3", year:2022, subject:"社會", difficulty:"medium", text:"下列哪個事件標誌著冷戰的結束？", options:["韓戰結束","越戰結束","蘇聯解體","柏林圍牆建立"], answer:2, explanation:"1991年蘇聯解體，標誌著冷戰（Cold War）正式結束，美蘇兩極對立的格局消失。" },
    { id:"ex_s4", year:2020, subject:"社會", difficulty:"hard", text:"中華民國憲法規定，立法委員任期為幾年？", options:["3年","4年","5年","6年"], answer:1, explanation:"依中華民國憲法增修條文，立法委員任期為4年，得連選連任。" },
    { id:"ex_s5", year:2023, subject:"社會", difficulty:"medium", text:"「絲路」連接了古代中國與哪個地區的貿易往來？", options:["非洲","中亞與歐洲","東南亞","南美洲"], answer:1, explanation:"古代絲路（Silk Road）連接中國與中亞、西亞乃至歐洲，是重要的貿易與文化交流通道。" },
    { id:"ex_s6", year:2022, subject:"社會", difficulty:"easy", text:"台灣地形以哪種地形為主？", options:["平原","高原","山地與丘陵","盆地"], answer:2, explanation:"台灣地形約2/3為山地與丘陵，以中央山脈為脊樑，平原主要分布於西部沿岸。" },
    { id:"ex_s7", year:2021, subject:"社會", difficulty:"hard", text:"下列哪項是「外部性（Externality）」的例子？", options:["工廠生產商品獲利","消費者購買商品","工廠排放廢水污染河川","政府課徵所得稅"], answer:2, explanation:"外部性指經濟活動對第三方造成未計入市場價格的影響。工廠排放廢水污染河川是「負外部性」的典型例子。" },
    { id:"ex_s8", year:2020, subject:"社會", difficulty:"medium", text:"鄭成功驅逐荷蘭人、收復台灣是在哪一年？", options:["1624年","1661年","1683年","1895年"], answer:1, explanation:"1661年鄭成功率軍登陸台灣，1662年迫使荷蘭東印度公司投降，結束荷蘭在台38年的統治。" },
  ]
};

// 取得指定科目題目（可依難度篩選）
function getQuestions(subject, difficulty = "all", count = 10) {
  let pool = QUESTION_BANK[subject] || [];
  if (difficulty !== "all") {
    pool = pool.filter(q => q.difficulty === difficulty);
  }
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
