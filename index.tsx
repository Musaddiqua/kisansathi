/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';

const i18n = {
    en: {
        title: "KisaanSathi",
        voiceAssistant: "Voice Assistant",
        cropRecommendation: "Crop Recommendation",
        cropRecommendationDesc: "Get crop suggestions based on your soil, climate, and season.",
        diseaseDetection: "Plant Disease Detection",
        diseaseDetectionDesc: "Upload an image to detect plant diseases.",
        marketPrice: "Market Price & Profit",
        marketPriceDesc: "Forecast harvest prices and potential profit.",
        askExpert: "Ask an Expert",
        askExpertDesc: "Get instant answers to your farming questions.",
        chatHeader: "Ask an Expert",
        chatPlaceholder: "Type or use voice to ask...",
        initialBotMessage: "Hello! How can I help you with your farming today?",
        backToDashboard: "Back to Dashboard",
        getLocation: "Get My Location",
        soilType: "Select Soil Type",
        alluvial: "Alluvial",
        black: "Black",
        red: "Red",
        laterite: "Laterite",
        desert: "Desert",
        season: "Select Season",
        kharif: "Kharif (Monsoon Crop)",
        rabi: "Rabi (Winter Crop)",
        zaid: "Zaid (Summer Crop)",
        getRecommendation: "Get Recommendation",
        uploadImage: "Upload Image",
        uploadImageDesc: "Click here to upload a photo of the plant leaf",
        detectDisease: "Detect Disease",
        marketPriceProfitHeader: "Market Price & Profit Forecast",
        cropName: "Crop Name (e.g., Wheat)",
        marketLocation: "Market Location (e.g., Pune)",
        getPrices: "Get Forecast",
        loading: "Thinking...",
        error: "Sorry, something went wrong. Please try again.",
        geolocationPermissionDenied: "Location permission was denied. Please enable it in your browser settings.",
        geolocationPositionUnavailable: "Location information is unavailable. Please check your connection and try again.",
        geolocationTimeout: "The request to get your location timed out.",
        geolocationGenericError: "An unknown error occurred while getting your location.",
        geolocationUnsupported: "Geolocation is not supported by this browser.",
        speechUnsupported: "Voice recognition is not supported by this browser.",
        speechPermissionDenied: "Microphone permission was denied. Please allow microphone access to use this feature.",
        speechError: "Voice recognition failed. Please try again.",
        noVoiceFound: "Could not find a voice for the selected language.",
        voiceInputLabel: "Use voice input"
    },
    hi: {
        title: "किसान सारथी",
        voiceAssistant: "आवाज सहायक",
        cropRecommendation: "फ़सल अनुशंसा",
        cropRecommendationDesc: "अपनी मिट्टी, जलवायु और मौसम के आधार पर फसल सुझाव प्राप्त करें।",
        diseaseDetection: "पौध रोग का पता लगाना",
        diseaseDetectionDesc: "पौधों की बीमारियों का पता लगाने के लिए एक छवि अपलोड करें।",
        marketPrice: "बाजार मूल्य और लाभ",
        marketPriceDesc: "कटाई की कीमतों और संभावित लाभ का पूर्वानुमान लगाएं।",
        askExpert: "विशेषज्ञ से पूछें",
        askExpertDesc: "अपने खेती के सवालों के तुरंत जवाब पाएं।",
        chatHeader: "विशेषज्ञ से पूछें",
        chatPlaceholder: "पूछने के लिए टाइप करें या आवाज का उपयोग करें...",
        initialBotMessage: "नमस्ते! आज मैं आपकी खेती में कैसे मदद कर सकता हूँ?",
        backToDashboard: "डैशबोर्ड पर वापस जाएं",
        getLocation: "मेरा स्थान प्राप्त करें",
        soilType: "मिट्टी का प्रकार चुनें",
        alluvial: "जलोढ़",
        black: "काली",
        red: "लाल",
        laterite: "लैटेराइट",
        desert: "रेगिस्तानी",
        season: "मौसम चुनें",
        kharif: "खरीफ (मानसून फसल)",
        rabi: "रबी (सर्दियों की फसल)",
        zaid: "जायद (गर्मी की फसल)",
        getRecommendation: "सिफारिश प्राप्त करें",
        uploadImage: "छवि अपलोड करें",
        uploadImageDesc: "पौधे के पत्ते की फोटो अपलोड करने के लिए यहां क्लिक करें",
        detectDisease: "रोग का पता लगाएं",
        marketPriceProfitHeader: "बाजार मूल्य और लाभ का पूर्वानुमान",
        cropName: "फसल का नाम (जैसे, गेहूं)",
        marketLocation: "बाजार का स्थान (जैसे, पुणे)",
        getPrices: "पूर्वानुमान प्राप्त करें",
        loading: "सोच रहा है...",
        error: "क्षमा करें, कुछ गलत हो गया। कृपया पुन: प्रयास करें।",
        geolocationPermissionDenied: "स्थान अनुमति अस्वीकार कर दी गई। कृपया अपनी ब्राउज़र सेटिंग्स में इसे सक्षम करें।",
        geolocationPositionUnavailable: "स्थान की जानकारी अनुपलब्ध है। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।",
        geolocationTimeout: "आपके स्थान का पता लगाने का अनुरोध समय समाप्त हो गया।",
        geolocationGenericError: "आपके स्थान का पता लगाते समय एक अज्ञात त्रुटि हुई।",
        geolocationUnsupported: "यह ब्राउज़र जियोलोकेशन का समर्थन नहीं करता है।",
        speechUnsupported: "यह ब्राउज़र वॉयस रिकग्निशन को सपोर्ट नहीं करता है।",
        speechPermissionDenied: "माइक्रोफ़ोन की अनुमति अस्वीकार कर दी गई। इस सुविधा का उपयोग करने के लिए कृपया माइक्रोफ़ोन एक्सेस की अनुमति दें।",
        speechError: "आवाज पहचानने में विफल। कृपया पुन: प्रयास करें।",
        noVoiceFound: "चयनित भाषा के लिए कोई आवाज नहीं मिली।",
        voiceInputLabel: "आवाज इनपुट का प्रयोग करें"
    },
    mr: {
        title: "किसान सारथी",
        voiceAssistant: "आवाज सहाय्यक",
        cropRecommendation: "पीक शिफारस",
        cropRecommendationDesc: "तुमच्या माती, हवामान आणि हंगामानुसार पिकासाठी सूचना मिळवा.",
        diseaseDetection: "वनस्पती रोग ओळख",
        diseaseDetectionDesc: "वनस्पती रोग ओळखण्यासाठी एक प्रतिमा अपलोड करा.",
        marketPrice: "बाजार भाव आणि नफा",
        marketPriceDesc: "कापणीच्या किमती आणि संभाव्य नफ्याचा अंदाज लावा.",
        askExpert: "तज्ञांना विचारा",
        askExpertDesc: "तुमच्या शेतीच्या प्रश्नांची त्वरित उत्तरे मिळवा.",
        chatHeader: "तज्ञांना विचारा",
        chatPlaceholder: "विचारण्यासाठी टाइप करा किंवा आवाजाचा वापर करा...",
        initialBotMessage: "नमस्कार! आज मी तुमच्या शेतीत कशी मदत करू शकतो?",
        backToDashboard: "डॅशबोर्डवर परत जा",
        getLocation: "माझे स्थान मिळवा",
        soilType: "मातीचा प्रकार निवडा",
        alluvial: "गाळाची",
        black: "काळी",
        red: "लाल",
        laterite: "लॅटराइट",
        desert: "वाळवंटी",
        season: "हंगाम निवडा",
        kharif: "खरीप (पावसाळी पीक)",
        rabi: "रब्बी (हिवाळी पीक)",
        zaid: "उन्हाळी (उन्हाळी पीक)",
        getRecommendation: "शिफारस मिळवा",
        uploadImage: "प्रतिमा अपलोड करा",
        uploadImageDesc: "वनस्पतीच्या पानाचा फोटो अपलोड करण्यासाठी येथे क्लिक करा",
        detectDisease: "रोग ओळखा",
        marketPriceProfitHeader: "बाजार भाव आणि नफा अंदाज",
        cropName: "पिकाचे नाव (उदा. गहू)",
        marketLocation: "बाजाराचे ठिकाण (उदा. पुणे)",
        getPrices: "अंदाज मिळवा",
        loading: "विचार करत आहे...",
        error: "क्षमस्व, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.",
        geolocationPermissionDenied: "स्थान परवानगी नाकारली आहे. कृपया आपल्या ब्राउझर सेटिंग्जमध्ये ती सक्षम करा.",
        geolocationPositionUnavailable: "स्थान माहिती उपलब्ध नाही. कृपया आपले कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.",
        geolocationTimeout: "तुमचे स्थान मिळवण्याची विनंती कालबाह्य झाली.",
        geolocationGenericError: "तुमचे स्थान मिळवताना एक अज्ञात त्रुटी आली.",
        geolocationUnsupported: "हा ब्राउझर जिओलोकेशनला समर्थन देत नाही.",
        speechUnsupported: "हा ब्राउझर व्हॉइस रेकग्निशनला सपोर्ट करत नाही.",
        speechPermissionDenied: "मायक्रोफोन परवानगी नाकारली आहे. कृपया हे वैशिष्ट्य वापरण्यासाठी मायक्रोफोन प्रवेशास अनुमती द्या.",
        speechError: "आवाज ओळखण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
        noVoiceFound: "निवडलेल्या भाषेसाठी आवाज सापडला नाही.",
        voiceInputLabel: "व्हॉइस इनपुट वापरा"
    },
    ur: {
        title: "کسان ساتھی",
        voiceAssistant: "آواز معاون",
        cropRecommendation: "فصل کی سفارش",
        cropRecommendationDesc: "اپنی مٹی، آب و ہوا اور موسم کی بنیاد پر فصل کی تجاویز حاصل کریں۔",
        diseaseDetection: "پودوں کی بیماری کا پتہ لگانا",
        diseaseDetectionDesc: "پودوں کی بیماریوں کا پتہ لگانے کے لیے تصویر اپ لوڈ کریں۔",
        marketPrice: "مارکیٹ کی قیمت اور منافع",
        marketPriceDesc: "کٹائی کی قیمتوں اور ممکنہ منافع کی پیشن گوئی کریں۔",
        askExpert: "ماہر سے پوچھیں",
        askExpertDesc: "اپنے کاشتکاری کے سوالات کے فوری جوابات حاصل کریں۔",
        chatHeader: "ماہر سے پوچھیں",
        chatPlaceholder: "پوچھنے کے لیے ٹائپ کریں یا آواز کا استعمال کریں...",
        initialBotMessage: "ہیلو! آج میں آپ کی کاشتکاری میں کس طرح مدد کرسکتا ہوں؟",
        backToDashboard: "ڈیش بورڈ پر واپس",
        getLocation: "میرا مقام حاصل کریں",
        soilType: "مٹی کی قسم منتخب کریں",
        alluvial: "گاد",
        black: "سیاہ",
        red: "سرخ",
        laterite: "لیٹرائٹ",
        desert: "صحرا",
        season: "موسم منتخب کریں",
        kharif: "خریف (مانسون کی فصل)",
        rabi: "ربیع (سردیوں کی فصل)",
        zaid: "زید (گرمیوں کی فصل)",
        getRecommendation: "سفارش حاصل کریں",
        uploadImage: "تصویر اپ لوڈ کریں",
        uploadImageDesc: "پودے کے پتے کی تصویر اپ لوڈ کرنے کے لیے یہاں کلک کریں",
        detectDisease: "بیماری کا پتہ لگائیں",
        marketPriceProfitHeader: "مارکیٹ کی قیمت اور منافع کی پیشن گوئی",
        cropName: "فصل کا نام (مثلاً گندم)",
        marketLocation: "مارکیٹ کا مقام (مثلاً پونے)",
        getPrices: "پیشن گوئی حاصل کریں",
        loading: "سوچ رہا ہوں...",
        error: "معذرت، کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں.",
        geolocationPermissionDenied: "مقام کی اجازت مسترد کر دی گئی۔ براہ کرم اسے اپنے براؤزر کی ترتیبات میں فعال کریں۔",
        geolocationPositionUnavailable: "مقام کی معلومات دستیاب نہیں ہیں۔ براہ کرم اپنا کنکشن چیک کریں اور دوبارہ کوشش کریں۔",
        geolocationTimeout: "آپ کا مقام حاصل کرنے کی درخواست کا وقت ختم ہو گیا۔",
        geolocationGenericError: "آپ کا مقام حاصل کرنے کے دوران ایک نامعلوم خرابی پیش آئی۔",
        geolocationUnsupported: "یہ براؤزر جغرافیائی محل وقوع کی حمایت نہیں کرتا ہے۔",
        speechUnsupported: "یہ براؤزر آواز کی شناخت کی حمایت نہیں کرتا ہے۔",
        speechPermissionDenied: "مائیکروفون کی اجازت مسترد کر دی گئی۔ براہ کرم اس خصوصیت کو استعمال کرنے کے لیے مائیکروفون تک رسائی کی اجازت دیں۔",
        speechError: "آواز کی شناخت ناکام ہوگئی۔ براہ مہربانی دوبارہ کوشش کریں.",
        noVoiceFound: "منتخب زبان کے لیے کوئی آواز نہیں ملی۔",
        voiceInputLabel: "صوتی ان پٹ استعمال کریں۔"
    },
    ta: {
        title: "கிசான்சாத்தி",
        voiceAssistant: "குரல் உதவியாளர்",
        cropRecommendation: "பயிர் பரிந்துரை",
        cropRecommendationDesc: "உங்கள் மண், காலநிலை மற்றும் பருவத்தின் அடிப்படையில் பயிர் பரிந்துரைகளைப் பெறுங்கள்.",
        diseaseDetection: "தாவர நோய் கண்டறிதல்",
        diseaseDetectionDesc: "தாவர நோய்களைக் கண்டறிய ஒரு படத்தைப் பதிவேற்றவும்.",
        marketPrice: "சந்தை விலை மற்றும் லாபம்",
        marketPriceDesc: "அறுவடை விலைகள் மற்றும் சாத்தியமான லாபத்தை முன்னறிவிக்கவும்.",
        askExpert: "நிபுணரிடம் கேளுங்கள்",
        askExpertDesc: "உங்கள் விவசாயக் கேள்விகளுக்கு உடனடி பதில்களைப் பெறுங்கள்.",
        chatHeader: "நிபுணரிடம் கேளுங்கள்",
        chatPlaceholder: "கேட்க தட்டச்சு செய்யவும் அல்லது குரலைப் பயன்படுத்தவும்...",
        initialBotMessage: "வணக்கம்! இன்று உங்கள் விவசாயத்தில் நான் எப்படி உதவ முடியும்?",
        backToDashboard: "டாஷ்போர்டுக்குத் திரும்பு",
        getLocation: "எனது இருப்பிடத்தைப் பெறு",
        soilType: "மண் வகையைத் தேர்ந்தெடுக்கவும்",
        alluvial: "வண்டல்",
        black: "கருப்பு",
        red: "சிவப்பு",
        laterite: "லேட்டரைட்",
        desert: "பாலைவனம்",
        season: "பருவத்தைத் தேர்ந்தெடுக்கவும்",
        kharif: "காரிஃப் (பருவமழை பயிர்)",
        rabi: "ரபி (குளிர்கால பயிர்)",
        zaid: "ஜாயித் (கோடைக்கால பயிர்)",
        getRecommendation: "பரிந்துரைகளைப் பெறு",
        uploadImage: "படத்தைப் பதிவேற்றவும்",
        uploadImageDesc: "தாவர இலையின் புகைப்படத்தைப் பதிவேற்ற இங்கே கிளிக் செய்யவும்",
        detectDisease: "நோயைக் கண்டறி",
        marketPriceProfitHeader: "சந்தை விலை மற்றும் இலாப முன்னறிவிப்பு",
        cropName: "பயிர் பெயர் (எ.கா. கோதுமை)",
        marketLocation: "சந்தை இடம் (எ.கா. புனே)",
        getPrices: "முன்னறிவிப்பைப் பெறுங்கள்",
        loading: "சிந்திக்கிறது...",
        error: "மன்னிக்கவும், ஏதோ தவறு జరిగింది. மீண்டும் முயலவும்.",
        geolocationPermissionDenied: "இருப்பிட அனுமதி மறுக்கப்பட்டது. உங்கள் உலாவி அமைப்புகளில் அதை இயக்கவும்.",
        geolocationPositionUnavailable: "இருப்பிடத் தகவல் கிடைக்கவில்லை. உங்கள் இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
        geolocationTimeout: "உங்கள் இருப்பிடத்தைப் பெறுவதற்கான கோரிக்கை காலாவதியானது.",
        geolocationGenericError: "உங்கள் இருப்பிடத்தைப் பெறும்போது அறியப்படாத பிழை ஏற்பட்டது.",
        geolocationUnsupported: "இந்த உலாவி புவிஇருப்பிடத்தை ஆதரிக்கவில்லை.",
        speechUnsupported: "இந்த உலாவியில் குரல் அறிதல் ஆதரிக்கப்படவில்லை.",
        speechPermissionDenied: "மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது. இந்த அம்சத்தைப் பயன்படுத்த மைக்ரோஃபோன் அணுகலை அனுமதிக்கவும்.",
        speechError: "குரல் அறிதல் தோல்வியடைந்தது. மீண்டும் முயலவும்.",
        noVoiceFound: "தேர்ந்தெடுக்கப்பட்ட மொழிக்கு குரல் எதுவும் கிடைக்கவில்லை.",
        voiceInputLabel: "குரல் உள்ளீட்டைப் பயன்படுத்தவும்"
    },
    te: {
        title: "కిసాన్‌సాథి",
        voiceAssistant: "వాయిస్ అసిస్టెంట్",
        cropRecommendation: "పంట సిఫార్సు",
        cropRecommendationDesc: "మీ నేల, వాతావరణం మరియు కాలం ఆధారంగా పంట సూచనలను పొందండి.",
        diseaseDetection: "మొక్కల వ్యాధి నిర్ధారణ",
        diseaseDetectionDesc: "మొక్కల వ్యాధులను గుర్తించడానికి చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        marketPrice: "మార్కెట్ ధర & లాభం",
        marketPriceDesc: "పంట కోత ధరలు మరియు సంభావ్య లాభాలను అంచనా వేయండి.",
        askExpert: "నిపుణుడిని అడగండి",
        askExpertDesc: "మీ వ్యవసాయ ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి.",
        chatHeader: "నిపుణుడిని అడగండి",
        chatPlaceholder: "అడగడానికి టైప్ చేయండి లేదా వాయిస్ ఉపయోగించండి...",
        initialBotMessage: "నమస్కారం! ఈ రోజు మీ వ్యవసాయంలో నేను ఎలా సహాయపడగలను?",
        backToDashboard: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు",
        getLocation: "నా స్థానాన్ని పొందండి",
        soilType: "నేల రకాన్ని ఎంచుకోండి",
        alluvial: "ఒండ్రు",
        black: "నలుపు",
        red: "ఎరుపు",
        laterite: "లాటరైట్",
        desert: "ఎడారి",
        season: "కాలాన్ని ఎంచుకోండి",
        kharif: "ఖరీఫ్ (వానాకాలం పంట)",
        rabi: "రబీ (శీతాకాలం పంట)",
        zaid: "జైద్ (వేసవి పంట)",
        getRecommendation: "సిఫార్సును పొందండి",
        uploadImage: "చిత్రాన్ని అప్‌లోడ్ చేయండి",
        uploadImageDesc: "మొక్క ఆకు యొక్క ఫోటోను అప్‌లోడ్ చేయడానికి ఇక్కడ క్లిక్ చేయండి",
        detectDisease: "వ్యాధిని గుర్తించండి",
        marketPriceProfitHeader: "మార్కెట్ ధర & లాభాల సూచన",
        cropName: "పంట పేరు (ఉదా. గోధుమ)",
        marketLocation: "మార్కెట్ స్థానం (ఉదా. పూణే)",
        getPrices: "సూచనను పొందండి",
        loading: "ఆలోచిస్తున్నాను...",
        error: "క్షమించండి, ఏదో పొరపాటు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
        geolocationPermissionDenied: "స్థాన అనుమతి నిరాకరించబడింది. దయచేసి మీ బ్రౌజర్ సెట్టింగ్‌లలో దాన్ని ప్రారంభించండి.",
        geolocationPositionUnavailable: "స్థాన సమాచారం అందుబాటులో లేదు. దయచేసి మీ కనెక్షన్‌ని తనిఖీ చేసి, మళ్లీ ప్రయత్నించండి.",
        geolocationTimeout: "మీ స్థానాన్ని పొందడానికి అభ్యర్థన సమయం ముగిసింది.",
        geolocationGenericError: "మీ స్థానాన్ని పొందుతున్నప్పుడు తెలియని లోపం సంభవించింది.",
        geolocationUnsupported: "ఈ బ్రౌజర్ జియోలొకేషన్‌కు మద్దతు ఇవ్వదు.",
        speechUnsupported: "ఈ బ్రౌజర్ వాయిస్ రికగ్నిషన్‌కు మద్దతు ఇవ్వదు.",
        speechPermissionDenied: "మైక్రోఫోన్ అనుమతి నిరాకరించబడింది. దయచేసి ఈ ఫీచర్‌ను ఉపయోగించడానికి మైక్రోఫోన్ యాక్సెస్‌ను అనుమతించండి.",
        speechError: "వాయిస్ గుర్తింపు విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
        noVoiceFound: "ఎంచుకున్న భాషకు వాయిస్ కనుగొనబడలేదు.",
        voiceInputLabel: "వాయిస్ ఇన్‌పుట్‌ని ఉపయోగించండి"
    },
};

