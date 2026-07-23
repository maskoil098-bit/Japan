// ================= ข้อมูลคาตาคานะ =================
const katakanaData = [
    // วรรค A (อ)
    { id: 'k1', kana: 'ア', romaji: 'a', visual: 'คนกางแขน', mnemonic: 'คนกางแขนร้อง "อาาา"', img: 'images/K1.png' },
    { id: 'k2', kana: 'イ', romaji: 'i', visual: 'ปีกนก', mnemonic: 'ปีกนกอินทรี "อี"', img: 'images/K2.png' },
    { id: 'k3', kana: 'ウ', romaji: 'u', visual: 'UFO', mnemonic: 'จานบินยูเอฟโอ (UFO)', img: 'images/K3.png' },
    { id: 'k4', kana: 'エ', romaji: 'e', visual: 'เสาอากาศ', mnemonic: 'เสาอากาศรูปตัวไอ (I)', img: 'images/K4.png' },
    { id: 'k5', kana: 'オ', romaji: 'o', visual: 'นักเต้น', mnemonic: 'นักเต้นร้อง "โอ้"', img: 'images/K5.png' },

    // วรรค K (ค/ก)
    { id: 'k6', kana: 'カ', romaji: 'ka', visual: 'คัตเตอร์', mnemonic: 'ปลายมีด "คัตเตอร์" แหลมๆ', img: 'images/K6.png' },
    { id: 'k7', kana: 'キ', romaji: 'ki', visual: 'กุญแจ', mnemonic: 'ลูกกุญแจ (Key) สองเขี้ยว', img: 'images/K7.png' },
    { id: 'k8', kana: 'ク', romaji: 'ku', visual: 'คุกเข่า', mnemonic: 'คนทำท่า"คูก" เข่า', img: 'images/K8.png' },
    { id: 'k9', kana: 'ケ', romaji: 'ke', visual: 'เค้ก', mnemonic: 'เค้กชิ้น', img: 'images/K9.png' },
    { id: 'k10', kana: 'コ', romaji: 'ko', visual: 'โค้ง', mnemonic: 'เส้น "โค้ง" ขอบกล่อง', img: 'images/K10.png' },

    // วรรค S (ซ/ส)
    { id: 'k11', kana: 'サ', romaji: 'sa', visual: 'สาม', mnemonic: 'เส้น "สาม" เส้นไขว้กัน (Samurai)', img: 'images/K11.png' },
    { id: 'k12', kana: 'シ', romaji: 'shi', visual: 'มองบน', mnemonic: 'ชิ! คนหน้าบึ้งมองขึ้นบน', img: 'images/K12.png' },
    { id: 'k13', kana: 'ス', romaji: 'su', visual: 'สูท', mnemonic: 'ตัว ス ดูเหมือนคนใส่สูทนิด ๆ', img: 'images/K13.png' },
    { id: 'k14', kana: 'セ', romaji: 'se', visual: 'เซ', mnemonic: 'คนเดิน "เซ" เสียการทรงตัว', img: 'images/K14.png' },
    { id: 'k15', kana: 'ソ', romaji: 'so', visual: 'sad', mnemonic: 'โซแซด (So sad) หน้าคนมองลงพื้น', img: 'images/k15.png' },

    // วรรค T (ท/ต/ช)
    { id: 'k16', kana: 'タ', romaji: 'ta', visual: 'ตา', mnemonic: 'คล้ายตัว T (ตา)', img: 'images/K16.png' },
    { id: 'k17', kana: 'チ', romaji: 'chi', visual: 'เชียร์', mnemonic: 'คนยืน "เชียร์" ลีดเดอร์', img: 'images/K17.png' },
    { id: 'k18', kana: 'ツ', romaji: 'tsu', visual: 'สึนามิ', mnemonic: 'คลื่น "สึนามิ" กำลังซัดลงมา', img: 'images/K18.png' },
    { id: 'k19', kana: 'テ', romaji: 'te', visual: 'Take Off', mnemonic: 'เครื่องบิน "Take Off"', img: 'images/K19.png' },
    { id: 'k20', kana: 'ト', romaji: 'to', visual: 'โทเทม', mnemonic: 'เสา "โทเทม" (Totem)', img: 'images/K20.png' },

    // วรรค N (น)
    { id: 'k21', kana: 'ナ', romaji: 'na', visual: 'Nun', mnemonic: 'แม่ชีถือไม้กางเขน (Nun)', img: 'images/K21.png' },
    { id: 'k22', kana: 'ニ', romaji: 'ni', visual: 'บรรได', mnemonic: 'บันไดไม้คล้ายตัวอักษร"ニ"', img: 'images/K22.png' },
    { id: 'k23', kana: 'ヌ', romaji: 'nu', visual: 'นู้ดเดิล', mnemonic: 'ตะเกียบคีบเส้นบะหมี่ (Noodle)', img: 'images/K23.png' },
    { id: 'k24', kana: 'ネ', romaji: 'ne', visual: 'เนคไท', mnemonic: 'ลาย "เนคไท" (Necktie)', img: 'images/K24.png' },
    { id: 'k25', kana: 'ノ', romaji: 'no', visual: 'จมูก', mnemonic: 'จมูกคนโด่งๆ โนส (Nose)', img: 'images/K25.png' },

    // วรรค H (ฮ/ห/ฟ)
    { id: 'k26', kana: 'ハ', romaji: 'ha', visual: 'หัวเราะ', mnemonic: 'คนแก่กำลังหัวเราะ ฮ่าๆ (Ha)', img: 'images/K26.png' },
    { id: 'k27', kana: 'ヒ', romaji: 'hi', visual: 'Heels', mnemonic: 'ส้นรองเท้าสูง High-Heels', img: 'images/K27.png' },
    { id: 'k28', kana: 'フ', romaji: 'fu', visual: 'ฟูจิ', mnemonic: 'ยอดภูเขาไฟ "ฟูจิ" (Fuji)', img: 'images/K28.png' },
    { id: 'k29', kana: 'ヘ', romaji: 'he', visual: 'เฮเว่น', mnemonic: 'ลูกศรชี้ขึ้นสวรรค์ (Heaven)', img: 'images/K29.png' },
    { id: 'k30', kana: 'ホ', romaji: 'ho', visual: 'โฮลี่', mnemonic: 'ไม้กางเขนศักดิ์สิทธิ์ (Holy)', img: 'images/K30.png' },

    // วรรค M (ม)
    { id: 'k31', kana: 'マ', romaji: 'ma', visual: 'มาร์ตินี่', mnemonic: 'แก้ว "มาร์ตินี่" (Martini)', img: 'https://picsum.photos/seed/k31/200/200' },
    { id: 'k32', kana: 'ミ', romaji: 'mi', visual: 'มิสไซล์', mnemonic: 'จรวด "มิสไซล์" 3 ลูก (Missile)', img: 'https://picsum.photos/seed/k32/200/200' },
    { id: 'k33', kana: 'ム', romaji: 'mu', visual: 'มูส', mnemonic: 'เขากวาง "มูส" (Moose)', img: 'https://picsum.photos/seed/k33/200/200' },
    { id: 'k34', kana: 'メ', romaji: 'me', visual: 'เมล', mnemonic: 'กากบาทปิดจดหมาย เมล (Mail)', img: 'https://picsum.photos/seed/k34/200/200' },
    { id: 'k35', kana: 'モ', romaji: 'mo', visual: 'มอนิเตอร์', mnemonic: 'จอทีวี "มอนิเตอร์" (Monitor)', img: 'https://picsum.photos/seed/k35/200/200' },

    // วรรค Y (ย)
    { id: 'k36', kana: 'ヤ', romaji: 'ya', visual: 'แก้วแตก', mnemonic: 'แก้วร้าวร้อง "ย๊าก!"', img: 'https://picsum.photos/seed/k36/200/200' },
    { id: 'k37', kana: 'ユ', romaji: 'yu', visual: 'ยูเทิร์น', mnemonic: 'ป้ายเลี้ยวกลับ "ยูเทิร์น" (U-turn)', img: 'https://picsum.photos/seed/k37/200/200' },
    { id: 'k38', kana: 'ヨ', romaji: 'yo', visual: 'โยโย่', mnemonic: 'เชือกพันลูก "โยโย่" (Yoyo)', img: 'https://picsum.photos/seed/k38/200/200' },

    // วรรค R (ร/ล)
    { id: 'k39', kana: 'ラ', romaji: 'ra', visual: 'ราเมน', mnemonic: 'ชาม "ราเมน" (Ramen)', img: 'https://picsum.photos/seed/k39/200/200' },
    { id: 'k40', kana: 'リ', romaji: 'ri', visual: 'ริบบิ้น', mnemonic: 'สาย "ริบบิ้น" (Ribbon) สองเส้น', img: 'https://picsum.photos/seed/k40/200/200' },
    { id: 'k41', kana: 'ル', romaji: 'ru', visual: 'รากไม้', mnemonic: 'รากต้นไม้ รูท (Root)', img: 'https://picsum.photos/seed/k41/200/200' },
    { id: 'k42', kana: 'レ', romaji: 're', visual: 'เรดาร์', mnemonic: 'เครื่องรับสัญญาณ "เรดาร์" (Radar)', img: 'https://picsum.photos/seed/k42/200/200' },
    { id: 'k43', kana: 'ロ', romaji: 'ro', visual: 'โรล', mnemonic: 'กล่องสี่เหลี่ยม โรล (Roll)', img: 'https://picsum.photos/seed/k43/200/200' },

    // วรรค W (ว) และ N (น/ง/ม)
    { id: 'k44', kana: 'ワ', romaji: 'wa', visual: 'ไวน์', mnemonic: 'แก้ว "ไวน์" (Wine)', img: 'https://picsum.photos/seed/k44/200/200' },
    { id: 'k45', kana: 'ン', romaji: 'n', visual: 'ตาเดียว', mnemonic: 'อึน... หน้าคนยิ้มตาเดียว', img: 'https://picsum.photos/seed/k46/200/200' }
];

