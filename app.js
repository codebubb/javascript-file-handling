const liGrp = {
    start: `<li class="list-group-item">`,
    end: `</li>`
};

fileselect1.addEventListener('change', (event) => {
    const fh = new FileHandler(event);
    result1.innerHTML = fh.getFileNames().map(name => `${liGrp.start}${name}${liGrp.end}`);
});

fileselect2.addEventListener('change', (event) => {
    const fh = new FileHandler(event);
    result2.innerHTML = fh.getFileNames().map(name => `${liGrp.start}${name}${liGrp.end}`).join('');
});