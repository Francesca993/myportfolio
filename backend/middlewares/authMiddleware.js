import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Accesso negato. Nessun token fornito." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Inserisci l'utente nel req
    next();
  } catch (err) {
    res.status(403).json({ message: "Token non valido o scaduto." });
  }
};
