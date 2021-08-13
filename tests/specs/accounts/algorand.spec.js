import initialize from "../../common.js";
import addAccount from "../../flows/accounts/addAccount";
import { accountsFlows } from "./flows.js";

describe("bitcoin family", () => {
  initialize("algorand-accounts", {
    userData: "onboardingcompleted",
  });

  addAccount("algorand");
  accountsFlows("algorand");
});
