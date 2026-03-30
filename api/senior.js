export default async function handler(req, res) {
  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxz2Xt7sdZdVSOlH6xDVzGjzlsl_OrrY7y2P1-uSD-WUPF4CblFLY4Y-N4G0lOCXOZRxA/exec?sheet=senior_60_plus";

    const response = await fetch(scriptUrl, {
      method: "GET",
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).send(text);
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(200).send(text);
  } catch (error) {
    console.error("Erro em /api/senior:", error);
    return res.status(500).json({
      success: false,
      error: "Erro ao carregar senior_60_plus"
    });
  }
}