// ================= ข้อมูลคู่สับสน (จะโชว์มุมขวาอัตโนมัติ) =================
const cautionData = {
    'シ': { vs: 'ツ', vsRomaji: 'tsu', title: 'คนสับสนเยอะที่สุด', desc: '<span class="text-dot">● ●</span> จุดเรียง <strong>"แนวนอน"</strong><br><span class="text-stroke">──</span> ลากเส้นจากซ้าย ➔ ขวา<br><br>ระวังสลับกับ ツ' },
    'ツ': { vs: 'シ', vsRomaji: 'shi', title: 'คนสับสนเยอะที่สุด', desc: '<span class="text-dot">●<br>●</span> จุดเรียง <strong>"แนวตั้ง"</strong><br><span class="text-stroke">│</span> ลากเส้นจากบน ➔ ล่าง<br><br>ระวังสลับกับ シ' },
    'ソ': { vs: 'ン', vsRomaji: 'n', title: 'สับสนมาก', desc: '<span class="text-dot">●</span> 1 จุด (อยู่สูง)<br><span class="text-stroke">╲</span> เส้นหลัก <strong>ลงซ้าย</strong><br><br>ระวังสลับกับ ン' },
    'ン': { vs: 'ソ', vsRomaji: 'so', title: 'สับสนมาก', desc: '<span class="text-dot">●</span> 1 จุด (อยู่ต่ำ)<br><span class="text-stroke">╱</span> เส้นหลัก <strong>ลงขวา</strong><br><br>ระวังสลับกับ ソ' },
    'ク': { vs: 'ケ', vsRomaji: 'ke', title: 'ข้อควรระวัง', desc: '<strong>คุ</strong> ไม่มีเส้นขวาง<br><strong>เคะ</strong> มีเส้น <strong>+</strong> เพิ่มมา' },
    'ケ': { vs: 'ク', vsRomaji: 'ku', title: 'ข้อควรระวัง', desc: '<strong>เคะ</strong> มีเส้น <strong>+</strong> เพิ่มมา<br><strong>คุ</strong> ไม่มีเส้นขวาง' },
    'コ': { vs: 'ユ', vsRomaji: 'yu', title: 'บางคนมองคล้ายกัน', desc: '<strong>โคะ</strong> เป็นกรอบมุมฉาก (┐ ┘)<br><strong>ยุ</strong> มีหางลากยาวลงมาตรงกลาง' },
    'ユ': { vs: 'コ', vsRomaji: 'ko', title: 'บางคนมองคล้ายกัน', desc: '<strong>ยุ</strong> มีหางลากยาวลงมาตรงกลาง<br><strong>โคะ</strong> เป็นกรอบมุมฉาก' },
    'フ': { vs: 'ワ', vsRomaji: 'wa', title: 'ตอนเขียนหลายคนคล้ายกัน', desc: '<strong>ฟุ</strong> โค้งมนลงด้านล่าง (＼)<br><strong>วะ</strong> ตีเส้นตรงเป็นมุมฉาก (┐)' },
    'ワ': { vs: 'フ', vsRomaji: 'fu', title: 'ตอนเขียนหลายคนคล้ายกัน', desc: '<strong>วะ</strong> ตีเส้นตรงเป็นมุมฉาก (┐)<br><strong>ฟุ</strong> โค้งมนลงด้านล่าง (＼)' },
    'レ': { vs: 'ノ', vsRomaji: 'no', title: 'ข้อควรระวัง', desc: '<strong>เระ</strong> เริ่มซ้าย จบขวา (╲)<br><strong>โน</strong> เริ่มบน ลงล่าง (╱)' },
    'ノ': { vs: 'レ', vsRomaji: 're', title: 'ข้อควรระวัง', desc: '<strong>โน</strong> เริ่มบน ลงล่าง (╱)<br><strong>เระ</strong> เริ่มซ้าย จบขวา (╲)' },
    'マ': { vs: 'ム', vsRomaji: 'mu', title: 'บางคนเขียนมั่ว', desc: '<strong>มะ</strong> มีเส้นแนวนอนด้านบน<br><strong>มุ</strong> ไม่มีเส้นแนวนอน' },
    'ム': { vs: 'マ', vsRomaji: 'ma', title: 'บางคนเขียนมั่ว', desc: '<strong>มุ</strong> ไม่มีเส้นแนวนอน<br><strong>มะ</strong> มีเส้นแนวนอนด้านบน' },
    'ナ': { vs: 'メ', vsRomaji: 'me', title: 'ข้อควรระวัง', desc: '<strong>นะ</strong> คล้ายเครื่องหมาย <strong>+</strong><br><strong>เมะ</strong> คล้ายเครื่องหมาย <strong>X</strong>' },
    'メ': { vs: 'ナ', vsRomaji: 'na', title: 'ข้อควรระวัง', desc: '<strong>เมะ</strong> คล้ายเครื่องหมาย <strong>X</strong><br><strong>นะ</strong> คล้ายเครื่องหมาย <strong>+</strong>' }
};

