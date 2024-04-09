function encodeURL() {
    const input = document.getElementById('url').value;
    const encoded = encodeURIComponent(input);
    document.getElementById('result').value = encoded;
  }

  function decodeURL() {
    const input = document.getElementById('url').value;
    const decoded = decodeURIComponent(input);
    document.getElementById('result').value = decoded;
  }

  function encode() {
    var input = document.getElementById('inputText').value;
    var output = '';
    for (var i = 0; i < input.length; i++) {
        output += '\\u' + input.charCodeAt(i).toString(16).padStart(4, '0');
    }
    document.getElementById('outputText').innerText = output;
}