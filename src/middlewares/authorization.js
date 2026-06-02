import jwt from "jsonwebtoken";

export default function authorization(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ message: "unautenticted 1" });
    }
    const [type, token] = authorizationHeader.split(" ");

    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (err) {
      return res.status(401).json({
        message: "unautenticted3",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
