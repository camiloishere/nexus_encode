import * as nexus from "./encoders/nexus_encode.js"

document.querySelector("#encode").addEventListener("click", () => {
    let text = document.querySelector("#user-input").value
    const nexusVersion = document.querySelector("#nexus-version").value || "v1"

    switch (nexusVersion){
      case "v1":
        document.querySelector("#output").value = nexus.encode(text)
        break;
      case "v2":
        document.querySelector("#output").value = nexus.encode_v2(text)
        break;
    }
})
document.querySelector("#decode").addEventListener("click", () => {
    let text = document.querySelector("#user-input").value
    const nexusVersion = document.querySelector("#nexus-version").value || "v1"

    switch (nexusVersion){
      case "v1":
        document.querySelector("#output").value = nexus.decode(text)
        break;
      case "v2":
        document.querySelector("#output").value = nexus.decode_v2(text)
        break;
    }
})