export default function handler(req, res) {
  const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21QYXJhbWV0ZXIiOiJxd2VyMTIzNCIsImV4cCI6MTc0NzExODIyOSwidXNlcklkIjoxNzM0NjkwfQ.VpspHGdx9z3Ftw573ols6ERa0GMOsUC-gcl0ctxkKes"; // 替换成你的 JWT
  res.status(200).json({ jwt });
}
