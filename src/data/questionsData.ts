import { QuestionItem } from '../types';

export const questionsData: QuestionItem[] = [
  // MCQs
  {
    id: 1,
    qAr: "ما هو الفكرة الرئيسية لبيت الشعر (قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا كادَ المُعَلِّمُ أَن يَكونَ رَسولا)؟",
    qMl: "ആദ്യത്തെ വരിയിലെ പ്രധാന ആശയം എന്താണ്?",
    qEn: "What is the main idea of the first line: 'Stand for the teacher and render him full reverence; the teacher is almost a messenger'?",
    type: "mcq",
    options: [
      "ضرورة احترام المعلم وتبجيله لمكانته القريبة من الرسل",
      "أهمية الذهاب إلى المدرسة مبكراً",
      "الاشتغال بالصلاة والعبادة فقط",
      "التنافس بين الطلاب في الصف"
    ],
    optionsEn: [
      "The necessity of respecting the teacher due to their position close to messengers",
      "The importance of going to school early",
      "Engaging only in prayer and worship",
      "Competition among students in class"
    ],
    correctOptionIndex: 0,
    answerAr: "ضرورة احترام المعلم وتبجيله لمكانته القريبة من الرسل",
    answerMl: "പ്രവാചകന്മാരോട് അടുത്ത പദവിയുള്ള അധ്യാപകനെ ആദരിക്കുകയും ബഹുമാനിക്കുകയും ചെയ്യേണ്ടതിന്റെ അനിവാര്യത",
    answerEn: "The necessity of honoring and respecting the teacher due to their rank close to messengers",
    explanationAr: "يبين الشاعر أن المعلم يحمل رسالة سامية تنير العقول، ولذلك يستحق الوقوف والاحترام الجليل.",
    explanationEn: "The poet demonstrates that the teacher carries a noble mission of enlightening minds, deserving full reverence.",
    category: "المضمون والفهم"
  },
  {
    id: 2,
    qAr: "من هو قائل هذه القصيدة الشهيرة (قم للمعلم)؟",
    qMl: "ഈ പ്രശസ്തമായ കവിതയുടെ രചയിതാവ് ആര്?",
    qEn: "Who is the poet of this famous poem (Qum Lil-Mu'allimi)?",
    type: "mcq",
    options: [
      "حافظ إبراهيم",
      "أحمد شوقي",
      "محمود سامي البارودي",
      "خليل مطران"
    ],
    optionsEn: [
      "Hafez Ibrahim",
      "Ahmed Shawqi",
      "Mahmoud Sami al-Baroudi",
      "Khalil Mutran"
    ],
    correctOptionIndex: 1,
    answerAr: "أحمد شوقي",
    answerMl: "അഹമ്മദ് ഷൗഖി",
    answerEn: "Ahmed Shawqi",
    explanationAr: "أحمد شوقي هو يلقب بـ (أمير الشعراء) وقد كتب هذه القصيدة في دار العلوم.",
    explanationEn: "Ahmed Shawqi is titled the 'Prince of Poets' and composed this poem at Dar Al-Uloom.",
    category: "المؤلف والقصيدة"
  },
  {
    id: 3,
    qAr: "ما هو إعراب كلمة (التَبجيلا) في قوله (وفّه التبجيلا)؟",
    qMl: "'التَبجيلا' എന്ന വാക്കിന്റെ വ്യാകരണ സ്ഥാനം (ഇഅ്റാബ്) എന്ത്?",
    qEn: "What is the grammatical position (I'rab) of the word 'التَبجيلا' in 'وَفِّهِ التَبجيلا'?",
    type: "mcq",
    options: [
      "مفعول به ثان منصوب وعلامة نصبه الفتحة",
      "فاعل مرفوع وعلامة رفعه الضمة",
      "حال منصوب بالفتحة",
      "مضاف إليه مجرور بالكسرة"
    ],
    optionsEn: [
      "Second direct object (مفعول به ثان) in accusative case (منصوب)",
      "Subject (فاعل) in nominative case",
      "Hal / Adverbial modifier (حال)",
      "Possessive noun / Mudaf Ilayh (مضاف إليه)"
    ],
    correctOptionIndex: 0,
    answerAr: "مفعول به ثان منصوب وعلامة نصبه الفتحة",
    answerMl: "രണ്ടാമത്തെ മഫ്ഊൽ ബിഹി (مفعول به ثان)",
    answerEn: "Second direct object (Maf'ul bihi thani) in the accusative case",
    explanationAr: "الفعل (وفَّى) يتعدى إلى مفعولين، الهاء مفعول أول، والتبجيل مفعول به ثانٍ.",
    explanationEn: "The verb 'Waffa' takes two objects: the pronoun '-hi' is the first object, and 'Al-Tabjeela' is the second object.",
    category: "النحو والإعراب"
  },
  {
    id: 4,
    qAr: "ما معنى كلمة (أَجَلَّ) في البيت الثالث (أعلمت أشرَفَ أو أجلَّ...)؟",
    qMl: "'أَجَلَّ' എന്ന വാക്കിന്റെ അർത്ഥമെന്ത്?",
    qEn: "What is the meaning of the word 'أَجَلَّ' in line 3 ('أعلمت أشرَفَ أو أجلَّ...')?",
    type: "mcq",
    options: [
      "أكثر خوفاً",
      "أعظم وأعلا قدراً",
      "أسرع حركة",
      "أشد قسوة"
    ],
    optionsEn: [
      "More fearful",
      "Greater and more noble in rank",
      "Faster in movement",
      "More severe/harsh"
    ],
    correctOptionIndex: 1,
    answerAr: "أعظم وأعلا قدراً",
    answerMl: "ഏറ്റവും മഹത്തായതും ഉന്നതമായതും",
    answerEn: "Greater and more elevated in rank and honor",
    explanationAr: "الأجلّ تعني الأعظم قدراً وشرفاً وهيبة.",
    explanationEn: "Al-Ajall signifies the highest in rank, dignity, and honor.",
    category: "المعاني والمفردات"
  },
  {
    id: 5,
    qAr: "من هو الشاعر الملقب بـ (أمير الشعراء)؟",
    qMl: "'അമീറുശ്ശുഅറാഅ്' എന്നറിയപ്പെടുന്ന കവി ആര്?",
    qEn: "Which poet holds the title 'Prince of Poets' (أمير الشعراء)?",
    type: "mcq",
    options: [
      "أحمد شوقي",
      "جبران خليل جبران",
      "المتنبي",
      "أبو القاسم الشابي"
    ],
    optionsEn: [
      "Ahmed Shawqi",
      "Kahlil Gibran",
      "Al-Mutanabbi",
      "Aboul-Qacem Echebbi"
    ],
    correctOptionIndex: 0,
    answerAr: "أحمد شوقي",
    answerMl: "അഹമ്മദ് ഷൗഖി",
    answerEn: "Ahmed Shawqi",
    category: "المؤلف والقصيدة"
  },
  {
    id: 6,
    qAr: "ما هو الجمال البلاغي في قوله (أخرَجتَ هذا العَقلَ مِن ظُلُماتِه وَهَدَيتَهُ النورَ)؟",
    qMl: "'ظلمات' (ഇരുട്ട്), 'النور' (വെളിച്ചം) എന്നിവയിലെ അലങ്കാരം എന്ത്?",
    qEn: "What is the rhetorical device in 'أخرَجتَ هذا العَقلَ مِن ظُلُماتِه وَهَدَيتَهُ النورَ'?",
    type: "mcq",
    options: [
      "طباق إيجاب واستعارة تصريحية (حيث شبه الجهل بالظلمات والعلم بالنور)",
      "جناس تام",
      "سجع متوازٍ",
      "تشبيه مجمل"
    ],
    optionsEn: [
      "Antithesis (طباق) and Explicit Metaphor (استعارة تصريحية) comparing ignorance to darkness and knowledge to light",
      "Complete Homonymy (جناس تام)",
      "Parallel Rhyme (سجع)",
      "General Simile (تشبيه)"
    ],
    correctOptionIndex: 0,
    answerAr: "طباق إيجاب واستعارة تصريحية (حيث شبه الجهل بالظلمات والعلم بالنور)",
    answerMl: "ത്വബാഖ് (വിപരീത പദം), ഇസ്തിആറ തസ്രീഹിയ്യ (രൂപകം)",
    answerEn: "Antithesis (Tabaq) and Explicit Metaphor (Ist'arah) comparing ignorance to darkness and knowledge to light",
    explanationAr: "الجمع بين الضدين (الظلمات والنور) طباق، واستعمالهما للجهل والعلم استعارة.",
    explanationEn: "Combining opposites (darkness/light) creates Tabaq, and using them for ignorance/knowledge forms Ist'arah.",
    category: "البلاغة والتذوق"
  },
  {
    id: 7,
    qAr: "ما معنى كلمة (عَلقَماً) في قوله (إن الذي خلق الحقيقة علقماً)؟",
    qMl: "'عﻠقماً' എന്ന വാക്കിന്റെ അർത്ഥം എന്താണ്?",
    qEn: "What is the meaning of 'عَلقَماً' in line 19 ('إن الذي خلق الحقيقة علقماً')?",
    type: "mcq",
    options: [
      "شيئاً حلو المذاق",
      "النبات المرَّ المذاق (كل ما هو شديد المرارة)",
      "شيئاً سهلاً هيناً",
      "شيئاً يلمع كالذهب"
    ],
    optionsEn: [
      "Something sweet in taste",
      "Bitter plant taste (anything extremely bitter)",
      "Something simple and easy",
      "Something shining like gold"
    ],
    correctOptionIndex: 1,
    answerAr: "النبات المرَّ المذاق (كل ما هو شديد المرارة)",
    answerMl: "ചെടിയുടെ കൈപ്പുരസം (ഏറ്റവും കൈപ്പുള്ള കാര്യം)",
    answerEn: "Extremely bitter plant / anything intensely bitter in taste",
    category: "المعاني والمفردات"
  },
  {
    id: 8,
    qAr: "من هو الفيلسوف الذي ضرب به الشاعر مثلاً في التضحية والفداء من أجل الفكر؟",
    qMl: "സത്യത്തിനും അറിവിനും വേണ്ടി ചിന്താപരമായി ജീവൻ വെടിഞ്ഞ തത്ത്വചിന്തകൻ ആര്?",
    qEn: "Who is the philosopher cited by the poet as an example of intellectual sacrifice for truth?",
    type: "mcq",
    options: [
      "أرسطو",
      "سقراط",
      "أفلاطون",
      "ابن رشد"
    ],
    optionsEn: [
      "Aristotle",
      "Socrates",
      "Plato",
      "Averroes (Ibn Rushd)"
    ],
    correctOptionIndex: 1,
    answerAr: "سقراط",
    answerMl: "സോക്രട്ടീസ്",
    answerEn: "Socrates",
    category: "المضمون والفهم"
  },

  // Descriptive Questions
  {
    id: 9,
    qAr: "اشرح الشبه بين رسالة المعلم ورسالة الأنبياء والرسل كما يراه شوقي؟",
    qMl: "അധ്യാപകന്റെ ദൗത്യവും പ്രവാചകന്മാരുടെ ദൗത്യവും തമ്മിലുള്ള സാമ്യത കവി എപ്രകാരമാണ് വിവരിക്കുന്നത്?",
    qEn: "Explain the parallel drawn by Shawqi between the mission of the teacher and that of prophets and messengers?",
    type: "descriptive",
    answerAr: "الأنبياء والرسل بُعثوا بالهداية والوحي لإخراج الناس من ظلمات الشرك والجهل إلى نور التوحيد والإيمان. والمعلم يكمل هذا الدور البشري بنقل العلم والمعرفة والأخلاق، وإخراج العقول من ظلمات الجهل إلى ضياء العلم، ولذا كاد أن يكون رسولاً.",
    answerMl: "പ്രവാചകന്മാർ അല്ലാഹുവിന്റെ ദിവ്യസന്ദേശങ്ങളുമായി എത്തി മനുഷ്യരെ അജ്ഞതയുടെയും അധർമ്മത്തിന്റെയും ഇരുട്ടിൽ നിന്ന് വെളിച്ചത്തിലേക്ക് നയിച്ചവരാണ്. അധ്യാപകനും അറിവും വിജ്ഞാനവും പകർന്നു നൽകി മനുഷ്യബുദ്ധിയെ അജ്ഞതയുടെ ഇരുട്ടിൽ നിന്ന് അറിവിന്റെ വെളിച്ചത്തിലേക്ക് നയിക്കുന്നു. അതിനാൽ അധ്യാപകന്റെ ദൗത്യം പ്രവാചകന്മാരുടെ ദൗത്യത്തോട് ഏറെ അടുത്ത് നിൽക്കുന്നു.",
    answerEn: "Prophets were sent with divine revelation to lift humanity out of the darkness of polytheism and ignorance into light. Similarly, the teacher completes this human mission by transferring knowledge, virtue, and morality, guiding intellects from darkness to enlightenment. Thus, the teacher's status approaches that of a messenger.",
    category: "الشرح والتحليل"
  },
  {
    id: 10,
    qAr: "ما معنى الشجاعة الفكرية أو (شجعان العقول) في نظر الشاعر؟",
    qMl: "'ചിന്തയിലെ ധീരന്മാർ' (شجعان العقول) എന്ന് കവി വിശേഷിപ്പിച്ചത് ആരെയാണ്?",
    qEn: "What is meant by intellectual courage or 'courage of minds' (شجعان العقول) according to the poet?",
    type: "descriptive",
    answerAr: "شجعان العقول هم العلماء والمفكرون الذين يمتلكون الجرأة على قول الحق والمدافعة عن الحقيقة العلمية حتى لو تعرضوا للاضطهاد والعذاب أو الموت كما حدث مع سقراط، وهم قليلون مقارنة بأصحاب الشجاعة البدنية.",
    answerMl: "ശരീരം കൊണ്ടുള്ള ധൈര്യത്തേക്കാൾ കവി പ്രാധാന്യം നൽകുന്നത് ചിന്തയിലെ ധൈര്യത്തിനാണ്. ഭരണാധികാരികളുടെയോ എതിർപ്പുകളുടെയോ മുമ്പിൽ സത്യം പറയാൻ മടിക്കാത്ത, സത്യത്തിന് വേണ്ടി ജീവൻ നൽകാനും മടിക്കാത്ത പണ്ഡിതന്മാരും തത്ത്വചിന്തകന്മാരുമാണ് 'ചിന്തയിലെ ധീരന്മാർ'.",
    answerEn: "'Courage of minds' refers to scholars and thinkers who possess the fortitude to speak the truth and uphold knowledge despite persecution or martyrdom, as exemplified by Socrates. Such moral courage is far rarer than physical bravery.",
    category: "الشرح والتحليل"
  },
  {
    id: 11,
    qAr: "لماذا قدم الشاعر بناء (الأنفس) على بناء (العقول) في قوله: (يبني وينشئ أنفساً وعقولا)؟",
    qMl: "ബുദ്ധിയേക്കാൾ (العقول) മുമ്പായി മനസ്സുകളെയും ആത്മാക്കളെയും (الأنفس) വളർത്തുന്നതിനെ കവി മുൻഗണന നൽകിയത് എന്തുകൊണ്ട്?",
    qEn: "Why did the poet prioritize building 'souls' (الأنفس) before building 'minds' (العقول) in 'يبني وينشئ أنفساً وعقولا'?",
    type: "descriptive",
    answerAr: "لأن بناء النفس والأخلاق والتربية الكريمة هو الأساس؛ فالعلم دون أخلاق ونفس زكية قد يتحول إلى أداة تدمير وشر، أما إذا أُنشئت النفس على الفضيلة صلح استخدام العقل والفكر.",
    answerMl: "ധാർമ്മിക ബോധവും നല്ല സംസ്കാരവും ഇല്ലാത്ത അറിവ് അപകടകരമാണ്. ആത്മാവിന്റെയും മനസ്സിന്റെയും ശുദ്ധിയിലാണ് ഉത്തമ വ്യക്തിത്വം രൂപപ്പെടുന്നത്. അതിനാൽ ആദ്യം മനസ്സിനെ സംസ്കരിച്ച ശേഷമേ അറിവും ബുദ്ധിയും നൽകാവൂ എന്നതിനാലാണ് കവി ആത്മാക്കളുടെ നിർമ്മാണത്തിന് മുൻഗണന നൽകിയത്.",
    answerEn: "Because nurturing ethics and moral character is the true foundation. Knowledge without moral virtue can become destructive, whereas a soul raised on virtue will use knowledge and intellect for constructive goodness.",
    category: "التذوق البلاغي"
  },
  {
    id: 12,
    qAr: "ما العاطفة المسيطرة على الشاعر في هذه القصيدة؟",
    qMl: "ഈ കവിതയിൽ കവിയുടെ മനസ്സിൽ നിറഞ്ഞുനിൽക്കുന്ന വികാരം എന്ത്?",
    qEn: "What is the dominant emotion felt throughout the poem?",
    type: "descriptive",
    answerAr: "عاطفة الإجلال والتعظيم والتقدير الفائق لشخصية المعلم ورسالته، مقترنة بالحزن والأسى على تراجع الاهتمام بالمعلم في الأمة الشرقية والحرص على النهضة الوطنية.",
    answerMl: "അധ്യാപകനോടുള്ള ആദരവും ബഹുമാനവുമാണ് കവിയുടെ പ്രധാന വികാരം. അതോടൊപ്പം അറിവിലും അധ്യാപനത്തിലും നമ്മുടെ നാടുകൾ പിന്നാക്കം പോയതിലുള്ള സങ്കടവും, അത് വീണ്ടെടുക്കാനുള്ള ആഗ്രഹവും കവിതയിൽ പ്രകടമാണ്.",
    answerEn: "A profound emotion of reverence, honor, and appreciation for the teacher's mission, combined with concern for civilizational renaissance and educational awakening.",
    category: "الشرح والتحليل"
  },

  // Grammar / Rhetoric Questions
  {
    id: 13,
    qAr: "استخرج من القصيدة مثالاً على الأسلوب الإنشائي الطلبي وبيّن غرضه البلاغي؟",
    qMl: "കവിതയിൽ നിന്നുള്ള ഒരു കൽപ്പന അല്ലെങ്കിൽ അഭിസംബോധന ശൈലി (أسلوب إنشائي) കണ്ടെത്തി അതിന്റെ ഉദ്ദേശ്യം വ്യക്തമാക്കുക?",
    qEn: "Extract an example of an imperative/demanding construction (أسلوب إنشائي) from the poem and state its rhetorical purpose?",
    type: "grammar",
    answerAr: "القول: (قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا)، الأسلوب هنا أمر (قم، وفِّ)، وغرضه البلاغي الحث والنصح والإرشاد والتعظيم لمكانة المعلم.",
    answerMl: "ഉദാഹരണം: (قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا). ഇവിടെയുള്ള കൽപ്പനക്രിയകൾ (قم، وفِّ) അധ്യാപകനെ ബഹുമാനിക്കാനും ആദരിക്കാനുമുള്ള ആഹ്വാനവും ഉപദേശവുമാണ്.",
    answerEn: "Example: 'قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا'. The imperatives ('Qum', 'Waffihi') serve the rhetorical purpose of urging, advising, and exalting the teacher's noble status.",
    category: "النحو والبلاغة"
  },
  {
    id: 14,
    qAr: "أعرب الجملة التالية إعراباً كاملاً: (كادَ المُعَلِّمُ أَن يَكونَ رَسولا)",
    qMl: "(كاد المعلم أن يكون رسولا) എന്ന വാക്യത്തിന്റെ പൂർണ്ണ വ്യാകരണ അപഗ്രഥനം (إعراب) നൽകുക?",
    qEn: "Provide a full grammatical analysis (I'rab) of the sentence: 'كادَ المُعَلِّمُ أَن يَكونَ رَسولا'",
    type: "grammar",
    answerAr: "• كاد: فعل ماض ناقص مبني على الفتح من أفعال المقاربة.\n• المعلم: اسم كاد مرفوع وعلامة رفعه الضمة الظاهرة.\n• أن: حرف مصدري ونصب مبني على السكون.\n• يكون: فعل مضارع ناقص منصوب بأن وعلامة نصبه الفتحة، واسمه ضمير مستتر تقديره هو.\n• رسولا: خبر يكون منصوب وعلامة نصبه الفتحة الظاهرة على آخره.",
    answerMl: "• كاد: ഖബറിലേക്ക് അടുത്ത വിവരം നൽകുന്ന ഫിഅ്ൽ മാദി നാഖിസ്.\n• المعلم: ഈസ്മു കാദ (اسم كاد).\n• أن: ഹർഫു നസ്ബ്.\n• يكون: ഫിഅ്ൽ മുളാരിഅ് നാഖിസ്.\n• رسولا: ഖബറു യകൂനു (خبر يكون).",
    answerEn: "• كاد (Kada): Defective past verb indicating proximity (من أفعال المقاربة).\n• المعلم (Al-Mu'allim): Subject of Kada (اسم كاد) in nominative case with Damma.\n• أن (An): Subjunctive particle (حرف مصدري ونصب).\n• يكون (Yakuna): Subjunctive present defective verb (فعل مضارع ناقص منصوب) with implied subject.\n• رسولا (Rasula): Predicate of Yakuna (خبر يكون) in accusative case with Fatha.",
    category: "النحو والإعراب"
  },
  {
    id: 15,
    qAr: "ما نوع التشبيه في قوله (كَالبُهمِ تَأنَسُ إِذ تَرى التَدليلا)؟",
    qMl: "ഇവിടെയുള്ള ഉപമ (التشبيه) ഏത് തരത്തിലുള്ളതാണ്?",
    qEn: "What type of simile (التشبيه) is present in 'كَالبُهمِ تَأنَسُ إِذ تَرى التَدليلا'?",
    type: "grammar",
    answerAr: "تشبيه تمثيلي أو تشبيه مجمل؛ حيث شبه حال الذين لا يقدرون العلم والجهلاء حين ينقادون وراء شهواتهم بحال الأنعام الصغيرة (البهام) التي تتأنس وتفرح عندما يتم دلالها وإطعامها دون أن تعقل.",
    answerMl: "അറിവിനെ ഖദർ ചെയ്യാത്ത അജ്ഞർ തങ്ങളുടെ ആഗ്രഹങ്ങൾക്ക് പിന്നാലെ പോകുന്നതിനെ, ചിന്തയില്ലാതെ ഭക്ഷണം കണ്ട് സന്തോഷിക്കുന്ന ആട്ടിൻകുട്ടികളോട് ഉപമിച്ചിരിക്കുന്നു (Tashbeeh Tamtheeli).",
    answerEn: "Representational Simile (Tashbeeh Tamtheeli): It compares ignorant people who blindly follow desires without appreciating knowledge to young livestock rejoicing when coddled or fed without comprehension.",
    category: "البلاغة والتذوق"
  },
  {
    id: 16,
    qAr: "ما هو المعنى البلاغي للاستفهام في قوله: (أَعَلِمتَ أَشرَفَ أَو أَجَلَّ مِنَ الَّذي يَبني وَيُنشِئُ أَنفُساً وَعُقولا)؟",
    qMl: "'أعلمت...' എന്ന ചോദ്യത്തിന്റെ ബലാഗാപരമായ അർത്ഥം എന്താണ്?",
    qEn: "What is the rhetorical purpose of the question in 'أَعَلِمتَ أَشرَفَ أَو أَجَلَّ...'?",
    type: "grammar",
    answerAr: "استفهام إنكاري غرضه النفي والتقرير؛ أي لا يوجد إطلاقاً أحد أشرف ولا أعظم ممن يبني العقول والنفوس.",
    answerMl: "മനുഷ്യ മനസ്സുകളെയും ബുദ്ധിയെയും വളർത്തുന്നവനനേക്കാൾ ശ്രേഷ്ഠനായ മറ്റാരുമില്ല എന്ന് നിഷേധാത്മകമായി ഉറപ്പിച്ചു പറയുന്ന ചോദ്യശൈലി (استفهام إنكاري غرضه النفي).",
    answerEn: "Disapproving / Rhetorical Negation (Istifham Inkari for negation and affirmation): It emphatically declares that there is absolutely no one more noble than the educator who builds minds and souls.",
    category: "البلاغة والتذوق"
  },
  // Additional Questions to reach 25
  {
    id: 17,
    qAr: "ما هو الباب الذي أغلقت فيه قصيدة (قم للمعلم)؟",
    qMl: "കവിതയിൽ ചർച്ച ചെയ്യപ്പെട്ട പ്രധാന പ്രമേയം എന്താണ്?",
    qEn: "What is the main theme discussed in the poem?",
    type: "mcq",
    options: [
      "التربية والتعليم",
      "الرثاء",
      "المدح والغزل",
      "الوصف الطبيعي"
    ],
    optionsEn: [
      "Education and Pedagogy",
      "Elegy / Lamentation",
      "Praise and Romance",
      "Nature Description"
    ],
    correctOptionIndex: 0,
    answerAr: "التربية والتعليم",
    answerMl: "വിദ്യാഭ്യാസവും സദാചാരവും",
    answerEn: "Education and Pedagogy",
    category: "المضمون والفهم"
  },
  {
    id: 18,
    qAr: "إلى من يوجه الشاعر خطابه في قوله (أمُعَلِّمي وادي النيلِ)؟",
    qMl: "'നൈൽ താഴ്‌വരയിലെ അധ്യാപകരേ' എന്ന് കവി വിളിക്കുന്നത് ആരെയാണ്?",
    qEn: "Who is the poet addressing in 'O teachers of the Nile Valley'?",
    type: "mcq",
    options: [
      "معلمي مصر",
      "علماء اليونان",
      "طلاب المدارس",
      "جنود الجيش"
    ],
    optionsEn: [
      "The teachers of Egypt",
      "The scholars of Greece",
      "The school students",
      "The soldiers of the army"
    ],
    correctOptionIndex: 0,
    answerAr: "معلمي مصر",
    answerMl: "ഈജിപ്തിലെ അധ്യാപകരെ",
    answerEn: "The teachers of Egypt",
    category: "المضمون والفهم"
  },
  {
    id: 19,
    qAr: "ماذا يقصد الشاعر بكلمة (عزريلا) في البيت: (كيف الحياة على يدِ عزريلا)؟",
    qMl: "'ഇസ്രാഈൽ' (മരണദൂതൻ) എന്ന് കവി ഇവിടെ എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    qEn: "What does the poet mean by 'Azrael' in the line 'How can life exist in the hands of Azrael'?",
    type: "mcq",
    options: [
      "شخص قوي وشجاع",
      "ملك الموت، رمزاً للجهل الذي يقتل الأمم",
      "أحد القادة العسكريين",
      "اسم مدينة قديمة"
    ],
    optionsEn: [
      "A strong and brave person",
      "The Angel of Death, symbolizing ignorance that kills nations",
      "A military leader",
      "An ancient city's name"
    ],
    correctOptionIndex: 1,
    answerAr: "ملك الموت، رمزاً للجهل الذي يقتل الأمم",
    answerMl: "സമൂഹങ്ങളെ നശിപ്പിക്കുന്ന അജ്ഞതയെ സൂചിപ്പിക്കാൻ ഉപയോഗിച്ച മരണദൂതൻ",
    answerEn: "The Angel of Death, used as a symbol for ignorance that kills nations",
    category: "المعاني والمفردات"
  },
  {
    id: 20,
    qAr: "كيف يجب أن يربى شباب الوطن وفقاً للقصيدة؟",
    qMl: "കവിതയുടെ അടിസ്ഥാനത്തിൽ രാജ്യത്തെ യുവത്വത്തെ എപ്രകാരമാണ് വളർത്തേണ്ടത്?",
    qEn: "According to the poem, how should the youth of the nation be raised?",
    type: "descriptive",
    answerAr: "يجب أن يربى الشباب على الإنصاف والعدل والفضيلة، حتى إذا وصلوا لسن الشباب كانوا كالحصن المنيع الذي يدافع عن الحقوق.",
    answerMl: "നീതിയിലും സദാചാരത്തിലും അവരെ വളർത്തണം. അങ്ങനെ വളരുന്ന യുവത്വമാണ് ഭാവിയിൽ രാജ്യത്തിന്റെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്ന കോട്ടകളായി മാറുക.",
    answerEn: "They should be raised on justice, equity, and virtue, so that when they come of age, they stand as an impenetrable fortress defending human rights.",
    category: "الشرح والتحليل"
  },
  {
    id: 21,
    qAr: "ما معنى كلمة (طُفولة) في سياق: (واليوم أصبحتا بحال طفولةٍ)؟",
    qMl: "'ബാല്യാവസ്ഥ' എന്ന് ഇവിടെ സൂചിപ്പിക്കുന്നത് എന്ത്?",
    qEn: "What is meant by 'childhood' in the context of 'Today they have become in a state of childhood'?",
    type: "descriptive",
    answerAr: "يقصد بها حالة الضعف والتبعية وفقدان الاستقلال العلمي والحضاري، حيث تعتمد الأمم الشرقية على الغرب كما يعتمد الطفل على أبويه.",
    answerMl: "വിജ്ഞാനത്തിൽ പിന്നാക്കം പോയി, കുട്ടികളെപ്പോലെ അന്യരുടെ സഹായം തേടി ജീവിക്കുന്ന ഗതികേടിനെയാണ് ഇത് സൂചിപ്പിക്കുന്നത്.",
    answerEn: "It refers to a state of weakness, dependency, and loss of intellectual independence, where once-great nations now rely on others like a child relies on its parents.",
    category: "الشرح والتحليل"
  },
  {
    id: 22,
    qAr: "ما هو البحر الشعري الذي نظمت عليه هذه القصيدة؟",
    qMl: "ഈ കവിത രചിക്കപ്പെട്ടിട്ടുള്ള വൃത്തം (ബഹർ) ഏതാണ്?",
    qEn: "What is the poetic meter (Bahr) used in this poem?",
    type: "mcq",
    options: [
      "البحر الطويل",
      "البحر الكامل",
      "البحر البسيط",
      "البحر الوافر"
    ],
    optionsEn: [
      "Bahr Al-Tawil",
      "Bahr Al-Kamil",
      "Bahr Al-Basit",
      "Bahr Al-Wafir"
    ],
    correctOptionIndex: 1,
    answerAr: "البحر الكامل",
    answerMl: "ബഹറുൽ കാമിൽ (البحر الكامل)",
    answerEn: "Bahr Al-Kamil",
    category: "المؤلف والقصيدة"
  },
  {
    id: 23,
    qAr: "ما الجمع الصحيح لكلمة (عقل)؟",
    qMl: "'عقل' (ബുദ്ധി) എന്ന വാക്കിന്റെ ബഹുവചനം (ജംഅ്) എന്ത്?",
    qEn: "What is the correct plural of the word 'عقل' (mind)?",
    type: "mcq",
    options: [
      "عقلاء",
      "عقول",
      "معاقيل",
      "عقالات"
    ],
    optionsEn: [
      "Uqala'",
      "Uqool",
      "Ma'aqeel",
      "Iqalaat"
    ],
    correctOptionIndex: 1,
    answerAr: "عقول",
    answerMl: "عقول (ഉഖൂൽ)",
    answerEn: "Uqool (عقول)",
    category: "المعاني والمفردات"
  },
  {
    id: 24,
    qAr: "استخرج أسلوب الشرط في البيت: (وَإِذا أُصيبَ القَومُ في أَخلاقِهِم فَأَقِم عَلَيهِم مَأتَماً وَعَويلا) وحدد أجزاءه؟",
    qMl: "മുകളിലെ വരിയിൽ നിന്നും 'ശർത്വ്' (കണ്ടീഷണൽ സെന്റൻസ്) കണ്ടെത്തി അവയുടെ ഘടകങ്ങൾ വിശദമാക്കുക?",
    qEn: "Extract the conditional sentence (Shart) in 'وَإِذا أُصيبَ القَومُ...' and identify its parts?",
    type: "grammar",
    answerAr: "• أداة الشرط: إذا (ظرف لما يستقبل من الزمان).\n• فعل الشرط: أصيب القوم في أخلاقهم.\n• جواب الشرط: فأقم عليهم مأتماً وعويلا.",
    answerMl: "• ശർത്വിനുള്ള ഉപകരണം (أداة الشرط): إذا.\n• ശർത്വ് വാക്യം (فعل الشرط): أصيب القوم في أخلاقهم.\n• മറുപടി വാക്യം (جواب الشرط): فأقم عليهم مأتماً وعويلا.",
    answerEn: "• Conditional Particle (أداة الشرط): إذا (If/When).\n• Condition Clause (فعل الشرط): أصيب القوم في أخلاقهم (a people's morals are struck).\n• Result Clause (جواب الشرط): فأقم عليهم مأتماً وعويلا (hold a funeral for them).",
    category: "النحو والإعراب"
  },
  {
    id: 25,
    qAr: "اشرح صورة (صَدِئَ الحَديدُ وَتارَةً مَصقولا) من الناحية البلاغية؟",
    qMl: "(ചിലപ്പോൾ തുരുമ്പിച്ച ഇരുമ്പ് പോലെയും, മറ്റു ചിലപ്പോൾ മിനുസപ്പെടുത്തിയത് പോലെയും) എന്ന വരിയിലെ അലങ്കാരം എന്ത്?",
    qEn: "Explain the rhetorical imagery in 'صَدِئَ الحَديدُ وَتارَةً مَصقولا' (rusted iron and at times polished)?",
    type: "grammar",
    answerAr: "استعارة مكنية رائعة وتشبيه بليغ؛ حيث شبه الطالب الذي يحتاج للتربية بالحديد الصدئ الذي يقوم المعلم بصقله وإزالة الجهل عنه ليصبح لامعاً كالسيف، وفيها طباق بين (صدئ) و (مصقول).",
    answerMl: "അജ്ഞനായ വിദ്യാർത്ഥിയെ തുരുമ്പിച്ച ഇരുമ്പിനോടും, അധ്യാപകൻ അവനെ പഠിപ്പിച്ച് ഉത്തമനാക്കുന്നതിനെ മിനുസപ്പെടുത്തിയ വാളിനോടും ഉപമിച്ചിരിക്കുന്നു. (صدئ), (مصقول) എന്നീ വിപരീത പദങ്ങൾ (ത്വബാഖ്) ഇവിടെ ഉപയോഗിച്ചിട്ടുണ്ട്.",
    answerEn: "It is a brilliant metaphor comparing an uneducated student to rusted iron, which the teacher polishes into a shining sword through education. It also uses antithesis (Tabaq) between 'rusted' (Sadi'a) and 'polished' (Masqul).",
    category: "البلاغة والتذوق"
  }
];

