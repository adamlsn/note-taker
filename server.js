const apiRoutes = require("./routes/apiRoutes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes")

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('public'));

app.use("api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});