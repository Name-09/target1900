//noun（名詞）
//verb（動詞）
//adj（形容詞）
//adv（副詞）
//prep（前置詞）
//conj（接続詞）

const group1 = [
  { word: "commit", meaning: "献身する", pos: "verb" },
  { word: "stimulate", meaning: "刺激する", pos: "verb" },
  { word: "enhance", meaning: "(価値などを)高める", pos: "verb" },
  { word: "pursue", meaning: "追求する", pos: "verb" },
  { word: "react", meaning: "反応する", pos: "verb" },
  { word: "disagree", meaning: "不賛成である", pos: "verb" },
  { word: "stare", meaning: "じっと見る", pos: "verb" },
  { word: "abandon", meaning: "捨てる", pos: "verb" },
  { word: "quit", meaning: "やめる", pos: "verb" },
  { word: "capture", meaning: "とらえる", pos: "verb" },
  { word: "transfer", meaning: "移す", pos: "verb" },
  { word: "bother", meaning: "悩ます", pos: "verb" },
  { word: "persuade", meaning: "説得する", pos: "verb" },
  { word: "rent", meaning: "賃借りする", pos: "verb" },
  { word: "breed", meaning: "繁殖させる", pos: "verb" },
  { word: "invest", meaning: "投資する", pos: "verb" },
  { word: "reserve", meaning: "予約する", pos: "verb" },
  { word: "trace", meaning: "(足跡･起源などを)たどる", pos: "verb" },
  { word: "illustrate", meaning: "説明する", pos: "verb" },
  { word: "advise", meaning: "忠告(助言)する", pos: "verb" },
  { word: "convey", meaning: "伝える", pos: "verb" },
  { word: "attach", meaning: "(取り)付ける", pos: "verb" },
  { word: "stretch", meaning: "伸ばす", pos: "verb" },
  { word: "puzzle", meaning: "当惑する", pos: "verb" },
  { word: "disturb", meaning: "かき乱す", pos: "verb" },
  { word: "crash", meaning: "衝突する", pos: "verb" },
  { word: "cope", meaning: "うまく処理する", pos: "verb" },
  { word: "permit", meaning: "許可する", pos: "verb" },
  { word: "impress", meaning: "感動させる", pos: "verb" },
  { word: "suspect", meaning: "ではないかと思う", pos: "verb" },
  { word: "upset", meaning: "動揺させる", pos: "verb" },
  { word: "frighten", meaning: "(人を)怖がらせる", pos: "verb" },
  { word: "import", meaning: "輸入する", pos: "verb" },
  { word: "export", meaning: "輸出する", pos: "verb" },
  { word: "investigate", meaning: "調査する", pos: "verb" },
  { word: "monitor", meaning: "監視する", pos: "verb" },
  { word: "calculate", meaning: "計算する", pos: "verb" },
  { word: "eliminate", meaning: "取り除く", pos: "verb" },
  { word: "ease", meaning: "軽減する", pos: "verb" },
  { word: "launch", meaning: "開始する", pos: "verb" },
  { word: "sequence", meaning: "連続", pos: "noun" },
  { word: "therapy", meaning: "療法", pos: "noun" },
  { word: "symptom", meaning: "症状", pos: "noun" },
  { word: "incident", meaning: "出来事", pos: "noun" },
  { word: "witness", meaning: "目撃者", pos: "noun" },
  { word: "sum", meaning: "(金)額", pos: "noun" },
  { word: "burden", meaning: "負担", pos: "noun" },
  { word: "tone", meaning: "口調", pos: "noun" },
  { word: "honor", meaning: "光栄", pos: "noun" },
  { word: "award", meaning: "賞", pos: "noun" },
  { word: "priority", meaning: "優先(事項)", pos: "noun" },
  { word: "logic", meaning: "論理", pos: "noun" },
  { word: "minimum", meaning: "最小限度", pos: "noun" },
  { word: "exception", meaning: "例外", pos: "noun" },
  { word: "clue", meaning: "手がかり", pos: "noun" },
  { word: "bond", meaning: "絆", pos: "noun" },
  { word: "virus", meaning: "ウイルス", pos: "noun" },
  { word: "surgery", meaning: "(外科)手術", pos: "noun" },
  { word: "insurance", meaning: "保険", pos: "noun" },
  { word: "frame", meaning: "枠", pos: "noun" },
  { word: "shelter", meaning: "避難(所)", pos: "noun" },
  { word: "territory", meaning: "領土", pos: "noun" },
  { word: "boundary", meaning: "境界(線)", pos: "noun" },
  { word: "habitat", meaning: "生息地", pos: "noun" },
  { word: "district", meaning: "地区", pos: "noun" },
  { word: "conservation", meaning: "(動植物などの)保護", pos: "noun" },
  { word: "harvest", meaning: "収穫(物)", pos: "noun" },
  { word: "predator", meaning: "捕食動物", pos: "noun" },
  { word: "trap", meaning: "わな", pos: "noun" },
  { word: "trick", meaning: "こつ", pos: "noun" },

];

