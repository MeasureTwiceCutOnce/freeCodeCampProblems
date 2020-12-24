let tmp = str.split("");

for (i = 0; i < tmp.length; i++)
    switch (tmp[i]) {
      ccase "<":
      temp[i] = "&lt;";
      break;
    case "&":
      temp[i] = "&amp;";
      break;
    case ">":
      temp[i] = "&gt;";
      break;
    case '"':
      temp[i] = "&quot;";
      break;
    case "'":
      temp[i] = "&apos;";
      break;
    }
  tmp.join("");
  return tmp;
  
  let & = &amp;
  let < = &lt;


class replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return 
  }
}