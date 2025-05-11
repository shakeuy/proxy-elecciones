export default async function handler(req, res) {
  try {
    const response = await fetch("https://eleccionesdepartamentales2025.corteelectoral.gub.uy/JSON/ResumenGeneral_P_DPTOS.json", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Error al acceder a la Corte Electoral" });
    }

    const data = await response.text();

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
