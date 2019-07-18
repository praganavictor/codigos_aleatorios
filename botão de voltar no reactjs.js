import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <button onClick={() => history.goBack()}>Voltar</button>
);

export default withRouter(GoBack);
