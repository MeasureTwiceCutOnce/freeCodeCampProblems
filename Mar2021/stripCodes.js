function strip(s) {


    return s.replace(/[^a-z0-9+.-\\s]/gi,"");

}
console.log(
    strip("\u0000\n abc\u00E9def\u007F"),//" abcdef".

    strip("a\n\tb\u2102d\u2147f"),//"abdf".

    strip("Français."),//"Franais."
)

function strip(s) {
    return s.split('').filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    }).join('');
  }