let quizStartTime = 0; // ตัวแปรสำหรับเริ่มจับเวลาทำแบบทดสอบ

// จำนวนข้อ -> เวลาที่ให้ทำ (วินาที)
const quizTimeLimits = { 10: 10 * 60, 20: 15 * 60, 45: 40 * 60 };
let quizTimeLimitSec = 0;
let quizTimerInterval = null;
let quizTimedOut = false;

// ================= Preload รูปทั้งหมดล่วงหน้า (แก้บัคเปลี่ยนรูปช้า) =================
const imageCache = {};
function preloadAllImages() {
    katakanaData.forEach(item => {
        if (!item.img || imageCache[item.img]) return;
        const img = new Image();
        img.decoding = 'async';
        img.src = item.img;
        imageCache[item.img] = img;
    });
}

// ฐานข้อมูลผู้ใช้จำลอง (State Management & Storage)
let userData = {
    learnedIndex: 0, // ตั้งต้นเป็น 0 เสมอ (เวลา Refresh หน้าเว็บ มันจะเริ่มที่ 1 / 46 เสมอ)
    hardItems: [],   
    wrongHistory: [],
    streak: 1,         
    lastVisitDate: '', 
    totalQuizzes: 0,   
    totalCorrect: 0    
};

// ================= ระบบจัดการความต่อเนื่องและบันทึกข้อมูล (Streak & Stats) =================
function checkStreak() {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('katakana_user_stats');
    
    if (savedData) {
        let parsed = JSON.parse(savedData);
        userData.streak = parsed.streak || 1;
        userData.lastVisitDate = parsed.lastVisitDate || '';
        userData.totalQuizzes = parsed.totalQuizzes || 0;
        userData.totalCorrect = parsed.totalCorrect || 0;
        
        // ❌ เอาบรรทัดนี้ออก (หรือใส่เครื่องหมาย // ปิดไว้):
        // userData.learnedIndex = parsed.learnedIndex !== undefined ? parsed.learnedIndex : 45;
        
        userData.hardItems = parsed.hardItems || [];
    }

    if (userData.lastVisitDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (userData.lastVisitDate === yesterday.toDateString()) {
            userData.streak++;
        } else if (userData.lastVisitDate !== '') {
            userData.streak = 1;
        }
        userData.lastVisitDate = today;
        saveUserStats();
    }
}

