const comfyHex = "af66b54a075fa8a90d5d37dba5af0830dd923f628f3c79a99034ec7bb0ef5f71";
const comfyHex2 = "d9920dc69e7b8352ea5774041afeaf8eeebd1c4985bae1368c2a5559c12bcb56";
var testInput = "testMessage";
async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string
    return hashHex;
}
function test() {
	getPassword(testInput);
}
function getPassword(userInput) {
	digestMessage(userInput).then((digestHex) => checkHex(digestHex));
}
function checkHex(digestHex) {
    if (digestHex == comfyHex2) {
        loadStock();
    }
}
function loadStock() {
    console.log("Loading inventory...");
}
test();

//https://jsfiddle.net/d1r2hvyw/
//https://jsfiddle.net/zu4b5nj3/1/