const group2 = [
  { word: "fault", meaning: "責任", pos: "noun" },
  { word: "discount", meaning: "割引", pos: "noun" },
  { word: "bias", meaning: "偏見", pos: "noun" },
  { word: "cooperation", meaning: "協力", pos: "noun" },
  { word: "patent", meaning: "特許(権)", pos: "noun" },
  { word: "dialogue", meaning: "対話", pos: "noun" },
  { word: "component", meaning: "構成要素", pos: "noun" },
  { word: "reputation", meaning: "評判", pos: "noun" },
  { word: "verbal", meaning: "言葉の", pos: "adj" },
  { word: "internal", meaning: "内部の", pos: "adj" },
  { word: "solid", meaning: "しっかりした", pos: "adj" },
  { word: "remote", meaning: "遠く離れた", pos: "adj" },
  { word: "principal", meaning: "主要な", pos: "adj" },
  { word: "sophisticated", meaning: "高性能の", pos: "adj" },
  { word: "equivalent", meaning: "等しい", pos: "adj" },
  { word: "rational", meaning: "理性的な", pos: "adj" },
  { word: "relevant", meaning: "関係がある", pos: "adj" },
  { word: "absolute", meaning: "絶対的な", pos: "adj" },
  { word: "frequent", meaning: "頻繁な", pos: "adj" },
  { word: "permanent", meaning: "永続的な", pos: "adj" },
  { word: "intense", meaning: "強烈な", pos: "adj" },
  { word: "meaningful", meaning: "意味のある", pos: "adj" },
  { word: "evil", meaning: "邪悪な", pos: "adj" },
  { word: "extinct", meaning: "絶滅した", pos: "adj" },
  { word: "random", meaning: "無作為の", pos: "adj" },
  { word: "raw", meaning: "生の", pos: "adj" },
  { word: "rude", meaning: "無礼な", pos: "adj" },
  { word: "mere", meaning: "単なる", pos: "adj" },
  { word: "tropical", meaning: "熱帯の", pos: "adj" },
  { word: "forth", meaning: "前へ", pos: "adv" },
  { word: "possess", meaning: "所有している", pos: "verb" },
  { word: "dominate", meaning: "支配する", pos: "verb" },
  { word: "guarantee", meaning: "保証する", pos: "verb" },
  { word: "melt", meaning: "溶ける", pos: "verb" },
  { word: "embarrass", meaning: "恥ずかしい思いをさせる", pos: "verb" },
  { word: "discourage", meaning: "(人に)やる気をなくさせる", pos: "verb" },
  { word: "detect", meaning: "感知する", pos: "verb" },
  { word: "devote", meaning: "ささげる", pos: "verb" },
  { word: "urge", meaning: "(強く)促す", pos: "verb" },
  { word: "lend", meaning: "貸す", pos: "verb" },
  { word: "restrict", meaning: "制限する", pos: "verb" },
  { word: "isolate", meaning: "孤立させる", pos: "verb" },
  { word: "accompany", meaning: "同行する", pos: "verb" },
  { word: "exhaust", meaning: "疲れ果てさせる", pos: "verb" },
  { word: "annoy", meaning: "悩ます", pos: "verb" },
  { word: "endanger", meaning: "危険にさらす", pos: "verb" },
  { word: "acknowledge", meaning: "(事実などを)認める", pos: "verb" },
  { word: "admire", meaning: "敬服(感心)する", pos: "verb" },
  { word: "evaluate", meaning: "評価する", pos: "verb" },
  { word: "declare", meaning: "宣言する", pos: "verb" },
  { word: "secure", meaning: "確保する", pos: "verb" },
  { word: "specialize", meaning: "専門とする", pos: "verb" },
  { word: "attribute", meaning: "(結果などを)帰する", pos: "verb" },
  { word: "pretend", meaning: "ふりをする", pos: "verb" },
  { word: "bury", meaning: "埋める", pos: "verb" },
  { word: "reverse", meaning: "逆転させる", pos: "verb" },
  { word: "resist", meaning: "抵抗する", pos: "verb" },
  { word: "scare", meaning: "おびえさせる", pos: "verb" },
  { word: "imitate", meaning: "まねる", pos: "verb" },
  { word: "assist", meaning: "援助する", pos: "verb" },
  { word: "resemble", meaning: "似ている", pos: "verb" },
  { word: "retire", meaning: "引退する", pos: "verb" },
  { word: "neglect", meaning: "おろそかにする", pos: "verb" },
  { word: "collapse", meaning: "崩壊する", pos: "verb" },
  { word: "reform", meaning: "改革する", pos: "verb" },
  { word: "protest", meaning: "抗議する", pos: "verb" },
  { word: "owe", meaning: "借りがある", pos: "verb" },
  { word: "sustain", meaning: "持続させる", pos: "verb" },
  { word: "assign", meaning: "割り当てる", pos: "verb" },
  { word: "accomplish", meaning: "成し遂げる", pos: "verb" }, 
];

