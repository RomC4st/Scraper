const express = require("express");
const app = express();
const port = 3002
  ;
const scrape = require("website-scraper");
const cors = require("cors");
const bodyParser = require("body-parser");

////////////Use Body-Parser ////////////

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

///////////////Use Cors ///////////////

app.use(cors());

////////////Use POST route ///////////

app.post("/scraper", (req, res) => {
  const Data = req.body.url;
  const FolderName = Data.split("//");
  const Path = req.body.path;
  console.log(req.body.path);

  ////////////Use GET route ////////////

  app.get("/scraper", (req, res) => {
    res.status(200).json(`Welcome`)
  })

  /////////Use website-scraper /////////

  scrape({
    urls: Data,
    directory: `${Path}/Downloads/${FolderName[1]}`,
    // sources: [{ selector: "h1" }],
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
    }
  }).then(
    res.status(200).json(`Website ${Data} scraped !`),
    console.log(`Scraped, ${FolderName[1]} created !`)
  );
});

/////////Listening port 8080 /////////

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad is happening");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
