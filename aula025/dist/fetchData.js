const fetch_Data = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Error: ' + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('fetch_Data: ' + error.message);
        }
        return null;
    }
};
export default fetch_Data;
//# sourceMappingURL=fetchData.js.map