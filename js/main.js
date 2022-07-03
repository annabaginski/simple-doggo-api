document.querySelector('button').addEventListener('click', runReq);

async function runReq() {
    const res = await fetch('/api');
    const data = await res.json();

    console.log(data)
}