const group3 = [
  { word: "wisdom", meaning: "知恵", pos: "noun" },
  { word: "literacy", meaning: "読み書きの能力", pos: "noun" },
  { word: "heritage", meaning: "遺産", pos: "noun" },
  { word: "mission", meaning: "使命", pos: "noun" },
  { word: "license", meaning: "免許(証)", pos: "noun" },
  { word: "elite", meaning: "エリート", pos: "noun" },
  { word: "layer", meaning: "層", pos: "noun" },
  { word: "motor", meaning: "モーター", pos: "noun" },
  { word: "protein", meaning: "たんぱく質", pos: "noun" },
  { word: "profession", meaning: "職業", pos: "noun" },
  { word: "editor", meaning: "編集者", pos: "noun" },
  { word: "agent", meaning: "仲介者", pos: "noun" },
  { word: "globe", meaning: "地球", pos: "noun" },
  { word: "haven", meaning: "避難所", pos: "noun" },
  { word: "row", meaning: "列", pos: "noun" },
  { word: "sacrifice", meaning: "犠牲", pos: "noun" },
  { word: "means", meaning: "手段", pos: "noun" },
  { word: "session", meaning: "集まり", pos: "noun" },
  { word: "league", meaning: "(競技)連盟", pos: "noun" },
  { word: "contest", meaning: "コンテスト", pos: "noun" },
  { word: "guard", meaning: "警備員", pos: "noun" },
  { word: "opponent", meaning: "(試合・論争などの)相手", pos: "noun" },
  { word: "glance", meaning: "ちらっと見ること", pos: "noun" },
  { word: "divorce", meaning: "離婚", pos: "noun" },
  { word: "tissue", meaning: "(生物の)組織", pos: "noun" },
  { word: "liquid", meaning: "液体", pos: "noun" },
  { word: "inequality", meaning: "不平等", pos: "noun" },
  { word: "prejudice", meaning: "偏見", pos: "noun" },
  { word: "justice", meaning: "公正", pos: "noun" },
  { word: "guideline", meaning: "指針", pos: "noun" },
  { word: "platform", meaning: "プラットフォーム", pos: "noun" },
  { word: "sector", meaning: "(社会･経済などの)部門", pos: "noun" },
  { word: "channel", meaning: "チャンネル", pos: "noun" },
  { word: "glacier", meaning: "氷河", pos: "noun" },
  { word: "primate", meaning: "霊長目の動物", pos: "noun" },
  { word: "usage", meaning: "(使)用法", pos: "noun" },
  { word: "fortune", meaning: "財産", pos: "noun" },
  { word: "correlation", meaning: "相互関係", pos: "noun" },
  { word: "artistic", meaning: "芸術的な", pos: "adj" },
  { word: "literary", meaning: "文学の", pos: "adj" },
  { word: "classic", meaning: "第一級の", pos: "adj" },
  { word: "liberal", meaning: "自由主義の", pos: "adj" },
  { word: "concrete", meaning: "具体的な", pos: "adj" },
  { word: "slight", meaning: "わずかな", pos: "adj" },
  { word: "federal", meaning: "連邦(政府)の", pos: "adj" },
  { word: "primitive", meaning: "原始的な", pos: "adj" },
  { word: "unfamiliar", meaning: "不慣れな", pos: "adj" },
  { word: "subtle", meaning: "微妙な", pos: "adj" },
  { word: "plain", meaning: "明らかな", pos: "adj" },
  { word: "marine", meaning: "海の", pos: "adj" },
  { word: "apparent", meaning: "明白な", pos: "adj" },
  { word: "reluctant", meaning: "気が進まない", pos: "adj" },
  { word: "temporary", meaning: "一時的な", pos: "adj" },
  { word: "guilty", meaning: "罪悪感のある", pos: "adj" },
  { word: "royal", meaning: "王の", pos: "adj" },
  { word: "pure", meaning: "純粋な", pos: "adj" },
  { word: "incredible", meaning: "信じられない", pos: "adj" },
  { word: "eager", meaning: "熱望して", pos: "adj" },
  { word: "adequate", meaning: "十分な", pos: "adj" },
  { word: "via", meaning: "～経由で", pos: "prep" },
  { word: "assess", meaning: "評価する", pos: "verb" },
  { word: "approve", meaning: "賛成する", pos: "verb" },
  { word: "remark", meaning: "述べる", pos: "verb" },
  { word: "pose", meaning: "(危険を)引き起こす", pos: "verb" },
  { word: "yield", meaning: "もたらす", pos: "verb" },
  { word: "exhibit", meaning: "示す", pos: "verb" },
  { word: "distribute", meaning: "分配する", pos: "verb" },
  { word: "command", meaning: "命じる", pos: "verb" },
  { word: "occupy", meaning: "(空間・時間を)占める", pos: "verb" },
  { word: "pop", meaning: "ひょいと動く", pos: "verb" },
];