const appState = {
    language: 'en',
    currentView: 'dashboard',
    chatHistory: [],
    isLoading: false,
    featureResult: null,
    uploadedImage: null,
    isListening: false,
    isSpeaking: false,
    activeVoiceInputId: null, // To track which input field is listening
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;
const speechSynthesis = window.speechSynthesis;

const languageMap = {
    en: 'en-US',
    hi: 'hi-IN',
    mr: 'mr-IN',
    ta: 'ta-IN',
    te: 'te-IN',
    ur: 'ur-IN',
};

function t(key) {
    return i18n[appState.language][key] || key;
}

function setState(newState) {
    Object.assign(appState, newState);
    render();
}

// --- VOICE ASSISTANT LOGIC ---

function speakText(textToSpeak) {
    if (!speechSynthesis || !textToSpeak) return;

    const cleanText = textToSpeak.replace(/\*\*/g, '').replace(/[\*\-]/g, '');
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const langCode = languageMap[appState.language];
    utterance.lang = langCode;

    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === langCode) || voices.find(v => v.lang.startsWith(appState.language));
    if (voice) {
        utterance.voice = voice;
    }

    utterance.onstart = () => setState({ isSpeaking: true });
    utterance.onend = () => setState({ isSpeaking: false });
    utterance.onerror = () => setState({ isSpeaking: false });

    speechSynthesis.speak(utterance);
}

