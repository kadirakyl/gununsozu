const quotes = {
  "- Cemal Süreya": '"İnsan bazen sadece yorgun hissediyor. Küs, yalnız ya da aşık değil."',
  "- William James": '"Birine hayallerini sormak, onun ruhunu anlamak için en iyi yöntemdir."',
  "- Mevlâna": '"Mum olmak kolay değildir. Işık olmak için önce yanmak lazımdır."',
  "- George Orwell": '"Her şey göründüğü gibi değildir. Eğer öyle olsaydı elimize aldığımız deniz suyu da mavi renkte olurdu."',
  "- Cahit Zarifoğlu": '"Dünya, kalbi hassas olan kişilere çok ağır geliyor."',
  "- Montaigne": '"Bütün çabam kimseye muhtaç olmadan yaşamak. Ve bütün umudum da kendimde."',
  "- Freud": '"Bir ara insanları anladığımı sandım. Sonra sandığımı anladım."',
  "- Franz Kafka": '"Beni üzecek gücü sana verdiğim için kendimden özür dilerim"',
  "- La Edri": '"Unutma, düşman kör nişancıdır. Dostun ise nereden yaralayacağını çok iyi bilir…"',
  "- Lacan": '"En güzel intikam başarıdır. Seni sevmeyen herkesi üzer."',
  "- Platon": '"Boş bir kafa, şeytanın çalışma odasıdır."',
  "- Paulo Coelho": '"Açıklamalarla vaktini harcama. İnsanlar sadece duymak istediklerini duyarlar."',
  "- Charles Bukowski": '"Düştüğümüz kuyular sandığımız kadar dipsiz değil aslında, tutunmaya çalıştığımız ipler çok kısa."',
  "- Özdemir Asaf": '"Hayatta en değerli olan şey zamandır. Kime hediye ettiğine dikkat et."',
  "- Hacı Bektaş-ı Veli": '"Sabır, kanaat ve utanç, akıllı insanın üç askeridir."',
  "- Soren Kierkegaard": '"Nefret, başarısızlığa uğramış sevgidir."',
  "- Niccolo Machiavelli": '"İnsanlar daima korktukları insanları incitmek yerine yakınlarını incitmeyi daha güvenli bulurlar."',
  "- Eric Fromm": '"Hiç kimse için mükemmel olmak zorunda değilsin. Hayatındaki insanlar seni olduğun gibi sevecek karakterde olmalı."',
  "- Dostoyevski": '"Eğer bir şeye sahip değilsen, onu kaybedemezsin."',
  "- J.C. Watts": '"Kimse görmediği zaman da doğruyu yapan kişi, asıl kişilikli olandır."',
  "- Thomas Szasz": '"Aptallar ne affeder ne unutur. Saflar affeder ve unutur. Akıllılar ise affeder ama asla unutmaz."',
  "- Peyami Safa": '"İyiler kaybetmez ama kaybedilir."',
  "- Friedrich Nietzsche": '"En iyisi, sevinmeyi öğrenelim; böylece başkalarına acı vermeyi ve acıları düşünmeyi unuturuz."',
  "- Tezer Özlü": '"Kimse kimseyi unutmuyor ama asla karşı tarafın istediği biçimde hatırlamıyor."',
  "- Victor Hugo": '"Beni mahveden şey bana yalan söylemiş olman değil sana bir daha inanmayacak olmamdır."',
  "- William Butler": '"Uzaklıklar sevenler için önemsizdir. Çünkü gerçek sevgiyi anlatan tek duygu özlemektir."',
  "- Nazım Hikmet": '"Sende ben imkânsızlığı seviyorum fakat asla ümitsizliği değil."',
  "- Schopenhauer": '"Zeki bir insan yalnızlıkta düşünceleri ve hayal gücüyle mükemmel bir eğlenceye sahiptir."',
  "- Turgut Uyar": '"El olduk efendim, velhasıl ziyan olduk ziyadesiyle."',
  "- David Lynch": '"Kötü bir kahve bile hiç kahve olmamasından iyidir."',
  "- Yunus Emre": '"Derdi dünya olanın, dünya kadar derdi olur"',
  "- Cervantes": '"Zamanın unutturamayacağı anı,ölümün dindiremeyeceği acı yoktur."',
  "- Cemil Meriç": '"Okuyup anlamak,bilmek gerek. Çünkü insan en çok bilmediğine düşmandır."'
};


document.querySelector("#generate").addEventListener("click", () => {
generate();
});

function generate(){
// grab all the keys in the dictionary (authors) and store in an array
const authors = Object.keys(quotes);
// grab a random key (author) and store it in author
const author = authors[Math.floor(Math.random() * authors.length)];
// grab the value(quote) that belongs to that key
const quote = quotes[author]

document.querySelector("#quote").textContent = quote;
document.querySelector("#author").textContent = author;
}

window.onload = function(){
generate()
}