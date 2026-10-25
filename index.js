const express = require("express");
const app = express();

app.use(express.json());

app.post("/agent", (req, res) => {
    const agentName = req.body.agentName;
    const { gadgets }  = req.body;
    const level = req.body.level;
    if (typeof req.body.agentName !== "string" || !req.body.agentName.trim()) {
        return res.status(400).json({
            error: "Agent name is missing"
        });
    } else if (!Array.isArray(gadgets)) {
        return res.status(400).json({
            error: "Gadgets must be an array"
        });
    } else if (typeof req.body.level !== "number" || req.body.level < 0) {
        return res.status(400).json({
            error: "Level is missing"
        });
    } else if (typeof req.body.onMission !== "boolean") {
        return res.status(400).json({
            error: "Mission status is missing"
        });
    } else if (gadgets.length === 0) {
        return res.status(400).json({
            error: "Gadgets are missing"
        });
    }
    res.status(200).json( {status: 'Agent modtaget', agent: req.body});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});