function startListening(targetId = null) {
    if (!recognition) {
        alert(t('speechUnsupported'));
        return;
    }

    if (appState.isListening) {
        recognition.stop();
        // The onend handler will reset the state
        return;
    }
    
    // Set state immediately to prevent re-entry from rapid clicks
    setState({ isListening: true, activeVoiceInputId: targetId });

    recognition.lang = languageMap[appState.language];
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.start();

    // onstart can be empty as we set state before calling start()
    recognition.onstart = () => {};

    recognition.onend = () => {
        // Only update state if it's currently listening, to avoid race conditions
        if (appState.isListening) {
            setState({ isListening: false, activeVoiceInputId: null });
        }
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        if (appState.activeVoiceInputId) {
            const input = document.getElementById(appState.activeVoiceInputId) as HTMLInputElement;
            if (input) {
                input.value = speechResult;
            }
        } else { // Global assistant
            if (appState.currentView === 'chat') {
                handleAskExpert(speechResult);
            } else {
                 setState({ currentView: 'chat', chatHistory: [] });
                 setTimeout(() => handleAskExpert(speechResult), 100);
            }
        }
    };
    
    recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed') {
            alert(t('speechPermissionDenied'));
        } else {
            alert(t('speechError'));
        }
        // onend will be called automatically, resetting the state.
    };
}