function saveUserStats() {
    localStorage.setItem('katakana_user_stats', JSON.stringify(userData));
}

// ================= ระบบเปลี่ยนหน้าต่าง (Navigation) =================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    if (pageId === 'page-learn') {
        updateLearnCard();
    }

    const cautionPanel = document.getElementById('caution-panel');
    if (cautionPanel) {
        if (pageId !== 'page-learn') cautionPanel.classList.add('hidden');
        else updateLearnCard();
    }

    if(pageId === 'page-home') updateHomeState();
}
function startLearn() {
    currentLearnIdx = 0; // เริ่มเรียนคำแรกใหม่เสมอ
    showPage('page-learn');
}

// ================= โมดัลแนะนำการใช้งาน =================
function toggleInfoModal(show) {
    const modal = document.getElementById('info-modal');
    if (!modal) return;
    modal.classList.toggle('hidden', !show);
}
function closeModalOnBackdrop(event) {
    if (event.target.id === 'info-modal') toggleInfoModal(false);
}

// ================= โมดัลแจ้งเตือนกลางจอ (แทน alert ปกติ) =================
let celebrateOnClose = null;

function showCelebrateModal(title, message, iconId, onClose) {
    document.getElementById('celebrate-title').innerText = title;
    document.getElementById('celebrate-message').innerText = message;
    document.getElementById('celebrate-icon').innerHTML = `<svg class="icon"><use href="#${iconId || 'icon-award'}"/></svg>`;
    celebrateOnClose = typeof onClose === 'function' ? onClose : null;
    document.getElementById('celebrate-modal').classList.remove('hidden');
}

