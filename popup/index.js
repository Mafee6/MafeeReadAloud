const documentTextBtn = document.querySelector(".document-text");
documentTextBtn.addEventListener("click", async () => {
    const innerText = await browser.tabs.executeScript({
        code: `document.body.innerText`
    });

    const main = document.querySelector(".main");
    main.innerText = innerText
});