// --- RENDERING LOGIC ---

function renderMarkdown(text) {
    if (!text) return '';
    const lines = text.split('\n').filter(line => line.trim() !== '');
    let html = '';
    let inList = false;

    for (const line of lines) {
        let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        if (processedLine.trim().startsWith('* ')) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += `<li>${processedLine.trim().substring(2)}</li>`;
        } else {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            html += `<p>${processedLine}</p>`;
        }
    }

    if (inList) {
        html += '</ul>';
    }
    return html;
}

function render() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = ''; 

    const header = createHeader();
    root.appendChild(header);

    const main = document.createElement('main');
    switch (appState.currentView) {
        case 'chat':
            main.appendChild(createChatView());
            break;
        case 'cropRecommendation':
            main.appendChild(createCropRecommendationView());
            break;
        case 'diseaseDetection':
            main.appendChild(createDiseaseDetectionView());
            break;
        case 'marketPrice':
            main.appendChild(createMarketPriceView());
            break;
        default:
            main.appendChild(createDashboardView());
    }
    root.appendChild(main);

    attachEventListeners();
}

function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    let voiceBtnClass = 'voice-btn';
    let voiceIconClass = 'fa-microphone';
    
    if (appState.isListening && !appState.activeVoiceInputId) { // only for global
        voiceBtnClass += ' listening';
    }
    if (appState.isSpeaking) {
        voiceBtnClass += ' speaking';
        voiceIconClass = 'fa-stop-circle'; 
    }

    header.innerHTML = `
        <div class="logo">
            <i class="fa-solid fa-leaf"></i>
            <span>${t('title')}</span>
        </div>
        <div class="nav-controls">
            <select class="language-select">
                ${Object.keys(i18n).map(lang => `<option value="${lang}" ${appState.language === lang ? 'selected' : ''}>${{ en: 'English', hi: 'हिन्दी', mr: 'मराठी', ur: 'اردو', ta: 'தமிழ்', te: 'తెలుగు' }[lang]}</option>`).join('')}
            </select>
            <button class="${voiceBtnClass}" aria-label="${t('voiceAssistant')}">
                <i class="fa-solid ${voiceIconClass}"></i>
            </button>
        </div>
    `;
    return header;
}

