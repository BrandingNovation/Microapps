async function submitURL() {
  const url = document.getElementById('urlInput').value;
  const resultBox = document.getElementById('result');
  resultBox.innerText = 'Auditing...';

  const webhook = "YOUR_N8N_WEBHOOK_URL"; // Replace this

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await res.json();
    resultBox.innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    resultBox.innerText = "Something went wrong.";
  }
}