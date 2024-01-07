import * as fast_encoder from "./encoders/fast_encoder.js"

document.querySelector("#encode").addEventListener("click", () => {
    let text = document.querySelector("#user-input").value
    const encoderVersion = document.querySelector("#encoder-version").value || "v1"

    switch (encoderVersion){
      case "v1":
        document.querySelector("#output").value = fast_encoder.encode(text)
        break;
      case "v2":
        document.querySelector("#output").value = fast_encoder.encode_v2(text)
        break;
    }
})
document.querySelector("#decode").addEventListener("click", () => {
    let text = document.querySelector("#user-input").value
    const encoderVersion = document.querySelector("#encoder-version").value || "v1"

    switch (encoderVersion){
      case "v1":
        document.querySelector("#output").value = fast_encoder.decode(text)
        break;
      case "v2":
        document.querySelector("#output").value = fast_encoder.decode_v2(text)
        break;
    }
})