const group4 = [
  { word: "pile", meaning: "積み重ねる", pos: "verb" },
  { word: "greet", meaning: "挨拶する", pos: "verb" },
  { word: "apologize", meaning: "謝る", pos: "verb" },
  { word: "frustrate", meaning: "いら立たせる", pos: "verb" },
  { word: "relieve", meaning: "和らげる", pos: "verb" },
  { word: "derive", meaning: "由来する", pos: "verb" },
  { word: "deserve", meaning: "値する", pos: "verb" },
  { word: "peer", meaning: "じっと見る", pos: "verb" },
  { word: "defeat", meaning: "負かす", pos: "verb" },
  { word: "convert", meaning: "変える", pos: "verb" },
  { word: "wed", meaning: "結婚する", pos: "verb" },
  { word: "delight", meaning: "喜ばせる", pos: "verb" },
  { word: "boost", meaning: "押し上げる", pos: "verb" },
  { word: "endure", meaning: "耐える", pos: "verb" },
  { word: "correspond", meaning: "一致する", pos: "verb" },
  { word: "impose", meaning: "課す", pos: "verb" },
  { word: "rescue", meaning: "救う", pos: "verb" },
  { word: "resolve", meaning: "解決する", pos: "verb" },
  { word: "register", meaning: "記録する", pos: "verb" },
  { word: "interrupt", meaning: "中断させる", pos: "verb" },
  { word: "rid", meaning: "取り除く", pos: "verb" },
  { word: "prohibit", meaning: "禁止する", pos: "verb" },
  { word: "compose", meaning: "構成する", pos: "verb" },
  { word: "misunderstand", meaning: "誤解する", pos: "verb" },
  { word: "punish", meaning: "罰する", pos: "verb" },
  { word: "ruin", meaning: "だめにする", pos: "verb" },
  { word: "defend", meaning: "防御する", pos: "verb" },
  { word: "embrace", meaning: "受け入れる", pos: "verb" },
  { word: "modify", meaning: "修正する", pos: "verb" },
  { word: "qualify", meaning: "(人に)資格を与える", pos: "verb" },
  { word: "passion", meaning: "情熱", pos: "noun" },
  { word: "enthusiasm", meaning: "熱情", pos: "noun" },
  { word: "phase", meaning: "段階", pos: "noun" },
  { word: "mode", meaning: "方式", pos: "noun" },
  { word: "span", meaning: "期間", pos: "noun" },
  { word: "gravity", meaning: "重力", pos: "noun" },
  { word: "orbit", meaning: "軌道", pos: "noun" },
  { word: "asteroid", meaning: "小惑星", pos: "noun" },
  { word: "core", meaning: "核心", pos: "noun" },
  { word: "soul", meaning: "精神", pos: "noun" },
  { word: "nerve", meaning: "神経", pos: "noun" },
  { word: "infection", meaning: "感染(症)", pos: "noun" },
  { word: "mall", meaning: "モール", pos: "noun" },
  { word: "grocery", meaning: "食料雑貨", pos: "noun" },
  { word: "humor", meaning: "ユーモア", pos: "noun" },
  { word: "instinct", meaning: "本能", pos: "noun" },
  { word: "faith", meaning: "信頼", pos: "noun" },
  { word: "courage", meaning: "勇気", pos: "noun" },
  { word: "incentive", meaning: "動機(づけ)", pos: "noun" },
  { word: "prospect", meaning: "見込み", pos: "noun" },
  { word: "obstacle", meaning: "障害(物)", pos: "noun" },
  { word: "architecture", meaning: "建築", pos: "noun" },
  { word: "stem", meaning: "(草木の)茎", pos: "noun" },
  { word: "illusion", meaning: "錯覚", pos: "noun" },
  { word: "discrimination", meaning: "差別", pos: "noun" },
  { word: "shame", meaning: "恥", pos: "noun" },
  { word: "drought", meaning: "干ばつ", pos: "noun" },
  { word: "flavor", meaning: "風味", pos: "noun" },
  { word: "portion", meaning: "部分", pos: "noun" },
  { word: "recipe", meaning: "調理法", pos: "noun" },
  { word: "luxury", meaning: "ぜいたく(品)", pos: "noun" },
  { word: "chip", meaning: "小片", pos: "noun" },
  { word: "ritual", meaning: "儀式", pos: "noun" },
  { word: "sake", meaning: "ために", pos: "noun" },
  { word: "prefecture", meaning: "(日本の)県", pos: "noun" },
  { word: "council", meaning: "(地方)議会", pos: "noun" },
  { word: "administration", meaning: "管理(部)", pos: "noun" },
  { word: "curriculum", meaning: "教育課程", pos: "noun" },
  { word: "precious", meaning: "貴重な", pos: "adj" },
  { word: "generous", meaning: "寛大な", pos: "adj" },
];
const group5 = [
  { word: "casual", meaning: "何気ない", pos: "adj" },
  { word: "optimistic", meaning: "楽観的な", pos: "adj" },
  { word: "rough", meaning: "粗い", pos: "adj" },
  { word: "unpleasant", meaning: "不愉快な", pos: "adj" },
  { word: "Arctic", meaning: "北極の", pos: "adj" },
  { word: "ultimate", meaning: "究極の", pos: "adj" },
  { word: "deaf", meaning: "耳が聞こえない", pos: "adj" },
  { word: "genuine", meaning: "本物の", pos: "adj" },
  { word: "manual", meaning: "体［手］を使う", pos: "adj" },
  { word: "mechanical", meaning: "機械の", pos: "adj" },
  { word: "instant", meaning: "即時の", pos: "adj" },
  { word: "spare", meaning: "余分の", pos: "adj" },
  { word: "immune", meaning: "免疫を持つ", pos: "adj" },
  { word: "harsh", meaning: "厳しい", pos: "adj" },
  { word: "collective", meaning: "集団の", pos: "adj" },
  { word: "inevitable", meaning: "避けられない", pos: "adj" },
  { word: "profound", meaning: "重大な", pos: "adj" },
  { word: "steady", meaning: "着実な", pos: "adj" },
  { word: "mature", meaning: "成熟した", pos: "adj" },
  { word: "likewise", meaning: "同様に", pos: "adv" },
  { word: "chase", meaning: "追跡する", pos: "verb" },
  { word: "sue", meaning: "告訴する", pos: "verb" },
  { word: "gaze", meaning: "じっと見る", pos: "verb" },
  { word: "slip", meaning: "滑る", pos: "verb" },
  { word: "load", meaning: "積む", pos: "verb" },
  { word: "overwhelm", meaning: "圧倒する", pos: "verb" },
  { word: "wander", meaning: "歩き回る", pos: "verb" },
  { word: "float", meaning: "漂う", pos: "verb" },
  { word: "pour", meaning: "注ぐ", pos: "verb" },
  { word: "substitute", meaning: "代わりに使う", pos: "verb" },
  { word: "pronounce", meaning: "発音する", pos: "verb" },
  { word: "shrink", meaning: "縮む", pos: "verb" },
  { word: "restore", meaning: "回復させる", pos: "verb" },
  { word: "trigger", meaning: "引き起こす", pos: "verb" },
  { word: "grab", meaning: "つかむ", pos: "verb" },
  { word: "retain", meaning: "保持する", pos: "verb" },
  { word: "reproduce", meaning: "複製する", pos: "verb" },
  { word: "bob", meaning: "上下に動く", pos: "verb" },
  { word: "entertain", meaning: "楽しませる", pos: "verb" },
  { word: "interfere", meaning: "干渉する", pos: "verb" },
  { word: "cultivate", meaning: "養う", pos: "verb" },
  { word: "underlie", meaning: "根底にある", pos: "verb" },
  { word: "anticipate", meaning: "予期する", pos: "verb" },
  { word: "justify", meaning: "正当化する", pos: "verb" },
  { word: "regulate", meaning: "規制する", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },
  { word: "", meaning: "", pos: "noun" },

];
const group6 = [
  { word: "mill", meaning: "製造工場", pos: "noun" },
  { word: "abuse", meaning: "乱用", pos: "noun" },
  { word: "vice", meaning: "(道徳上の)悪", pos: "noun" },
  { word: "fate", meaning: "運命", pos: "noun" },
  { word: "tragedy", meaning: "悲劇(的な事態)", pos: "noun" },
  { word: "scenario", meaning: "(予想される)筋書き", pos: "noun" },
  { word: "allergy", meaning: "アレルギー", pos: "noun" },
  { word: "wound", meaning: "(銃弾・刃物などによる)傷", pos: "noun" },
  { word: "antibiotic", meaning: "抗生物質", pos: "noun" },
  { word: "vaccine", meaning: "ワクチン", pos: "noun" },
  { word: "metaphor", meaning: "隠喩", pos: "noun" },
  { word: "folk", meaning: "人々", pos: "noun" },
  { word: "fare", meaning: "(乗り物の)料金", pos: "noun" },
  { word: "transition", meaning: "移り変わり", pos: "noun" },
  { word: "maximum", meaning: "最大限", pos: "noun" },
  { word: "galaxy", meaning: "星雲", pos: "noun" },
  { word: "mineral", meaning: "鉱物", pos: "noun" },
  { word: "skeleton", meaning: "骨格", pos: "noun" },
  { word: "counterpart", meaning: "相当する物[人]", pos: "noun" },
  { word: "stroke", meaning: "脳卒中", pos: "noun" },
  { word: "pedestrian", meaning: "歩行者", pos: "noun" },
  { word: "trail", meaning: "(野山などの)小道", pos: "noun" },
  { word: "ecology", meaning: "生態学", pos: "noun" },
  { word: "sibling", meaning: "きょうだい(の1人)", pos: "noun" },
  { word: "ratio", meaning: "比率", pos: "noun" },
  { word: "mixture", meaning: "混合(物)", pos: "noun" },
  { word: "charm", meaning: "魅力", pos: "noun" },
  { word: "ambition", meaning: "願望", pos: "noun" },
  { word: "prominent", meaning: "卓越した", pos: "adj" },
  { word: "radical", meaning: "急進的な", pos: "adj" },
  { word: "promit", meaning: "即座の", pos: "adj" },
  { word: "informal", meaning: "形式ばらない", pos: "adj" },
  { word: "mutual", meaning: "相互の", pos: "adj" },
  { word: "neutral", meaning: "中立の", pos: "adj" },
  { word: "alert", meaning: "警戒して", pos: "adj" },
  { word: "magnetic", meaning: "磁気の", pos: "adj" },
  { word: "polar", meaning: "極地の", pos: "adj" },
  { word: "fluent", meaning: "流ちょうな", pos: "adj" },
  { word: "external", meaning: "外部の", pos: "adj" },
  { word: "passive", meaning: "受動的な", pos: "adj" },
  { word: "awful", meaning: "ひどい", pos: "adj" },
  { word: "unrelated", meaning: "無関係の", pos: "adj" },
  { word: "cruel", meaning: "残酷な", pos: "adj" },
  { word: "fake", meaning: "偽の", pos: "adj" },
  { word: "vulnerable", meaning: "(攻撃などに)弱い", pos: "adj" },
  { word: "urgent", meaning: "緊急の", pos: "adj" },
  { word: "spiritual", meaning: "精神の", pos: "adj" },
  { word: "modest", meaning: "謙虚な", pos: "adj" },
  { word: "keen", meaning: "熱心な", pos: "adj" },
  { word: "nonetheless", meaning: "それにもかかわらず", pos: "adv" },
  { word: "negotiate", meaning: "交渉する", pos: "verb" },
  { word: "grasp", meaning: "把握［理解］する", pos: "verb" },
  { word: "donate", meaning: "寄付する", pos: "verb" },
  { word: "arrest", meaning: "逮捕する", pos: "verb" },
  { word: "crack", meaning: "ひびが入る", pos: "verb" },
  { word: "tap", meaning: "軽くたたく", pos: "verb" },
  { word: "split", meaning: "分割する", pos: "verb" },
  { word: "forecast", meaning: "予想［予測］する", pos: "verb" },
  { word: "exclude", meaning: "除外する", pos: "verb" },
  { word: "overlook", meaning: "見落とす", pos: "verb" },
  { word: "burst", meaning: "破裂する", pos: "verb" },
  { word: "heal", meaning: "(人・傷などを)治す", pos: "verb" },
  { word: "forbid", meaning: "禁じる", pos: "verb" },
  { word: "install", meaning: "インストールする", pos: "verb" },
  { word: "diminish", meaning: "減らす", pos: "verb" },
  { word: "cite", meaning: "引き合いに出す", pos: "verb" },
  { word: "quote", meaning: "引用する", pos: "verb" },
  { word: "dispute", meaning: "異議を唱える", pos: "verb" },
  { word: "highlight", meaning: "目立たせる", pos: "verb" },
  { word: "distract", meaning: "(注意などを)そらす", pos: "verb" },

];
const group7 = [];
const group8 = [];
const groupDummy = [
    { word: "despite", meaning: "にもかかわらず", pos: "prep" },
    { word: "eventually", meaning: "結局", pos: "adv" },
    { word: "whereas", meaning: "するのに(対し)", pos: "conj" },
    { word: "overseas", meaning: "海外へ", pos: "adv" },
    { word: "nevertheless", meaning: "それにもかかわらず", pos: "adv" },
    { word: "somewhat", meaning: "いくぶん", pos: "adv" },
];