function createDashboardView() {
    const dashboard = document.createElement('div');
    dashboard.className = 'dashboard-grid';
    dashboard.innerHTML = `
        <div class="feature-card" data-feature="cropRecommendation">
            <div class="card-content"><h3>${t('cropRecommendation')}</h3><p>${t('cropRecommendationDesc')}</p></div>
        </div>
        <div class="feature-card" data-feature="diseaseDetection">
            <div class="card-content"><h3>${t('diseaseDetection')}</h3><p>${t('diseaseDetectionDesc')}</p></div>
        </div>
        <div class="feature-card" data-feature="marketPrice">
            <div class="card-content"><h3>${t('marketPrice')}</h3><p>${t('marketPriceDesc')}</p></div>
        </div>
        <div class="feature-card" data-feature="askExpert">
            <div class="card-content"><h3>${t('askExpert')}</h3><p>${t('askExpertDesc')}</p></div>
        </div>
    `;
    return dashboard;
}

function createFeatureView(title, content) {
    const view = document.createElement('div');
    view.className = 'feature-view';
    view.innerHTML = `
        <div class="view-header">
            <button class="back-btn" aria-label="${t('backToDashboard')}"><i class="fa-solid fa-arrow-left"></i></button>
            <h3>${title}</h3>
        </div>
        <div class="feature-content">
            ${content}
        </div>
    `;
    return view;
}

