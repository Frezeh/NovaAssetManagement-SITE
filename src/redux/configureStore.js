import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { leaders } from "./leaders";
import { etf } from "./etf";
import { ndf } from "./ndf";
import { nmmf } from "./nmmf";
import { Auth } from "./auth";
import { InitialFeedback } from "./forms";
import { stock } from "./stock";
import { user } from "./user";
import { history } from "./history";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { ContactUs } from "./contactus";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      leaders: leaders,
      auth: Auth,
      etf: etf,
      ndf: ndf,
      nmmf: nmmf,
      stock: stock,
      user: user,
      history: history,
      ...createForms({
        feedback: InitialFeedback,
        contact: ContactUs,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