function hideCelebrateModal() {
    document.getElementById('celebrate-modal').classList.add('hidden');
    const cb = celebrateOnClose;
    celebrateOnClose = null;
    if (cb) cb();
}

function closeCelebrateOnBackdrop(event) {
    if (event.target.id === 'celebrate-modal') hideCelebrateModal();
}

document.getElementById('celebrate-ok-btn').addEventListener('click', hideCelebrateModal);

function updateHomeState() {
    let progress = Math.min(userData.learnedIndex , katakanaData.length);
    document.getElementById('home-progress-text').innerText = `${progress} / ${katakanaData.length}`;
    document.getElementById('home-progress-fill').style.width = `${(progress / katakanaData.length) * 100}%`;
    
    // อัปเดตแสดงผล Streak บนหน้า Home
    document.getElementById('home-streak').innerText = userData.streak;

    // คำนวณและแสดงผล ความแม่นยำเฉลี่ย (Accuracy)
    let accuracy = 0;
    if (userData.totalQuizzes > 0) {
        accuracy = Math.round((userData.totalCorrect / userData.totalQuizzes) * 100);
    }
    document.getElementById('home-accuracy').innerText = `${accuracy}%`;

    checkStreak();
}

// ================= ระบบเสียง =================
function playSound(text) {
    if (!('speechSynthesis' in window)) return;

    // ยกเลิกเสียงที่ค้างคิวอยู่ก่อน ไม่งั้นเสียงจะทับกันจนฟังดูสั้น/ขาดหาย (โดยเฉพาะบนมือถือ)
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.65;
    utterance.pitch = 1;
    utterance.volume = 1;

    // มือถือบางรุ่นต้องรอให้ cancel() เคลียร์คิวก่อนค่อยพูด ไม่งั้นคำสั้นๆ จะถูกตัดต้น/ท้าย
    setTimeout(() => window.speechSynthesis.speak(utterance), 60);
}

// ================= ระบบเรียน (Learn) =================
let currentLearnIdx = 0;
let learnImgToken = 0;

function setCardImage(imgEl, skeletonEl, src) {
    const token = ++learnImgToken;
    imgEl.classList.remove('loaded');
    if (skeletonEl) skeletonEl.classList.remove('hidden');

    if (!src) {
        if (skeletonEl) skeletonEl.classList.add('hidden');
        imgEl.removeAttribute('src');
        return;
    }

    const cached = imageCache[src];
    const reveal = () => {
        if (token !== learnImgToken) return; // ผู้ใช้เปลี่ยนหน้าไปแล้ว ไม่ต้องแสดงรูปเก่า
        imgEl.src = src;
        requestAnimationFrame(() => {
            if (token !== learnImgToken) return;
            imgEl.classList.add('loaded');
            if (skeletonEl) skeletonEl.classList.add('hidden');
        });
    };

    if (cached && cached.complete) {
        reveal();
    } else {
        const loader = cached || new Image();
        loader.decoding = 'async';
        loader.onload = reveal;
        loader.onerror = reveal;
        loader.src = src;
        imageCache[src] = loader;
    }
}

