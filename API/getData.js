import url from "./url.js";

async function getData(){
    try {
        const disData = await fetch (url);
        if (!disData.ok){
            throw new Error ("No funciona...", disData.status)
        }
        const transformData = await disData.json();
        return transformData.data
    } catch (error) {
        console.log(error.message)
    }
}

export default getData;