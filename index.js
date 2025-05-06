module.exports = (req, res) => {
  res.status(200).json({
    jwt: "你的最新 JWT 字符串"
  });
};