function updateLearnCard() {
    let data = katakanaData[currentLearnIdx];
    document.getElementById('learn-kana').innerText = data.kana;
    document.getElementById('learn-romaji').innerText = `[${data.romaji}]`;
    document.getElementById('learn-visual').innerText = data.visual;
    document.getElementById('learn-mnemonic').innerText = data.mnemonic;

    setCardImage(document.getElementById('learn-img'), document.getElementById('learn-img-skeleton'), data.img);

    // เตรียมรูปตัวถัดไป/ก่อนหน้าไว้ล่วงหน้า เพื่อให้สลับรูปได้ทันทีไม่มีดีเลย์
    [currentLearnIdx - 1, currentLearnIdx + 1].forEach(i => {
        const neighbor = katakanaData[i];
        if (neighbor && neighbor.img && !imageCache[neighbor.img]) {
            const pre = new Image();
            pre.decoding = 'async';
            pre.src = neighbor.img;
            imageCache[neighbor.img] = pre;
        }
    });

    document.getElementById('learn-progress-text').innerText = `${currentLearnIdx + 1} / ${katakanaData.length}`;
    document.getElementById('learn-progress-fill').style.width = `${((currentLearnIdx + 1) / katakanaData.length) * 100}%`;
    
    // บันทึกความคืบหน้าสูงสุดไว้ดูที่หน้า Home (นับเป็นจำนวนตัวที่เรียนแล้ว ไม่ใช่ index)
    let learnedCount = currentLearnIdx + 1;
    if (learnedCount > userData.learnedIndex) {
        userData.learnedIndex = learnedCount;
        saveUserStats();
    }
    
    const cautionPanel = document.getElementById('caution-panel');
    if (cautionPanel) {
        if (cautionData[data.kana]) {
            const cData = cautionData[data.kana];
            document.getElementById('caution-content').innerHTML = `
                <p class="caution-title">${cData.title}</p>
                <div class="caution-compare-box">
                    <div class="kana-pair">
                        <div class="kana-main">${data.kana}</div>
                        <div class="vs-text">VS</div>
                        <div class="kana-other">${cData.vs} <span style="font-size:16px;">(${cData.vsRomaji})</span></div>
                    </div>
                    <div class="caution-desc">${cData.desc}</div>
                </div>
                <p class="caution-color-note">
                    <span class="text-dot">สีแดง = จุด</span> | <span class="text-stroke">สีน้ำเงิน = เส้นหลัก</span>
                </p>
            `;
            cautionPanel.classList.remove('hidden');
        } else {
            cautionPanel.classList.add('hidden');
        }
    }
}

function nextLearn() {
    if (currentLearnIdx < katakanaData.length - 1) {
        currentLearnIdx++;
        updateLearnCard();
    } else {
        showCelebrateModal('ยินดีด้วย!', 'เรียนจบหมดแล้ว ไปทำแบบทดสอบกันเถอะ', 'icon-award', () => showPage('page-home'));
    }
}
function prevLearn() {
    if (currentLearnIdx > 0) {
        currentLearnIdx--;
        updateLearnCard();
    }
}

// ================= ระบบแบบทดสอบ (Quiz) =================
let quizQuestions = [];
let currentQuizIdx = 0;
let quizScore = 0;

function setupQuiz() {
    updateQuizSetupInfo();
    showPage('page-quiz-setup');
}

function formatMMSS(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateQuizSetupInfo() {
    const count = parseInt(document.getElementById('quiz-count').value);
    const limitSec = quizTimeLimits[count] || 0;
    const minutes = Math.round(limitSec / 60);
    document.getElementById('quiz-info-time').innerText = `${minutes} นาที`;
}

function startQuiz() {
    let count = parseInt(document.getElementById('quiz-count').value);
    count = Math.min(count, katakanaData.length);
    quizStartTime = Date.now();
    quizTimedOut = false;
    quizTimeLimitSec = quizTimeLimits[count] || (count * 53);

    quizQuestions = [...katakanaData].sort(() => 0.5 - Math.random()).slice(0, count);
    currentQuizIdx = 0;
    quizScore = 0;
    userData.wrongHistory = [];

    document.getElementById('quiz-total-q').innerText = count;
    showPage('page-quiz-active');
    startQuizTimer();
    loadQuizQuestion();
}

// ================= จับเวลานับถอยหลังระหว่างทำแบบทดสอบ =================
function startQuizTimer() {
    stopQuizTimer();
    updateQuizTimerDisplay(quizTimeLimitSec);

    quizTimerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
        const remaining = quizTimeLimitSec - elapsed;

        if (remaining <= 0) {
            updateQuizTimerDisplay(0);
            handleQuizTimeUp();
        } else {
            updateQuizTimerDisplay(remaining);
        }
    }, 1000);
}

