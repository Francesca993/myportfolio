import jwt from "jsonwebtoken";
import User from "../model/User.js"; // Importa il modello utente

export const login = async (req, res) => {
  // Logga il corpo della richiesta
  console.log("Corpo della richiesta:", req.body);

  // Assicurati che username e password siano definiti
  const { username, password } = req.body;

  // Verifica che i dati siano presenti
  if (!username || !password) {
    console.log("Username o password mancanti");
    return res
      .status(400)
      .json({ message: "Username e password sono richiesti" });
  }

  try {
    console.log("Tentativo di login con username:", username);

    // Cerca l'utente nel database
    const user = await User.findOne({ username }); // Assicurati di usare il campo corretto (username o name)
    if (!user) {
      console.log("Utente non trovato");
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    console.log("Utente trovato:", user);

    // Verifica se la password hashata è presente
    if (!user.password) {
      console.log("Password hashata mancante per l'utente", username);
      return res
        .status(500)
        .json({ message: "Errore del server: password mancante" });
    }

    // Verifica la password
    const isMatch = await user.matchPassword(password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("Password errata");
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    // Genera il token JWT
    const token = jwt.sign(
      { id: user._id, username: user.username }, // Assicurati di usare il campo corretto
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Token generato:", token);
    res.json({ token });
  } catch (error) {
    console.error("Errore durante il login:", error);
    res.status(500).json({ message: "Errore del server" });
  }
};
