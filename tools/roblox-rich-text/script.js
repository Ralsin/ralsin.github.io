function processInput() {
    let output = document.getElementById("input").value
    output = output.replace(new RegExp(/(?:\r\n|\r|\n)/g), '<br/>')
    document.getElementById("output").value = output;
}