function stopQuizTimer() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
}

function updateQuizTimerDisplay(remainingSec) {
    const timerEl = document.getElementById('quiz-timer');
    const pillEl = document.getElementById('quiz-timer-pill');
    const fillEl = document.getElementById('quiz-timer-fill');
    if (timerEl) timerEl.innerText = formatMMSS(Math.max(0, remainingSec));

    if (quizTimeLimitSec > 0 && fillEl) {
        const percentLeft = Math.max(0, Math.min(100, (remainingSec / quizTimeLimitSec) * 100));
        fillEl.style.width = `${percentLeft}%`;
    }

    const isLow = quizTimeLimitSec > 0 && remainingSec <= Math.max(30, quizTimeLimitSec * 0.15);
    if (pillEl) pillEl.classList.toggle('timer-warning', isLow);
    if (fillEl) fillEl.classList.toggle('timer-warning', isLow);
}

function handleQuizTimeUp() {
    stopQuizTimer();
    quizTimedOut = true;
    quizScore = 0;
    document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
    showQuizResult();
}

function loadQuizQuestion() {
    let qData = quizQuestions[currentQuizIdx];
    document.getElementById('quiz-current-q').innerText = currentQuizIdx + 1;
    document.getElementById('quiz-display').innerText = qData.kana;
    
    let options = [qData];
    let others = katakanaData.filter(k => k.id !== qData.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    options = options.concat(others).sort(() => 0.5 - Math.random());
    
    let choicesHTML = '';
    options.forEach(opt => {
        choicesHTML += `<button class="choice-btn" onclick="checkAnswer('${opt.id}', '${qData.id}', this)">${opt.romaji}</button>`;
    });
    document.getElementById('quiz-choices').innerHTML = choicesHTML;
    
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('btn-next-quiz').classList.add('hidden');
}

function checkAnswer(selectedId, correctId, btnElement) {
    document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
    
    let qData = quizQuestions[currentQuizIdx];
    let feedbackBox = document.getElementById('quiz-feedback');
    feedbackBox.classList.remove('hidden', 'correct', 'wrong');
    document.getElementById('btn-next-quiz').classList.remove('hidden');

    if (selectedId === correctId) {
        btnElement.classList.add('correct');
        feedbackBox.classList.add('correct');
        feedbackBox.innerHTML = `<svg class="icon"><use href="#icon-check"/></svg> ถูกต้อง — ${qData.kana} = ${qData.romaji}`;
        quizScore++;
    } else {
        btnElement.classList.add('wrong');
        feedbackBox.classList.add('wrong');
        feedbackBox.innerHTML = `<svg class="icon"><use href="#icon-x"/></svg> ไม่ถูก — คำตอบคือ ${qData.kana} = ${qData.romaji}`;
        if(!userData.wrongHistory.includes(qData.id)) userData.wrongHistory.push(qData.id);
    }
}

function nextQuizQuestion() {
    currentQuizIdx++;
    if (currentQuizIdx < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        stopQuizTimer();
        showQuizResult();
    }
}

function showQuizResult() {
    stopQuizTimer();

    const timeTakenMs = Date.now() - quizStartTime;
    const totalSeconds = Math.floor(timeTakenMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let timeString = minutes > 0 ? `${minutes} นาที ${seconds} วินาที` : `${seconds} วินาที`;

    const percent = Math.round((quizScore / quizQuestions.length) * 100);

    document.getElementById('result-timeup-banner').classList.toggle('hidden', !quizTimedOut);

    userData.totalQuizzes += quizQuestions.length;
    userData.totalCorrect += quizScore;
    saveUserStats();

    let filledStars = 0;
    if (percent === 100) filledStars = 5;
    else if (percent >= 80) filledStars = 4;
    else if (percent >= 60) filledStars = 3;
    else if (percent >= 40) filledStars = 2;
    else if (percent >= 20) filledStars = 1;

    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += `<svg class="icon${i < filledStars ? '' : ' empty'}"><use href="#icon-star-fill"/></svg>`;
    }

    document.getElementById('result-score').innerText = `${quizScore} / ${quizQuestions.length}`;
    document.getElementById('result-percent').innerText = `${percent}%`;
    document.getElementById('result-stars').innerHTML = starsHTML;
    document.getElementById('result-time').innerText = timeString;

    let wrongHTML = '';
    if (quizTimedOut) {
        wrongHTML = '<p>ทำแบบทดสอบไม่ทันเวลา ลองใหม่อีกครั้งนะ</p>';
        document.getElementById('btn-review-wrong').classList.add('hidden');
    } else if (userData.wrongHistory.length > 0) {
        wrongHTML = '<p><strong>คุณตอบผิด:</strong></p>';
        userData.wrongHistory.forEach(id => {
            let item = katakanaData.find(k => k.id === id);
            wrongHTML += `<p>${item.kana} (${item.romaji}) - ${item.visual}</p>`;
        });
        document.getElementById('btn-review-wrong').classList.remove('hidden');
    } else {
        wrongHTML = '<p>เก่งมาก! คุณตอบถูกหมดเลย</p>';
        document.getElementById('btn-review-wrong').classList.add('hidden');
    }
    document.getElementById('wrong-answers-list').innerHTML = wrongHTML;
    
    showPage('page-quiz-result');
}

// ================= ระบบทบทวน (Flashcard / Anki) =================
let reviewQueue = [];
let currentReviewIdx = 0;

function startReview(mode) {
    if (mode === 'wrong') {
        reviewQueue = katakanaData.filter(k => userData.wrongHistory.includes(k.id));
        document.getElementById('review-mode-text').innerText = 'ตอบผิดล่าสุด';
    } else {
        reviewQueue = [...katakanaData]; 
        document.getElementById('review-mode-text').innerText = 'ทั้งหมด';
    }
    
    if (reviewQueue.length === 0) {
        showCelebrateModal('ยังไม่มีคำศัพท์', 'ไม่มีคำศัพท์ในหมวดนี้ให้ทบทวนครับ!', 'icon-info', null);
        return;
    }
    
    currentReviewIdx = 0;
    showPage('page-review');
    loadReviewCard();
}

function loadReviewCard() {
    let data = reviewQueue[currentReviewIdx];
    document.getElementById('flashcard-inner').classList.remove('is-flipped');
    document.getElementById('review-actions').classList.add('hidden');
    
    document.getElementById('review-remain').innerText = reviewQueue.length - currentReviewIdx;
    
    document.getElementById('review-front-kana').innerText = data.kana;
    document.getElementById('review-back-romaji').innerText = data.romaji;
    document.getElementById('review-back-visual').innerText = data.visual;
    document.getElementById('review-back-mnemonic').innerText = data.mnemonic;
    document.getElementById('review-back-img').src = data.img || '';
}

function flipReviewCard() {
    const card = document.getElementById('flashcard-inner');
    if (!card.classList.contains('is-flipped')) {
        card.classList.add('is-flipped');
        document.getElementById('review-actions').classList.remove('hidden');
        playSound(reviewQueue[currentReviewIdx].kana);
    }
}

function markReview(isRemembered) {
    let data = reviewQueue[currentReviewIdx];
    userData.hardItems = userData.hardItems.filter(id => id !== data.id);
    saveUserStats();

    currentReviewIdx++;
    if (currentReviewIdx < reviewQueue.length) {
        loadReviewCard();
    } else {
        showCelebrateModal('เก่งมาก!', 'ทบทวนครบแล้ว เก่งมากครับ', 'icon-heart', () => showPage('page-home'));
    }
}

// ================= ลูกเล่นกลีบซากุระลอยตกแต่งพื้นหลัง =================
function spawnPetals() {
    const layer = document.getElementById('petal-layer');
    if (!layer) return;
    const count = window.innerWidth < 700 ? 9 : 16;
    for (let i = 0; i < count; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${10 + Math.random() * 10}s`;
        petal.style.animationDelay = `${Math.random() * 12}s`;
        petal.style.setProperty('--drift', `${(Math.random() * 120 - 60).toFixed(0)}px`);
        petal.style.setProperty('--size', `${8 + Math.random() * 8}px`);
        layer.appendChild(petal);
    }
}

// เริ่มต้นรันระบบเมื่อเปิดเว็บ
spawnPetals();
preloadAllImages();
checkStreak();
updateHomeState();