function createLoadingSpinner() {
    return `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>${t('loading')}</p>
        </div>
    `;
}

function createResultsContainer(result) {
    const formattedResult = renderMarkdown(result);
    return `<div class="results-container">${formattedResult}</div>`;
}

function createVoiceInputGroup(inputId, labelKey, placeholderKey) {
    const isListening = appState.isListening && appState.activeVoiceInputId === inputId;
    return `
        <div class="form-group">
            <label for="${inputId}">${t(labelKey)}</label>
            <div class="input-group">
                <input type="text" id="${inputId}" placeholder="${t(placeholderKey)}" required>
                <button type="button" class="voice-input-btn ${isListening ? 'listening' : ''}" data-input-id="${inputId}" aria-label="${t('voiceInputLabel')}">
                    <i class="fa-solid fa-microphone"></i>
                </button>
            </div>
        </div>
    `;
}

function createCropRecommendationView() {
    const content = `
        <form class="feature-form" id="crop-rec-form">
            ${createVoiceInputGroup('location', 'marketLocation', 'marketLocation')}
            <div class="form-group">
                <button type="button" class="btn-secondary" id="get-location-btn"><i class="fa-solid fa-location-crosshairs"></i> ${t('getLocation')}</button>
            </div>
            <div class="form-group">
                <label for="soil-type">${t('soilType')}</label>
                <select id="soil-type" required>
                    <option value="alluvial">${t('alluvial')}</option>
                    <option value="black">${t('black')}</option>
                    <option value="red">${t('red')}</option>
                    <option value="laterite">${t('laterite')}</option>
                    <option value="desert">${t('desert')}</option>
                </select>
            </div>
             <div class="form-group">
                <label for="season-select">${t('season')}</label>
                <select id="season-select" required>
                    <option value="Kharif">${t('kharif')}</option>
                    <option value="Rabi">${t('rabi')}</option>
                    <option value="Zaid">${t('zaid')}</option>
                </select>
            </div>
            <button type="submit" class="btn">${t('getRecommendation')}</button>
        </form>
        <div id="feature-results">
            ${appState.isLoading ? createLoadingSpinner() : (appState.featureResult ? createResultsContainer(appState.featureResult) : '')}
        </div>
    `;
    return createFeatureView(t('cropRecommendation'), content);
}

