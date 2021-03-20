function split(str) {


    let currentStr = "";
        return str.split("").reduce((acc,curr,idx) => {
            if (curr === str[idx + 1]) currentStr += curr;
            else {
                currentStr += curr;
                acc.push(currentStr);
                currentStr = "";
            }

            return acc;
        },[]);
}

console.log(
    split("gHHH5YY++///\\"),//["g", "HHH", "5", "YY", "++", "///", "\\" ];
    split("hello"),//["h", "e", "ll", "o"].

split("commission"),//["c", "o", "mm", "i", "ss", "i", "o", "n"].

split("ssss----====llloooo"),//["ssss", "----", "====", "lll", "oooo"].

split("sssmmmaaammmaaat"),//["sss", "mmm", "aaa", "mmm", "aaa", "t"]
)