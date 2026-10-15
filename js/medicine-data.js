const medicineData = {
  dolo650: {
  en: {
    name: "Dolo-650",
    generic: "Paracetamol 650 mg",
    type: "Analgesic and Antipyretic",
    uses: "Used for fever and mild to moderate pain.",
    how: "Helps reduce pain and fever by affecting chemical signals involved in pain and temperature regulation.",
    side_effects: "Usually well tolerated. Excessive use can cause serious liver damage.",
    warnings: "Do not combine with other paracetamol-containing medicines without professional advice.",
    avoid: "Avoid if allergic to paracetamol or if you have serious liver disease unless advised by a doctor.",
    interactions: "May interact with some medicines, including certain blood thinners.",
    when: "Use according to the product label or healthcare professional's advice.",
    pregnancy: "Ask a healthcare professional before use during pregnancy or breastfeeding.",
    doctor: "Seek medical advice if fever or pain persists or worsens."
  },
  hi: {
    name: "डोलो-650",
    generic: "पैरासिटामोल 650 mg",
    type: "दर्द निवारक और बुखार कम करने वाली दवा",
    uses: "बुखार और हल्के से मध्यम दर्द में उपयोग किया जाता है।",
    how: "यह दर्द और शरीर के तापमान से जुड़े संकेतों को प्रभावित करके दर्द और बुखार कम करने में मदद करता है।",
    side_effects: "आमतौर पर अच्छी तरह सहन होती है। अधिक मात्रा लीवर को गंभीर नुकसान पहुंचा सकती है।",
    warnings: "पैरासिटामोल वाली दूसरी दवाओं के साथ बिना सलाह के न लें।",
    avoid: "पैरासिटामोल से एलर्जी या गंभीर लीवर की बीमारी होने पर डॉक्टर की सलाह के बिना उपयोग न करें।",
    interactions: "कुछ दवाओं, जैसे कुछ blood thinners, के साथ interaction हो सकता है।",
    when: "लेबल या स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था या स्तनपान में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "बुखार या दर्द बना रहे या बढ़ जाए तो डॉक्टर से सलाह लें।"
  }
},

dolo500: {
  en: {
    name: "Dolo-500",
    generic: "Paracetamol 500 mg",
    type: "Analgesic and Antipyretic",
    uses: "Used for fever and mild to moderate pain.",
    how: "Helps reduce pain and fever by affecting pain and temperature-related chemical signals.",
    side_effects: "Usually well tolerated. Excessive use may cause serious liver damage.",
    warnings: "Avoid taking with other paracetamol-containing medicines unless advised.",
    avoid: "Avoid if allergic to paracetamol or with serious liver disease without medical advice.",
    interactions: "May interact with some medicines, including certain blood thinners.",
    when: "Use according to the label or healthcare professional's advice.",
    pregnancy: "Consult a healthcare professional before use during pregnancy or breastfeeding.",
    doctor: "Seek medical advice if symptoms persist or worsen."
  },
  hi: {
    name: "डोलो-500",
    generic: "पैरासिटामोल 500 mg",
    type: "दर्द निवारक और बुखार कम करने वाली दवा",
    uses: "बुखार और हल्के से मध्यम दर्द में उपयोग किया जाता है।",
    how: "यह दर्द और तापमान से जुड़े रासायनिक संकेतों को प्रभावित करके राहत देने में मदद करता है।",
    side_effects: "आमतौर पर अच्छी तरह सहन होती है। अधिक मात्रा लीवर को नुकसान पहुंचा सकती है।",
    warnings: "पैरासिटामोल वाली दूसरी दवाओं के साथ बिना सलाह के न लें।",
    avoid: "पैरासिटामोल से एलर्जी या गंभीर लीवर की बीमारी में डॉक्टर की सलाह के बिना न लें।",
    interactions: "कुछ दवाओं के साथ interaction हो सकता है।",
    when: "लेबल या स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था या स्तनपान में पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "लक्षण बने रहने या बिगड़ने पर डॉक्टर से सलाह लें।"
  }
},

combiflam: {
  en: {
    name: "Combiflam",
    generic: "Ibuprofen + Paracetamol",
    type: "Analgesic and Antipyretic",
    uses: "Used for pain and fever.",
    how: "The combination helps reduce pain, inflammation and fever.",
    side_effects: "May cause stomach upset, nausea or acidity.",
    warnings: "NSAID-containing medicines may increase the risk of stomach irritation or bleeding.",
    avoid: "Avoid without medical advice if you have stomach ulcers, serious kidney disease or certain NSAID allergies.",
    interactions: "May interact with blood thinners and some other medicines.",
    when: "Use only according to the product label or healthcare professional's advice.",
    pregnancy: "Consult a healthcare professional before use during pregnancy.",
    doctor: "Seek medical advice for severe or persistent symptoms."
  },
  hi: {
    name: "कॉम्बिफ्लैम",
    generic: "इबुप्रोफेन + पैरासिटामोल",
    type: "दर्द निवारक और बुखार कम करने वाली दवा",
    uses: "दर्द और बुखार में उपयोग किया जाता है।",
    how: "यह संयोजन दर्द, सूजन और बुखार कम करने में मदद करता है।",
    side_effects: "पेट खराब, मतली या acidity हो सकती है।",
    warnings: "इसमें मौजूद NSAID से पेट में irritation या bleeding का जोखिम बढ़ सकता है।",
    avoid: "पेट के ulcer, गंभीर kidney disease या कुछ NSAID allergies में बिना डॉक्टर की सलाह के न लें।",
    interactions: "Blood thinners और कुछ अन्य दवाओं के साथ interaction हो सकता है।",
    when: "लेबल या स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "लक्षण गंभीर या लगातार रहने पर डॉक्टर से सलाह लें।"
  }
},

dexona: {
  en: {
    name: "Dexona",
    generic: "Dexamethasone",
    type: "Corticosteroid",
    uses: "Used for certain inflammatory and allergic conditions when prescribed.",
    how: "Reduces inflammation and suppresses excessive immune activity.",
    side_effects: "May cause stomach upset, mood changes, increased blood sugar and other effects.",
    warnings: "Should not be started, stopped or used for prolonged periods without medical supervision.",
    avoid: "Avoid self-use, especially with certain infections or other conditions requiring medical supervision.",
    interactions: "Can interact with several medicines.",
    when: "Take only as prescribed.",
    pregnancy: "Use during pregnancy or breastfeeding only after medical advice.",
    doctor: "Seek medical advice for concerning or persistent symptoms."
  },
  hi: {
    name: "डेक्सोना",
    generic: "डेक्सामेथासोन",
    type: "कॉर्टिकोस्टेरॉइड",
    uses: "कुछ सूजन और एलर्जी संबंधी स्थितियों में डॉक्टर की सलाह से उपयोग किया जाता है।",
    how: "यह सूजन और अत्यधिक immune activity को कम करता है।",
    side_effects: "पेट खराब, mood changes और blood sugar बढ़ने जैसे प्रभाव हो सकते हैं।",
    warnings: "इसे बिना डॉक्टर की निगरानी के शुरू या बंद न करें और लंबे समय तक स्वयं उपयोग न करें।",
    avoid: "बिना सलाह के उपयोग से बचें, खासकर कुछ infections या अन्य विशेष स्थितियों में।",
    interactions: "कई दवाओं के साथ interaction हो सकता है।",
    when: "केवल डॉक्टर की सलाह के अनुसार लें।",
    pregnancy: "गर्भावस्था या स्तनपान में केवल चिकित्सकीय सलाह से उपयोग करें।",
    doctor: "चिंताजनक या लगातार लक्षण होने पर डॉक्टर से सलाह लें।"
  }
},

crocin: {
  en: {
    name: "Crocin",
    generic: "Paracetamol",
    type: "Analgesic and Antipyretic",
    uses: "Used for fever and mild to moderate pain.",
    how: "Helps reduce fever and pain.",
    side_effects: "Usually well tolerated; excessive use may damage the liver.",
    warnings: "Do not combine with other paracetamol-containing medicines without advice.",
    avoid: "Avoid if allergic to paracetamol or with serious liver disease unless advised.",
    interactions: "May interact with some medicines.",
    when: "Use according to the product label or medical advice.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek advice if fever or pain persists."
  },
  hi: {
    name: "क्रोसिन",
    generic: "पैरासिटामोल",
    type: "दर्द निवारक और बुखार कम करने वाली दवा",
    uses: "बुखार और हल्के से मध्यम दर्द में उपयोग किया जाता है।",
    how: "यह बुखार और दर्द कम करने में मदद करता है।",
    side_effects: "आमतौर पर अच्छी तरह सहन होती है; अधिक मात्रा लीवर को नुकसान पहुंचा सकती है।",
    warnings: "पैरासिटामोल वाली दूसरी दवाओं के साथ बिना सलाह के न लें।",
    avoid: "एलर्जी या गंभीर लीवर बीमारी में बिना सलाह के उपयोग न करें।",
    interactions: "कुछ दवाओं के साथ interaction हो सकता है।",
    when: "लेबल या डॉक्टर की सलाह के अनुसार उपयोग करें।",
    pregnancy: "उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "बुखार या दर्द बना रहने पर डॉक्टर से सलाह लें।"
  }
},

calpol: {
  en: {
    name: "Calpol",
    generic: "Paracetamol",
    type: "Analgesic and Antipyretic",
    uses: "Used for fever and pain.",
    how: "Helps reduce fever and pain.",
    side_effects: "Usually well tolerated; excessive use may cause liver damage.",
    warnings: "Avoid combining with other paracetamol-containing medicines without advice.",
    avoid: "Avoid in serious liver disease unless medically advised.",
    interactions: "May interact with some medicines.",
    when: "Use according to the label or professional advice.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek advice if symptoms persist or worsen."
  },
  hi: {
    name: "कैलपोल",
    generic: "पैरासिटामोल",
    type: "दर्द निवारक और बुखार कम करने वाली दवा",
    uses: "बुखार और दर्द में उपयोग किया जाता है।",
    how: "यह बुखार और दर्द कम करने में मदद करता है।",
    side_effects: "आमतौर पर अच्छी तरह सहन होती है; अधिक मात्रा लीवर को नुकसान पहुंचा सकती है।",
    warnings: "पैरासिटामोल वाली दूसरी दवाओं के साथ बिना सलाह के न लें।",
    avoid: "गंभीर लीवर बीमारी में बिना चिकित्सकीय सलाह के उपयोग न करें।",
    interactions: "कुछ दवाओं के साथ interaction हो सकता है।",
    when: "लेबल या स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "लक्षण बने रहने या बिगड़ने पर डॉक्टर से सलाह लें।"
  }
},

brufen: {
  en: {
    name: "Brufen",
    generic: "Ibuprofen",
    type: "NSAID Analgesic",
    uses: "Used for pain, fever and inflammation.",
    how: "Reduces substances involved in pain and inflammation.",
    side_effects: "May cause acidity, stomach upset or nausea.",
    warnings: "NSAIDs can increase the risk of stomach irritation or bleeding.",
    avoid: "Avoid without medical advice with stomach ulcers, certain kidney problems or NSAID allergy.",
    interactions: "May interact with blood thinners and other medicines.",
    when: "Use according to professional advice or product labeling.",
    pregnancy: "Consult a healthcare professional before use, especially during later pregnancy.",
    doctor: "Seek advice for severe or persistent symptoms."
  },
  hi: {
    name: "ब्रूफेन",
    generic: "इबुप्रोफेन",
    type: "NSAID दर्द निवारक",
    uses: "दर्द, बुखार और सूजन में उपयोग किया जाता है।",
    how: "यह दर्द और सूजन से जुड़े पदार्थों को कम करता है।",
    side_effects: "Acidity, पेट खराब या मतली हो सकती है।",
    warnings: "NSAID से पेट में irritation या bleeding का जोखिम बढ़ सकता है।",
    avoid: "पेट के ulcer, कुछ kidney problems या NSAID allergy में बिना सलाह के न लें।",
    interactions: "Blood thinners और अन्य दवाओं के साथ interaction हो सकता है।",
    when: "लेबल या स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था में, खासकर बाद के समय, उपयोग से पहले डॉक्टर से सलाह लें।",
    doctor: "गंभीर या लगातार लक्षणों में डॉक्टर से सलाह लें।"
  }
},

zerodolp: {
  en: {
    name: "Zerodol-P",
    generic: "Aceclofenac + Paracetamol",
    type: "Analgesic and Anti-inflammatory",
    uses: "Used for pain and inflammation.",
    how: "Helps reduce pain and inflammation.",
    side_effects: "May cause acidity, nausea or stomach discomfort.",
    warnings: "Should be used carefully because it contains an NSAID.",
    avoid: "Avoid self-use with stomach ulcers, certain kidney problems or NSAID allergy.",
    interactions: "May interact with blood thinners and other medicines.",
    when: "Use only as advised by a healthcare professional.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek advice if pain persists or worsens."
  },
  hi: {
    name: "ज़ेरोडोल-P",
    generic: "ऐसिक्लोफेनाक + पैरासिटामोल",
    type: "दर्द निवारक और सूजन कम करने वाली दवा",
    uses: "दर्द और सूजन में उपयोग किया जाता है।",
    how: "यह दर्द और सूजन कम करने में मदद करता है।",
    side_effects: "Acidity, मतली या पेट में discomfort हो सकता है।",
    warnings: "इसमें NSAID होता है, इसलिए सावधानी जरूरी है।",
    avoid: "पेट के ulcer, कुछ kidney problems या NSAID allergy में स्वयं उपयोग न करें।",
    interactions: "Blood thinners और अन्य दवाओं के साथ interaction हो सकता है।",
    when: "केवल स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "दर्द बना रहे या बढ़ जाए तो डॉक्टर से सलाह लें।"
  }
},

voveran: {
  en: {
    name: "Voveran",
    generic: "Diclofenac",
    type: "NSAID Analgesic",
    uses: "Used for pain and inflammation.",
    how: "Reduces substances involved in pain and inflammation.",
    side_effects: "May cause acidity, nausea or stomach discomfort.",
    warnings: "Longer or inappropriate use can increase stomach, kidney and cardiovascular risks.",
    avoid: "Avoid self-use if you have stomach ulcers, certain kidney problems or NSAID allergy.",
    interactions: "Can interact with blood thinners and several other medicines.",
    when: "Use only as directed by a healthcare professional.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek medical advice if pain is severe or persistent."
  },
  hi: {
    name: "वोवेरान",
    generic: "डिक्लोफेनाक",
    type: "NSAID दर्द निवारक",
    uses: "दर्द और सूजन में उपयोग किया जाता है।",
    how: "यह दर्द और सूजन से जुड़े पदार्थों को कम करता है।",
    side_effects: "Acidity, मतली या पेट में discomfort हो सकता है।",
    warnings: "गलत या लंबे समय तक उपयोग से पेट, kidney और cardiovascular risks बढ़ सकते हैं।",
    avoid: "पेट के ulcer, कुछ kidney problems या NSAID allergy में स्वयं उपयोग न करें।",
    interactions: "Blood thinners और कई अन्य दवाओं के साथ interaction हो सकता है।",
    when: "केवल स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
    pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "दर्द गंभीर या लगातार रहने पर डॉक्टर से सलाह लें।"
  }
},

augmentin: {
  en: {
    name: "Augmentin",
    generic: "Amoxicillin + Clavulanic Acid",
    type: "Antibiotic",
    uses: "Used for certain bacterial infections when prescribed.",
    how: "Stops bacterial growth and helps overcome certain bacterial resistance.",
    side_effects: "May cause diarrhea, nausea or stomach upset.",
    warnings: "Use only when prescribed and complete the prescribed course.",
    avoid: "Avoid if you have a serious penicillin allergy unless specifically advised by a doctor.",
    interactions: "Can interact with certain medicines.",
    when: "Take exactly as prescribed.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek medical advice for allergic reactions or worsening infection symptoms."
  },
  hi: {
    name: "ऑगमेंटिन",
    generic: "अमोक्सिसिलिन + क्लैवुलैनिक एसिड",
    type: "एंटीबायोटिक",
    uses: "कुछ bacterial infections में डॉक्टर की सलाह से उपयोग किया जाता है।",
    how: "यह bacteria की growth रोकने में मदद करता है।",
    side_effects: "Diarrhea, मतली या पेट खराब हो सकता है।",
    warnings: "केवल डॉक्टर की सलाह से उपयोग करें और prescribed course पूरा करें।",
    avoid: "गंभीर penicillin allergy होने पर बिना डॉक्टर की सलाह के न लें।",
    interactions: "कुछ दवाओं के साथ interaction हो सकता है।",
    when: "केवल prescribed तरीके से लें।",
    pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "एलर्जी या infection के लक्षण बिगड़ने पर तुरंत चिकित्सकीय सलाह लें।"
  }
},

azithral: {
  en: {
    name: "Azithral",
    generic: "Azithromycin",
    type: "Macrolide Antibiotic",
    uses: "Used for certain bacterial infections when prescribed.",
    how: "Stops bacteria from making proteins needed for growth.",
    side_effects: "May cause nausea, diarrhea or stomach discomfort.",
    warnings: "Do not use antibiotics unnecessarily or for viral infections.",
    avoid: "Avoid if allergic to azithromycin or related antibiotics unless medically advised.",
    interactions: "May interact with several medicines.",
    when: "Use exactly as prescribed.",
    pregnancy: "Consult a healthcare professional before use.",
    doctor: "Seek medical advice if infection symptoms worsen or an allergic reaction occurs."
  },
  hi: {
    name: "एज़िथ्रल",
    generic: "एज़िथ्रोमाइसिन",
    type: "मैक्रोलाइड एंटीबायोटिक",
    uses: "कुछ bacterial infections में डॉक्टर की सलाह से उपयोग किया जाता है।",
    how: "यह bacteria द्वारा growth के लिए जरूरी proteins बनाने की प्रक्रिया को रोकता है।",
    side_effects: "मतली, diarrhea या पेट में discomfort हो सकता है।",
    warnings: "Antibiotics का अनावश्यक उपयोग या viral infection में उपयोग न करें।",
    avoid: "एज़िथ्रोमाइसिन या संबंधित antibiotics से allergy होने पर बिना सलाह के न लें।",
    interactions: "कई दवाओं के साथ interaction हो सकता है।",
    when: "केवल prescribed तरीके से लें।",
    pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
    doctor: "लक्षण बिगड़ने या allergy होने पर डॉक्टर से सलाह लें।"
  }
},
  paracetamol: {
    en: {
      name: "Paracetamol",
      generic: "Paracetamol (Acetaminophen)",
      type: "Analgesic and Antipyretic",
      uses: "Used to treat fever and mild to moderate pain.",
      how: "Works by blocking certain chemical messengers in the brain that cause pain and fever.",
      side_effects: "Generally well-tolerated. Rarely, it can cause allergic reactions or liver issues if taken in excess.",
      warnings: "Excessive use can cause severe liver toxicity. Some cold and flu medicines also contain paracetamol, so check labels to avoid double dosing.",
      avoid: "Avoid if you have a known allergy to paracetamol or severe liver disease.",
      interactions: "May interact with certain medications like warfarin or other drugs affecting the liver.",
      when: "Usually taken as needed for fever or pain.",
      pregnancy: "Generally considered safe during pregnancy when used as directed, but consult a doctor.",
      doctor: "Consult a doctor if fever persists for more than 3 days or pain for more than 5-7 days."
    },
    hi: {
      name: "पैरासिटामोल",
      generic: "पैरासिटामोल (एसिटामिनोफेन)",
      type: "दर्द निवारक और बुखार कम करने वाली दवा",
      uses: "बुखार और हल्के से मध्यम दर्द के इलाज के लिए उपयोग किया जाता है।",
      how: "यह दिमाग में कुछ रसायनों को रोककर काम करता है जो दर्द और बुखार का कारण बनते हैं।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है। दुर्लभ रूप से, इससे एलर्जी या लीवर की समस्या हो सकती है।",
      warnings: "जरूरत से ज्यादा इस्तेमाल से लीवर को गंभीर नुकसान हो सकता है। कुछ खांसी-जुकाम की दवाओं में भी पैरासिटामोल होता है, इसलिए दोहरा खुराक से बचें।",
      avoid: "यदि आपको पैरासिटामोल से एलर्जी है या गंभीर लीवर की बीमारी है, तो इससे बचें।",
      interactions: "कुछ दवाओं जैसे वारफेरिन या लीवर को प्रभावित करने वाली अन्य दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर बुखार या दर्द के लिए जरूरत पड़ने पर लिया जाता है।",
      pregnancy: "गर्भावस्था में निर्देशानुसार उपयोग करने पर आमतौर पर सुरक्षित माना जाता है, लेकिन डॉक्टर से सलाह लें।",
      doctor: "यदि बुखार 3 दिन से अधिक या दर्द 5-7 दिन से अधिक रहे, तो डॉक्टर से संपर्क करें।"
    }
  },
  ibuprofen: {
    en: {
      name: "Ibuprofen",
      generic: "Ibuprofen",
      type: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      uses: "Used for pain, fever, and inflammation.",
      how: "Belongs to the NSAID class. It works by blocking enzymes that produce prostaglandins, which cause pain and inflammation.",
      side_effects: "Stomach upset, nausea, dizziness. Severe risks include stomach bleeding, kidney issues, and cardiovascular events.",
      warnings: "NSAID class. Risk of stomach bleeding, kidney damage, and cardiovascular issues. Avoid in later pregnancy.",
      avoid: "Avoid if you have a history of stomach ulcers, severe kidney/heart disease, or NSAID allergy.",
      interactions: "Interacts with blood thinners, some blood pressure medicines, and other NSAIDs.",
      when: "Taken with food to reduce stomach upset, as needed for pain or fever.",
      pregnancy: "Avoid especially in the later stages of pregnancy as it may harm the unborn baby.",
      doctor: "Consult a doctor if you experience severe stomach pain, black stools, or if symptoms persist."
    },
    hi: {
      name: "इबुप्रोफेन",
      generic: "इबुप्रोफेन",
      type: "नॉन-स्टेरॉयडल एंटी-इंफ्लेमेटरी ड्रग (NSAID)",
      uses: "दर्द, बुखार और सूजन के लिए उपयोग किया जाता है।",
      how: "यह NSAID वर्ग की दवा है। यह उन एंजाइमों को रोकता है जो दर्द और सूजन पैदा करने वाले रसायन बनाते हैं।",
      side_effects: "पेट खराब होना, मिचली, चक्कर आना। गंभीर जोखिमों में पेट में खून आना, किडनी की समस्या और हृदय संबंधी समस्याएं शामिल हैं।",
      warnings: "NSAID वर्ग। पेट में खून आने, किडनी को नुकसान और हृदय संबंधी समस्याओं का खतरा। गर्भावस्था के अंतिम चरण में बचें।",
      avoid: "यदि आपको पेट के अल्सर, गंभीर किडनी/हृदय रोग या NSAID से एलर्जी का इतिहास है, तो इससे बचें।",
      interactions: "खून पतला करने वाली दवाओं, कुछ ब्लड प्रेशर की दवाओं और अन्य NSAIDs के साथ प्रतिक्रिया करता है।",
      when: "पेट की जलन कम करने के लिए भोजन के साथ, दर्द या बुखार के लिए जरूरत पड़ने पर लिया जाता है।",
      pregnancy: "विशेष रूप से गर्भावस्था के अंतिम चरण में इससे बचें क्योंकि यह unborn बच्चे को नुकसान पहुंचा सकता है।",
      doctor: "यदि आपको गंभीर पेट दर्द, काले मल, या लक्षण बने रहें तो डॉक्टर से सलाह लें।"
    }
  },
  cetirizine: {
    en: {
      name: "Cetirizine",
      generic: "Cetirizine",
      type: "Antihistamine",
      uses: "Used to relieve allergy symptoms like runny nose, sneezing, and itching.",
      how: "It is an antihistamine that blocks histamine, a chemical released during allergic reactions.",
      side_effects: "May cause drowsiness, dry mouth, or fatigue.",
      warnings: "Can cause drowsiness. Use caution when driving or operating machinery.",
      avoid: "Avoid alcohol and other sedating medicines as they can increase sleepiness. Use with caution if you have kidney disease.",
      interactions: "May interact with other central nervous system depressants.",
      when: "Usually taken as directed for allergy relief.",
      pregnancy: "Consult a doctor before use during pregnancy or breastfeeding.",
      doctor: "Consult a doctor if allergy symptoms do not improve or if you have a severe allergic reaction."
    },
    hi: {
      name: "सेटिरिज़ाइन",
      generic: "सेटिरिज़ाइन",
      type: "एंटीहिस्टामाइन",
      uses: "बहते नाक, छींक और खुजली जैसे एलर्जी के लक्षणों को राहत देने के लिए उपयोग किया जाता है।",
      how: "यह एक एंटीहिस्टामाइन है जो हिस्टामाइन को रोकता है, जो एलर्जी प्रतिक्रिया के दौरान निकलने वाला रसायन है।",
      side_effects: "उनींदापन, मुंह सूखना या थकान हो सकती है।",
      warnings: "इससे उनींदापन आ सकता है। ड्राइविंग या मशीन चलाने पर सावधानी बरतें।",
      avoid: "शराब और अन्य नींद लाने वाली दवाओं से बचें क्योंकि ये उनींदापन बढ़ा सकती हैं। किडनी की बीमारी होने पर सावधानी से उपयोग करें।",
      interactions: "केंद्रीय तंत्रिका तंत्र को धीमा करने वाली अन्य दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर एलर्जी राहत के लिए निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था या स्तनपान के दौरान उपयोग करने से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि एलर्जी के लक्षण ठीक न हों या गंभीर एलर्जी प्रतिक्रिया हो तो डॉक्टर से संपर्क करें।"
    }
  },
  loratadine: {
    en: {
      name: "Loratadine",
      generic: "Loratadine",
      type: "Antihistamine",
      uses: "Used to treat allergy symptoms such as sneezing, runny nose, and itchy eyes.",
      how: "An antihistamine that blocks the action of histamine to reduce allergic reactions.",
      side_effects: "Headache, dry mouth, and mild drowsiness may occur.",
      warnings: "Generally less sedating, but mild drowsiness can still happen.",
      avoid: "Use with caution if you have liver or kidney disease.",
      interactions: "Some medicines can interact with it; inform your doctor of all medications you take.",
      when: "Typically taken as directed for allergy symptom relief.",
      pregnancy: "Consult a healthcare provider before using during pregnancy.",
      doctor: "See a doctor if symptoms persist or if you experience an allergic reaction to the medicine."
    },
    hi: {
      name: "लोरैटाडाइन",
      generic: "लोरैटाडाइन",
      type: "एंटीहिस्टामाइन",
      uses: "छींक, बहती नाक और खुजली भरी आंखों जैसे एलर्जी के लक्षणों के इलाज के लिए उपयोग किया जाता है।",
      how: "यह एक एंटीहिस्टामाइन है जो एलर्जी प्रतिक्रियाओं को कम करने के लिए हिस्टामाइन की कार्रवाई को रोकता है।",
      side_effects: "सिरदर्द, मुंह सूखना और हल्का उनींदापन हो सकता है।",
      warnings: "आमतौर पर कम नींद लाने वाला, लेकिन हल्का उनींदापन फिर भी हो सकता है।",
      avoid: "यदि आपको लीवर या किडनी की बीमारी है तो सावधानी से उपयोग करें।",
      interactions: "कुछ दवाएं इसके साथ प्रतिक्रिया कर सकती हैं; अपनी सभी दवाओं के बारे में डॉक्टर को बताएं।",
      when: "आमतौर पर एलर्जी के लक्षणों से राहत के लिए निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था के दौरान उपयोग करने से पहले स्वास्थ्य सेवा प्रदाता से सलाह लें।",
      doctor: "यदि लक्षण बने रहें या आपको दवा से एलर्जी प्रतिक्रिया हो तो डॉक्टर को दिखाएं।"
    }
  },
  omeprazole: {
    en: {
      name: "Omeprazole",
      generic: "Omeprazole",
      type: "Proton Pump Inhibitor (PPI)",
      uses: "Used for acidity, acid reflux (GERD), and certain ulcer conditions.",
      how: "It is a proton pump inhibitor (PPI) that reduces the amount of acid produced in the stomach.",
      side_effects: "Headache, nausea, stomach upset, diarrhea, or gas.",
      warnings: "Long-term use should be reviewed by a healthcare professional due to potential risks like bone fractures or vitamin deficiencies.",
      avoid: "Avoid if you have a known allergy to PPIs.",
      interactions: "Can interact with several medicines, including certain blood thinners and HIV medications.",
      when: "Usually taken before meals, as directed.",
      pregnancy: "Consult a doctor before use during pregnancy or breastfeeding.",
      doctor: "Consult a doctor if symptoms do not improve after a few weeks or if you experience severe side effects."
    },
    hi: {
      name: "ओमेप्राज़ोल",
      generic: "ओमेप्राज़ोल",
      type: "प्रोटॉन पंप इनहिबिटर (PPI)",
      uses: "एसिडिटी, एसिड रिफ्लक्स (GERD) और कुछ अल्सर की स्थितियों के लिए उपयोग किया जाता है।",
      how: "यह एक प्रोटॉन पंप इनहिबिटर (PPI) है जो पेट में बनने वाले एसिड की मात्रा को कम करता है।",
      side_effects: "सिरदर्द, मिचली, पेट खराब होना, दस्त या गैस।",
      warnings: "हड्डियों के फ्रैक्चर या विटामिन की कमी जैसे संभावित जोखिमों के कारण लंबे समय तक उपयोग की समीक्षा डॉक्टर को करनी चाहिए।",
      avoid: "यदि आपको PPIs से एलर्जी है तो इससे बचें।",
      interactions: "कुछ खून पतला करने वाली दवाओं और HIV दवाओं सहित कई दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर भोजन से पहले, निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था या स्तनपान के दौरान उपयोग करने से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि कुछ हफ्तों बाद लक्षणों में सुधार न हो या गंभीर दुष्प्रभाव हों तो डॉक्टर से संपर्क करें।"
    }
  },
  pantoprazole: {
    en: {
      name: "Pantoprazole",
      generic: "Pantoprazole",
      type: "Proton Pump Inhibitor (PPI)",
      uses: "Used to treat acidity, acid reflux, and certain ulcer conditions.",
      how: "A proton pump inhibitor (PPI) that decreases stomach acid production.",
      side_effects: "Headache, nausea, diarrhea, or stomach pain.",
      warnings: "Requires long-term medical supervision if used continuously to monitor for potential side effects.",
      avoid: "Avoid if allergic to pantoprazole or similar medicines.",
      interactions: "May interact with other medications, altering their effectiveness.",
      when: "Typically taken before a meal, as directed.",
      pregnancy: "Use only if clearly needed and advised by a doctor during pregnancy.",
      doctor: "Consult a doctor if your condition worsens or if you experience persistent diarrhea."
    },
    hi: {
      name: "पैंटोप्राज़ोल",
      generic: "पैंटोप्राज़ोल",
      type: "प्रोटॉन पंप इनहिबिटर (PPI)",
      uses: "एसिडिटी, एसिड रिफ्लक्स और कुछ अल्सर की स्थितियों के इलाज के लिए उपयोग किया जाता है।",
      how: "यह एक प्रोटॉन पंप इनहिबिटर (PPI) है जो पेट में एसिड के उत्पादन को कम करता है।",
      side_effects: "सिरदर्द, मिचली, दस्त या पेट दर्द।",
      warnings: "यदि लगातार उपयोग किया जाता है तो संभावित दुष्प्रभावों की निगरानी के लिए लंबे समय तक चिकित्सा देखरेख की आवश्यकता होती है।",
      avoid: "यदि पैंटोप्राज़ोल या समान दवाओं से एलर्जी है तो इससे बचें।",
      interactions: "अन्य दवाओं के साथ प्रतिक्रिया कर सकता है, जिससे उनकी प्रभावशीलता बदल सकती है।",
      when: "आमतौर पर भोजन से पहले, निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था के दौरान केवल तभी उपयोग करें जब स्पष्ट रूप से आवश्यक हो और डॉक्टर की सलाह पर।",
      doctor: "यदि आपकी स्थिति खराब हो या लगातार दस्त हो तो डॉक्टर से सलाह लें।"
    }
  },
  ors: {
    en: {
      name: "ORS",
      generic: "Oral Rehydration Salts",
      type: "Electrolyte Replenisher",
      uses: "Used to replace fluids and electrolytes lost during diarrhea or vomiting.",
      how: "Provides a balanced mix of water and salts to help the body absorb fluids efficiently.",
      side_effects: "Generally safe. Rarely, nausea or vomiting if consumed too quickly.",
      warnings: "Prepare strictly according to the packet's instructions. Severe dehydration requires immediate medical care.",
      avoid: "Do not add extra sugar or salt to the prepared solution.",
      interactions: "Generally does not interact with medicines, but inform your doctor if you have kidney or heart conditions.",
      when: "Taken as needed during episodes of diarrhea, vomiting, or heavy sweating.",
      pregnancy: "Safe and often recommended during pregnancy to prevent dehydration.",
      doctor: "Seek urgent medical care if there are signs of severe dehydration, such as extreme thirst, very dry mouth, or lack of urination."
    },
    hi: {
      name: "ORS",
      generic: "ओरल रीहाइड्रेशन सॉल्ट्स",
      type: "इलेक्ट्रोलाइट रिप्लेनिशर",
      uses: "दस्त या उल्टी के दौरान खोए गए तरल पदार्थों और इलेक्ट्रोलाइट्स को बदलने के लिए उपयोग किया जाता है।",
      how: "शरीर को तरल पदार्थों को कुशलता से अवशोषित करने में मदद करने के लिए पानी और नमकों का संतुलित मिश्रण प्रदान करता है।",
      side_effects: "आमतौर पर सुरक्षित। दुर्लभ रूप से, बहुत तेजी से पीने पर मिचली या उल्टी हो सकती है।",
      warnings: "पैकेट के निर्देशों के अनुसार ही तैयार करें। गंभीर निर्जलीकरण के लिए तुरंत चिकित्सा देखभाल की आवश्यकता होती है।",
      avoid: "तैयार किए गए घोल में अतिरिक्त चीनी या नमक न मिलाएं।",
      interactions: "आमतौर पर दवाओं के साथ प्रतिक्रिया नहीं करता है, लेकिन यदि आपको किडनी या हृदय की स्थिति है तो डॉक्टर को बताएं।",
      when: "दस्त, उल्टी या भारी पसीना आने के एपिसोड के दौरान जरूरत के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था के दौरान निर्जलीकरण को रोकने के लिए सुरक्षित और अक्सर अनुशंसित।",
      doctor: "यदि गंभीर निर्जलीकरण के लक्षण हों, जैसे अत्यधिक प्यास, मुंह बहुत सूखना, या पेशाब की कमी, तो तुरंत चिकित्सा सहायता लें।"
    }
  },
  antacid: {
    en: {
      name: "Antacid",
      generic: "Antacid (Formulation varies)",
      type: "Antacid",
      uses: "Provides temporary relief from acidity, heartburn, and indigestion.",
      how: "Neutralizes existing stomach acid to provide quick relief.",
      side_effects: "Constipation or diarrhea depending on the specific formulation.",
      warnings: "Ingredients vary by product. Use with caution if you have kidney disease.",
      avoid: "Avoid if you have a known allergy to any antacid ingredients.",
      interactions: "Antacids can affect the absorption of some other medicines; take them a few hours apart from other medications.",
      when: "Taken as needed, usually after meals or at bedtime for symptom relief.",
      pregnancy: "Generally safe, but consult a doctor before regular use during pregnancy.",
      doctor: "Consult a doctor if you need to use antacids frequently or if symptoms persist."
    },
    hi: {
      name: "एंटासिड",
      generic: "एंटासिड (फॉर्मूलेशन भिन्न होता है)",
      type: "एंटासिड",
      uses: "एसिडिटी, सीने में जलन और अपच से अस्थायी राहत प्रदान करता है।",
      how: "त्वरित राहत प्रदान करने के लिए मौजूदा पेट के एसिड को बेअसर करता है।",
      side_effects: "विशिष्ट फॉर्मूलेशन के आधार पर कब्ज या दस्त।",
      warnings: "उत्पाद के अनुसार सामग्री भिन्न होती है। यदि आपको किडनी की बीमारी है तो सावधानी से उपयोग करें।",
      avoid: "यदि आपको किसी भी एंटासिड सामग्री से एलर्जी है तो इससे बचें।",
      interactions: "एंटासिड कुछ अन्य दवाओं के अवशोषण को प्रभावित कर सकते हैं; उन्हें अन्य दवाओं से कुछ घंटे अलग लें।",
      when: "जरूरत पड़ने पर लिया जाता है, आमतौर पर भोजन के बाद या लक्षण राहत के लिए रात को सोते समय।",
      pregnancy: "आमतौर पर सुरक्षित, लेकिन गर्भावस्था के दौरान नियमित उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि आपको बार-बार एंटासिड का उपयोग करना पड़े या लक्षण बने रहें तो डॉक्टर से संपर्क करें।"
    }
  },
  amoxicillin: {
    en: {
      name: "Amoxicillin",
      generic: "Amoxicillin",
      type: "Antibiotic (Penicillin class)",
      uses: "An antibiotic used to treat certain bacterial infections when prescribed by a doctor.",
      how: "Works by stopping the growth of bacteria.",
      side_effects: "Diarrhea, nausea, or skin rash.",
      warnings: "It does not treat viral infections like colds or flu. Must complete the full prescribed course to prevent resistance.",
      avoid: "Avoid if you have a known penicillin allergy.",
      interactions: "May interact with certain medicines, including blood thinners and other antibiotics.",
      when: "Taken at evenly spaced intervals as prescribed by the doctor.",
      pregnancy: "Generally considered safe during pregnancy if prescribed, but always inform your doctor.",
      doctor: "Consult a doctor if you develop a severe rash, persistent diarrhea, or signs of a new infection."
    },
    hi: {
      name: "अमोक्सिसिलिन",
      generic: "अमोक्सिसिलिन",
      type: "एंटीबायोटिक (पेनिसिलिन वर्ग)",
      uses: "डॉक्टर द्वारा निर्धारित किए जाने पर कुछ बैक्टीरियल संक्रमणों के इलाज के लिए उपयोग की जाने वाली एंटीबायोटिक।",
      how: "बैक्टीरिया की वृद्धि को रोककर काम करता है।",
      side_effects: "दस्त, मिचली या त्वचा पर लाल चकत्ते।",
      warnings: "यह सर्दी या फ्लू जैसे वायरल संक्रमणों का इलाज नहीं करता है। प्रतिरोध को रोकने के लिए निर्धारित पूरा कोर्स पूरा करना जरूरी है।",
      avoid: "यदि आपको पेनिसिलिन से एलर्जी है तो इससे बचें।",
      interactions: "खून पतला करने वाली दवाओं और अन्य एंटीबायोटिक्स सहित कुछ दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर द्वारा निर्धारित अनुसार समान अंतराल पर लिया जाता है।",
      pregnancy: "यदि निर्धारित किया जाए तो गर्भावस्था के दौरान आमतौर पर सुरक्षित माना जाता है, लेकिन हमेशा डॉक्टर को बताएं।",
      doctor: "यदि आपको गंभीर चकत्ते, लगातार दस्त या नए संक्रमण के लक्षण दिखाई दें तो डॉक्टर से संपर्क करें।"
    }
  },
  azithromycin: {
    en: {
      name: "Azithromycin",
      generic: "Azithromycin",
      type: "Antibiotic (Macrolide class)",
      uses: "An antibiotic used to treat certain bacterial infections.",
      how: "Stops bacteria from multiplying and spreading.",
      side_effects: "Nausea, diarrhea, stomach pain, or headache.",
      warnings: "Not for routine viral colds or flu. Possible heart-rhythm risk in susceptible individuals.",
      avoid: "Use with caution if you have liver disease or a history of heart rhythm issues.",
      interactions: "Can interact with several medications, including some antacids and blood thinners.",
      when: "Usually taken as directed, with or without food.",
      pregnancy: "Use only if clearly needed and prescribed by a doctor during pregnancy.",
      doctor: "Consult a doctor if you experience severe diarrhea, yellowing of eyes/skin, or irregular heartbeat."
    },
    hi: {
      name: "एज़िथ्रोमाइसिन",
      generic: "एज़िथ्रोमाइसिन",
      type: "एंटीबायोटिक (मैक्रोलाइड वर्ग)",
      uses: "कुछ बैक्टीरियल संक्रमणों के इलाज के लिए उपयोग की जाने वाली एंटीबायोटिक।",
      how: "बैक्टीरिया को गुणा करने और फैलने से रोकता है।",
      side_effects: "मिचली, दस्त, पेट दर्द या सिरदर्द।",
      warnings: "सामान्य वायरल सर्दी या फ्लू के लिए नहीं। संवेदनशील व्यक्तियों में हृदय गति के जोखिम की संभावना।",
      avoid: "यदि आपको लीवर की बीमारी या हृदय गति की समस्या का इतिहास है तो सावधानी से उपयोग करें।",
      interactions: "कुछ एंटासिड और खून पतला करने वाली दवाओं सहित कई दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर निर्देशानुसार, भोजन के साथ या बिना लिया जाता है।",
      pregnancy: "गर्भावस्था के दौरान केवल तभी उपयोग करें जब स्पष्ट रूप से आवश्यक हो और डॉक्टर द्वारा निर्धारित किया जाए।",
      doctor: "यदि आपको गंभीर दस्त, आंखों/त्वचा का पीला पड़ना, या अनियमित हृदय गति हो तो डॉक्टर से सलाह लें।"
    }
  },
  metronidazole: {
    en: {
      name: "Metronidazole",
      generic: "Metronidazole",
      type: "Antibiotic and Antiprotozoal",
      uses: "Used to treat certain bacterial and protozoal infections when prescribed.",
      how: "Kills sensitive bacteria and parasites by damaging their DNA.",
      side_effects: "Nausea, diarrhea, and a metallic taste in the mouth.",
      warnings: "Strictly avoid alcohol during treatment and for the period advised by your clinician to prevent severe reactions.",
      avoid: "Avoid if you have severe liver or neurological conditions.",
      interactions: "Interacts with several medicines, including some blood thinners like warfarin.",
      when: "Taken with food or milk to reduce stomach upset, as prescribed.",
      pregnancy: "Consult a doctor before use, especially in the first trimester of pregnancy.",
      doctor: "Consult a doctor if you experience numbness, tingling, or persistent nausea."
    },
    hi: {
      name: "मेट्रोनिडाज़ोल",
      generic: "मेट्रोनिडाज़ोल",
      type: "एंटीबायोटिक और एंटीप्रोटोजोअल",
      uses: "निर्धारित किए जाने पर कुछ बैक्टीरियल और प्रोटोजोअल संक्रमणों के इलाज के लिए उपयोग किया जाता है।",
      how: "उनके डीएनए को नुकसान पहुंचाकर संवेदनशील बैक्टीरिया और परजीवियों को मारता है।",
      side_effects: "मिचली, दस्त और मुंह में धातु जैसा स्वाद।",
      warnings: "गंभीर प्रतिक्रियाओं को रोकने के लिए उपचार के दौरान और अपने चिकित्सक द्वारा सलाह दिए गए समय तक शराब का पूरी तरह से सेवन न करें।",
      avoid: "यदि आपको गंभीर लीवर या न्यूरोलॉजिकल स्थितियां हैं तो इससे बचें।",
      interactions: "वारफेरिन जैसे कुछ खून पतला करने वाली दवाओं सहित कई दवाओं के साथ प्रतिक्रिया करता है।",
      when: "पेट की जलन को कम करने के लिए भोजन या दूध के साथ लिया जाता है, जैसा कि निर्धारित किया गया है।",
      pregnancy: "उपयोग करने से पहले डॉक्टर से सलाह लें, विशेष रूप से गर्भावस्था की पहली तिमाही में।",
      doctor: "यदि आपको सुन्नता, झनझनाहट या लगातार मिचली हो तो डॉक्टर से संपर्क करें।"
    }
  },
  diclofenac: {
    en: {
      name: "Diclofenac",
      generic: "Diclofenac",
      type: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      uses: "Used to relieve pain and inflammation.",
      how: "An NSAID that reduces hormones causing inflammation and pain in the body.",
      side_effects: "Stomach upset. Serious risks include stomach bleeding, kidney problems, and cardiovascular events.",
      warnings: "NSAID class. Avoid if you have a history of NSAID allergy, stomach ulcers, or relevant heart conditions.",
      avoid: "Avoid in late pregnancy and if you have severe kidney, liver, or heart disease.",
      interactions: "Interacts with blood thinners, blood pressure medicines, and other NSAIDs.",
      when: "Taken with food or milk to prevent stomach irritation, as directed.",
      pregnancy: "Avoid during pregnancy, especially in the third trimester, unless directed by a doctor.",
      doctor: "Seek medical help if you experience chest pain, shortness of breath, or black/tarry stools."
    },
    hi: {
      name: "डिक्लोफेनैक",
      generic: "डिक्लोफेनैक",
      type: "नॉन-स्टेरॉयडल एंटी-इंफ्लेमेटरी ड्रग (NSAID)",
      uses: "दर्द और सूजन से राहत देने के लिए उपयोग किया जाता है।",
      how: "एक NSAID जो शरीर में सूजन और दर्द पैदा करने वाले हार्मोन को कम करता है।",
      side_effects: "पेट खराब होना। गंभीर जोखिमों में पेट में खून आना, किडनी की समस्या और हृदय संबंधी घटनाएं शामिल हैं।",
      warnings: "NSAID वर्ग। यदि आपको NSAID एलर्जी, पेट के अल्सर या प्रासंगिक हृदय स्थितियों का इतिहास है तो बचें।",
      avoid: "गर्भावस्था के अंत में और यदि आपको गंभीर किडनी, लीवर या हृदय रोग है तो इससे बचें।",
      interactions: "खून पतला करने वाली दवाओं, ब्लड प्रेशर की दवाओं और अन्य NSAIDs के साथ प्रतिक्रिया करता है।",
      when: "पेट की जलन को रोकने के लिए भोजन या दूध के साथ लिया जाता है, जैसा कि निर्देशित किया गया है।",
      pregnancy: "गर्भावस्था के दौरान, विशेष रूप से तीसरी तिमाही में, डॉक्टर के निर्देश के बिना इससे बचें।",
      doctor: "यदि आपको छाती में दर्द, सांस लेने में तकलीफ या काले/टार जैसे मल हों तो चिकित्सा सहायता लें।"
    }
  },
  naproxen: {
    en: {
      name: "Naproxen",
      generic: "Naproxen",
      type: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      uses: "Used for pain, inflammation, and certain types of menstrual pain.",
      how: "An NSAID that blocks the production of prostaglandins, reducing pain and swelling.",
      side_effects: "Stomach pain, heartburn. Risks include stomach bleeding, kidney issues, and cardiovascular events.",
      warnings: "NSAID class. Can cause serious stomach and heart risks. Use the lowest effective dose for the shortest time.",
      avoid: "Avoid if you have asthma, stomach ulcers, or are in the later stages of pregnancy.",
      interactions: "Interacts with blood thinners, certain blood pressure drugs, and other NSAIDs.",
      when: "Taken with a full glass of water and food to reduce stomach upset.",
      pregnancy: "Avoid in later pregnancy as it may cause harm to the unborn baby.",
      doctor: "Consult a doctor if you notice swelling, unusual weight gain, or signs of stomach bleeding."
    },
    hi: {
      name: "नेप्रोक्सेन",
      generic: "नेप्रोक्सेन",
      type: "नॉन-स्टेरॉयडल एंटी-इंफ्लेमेटरी ड्रग (NSAID)",
      uses: "दर्द, सूजन और मासिक धर्म दर्द के कुछ प्रकारों के लिए उपयोग किया जाता है।",
      how: "एक NSAID जो प्रोस्टाग्लैंडिन के उत्पादन को रोकता है, जिससे दर्द और सूजन कम होती है।",
      side_effects: "पेट दर्द, सीने में जलन। जोखिमों में पेट में खून आना, किडनी की समस्याएं और हृदय संबंधी घटनाएं शामिल हैं।",
      warnings: "NSAID वर्ग। गंभीर पेट और हृदय के जोखिम हो सकते हैं। सबसे कम प्रभावी खुराक का उपयोग सबसे कम समय के लिए करें।",
      avoid: "यदि आपको अस्थमा, पेट के अल्सर हैं या आप गर्भावस्था के अंतिम चरण में हैं तो इससे बचें।",
      interactions: "खून पतला करने वाली दवाओं, कुछ ब्लड प्रेशर की दवाओं और अन्य NSAIDs के साथ प्रतिक्रिया करता है।",
      when: "पेट की जलन को कम करने के लिए पानी और भोजन के साथ लिया जाता है।",
      pregnancy: "बाद की गर्भावस्था में इससे बचें क्योंकि यह unborn बच्चे को नुकसान पहुंचा सकता है।",
      doctor: "यदि आपको सूजन, असामान्य वजन बढ़ना या पेट में खून आने के लक्षण दिखाई दें तो डॉक्टर से सलाह लें।"
    }
  },
  fexofenadine: {
    en: {
      name: "Fexofenadine",
      generic: "Fexofenadine",
      type: "Antihistamine",
      uses: "Used to relieve allergy symptoms such as sneezing, runny nose, and skin itching.",
      how: "A non-drowsy antihistamine that blocks histamine receptors.",
      side_effects: "Headache, nausea, or mild dizziness.",
      warnings: "Generally non-drowsy, but some individuals may still feel sleepy.",
      avoid: "Use with caution if you have kidney disease. Avoid taking with certain fruit juices (like apple, orange, grapefruit) as they can reduce absorption.",
      interactions: "Antacids containing aluminum or magnesium can affect its absorption if taken too close together.",
      when: "Usually taken with water as directed.",
      pregnancy: "Consult a doctor before using during pregnancy or breastfeeding.",
      doctor: "Consult a doctor if allergy symptoms do not improve or if you experience a severe reaction."
    },
    hi: {
      name: "फेक्सोफेनाडाइन",
      generic: "फेक्सोफेनाडाइन",
      type: "एंटीहिस्टामाइन",
      uses: "छींक, बहती नाक और त्वचा की खुजली जैसे एलर्जी के लक्षणों को राहत देने के लिए उपयोग किया जाता है।",
      how: "एक गैर-उनींदा करने वाला एंटीहिस्टामाइन जो हिस्टामाइन रिसेप्टर्स को रोकता है।",
      side_effects: "सिरदर्द, मिचली या हल्का चक्कर आना।",
      warnings: "आमतौर पर गैर-उनींदा, लेकिन कुछ व्यक्तियों को फिर भी नींद आ सकती है।",
      avoid: "यदि आपको किडनी की बीमारी है तो सावधानी से उपयोग करें। कुछ फलों के रस (जैसे सेब, संतरा, अंगूर) के साथ लेने से बचें क्योंकि वे अवशोषण को कम कर सकते हैं।",
      interactions: "एल्युमिनियम या मैग्नीशियम युक्त एंटासिड इसके अवशोषण को प्रभावित कर सकते हैं यदि उन्हें बहुत करीब लिया जाए।",
      when: "आमतौर पर पानी के साथ निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था या स्तनपान के दौरान उपयोग करने से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि एलर्जी के लक्षणों में सुधार न हो या आपको गंभीर प्रतिक्रिया हो तो डॉक्टर से संपर्क करें।"
    }
  },
  levocetirizine: {
    en: {
      name: "Levocetirizine",
      generic: "Levocetirizine",
      type: "Antihistamine",
      uses: "Used to treat allergy symptoms like runny nose, sneezing, and hives.",
      how: "An antihistamine that blocks histamine to prevent allergic reactions.",
      side_effects: "Drowsiness, tiredness, dry mouth, or fatigue.",
      warnings: "Can cause drowsiness. Avoid driving or operating heavy machinery until you know how it affects you.",
      avoid: "Avoid alcohol and other sedating medicines as they can increase drowsiness. Use with caution in kidney disease.",
      interactions: "May interact with central nervous system depressants.",
      when: "Typically taken as directed.",
      pregnancy: "Consult a healthcare provider before use during pregnancy.",
      doctor: "See a doctor if symptoms persist, worsen, or if you experience an allergic reaction."
    },
    hi: {
      name: "लेवोसेटिरिज़ाइन",
      generic: "लेवोसेटिरिज़ाइन",
      type: "एंटीहिस्टामाइन",
      uses: "बहती नाक, छींक और पित्ती जैसे एलर्जी के लक्षणों के इलाज के लिए उपयोग किया जाता है।",
      how: "एक एंटीहिस्टामाइन जो एलर्जी प्रतिक्रियाओं को रोकने के लिए हिस्टामाइन को रोकता है।",
      side_effects: "उनींदापन, थकान, मुंह सूखना या थकान।",
      warnings: "इससे उनींदापन आ सकता है। जब तक आप न जान लें कि यह आपको कैसे प्रभावित करता है, ड्राइविंग या भारी मशीनरी चलाने से बचें।",
      avoid: "शराब और अन्य नींद लाने वाली दवाओं से बचें क्योंकि वे उनींदापन बढ़ा सकती हैं। किडनी की बीमारी में सावधानी से उपयोग करें।",
      interactions: "केंद्रीय तंत्रिका तंत्र को धीमा करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था के दौरान उपयोग करने से पहले स्वास्थ्य सेवा प्रदाता से सलाह लें।",
      doctor: "यदि लक्षण बने रहें, खराब हों, या आपको एलर्जी प्रतिक्रिया हो तो डॉक्टर को दिखाएं।"
    }
  },
  clotrimazole: {
    en: {
      name: "Clotrimazole",
      generic: "Clotrimazole",
      type: "Antifungal",
      uses: "Used to treat certain fungal skin infections (uses depend on the specific formulation like cream, powder, or pessary).",
      how: "An antifungal that stops the growth of fungus by damaging its cell membrane.",
      side_effects: "Local irritation, burning, or redness at the application site.",
      warnings: "Not every rash is fungal; using it on non-fungal rashes may not help and could delay proper treatment.",
      avoid: "Use with caution on sensitive areas. Do not use in the eyes.",
      interactions: "Formulation-dependent. Vaginal formulations may interact with certain latex products (condoms/diaphragms).",
      when: "Applied to the affected area as directed.",
      pregnancy: "Consult a doctor before using internal/vaginal formulations during pregnancy.",
      doctor: "Consult a doctor if the infection does not improve after the recommended treatment period."
    },
    hi: {
      name: "क्लोट्रिमेज़ोल",
      generic: "क्लोट्रिमेज़ोल",
      type: "एंटीफंगल",
      uses: "कुछ फंगल त्वचा संक्रमणों के इलाज के लिए उपयोग किया जाता है (उपयोग विशिष्ट फॉर्मूलेशन जैसे क्रीम, पाउडर या पेसरी पर निर्भर करता है)।",
      how: "एक एंटीफंगल जो अपनी कोशिका झिल्ली को नुकसान पहुंचाकर कवक की वृद्धि को रोकता है।",
      side_effects: "आवेदन के स्थान पर स्थानीय जलन, जलन या लालिमा।",
      warnings: "हर लाल चकत्ता फंगल नहीं होता है; गैर-फंगल चकत्ते पर उपयोग करने से मदद नहीं मिल सकती है और उचित उपचार में देरी हो सकती है।",
      avoid: "संवेदनशील क्षेत्रों पर सावधानी से उपयोग करें। आंखों में उपयोग न करें।",
      interactions: "फॉर्मूलेशन-निर्भर। योनि फॉर्मूलेशन कुछ लेटेक्स उत्पादों (कंडोम/डायफ्राम) के साथ प्रतिक्रिया कर सकते हैं।",
      when: "निर्देशानुसार प्रभावित क्षेत्र पर लगाया जाता है।",
      pregnancy: "गर्भावस्था के दौरान आंतरिक/योनि फॉर्मूलेशन का उपयोग करने से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि अनुशंसित उपचार अवधि के बाद संक्रमण में सुधार न हो तो डॉक्टर से संपर्क करें।"
    }
  },
  miconazole: {
    en: {
      name: "Miconazole",
      generic: "Miconazole",
      type: "Antifungal",
      uses: "Used to treat certain fungal infections depending on the formulation (skin, oral, or vaginal).",
      how: "An antifungal that interferes with the fungal cell membrane, leading to cell death.",
      side_effects: "Local irritation, burning, or redness where applied.",
      warnings: "Not every rash is fungal. Ensure correct diagnosis before use.",
      avoid: "Avoid contact with eyes. Use specific formulations only for their intended route.",
      interactions: "Formulation/route-dependent. Oral gel can interact with blood thinners like warfarin.",
      when: "Applied or used as directed on the packaging or by a healthcare provider.",
      pregnancy: "Consult a doctor before use, especially for internal/vaginal use during pregnancy.",
      doctor: "Consult a doctor if symptoms persist or worsen after completing the treatment."
    },
    hi: {
      name: "मिकोनाज़ोल",
      generic: "मिकोनाज़ोल",
      type: "एंटीफंगल",
      uses: "फॉर्मूलेशन (त्वचा, मौखिक या योनि) के आधार पर कुछ फंगल संक्रमणों के इलाज के लिए उपयोग किया जाता है।",
      how: "एक एंटीफंगल जो फंगल कोशिका झिल्ली में हस्तक्षेप करता है, जिससे कोशिका मृत्यु हो जाती है।",
      side_effects: "जहां लगाया जाता है वहां स्थानीय जलन, जलन या लालिमा।",
      warnings: "हर लाल चकत्ता फंगल नहीं होता है। उपयोग से पहले सही निदान सुनिश्चित करें।",
      avoid: "आंखों के संपर्क से बचें। विशिष्ट फॉर्मूलेशन का केवल उनके इच्छित मार्ग के लिए ही उपयोग करें।",
      interactions: "फॉर्मूलेशन/मार्ग-निर्भर। मौखिक जेल वारफेरिन जैसे खून पतला करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "पैकेजिंग पर या स्वास्थ्य सेवा प्रदाता द्वारा निर्देशानुसार लगाया या उपयोग किया जाता है।",
      pregnancy: "उपयोग करने से पहले डॉक्टर से सलाह लें, विशेष रूप से गर्भावस्था के दौरान आंतरिक/योनि उपयोग के लिए।",
      doctor: "यदि उपचार पूरा करने के बाद लक्षण बने रहें या खराब हों तो डॉक्टर से सलाह लें।"
    }
  },
  hydrocortisone: {
    en: {
      name: "Hydrocortisone",
      generic: "Hydrocortisone",
      type: "Corticosteroid",
      uses: "A corticosteroid used to reduce inflammation and itching in certain skin conditions like eczema or dermatitis.",
      how: "Works by blocking the production of certain chemical messengers that cause inflammation.",
      side_effects: "Skin irritation, burning, or skin thinning with prolonged use.",
      warnings: "Can worsen or mask some skin infections. Do not use on suspected fungal or infected skin without medical advice.",
      avoid: "Avoid using on broken skin, acne, or rosacea unless directed by a doctor.",
      interactions: "Generally minimal for topical use, but inform your doctor of all skin products you use.",
      when: "Applied in a thin layer to the affected area, usually as directed.",
      pregnancy: "Generally safe for short-term topical use during pregnancy, but consult a doctor.",
      doctor: "Consult a doctor if the skin condition worsens, shows signs of infection, or does not improve."
    },
    hi: {
      name: "हाइड्रोकार्टिसोन",
      generic: "हाइड्रोकार्टिसोन",
      type: "कॉर्टिकोस्टेरॉयड",
      uses: "एक कॉर्टिकोस्टेरॉयड जो एक्जिमा या डर्माटाइटिस जैसी कुछ त्वचा स्थितियों में सूजन और खुजली को कम करने के लिए उपयोग किया जाता है।",
      how: "सूजन पैदा करने वाले कुछ रसायनों के उत्पादन को रोककर काम करता है।",
      side_effects: "त्वचा की जलन, जलन या लंबे समय तक उपयोग करने पर त्वचा का पतला होना।",
      warnings: "कुछ त्वचा संक्रमणों को खराब या छिपा सकता है। चिकित्सा सलाह के बिना संदिग्ध फंगल या संक्रमित त्वचा पर उपयोग न करें।",
      avoid: "डॉक्टर के निर्देश के बिना टूटी हुई त्वचा, मुंहासे या रोसासिया पर उपयोग करने से बचें।",
      interactions: "स्थानीय उपयोग के लिए आमतौर पर न्यूनतम, लेकिन अपने द्वारा उपयोग किए जाने वाले सभी त्वचा उत्पादों के बारे में डॉक्टर को बताएं।",
      when: "प्रभावित क्षेत्र पर पतली परत में लगाया जाता है, आमतौर पर निर्देशानुसार।",
      pregnancy: "गर्भावस्था के दौरान अल्पकालिक स्थानीय उपयोग के लिए आमतौर पर सुरक्षित, लेकिन डॉक्टर से सलाह लें।",
      doctor: "यदि त्वचा की स्थिति खराब हो जाती है, संक्रमण के लक्षण दिखाई देते हैं, या सुधार नहीं होता है तो डॉक्टर से संपर्क करें।"
    }
  },
  salbutamol: {
    en: {
      name: "Salbutamol",
      generic: "Salbutamol (Albuterol)",
      type: "Bronchodilator",
      uses: "A bronchodilator used for relief of wheezing and breathing symptoms in conditions such as asthma.",
      how: "Relaxes the muscles in the airways, making it easier to breathe.",
      side_effects: "Shaking (tremors), fast heartbeat, and headache.",
      warnings: "Frequent need for a reliever inhaler can indicate poor asthma control. Severe breathing difficulty or poor response needs urgent medical care.",
      avoid: "Use with caution if you have certain heart conditions or overactive thyroid.",
      interactions: "May interact with beta-blockers and some other heart or blood pressure medicines.",
      when: "Used as a 'reliever' when breathing symptoms occur, or as directed by a doctor.",
      pregnancy: "Generally considered safe and important to use during pregnancy if prescribed for asthma.",
      doctor: "Seek urgent medical care if you experience severe breathlessness or if the inhaler does not relieve your symptoms."
    },
    hi: {
      name: "सैल्बुटामोल",
      generic: "सैल्बुटामोल (अल्ब्यूटेरोल)",
      type: "ब्रोंकोडाइलेटर",
      uses: "अस्थमा जैसी स्थितियों में घुरघुराहट और सांस लेने के लक्षणों से राहत देने के लिए उपयोग किया जाने वाला ब्रोंकोडाइलेटर।",
      how: "वायुमार्ग की मांसपेशियों को आराम देता है, जिससे सांस लेना आसान हो जाता है।",
      side_effects: "कंपन (कांपना), तेज हृदय गति और सिरदर्द।",
      warnings: "रिलीवर इनहेलर की बार-बार आवश्यकता खराब अस्थमा नियंत्रण का संकेत हो सकती है। गंभीर सांस की तकलीफ या खराब प्रतिक्रिया को तत्काल चिकित्सा देखभाल की आवश्यकता होती है।",
      avoid: "यदि आपको कुछ हृदय स्थितियां या अतिसक्रिय थायरायड है तो सावधानी से उपयोग करें।",
      interactions: "बीटा-ब्लॉकर्स और कुछ अन्य हृदय या ब्लड प्रेशर की दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "सांस लेने के लक्षण होने पर 'रिलीवर' के रूप में उपयोग किया जाता है, या डॉक्टर के निर्देशानुसार।",
      pregnancy: "यदि अस्थमा के लिए निर्धारित किया जाए तो गर्भावस्था के दौरान उपयोग करना आमतौर पर सुरक्षित और महत्वपूर्ण माना जाता है।",
      doctor: "यदि आपको गंभीर सांस की तकलीफ हो या इनहेलर आपके लक्षणों को राहत न दे तो तुरंत चिकित्सा सहायता लें।"
    }
  },
  amlodipine: {
    en: {
      name: "Amlodipine",
      generic: "Amlodipine",
      type: "Calcium-Channel Blocker",
      uses: "Used to treat high blood pressure and certain types of angina (chest pain).",
      how: "A calcium-channel blocker that relaxes blood vessels, allowing blood to flow more easily.",
      side_effects: "Ankle swelling, headache, flushing, and dizziness.",
      warnings: "Requires regular blood pressure monitoring. Do not stop taking it suddenly without medical advice.",
      avoid: "Avoid if you have severe low blood pressure or certain heart valve conditions.",
      interactions: "Interacts with some medicines, including certain antibiotics and antifungals, which can increase its effects.",
      when: "Taken as directed, at the same time each day, with or without food.",
      pregnancy: "Consult a doctor for advice before using during pregnancy or breastfeeding.",
      doctor: "Consult a doctor if you experience severe dizziness, fainting, or worsening chest pain."
    },
    hi: {
      name: "एम्लोडिपिन",
      generic: "एम्लोडिपिन",
      type: "कैल्शियम-चैनल ब्लॉकर",
      uses: "उच्च रक्तचाप और एंजाइना (छाती में दर्द) के कुछ प्रकारों के इलाज के लिए उपयोग किया जाता है।",
      how: "एक कैल्शियम-चैनल ब्लॉकर जो रक्त वाहिकाओं को आराम देता है, जिससे रक्त अधिक आसानी से प्रवाहित होता है।",
      side_effects: "टखने में सूजन, सिरदर्द, चेहरे का लाल होना और चक्कर आना।",
      warnings: "नियमित रक्तचाप निगरानी की आवश्यकता होती है। चिकित्सा सलाह के बिना अचानक लेना बंद न करें।",
      avoid: "यदि आपको गंभीर निम्न रक्तचाप या कुछ हृदय वाल्व स्थितियां हैं तो इससे बचें।",
      interactions: "कुछ एंटीबायोटिक्स और एंटीफंगल्स सहित कुछ दवाओं के साथ प्रतिक्रिया करता है, जो इसके प्रभाव को बढ़ा सकते हैं।",
      when: "हर दिन एक ही समय पर, भोजन के साथ या बिना, निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था या स्तनपान के दौरान उपयोग करने से पहले डॉक्टर से सलाह लें।",
      doctor: "यदि आपको गंभीर चक्कर आना, बेहोशी या खराब होती छाती में दर्द का अनुभव हो तो डॉक्टर से संपर्क करें।"
    }
  },
  losartan: {
    en: {
      name: "Losartan",
      generic: "Losartan",
      type: "Angiotensin II Receptor Blocker (ARB)",
      uses: "Used to treat high blood pressure and certain heart or kidney conditions.",
      how: "Blocks angiotensin II, a substance that can narrow blood vessels and raise blood pressure.",
      side_effects: "Dizziness, headache, tiredness, or changes in kidney function may occur.",
      warnings: "Can affect potassium levels and kidney function. Blood pressure and kidney tests may be monitored.",
      avoid: "Avoid during pregnancy. Use caution with kidney disease or high potassium.",
      interactions: "May interact with potassium supplements, certain diuretics, NSAIDs, and other blood-pressure medicines.",
      when: "Usually taken regularly as prescribed.",
      pregnancy: "Should not be used during pregnancy unless specifically directed by a specialist.",
      doctor: "Seek medical advice for severe dizziness, swelling, or significant changes in urination."
    },
    hi: {
      name: "लोसार्टन",
      generic: "लोसार्टन",
      type: "एंजियोटेंसिन II रिसेप्टर ब्लॉकर (ARB)",
      uses: "उच्च रक्तचाप और कुछ हृदय या किडनी की स्थितियों के इलाज के लिए उपयोग किया जाता है।",
      how: "यह एंजियोटेंसिन II को रोकता है, जो रक्त वाहिकाओं को संकुचित करके ब्लड प्रेशर बढ़ा सकता है।",
      side_effects: "चक्कर, सिरदर्द, थकान या किडनी की कार्यक्षमता में बदलाव हो सकते हैं।",
      warnings: "पोटैशियम स्तर और किडनी की कार्यक्षमता को प्रभावित कर सकता है।",
      avoid: "गर्भावस्था में इससे बचना चाहिए। किडनी की बीमारी या अधिक पोटैशियम होने पर सावधानी जरूरी है।",
      interactions: "पोटैशियम सप्लीमेंट, कुछ मूत्रवर्धक, NSAIDs और अन्य ब्लड प्रेशर दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में इसका उपयोग नहीं करना चाहिए, जब तक विशेषज्ञ विशेष रूप से सलाह न दें।",
      doctor: "बहुत अधिक चक्कर, सूजन या पेशाब में महत्वपूर्ण बदलाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  enalapril: {
    en: {
      name: "Enalapril",
      generic: "Enalapril",
      type: "ACE Inhibitor",
      uses: "Used to treat high blood pressure and certain heart conditions.",
      how: "Reduces the formation of angiotensin II, helping blood vessels relax and lowering blood pressure.",
      side_effects: "Dry cough, dizziness, headache, or changes in kidney function.",
      warnings: "Can increase potassium and affect kidney function. Rarely, it can cause serious swelling.",
      avoid: "Avoid during pregnancy and in people with a history of ACE-inhibitor-related angioedema.",
      interactions: "May interact with potassium supplements, diuretics, NSAIDs, and other blood-pressure medicines.",
      when: "Taken regularly as prescribed.",
      pregnancy: "Should not be used during pregnancy.",
      doctor: "Seek urgent care for swelling of the face, lips, tongue, or difficulty breathing."
    },
    hi: {
      name: "एनालाप्रिल",
      generic: "एनालाप्रिल",
      type: "ACE इनहिबिटर",
      uses: "उच्च रक्तचाप और कुछ हृदय संबंधी स्थितियों के इलाज के लिए उपयोग किया जाता है।",
      how: "एंजियोटेंसिन II के निर्माण को कम करके रक्त वाहिकाओं को आराम देने और ब्लड प्रेशर कम करने में मदद करता है।",
      side_effects: "सूखी खांसी, चक्कर, सिरदर्द या किडनी की कार्यक्षमता में बदलाव हो सकते हैं।",
      warnings: "पोटैशियम बढ़ा सकता है और किडनी की कार्यक्षमता को प्रभावित कर सकता है।",
      avoid: "गर्भावस्था में और ACE-inhibitor से पहले गंभीर सूजन हुई हो तो इससे बचें।",
      interactions: "पोटैशियम सप्लीमेंट, मूत्रवर्धक, NSAIDs और अन्य ब्लड प्रेशर दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में इसका उपयोग नहीं करना चाहिए।",
      doctor: "चेहरे, होंठ या जीभ में सूजन अथवा सांस लेने में कठिनाई होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  telmisartan: {
    en: {
      name: "Telmisartan",
      generic: "Telmisartan",
      type: "Angiotensin II Receptor Blocker (ARB)",
      uses: "Used to treat high blood pressure and reduce cardiovascular risk in selected patients.",
      how: "Blocks angiotensin II receptors, helping blood vessels relax.",
      side_effects: "Dizziness, headache, tiredness, or changes in potassium or kidney function.",
      warnings: "Can affect kidney function and potassium levels.",
      avoid: "Avoid during pregnancy. Use caution with kidney disease or high potassium.",
      interactions: "May interact with potassium supplements, NSAIDs, diuretics, and other blood-pressure medicines.",
      when: "Usually taken once daily as prescribed.",
      pregnancy: "Should not be used during pregnancy.",
      doctor: "Consult a doctor for severe dizziness, swelling, or unusual changes in urination."
    },
    hi: {
      name: "टेल्मिसार्टन",
      generic: "टेल्मिसार्टन",
      type: "एंजियोटेंसिन II रिसेप्टर ब्लॉकर (ARB)",
      uses: "उच्च रक्तचाप और कुछ रोगियों में हृदय संबंधी जोखिम कम करने के लिए उपयोग किया जाता है।",
      how: "एंजियोटेंसिन II रिसेप्टर्स को रोककर रक्त वाहिकाओं को आराम देने में मदद करता है।",
      side_effects: "चक्कर, सिरदर्द, थकान या पोटैशियम/किडनी की कार्यक्षमता में बदलाव हो सकते हैं।",
      warnings: "किडनी की कार्यक्षमता और पोटैशियम स्तर को प्रभावित कर सकता है।",
      avoid: "गर्भावस्था में इससे बचना चाहिए। किडनी की बीमारी या अधिक पोटैशियम में सावधानी जरूरी है।",
      interactions: "पोटैशियम सप्लीमेंट, NSAIDs, मूत्रवर्धक और अन्य ब्लड प्रेशर दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार दिन में एक बार लिया जाता है।",
      pregnancy: "गर्भावस्था में इसका उपयोग नहीं करना चाहिए।",
      doctor: "बहुत अधिक चक्कर, सूजन या पेशाब में असामान्य बदलाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  metformin: {
    en: {
      name: "Metformin",
      generic: "Metformin",
      type: "Biguanide Antidiabetic",
      uses: "Used mainly to control blood sugar in type 2 diabetes.",
      how: "Reduces glucose production by the liver and improves the body's response to insulin.",
      side_effects: "Nausea, diarrhea, stomach discomfort, or reduced appetite.",
      warnings: "Kidney function should be considered. A rare but serious condition called lactic acidosis can occur.",
      avoid: "Use only with medical advice if you have significant kidney or liver problems.",
      interactions: "Some medicines and contrast dyes used for scans may require special precautions.",
      when: "Usually taken with meals as prescribed.",
      pregnancy: "Use during pregnancy only according to medical advice.",
      doctor: "Seek medical advice for severe weakness, breathing difficulty, persistent vomiting, or unusual symptoms."
    },
    hi: {
      name: "मेटफॉर्मिन",
      generic: "मेटफॉर्मिन",
      type: "बिगुआनाइड एंटीडायबिटिक",
      uses: "मुख्य रूप से टाइप 2 डायबिटीज में ब्लड शुगर नियंत्रित करने के लिए उपयोग किया जाता है।",
      how: "लीवर द्वारा ग्लूकोज़ बनाने को कम करता है और शरीर की इंसुलिन के प्रति प्रतिक्रिया बेहतर करता है।",
      side_effects: "मिचली, दस्त, पेट में असहजता या भूख कम लगना हो सकता है।",
      warnings: "किडनी की कार्यक्षमता का ध्यान रखना जरूरी है। दुर्लभ रूप से लैक्टिक एसिडोसिस जैसी गंभीर समस्या हो सकती है।",
      avoid: "गंभीर किडनी या लीवर की समस्या में केवल डॉक्टर की सलाह से उपयोग करें।",
      interactions: "कुछ दवाओं और स्कैन में इस्तेमाल होने वाले contrast dye के साथ विशेष सावधानी की आवश्यकता हो सकती है।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार भोजन के साथ लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की सलाह के अनुसार उपयोग करें।",
      doctor: "बहुत अधिक कमजोरी, सांस लेने में परेशानी, लगातार उल्टी या असामान्य लक्षण होने पर डॉक्टर से संपर्क करें।"
    }
  },

  glimepiride: {
    en: {
      name: "Glimepiride",
      generic: "Glimepiride",
      type: "Sulfonylurea Antidiabetic",
      uses: "Used to help control blood sugar in type 2 diabetes.",
      how: "Stimulates the pancreas to release more insulin.",
      side_effects: "Low blood sugar, dizziness, sweating, nausea, or weight changes may occur.",
      warnings: "Can cause hypoglycemia, especially if meals are skipped.",
      avoid: "Not generally used for type 1 diabetes or diabetic ketoacidosis.",
      interactions: "Many medicines can affect blood sugar or increase the risk of hypoglycemia.",
      when: "Usually taken with a meal according to the prescribed plan.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek help for severe or repeated low-blood-sugar symptoms."
    },
    hi: {
      name: "ग्लिमेपिराइड",
      generic: "ग्लिमेपिराइड",
      type: "सल्फोनिलयूरिया एंटीडायबिटिक",
      uses: "टाइप 2 डायबिटीज में ब्लड शुगर नियंत्रित करने में मदद के लिए उपयोग किया जाता है।",
      how: "पैंक्रियास को अधिक इंसुलिन बनाने के लिए प्रेरित करता है।",
      side_effects: "लो ब्लड शुगर, चक्कर, पसीना, मिचली या वजन में बदलाव हो सकते हैं।",
      warnings: "खाना छोड़ने पर हाइपोग्लाइसीमिया का खतरा बढ़ सकता है।",
      avoid: "आमतौर पर टाइप 1 डायबिटीज या डायबिटिक कीटोएसिडोसिस में उपयोग नहीं किया जाता।",
      interactions: "कई दवाएं ब्लड शुगर को प्रभावित कर सकती हैं या लो शुगर का जोखिम बढ़ा सकती हैं।",
      when: "आमतौर पर डॉक्टर की योजना के अनुसार भोजन के साथ लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की निगरानी में उपयोग करें।",
      doctor: "गंभीर या बार-बार लो ब्लड शुगर के लक्षण होने पर तुरंत चिकित्सा सलाह लें।"
    }
  },

  gliclazide: {
    en: {
      name: "Gliclazide",
      generic: "Gliclazide",
      type: "Sulfonylurea Antidiabetic",
      uses: "Used to control blood sugar in type 2 diabetes.",
      how: "Stimulates the pancreas to release insulin.",
      side_effects: "Low blood sugar, nausea, stomach upset, or weight gain.",
      warnings: "Hypoglycemia can occur, particularly when meals are missed.",
      avoid: "Not generally used for type 1 diabetes or diabetic ketoacidosis.",
      interactions: "Other diabetes medicines, alcohol, and some medicines can alter blood sugar.",
      when: "Taken according to the prescribed meal schedule.",
      pregnancy: "Use only when specifically advised by a healthcare professional.",
      doctor: "Seek medical advice for repeated low blood sugar or unexplained symptoms."
    },
    hi: {
      name: "ग्लिक्लाज़ाइड",
      generic: "ग्लिक्लाज़ाइड",
      type: "सल्फोनिलयूरिया एंटीडायबिटिक",
      uses: "टाइप 2 डायबिटीज में ब्लड शुगर नियंत्रित करने के लिए उपयोग किया जाता है।",
      how: "पैंक्रियास को इंसुलिन छोड़ने के लिए प्रेरित करता है।",
      side_effects: "लो ब्लड शुगर, मिचली, पेट खराब या वजन बढ़ना हो सकता है।",
      warnings: "खाना छूटने पर हाइपोग्लाइसीमिया हो सकता है।",
      avoid: "आमतौर पर टाइप 1 डायबिटीज या डायबिटिक कीटोएसिडोसिस में उपयोग नहीं किया जाता।",
      interactions: "अन्य डायबिटीज दवाएं, शराब और कुछ अन्य दवाएं ब्लड शुगर को प्रभावित कर सकती हैं।",
      when: "डॉक्टर द्वारा बताए गए भोजन के समय के अनुसार लिया जाता है।",
      pregnancy: "केवल स्वास्थ्य विशेषज्ञ की विशेष सलाह पर उपयोग करें।",
      doctor: "बार-बार लो ब्लड शुगर या अस्पष्ट लक्षण होने पर डॉक्टर से संपर्क करें।"
    }
  },

  atorvastatin: {
    en: {
      name: "Atorvastatin",
      generic: "Atorvastatin",
      type: "Statin / Lipid-Lowering Medicine",
      uses: "Used to lower cholesterol and reduce the risk of cardiovascular disease.",
      how: "Reduces cholesterol production in the liver.",
      side_effects: "Muscle aches, headache, or digestive symptoms may occur.",
      warnings: "Rarely can cause serious muscle or liver problems.",
      avoid: "Avoid during pregnancy. Tell your doctor about liver disease.",
      interactions: "Can interact with certain antibiotics, antifungals, and other medicines.",
      when: "Usually taken regularly at the same time each day as prescribed.",
      pregnancy: "Generally avoided during pregnancy.",
      doctor: "Seek medical advice for unexplained severe muscle pain, weakness, or dark urine."
    },
    hi: {
      name: "एटोरवास्टेटिन",
      generic: "एटोरवास्टेटिन",
      type: "स्टेटिन / कोलेस्ट्रॉल कम करने वाली दवा",
      uses: "कोलेस्ट्रॉल कम करने और हृदय संबंधी बीमारी के जोखिम को कम करने के लिए उपयोग किया जाता है।",
      how: "लीवर में कोलेस्ट्रॉल बनने की प्रक्रिया को कम करता है।",
      side_effects: "मांसपेशियों में दर्द, सिरदर्द या पाचन संबंधी समस्या हो सकती है।",
      warnings: "दुर्लभ रूप से गंभीर मांसपेशी या लीवर की समस्या हो सकती है।",
      avoid: "गर्भावस्था में इससे बचना चाहिए। लीवर की बीमारी के बारे में डॉक्टर को बताएं।",
      interactions: "कुछ एंटीबायोटिक्स, एंटीफंगल और अन्य दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार रोज एक ही समय पर लिया जाता है।",
      pregnancy: "आमतौर पर गर्भावस्था में इससे बचा जाता है।",
      doctor: "बिना कारण तेज मांसपेशी दर्द, कमजोरी या गहरे रंग का पेशाब होने पर डॉक्टर से संपर्क करें।"
    }
  },

  rosuvastatin: {
    en: {
      name: "Rosuvastatin",
      generic: "Rosuvastatin",
      type: "Statin / Lipid-Lowering Medicine",
      uses: "Used to lower cholesterol and reduce cardiovascular risk.",
      how: "Blocks an enzyme involved in cholesterol production in the liver.",
      side_effects: "Muscle aches, headache, nausea, or abdominal discomfort.",
      warnings: "Rarely may cause serious muscle or liver problems.",
      avoid: "Avoid during pregnancy and use caution in significant liver disease.",
      interactions: "May interact with certain medicines and other cholesterol-lowering drugs.",
      when: "Usually taken regularly as prescribed.",
      pregnancy: "Generally avoided during pregnancy.",
      doctor: "Consult a doctor for severe muscle pain, weakness, or dark urine."
    },
    hi: {
      name: "रोसुवास्टेटिन",
      generic: "रोसुवास्टेटिन",
      type: "स्टेटिन / कोलेस्ट्रॉल कम करने वाली दवा",
      uses: "कोलेस्ट्रॉल कम करने और हृदय संबंधी जोखिम घटाने के लिए उपयोग किया जाता है।",
      how: "लीवर में कोलेस्ट्रॉल बनाने वाले एक एंजाइम को रोकता है।",
      side_effects: "मांसपेशियों में दर्द, सिरदर्द, मिचली या पेट में असहजता हो सकती है।",
      warnings: "दुर्लभ रूप से गंभीर मांसपेशी या लीवर की समस्या हो सकती है।",
      avoid: "गर्भावस्था में इससे बचें और गंभीर लीवर रोग में सावधानी रखें।",
      interactions: "कुछ दवाओं और अन्य कोलेस्ट्रॉल कम करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "आमतौर पर गर्भावस्था में इससे बचा जाता है।",
      doctor: "तेज मांसपेशी दर्द, कमजोरी या गहरे रंग का पेशाब होने पर डॉक्टर से संपर्क करें।"
    }
  },

  aspirin: {
    en: {
      name: "Aspirin",
      generic: "Acetylsalicylic Acid",
      type: "Antiplatelet / NSAID",
      uses: "Used in selected patients to reduce blood clot formation and for certain pain or fever conditions.",
      how: "Reduces platelet aggregation and also has pain-relieving and anti-inflammatory effects.",
      side_effects: "Stomach irritation, nausea, bruising, or bleeding.",
      warnings: "Can increase bleeding risk and may cause stomach ulcers or bleeding.",
      avoid: "Children and teenagers should not use aspirin for viral illnesses unless specifically directed by a doctor.",
      interactions: "Interacts with blood thinners, other NSAIDs, steroids, and some other medicines.",
      when: "Use only according to the intended medical purpose and directions.",
      pregnancy: "Pregnancy use depends on the reason and dose; medical advice is important.",
      doctor: "Seek care for unusual bleeding, black stools, vomiting blood, or severe allergic symptoms."
    },
    hi: {
      name: "एस्पिरिन",
      generic: "एसिटाइलसैलिसिलिक एसिड",
      type: "एंटीप्लेटलेट / NSAID",
      uses: "कुछ रोगियों में रक्त के थक्के बनने का जोखिम कम करने तथा कुछ दर्द या बुखार की स्थितियों में उपयोग किया जाता है।",
      how: "प्लेटलेट्स को आपस में चिपकने से कम करता है और दर्द/सूजन पर भी प्रभाव डालता है।",
      side_effects: "पेट में जलन, मिचली, आसानी से चोट लगना या रक्तस्राव हो सकता है।",
      warnings: "रक्तस्राव और पेट के अल्सर का जोखिम बढ़ा सकता है।",
      avoid: "बच्चों और किशोरों में वायरल बीमारी के दौरान डॉक्टर की सलाह के बिना एस्पिरिन का उपयोग नहीं करना चाहिए।",
      interactions: "ब्लड थिनर, अन्य NSAIDs, स्टेरॉयड और कुछ अन्य दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "केवल डॉक्टर द्वारा बताए गए उद्देश्य और निर्देश के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग कारण और मात्रा पर निर्भर करता है; डॉक्टर की सलाह जरूरी है।",
      doctor: "असामान्य रक्तस्राव, काला मल, खून की उल्टी या गंभीर एलर्जी होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  clopidogrel: {
    en: {
      name: "Clopidogrel",
      generic: "Clopidogrel",
      type: "Antiplatelet Medicine",
      uses: "Used to reduce the risk of blood clots in selected cardiovascular conditions.",
      how: "Prevents platelets from sticking together and forming clots.",
      side_effects: "Easy bruising, nosebleeds, or other bleeding.",
      warnings: "Increases bleeding risk. Do not stop it without medical advice when prescribed for heart or blood-vessel conditions.",
      avoid: "Avoid or use only under medical supervision if you have active bleeding.",
      interactions: "May interact with some acid-reducing medicines, blood thinners, and NSAIDs.",
      when: "Taken regularly as prescribed.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek medical help for serious or persistent bleeding."
    },
    hi: {
      name: "क्लोपिडोग्रेल",
      generic: "क्लोपिडोग्रेल",
      type: "एंटीप्लेटलेट दवा",
      uses: "कुछ हृदय और रक्त वाहिका संबंधी स्थितियों में रक्त के थक्के का जोखिम कम करने के लिए उपयोग किया जाता है।",
      how: "प्लेटलेट्स को आपस में चिपकने और थक्का बनाने से रोकता है।",
      side_effects: "आसानी से चोट लगना, नाक से खून आना या अन्य रक्तस्राव हो सकता है।",
      warnings: "रक्तस्राव का जोखिम बढ़ाता है। डॉक्टर की सलाह के बिना इसे बंद न करें यदि यह हृदय/रक्त वाहिका रोग के लिए दिया गया है।",
      avoid: "सक्रिय रक्तस्राव होने पर केवल डॉक्टर की निगरानी में उपयोग करें।",
      interactions: "कुछ एसिड कम करने वाली दवाओं, ब्लड थिनर और NSAIDs के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की निगरानी में उपयोग करें।",
      doctor: "गंभीर या लगातार रक्तस्राव होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  levothyroxine: {
    en: {
      name: "Levothyroxine",
      generic: "Levothyroxine",
      type: "Thyroid Hormone Replacement",
      uses: "Used to treat an underactive thyroid (hypothyroidism).",
      how: "Replaces the thyroid hormone that the body is unable to produce adequately.",
      side_effects: "Incorrect dosing may cause palpitations, sweating, tremor, anxiety, or tiredness.",
      warnings: "Dose is individualized and usually monitored with thyroid blood tests.",
      avoid: "Do not self-adjust the dose. Tell your doctor about heart disease and other medicines.",
      interactions: "Calcium, iron, antacids, and some other medicines can reduce absorption.",
      when: "Usually taken on an empty stomach at a consistent time as directed.",
      pregnancy: "Often continued or adjusted during pregnancy under medical supervision.",
      doctor: "Consult a doctor if you develop persistent palpitations, chest pain, or significant changes in symptoms."
    },
    hi: {
      name: "लेवोथायरोक्सिन",
      generic: "लेवोथायरोक्सिन",
      type: "थायरॉइड हार्मोन रिप्लेसमेंट",
      uses: "कम सक्रिय थायरॉइड (हाइपोथायरॉइडिज्म) के इलाज के लिए उपयोग किया जाता है।",
      how: "शरीर में पर्याप्त मात्रा में न बनने वाले थायरॉइड हार्मोन की पूर्ति करता है।",
      side_effects: "गलत मात्रा से धड़कन तेज होना, पसीना, कंपकंपी, बेचैनी या थकान हो सकती है।",
      warnings: "मात्रा व्यक्ति के अनुसार तय की जाती है और थायरॉइड ब्लड टेस्ट से निगरानी की जाती है।",
      avoid: "खुद से मात्रा न बदलें। हृदय रोग और अन्य दवाओं के बारे में डॉक्टर को बताएं।",
      interactions: "कैल्शियम, आयरन, एंटासिड और कुछ अन्य दवाएं इसके अवशोषण को कम कर सकती हैं।",
      when: "आमतौर पर डॉक्टर के निर्देशानुसार खाली पेट एक निश्चित समय पर लिया जाता है।",
      pregnancy: "गर्भावस्था में अक्सर इसे जारी रखा या समायोजित किया जाता है, लेकिन डॉक्टर की निगरानी जरूरी है।",
      doctor: "लगातार तेज धड़कन, सीने में दर्द या लक्षणों में महत्वपूर्ण बदलाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  montelukast: {
    en: {
      name: "Montelukast",
      generic: "Montelukast",
      type: "Leukotriene Receptor Antagonist",
      uses: "Used for asthma prevention and certain allergy symptoms.",
      how: "Blocks leukotrienes, chemicals involved in airway inflammation and allergy symptoms.",
      side_effects: "Headache, abdominal discomfort, or sleep-related symptoms may occur.",
      warnings: "Rarely, mood or behavior changes can occur and should be taken seriously.",
      avoid: "Not intended to replace a rescue inhaler during an acute asthma attack.",
      interactions: "Generally has few interactions, but tell your doctor about all medicines.",
      when: "Taken according to the prescribed schedule.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Contact a doctor for breathing problems or significant mood or behavior changes."
    },
    hi: {
      name: "मोंटेलुकास्ट",
      generic: "मोंटेलुकास्ट",
      type: "ल्यूकोट्राइन रिसेप्टर एंटागोनिस्ट",
      uses: "अस्थमा की रोकथाम और कुछ एलर्जी लक्षणों के लिए उपयोग किया जाता है।",
      how: "ल्यूकोट्राइन नामक रसायनों की कार्रवाई को रोकता है, जो वायुमार्ग की सूजन और एलर्जी में भूमिका निभाते हैं।",
      side_effects: "सिरदर्द, पेट में असहजता या नींद से संबंधित लक्षण हो सकते हैं।",
      warnings: "दुर्लभ रूप से मूड या व्यवहार में बदलाव हो सकते हैं, जिन्हें गंभीरता से लेना चाहिए।",
      avoid: "अचानक अस्थमा अटैक में यह रेस्क्यू इनहेलर का विकल्प नहीं है।",
      interactions: "आमतौर पर इसकी दवा-परस्पर क्रियाएं कम होती हैं, फिर भी सभी दवाओं की जानकारी डॉक्टर को दें।",
      when: "डॉक्टर द्वारा बताए गए समय के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "सांस लेने में परेशानी या महत्वपूर्ण मूड/व्यवहार बदलाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  budesonide: {
    en: {
      name: "Budesonide",
      generic: "Budesonide",
      type: "Corticosteroid",
      uses: "Used to reduce inflammation in asthma, certain nasal conditions, or bowel diseases depending on formulation.",
      how: "Reduces inflammation by acting on immune and inflammatory pathways.",
      side_effects: "Depending on the form, may cause throat irritation, hoarseness, headache, or local irritation.",
      warnings: "Inhaled forms require proper technique and mouth rinsing after use.",
      avoid: "Do not stop long-term systemic steroid treatment suddenly without medical advice.",
      interactions: "Can interact with certain antifungal and other medicines.",
      when: "Use according to the prescribed schedule and formulation instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek medical advice if symptoms worsen or if signs of infection develop."
    },
    hi: {
      name: "बुडेसोनाइड",
      generic: "बुडेसोनाइड",
      type: "कॉर्टिकोस्टेरॉइड",
      uses: "फॉर्म के अनुसार अस्थमा, कुछ नाक की समस्याओं या आंतों की सूजन को कम करने के लिए उपयोग किया जाता है।",
      how: "इम्यून और सूजन संबंधी प्रक्रियाओं पर असर डालकर सूजन कम करता है।",
      side_effects: "फॉर्म के अनुसार गले में जलन, आवाज बैठना, सिरदर्द या स्थानीय जलन हो सकती है।",
      warnings: "इनहेलर रूप में सही तकनीक और उपयोग के बाद मुंह धोना महत्वपूर्ण है।",
      avoid: "लंबे समय से चल रहे systemic steroid को डॉक्टर की सलाह के बिना अचानक बंद न करें।",
      interactions: "कुछ एंटीफंगल और अन्य दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर द्वारा बताए गए समय और फॉर्म के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "लक्षण बिगड़ने या संक्रमण के संकेत होने पर डॉक्टर से संपर्क करें।"
    }
  },

  fluticasone: {
    en: {
      name: "Fluticasone",
      generic: "Fluticasone",
      type: "Corticosteroid",
      uses: "Used in inhaled or nasal forms to reduce inflammation in asthma or allergic nasal symptoms.",
      how: "Reduces inflammation in the airways or nasal passages.",
      side_effects: "Nasal irritation, sore throat, hoarseness, or headache depending on the formulation.",
      warnings: "Use regularly as directed; it is not generally a quick-relief medicine for sudden asthma attacks.",
      avoid: "Use cautiously if you have untreated infections.",
      interactions: "Some medicines, especially certain antifungals, can increase steroid exposure.",
      when: "Use according to the prescribed schedule.",
      pregnancy: "Consult a healthcare professional before use during pregnancy.",
      doctor: "Consult a doctor if breathing worsens or persistent nasal symptoms continue."
    },
    hi: {
      name: "फ्लूटिकासोन",
      generic: "फ्लूटिकासोन",
      type: "कॉर्टिकोस्टेरॉइड",
      uses: "इनहेल्ड या नाक वाले रूप में अस्थमा या एलर्जी से संबंधित नाक के लक्षणों की सूजन कम करने के लिए उपयोग किया जाता है।",
      how: "वायुमार्ग या नाक की सूजन को कम करता है।",
      side_effects: "फॉर्म के अनुसार नाक में जलन, गले में खराश, आवाज बैठना या सिरदर्द हो सकता है।",
      warnings: "निर्देशानुसार नियमित उपयोग करें; अचानक अस्थमा अटैक में यह आमतौर पर तुरंत राहत देने वाली दवा नहीं है।",
      avoid: "अनुपचारित संक्रमण होने पर सावधानी से उपयोग करें।",
      interactions: "कुछ एंटीफंगल दवाएं शरीर में स्टेरॉयड की मात्रा बढ़ा सकती हैं।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "सांस लेने की समस्या बढ़ने या लगातार नाक के लक्षण रहने पर डॉक्टर से संपर्क करें।"
    }
  },

  dextromethorphan: {
    en: {
      name: "Dextromethorphan",
      generic: "Dextromethorphan",
      type: "Cough Suppressant",
      uses: "Used to temporarily reduce certain types of cough.",
      how: "Acts on the brain's cough-control center to reduce the cough reflex.",
      side_effects: "Drowsiness, dizziness, nausea, or stomach discomfort may occur.",
      warnings: "Should not be combined with certain medicines that affect serotonin unless medically advised.",
      avoid: "Use caution with other sedating medicines and certain antidepressants.",
      interactions: "Can interact with some antidepressants and other medicines affecting the nervous system.",
      when: "Use only according to the product label or healthcare professional's instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek medical advice for persistent, severe, or unexplained cough."
    },
    hi: {
      name: "डेक्स्ट्रोमेथॉर्फ़न",
      generic: "डेक्स्ट्रोमेथॉर्फ़न",
      type: "कफ सप्रेसेंट",
      uses: "कुछ प्रकार की खांसी को अस्थायी रूप से कम करने के लिए उपयोग किया जाता है।",
      how: "दिमाग के cough-control center पर असर डालकर खांसी की प्रतिक्रिया को कम करता है।",
      side_effects: "उनींदापन, चक्कर, मिचली या पेट में असहजता हो सकती है।",
      warnings: "सेरोटोनिन को प्रभावित करने वाली कुछ दवाओं के साथ बिना चिकित्सकीय सलाह के नहीं लेना चाहिए।",
      avoid: "अन्य नींद लाने वाली दवाओं और कुछ एंटीडिप्रेसेंट के साथ सावधानी जरूरी है।",
      interactions: "कुछ एंटीडिप्रेसेंट और नर्वस सिस्टम को प्रभावित करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "लेबल या स्वास्थ्य विशेषज्ञ के निर्देशानुसार ही उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "लगातार, गंभीर या बिना कारण की खांसी होने पर डॉक्टर से संपर्क करें।"
    }
  },

  guaifenesin: {
    en: {
      name: "Guaifenesin",
      generic: "Guaifenesin",
      type: "Expectorant",
      uses: "Used to help loosen mucus and make productive cough easier.",
      how: "Helps thin and loosen mucus in the airways.",
      side_effects: "Nausea, vomiting, dizziness, or stomach discomfort may occur.",
      warnings: "Drink adequate fluids unless a doctor has advised fluid restriction.",
      avoid: "Check combination cough products to avoid accidentally taking duplicate ingredients.",
      interactions: "Usually has few major interactions, but combination products may contain other active ingredients.",
      when: "Use according to the product directions.",
      pregnancy: "Consult a healthcare professional before use during pregnancy.",
      doctor: "Consult a doctor for cough lasting several days, breathing difficulty, or chest pain."
    },
    hi: {
      name: "गुआइफेनेसिन",
      generic: "गुआइफेनेसिन",
      type: "एक्सपेक्टोरेंट",
      uses: "बलगम को ढीला करने और बलगम वाली खांसी को आसान बनाने के लिए उपयोग किया जाता है।",
      how: "वायुमार्ग में बलगम को पतला और ढीला करने में मदद करता है।",
      side_effects: "मिचली, उल्टी, चक्कर या पेट में असहजता हो सकती है।",
      warnings: "यदि डॉक्टर ने तरल सीमित करने को नहीं कहा है तो पर्याप्त तरल लेना मददगार हो सकता है।",
      avoid: "कॉम्बिनेशन कफ उत्पादों के लेबल जांचें ताकि एक ही ingredient दो बार न लिया जाए।",
      interactions: "आमतौर पर गंभीर interactions कम होते हैं, लेकिन कॉम्बिनेशन उत्पादों में अन्य active ingredients हो सकते हैं।",
      when: "उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "कई दिनों तक खांसी, सांस लेने में परेशानी या सीने में दर्द होने पर डॉक्टर से संपर्क करें।"
    }
  },

  pseudoephedrine: {
    en: {
      name: "Pseudoephedrine",
      generic: "Pseudoephedrine",
      type: "Nasal Decongestant",
      uses: "Used to temporarily relieve nasal congestion.",
      how: "Constrics blood vessels in the nasal passages, reducing swelling and congestion.",
      side_effects: "Restlessness, insomnia, dry mouth, increased heart rate, or raised blood pressure.",
      warnings: "May raise blood pressure and heart rate.",
      avoid: "Use cautiously or avoid with certain heart conditions, uncontrolled high blood pressure, or certain medicines.",
      interactions: "Can interact with some antidepressants and blood-pressure medicines.",
      when: "Use only according to product directions and medical advice where required.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek advice for severe headache, chest symptoms, or persistent congestion."
    },
    hi: {
      name: "स्यूडोएफेड्रिन",
      generic: "स्यूडोएफेड्रिन",
      type: "नाक खोलने वाली दवा (Decongestant)",
      uses: "नाक बंद होने से अस्थायी राहत के लिए उपयोग किया जाता है।",
      how: "नाक की रक्त वाहिकाओं को संकुचित करके सूजन और congestion कम करता है।",
      side_effects: "बेचैनी, नींद में परेशानी, मुंह सूखना, तेज धड़कन या ब्लड प्रेशर बढ़ना हो सकता है।",
      warnings: "ब्लड प्रेशर और हृदय गति बढ़ा सकता है।",
      avoid: "कुछ हृदय रोग, अनियंत्रित उच्च रक्तचाप या कुछ दवाओं के साथ सावधानी जरूरी है।",
      interactions: "कुछ एंटीडिप्रेसेंट और ब्लड प्रेशर दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "उत्पाद के निर्देश और आवश्यक होने पर चिकित्सकीय सलाह के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "तेज सिरदर्द, सीने से जुड़े लक्षण या लगातार नाक बंद रहने पर डॉक्टर से संपर्क करें।"
    }
  },

  xylometazoline: {
    en: {
      name: "Xylometazoline",
      generic: "Xylometazoline",
      type: "Topical Nasal Decongestant",
      uses: "Used for short-term relief of blocked nose.",
      how: "Shrinks swollen blood vessels in the nasal passages.",
      side_effects: "Nasal dryness, irritation, headache, or rebound congestion with prolonged use.",
      warnings: "Prolonged or frequent use can make congestion worse.",
      avoid: "Use cautiously with high blood pressure, heart disease, or certain eye conditions.",
      interactions: "May interact with certain medicines affecting blood pressure or the nervous system.",
      when: "Use only for the short duration recommended on the product or by a doctor.",
      pregnancy: "Ask a doctor before use during pregnancy.",
      doctor: "Consult a doctor if congestion persists or repeatedly returns after stopping."
    },
    hi: {
      name: "ज़ाइलोमेटाज़ोलिन",
      generic: "ज़ाइलोमेटाज़ोलिन",
      type: "टॉपिकल नाक खोलने वाली दवा",
      uses: "नाक बंद होने से थोड़े समय की राहत के लिए उपयोग किया जाता है।",
      how: "नाक की सूजी हुई रक्त वाहिकाओं को सिकोड़कर congestion कम करता है।",
      side_effects: "नाक में सूखापन, जलन, सिरदर्द या लंबे उपयोग से rebound congestion हो सकता है।",
      warnings: "लंबे समय या बार-बार उपयोग से नाक बंद होना और बढ़ सकता है।",
      avoid: "उच्च रक्तचाप, हृदय रोग या कुछ आंखों की समस्याओं में सावधानी जरूरी है।",
      interactions: "ब्लड प्रेशर या नर्वस सिस्टम को प्रभावित करने वाली कुछ दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "उत्पाद या डॉक्टर द्वारा बताए गए सीमित समय के लिए ही उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "नाक बंद रहना जारी रहे या बंद करने के बाद बार-बार लौटे तो डॉक्टर से संपर्क करें।"
    }
  },

  ondansetron: {
    en: {
      name: "Ondansetron",
      generic: "Ondansetron",
      type: "Antiemetic",
      uses: "Used to prevent or treat nausea and vomiting in selected situations.",
      how: "Blocks serotonin receptors involved in triggering nausea and vomiting.",
      side_effects: "Headache, constipation, dizziness, or fatigue may occur.",
      warnings: "Can affect heart rhythm in susceptible people.",
      avoid: "Use caution with certain heart-rhythm conditions or medicines that prolong QT interval.",
      interactions: "May interact with some medicines affecting heart rhythm or serotonin.",
      when: "Taken according to medical advice for the specific cause of vomiting.",
      pregnancy: "Use during pregnancy only after medical advice.",
      doctor: "Seek care if vomiting is persistent, severe, or associated with dehydration or severe abdominal pain."
    },
    hi: {
      name: "ओन्डैनसेट्रॉन",
      generic: "ओन्डैनसेट्रॉन",
      type: "एंटीएमेटिक",
      uses: "कुछ स्थितियों में मिचली और उल्टी को रोकने या कम करने के लिए उपयोग किया जाता है।",
      how: "सेरोटोनिन रिसेप्टर्स को रोकता है जो मिचली और उल्टी को ट्रिगर करने में भूमिका निभाते हैं।",
      side_effects: "सिरदर्द, कब्ज, चक्कर या थकान हो सकती है।",
      warnings: "कुछ संवेदनशील लोगों में हृदय की rhythm को प्रभावित कर सकता है।",
      avoid: "कुछ heart-rhythm समस्याओं या QT बढ़ाने वाली दवाओं के साथ सावधानी जरूरी है।",
      interactions: "हृदय की rhythm या serotonin को प्रभावित करने वाली कुछ दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "उल्टी के कारण के अनुसार डॉक्टर की सलाह से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की सलाह के बाद उपयोग करें।",
      doctor: "लगातार/गंभीर उल्टी, dehydration या तेज पेट दर्द होने पर चिकित्सा सहायता लें।"
    }
  },

  domperidone: {
    en: {
      name: "Domperidone",
      generic: "Domperidone",
      type: "Prokinetic / Antiemetic",
      uses: "Used in selected cases for nausea and vomiting or certain digestive symptoms.",
      how: "Blocks dopamine receptors and can increase movement of the upper digestive tract.",
      side_effects: "Dry mouth, headache, abdominal discomfort, or rarely abnormal heart rhythm.",
      warnings: "Can increase the risk of serious heart-rhythm problems in some people.",
      avoid: "Avoid or use only under medical supervision with certain heart conditions or significant liver problems.",
      interactions: "Can interact with medicines that affect heart rhythm or its metabolism.",
      when: "Use only according to a healthcare professional's instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek medical advice for fainting, palpitations, or persistent vomiting."
    },
    hi: {
      name: "डोमपेरीडोन",
      generic: "डोमपेरीडोन",
      type: "प्रोकाइनेटिक / एंटीएमेटिक",
      uses: "कुछ मामलों में मिचली-उल्टी या कुछ पाचन संबंधी लक्षणों के लिए उपयोग किया जाता है।",
      how: "डोपामिन रिसेप्टर्स को रोकता है और ऊपरी पाचन तंत्र की गति बढ़ा सकता है।",
      side_effects: "मुंह सूखना, सिरदर्द, पेट में असहजता या दुर्लभ रूप से हृदय की rhythm में समस्या हो सकती है।",
      warnings: "कुछ लोगों में गंभीर heart-rhythm समस्या का जोखिम बढ़ सकता है।",
      avoid: "कुछ हृदय रोग या गंभीर लीवर समस्या में केवल चिकित्सकीय निगरानी में उपयोग करें।",
      interactions: "हृदय की rhythm या इसके metabolism को प्रभावित करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "केवल स्वास्थ्य विशेषज्ञ के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "बेहोशी जैसा महसूस होना, तेज/अनियमित धड़कन या लगातार उल्टी होने पर डॉक्टर से संपर्क करें।"
    }
  },

  lactulose: {
    en: {
      name: "Lactulose",
      generic: "Lactulose",
      type: "Osmotic Laxative",
      uses: "Used to relieve constipation and, in specific medical settings, to reduce ammonia levels.",
      how: "Draws water into the bowel and softens stool.",
      side_effects: "Gas, bloating, abdominal cramps, or diarrhea.",
      warnings: "Excessive use can cause dehydration or electrolyte imbalance.",
      avoid: "Use cautiously if you have severe abdominal pain or suspected bowel obstruction.",
      interactions: "Other laxatives or medicines affected by electrolyte changes may require caution.",
      when: "Used according to medical or product instructions.",
      pregnancy: "Generally considered suitable when medically needed, but consult a doctor.",
      doctor: "Seek advice for severe abdominal pain, persistent vomiting, or prolonged constipation."
    },
    hi: {
      name: "लैक्टुलोज",
      generic: "लैक्टुलोज",
      type: "ऑस्मोटिक लैक्सेटिव",
      uses: "कब्ज से राहत के लिए और कुछ विशेष चिकित्सा स्थितियों में अमोनिया स्तर कम करने के लिए उपयोग किया जाता है।",
      how: "आंत में पानी खींचकर मल को नरम करता है।",
      side_effects: "गैस, पेट फूलना, पेट में ऐंठन या दस्त हो सकते हैं।",
      warnings: "अधिक उपयोग से dehydration या electrolyte imbalance हो सकता है।",
      avoid: "तेज पेट दर्द या आंत में रुकावट की आशंका में सावधानी जरूरी है।",
      interactions: "अन्य laxatives या electrolyte को प्रभावित करने वाली दवाओं के साथ सावधानी हो सकती है।",
      when: "डॉक्टर या उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "चिकित्सकीय जरूरत में आमतौर पर उपयोग किया जा सकता है, लेकिन डॉक्टर से सलाह लें।",
      doctor: "तेज पेट दर्द, लगातार उल्टी या लंबे समय तक कब्ज रहने पर डॉक्टर से संपर्क करें।"
    }
  },

  bisacodyl: {
    en: {
      name: "Bisacodyl",
      generic: "Bisacodyl",
      type: "Stimulant Laxative",
      uses: "Used for short-term relief of constipation.",
      how: "Stimulates bowel movement and helps the intestine move stool forward.",
      side_effects: "Abdominal cramps, diarrhea, nausea, or discomfort.",
      warnings: "Frequent long-term use should be medically reviewed.",
      avoid: "Avoid self-use when severe abdominal pain or bowel obstruction is suspected.",
      interactions: "Separate from certain antacid or milk products according to product instructions.",
      when: "Usually used for short-term constipation according to instructions.",
      pregnancy: "Ask a healthcare professional before use during pregnancy.",
      doctor: "Consult a doctor for persistent constipation, severe pain, or blood in stool."
    },
    hi: {
      name: "बिसाकोडिल",
      generic: "बिसाकोडिल",
      type: "स्टिमुलेंट लैक्सेटिव",
      uses: "कम समय के लिए कब्ज से राहत देने के लिए उपयोग किया जाता है।",
      how: "आंतों की गति को बढ़ाकर मल को आगे बढ़ाने में मदद करता है।",
      side_effects: "पेट में ऐंठन, दस्त, मिचली या असहजता हो सकती है।",
      warnings: "बार-बार या लंबे समय तक उपयोग की डॉक्टर से समीक्षा होनी चाहिए।",
      avoid: "तेज पेट दर्द या आंत में रुकावट की आशंका में खुद से उपयोग न करें।",
      interactions: "कुछ एंटासिड या दूध वाले उत्पादों से अंतर रखने की आवश्यकता हो सकती है।",
      when: "निर्देशानुसार कम समय के लिए कब्ज में उपयोग किया जाता है।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "लगातार कब्ज, तेज दर्द या मल में खून होने पर डॉक्टर से संपर्क करें।"
    }
  },

  ispaghula: {
    en: {
      name: "Ispaghula Husk",
      generic: "Psyllium Husk",
      type: "Bulk-Forming Laxative / Dietary Fiber",
      uses: "Used to improve constipation and increase dietary fiber intake.",
      how: "Absorbs water and forms a softer, bulkier stool that is easier to pass.",
      side_effects: "Gas, bloating, or abdominal discomfort may occur.",
      warnings: "Must be taken with adequate fluid to reduce the risk of blockage.",
      avoid: "Avoid if you have difficulty swallowing or suspected bowel obstruction.",
      interactions: "May reduce absorption of some medicines if taken too close together.",
      when: "Usually taken with plenty of water according to product instructions.",
      pregnancy: "Generally considered suitable, but consult a healthcare professional if needed regularly.",
      doctor: "Seek advice for persistent constipation, severe pain, or difficulty swallowing."
    },
    hi: {
      name: "इसबगोल",
      generic: "साइलियम हस्क",
      type: "बल्क-फॉर्मिंग लैक्सेटिव / डाइटरी फाइबर",
      uses: "कब्ज सुधारने और आहार में फाइबर बढ़ाने के लिए उपयोग किया जाता है।",
      how: "पानी सोखकर मल को नरम और अधिक bulky बनाता है, जिससे मल त्याग आसान होता है।",
      side_effects: "गैस, पेट फूलना या पेट में असहजता हो सकती है।",
      warnings: "आंत में blockage के जोखिम को कम करने के लिए पर्याप्त पानी के साथ लेना जरूरी है।",
      avoid: "निगलने में परेशानी या आंत में रुकावट की आशंका में उपयोग न करें।",
      interactions: "कुछ दवाओं के बहुत पास लेने पर उनके absorption को कम कर सकता है।",
      when: "उत्पाद के निर्देशानुसार पर्याप्त पानी के साथ लिया जाता है।",
      pregnancy: "आमतौर पर उपयोग किया जा सकता है, लेकिन नियमित उपयोग में डॉक्टर से सलाह लें।",
      doctor: "लगातार कब्ज, तेज दर्द या निगलने में परेशानी होने पर डॉक्टर से संपर्क करें।"
    }
  },

  loperamide: {
    en: {
      name: "Loperamide",
      generic: "Loperamide",
      type: "Antidiarrheal",
      uses: "Used for short-term control of certain types of diarrhea.",
      how: "Slows movement of the intestines, allowing more water to be absorbed from stool.",
      side_effects: "Constipation, abdominal cramps, nausea, or dizziness.",
      warnings: "Should not be used for certain infectious diarrheas with blood or high fever without medical advice.",
      avoid: "Avoid self-treatment if there is blood in stool, high fever, or severe abdominal pain.",
      interactions: "Can interact with medicines that affect heart rhythm or its metabolism.",
      when: "Use according to product directions and only for appropriate diarrhea.",
      pregnancy: "Consult a healthcare professional before use during pregnancy.",
      doctor: "Seek care for dehydration, blood in stool, high fever, or persistent diarrhea."
    },
    hi: {
      name: "लोपरामाइड",
      generic: "लोपरामाइड",
      type: "एंटी-डायरियल",
      uses: "कुछ प्रकार के दस्त को थोड़े समय के लिए नियंत्रित करने के लिए उपयोग किया जाता है।",
      how: "आंतों की गति धीमी करता है, जिससे मल से अधिक पानी अवशोषित हो पाता है।",
      side_effects: "कब्ज, पेट में ऐंठन, मिचली या चक्कर हो सकते हैं।",
      warnings: "खून वाले दस्त या तेज बुखार वाले कुछ संक्रमणों में डॉक्टर की सलाह के बिना उपयोग नहीं करना चाहिए।",
      avoid: "मल में खून, तेज बुखार या तेज पेट दर्द होने पर खुद से उपयोग न करें।",
      interactions: "हृदय की rhythm या इसके metabolism को प्रभावित करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "उचित स्थिति में उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "dehydration, मल में खून, तेज बुखार या लगातार दस्त होने पर डॉक्टर से संपर्क करें।"
    }
  },

  famotidine: {
    en: {
      name: "Famotidine",
      generic: "Famotidine",
      type: "H2-Receptor Blocker",
      uses: "Used for heartburn, acid reflux, and certain ulcer conditions.",
      how: "Reduces stomach acid by blocking histamine H2 receptors.",
      side_effects: "Headache, dizziness, constipation, or diarrhea may occur.",
      warnings: "Dose may need adjustment in significant kidney disease.",
      avoid: "Use cautiously with significant kidney problems.",
      interactions: "May affect or be affected by certain medicines.",
      when: "Taken according to the product or medical instructions.",
      pregnancy: "Consult a doctor before regular use during pregnancy.",
      doctor: "Seek advice if symptoms persist, worsen, or are associated with difficulty swallowing or bleeding."
    },
    hi: {
      name: "फैमोटिडीन",
      generic: "फैमोटिडीन",
      type: "H2-रिसेप्टर ब्लॉकर",
      uses: "सीने में जलन, एसिड रिफ्लक्स और कुछ अल्सर की स्थितियों के लिए उपयोग किया जाता है।",
      how: "हिस्टामाइन H2 रिसेप्टर्स को रोककर पेट में एसिड कम करता है।",
      side_effects: "सिरदर्द, चक्कर, कब्ज या दस्त हो सकते हैं।",
      warnings: "गंभीर किडनी रोग में मात्रा में बदलाव की आवश्यकता हो सकती है।",
      avoid: "गंभीर किडनी समस्या में सावधानी से उपयोग करें।",
      interactions: "कुछ दवाओं के साथ इसका असर बदल सकता है।",
      when: "उत्पाद या डॉक्टर के निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में नियमित उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "लक्षण बने रहें/बिगड़ें या निगलने में कठिनाई या रक्तस्राव हो तो डॉक्टर से संपर्क करें।"
    }
  },

  simethicone: {
    en: {
      name: "Simethicone",
      generic: "Simethicone",
      type: "Antiflatulent",
      uses: "Used to relieve discomfort caused by gas and bloating.",
      how: "Helps gas bubbles combine and pass more easily.",
      side_effects: "Generally well tolerated; mild digestive discomfort may occur.",
      warnings: "Persistent abdominal symptoms may need evaluation rather than repeated self-treatment.",
      avoid: "Avoid if allergic to the product ingredients.",
      interactions: "Usually has few significant drug interactions.",
      when: "Used as directed when gas-related discomfort occurs.",
      pregnancy: "Ask a healthcare professional before regular use during pregnancy.",
      doctor: "Seek medical advice for severe or persistent abdominal pain or swelling."
    },
    hi: {
      name: "सिमेथिकोन",
      generic: "सिमेथिकोन",
      type: "एंटीफ्लैटुलेंट",
      uses: "गैस और पेट फूलने से होने वाली असहजता को कम करने के लिए उपयोग किया जाता है।",
      how: "गैस के बुलबुलों को एक साथ मिलाकर उन्हें आसानी से बाहर निकलने में मदद करता है।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है; हल्की पाचन संबंधी असहजता हो सकती है।",
      warnings: "लगातार पेट की समस्या होने पर बार-बार self-treatment के बजाय जांच जरूरी हो सकती है।",
      avoid: "यदि उत्पाद की सामग्री से एलर्जी हो तो उपयोग न करें।",
      interactions: "आमतौर पर महत्वपूर्ण drug interactions बहुत कम होते हैं।",
      when: "गैस की असहजता होने पर निर्देशानुसार उपयोग किया जाता है।",
      pregnancy: "गर्भावस्था में नियमित उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "तेज या लगातार पेट दर्द/सूजन होने पर डॉक्टर से संपर्क करें।"
    }
  },

  ferrous_sulfate: {
    en: {
      name: "Ferrous Sulfate",
      generic: "Ferrous Sulfate",
      type: "Iron Supplement",
      uses: "Used to prevent or treat iron deficiency and iron-deficiency anemia.",
      how: "Provides iron needed to make hemoglobin and red blood cells.",
      side_effects: "Constipation, nausea, stomach discomfort, and dark stools.",
      warnings: "Keep iron supplements away from children because overdose can be dangerous.",
      avoid: "Do not take unnecessarily if iron levels are normal unless medically advised.",
      interactions: "Can interact with antacids, calcium, thyroid medicines, and some antibiotics.",
      when: "Take according to medical advice; absorption may vary with food.",
      pregnancy: "Often used when medically indicated during pregnancy.",
      doctor: "Consult a doctor if severe stomach symptoms or signs of iron overload occur."
    },
    hi: {
      name: "फेरस सल्फेट",
      generic: "फेरस सल्फेट",
      type: "आयरन सप्लीमेंट",
      uses: "आयरन की कमी और आयरन-डेफिशिएंसी एनीमिया की रोकथाम या इलाज के लिए उपयोग किया जाता है।",
      how: "हीमोग्लोबिन और लाल रक्त कोशिकाएं बनाने के लिए आवश्यक आयरन प्रदान करता है।",
      side_effects: "कब्ज, मिचली, पेट में असहजता और मल का गहरा रंग हो सकता है।",
      warnings: "आयरन की दवाएं बच्चों से दूर रखें क्योंकि overdose खतरनाक हो सकता है।",
      avoid: "आयरन स्तर सामान्य होने पर बिना चिकित्सकीय सलाह के उपयोग न करें।",
      interactions: "एंटासिड, कैल्शियम, थायरॉइड दवाओं और कुछ एंटीबायोटिक्स के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर की सलाह के अनुसार लें; भोजन के साथ लेने पर absorption बदल सकता है।",
      pregnancy: "गर्भावस्था में चिकित्सकीय जरूरत होने पर अक्सर उपयोग किया जाता है।",
      doctor: "गंभीर पेट की समस्या या आयरन अधिक होने के संकेत पर डॉक्टर से संपर्क करें।"
    }
  },

  folic_acid: {
    en: {
      name: "Folic Acid",
      generic: "Folic Acid (Vitamin B9)",
      type: "Vitamin Supplement",
      uses: "Used to prevent or treat folate deficiency and is important before and during pregnancy.",
      how: "Provides folate needed for DNA production and healthy red blood cell formation.",
      side_effects: "Usually well tolerated; nausea or bloating may occasionally occur.",
      warnings: "High doses can mask vitamin B12 deficiency.",
      avoid: "Avoid unnecessary high-dose use without medical advice.",
      interactions: "May interact with certain medicines, including some anti-seizure medicines.",
      when: "Taken regularly according to the recommended plan.",
      pregnancy: "Often recommended before and during pregnancy, with the appropriate amount determined by a healthcare professional.",
      doctor: "Consult a doctor if anemia symptoms persist despite supplementation."
    },
    hi: {
      name: "फोलिक एसिड",
      generic: "फोलिक एसिड (विटामिन B9)",
      type: "विटामिन सप्लीमेंट",
      uses: "फोलेट की कमी की रोकथाम/इलाज के लिए और गर्भावस्था से पहले व दौरान महत्वपूर्ण है।",
      how: "DNA बनाने और स्वस्थ लाल रक्त कोशिकाओं के निर्माण के लिए आवश्यक फोलेट प्रदान करता है।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है; कभी-कभी मिचली या पेट फूलना हो सकता है।",
      warnings: "अधिक मात्रा विटामिन B12 की कमी को छिपा सकती है।",
      avoid: "बिना चिकित्सकीय सलाह के अनावश्यक high-dose उपयोग न करें।",
      interactions: "कुछ दवाओं, जैसे कुछ anti-seizure medicines, के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर/स्वास्थ्य विशेषज्ञ की सलाह के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था से पहले और दौरान अक्सर सलाह दी जाती है; सही मात्रा स्वास्थ्य विशेषज्ञ तय करते हैं।",
      doctor: "सप्लीमेंट लेने के बाद भी एनीमिया के लक्षण बने रहें तो डॉक्टर से संपर्क करें।"
    }
  },

  vitamin_b12: {
    en: {
      name: "Vitamin B12",
      generic: "Cobalamin",
      type: "Vitamin Supplement",
      uses: "Used to prevent or treat vitamin B12 deficiency.",
      how: "Supports red blood cell production and normal nerve function.",
      side_effects: "Usually well tolerated; mild digestive symptoms or skin reactions may occur.",
      warnings: "The cause of deficiency should be identified when possible.",
      avoid: "Do not rely on supplements alone if significant neurological symptoms are present.",
      interactions: "Certain medicines can reduce B12 absorption over time.",
      when: "Taken according to the prescribed or product instructions.",
      pregnancy: "Can be used when medically indicated during pregnancy.",
      doctor: "Seek medical advice for persistent anemia, numbness, weakness, or balance problems."
    },
    hi: {
      name: "विटामिन B12",
      generic: "कोबालामिन",
      type: "विटामिन सप्लीमेंट",
      uses: "विटामिन B12 की कमी की रोकथाम या इलाज के लिए उपयोग किया जाता है।",
      how: "लाल रक्त कोशिकाओं के निर्माण और सामान्य nerve function में मदद करता है।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है; हल्की पाचन समस्या या त्वचा प्रतिक्रिया हो सकती है।",
      warnings: "जहां संभव हो, कमी के कारण की पहचान करना जरूरी है।",
      avoid: "महत्वपूर्ण neurological symptoms होने पर केवल सप्लीमेंट पर निर्भर न रहें।",
      interactions: "कुछ दवाएं लंबे समय में B12 absorption कम कर सकती हैं।",
      when: "डॉक्टर या उत्पाद के निर्देशानुसार लिया जाता है।",
      pregnancy: "चिकित्सकीय जरूरत में गर्भावस्था के दौरान उपयोग किया जा सकता है।",
      doctor: "लगातार एनीमिया, सुन्नपन, कमजोरी या संतुलन की समस्या होने पर डॉक्टर से संपर्क करें।"
    }
  },

  calcium_carbonate: {
    en: {
      name: "Calcium Carbonate",
      generic: "Calcium Carbonate",
      type: "Calcium Supplement / Antacid",
      uses: "Used as a calcium supplement and also as an antacid.",
      how: "Provides calcium and can neutralize stomach acid.",
      side_effects: "Constipation, bloating, or stomach discomfort.",
      warnings: "Excessive calcium intake can contribute to kidney stones or high calcium levels.",
      avoid: "Use cautiously with kidney stones or significant kidney disease.",
      interactions: "Can reduce absorption of iron, thyroid medicines, and some antibiotics.",
      when: "Use according to the intended purpose and product directions.",
      pregnancy: "May be used when needed, but medical advice is recommended.",
      doctor: "Consult a doctor for persistent abdominal symptoms or suspected kidney stones."
    },
    hi: {
      name: "कैल्शियम कार्बोनेट",
      generic: "कैल्शियम कार्बोनेट",
      type: "कैल्शियम सप्लीमेंट / एंटासिड",
      uses: "कैल्शियम सप्लीमेंट और एंटासिड के रूप में उपयोग किया जाता है।",
      how: "कैल्शियम प्रदान करता है और पेट के एसिड को neutralize कर सकता है।",
      side_effects: "कब्ज, पेट फूलना या पेट में असहजता हो सकती है।",
      warnings: "बहुत अधिक कैल्शियम से kidney stones या blood calcium बढ़ सकता है।",
      avoid: "किडनी स्टोन या गंभीर किडनी रोग में सावधानी से उपयोग करें।",
      interactions: "आयरन, थायरॉइड दवाओं और कुछ एंटीबायोटिक्स के absorption को कम कर सकता है।",
      when: "उद्देश्य और उत्पाद के निर्देश के अनुसार उपयोग करें।",
      pregnancy: "जरूरत होने पर उपयोग किया जा सकता है, लेकिन डॉक्टर की सलाह उचित है।",
      doctor: "लगातार पेट की समस्या या kidney stone की आशंका में डॉक्टर से संपर्क करें।"
    }
  },

  vitamin_d3: {
    en: {
      name: "Vitamin D3",
      generic: "Cholecalciferol",
      type: "Vitamin Supplement",
      uses: "Used to prevent or treat vitamin D deficiency and support bone health.",
      how: "Helps the body absorb calcium and maintain healthy bones and muscles.",
      side_effects: "Usually well tolerated; excessive intake can cause high calcium levels.",
      warnings: "High doses taken unnecessarily can be harmful.",
      avoid: "Avoid excessive supplementation without medical advice.",
      interactions: "Can interact with certain medicines, including some diuretics and medicines affecting calcium.",
      when: "Taken according to the recommended schedule.",
      pregnancy: "Use according to medical advice during pregnancy.",
      doctor: "Consult a doctor if symptoms suggest high calcium, such as persistent nausea, weakness, or excessive thirst."
    },
    hi: {
      name: "विटामिन D3",
      generic: "कोलेकैल्सिफेरॉल",
      type: "विटामिन सप्लीमेंट",
      uses: "विटामिन D की कमी की रोकथाम/इलाज और हड्डियों के स्वास्थ्य के लिए उपयोग किया जाता है।",
      how: "शरीर को कैल्शियम absorb करने और हड्डियों/मांसपेशियों को स्वस्थ रखने में मदद करता है।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है; अधिक मात्रा से कैल्शियम बढ़ सकता है।",
      warnings: "बिना जरूरत high-dose सप्लीमेंट लेना नुकसानदायक हो सकता है।",
      avoid: "बिना डॉक्टर की सलाह के अत्यधिक सप्लीमेंटेशन से बचें।",
      interactions: "कुछ मूत्रवर्धक और कैल्शियम को प्रभावित करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "सुझाए गए schedule के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में डॉक्टर की सलाह के अनुसार उपयोग करें।",
      doctor: "लगातार मिचली, कमजोरी या बहुत अधिक प्यास जैसे high-calcium symptoms होने पर डॉक्टर से संपर्क करें।"
    }
  },

  zinc: {
    en: {
      name: "Zinc",
      generic: "Zinc Supplement",
      type: "Mineral Supplement",
      uses: "Used to prevent or treat zinc deficiency and in selected diarrheal illnesses.",
      how: "Provides zinc needed for immune function, growth, and tissue repair.",
      side_effects: "Nausea, stomach upset, or metallic taste may occur.",
      warnings: "Excessive long-term intake can cause copper deficiency.",
      avoid: "Avoid unnecessary high-dose long-term use.",
      interactions: "Can reduce absorption of some antibiotics when taken too close together.",
      when: "Taken according to medical or product instructions.",
      pregnancy: "Use during pregnancy according to healthcare advice.",
      doctor: "Consult a doctor if symptoms persist or if prolonged supplementation is needed."
    },
    hi: {
      name: "जिंक",
      generic: "जिंक सप्लीमेंट",
      type: "मिनरल सप्लीमेंट",
      uses: "जिंक की कमी की रोकथाम/इलाज और कुछ दस्त की स्थितियों में उपयोग किया जाता है।",
      how: "इम्यून सिस्टम, वृद्धि और tissue repair के लिए आवश्यक जिंक प्रदान करता है।",
      side_effects: "मिचली, पेट खराब या मुंह में metallic taste हो सकता है।",
      warnings: "लंबे समय तक अधिक मात्रा में लेने से copper deficiency हो सकती है।",
      avoid: "बिना जरूरत लंबे समय तक high-dose उपयोग से बचें।",
      interactions: "कुछ एंटीबायोटिक्स का absorption कम कर सकता है यदि बहुत पास लिया जाए।",
      when: "डॉक्टर या उत्पाद के निर्देशानुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
      doctor: "लक्षण बने रहें या लंबे समय तक सप्लीमेंट की जरूरत हो तो डॉक्टर से संपर्क करें।"
    }
  },

  mupirocin: {
    en: {
      name: "Mupirocin",
      generic: "Mupirocin",
      type: "Topical Antibiotic",
      uses: "Used for certain bacterial skin infections.",
      how: "Stops bacteria from making proteins needed for their growth.",
      side_effects: "Local burning, itching, redness, or irritation.",
      warnings: "For external use as directed; unnecessary antibiotic use can contribute to resistance.",
      avoid: "Avoid if allergic to mupirocin or its ingredients.",
      interactions: "Few significant interactions when used topically, but tell your doctor about other treatments.",
      when: "Apply only as directed for the prescribed skin condition.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek care if infection spreads, worsens, or does not improve."
    },
    hi: {
      name: "म्यूपिरोसिन",
      generic: "म्यूपिरोसिन",
      type: "टॉपिकल एंटीबायोटिक",
      uses: "कुछ बैक्टीरियल त्वचा संक्रमणों के इलाज के लिए उपयोग किया जाता है।",
      how: "बैक्टीरिया में उनके विकास के लिए जरूरी proteins बनने से रोकता है।",
      side_effects: "स्थानीय जलन, खुजली, लालिमा या irritation हो सकती है।",
      warnings: "निर्देशानुसार बाहरी उपयोग के लिए है; अनावश्यक antibiotic उपयोग से resistance बढ़ सकता है।",
      avoid: "यदि म्यूपिरोसिन या इसकी सामग्री से एलर्जी हो तो उपयोग न करें।",
      interactions: "त्वचा पर उपयोग करने पर महत्वपूर्ण interactions कम होते हैं, फिर भी अन्य treatments की जानकारी डॉक्टर को दें।",
      when: "केवल निर्धारित skin condition के लिए निर्देशानुसार लगाएं।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "संक्रमण फैलने, बिगड़ने या सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  fusidic_acid: {
    en: {
      name: "Fusidic Acid",
      generic: "Fusidic Acid",
      type: "Topical Antibiotic",
      uses: "Used for certain bacterial skin infections.",
      how: "Stops bacterial protein production.",
      side_effects: "Local irritation, burning, itching, or redness.",
      warnings: "Use only for appropriate bacterial infections and as directed.",
      avoid: "Avoid if allergic to the medicine.",
      interactions: "Topical use generally has few interactions.",
      when: "Apply according to the prescribed instructions.",
      pregnancy: "Ask a doctor before use during pregnancy.",
      doctor: "Seek medical advice if the infection worsens or fails to improve."
    },
    hi: {
      name: "फ्यूसिडिक एसिड",
      generic: "फ्यूसिडिक एसिड",
      type: "टॉपिकल एंटीबायोटिक",
      uses: "कुछ बैक्टीरियल त्वचा संक्रमणों के इलाज के लिए उपयोग किया जाता है।",
      how: "बैक्टीरिया में protein production को रोकता है।",
      side_effects: "स्थानीय जलन, खुजली या लालिमा हो सकती है।",
      warnings: "केवल उचित bacterial infection में और निर्देशानुसार उपयोग करें।",
      avoid: "यदि इस दवा से एलर्जी हो तो उपयोग न करें।",
      interactions: "त्वचा पर उपयोग करने पर interactions आमतौर पर कम होते हैं।",
      when: "डॉक्टर द्वारा बताए अनुसार लगाएं।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "संक्रमण बिगड़ने या सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  ketoconazole: {
    en: {
      name: "Ketoconazole",
      generic: "Ketoconazole",
      type: "Antifungal",
      uses: "Used to treat certain fungal infections of the skin or scalp depending on formulation.",
      how: "Disrupts fungal cell membrane formation.",
      side_effects: "Skin irritation, itching, dryness, or redness with topical forms.",
      warnings: "Formulations differ greatly; oral ketoconazole has significant risks and requires specialist supervision.",
      avoid: "Do not use oral forms without specialist medical supervision.",
      interactions: "Can have important interactions, especially oral formulations.",
      when: "Use according to the formulation and medical instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "See a doctor if the infection spreads or does not improve."
    },
    hi: {
      name: "केटोकोनाज़ोल",
      generic: "केटोकोनाज़ोल",
      type: "एंटीफंगल",
      uses: "फॉर्म के अनुसार त्वचा या scalp के कुछ fungal infections के इलाज के लिए उपयोग किया जाता है।",
      how: "फंगस की cell membrane बनने की प्रक्रिया को बाधित करता है।",
      side_effects: "टॉपिकल रूप में त्वचा में जलन, खुजली, सूखापन या लालिमा हो सकती है।",
      warnings: "इसके अलग-अलग formulations होते हैं; oral ketoconazole में गंभीर risks हो सकते हैं और specialist supervision जरूरी है।",
      avoid: "Oral form का उपयोग specialist की निगरानी के बिना न करें।",
      interactions: "विशेषकर oral form में महत्वपूर्ण drug interactions हो सकते हैं।",
      when: "फॉर्म और डॉक्टर के निर्देश के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "संक्रमण फैलने या सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  terbinafine: {
    en: {
      name: "Terbinafine",
      generic: "Terbinafine",
      type: "Antifungal",
      uses: "Used for certain fungal infections of the skin and nails.",
      how: "Blocks an enzyme needed for fungal cell membrane production.",
      side_effects: "Topical irritation; oral treatment can cause digestive symptoms or liver problems.",
      warnings: "Oral treatment may require attention to liver health.",
      avoid: "Avoid oral use without medical evaluation, especially with significant liver disease.",
      interactions: "Oral terbinafine can interact with several medicines.",
      when: "Use according to the prescribed formulation and schedule.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek advice for jaundice, dark urine, severe rash, or worsening infection."
    },
    hi: {
      name: "टर्बिनाफाइन",
      generic: "टर्बिनाफाइन",
      type: "एंटीफंगल",
      uses: "त्वचा और नाखूनों के कुछ fungal infections के इलाज के लिए उपयोग किया जाता है।",
      how: "फंगल cell membrane बनाने के लिए जरूरी enzyme को रोकता है।",
      side_effects: "टॉपिकल रूप में irritation; oral treatment में पाचन समस्या या लीवर की समस्या हो सकती है।",
      warnings: "Oral treatment में liver health पर ध्यान देना पड़ सकता है।",
      avoid: "खासकर liver disease में medical evaluation के बिना oral form का उपयोग न करें।",
      interactions: "Oral terbinafine कई दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "फॉर्म और डॉक्टर के निर्देश के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "पीलिया, गहरे रंग का पेशाब, गंभीर rash या infection बिगड़ने पर डॉक्टर से संपर्क करें।"
    }
  },

  permethrin: {
    en: {
      name: "Permethrin",
      generic: "Permethrin",
      type: "Antiparasitic",
      uses: "Used mainly to treat scabies and certain lice infestations.",
      how: "Damages the nervous system of mites and lice.",
      side_effects: "Temporary itching, burning, redness, or irritation may occur.",
      warnings: "Itching may continue for some time even after successful treatment.",
      avoid: "Use the appropriate formulation for the age and condition; avoid contact with eyes.",
      interactions: "Few significant interactions when used topically.",
      when: "Use according to the product or medical instructions.",
      pregnancy: "Ask a healthcare professional before use during pregnancy.",
      doctor: "Consult a doctor if symptoms persist or new lesions continue to appear."
    },
    hi: {
      name: "परमेथ्रिन",
      generic: "परमेथ्रिन",
      type: "एंटीपैरासिटिक",
      uses: "मुख्य रूप से scabies और कुछ lice infestations के इलाज के लिए उपयोग किया जाता है।",
      how: "mites और lice के nervous system को प्रभावित करता है।",
      side_effects: "कुछ समय के लिए खुजली, जलन, लालिमा या irritation हो सकती है।",
      warnings: "सफल treatment के बाद भी कुछ समय तक खुजली रह सकती है।",
      avoid: "उम्र और बीमारी के अनुसार सही formulation इस्तेमाल करें; आंखों से संपर्क से बचें।",
      interactions: "टॉपिकल उपयोग में महत्वपूर्ण interactions बहुत कम होते हैं।",
      when: "उत्पाद या डॉक्टर के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "लक्षण बने रहें या नए lesions आते रहें तो डॉक्टर से संपर्क करें।"
    }
  },

  acyclovir: {
    en: {
      name: "Acyclovir",
      generic: "Acyclovir",
      type: "Antiviral",
      uses: "Used to treat certain herpes virus infections.",
      how: "Interferes with viral DNA replication.",
      side_effects: "Nausea, headache, diarrhea, or local irritation depending on formulation.",
      warnings: "Adequate hydration may be important with systemic treatment, especially in kidney problems.",
      avoid: "Use cautiously in significant kidney disease.",
      interactions: "Other medicines affecting kidney function may require caution.",
      when: "Use according to the prescribed schedule.",
      pregnancy: "Use during pregnancy only after medical advice.",
      doctor: "Consult a doctor for severe infection, neurological symptoms, or worsening symptoms."
    },
    hi: {
      name: "एसाइक्लोविर",
      generic: "एसाइक्लोविर",
      type: "एंटीवायरल",
      uses: "कुछ herpes virus infections के इलाज के लिए उपयोग किया जाता है।",
      how: "वायरस के DNA replication को बाधित करता है।",
      side_effects: "फॉर्म के अनुसार मिचली, सिरदर्द, दस्त या स्थानीय irritation हो सकती है।",
      warnings: "Systemic treatment में पर्याप्त hydration महत्वपूर्ण हो सकता है, खासकर kidney problems में।",
      avoid: "गंभीर किडनी रोग में सावधानी से उपयोग करें।",
      interactions: "किडनी की कार्यक्षमता को प्रभावित करने वाली अन्य दवाओं के साथ सावधानी जरूरी हो सकती है।",
      when: "डॉक्टर के निर्देशानुसार नियमित schedule पर लें।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की सलाह से उपयोग करें।",
      doctor: "गंभीर infection, neurological symptoms या symptoms बिगड़ने पर डॉक्टर से संपर्क करें।"
    }
  },

  valaciclovir: {
    en: {
      name: "Valaciclovir",
      generic: "Valaciclovir",
      type: "Antiviral",
      uses: "Used to treat certain herpes virus infections.",
      how: "Converted in the body to acyclovir, which interferes with viral DNA replication.",
      side_effects: "Headache, nausea, abdominal discomfort, or dizziness.",
      warnings: "Kidney function is important when using systemic treatment.",
      avoid: "Use cautiously in kidney disease or dehydration.",
      interactions: "Other medicines affecting kidney function may require caution.",
      when: "Taken according to the prescribed schedule.",
      pregnancy: "Use only after medical advice during pregnancy.",
      doctor: "Seek medical advice for confusion, severe weakness, or worsening infection."
    },
    hi: {
      name: "वैलासाइक्लोविर",
      generic: "वैलासाइक्लोविर",
      type: "एंटीवायरल",
      uses: "कुछ herpes virus infections के इलाज के लिए उपयोग किया जाता है।",
      how: "शरीर में acyclovir में बदलकर वायरल DNA replication को रोकता है।",
      side_effects: "सिरदर्द, मिचली, पेट में असहजता या चक्कर हो सकते हैं।",
      warnings: "Systemic treatment में किडनी की कार्यक्षमता महत्वपूर्ण होती है।",
      avoid: "किडनी की बीमारी या dehydration में सावधानी जरूरी है।",
      interactions: "किडनी को प्रभावित करने वाली अन्य दवाओं के साथ सावधानी हो सकती है।",
      when: "डॉक्टर द्वारा निर्धारित schedule के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की सलाह से उपयोग करें।",
      doctor: "भ्रम, बहुत अधिक कमजोरी या infection बिगड़ने पर डॉक्टर से संपर्क करें।"
    }
  },

  prednisolone: {
    en: {
      name: "Prednisolone",
      generic: "Prednisolone",
      type: "Corticosteroid",
      uses: "Used to reduce inflammation in many allergic, inflammatory, and immune-related conditions.",
      how: "Suppresses inflammatory and immune responses.",
      side_effects: "Increased appetite, mood changes, stomach upset, increased blood sugar, or fluid retention.",
      warnings: "Longer use can increase infection risk and cause other steroid-related effects. Do not stop long-term treatment suddenly without medical advice.",
      avoid: "Use cautiously with infections, diabetes, or certain other conditions.",
      interactions: "Can interact with many medicines, including some vaccines and medicines affecting immunity.",
      when: "Take exactly according to the prescribed plan.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Contact a doctor for severe infection symptoms, significant mood changes, or other concerning effects."
    },
    hi: {
      name: "प्रेडनिसोलोन",
      generic: "प्रेडनिसोलोन",
      type: "कॉर्टिकोस्टेरॉइड",
      uses: "कई allergic, inflammatory और immune-related conditions में सूजन कम करने के लिए उपयोग किया जाता है।",
      how: "सूजन और immune response को दबाता है।",
      side_effects: "भूख बढ़ना, mood changes, पेट खराब, blood sugar बढ़ना या शरीर में पानी रुकना हो सकता है।",
      warnings: "लंबे उपयोग से infection का जोखिम और अन्य steroid-related effects बढ़ सकते हैं। लंबे treatment को अचानक बंद न करें।",
      avoid: "संक्रमण, diabetes या कुछ अन्य स्थितियों में सावधानी जरूरी है।",
      interactions: "कई दवाओं, कुछ vaccines और immunity को प्रभावित करने वाली दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर की निर्धारित योजना के अनुसार ही लें।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "गंभीर infection के लक्षण, महत्वपूर्ण mood changes या अन्य चिंताजनक प्रभाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  dexamethasone: {
    en: {
      name: "Dexamethasone",
      generic: "Dexamethasone",
      type: "Corticosteroid",
      uses: "Used to reduce inflammation and immune activity in selected medical conditions.",
      how: "Suppresses inflammatory and immune responses.",
      side_effects: "Increased blood sugar, mood changes, stomach upset, insomnia, or fluid retention.",
      warnings: "Long-term use can cause significant steroid-related complications and should be medically supervised.",
      avoid: "Do not self-start or stop prolonged treatment.",
      interactions: "Interacts with many medicines and can affect immune responses.",
      when: "Only according to the prescribed plan.",
      pregnancy: "Use during pregnancy only when medically indicated.",
      doctor: "Seek medical advice for severe infection symptoms or significant side effects."
    },
    hi: {
      name: "डेक्सामेथासोन",
      generic: "डेक्सामेथासोन",
      type: "कॉर्टिकोस्टेरॉइड",
      uses: "कुछ चिकित्सा स्थितियों में सूजन और immune activity कम करने के लिए उपयोग किया जाता है।",
      how: "सूजन और immune response को दबाता है।",
      side_effects: "ब्लड शुगर बढ़ना, mood changes, पेट खराब, नींद में परेशानी या fluid retention हो सकता है।",
      warnings: "लंबे उपयोग से गंभीर steroid-related complications हो सकती हैं और medical supervision जरूरी है।",
      avoid: "लंबे treatment को खुद से शुरू या बंद न करें।",
      interactions: "कई दवाओं के साथ interaction कर सकता है और immune response को प्रभावित कर सकता है।",
      when: "केवल डॉक्टर की निर्धारित योजना के अनुसार लें।",
      pregnancy: "गर्भावस्था में केवल चिकित्सकीय जरूरत पर उपयोग करें।",
      doctor: "गंभीर infection symptoms या महत्वपूर्ण side effects होने पर डॉक्टर से संपर्क करें।"
    }
  },

  betamethasone: {
    en: {
      name: "Betamethasone",
      generic: "Betamethasone",
      type: "Corticosteroid",
      uses: "Used to reduce inflammation and itching in certain skin conditions; other formulations have different medical uses.",
      how: "Suppresses local inflammatory and immune responses.",
      side_effects: "Skin thinning, irritation, or changes in skin color with prolonged topical use.",
      warnings: "Potent topical steroids should not be used unnecessarily or for prolonged periods.",
      avoid: "Avoid applying to untreated infections unless directed by a doctor.",
      interactions: "Few interactions with topical use, but other steroid products may add to effects.",
      when: "Use only as prescribed for the specific condition.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek advice if skin infection worsens or the condition does not improve."
    },
    hi: {
      name: "बेटामेथासोन",
      generic: "बेटामेथासोन",
      type: "कॉर्टिकोस्टेरॉइड",
      uses: "कुछ त्वचा रोगों में सूजन और खुजली कम करने के लिए उपयोग किया जाता है; अन्य formulations के अलग उपयोग होते हैं।",
      how: "स्थानीय inflammatory और immune response को दबाता है।",
      side_effects: "लंबे टॉपिकल उपयोग से त्वचा पतली होना, irritation या skin color में बदलाव हो सकता है।",
      warnings: "Potent topical steroids का अनावश्यक या लंबे समय तक उपयोग नहीं करना चाहिए।",
      avoid: "अनुपचारित infection पर डॉक्टर की सलाह के बिना न लगाएं।",
      interactions: "टॉपिकल उपयोग में interactions कम होते हैं, लेकिन अन्य steroid products effects बढ़ा सकते हैं।",
      when: "विशिष्ट बीमारी के लिए डॉक्टर के निर्देशानुसार ही उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "त्वचा संक्रमण बिगड़ने या सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  calamine: {
    en: {
      name: "Calamine",
      generic: "Calamine",
      type: "Topical Skin Protectant",
      uses: "Used to temporarily relieve itching and minor skin irritation.",
      how: "Provides a soothing and protective effect on irritated skin.",
      side_effects: "Dryness or mild irritation may occur.",
      warnings: "For external use only; avoid eyes and swallowing.",
      avoid: "Do not use on severe or infected skin lesions without medical advice.",
      interactions: "Few significant interactions with topical use.",
      when: "Applied to affected skin according to product instructions.",
      pregnancy: "Usually considered low risk when used as directed, but ask a doctor if regular use is needed.",
      doctor: "Consult a doctor for worsening rash, infection signs, or persistent symptoms."
    },
    hi: {
      name: "कैलामाइन",
      generic: "कैलामाइन",
      type: "टॉपिकल स्किन प्रोटेक्टेंट",
      uses: "खुजली और हल्की त्वचा irritation से अस्थायी राहत के लिए उपयोग किया जाता है।",
      how: "त्वचा पर soothing और protective effect देता है।",
      side_effects: "त्वचा में सूखापन या हल्की irritation हो सकती है।",
      warnings: "केवल बाहरी उपयोग के लिए; आंखों और मुंह से दूर रखें।",
      avoid: "गंभीर या संक्रमित skin lesions पर डॉक्टर की सलाह के बिना न लगाएं।",
      interactions: "टॉपिकल उपयोग में महत्वपूर्ण interactions बहुत कम होते हैं।",
      when: "उत्पाद के निर्देशानुसार प्रभावित त्वचा पर लगाया जाता है।",
      pregnancy: "निर्देशानुसार उपयोग में आमतौर पर कम जोखिम माना जाता है, फिर भी नियमित उपयोग में डॉक्टर से सलाह लें।",
      doctor: "rash बिगड़ने, infection के संकेत या लक्षण बने रहने पर डॉक्टर से संपर्क करें।"
    }
  },

  benzoyl_peroxide: {
    en: {
      name: "Benzoyl Peroxide",
      generic: "Benzoyl Peroxide",
      type: "Topical Acne Medicine",
      uses: "Used to treat acne and reduce acne-causing bacteria.",
      how: "Helps kill acne-causing bacteria and removes excess dead skin cells.",
      side_effects: "Dryness, peeling, redness, burning, or irritation.",
      warnings: "Can irritate sensitive skin and may bleach hair or fabrics.",
      avoid: "Avoid contact with eyes, lips, and broken skin.",
      interactions: "Can increase irritation when combined with other strong acne treatments.",
      when: "Apply as directed to clean, dry skin.",
      pregnancy: "Ask a healthcare professional before use during pregnancy.",
      doctor: "Consult a doctor for severe irritation or acne that does not improve."
    },
    hi: {
      name: "बेंज़ॉयल पेरोक्साइड",
      generic: "बेंज़ॉयल पेरोक्साइड",
      type: "टॉपिकल एक्ने मेडिसिन",
      uses: "मुंहासों के इलाज और acne-causing bacteria कम करने के लिए उपयोग किया जाता है।",
      how: "मुंहासे पैदा करने वाले bacteria को कम करता है और dead skin cells हटाने में मदद करता है।",
      side_effects: "सूखापन, त्वचा छिलना, लालिमा, जलन या irritation हो सकती है।",
      warnings: "Sensitive skin में irritation कर सकता है और बाल/कपड़ों का रंग हल्का कर सकता है।",
      avoid: "आंखों, होंठों और damaged skin से संपर्क से बचें।",
      interactions: "अन्य strong acne treatments के साथ irritation बढ़ सकती है।",
      when: "साफ और सूखी त्वचा पर निर्देशानुसार लगाएं।",
      pregnancy: "गर्भावस्था में उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "गंभीर irritation या acne में सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  adapalene: {
    en: {
      name: "Adapalene",
      generic: "Adapalene",
      type: "Topical Retinoid",
      uses: "Used to treat acne and prevent new acne lesions.",
      how: "Normalizes skin-cell turnover and helps prevent blocked pores.",
      side_effects: "Dryness, redness, peeling, or irritation, especially early in treatment.",
      warnings: "Can increase sensitivity to irritation; use sun protection.",
      avoid: "Avoid applying to severely irritated or broken skin.",
      interactions: "Other irritating skin products may increase irritation.",
      when: "Usually applied once daily according to product or medical instructions.",
      pregnancy: "Topical retinoids are generally avoided during pregnancy; seek medical advice.",
      doctor: "Consult a doctor for severe irritation or persistent acne."
    },
    hi: {
      name: "एडापलीन",
      generic: "एडापलीन",
      type: "टॉपिकल रेटिनॉइड",
      uses: "मुंहासों के इलाज और नए acne lesions को रोकने के लिए उपयोग किया जाता है।",
      how: "Skin-cell turnover को सामान्य करता है और pores block होने से रोकने में मदद करता है।",
      side_effects: "खासकर शुरुआत में सूखापन, लालिमा, skin peeling या irritation हो सकती है।",
      warnings: "त्वचा irritation के प्रति संवेदनशील हो सकती है; sun protection जरूरी है।",
      avoid: "बहुत irritated या damaged skin पर न लगाएं।",
      interactions: "अन्य irritating skin products के साथ irritation बढ़ सकती है।",
      when: "आमतौर पर उत्पाद या डॉक्टर के निर्देशानुसार दिन में एक बार लगाया जाता है।",
      pregnancy: "गर्भावस्था में topical retinoids आमतौर पर avoid किए जाते हैं; डॉक्टर से सलाह लें।",
      doctor: "गंभीर irritation या acne में सुधार न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  azelaic_acid: {
    en: {
      name: "Azelaic Acid",
      generic: "Azelaic Acid",
      type: "Topical Dermatological Medicine",
      uses: "Used for acne and certain pigmentation or inflammatory skin conditions.",
      how: "Reduces acne-causing bacteria and helps normalize skin-cell growth and pigmentation.",
      side_effects: "Mild burning, itching, dryness, or redness may occur.",
      warnings: "Skin may be more sensitive during initial use.",
      avoid: "Avoid contact with eyes and severely irritated skin.",
      interactions: "Other irritating topical products may increase irritation.",
      when: "Applied according to product or medical instructions.",
      pregnancy: "Often considered suitable when medically needed, but consult a doctor.",
      doctor: "Seek advice for severe irritation or persistent skin changes."
    },
    hi: {
      name: "एज़ेलाइक एसिड",
      generic: "एज़ेलाइक एसिड",
      type: "टॉपिकल डर्मेटोलॉजिकल मेडिसिन",
      uses: "मुंहासों और कुछ pigmentation या inflammatory skin conditions के लिए उपयोग किया जाता है।",
      how: "Acne-causing bacteria कम करता है और skin-cell growth तथा pigmentation को regulate करने में मदद करता है।",
      side_effects: "हल्की जलन, खुजली, सूखापन या लालिमा हो सकती है।",
      warnings: "शुरुआती उपयोग में त्वचा अधिक sensitive हो सकती है।",
      avoid: "आंखों और बहुत irritated skin से संपर्क से बचें।",
      interactions: "अन्य irritating topical products के साथ irritation बढ़ सकती है।",
      when: "उत्पाद या डॉक्टर के निर्देशानुसार लगाया जाता है।",
      pregnancy: "चिकित्सकीय जरूरत में अक्सर उपयोग किया जा सकता है, लेकिन डॉक्टर से सलाह लें।",
      doctor: "गंभीर irritation या skin changes बने रहने पर डॉक्टर से संपर्क करें।"
    }
  },

  diclofenac_gel: {
    en: {
      name: "Diclofenac Gel",
      generic: "Diclofenac",
      type: "Topical NSAID",
      uses: "Used for localized muscle, joint, or inflammatory pain.",
      how: "Reduces local production of prostaglandins involved in pain and inflammation.",
      side_effects: "Skin irritation, redness, dryness, or itching.",
      warnings: "Avoid applying to broken skin and protect treated areas from excessive sunlight.",
      avoid: "Avoid if allergic to diclofenac or certain NSAIDs.",
      interactions: "Systemic interactions are lower than oral NSAIDs but can still matter with extensive use.",
      when: "Apply to the affected area according to product instructions.",
      pregnancy: "Ask a doctor before use during pregnancy, especially later pregnancy.",
      doctor: "Consult a doctor if pain persists, worsens, or significant skin reaction occurs."
    },
    hi: {
      name: "डाइक्लोफेनाक जेल",
      generic: "डाइक्लोफेनाक",
      type: "टॉपिकल NSAID",
      uses: "स्थानीय मांसपेशी, जोड़ या सूजन से जुड़े दर्द के लिए उपयोग किया जाता है।",
      how: "दर्द और सूजन में शामिल prostaglandins के स्थानीय निर्माण को कम करता है।",
      side_effects: "त्वचा में irritation, लालिमा, सूखापन या खुजली हो सकती है।",
      warnings: "Damaged skin पर न लगाएं और treated area को excessive sunlight से बचाएं।",
      avoid: "डाइक्लोफेनाक या कुछ NSAIDs से एलर्जी होने पर उपयोग न करें।",
      interactions: "Oral NSAIDs की तुलना में systemic interactions कम होते हैं, लेकिन अधिक उपयोग में फिर भी महत्वपूर्ण हो सकते हैं।",
      when: "प्रभावित जगह पर उत्पाद के निर्देशानुसार लगाएं।",
      pregnancy: "गर्भावस्था में, विशेषकर बाद के चरण में, उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "दर्द बना रहे/बढ़े या त्वचा पर गंभीर reaction हो तो डॉक्टर से संपर्क करें।"
    }
  },

  lidocaine: {
    en: {
      name: "Lidocaine",
      generic: "Lidocaine",
      type: "Local Anesthetic",
      uses: "Used to temporarily numb a specific area and reduce local pain.",
      how: "Blocks nerve signals that carry pain sensations.",
      side_effects: "Local irritation, numbness, or rarely systemic toxicity if excessive amounts are absorbed.",
      warnings: "Use only as directed; excessive use can be dangerous.",
      avoid: "Avoid use on large areas or damaged skin unless medically directed.",
      interactions: "Can interact with other local anesthetics and certain medicines affecting heart rhythm.",
      when: "Use according to the formulation and medical instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek help for severe dizziness, seizures, breathing problems, or abnormal heartbeat after use."
    },
    hi: {
      name: "लिडोकेन",
      generic: "लिडोकेन",
      type: "लोकल एनेस्थेटिक",
      uses: "किसी खास जगह को थोड़ी देर के लिए सुन्न करने और स्थानीय दर्द कम करने के लिए उपयोग किया जाता है।",
      how: "दर्द के signals ले जाने वाली nerves को block करता है।",
      side_effects: "स्थानीय irritation या numbness; अधिक absorption होने पर दुर्लभ रूप से गंभीर toxicity हो सकती है।",
      warnings: "केवल निर्देशानुसार उपयोग करें; अधिक मात्रा खतरनाक हो सकती है।",
      avoid: "बड़े क्षेत्र या damaged skin पर बिना चिकित्सकीय सलाह के उपयोग न करें।",
      interactions: "अन्य local anesthetics और heart rhythm को प्रभावित करने वाली कुछ दवाओं के साथ प्रतिक्रिया कर सकता है।",
      when: "फॉर्म और डॉक्टर के निर्देश के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "तेज चक्कर, दौरे, सांस लेने में परेशानी या abnormal heartbeat होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  chlorhexidine: {
    en: {
      name: "Chlorhexidine",
      generic: "Chlorhexidine",
      type: "Antiseptic",
      uses: "Used to reduce bacteria on skin or in certain oral-care products.",
      how: "Damages the membranes of many bacteria and reduces microbial growth.",
      side_effects: "Skin irritation, dryness, or oral staining depending on formulation.",
      warnings: "Avoid contact with eyes and ears unless the product is specifically designed for those areas.",
      avoid: "Avoid if allergic to chlorhexidine.",
      interactions: "Some soaps or products may reduce its effectiveness depending on formulation.",
      when: "Use according to the specific product instructions.",
      pregnancy: "Ask a healthcare professional before regular use during pregnancy.",
      doctor: "Seek advice for severe irritation or allergic symptoms."
    },
    hi: {
      name: "क्लोरहेक्सिडिन",
      generic: "क्लोरहेक्सिडिन",
      type: "एंटीसेप्टिक",
      uses: "त्वचा पर bacteria कम करने या कुछ oral-care products में उपयोग किया जाता है।",
      how: "कई bacteria की cell membrane को नुकसान पहुंचाकर microbial growth कम करता है।",
      side_effects: "फॉर्म के अनुसार त्वचा में irritation, dryness या मुंह में staining हो सकती है।",
      warnings: "आंखों और कानों से संपर्क से बचें जब तक product विशेष रूप से इनके लिए न बना हो।",
      avoid: "यदि chlorhexidine से एलर्जी हो तो उपयोग न करें।",
      interactions: "कुछ soaps या products इसके असर को कम कर सकते हैं।",
      when: "विशिष्ट product के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में नियमित उपयोग से पहले स्वास्थ्य विशेषज्ञ से सलाह लें।",
      doctor: "गंभीर irritation या allergic symptoms होने पर डॉक्टर से संपर्क करें।"
    }
  },

  povidone_iodine: {
    en: {
      name: "Povidone-Iodine",
      generic: "Povidone-Iodine",
      type: "Antiseptic",
      uses: "Used to reduce microorganisms on skin before certain procedures or for minor wound care.",
      how: "Releases iodine that damages microorganisms.",
      side_effects: "Skin irritation, dryness, or allergic reaction may occur.",
      warnings: "Excessive or prolonged use can affect thyroid function or iodine exposure in susceptible people.",
      avoid: "Use cautiously with thyroid disorders or iodine sensitivity.",
      interactions: "Can interact with some topical products and thyroid-related conditions.",
      when: "Use according to the specific product instructions.",
      pregnancy: "Ask a doctor before repeated or extensive use during pregnancy.",
      doctor: "Seek advice for severe irritation, allergy, or wounds that do not heal."
    },
    hi: {
      name: "पोविडोन-आयोडीन",
      generic: "पोविडोन-आयोडीन",
      type: "एंटीसेप्टिक",
      uses: "कुछ procedures से पहले त्वचा पर microorganisms कम करने या छोटी चोटों की देखभाल में उपयोग किया जाता है।",
      how: "आयोडीन release करता है जो microorganisms को नुकसान पहुंचाता है।",
      side_effects: "त्वचा में irritation, dryness या allergic reaction हो सकती है।",
      warnings: "लंबे या अत्यधिक उपयोग से thyroid function या iodine exposure प्रभावित हो सकता है।",
      avoid: "thyroid disorders या iodine sensitivity में सावधानी जरूरी है।",
      interactions: "कुछ topical products और thyroid-related conditions के साथ interaction हो सकता है।",
      when: "विशिष्ट product के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में बार-बार या बड़े क्षेत्र पर उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "गंभीर irritation, allergy या घाव ठीक न होने पर डॉक्टर से संपर्क करें।"
    }
  },

  isosorbide_mononitrate: {
    en: {
      name: "Isosorbide Mononitrate",
      generic: "Isosorbide Mononitrate",
      type: "Nitrate / Antianginal",
      uses: "Used to prevent episodes of angina (heart-related chest pain).",
      how: "Relaxes blood vessels and reduces the workload on the heart.",
      side_effects: "Headache, dizziness, low blood pressure, or flushing.",
      warnings: "Can cause significant low blood pressure and should not be combined with certain erectile-dysfunction medicines.",
      avoid: "Avoid with PDE-5 inhibitors such as sildenafil unless specifically directed by a specialist.",
      interactions: "Dangerous blood-pressure lowering can occur with PDE-5 inhibitors and certain other medicines.",
      when: "Taken regularly according to the prescribed schedule; not intended for immediate relief of an acute attack.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek urgent care for new, severe, or persistent chest pain."
    },
    hi: {
      name: "आइसोसॉरबाइड मोनोनाइट्रेट",
      generic: "आइसोसॉरबाइड मोनोनाइट्रेट",
      type: "नाइट्रेट / एंटीएंजाइनल",
      uses: "एंजाइना यानी हृदय से संबंधित सीने के दर्द के episodes को रोकने के लिए उपयोग किया जाता है।",
      how: "रक्त वाहिकाओं को relax करके हृदय का workload कम करता है।",
      side_effects: "सिरदर्द, चक्कर, low blood pressure या flushing हो सकता है।",
      warnings: "ब्लड प्रेशर बहुत कम कर सकता है और कुछ erectile-dysfunction medicines के साथ खतरनाक हो सकता है।",
      avoid: "Sildenafil जैसी PDE-5 inhibitors के साथ specialist की स्पष्ट सलाह के बिना उपयोग न करें।",
      interactions: "PDE-5 inhibitors और कुछ अन्य दवाओं के साथ blood pressure खतरनाक रूप से कम हो सकता है।",
      when: "डॉक्टर के schedule के अनुसार नियमित रूप से लिया जाता है; अचानक chest pain में तुरंत राहत के लिए नहीं है।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "नया, तेज या लगातार सीने का दर्द होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  nitroglycerin: {
    en: {
      name: "Nitroglycerin",
      generic: "Glyceryl Trinitrate",
      type: "Nitrate / Antianginal",
      uses: "Used for rapid relief of angina in appropriate prescribed forms.",
      how: "Relaxes blood vessels and improves blood flow to reduce the heart's workload.",
      side_effects: "Headache, dizziness, flushing, or low blood pressure.",
      warnings: "Can cause dangerous low blood pressure with PDE-5 inhibitors.",
      avoid: "Do not combine with sildenafil, tadalafil, or similar PDE-5 inhibitors unless specifically instructed by a specialist.",
      interactions: "Major interaction with PDE-5 inhibitors and some other blood-pressure-lowering medicines.",
      when: "Use exactly according to the emergency plan provided by the treating clinician.",
      pregnancy: "Use only under medical advice.",
      doctor: "If chest pain is new, severe, persistent, or different from usual, seek emergency medical care."
    },
    hi: {
      name: "नाइट्रोग्लिसरीन",
      generic: "ग्लिसरिल ट्राइनाइट्रेट",
      type: "नाइट्रेट / एंटीएंजाइनल",
      uses: "उचित prescribed forms में एंजाइना के दर्द से जल्दी राहत के लिए उपयोग किया जाता है।",
      how: "रक्त वाहिकाओं को relax करके blood flow सुधारता है और हृदय का workload कम करता है।",
      side_effects: "सिरदर्द, चक्कर, flushing या low blood pressure हो सकता है।",
      warnings: "PDE-5 inhibitors के साथ blood pressure खतरनाक रूप से कम कर सकता है।",
      avoid: "Sildenafil, tadalafil या समान PDE-5 inhibitors के साथ specialist की स्पष्ट सलाह के बिना उपयोग न करें।",
      interactions: "PDE-5 inhibitors और कुछ अन्य blood-pressure-lowering medicines के साथ गंभीर interaction हो सकता है।",
      when: "इलाज करने वाले डॉक्टर द्वारा दिए गए emergency plan के अनुसार ही उपयोग करें।",
      pregnancy: "केवल चिकित्सकीय सलाह पर उपयोग करें।",
      doctor: "नया, बहुत तेज, लगातार या सामान्य से अलग chest pain हो तो emergency medical care लें।"
    }
  },

  furosemide: {
    en: {
      name: "Furosemide",
      generic: "Furosemide",
      type: "Loop Diuretic",
      uses: "Used to reduce excess fluid in conditions such as heart failure and certain kidney or liver diseases.",
      how: "Makes the kidneys remove more sodium and water through urine.",
      side_effects: "Increased urination, dizziness, dehydration, or electrolyte imbalance.",
      warnings: "Can lower blood pressure and electrolytes; monitoring may be required.",
      avoid: "Use only under medical supervision in significant dehydration or certain kidney conditions.",
      interactions: "Interacts with blood-pressure medicines, NSAIDs, lithium, and other diuretics.",
      when: "Usually taken according to the prescribed schedule, often earlier in the day.",
      pregnancy: "Use during pregnancy only when medically indicated.",
      doctor: "Seek care for severe weakness, fainting, dehydration, or significant changes in urination."
    },
    hi: {
      name: "फ्यूरोसेमाइड",
      generic: "फ्यूरोसेमाइड",
      type: "लूप डाययूरेटिक",
      uses: "हृदय विफलता और कुछ किडनी/लीवर रोगों में शरीर में अतिरिक्त fluid कम करने के लिए उपयोग किया जाता है।",
      how: "किडनी को urine के माध्यम से अधिक sodium और पानी निकालने के लिए प्रेरित करता है।",
      side_effects: "बार-बार पेशाब, चक्कर, dehydration या electrolyte imbalance हो सकता है।",
      warnings: "ब्लड प्रेशर और electrolytes कम कर सकता है; monitoring की जरूरत हो सकती है।",
      avoid: "गंभीर dehydration या कुछ kidney conditions में केवल medical supervision में उपयोग करें।",
      interactions: "ब्लड प्रेशर medicines, NSAIDs, lithium और अन्य diuretics के साथ interaction कर सकता है।",
      when: "डॉक्टर के schedule के अनुसार, अक्सर दिन के पहले हिस्से में लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल चिकित्सकीय जरूरत पर उपयोग करें।",
      doctor: "बहुत कमजोरी, बेहोशी, dehydration या पेशाब में महत्वपूर्ण बदलाव होने पर डॉक्टर से संपर्क करें।"
    }
  },

  spironolactone: {
    en: {
      name: "Spironolactone",
      generic: "Spironolactone",
      type: "Potassium-Sparing Diuretic",
      uses: "Used for certain heart, blood-pressure, fluid-retention, and hormonal conditions.",
      how: "Blocks aldosterone, causing the body to remove sodium and water while retaining potassium.",
      side_effects: "Increased urination, dizziness, high potassium, or hormonal side effects.",
      warnings: "Can cause dangerously high potassium, especially with kidney disease.",
      avoid: "Avoid or use only under medical supervision with high potassium or significant kidney problems.",
      interactions: "Interacts with potassium supplements, ACE inhibitors, ARBs, and some NSAIDs.",
      when: "Taken regularly according to the prescribed plan.",
      pregnancy: "Use during pregnancy only under specialist medical advice.",
      doctor: "Seek advice for muscle weakness, abnormal heartbeat, or severe dizziness."
    },
    hi: {
      name: "स्पिरोनोलैक्टोन",
      generic: "स्पिरोनोलैक्टोन",
      type: "पोटैशियम-स्पेयरिंग डाययूरेटिक",
      uses: "कुछ हृदय, ब्लड प्रेशर, fluid retention और hormonal conditions में उपयोग किया जाता है।",
      how: "Aldosterone को block करके sodium और पानी निकालता है जबकि potassium को retain करता है।",
      side_effects: "बार-बार पेशाब, चक्कर, potassium बढ़ना या hormonal side effects हो सकते हैं।",
      warnings: "खासकर kidney disease में potassium खतरनाक रूप से बढ़ सकता है।",
      avoid: "High potassium या गंभीर kidney problems में केवल medical supervision में उपयोग करें।",
      interactions: "Potassium supplements, ACE inhibitors, ARBs और कुछ NSAIDs के साथ interaction कर सकता है।",
      when: "डॉक्टर की prescribed plan के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल specialist की सलाह पर उपयोग करें।",
      doctor: "मांसपेशियों में कमजोरी, abnormal heartbeat या बहुत चक्कर आने पर डॉक्टर से संपर्क करें।"
    }
  },

  propranolol: {
    en: {
      name: "Propranolol",
      generic: "Propranolol",
      type: "Beta Blocker",
      uses: "Used for certain heart conditions, high blood pressure, migraine prevention, and other conditions.",
      how: "Blocks beta receptors, slowing heart rate and reducing the effects of adrenaline.",
      side_effects: "Slow heart rate, dizziness, tiredness, or cold hands and feet.",
      warnings: "Can worsen asthma or cause low blood sugar symptoms to be less noticeable.",
      avoid: "Use cautiously or avoid in certain asthma, very slow heart rate, or heart-conduction problems.",
      interactions: "Interacts with other heart medicines, some antidepressants, and diabetes medicines.",
      when: "Taken regularly according to the prescribed schedule.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek advice for fainting, severe breathing difficulty, or unusually slow heartbeat."
    },
    hi: {
      name: "प्रोप्रानोलोल",
      generic: "प्रोप्रानोलोल",
      type: "बीटा ब्लॉकर",
      uses: "कुछ हृदय रोग, उच्च रक्तचाप, migraine prevention और अन्य स्थितियों में उपयोग किया जाता है।",
      how: "Beta receptors को block करके heart rate और adrenaline के प्रभाव को कम करता है।",
      side_effects: "धीमी heart rate, चक्कर, थकान या हाथ-पैर ठंडे लग सकते हैं।",
      warnings: "अस्थमा को बिगाड़ सकता है और low blood sugar के कुछ संकेत कम महसूस हो सकते हैं।",
      avoid: "कुछ asthma, बहुत धीमी heart rate या heart-conduction problems में सावधानी/परहेज जरूरी है।",
      interactions: "अन्य heart medicines, कुछ antidepressants और diabetes medicines के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर के schedule के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "बेहोशी, गंभीर सांस की परेशानी या बहुत धीमी धड़कन होने पर डॉक्टर से संपर्क करें।"
    }
  },

  metoprolol: {
    en: {
      name: "Metoprolol",
      generic: "Metoprolol",
      type: "Beta Blocker",
      uses: "Used for high blood pressure, certain heart conditions, and heart-rate control.",
      how: "Slows the heart rate and reduces the heart's workload.",
      side_effects: "Tiredness, dizziness, slow heart rate, or cold extremities.",
      warnings: "Should not usually be stopped suddenly without medical advice.",
      avoid: "Use cautiously with very slow heart rate, certain conduction disorders, or asthma.",
      interactions: "Can interact with other heart medicines and some antidepressants.",
      when: "Taken regularly according to the prescribed plan.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek medical advice for fainting, severe breathing difficulty, or very slow heartbeat."
    },
    hi: {
      name: "मेटोप्रोलोल",
      generic: "मेटोप्रोलोल",
      type: "बीटा ब्लॉकर",
      uses: "उच्च रक्तचाप, कुछ हृदय रोग और heart-rate control के लिए उपयोग किया जाता है।",
      how: "Heart rate को धीमा करता है और हृदय का workload कम करता है।",
      side_effects: "थकान, चक्कर, धीमी heart rate या हाथ-पैर ठंडे लग सकते हैं।",
      warnings: "डॉक्टर की सलाह के बिना इसे आमतौर पर अचानक बंद नहीं करना चाहिए।",
      avoid: "बहुत धीमी heart rate, कुछ conduction disorders या asthma में सावधानी जरूरी है।",
      interactions: "अन्य heart medicines और कुछ antidepressants के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर की prescribed plan के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "बेहोशी, गंभीर सांस की परेशानी या बहुत धीमी धड़कन होने पर डॉक्टर से संपर्क करें।"
    }
  },

  atenolol: {
    en: {
      name: "Atenolol",
      generic: "Atenolol",
      type: "Beta Blocker",
      uses: "Used for high blood pressure, angina, and certain heart-rate conditions.",
      how: "Slows the heart rate and reduces the heart's workload.",
      side_effects: "Tiredness, dizziness, cold hands and feet, or slow heart rate.",
      warnings: "May mask some symptoms of low blood sugar and should not be stopped suddenly without advice.",
      avoid: "Use cautiously with asthma, very slow heart rate, or certain conduction disorders.",
      interactions: "Interacts with other heart medicines and some diabetes medicines.",
      when: "Taken regularly as prescribed.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek care for fainting, severe breathing difficulty, or very slow heartbeat."
    },
    hi: {
      name: "एटेनोलोल",
      generic: "एटेनोलोल",
      type: "बीटा ब्लॉकर",
      uses: "उच्च रक्तचाप, एंजाइना और कुछ heart-rate conditions के लिए उपयोग किया जाता है।",
      how: "Heart rate को धीमा करके हृदय का workload कम करता है।",
      side_effects: "थकान, चक्कर, हाथ-पैर ठंडे लगना या धीमी heart rate हो सकती है।",
      warnings: "Low blood sugar के कुछ symptoms छिपा सकता है और इसे बिना सलाह अचानक बंद नहीं करना चाहिए।",
      avoid: "Asthma, बहुत धीमी heart rate या कुछ conduction disorders में सावधानी जरूरी है।",
      interactions: "अन्य heart medicines और कुछ diabetes medicines के साथ प्रतिक्रिया कर सकता है।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "बेहोशी, गंभीर सांस की परेशानी या बहुत धीमी धड़कन होने पर डॉक्टर से संपर्क करें।"
    }
  },

  gabapentin: {
    en: {
      name: "Gabapentin",
      generic: "Gabapentin",
      type: "Neuropathic Pain / Antiseizure Medicine",
      uses: "Used for certain nerve pain conditions and seizures.",
      how: "Modulates nerve signaling to reduce abnormal nerve activity and pain signals.",
      side_effects: "Drowsiness, dizziness, tiredness, or swelling may occur.",
      warnings: "Can cause sleepiness and should not be stopped suddenly after regular use without medical advice.",
      avoid: "Use cautiously with other sedating medicines and kidney disease.",
      interactions: "Sedating medicines and alcohol can increase drowsiness.",
      when: "Taken according to the prescribed schedule.",
      pregnancy: "Use during pregnancy only after medical advice.",
      doctor: "Seek medical advice for severe dizziness, breathing problems, or significant mood changes."
    },
    hi: {
      name: "गैबापेंटिन",
      generic: "गैबापेंटिन",
      type: "न्यूरोपैथिक पेन / एंटीसीज़र मेडिसिन",
      uses: "कुछ nerve pain conditions और seizures के लिए उपयोग किया जाता है।",
      how: "Nerve signaling को modulate करके abnormal nerve activity और pain signals कम करता है।",
      side_effects: "उनींदापन, चक्कर, थकान या सूजन हो सकती है।",
      warnings: "नींद ला सकता है और नियमित उपयोग के बाद बिना डॉक्टर की सलाह के अचानक बंद नहीं करना चाहिए।",
      avoid: "अन्य sedating medicines और kidney disease में सावधानी जरूरी है।",
      interactions: "Sedating medicines और alcohol उनींदापन बढ़ा सकते हैं।",
      when: "डॉक्टर के prescribed schedule के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में केवल डॉक्टर की सलाह के बाद उपयोग करें।",
      doctor: "बहुत चक्कर, सांस लेने में परेशानी या महत्वपूर्ण mood changes होने पर डॉक्टर से संपर्क करें।"
    }
  },

  pregabalin: {
    en: {
      name: "Pregabalin",
      generic: "Pregabalin",
      type: "Neuropathic Pain / Antiseizure Medicine",
      uses: "Used for certain nerve pain conditions and seizures.",
      how: "Reduces the release of certain neurotransmitters involved in abnormal nerve signaling.",
      side_effects: "Dizziness, sleepiness, blurred vision, swelling, or weight changes.",
      warnings: "Can impair alertness and should not be stopped suddenly without medical advice.",
      avoid: "Use cautiously with sedating medicines and kidney disease.",
      interactions: "Other sedatives can increase drowsiness and breathing-related risks.",
      when: "Taken according to the prescribed schedule.",
      pregnancy: "Use only after medical assessment during pregnancy.",
      doctor: "Seek care for severe swelling, breathing problems, or significant mood changes."
    },
    hi: {
      name: "प्रीगैबलिन",
      generic: "प्रीगैबलिन",
      type: "न्यूरोपैथिक पेन / एंटीसीज़र मेडिसिन",
      uses: "कुछ nerve pain conditions और seizures के लिए उपयोग किया जाता है।",
      how: "कुछ neurotransmitters के release को कम करके abnormal nerve signaling को नियंत्रित करता है।",
      side_effects: "चक्कर, नींद, धुंधला दिखना, सूजन या वजन में बदलाव हो सकता है।",
      warnings: "Alertness कम कर सकता है और बिना चिकित्सकीय सलाह के अचानक बंद नहीं करना चाहिए।",
      avoid: "अन्य sedating medicines और kidney disease में सावधानी जरूरी है।",
      interactions: "अन्य sedatives उनींदापन और breathing-related risks बढ़ा सकते हैं।",
      when: "डॉक्टर के prescribed schedule के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में medical assessment के बाद ही उपयोग करें।",
      doctor: "बहुत अधिक सूजन, सांस की परेशानी या महत्वपूर्ण mood changes होने पर डॉक्टर से संपर्क करें।"
    }
  },

  amitriptyline: {
    en: {
      name: "Amitriptyline",
      generic: "Amitriptyline",
      type: "Tricyclic Antidepressant",
      uses: "Used for depression in selected cases and commonly for certain nerve pain or migraine prevention.",
      how: "Changes levels of neurotransmitters involved in mood and pain signaling.",
      side_effects: "Drowsiness, dry mouth, constipation, blurred vision, or dizziness.",
      warnings: "Can affect heart rhythm and alertness; overdose can be dangerous.",
      avoid: "Use only under medical supervision, especially with heart rhythm problems or certain medicines.",
      interactions: "Interacts with many medicines, including some antidepressants and sedatives.",
      when: "Usually taken according to a prescribed schedule.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek medical advice for fainting, abnormal heartbeat, severe side effects, or significant mood changes."
    },
    hi: {
      name: "एमिट्रिप्टिलीन",
      generic: "एमिट्रिप्टिलीन",
      type: "ट्राइसाइक्लिक एंटीडिप्रेसेंट",
      uses: "कुछ मामलों में depression और अक्सर कुछ nerve pain या migraine prevention के लिए उपयोग किया जाता है।",
      how: "Mood और pain signaling में शामिल neurotransmitters के स्तर को बदलता है।",
      side_effects: "उनींदापन, मुंह सूखना, कब्ज, धुंधला दिखना या चक्कर हो सकते हैं।",
      warnings: "Heart rhythm और alertness को प्रभावित कर सकता है; overdose खतरनाक हो सकता है।",
      avoid: "विशेषकर heart-rhythm problems या कुछ दवाओं के साथ केवल medical supervision में उपयोग करें।",
      interactions: "कई दवाओं, कुछ antidepressants और sedatives के साथ interaction कर सकता है।",
      when: "आमतौर पर डॉक्टर के prescribed schedule के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "बेहोशी, abnormal heartbeat, गंभीर side effects या महत्वपूर्ण mood changes होने पर डॉक्टर से संपर्क करें।"
    }
  },

  sertraline: {
    en: {
      name: "Sertraline",
      generic: "Sertraline",
      type: "SSRI Antidepressant",
      uses: "Used for certain depressive and anxiety-related disorders.",
      how: "Increases availability of serotonin in the brain.",
      side_effects: "Nausea, headache, sleep changes, diarrhea, or changes in appetite may occur.",
      warnings: "Mood changes can occur early in treatment; young people require appropriate clinical monitoring.",
      avoid: "Do not stop suddenly without medical advice.",
      interactions: "Can interact with other serotonergic medicines, certain antidepressants, and blood thinners.",
      when: "Taken regularly according to the prescribed schedule.",
      pregnancy: "Use during pregnancy only after discussion with a healthcare professional.",
      doctor: "Seek prompt medical advice for severe side effects or significant mood/behavior changes."
    },
    hi: {
      name: "सर्ट्रालीन",
      generic: "सर्ट्रालीन",
      type: "SSRI एंटीडिप्रेसेंट",
      uses: "कुछ depressive और anxiety-related disorders के इलाज के लिए उपयोग किया जाता है।",
      how: "दिमाग में serotonin की उपलब्धता बढ़ाता है।",
      side_effects: "मिचली, सिरदर्द, नींद में बदलाव, दस्त या भूख में बदलाव हो सकते हैं।",
      warnings: "Treatment की शुरुआत में mood changes हो सकते हैं; कम उम्र के लोगों में उचित clinical monitoring जरूरी है।",
      avoid: "बिना डॉक्टर की सलाह के इसे अचानक बंद न करें।",
      interactions: "अन्य serotonergic medicines, कुछ antidepressants और blood thinners के साथ interaction कर सकता है।",
      when: "डॉक्टर के prescribed schedule के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में healthcare professional से चर्चा के बाद ही उपयोग करें।",
      doctor: "गंभीर side effects या महत्वपूर्ण mood/behavior changes होने पर जल्दी डॉक्टर से संपर्क करें।"
    }
  },

  escitalopram: {
    en: {
      name: "Escitalopram",
      generic: "Escitalopram",
      type: "SSRI Antidepressant",
      uses: "Used for certain depressive and anxiety disorders.",
      how: "Increases serotonin activity in the brain.",
      side_effects: "Nausea, headache, sleep changes, sweating, or sexual side effects may occur.",
      warnings: "Requires medical monitoring, especially when starting or changing the dose.",
      avoid: "Do not stop suddenly without medical advice.",
      interactions: "Can interact with other serotonergic medicines and drugs affecting heart rhythm.",
      when: "Taken regularly as prescribed.",
      pregnancy: "Use during pregnancy only after medical assessment.",
      doctor: "Contact a doctor for severe side effects or major mood/behavior changes."
    },
    hi: {
      name: "एस्सिटालोप्राम",
      generic: "एस्सिटालोप्राम",
      type: "SSRI एंटीडिप्रेसेंट",
      uses: "कुछ depressive और anxiety disorders के इलाज के लिए उपयोग किया जाता है।",
      how: "दिमाग में serotonin activity बढ़ाता है।",
      side_effects: "मिचली, सिरदर्द, नींद में बदलाव, पसीना या sexual side effects हो सकते हैं।",
      warnings: "खासकर treatment शुरू करने या dose बदलने पर medical monitoring जरूरी है।",
      avoid: "बिना डॉक्टर की सलाह के अचानक बंद न करें।",
      interactions: "अन्य serotonergic medicines और heart rhythm को प्रभावित करने वाली दवाओं के साथ interaction कर सकता है।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में medical assessment के बाद ही उपयोग करें।",
      doctor: "गंभीर side effects या बड़े mood/behavior changes होने पर डॉक्टर से संपर्क करें।"
    }
  },

  fluoxetine: {
    en: {
      name: "Fluoxetine",
      generic: "Fluoxetine",
      type: "SSRI Antidepressant",
      uses: "Used for certain depressive and anxiety-related disorders and other specific conditions.",
      how: "Increases serotonin activity in the brain.",
      side_effects: "Nausea, headache, sleep changes, anxiety, or appetite changes.",
      warnings: "Requires monitoring for mood and behavior changes, particularly early in treatment.",
      avoid: "Do not stop or change the medicine without medical advice.",
      interactions: "Can interact with many medicines, including other serotonergic drugs and some MAO inhibitors.",
      when: "Taken regularly according to the prescribed plan.",
      pregnancy: "Use during pregnancy only after medical assessment.",
      doctor: "Seek prompt medical advice for severe side effects or significant mood/behavior changes."
    },
    hi: {
      name: "फ्लूऑक्सेटीन",
      generic: "फ्लूऑक्सेटीन",
      type: "SSRI एंटीडिप्रेसेंट",
      uses: "कुछ depressive और anxiety-related disorders तथा अन्य विशेष स्थितियों में उपयोग किया जाता है।",
      how: "दिमाग में serotonin activity बढ़ाता है।",
      side_effects: "मिचली, सिरदर्द, नींद में बदलाव, बेचैनी या appetite changes हो सकते हैं।",
      warnings: "विशेषकर treatment की शुरुआत में mood और behavior changes की निगरानी जरूरी है।",
      avoid: "बिना medical advice के medicine बंद या बदलें नहीं।",
      interactions: "कई दवाओं, अन्य serotonergic drugs और कुछ MAO inhibitors के साथ interaction कर सकता है।",
      when: "डॉक्टर के prescribed plan के अनुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में medical assessment के बाद ही उपयोग करें।",
      doctor: "गंभीर side effects या महत्वपूर्ण mood/behavior changes होने पर तुरंत डॉक्टर से संपर्क करें।"
    }
  },

  alprazolam: {
    en: {
      name: "Alprazolam",
      generic: "Alprazolam",
      type: "Benzodiazepine",
      uses: "Used for certain anxiety or panic disorders under medical supervision.",
      how: "Enhances the effect of GABA, a chemical that reduces excessive nervous-system activity.",
      side_effects: "Drowsiness, dizziness, impaired coordination, and memory problems.",
      warnings: "Can cause dependence and withdrawal. It can dangerously increase sedation when combined with other sedatives.",
      avoid: "Do not use without a prescription or combine with alcohol or other sedating substances.",
      interactions: "Strong interactions can occur with alcohol, opioids, and other sedatives.",
      when: "Only according to a doctor's prescription.",
      pregnancy: "Use during pregnancy only if specifically directed by a specialist.",
      doctor: "Seek medical help for severe sedation, breathing difficulty, confusion, or concerning reactions."
    },
    hi: {
      name: "अल्प्राज़ोलम",
      generic: "अल्प्राज़ोलम",
      type: "बेंज़ोडायज़ेपीन",
      uses: "कुछ anxiety या panic disorders में medical supervision के तहत उपयोग किया जाता है।",
      how: "GABA के प्रभाव को बढ़ाता है, जिससे nervous-system activity कम होती है।",
      side_effects: "उनींदापन, चक्कर, coordination में कमी और memory problems हो सकती हैं।",
      warnings: "Dependence और withdrawal हो सकते हैं। अन्य sedatives के साथ sedation खतरनाक रूप से बढ़ सकती है।",
      avoid: "बिना prescription उपयोग न करें और alcohol या अन्य sedating substances के साथ न मिलाएं।",
      interactions: "Alcohol, opioids और अन्य sedatives के साथ गंभीर interaction हो सकता है।",
      when: "केवल डॉक्टर के prescription के अनुसार लें।",
      pregnancy: "गर्भावस्था में केवल specialist की स्पष्ट सलाह पर उपयोग करें।",
      doctor: "बहुत अधिक sedation, सांस लेने में परेशानी, confusion या गंभीर reaction होने पर चिकित्सा सहायता लें।"
    }
  },

  diazepam: {
    en: {
      name: "Diazepam",
      generic: "Diazepam",
      type: "Benzodiazepine",
      uses: "Used for selected anxiety, muscle-spasm, seizure, or withdrawal-related conditions under medical supervision.",
      how: "Enhances GABA activity and reduces excessive nervous-system activity.",
      side_effects: "Drowsiness, dizziness, weakness, impaired coordination, or memory problems.",
      warnings: "Can cause dependence and dangerous sedation, especially with opioids or alcohol.",
      avoid: "Do not use without medical supervision or combine with alcohol or other sedatives.",
      interactions: "Strong interactions can occur with opioids, alcohol, and other sedating medicines.",
      when: "Only according to a medical prescription.",
      pregnancy: "Use during pregnancy only under specialist medical advice.",
      doctor: "Seek urgent help for severe sedation, breathing difficulty, or confusion."
    },
    hi: {
      name: "डायज़ेपाम",
      generic: "डायज़ेपाम",
      type: "बेंज़ोडायज़ेपीन",
      uses: "कुछ anxiety, muscle-spasm, seizure या withdrawal-related conditions में medical supervision के तहत उपयोग किया जाता है।",
      how: "GABA activity बढ़ाकर nervous-system की अत्यधिक activity कम करता है।",
      side_effects: "उनींदापन, चक्कर, कमजोरी, coordination में कमी या memory problems हो सकती हैं।",
      warnings: "Dependence और dangerous sedation हो सकती है, खासकर opioids या alcohol के साथ।",
      avoid: "बिना medical supervision के उपयोग न करें और alcohol/अन्य sedatives के साथ न लें।",
      interactions: "Opioids, alcohol और अन्य sedating medicines के साथ गंभीर interaction हो सकता है।",
      when: "केवल medical prescription के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में केवल specialist की सलाह पर उपयोग करें।",
      doctor: "बहुत अधिक sedation, सांस की परेशानी या confusion होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  tamsulosin: {
    en: {
      name: "Tamsulosin",
      generic: "Tamsulosin",
      type: "Alpha-1 Blocker",
      uses: "Used mainly to improve urinary symptoms associated with an enlarged prostate.",
      how: "Relaxes muscles around the prostate and bladder outlet to improve urine flow.",
      side_effects: "Dizziness, low blood pressure, headache, or ejaculation changes.",
      warnings: "May cause dizziness or fainting, especially when starting treatment.",
      avoid: "Use cautiously with other blood-pressure-lowering medicines.",
      interactions: "Can interact with PDE-5 inhibitors and other medicines that lower blood pressure.",
      when: "Taken according to the prescribed schedule, often after the same meal each day.",
      pregnancy: "Not generally intended for pregnancy.",
      doctor: "Seek advice for fainting, severe dizziness, or inability to urinate."
    },
    hi: {
      name: "टैम्सुलोसिन",
      generic: "टैम्सुलोसिन",
      type: "अल्फा-1 ब्लॉकर",
      uses: "मुख्य रूप से बढ़े हुए prostate से जुड़े urinary symptoms को सुधारने के लिए उपयोग किया जाता है।",
      how: "Prostate और bladder outlet के आसपास की muscles को relax करके urine flow बेहतर करता है।",
      side_effects: "चक्कर, low blood pressure, सिरदर्द या ejaculation में बदलाव हो सकते हैं।",
      warnings: "Treatment शुरू करते समय चक्कर या बेहोशी हो सकती है।",
      avoid: "अन्य blood-pressure-lowering medicines के साथ सावधानी जरूरी है।",
      interactions: "PDE-5 inhibitors और अन्य BP-lowering medicines के साथ interaction कर सकता है।",
      when: "डॉक्टर के schedule के अनुसार, अक्सर रोज एक ही meal के बाद लिया जाता है।",
      pregnancy: "आमतौर पर pregnancy के लिए intended medicine नहीं है।",
      doctor: "बेहोशी, गंभीर चक्कर या पेशाब बिल्कुल न हो पाने पर डॉक्टर से संपर्क करें।"
    }
  },

  finasteride: {
    en: {
      name: "Finasteride",
      generic: "Finasteride",
      type: "5-Alpha Reductase Inhibitor",
      uses: "Used for certain prostate conditions and, in different formulations, male-pattern hair loss.",
      how: "Reduces conversion of testosterone to dihydrotestosterone (DHT).",
      side_effects: "May cause sexual side effects or breast tenderness in some people.",
      warnings: "It is prescription medicine and may take time to show benefit.",
      avoid: "Pregnant people should not handle crushed or broken tablets because the active ingredient can affect a male fetus.",
      interactions: "Has relatively few major interactions but all medicines should be disclosed to the doctor.",
      when: "Taken regularly as prescribed.",
      pregnancy: "Not intended for use during pregnancy; pregnant people should avoid handling damaged tablets.",
      doctor: "Consult a doctor for concerning breast changes or persistent side effects."
    },
    hi: {
      name: "फिनास्टराइड",
      generic: "फिनास्टराइड",
      type: "5-अल्फा रिडक्टेस इनहिबिटर",
      uses: "कुछ prostate conditions और अलग formulations में male-pattern hair loss के लिए उपयोग किया जाता है।",
      how: "Testosterone को dihydrotestosterone (DHT) में बदलने की प्रक्रिया को कम करता है।",
      side_effects: "कुछ लोगों में sexual side effects या breast tenderness हो सकती है।",
      warnings: "यह prescription medicine है और असर दिखने में समय लग सकता है।",
      avoid: "गर्भवती लोगों को टूटी/कुचली tablets को नहीं छूना चाहिए क्योंकि active ingredient male fetus को प्रभावित कर सकता है।",
      interactions: "महत्वपूर्ण interactions अपेक्षाकृत कम हैं, फिर भी सभी medicines की जानकारी डॉक्टर को दें।",
      when: "डॉक्टर के निर्देशानुसार नियमित रूप से लिया जाता है।",
      pregnancy: "गर्भावस्था में उपयोग के लिए नहीं है; गर्भवती लोगों को damaged tablets को छूने से बचना चाहिए।",
      doctor: "Breast में असामान्य बदलाव या लगातार side effects होने पर डॉक्टर से संपर्क करें।"
    }
  },

  sildenafil: {
    en: {
      name: "Sildenafil",
      generic: "Sildenafil",
      type: "PDE-5 Inhibitor",
      uses: "Used for certain medical conditions such as erectile dysfunction or pulmonary hypertension, depending on formulation.",
      how: "Increases blood flow by enhancing nitric-oxide-related signaling.",
      side_effects: "Headache, flushing, indigestion, nasal congestion, or visual changes.",
      warnings: "Can cause dangerous low blood pressure with nitrate medicines.",
      avoid: "Never combine with nitrate medicines such as nitroglycerin unless specifically directed by a specialist.",
      interactions: "Major interaction with nitrates and certain blood-pressure medicines.",
      when: "Use only according to medical advice for the specific condition.",
      pregnancy: "Use in pregnancy only for specific specialist indications.",
      doctor: "Seek urgent care for chest pain, fainting, sudden vision changes, or a prolonged painful erection."
    },
    hi: {
      name: "सिल्डेनाफिल",
      generic: "सिल्डेनाफिल",
      type: "PDE-5 इनहिबिटर",
      uses: "फॉर्म के अनुसार erectile dysfunction या pulmonary hypertension जैसी कुछ medical conditions में उपयोग किया जाता है।",
      how: "Nitric-oxide-related signaling को बढ़ाकर blood flow सुधारता है।",
      side_effects: "सिरदर्द, flushing, indigestion, नाक बंद होना या vision changes हो सकते हैं।",
      warnings: "Nitrate medicines के साथ blood pressure खतरनाक रूप से कम कर सकता है।",
      avoid: "Nitroglycerin जैसी nitrate medicines के साथ specialist की स्पष्ट सलाह के बिना कभी न लें।",
      interactions: "Nitrates और कुछ blood-pressure medicines के साथ गंभीर interaction हो सकता है।",
      when: "विशिष्ट condition के लिए केवल medical advice के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में केवल विशेष specialist indication पर उपयोग किया जाता है।",
      doctor: "Chest pain, बेहोशी, अचानक vision change या लंबे समय तक painful erection होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  tadalafil: {
    en: {
      name: "Tadalafil",
      generic: "Tadalafil",
      type: "PDE-5 Inhibitor",
      uses: "Used for certain medical conditions such as erectile dysfunction, enlarged-prostate urinary symptoms, or pulmonary hypertension depending on formulation.",
      how: "Enhances nitric-oxide-related signaling and increases blood flow.",
      side_effects: "Headache, flushing, indigestion, muscle aches, or nasal congestion.",
      warnings: "Can cause dangerous low blood pressure with nitrate medicines.",
      avoid: "Do not combine with nitrates such as nitroglycerin unless specifically instructed by a specialist.",
      interactions: "Major interaction with nitrates and certain blood-pressure medicines.",
      when: "Use only according to medical advice for the specific indication.",
      pregnancy: "Pregnancy use is limited to specific specialist indications.",
      doctor: "Seek urgent care for chest pain, fainting, sudden vision/hearing changes, or prolonged painful erection."
    },
    hi: {
      name: "टाडालाफिल",
      generic: "टाडालाफिल",
      type: "PDE-5 इनहिबिटर",
      uses: "फॉर्म के अनुसार erectile dysfunction, enlarged-prostate urinary symptoms या pulmonary hypertension जैसी स्थितियों में उपयोग किया जाता है।",
      how: "Nitric-oxide-related signaling बढ़ाकर blood flow सुधारता है।",
      side_effects: "सिरदर्द, flushing, indigestion, मांसपेशियों में दर्द या नाक बंद होना हो सकता है।",
      warnings: "Nitrate medicines के साथ blood pressure खतरनाक रूप से कम कर सकता है।",
      avoid: "Nitroglycerin जैसी nitrate medicines के साथ specialist की सलाह के बिना उपयोग न करें।",
      interactions: "Nitrates और कुछ blood-pressure medicines के साथ गंभीर interaction हो सकता है।",
      when: "विशिष्ट indication के लिए केवल डॉक्टर की सलाह से उपयोग करें।",
      pregnancy: "गर्भावस्था में केवल विशेष specialist indications पर उपयोग किया जाता है।",
      doctor: "Chest pain, बेहोशी, अचानक vision/hearing changes या prolonged painful erection होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  methotrexate: {
    en: {
      name: "Methotrexate",
      generic: "Methotrexate",
      type: "Immunosuppressant / Antimetabolite",
      uses: "Used for certain autoimmune diseases, inflammatory conditions, and some cancers.",
      how: "Interferes with folate-dependent cellular processes and reduces abnormal immune-cell activity.",
      side_effects: "Nausea, mouth sores, fatigue, low blood counts, or liver problems.",
      warnings: "Requires close medical monitoring. It can cause serious liver, blood, lung, and pregnancy-related harm.",
      avoid: "Do not use without specialist supervision; pregnancy requires strict medical guidance.",
      interactions: "Interacts with many medicines, including some antibiotics, NSAIDs, and supplements.",
      when: "Taken exactly according to the specialist-prescribed schedule.",
      pregnancy: "Generally contraindicated in pregnancy for many indications; specialist advice is essential.",
      doctor: "Seek urgent medical advice for fever, unusual bleeding, severe mouth sores, breathing problems, or jaundice."
    },
    hi: {
      name: "मेथोट्रेक्सेट",
      generic: "मेथोट्रेक्सेट",
      type: "इम्यूनोसप्रेसेंट / एंटीमेटाबोलाइट",
      uses: "कुछ autoimmune diseases, inflammatory conditions और कुछ cancers में उपयोग किया जाता है।",
      how: "Folate-dependent cellular processes को प्रभावित करके abnormal immune-cell activity कम करता है।",
      side_effects: "मिचली, मुंह में छाले, थकान, blood counts कम होना या liver problems हो सकती हैं।",
      warnings: "Close medical monitoring जरूरी है। यह liver, blood, lungs और pregnancy से संबंधित गंभीर नुकसान कर सकता है।",
      avoid: "Specialist supervision के बिना उपयोग न करें; pregnancy में strict medical guidance जरूरी है।",
      interactions: "कई दवाओं, कुछ antibiotics, NSAIDs और supplements के साथ interaction कर सकता है।",
      when: "Specialist द्वारा निर्धारित schedule के बिल्कुल अनुसार लें।",
      pregnancy: "कई indications में pregnancy में contraindicated है; specialist की सलाह अनिवार्य है।",
      doctor: "बुखार, असामान्य bleeding, गंभीर mouth sores, सांस की समस्या या पीलिया होने पर तुरंत डॉक्टर से संपर्क करें।"
    }
  },

  hydroxychloroquine: {
    en: {
      name: "Hydroxychloroquine",
      generic: "Hydroxychloroquine",
      type: "Antimalarial / Immunomodulatory Medicine",
      uses: "Used for malaria prevention/treatment in appropriate settings and certain autoimmune diseases.",
      how: "Affects immune signaling and interferes with parasite processes.",
      side_effects: "Nausea, stomach upset, headache, skin changes, or visual problems.",
      warnings: "Long-term use can rarely damage the retina, so eye monitoring may be required.",
      avoid: "Use cautiously with certain heart-rhythm problems and significant eye disease.",
      interactions: "Can interact with medicines affecting heart rhythm and several other medicines.",
      when: "Taken according to the prescribed medical schedule.",
      pregnancy: "Use during pregnancy only under medical supervision for the appropriate indication.",
      doctor: "Seek medical advice for vision changes, abnormal heartbeat, or severe allergic symptoms."
    },
    hi: {
      name: "हाइड्रॉक्सीक्लोरोक्वीन",
      generic: "हाइड्रॉक्सीक्लोरोक्वीन",
      type: "एंटीमलेरियल / इम्यूनोमॉड्यूलेटरी दवा",
      uses: "उचित परिस्थितियों में malaria की रोकथाम/इलाज और कुछ autoimmune diseases में उपयोग किया जाता है।",
      how: "Immune signaling को प्रभावित करता है और parasite की कुछ प्रक्रियाओं को बाधित करता है।",
      side_effects: "मिचली, पेट खराब, सिरदर्द, skin changes या vision problems हो सकती हैं।",
      warnings: "लंबे उपयोग में दुर्लभ रूप से retina को नुकसान हो सकता है, इसलिए eye monitoring जरूरी हो सकती है।",
      avoid: "कुछ heart-rhythm problems और गंभीर eye disease में सावधानी जरूरी है।",
      interactions: "Heart rhythm को प्रभावित करने वाली और कई अन्य दवाओं के साथ interaction कर सकता है।",
      when: "डॉक्टर के prescribed schedule के अनुसार लिया जाता है।",
      pregnancy: "उचित indication में pregnancy के दौरान केवल medical supervision में उपयोग करें।",
      doctor: "Vision changes, abnormal heartbeat या गंभीर allergic symptoms होने पर डॉक्टर से संपर्क करें।"
    }
  },

  insulin: {
    en: {
      name: "Insulin",
      generic: "Insulin",
      type: "Antidiabetic Hormone",
      uses: "Used to control blood glucose in type 1 diabetes and in some people with type 2 diabetes or other conditions.",
      how: "Helps glucose move from the blood into cells and lowers blood glucose.",
      side_effects: "Low blood sugar, injection-site reactions, or changes in body weight may occur.",
      warnings: "Incorrect use can cause dangerous hypoglycemia. The type and dose must be individualized by a clinician.",
      avoid: "Never change insulin type or dose without medical guidance.",
      interactions: "Other diabetes medicines, alcohol, and some medicines can alter blood glucose.",
      when: "Timing depends on the insulin type and individual treatment plan.",
      pregnancy: "Insulin is commonly used when medically indicated during pregnancy under specialist care.",
      doctor: "Seek urgent help for severe hypoglycemia, confusion, loss of consciousness, or persistent very high blood sugar."
    },
    hi: {
      name: "इंसुलिन",
      generic: "इंसुलिन",
      type: "एंटीडायबिटिक हार्मोन",
      uses: "टाइप 1 डायबिटीज और कुछ टाइप 2 डायबिटीज या अन्य स्थितियों में ब्लड ग्लूकोज़ नियंत्रित करने के लिए उपयोग किया जाता है।",
      how: "Glucose को blood से cells में जाने में मदद करता है और blood glucose कम करता है।",
      side_effects: "लो ब्लड शुगर, injection-site reaction या body weight में बदलाव हो सकता है।",
      warnings: "गलत उपयोग से खतरनाक hypoglycemia हो सकता है। Type और dose डॉक्टर तय करते हैं।",
      avoid: "बिना medical guidance के insulin का type या dose न बदलें।",
      interactions: "अन्य diabetes medicines, alcohol और कुछ medicines blood glucose को बदल सकती हैं।",
      when: "Timing insulin के type और individual treatment plan पर निर्भर करती है।",
      pregnancy: "चिकित्सकीय जरूरत होने पर specialist care में pregnancy के दौरान insulin आमतौर पर उपयोग किया जाता है।",
      doctor: "गंभीर hypoglycemia, confusion, बेहोशी या लगातार बहुत high blood sugar में तुरंत चिकित्सा सहायता लें।"
    }
  },

  salbutamol_syrup: {
    en: {
      name: "Salbutamol Syrup",
      generic: "Salbutamol",
      type: "Bronchodilator",
      uses: "Used in selected cases to relieve bronchospasm and breathing symptoms.",
      how: "Stimulates beta-2 receptors and relaxes airway muscles.",
      side_effects: "Tremor, fast heartbeat, nervousness, headache, or muscle cramps.",
      warnings: "Oral forms are not always preferred for acute asthma; inhaled treatment is often more targeted.",
      avoid: "Use according to age-specific medical advice, especially in children.",
      interactions: "Can interact with some beta blockers, diuretics, and other medicines affecting heart rhythm or potassium.",
      when: "Use only according to the prescribed schedule.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek urgent care for severe breathing difficulty or rapidly worsening symptoms."
    },
    hi: {
      name: "साल्बुटामोल सिरप",
      generic: "साल्बुटामोल",
      type: "ब्रोंकोडायलेटर",
      uses: "कुछ मामलों में bronchospasm और सांस से जुड़े symptoms में राहत के लिए उपयोग किया जाता है।",
      how: "Beta-2 receptors को stimulate करके airway muscles को relax करता है।",
      side_effects: "कंपकंपी, तेज धड़कन, बेचैनी, सिरदर्द या muscle cramps हो सकते हैं।",
      warnings: "Acute asthma में oral form हमेशा preferred नहीं होता; inhaled treatment अधिक targeted हो सकता है।",
      avoid: "विशेषकर बच्चों में age-specific medical advice के अनुसार ही उपयोग करें।",
      interactions: "कुछ beta blockers, diuretics और heart rhythm/potassium को प्रभावित करने वाली दवाओं के साथ interaction कर सकता है।",
      when: "केवल डॉक्टर के prescribed schedule के अनुसार लें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "गंभीर सांस की परेशानी या तेजी से बिगड़ते symptoms में तुरंत चिकित्सा सहायता लें।"
    }
  },

  theophylline: {
    en: {
      name: "Theophylline",
      generic: "Theophylline",
      type: "Bronchodilator",
      uses: "Used in selected respiratory conditions, usually when other treatments are insufficient.",
      how: "Relaxes airway muscles and can reduce airway inflammation.",
      side_effects: "Nausea, vomiting, headache, tremor, fast heartbeat, or insomnia.",
      warnings: "Has a narrow safety range and may require blood-level monitoring.",
      avoid: "Use only under medical supervision, especially with heart, liver, or seizure conditions.",
      interactions: "Many medicines and smoking changes can alter theophylline levels.",
      when: "Taken exactly according to the prescribed schedule.",
      pregnancy: "Use during pregnancy only under medical supervision.",
      doctor: "Seek medical help for persistent vomiting, severe palpitations, seizures, or severe restlessness."
    },
    hi: {
      name: "थियोफिलीन",
      generic: "थियोफिलीन",
      type: "ब्रोंकोडायलेटर",
      uses: "कुछ respiratory conditions में उपयोग किया जाता है, आमतौर पर जब अन्य treatments पर्याप्त न हों।",
      how: "Airway muscles को relax करता है और airway inflammation कम कर सकता है।",
      side_effects: "मिचली, उल्टी, सिरदर्द, कंपकंपी, तेज धड़कन या नींद में परेशानी हो सकती है।",
      warnings: "इसकी safety range narrow होती है और blood-level monitoring की जरूरत पड़ सकती है।",
      avoid: "खासकर heart, liver या seizure conditions में केवल medical supervision में उपयोग करें।",
      interactions: "कई दवाएं और smoking में बदलाव theophylline level को प्रभावित कर सकते हैं।",
      when: "डॉक्टर के prescribed schedule के बिल्कुल अनुसार लें।",
      pregnancy: "गर्भावस्था में केवल medical supervision में उपयोग करें।",
      doctor: "लगातार उल्टी, तेज धड़कन, seizures या गंभीर बेचैनी होने पर चिकित्सा सहायता लें।"
    }
  },

  ipratropium: {
    en: {
      name: "Ipratropium",
      generic: "Ipratropium",
      type: "Anticholinergic Bronchodilator",
      uses: "Used to relieve airway narrowing in certain respiratory conditions.",
      how: "Blocks muscarinic receptors and relaxes airway muscles.",
      side_effects: "Dry mouth, throat irritation, headache, or blurred vision if it reaches the eyes.",
      warnings: "Avoid spraying into the eyes; certain glaucoma or urinary conditions require caution.",
      avoid: "Use cautiously with narrow-angle glaucoma or urinary retention problems.",
      interactions: "Other anticholinergic medicines may increase side effects.",
      when: "Use according to the prescribed inhaler or nebulizer instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek care for worsening breathing or significant eye symptoms."
    },
    hi: {
      name: "इप्राट्रोपियम",
      generic: "इप्राट्रोपियम",
      type: "एंटीकोलिनर्जिक ब्रोंकोडायलेटर",
      uses: "कुछ respiratory conditions में airway narrowing कम करने के लिए उपयोग किया जाता है।",
      how: "Muscarinic receptors को block करके airway muscles को relax करता है।",
      side_effects: "मुंह सूखना, गले में irritation, सिरदर्द या आंख में जाने पर blurred vision हो सकता है।",
      warnings: "आंखों में spray जाने से बचाएं; कुछ glaucoma या urinary conditions में सावधानी जरूरी है।",
      avoid: "Narrow-angle glaucoma या urinary retention में सावधानी से उपयोग करें।",
      interactions: "अन्य anticholinergic medicines side effects बढ़ा सकती हैं।",
      when: "Prescribed inhaler या nebulizer instructions के अनुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "सांस की समस्या बढ़ने या महत्वपूर्ण eye symptoms होने पर डॉक्टर से संपर्क करें।"
    }
  },

  tiotropium: {
    en: {
      name: "Tiotropium",
      generic: "Tiotropium",
      type: "Long-Acting Anticholinergic Bronchodilator",
      uses: "Used for long-term control of certain chronic airway diseases.",
      how: "Blocks muscarinic receptors for a prolonged period, helping keep airways open.",
      side_effects: "Dry mouth, constipation, throat irritation, or urinary difficulties.",
      warnings: "Not generally intended for immediate relief of sudden breathing attacks.",
      avoid: "Use cautiously with narrow-angle glaucoma or urinary retention.",
      interactions: "Other anticholinergic medicines may increase side effects.",
      when: "Used regularly according to the prescribed inhaler instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek urgent care for severe breathing difficulty or significant allergic reaction."
    },
    hi: {
      name: "टियोट्रोपियम",
      generic: "टियोट्रोपियम",
      type: "लॉन्ग-एक्टिंग एंटीकोलिनर्जिक ब्रोंकोडायलेटर",
      uses: "कुछ chronic airway diseases के long-term control के लिए उपयोग किया जाता है।",
      how: "Muscarinic receptors को लंबे समय तक block करके airways को खुला रखने में मदद करता है।",
      side_effects: "मुंह सूखना, कब्ज, गले में irritation या पेशाब में परेशानी हो सकती है।",
      warnings: "अचानक breathing attack में तुरंत राहत के लिए आमतौर पर intended नहीं है।",
      avoid: "Narrow-angle glaucoma या urinary retention में सावधानी जरूरी है।",
      interactions: "अन्य anticholinergic medicines side effects बढ़ा सकती हैं।",
      when: "Prescribed inhaler instructions के अनुसार नियमित रूप से उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "गंभीर सांस की परेशानी या गंभीर allergic reaction में तुरंत चिकित्सा सहायता लें।"
    }
  },

  b_complex: {
    en: {
      name: "B-Complex",
      generic: "B-Complex Vitamins",
      type: "Vitamin Supplement",
      uses: "Used to supplement several B vitamins when dietary intake is inadequate or deficiency is present.",
      how: "Provides B vitamins involved in energy metabolism, blood-cell formation, and nerve function.",
      side_effects: "Usually mild; nausea or changes in urine color may occur depending on the formulation.",
      warnings: "High doses of certain B vitamins can cause problems when used unnecessarily for long periods.",
      avoid: "Avoid unnecessary high-dose supplementation.",
      interactions: "Some formulations may interact with specific medicines.",
      when: "Taken according to the product or medical advice.",
      pregnancy: "Use according to healthcare advice during pregnancy.",
      doctor: "Consult a doctor if deficiency symptoms persist or supplementation is needed long term."
    },
    hi: {
      name: "बी-कॉम्प्लेक्स",
      generic: "बी-कॉम्प्लेक्स विटामिन्स",
      type: "विटामिन सप्लीमेंट",
      uses: "जब आहार से B vitamins पर्याप्त न मिलें या deficiency हो तो supplement के रूप में उपयोग किया जाता है।",
      how: "Energy metabolism, blood-cell formation और nerve function में शामिल B vitamins प्रदान करता है।",
      side_effects: "आमतौर पर हल्के होते हैं; मिचली या urine color में बदलाव formulation के अनुसार हो सकता है।",
      warnings: "कुछ B vitamins की high doses को लंबे समय तक अनावश्यक लेने से समस्याएं हो सकती हैं।",
      avoid: "बिना जरूरत high-dose supplementation से बचें।",
      interactions: "कुछ formulations विशेष दवाओं के साथ interaction कर सकती हैं।",
      when: "उत्पाद या डॉक्टर की सलाह के अनुसार लिया जाता है।",
      pregnancy: "गर्भावस्था में स्वास्थ्य विशेषज्ञ की सलाह के अनुसार उपयोग करें।",
      doctor: "Deficiency symptoms बने रहें या लंबे समय तक supplementation की जरूरत हो तो डॉक्टर से संपर्क करें।"
    }
  },

  ors_zinc: {
    en: {
      name: "ORS + Zinc",
      generic: "Oral Rehydration Salts + Zinc",
      type: "Rehydration and Mineral Supplement",
      uses: "Used mainly to prevent dehydration and support recovery during diarrhea, especially in children when medically recommended.",
      how: "ORS replaces water and electrolytes while zinc supports normal intestinal and immune function.",
      side_effects: "Usually well tolerated; zinc may cause nausea or stomach upset.",
      warnings: "ORS must be prepared exactly according to the packet instructions. Severe dehydration requires medical care.",
      avoid: "Do not add extra sugar or salt to prepared ORS.",
      interactions: "Zinc can interact with some antibiotics if taken too close together.",
      when: "Use during diarrhea according to medical/product instructions.",
      pregnancy: "Generally can be used when needed, but seek medical advice for pregnancy-specific needs.",
      doctor: "Seek urgent care for severe dehydration, blood in stool, persistent vomiting, or severe weakness."
    },
    hi: {
      name: "ORS + जिंक",
      generic: "ओरल रीहाइड्रेशन सॉल्ट्स + जिंक",
      type: "रीहाइड्रेशन और मिनरल सप्लीमेंट",
      uses: "मुख्य रूप से दस्त के दौरान dehydration रोकने और recovery में मदद के लिए उपयोग किया जाता है, खासकर बच्चों में जब medical advice हो।",
      how: "ORS पानी और electrolytes की पूर्ति करता है जबकि zinc intestinal और immune function में मदद करता है।",
      side_effects: "आमतौर पर अच्छी तरह सहन किया जाता है; zinc से मिचली या पेट खराब हो सकता है।",
      warnings: "ORS को packet instructions के बिल्कुल अनुसार तैयार करें। गंभीर dehydration में medical care जरूरी है।",
      avoid: "तैयार ORS में अतिरिक्त चीनी या नमक न मिलाएं।",
      interactions: "Zinc कुछ antibiotics के absorption को प्रभावित कर सकता है यदि बहुत पास लिया जाए।",
      when: "दस्त के दौरान डॉक्टर/उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "जरूरत होने पर आमतौर पर उपयोग किया जा सकता है, लेकिन pregnancy-specific जरूरत में डॉक्टर से सलाह लें।",
      doctor: "गंभीर dehydration, मल में खून, लगातार उल्टी या बहुत कमजोरी होने पर तुरंत चिकित्सा सहायता लें।"
    }
  },

  dicyclomine: {
    en: {
      name: "Dicyclomine",
      generic: "Dicyclomine",
      type: "Antispasmodic",
      uses: "Used to relieve intestinal spasms and cramp-related abdominal discomfort in selected conditions.",
      how: "Relaxes intestinal smooth muscle by blocking certain muscarinic receptors.",
      side_effects: "Dry mouth, dizziness, blurred vision, constipation, or drowsiness.",
      warnings: "Can impair alertness and may worsen certain glaucoma or urinary-retention conditions.",
      avoid: "Use cautiously or avoid with certain glaucoma, urinary retention, or intestinal obstruction conditions.",
      interactions: "Other anticholinergic or sedating medicines can increase side effects.",
      when: "Use only according to medical or product instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek care for severe or unexplained abdominal pain, vomiting, or persistent symptoms."
    },
    hi: {
      name: "डाइसाइक्लोमाइन",
      generic: "डाइसाइक्लोमाइन",
      type: "एंटीस्पास्मोडिक",
      uses: "कुछ स्थितियों में आंतों की ऐंठन और cramp-related पेट की असहजता कम करने के लिए उपयोग किया जाता है।",
      how: "Muscarinic receptors को block करके intestinal smooth muscles को relax करता है।",
      side_effects: "मुंह सूखना, चक्कर, blurred vision, कब्ज या उनींदापन हो सकता है।",
      warnings: "Alertness कम कर सकता है और कुछ glaucoma या urinary-retention conditions को बिगाड़ सकता है।",
      avoid: "कुछ glaucoma, urinary retention या intestinal obstruction में सावधानी/परहेज जरूरी है।",
      interactions: "अन्य anticholinergic या sedating medicines side effects बढ़ा सकती हैं।",
      when: "केवल डॉक्टर या उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "तेज/बिना कारण पेट दर्द, उल्टी या लगातार symptoms होने पर डॉक्टर से संपर्क करें।"
    }
  },

  hyoscine_butylbromide: {
    en: {
      name: "Hyoscine Butylbromide",
      generic: "Hyoscine Butylbromide",
      type: "Antispasmodic",
      uses: "Used to relieve cramping caused by spasms of the gastrointestinal or urinary tract.",
      how: "Relaxes smooth muscle by blocking muscarinic receptors.",
      side_effects: "Dry mouth, constipation, blurred vision, dizziness, or fast heartbeat.",
      warnings: "Can worsen certain glaucoma, urinary retention, or bowel obstruction conditions.",
      avoid: "Avoid or use only under medical advice with certain glaucoma, bowel obstruction, or urinary retention.",
      interactions: "Other anticholinergic medicines may increase side effects.",
      when: "Use according to medical or product instructions.",
      pregnancy: "Consult a doctor before use during pregnancy.",
      doctor: "Seek care for severe abdominal pain, vomiting, inability to pass stool/gas, or persistent symptoms."
    },
    hi: {
      name: "हायोसीन ब्यूटाइलब्रोमाइड",
      generic: "हायोसीन ब्यूटाइलब्रोमाइड",
      type: "एंटीस्पास्मोडिक",
      uses: "पाचन तंत्र या urinary tract की spasms से होने वाली ऐंठन कम करने के लिए उपयोग किया जाता है।",
      how: "Muscarinic receptors को block करके smooth muscles को relax करता है।",
      side_effects: "मुंह सूखना, कब्ज, blurred vision, चक्कर या तेज धड़कन हो सकती है।",
      warnings: "कुछ glaucoma, urinary retention या bowel obstruction conditions को बिगाड़ सकता है।",
      avoid: "कुछ glaucoma, bowel obstruction या urinary retention में डॉक्टर की सलाह के बिना उपयोग न करें।",
      interactions: "अन्य anticholinergic medicines side effects बढ़ा सकती हैं।",
      when: "डॉक्टर या उत्पाद के निर्देशानुसार उपयोग करें।",
      pregnancy: "गर्भावस्था में उपयोग से पहले डॉक्टर से सलाह लें।",
      doctor: "तेज पेट दर्द, उल्टी, मल/गैस न निकलना या लगातार symptoms होने पर चिकित्सा सहायता लें।"
    }
  }
};