function createDiseaseDetectionView() {
    const content = `
        <form class="feature-form" id="disease-det-form">
            <label for="image-upload" class="image-upload-area">
                <input type="file" id="image-upload" accept="image/*">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>${t('uploadImageDesc')}</p>
            </label>
            <div class="image-preview" id="image-preview">
                ${appState.uploadedImage ? `<img src="${appState.uploadedImage}" alt="Uploaded plant leaf">` : ''}
            </div>
            <button type="submit" class="btn" ${!appState.uploadedImage ? 'disabled' : ''}>${t('detectDisease')}</button>
        </form>
        <div id="feature-results">
             ${appState.isLoading ? createLoadingSpinner() : (appState.featureResult ? createResultsContainer(appState.featureResult) : '')}
        </div>
    `;
    return createFeatureView(t('diseaseDetection'), content);
}

function createMarketPriceView() {
    const content = `
        <form class="feature-form" id="market-price-form">
            ${createVoiceInputGroup('crop-name', 'cropName', 'cropName')}
            ${createVoiceInputGroup('market-location', 'marketLocation', 'marketLocation')}
            <button type="submit" class="btn">${t('getPrices')}</button>
        </form>
        <div id="feature-results">
            ${appState.isLoading ? createLoadingSpinner() : (appState.featureResult ? createResultsContainer(appState.featureResult) : '')}
        </div>
    `;
    return createFeatureView(t('marketPriceProfitHeader'), content);
}

function createChatView() {
    const chatView = document.createElement('div');
    chatView.className = 'chat-view';

    const chatHeader = document.createElement('div');
    chatHeader.className = 'view-header';
    chatHeader.innerHTML = `
        <button class="back-btn" aria-label="${t('backToDashboard')}"><i class="fa-solid fa-arrow-left"></i></button>
        <h3>${t('chatHeader')}</h3>
    `;
    chatView.appendChild(chatHeader);

    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'chat-messages';

    const history = appState.chatHistory.length === 0 ? [{ role: 'bot', text: t('initialBotMessage') }] : appState.chatHistory;
    
    history.forEach(msg => {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', msg.role);
        if (msg.role === 'bot') {
            messageEl.innerHTML = renderMarkdown(msg.text);
        } else {
            messageEl.textContent = msg.text;
        }
        messagesContainer.appendChild(messageEl);
    });

    if (appState.isLoading) {
        const loadingEl = document.createElement('div');
        loadingEl.classList.add('message', 'bot', 'loading');
        loadingEl.textContent = '...';
        messagesContainer.appendChild(loadingEl);
    }

    chatView.appendChild(messagesContainer);
    requestAnimationFrame(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });

    const isListening = appState.isListening && appState.activeVoiceInputId === 'chat-input-main';
    const chatForm = document.createElement('form');
    chatForm.className = 'chat-input-form';
    chatForm.innerHTML = `
        <div class="input-group">
            <input type="text" id="chat-input-main" class="chat-input" placeholder="${t('chatPlaceholder')}" required>
            <button type="button" class="voice-input-btn ${isListening ? 'listening' : ''}" data-input-id="chat-input-main" aria-label="${t('voiceInputLabel')}">
                <i class="fa-solid fa-microphone"></i>
            </button>
        </div>
        <button type="submit" class="send-btn" aria-label="Send message"><i class="fa-solid fa-paper-plane"></i></button>
    `;
    chatView.appendChild(chatForm);
    return chatView;
}

// --- API & EVENT HANDLING LOGIC ---

async function callGemini(prompt, imageParts = []) {
    setState({ isLoading: true, featureResult: null });
    let resultText = '';
    try {
        const contents = imageParts.length > 0 ? { parts: [...imageParts, { text: prompt }] } : prompt;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
            config: {
                systemInstruction: `You are 'KisaanSathi', an AI assistant for Indian farmers. Provide short, direct, and point-to-point answers. Do not use long paragraphs. Keep the language simple and helpful. Format your response clearly using markdown (bolding with ** and bullet points with *). The user's language is ${appState.language}.`,
            },
        });
        resultText = response.text;
        speakText(resultText);
        return resultText;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return t('error');
    } finally {
        setState({ isLoading: false });
    }
}

async function callGeminiForLocation(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: `You are a reverse geocoding assistant. Respond with only "City, State". Do not add any other text.`,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API for location:", error);
        return t('error');
    }
}

function handleGetLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const locationInput = document.getElementById('location') as HTMLInputElement;
            if (!locationInput) return;

            const originalValue = locationInput.value;
            locationInput.value = t('loading');
            
            const { latitude, longitude } = position.coords;
            const prompt = `Based on latitude ${latitude} and longitude ${longitude}, what is the nearest major city and state in India? Respond with only "City, State".`;
            const location = await callGeminiForLocation(prompt);
            
            if (location.trim() !== t('error')) {
               locationInput.value = location.trim();
            } else {
               locationInput.value = originalValue; 
               alert(t('error')); 
            }
        }, (error: GeolocationPositionError) => {
            console.error("Geolocation error:", error.code, error.message);
            let errorMessage = t('geolocationGenericError');
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = t('geolocationPermissionDenied');
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = t('geolocationPositionUnavailable');
                    break;
                case error.TIMEOUT:
                    errorMessage = t('geolocationTimeout');
                    break;
            }
            alert(errorMessage);
            const locationInput = document.getElementById('location') as HTMLInputElement;
            if (locationInput && locationInput.value === t('loading')) {
                locationInput.value = '';
            }
        });
    } else {
        alert(t('geolocationUnsupported'));
    }
}

