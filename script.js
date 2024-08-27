document.getElementById("process-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const action = document.querySelector('input[name="action"]:checked').value;
    const outputText = action === "encrypt" ? encryptText(inputText) : decryptText(inputText);
    document.getElementById("output-text").value = outputText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
});

function encryptText(text) {
    const mappings = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => mappings[match]);
}

function decryptText(text) {
    const mappings = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => mappings[match]);
}
