const express = require("express");
const Router = require("./routes/router");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/v1', Router);

app.get("/api/v1", async (req, res) => {
    res.status(200).json({ message: 'Welcome Code War Movies Listing' });
})
app.get("*", async (req, res) => {
    res.status(404).json({ message: 'Sorry nos such endpoint exist' });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
