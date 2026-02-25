document.addEventListener("DOMContentLoaded", function () {
    // --- Search Logic (Existing) ---
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const surahs = [
        "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
        "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
        "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
        "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
        "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
        "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
        "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
        "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
        "التكوير", "الإنفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
        "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
        "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
        "المسد", "الإخلاص", "الفلق", "الناس"
    ];

    if (searchInput && searchResults) {
        searchInput.addEventListener("input", function () {
            const query = this.value.trim();
            searchResults.innerHTML = "";

            if (query.length > 0) {
                surahs
                    .filter(surah => surah.includes(query))
                    .forEach(surah => {
                        const listItem = document.createElement("li");
                        listItem.textContent = surah;
                        searchResults.appendChild(listItem);
                    });
            }
        });
    }

    // --- Audio Player Logic (New) ---
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach((audio, index) => {
        // 1. Stop other audios when one starts
        audio.addEventListener('play', () => {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });

        // 2. Play next audio when current finishes
        audio.addEventListener('ended', () => {
            const nextAudio = audioElements[index + 1];
            if (nextAudio) {
                nextAudio.play();
                // Scroll to next audio element for better UX
                nextAudio.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});

// Global functions for buttons (if needed, though event listeners are better)
function playAudio(id) {
    const audio = document.getElementById(id);
    if (audio) audio.play();
}

function pauseAudio(id) {
    const audio = document.getElementById(id);
    if (audio) audio.pause();
}