let currentGroup = [];      
let order = [];             
let currentIndex = 0;       
let wrongList = [];         
let quizTitle = "";         


// 配列をシャッフル
function shuffle(array) {
  for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * array.length);
    let b = Math.floor(Math.random() * array.length);

    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
}

// 問題開始
function startGroup(group, title) {
  currentGroup = group;
  quizTitle = title;

  order = currentGroup.slice();
  shuffle(order);

  currentIndex = 0;
  wrongList = [];

  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  document.getElementById("quiz-title").innerText = quizTitle;

  generateQuestion();
}

function generateQuestion() {
  const q = order[currentIndex];
  document.getElementById("question-word").innerText = q.word;


let samePosChoices = currentGroup.filter(item => item !== q && item.pos === q.pos);


samePosChoices = samePosChoices.sort(() => Math.random() - 0.5).slice(0, 3);


if (samePosChoices.length < 3) {
  const allGroups = [group1, group2, group3, group4, group5, group6, group7, group8, groupDummy];
  const otherGroups = allGroups.filter(g => g !== currentGroup);

  let extraChoices = [];

  otherGroups.forEach(g => {
    extraChoices.push(...g.filter(item => item.pos === q.pos));
  });

  extraChoices = extraChoices.sort(() => Math.random() - 0.5).slice(0, 3 - samePosChoices.length);

  samePosChoices = [...samePosChoices, ...extraChoices];
}

let choices = [...samePosChoices, q].sort(() => Math.random() - 0.5);



  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.meaning;
    btn.onclick = () => checkAnswer(choice.meaning, q.meaning, q);
    choicesDiv.appendChild(btn);
  });

 
  document.getElementById("result-text").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}


