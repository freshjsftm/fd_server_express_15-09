const users = [];

module.exports = (req, res, next)=>{
  try {
    const user = req.body;

    user.id = users.length;
    delete user.password;
    user.createdAt = new Date();
    users.push(user)
    console.log(users)
    res.status(201).send(user);
  } catch (error) {
    res.send(error.message);
  }
}
