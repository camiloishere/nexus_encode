from random import randint

### V1 ------------------------------------------------
def encode(text:str):
    result = []
    for letter in text:
        result.append(str(ord(letter)))
        result.append(".")
    return "".join(result)[:-1]

def decode(raw_text:str):
    result = []
    text = raw_text.split(".")
    for char in text:
        result.append(chr(int(char)))
    return "".join(result)

### V2 ------------------------------------------------
def encode_v2(text:str):
    addition = randint(5,799)
    result = []
    for letter in text:
        result.append(str(ord(letter) + addition))
        result.append(".")
    result.append(str(addition))
    return "".join(result)

def decode_v2(raw_text:str):
    result = []
    text = raw_text.split(".")
    addition = text[-1]
    for char in text:
        result.append(chr(int(char) - int(addition)))
    return "".join(result)
