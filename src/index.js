import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import DatePicker from "material-ui/DatePicker";

import MobileTearSheet from "./MobileTearSheet";
import { List, ListItem } from "material-ui/List";

import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  button: {
    margin: 12
  }
};

const App = () => (
  <div style={styles}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div>
        <MobileTearSheet>
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
          </List>
        </MobileTearSheet>
        <DatePicker hintText="Portrait Dialog" />
        <RaisedButton
          label="Primary"
          primary={true}
          style={styles.button}
          icon={<FontIcon className="muidocs-icon-action-home" />}
        />
        <RaisedButton
          label="Secondary"
          secondary={true}
          style={styles.button}
        />
        <RaisedButton label="Disabled" disabled={true} style={styles.button} />
      </div>
    </MuiThemeProvider>
  </div>
);

render(<App />, document.getElementById("root"));
