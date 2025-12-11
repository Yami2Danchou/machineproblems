const txtSpace = document.getElementById("spaceField");
const btnNoSpace = document.getElementById("removeSpaceBtn");
const noSpaceOut = document.getElementById("spaceDisplay");
const txtChar = document.getElementById("textField");
const btnCount = document.getElementById("calculateBtn");
const charOut = document.getElementById("display");
const txtMail = document.getElementById("emailField");
const btnMail = document.getElementById("verifyBtn");
const emailOut = document.getElementById("emailDisplay");


btnNoSpace.onclick = () => {
    const rawTxt = txtSpace.value;
    const cookedTxt = rawTxt.replace(/\s/g, "");
    noSpaceOut.textContent = cookedTxt || "Result here";
};

txtSpace.onkeydown = e => {
    if (e.key === "Enter") btnNoSpace.click();
};






btnCount.onclick = () => {
    charOut.textContent = txtChar.value.length;
};

txtChar.onkeydown = e => {
    if (e.key === "Enter") btnCount.click();
};






btnMail.onclick = () => {
    const mail = txtMail.value;
    emailOut.textContent = mail === "" ? "Wala" : (mail.includes("@") ? "Valid" : "Invalid");
};

txtMail.onkeydown = e => {
    if (e.key === "Enter") btnMail.click();
};
