// V1 ------------------------------------------------
function encode(text) {
    let result = [];
    for (let letter of text) {
      result.push(String(letter.charCodeAt(0)));
      result.push(".");
    }
    return result.join("").slice(0, -1);
  }

function decode(raw_text) {
    let result = [];
    let text = raw_text.split(".");
    for (let char of text) {
      result.push(String.fromCharCode(parseInt(char)));
    }
    return result.join("");
  }

// V2 ------------------------------------------------
function encode_v2(text) {
    const addition = Math.floor(Math.random() * 795) + 5;
    const result = [];
    
    for (let i = 0; i < text.length; i++) {
        result.push((text.charCodeAt(i) + addition).toString());
        result.push(".");
    }

    result.push(addition.toString());
    return result.join("");
}

function decode_v2(raw_text) {
  const result = [];
  const text = raw_text.split(".");
  const addition = parseInt(text[text.length - 1]);

  for (let i = 0; i < text.length - 1; i++) {
      result.push(String.fromCharCode(parseInt(text[i]) - addition));
  }

  return result.join("");
}

// EXPORT

export {encode, decode, encode_v2, decode_v2};