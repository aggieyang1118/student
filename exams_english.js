/* ===== 三年級英語・康軒 Wonder World (1) Get Ready ～ Review 1（Claude 自編練習） ===== */
var EXTRA_EXAMS = window.EXTRA_EXAMS || [];
var OPT = s => s.split('|');
var FEEL = OPT('happy|sad|angry|thirsty|hungry');
EXTRA_EXAMS.push(
{ id: "en3-ww1-r1-a", grade: "三年級", subject: "english", title: "Review 1 練習 A：字母、發音、數字",
  sections: [
    { type: "choice", title: "一、大小寫字母", points: 5, items: [
      { ex: "大寫 B 的小寫是 b，肚子在右邊；d 的肚子在左邊，不要搞混。", q: "大寫 B 的小寫是哪一個？", opts: OPT("b|d|p|q"), a: 0 },
      { ex: "小寫 d 的大寫是 D。", q: "小寫 d 的大寫是哪一個？", opts: OPT("B|D|P|Q"), a: 1 },
      { ex: "大寫 G 的小寫是 g，尾巴往下彎。", q: "大寫 G 的小寫是哪一個？", opts: OPT("q|g|j|y"), a: 1 },
      { ex: "小寫 h 的大寫是 H。", q: "小寫 h 的大寫是哪一個？", opts: OPT("N|H|K|M"), a: 1 },
      { ex: "大寫和小寫要配同一個字母：B 配 b 才對。", q: "哪一組大小寫配對是正確的？", opts: OPT("A － e|B － b|D － b|G － q"), a: 1 },
      { ex: "字母順序是 H、I、J、K。", q: "下列哪一組字母的順序是正確的？", opts: OPT("H I J K|H J I K|I H J K|H I K J"), a: 0 }
    ]},
    { type: "choice", title: "二、看圖選字母、開頭發音", points: 5, items: [
      { ex: "apple（蘋果）的第一個字母是 a。", q: "🍎 ＿pple，空格要填哪一個字母？", opts: OPT("a|e|o|b"), a: 0 },
      { ex: "dog（狗）的第一個字母是 d，不要和 b 弄混。", q: "🐶 ＿og，空格要填哪一個字母？", opts: OPT("b|d|p|g"), a: 1 },
      { ex: "egg（蛋）的第一個字母是 e。", q: "🥚 ＿gg，空格要填哪一個字母？", opts: OPT("a|i|e|o"), a: 2 },
      { ex: "cat（貓）的第一個字母是 c，念起來像「ㄎ」的音，但不是 k。", q: "🐱 ＿at，空格要填哪一個字母？", opts: OPT("k|s|c|t"), a: 2 },
      { ex: "apple 和 ant 都是 a 開頭，發 [æ] 的音。", q: "哪一個單字開頭的音，和 apple 一樣？", opts: OPT("ant|egg|dog|cat"), a: 0 }
    ]},
    { type: "choice", title: "三、數字", points: 5, items: [
      { ex: "three 是 3。one 1、two 2、three 3、four 4、five 5。", q: "three 是數字幾？", opts: OPT("2|3|4|5"), a: 1 },
      { ex: "5 的英文是 five。", q: "數字 5 的英文是哪一個？", opts: OPT("four|five|nine|ten"), a: 1 },
      { ex: "seven 是 7。six 6、seven 7、eight 8、nine 9、ten 10。", q: "seven 是數字幾？", opts: OPT("6|7|8|9"), a: 1 },
      { ex: "8 的英文是 eight。", q: "數字 8 的英文是哪一個？", opts: OPT("eight|nine|six|ten"), a: 0 },
      { ex: "9 的英文是 nine。", q: "數字 9 的英文是哪一個？", opts: OPT("five|nine|four|one"), a: 1 },
      { ex: "10 的英文是 ten。", q: "數字 10 的英文是哪一個？", opts: OPT("two|one|ten|six"), a: 2 }
    ]},
    { type: "choice", title: "四、英文書寫規則", points: 5, items: [
      { ex: "句子開頭第一個字母要大寫，I（我）永遠大寫，nine 在句子中間用小寫，最後加句號。", q: "下列哪一句的寫法是正確的？", opts: OPT("i'm nine.|I'm nine.|I'm Nine.|i'M nine."), a: 1 },
      { ex: "一般的句子最後要加句號「.」。", q: "一般的句子（不是問句）最後要加什麼標點？", opts: OPT("句號 .|逗號 ,|什麼都不用加"), a: 0 },
      { ex: "問句最後要加問號「?」。", q: "問句（例如 Are you sad）最後要加什麼標點？", opts: OPT("句號 .|問號 ?|驚嘆號 !"), a: 1 }
    ]}
  ]},
{ id: "en3-ww1-r1-b", grade: "三年級", subject: "english", title: "Review 1 練習 B：句型與單字",
  sections: [
    { type: "choice", title: "一、Unit 1 How old are you?", points: 5, items: [
      { ex: "How old are you? 是問「你幾歲？」", q: "「How old are you?」是在問什麼？", opts: OPT("你幾歲？|你好嗎？|你叫什麼名字？|你餓嗎？"), a: 0 },
      { ex: "問年齡要回答幾歲：I'm nine.（我九歲。）", q: "A: How old are you?\nB: ＿＿＿", opts: OPT("I'm nine.|Yes, I am.|I'm happy.|It's a cat."), a: 0 },
      { ex: "I'm eight. 是「我八歲」，eight 是 8。", q: "「我八歲。」英文要怎麼說？", opts: OPT("I'm eight.|I'm eat.|I'm egg.|I'm ten."), a: 0 },
      { ex: "生日時要說 Happy birthday!（生日快樂！）", q: "朋友生日的時候，要對他說什麼？", opts: OPT("Happy birthday!|Good night!|I'm sad.|No, I'm not."), a: 0 },
      { ex: "收到禮物要說 Thank you.（謝謝你。）", q: "朋友送你禮物，你要說什麼？", opts: OPT("Thank you.|Goodbye.|I'm nine.|Are you hungry?"), a: 0 }
    ]},
    { type: "choice", title: "二、Unit 2 Are you hungry?", points: 5, items: [
      { ex: "😢 是難過，英文是 sad。", q: "😢 這是什麼心情？", opts: FEEL, a: 1 },
      { ex: "😠 是生氣，英文是 angry。", q: "😠 這是什麼心情？", opts: FEEL, a: 2 },
      { ex: "😀 是開心，英文是 happy。", q: "😀 這是什麼心情？", opts: FEEL, a: 0 },
      { ex: "口渴想喝水是 thirsty。", q: "🥤 好想喝水，英文是哪一個？", opts: FEEL, a: 3 },
      { ex: "肚子餓是 hungry。", q: "🍔 肚子好餓，英文是哪一個？", opts: FEEL, a: 4 },
      { ex: "thirsty 是「口渴」，所以 I'm thirsty. 是「我口渴」。", q: "「I'm thirsty.」是什麼意思？", opts: OPT("我很生氣。|我口渴。|我肚子餓。|我很難過。"), a: 1 },
      { ex: "Are you…? 的肯定回答是 Yes, I am.，I am 在句尾不能縮寫成 I'm。", q: "A: Are you hungry?\nB: 是的。英文要怎麼回答？", opts: OPT("Yes, I am.|Yes, I'm.|No, I am.|Yes, you are."), a: 0 },
      { ex: "否定回答是 No, I'm not.", q: "A: Are you sad?\nB: 不是。英文要怎麼回答？", opts: OPT("No, I'm not.|No, I am.|Yes, I'm not.|No, you not."), a: 0 },
      { ex: "他說 No（不是開心），臉是 😢，所以是 sad。", q: "A: Are you happy?\nB: No, I'm not. I'm ＿＿＿. 😢", opts: OPT("sad|happy|nine|cat"), a: 0 },
      { ex: "問句要把 Are 放在最前面：Are you sad?", q: "下列哪一個是正確的問句？", opts: OPT("Are you sad?|Are sad you?|Sad are you?|You sad are?"), a: 0 }
    ]},
    { type: "choice", title: "三、Get Ready：What's this?（圈出 a 或 an）", points: 5, items: [
      { ex: "apple 是母音 a 開頭，要用 an：an apple。", q: "It's ＿＿ apple. 🍎", opts: OPT("a|an"), a: 1 },
      { ex: "cat 是子音 c 開頭，用 a：a cat。", q: "It's ＿＿ cat. 🐱", opts: OPT("a|an"), a: 0 },
      { ex: "egg 是母音 e 開頭，要用 an：an egg。", q: "It's ＿＿ egg. 🥚", opts: OPT("a|an"), a: 1 },
      { ex: "dog 是子音 d 開頭，用 a：a dog。", q: "It's ＿＿ dog. 🐶", opts: OPT("a|an"), a: 0 },
      { ex: "What's this? 要回答 It's…，egg 前面要用 an：It's an egg.", q: "A: What's this?\nB: ＿＿＿ 🥚", opts: OPT("It's an egg.|I'm an egg.|It's a egg.|Yes, egg."), a: 0 }
    ]}
  ]}

);
