const Hebcal = require('hebcal');

function checkJewishShabbosAndYomTov(date = new Date()){
date = new Date(date);
const hebrewDate = new Hebcal.HDate(date);
const h = new Hebcal(hebrewDate.year);
try {
    let holidays = false;
    for (let i = 0; i < h.holidays[hebrewDate].length; i++) {
        let Check = h.holidays[hebrewDate][i].desc;
        for (let ii = 0; ii < Check.length; ii++) {
            const check = String(Check[ii]);
            if (check.includes('שמחת תורה') || check.includes('יום כיפור') || check.includes('ראש השנה') || check.includes('תשעה באב') || check.includes('שבת') || check.includes('Yom Tov') || check.includes('פסח') || check.includes('שבועות') || check.includes('סוכות')) {
                holidays = true;
                break;
            }
        }
        if (holidays) {
            break;
        }
    }
    return holidays;
} catch (error) {
    return false;
}
}

module.exports = checkJewishShabbosAndYomTov;