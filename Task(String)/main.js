let str = "   Mohamad Shehadeh Alghrasi   ";
console.log("Original string:", `"${str}"`);

// trim() remove spaces start and end
console.log("Trim:", `"${str.trim()}"`);

// trimStart()
console.log("TrimStart:", `"${str.trimStart()}"`);

// trimEnd()
console.log("TrimEnd:", `"${str.trimEnd()}"`);

// padStart() إضافة حروف في البداية ليصل الطول الى 30
console.log("PadStart(30, '*'):", `"${str.trim().padStart(30, "*")}"`);

// padEnd() إضافة حروف في النهاية ليصل الطول الى 30
console.log("PadEnd(30, '*'):", `"${str.trim().padEnd(30, "*")}"`);

// charAt() تعطي حرف في موقع محدد
console.log("charAt(6):", str.charAt(6));

// charCodeAt() تعطي قيمة Unicode للحرف
console.log("charCodeAt(6):", str.charCodeAt(6));

// split() تقسم النص إلى مصفوفة
console.log("Split by space:", str.trim().split(" "));

// length
console.log("String length:", str.length);

// slice() تعطي جزء من النص
console.log("Slice(3, 15):", str.slice(3, 15));

// substring() مثل slice لكن لا تقبل قيم سالبة
console.log("Substring(3, 15):", str.substring(3, 15));

// substr() تعطي عدد 12 من الأحرف بداية من الخانة 3
console.log("Substr(3, 12):", str.substr(3, 12));

// replace()
console.log("Replace 'World' with 'JS':", str.replace("Mohamad", "Abu Khaled"));

// replaceAll()
console.log("ReplaceAll 'l' with 'L':", str.replaceAll("bu", "BU"));

// toUpperCase()
console.log("ToUpperCase():", str.toUpperCase());

// toLowerCase()
console.log("ToLowerCase():", str.toLowerCase());

// concat()
console.log("Concat with '!!!':", str.concat("!!!"));

// indexOf() أول موقع للكلمة
console.log("IndexOf 'JavaScript':", str.indexOf("Shehadeh"));

// lastIndexOf() اخر موقع للكلمة
console.log("LastIndexOf 'l':", str.lastIndexOf("Shehadeh"));

// search()
console.log("Search 'JavaScript':", str.search("Shehadeh"));

// match() تعطي التطابقات
console.log("Match 'l' globally:", str.match(/Shehadeh/g));

// matchAll() تعطي كل التطابقات مع معلومات أكثر
console.log("MatchAll 'l':", Array.from(str.matchAll(/Shehadeh/g)));

// includes() هل يحتوي النص على الكلمة
console.log("Includes 'Hello':", str.includes("Shehadeh"));

// startsWith() هل يبدأ النص بالكلمة
console.log("StartsWith '   Hello':", str.startsWith("   Shehadeh"));

// endsWith() هل ينتهي النص بالكلمة
console.log("EndsWith '!   ':", str.endsWith("Shehadeh   "));
