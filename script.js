async function translateText() {
    let text = document.getElementById("text").value;
    let source = document.getElementById("source").value;
    let target = document.getElementById("target").value;

    if (!text.trim()) {
        alert("Enter some text");
        return;
    }

    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

    try {
        let res = await fetch(url);
        let data = await res.json();

        document.getElementById("output").innerText =
            data.responseData.translatedText;
    } catch (error) {
        document.getElementById("output").innerText = "Error in translation";
    }
}

function copyText() {
    let text = document.getElementById("output").innerText;

    if (!text.trim()) {
        alert("No text to copy");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Copied!");
}