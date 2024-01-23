const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username,first_name: username},
            {headers: {"private-key": "c4f4f7e0-9184-4355-8522-bf26f8d44fa2" }}
        )
        return res.status(r.status).json(r.data)
    }   catch (e){
        return res.status(e.response.status).json(e.response.data)
    }

 // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);