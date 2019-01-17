import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import axios from "axios";
import { Button, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

class Scrap extends Component {
  state = {
    url: "",
    active: true,
    path: ""
  };

  handleClick = e => {
    this.setState({ active: !this.state.active });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const Url = "http://localhost:3002/scraper";
    const config = {
      url: this.state.url,
      path: this.state.path
    };

    axios
      .post(Url, config)
      .then(res => {
        if (res.status === 200) {
          alert(`Website ${this.state.url} scraped !`);
          this.setState({ url: "" });
        }
      })
      .catch(err => {
        return alert(err);
      });
  };

  render() {
    return (
      <div className="Scraper">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="path"
            type="text"
            placeholder="Type here your path"
            onChange={this.handleChange}
            value={this.state.path}
            style={{ width: "30%", margin: "3%", color: "white" }}
          />

          <Input
            name="url"
            type="text"
            placeholder="Type here Website Url"
            onChange={this.handleChange}
            value={this.state.url}
            style={{ width: "30%", margin: "3%", color: "white" }}
          />
          <Grid item sm={12}>
            <Button type="submit" style={{ margin: "1%", color: "white" }}>
              {" "}
              Send
            </Button>
          </Grid>
        </form>

        <div>
          <p>Read before starting :</p>
        </div>

        <div className={this.state.active ? "Selected" : "NotSelected"}>
          <Grid container justify="center">
            <Grid item xs={12} sm={4}>
              <p>Don't forget to put 'http://' or 'https://' in your Url !</p>
              <p>
                When clicking on Send button a folder 'Download' will be
                creating at your path direction in your computer !{" "}
              </p>
              <p>Enjoy !</p>
            </Grid>
          </Grid>
        </div>

        <Fab color="default" aria-label="Add" onClick={this.handleClick}>
          <AddIcon />
        </Fab>
        <div style={{ marginTop: "28%" }}>
          <p>Copyright: By RoM4zzz</p>
        </div>
      </div>
    );
  }
}

export default Scrap;