function checkAnswer(selected, correct, questionObj) {
  const choiceButtons = document.querySelectorAll("#choices button");

  choiceButtons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.classList.add("correct-choice");
    }
  });

  if (selected === correct) {
    showCorrectMark();
    document.getElementById("result-text").innerText = "正解！";
    document.getElementById("correct-sound").play();
  } else {
    showWrongMark();
    document.getElementById("result-text").innerText = "不正解…";
    wrongList.push(questionObj);

    choiceButtons.forEach(btn => {
      if (btn.innerText === selected) {
        btn.classList.add("wrong-choice");
      }
    });
  }


  choiceButtons.forEach(btn => btn.disabled = true);


  setTimeout(() => {
    nextQuestion();
  }, 1000);
}






function showCorrectMark() {
  const mark = document.getElementById("correct-mark");
  mark.style.display = "block";
  setTimeout(() => {
    mark.style.display = "none";
  }, 400);
}


function showWrongMark() {
  const mark = document.getElementById("wrong-mark");
  mark.style.display = "block";
  setTimeout(() => {
    mark.style.display = "none";
  }, 400);
}


function nextQuestion() {
  currentIndex++;

  if (currentIndex >= order.length) {
    showResult();
    return;
  }

  generateQuestion();
}


function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  const score = order.length - wrongList.length;
  document.getElementById("score-text").innerText =
    `${order.length}問中 ${score}問正解`;
}


function startReview() {
  if (wrongList.length === 0) {
    alert("間違えた問題はありません！");
    return;
  }

  
  order = [...wrongList];
  order.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  wrongList = [];

  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  generateQuestion();
}


function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "none";
}
