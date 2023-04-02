"use strict";
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
const handleData = async () => {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.descricao);
};
handleData();
//# sourceMappingURL=script.js.map