async function handleCropRecommendation(e) {
    e.preventDefault();
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const soilType = (document.getElementById('soil-type') as HTMLSelectElement).value;
    const season = (document.getElementById('season-select') as HTMLSelectElement).value;
    const prompt = `I am a farmer in ${location} with ${soilType} soil, planning for the ${season} season. Recommend 3-5 suitable crops with a brief, one-sentence reason for each. Format as a bulleted list.`;
    const result = await callGemini(prompt);
    setState({ featureResult: result });
}

async function handleDiseaseDetection(e) {
    e.preventDefault();
    if (!appState.uploadedImage) return;

    const mimeTypeMatch = appState.uploadedImage.match(/data:(.*);base64/);
    if (!mimeTypeMatch || !mimeTypeMatch[1]) {
        console.error("Invalid image data URL");
        setState({ featureResult: t('error'), isLoading: false });
        return;
    }
    const mimeType = mimeTypeMatch[1];
    const base64Data = appState.uploadedImage.split(',')[1];
    
    const imagePart = {
        inlineData: { data: base64Data, mimeType },
    };

    const prompt = "Analyze this image of a plant leaf. If there is a disease, identify it, describe it in one sentence, and suggest two actionable, simple remedies. If it's healthy, just say 'The plant appears healthy.' Be very direct.";
    const result = await callGemini(prompt, [imagePart]);
    setState({ featureResult: result });
}

async function handleMarketPrice(e) {
    e.preventDefault();
    const cropName = (document.getElementById('crop-name') as HTMLInputElement).value;
    const location = (document.getElementById('market-location') as HTMLInputElement).value;
    const prompt = `If a farmer sows "${cropName}" in the ${location} area now, what is the estimated market price per quintal at the time of harvest? Also, what is the estimated potential profit per acre? Provide a direct price range for the harvest price and a single estimated profit figure. Be concise and use a point-to-point format.
- Estimated Harvest Price: [Your Answer]
- Estimated Profit per Acre: [Your Answer]`;
    const result = await callGemini(prompt);
    setState({ featureResult: result });
}

async function handleAskExpert(prompt) {
    const currentHistory = appState.chatHistory;
    const updatedHistory = [...currentHistory, { role: 'user', text: prompt }];
    setState({
        chatHistory: updatedHistory,
        isLoading: true
    });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: `You are 'KisaanSathi', an AI assistant for Indian farmers. Provide short, direct, and point-to-point answers. Do not use long paragraphs. Keep the language simple and helpful. The user's language is ${appState.language}.`,
            },
        });
        const text = response.text;
        speakText(text);
        setState({
            chatHistory: [...updatedHistory, { role: 'bot', text }],
            isLoading: false
        });
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        setState({
            chatHistory: [...updatedHistory, { role: 'bot', text: t('error') }],
            isLoading: false
        });
    }
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function attachEventListeners() {
    // Header Voice Assistant
    document.querySelector('.voice-btn')?.addEventListener('click', () => {
        if (appState.isSpeaking) {
            speechSynthesis.cancel();
            setState({ isSpeaking: false });
        } else {
            startListening(null); // null target means global assistant
        }
    });

    // Inline Voice Inputs
    document.querySelectorAll('.voice-input-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = (e.currentTarget as HTMLElement).dataset.inputId;
            startListening(targetId);
        });
    });
    
    // Language Selector
    document.querySelector('.language-select')?.addEventListener('change', (e) => {
        speechSynthesis.cancel();
        setState({ language: (e.target as HTMLSelectElement).value, chatHistory: [], featureResult: null, isSpeaking: false });
    });

    // Back Buttons
    document.querySelector('.back-btn')?.addEventListener('click', () => {
        speechSynthesis.cancel();
        setState({ currentView: 'dashboard', chatHistory: [], featureResult: null, uploadedImage: null, isSpeaking: false });
    });
    
    // View Changers
    if (appState.currentView === 'dashboard') {
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', () => {
                const feature = card.getAttribute('data-feature');
                if (feature === 'askExpert') {
                    setState({ currentView: 'chat', chatHistory: [] });
                } else {
                    setState({ currentView: feature, featureResult: null, uploadedImage: null });
                }
            });
        });
    }

    // Feature Forms
    document.getElementById('crop-rec-form')?.addEventListener('submit', handleCropRecommendation);
    document.getElementById('get-location-btn')?.addEventListener('click', handleGetLocation);
    document.getElementById('disease-det-form')?.addEventListener('submit', handleDiseaseDetection);
    document.getElementById('market-price-form')?.addEventListener('submit', handleMarketPrice);
    
    // Image Upload
    const imageUpload = document.getElementById('image-upload');
    if (imageUpload) {
        imageUpload.addEventListener('change', async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const base64Image = await blobToBase64(file);
                setState({ uploadedImage: base64Image });
            }
        });
    }

    // Chat Form
    document.querySelector('.chat-input-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chat-input-main') as HTMLInputElement;
        if (input && input.value.trim()) {
            handleAskExpert(input.value.trim());
            input.value = '';
        }
    });
}

// Initial Render
speechSynthesis.getVoices();
render();