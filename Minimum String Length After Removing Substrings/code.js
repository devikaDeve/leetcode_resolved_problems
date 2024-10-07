var minLength = function(s) {
    while(s.includes('AB') || s.includes('CD')){
        s = s.includes('AB') ? s.replaceAll('AB', '') : s;
        s = s.includes('CD') ? s.replaceAll('CD', '') : s;
    }
    return s.length;
};
