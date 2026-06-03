import jwt from "jsonwebtoken";

export default async function auth(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "bad request" });
    }

    const [_type, token] = authorizationHeader.split(" ");
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      return res.status(403).json({ message: "forbidden" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "ingternal server error" });
  }
}
