const tipsLocation = document.getElementById('tipsLocation');
const fragment = document.createDocumentFragment();

(async () => {
    const req = await fetch('/sigmaTips.txt');
    const tipsRaw = await req.text();
    const tipsArray = tipsRaw.split('\n');

    for (let i = tipsArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = tipsArray[i];
        tipsArray[i] = tipsArray[j];
        tipsArray[j] = temp;
    }
    
    for (let i = 0; i < tipsArray.length; i++) {
        let p = document.createElement('p');
        p.textContent = tipsArray[i];
        fragment.appendChild(p);
    }

    tipsLocation.appendChild(fragment);
    console.log(tipsArray);
})();


