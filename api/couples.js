export default async function handler(req, res) {
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxz2Xt7sdZdVSOlH6xDVzGjzlsl_OrrY7y2P1-uSD-WUPF4CblFLY4Y-N4G0lOCXOZRxA/exec";

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "GET",
      });

      const text = await response.text();
      return res.status(response.ok ? 200 : 500).send(text);
    }

    if (req.method === "POST") {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(req.body),
      });

      const text = await response.text();
      return res.status(response.ok ? 200 : 500).send(text);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({
      error: "Proxy error",
      details: String(error),
    });
  }
}