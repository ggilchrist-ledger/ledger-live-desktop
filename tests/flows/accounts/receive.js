import { app, accountsPage } from "../../common.js";

const receive = (currency = "global") => {
  describe("account operations list", () => {
    beforeAll(async () => {
      await accountsPage.goToAccounts();
      await app.client.waitForSync();
    });

		it("show the first account", async () => {
		await accountsPage.searchAccount(currency);
			const firstAccountRow = await accountsPage.getFirstAccountRow();
			await firstAccountRow.click();
	
			expect(await app.client.screenshot()).toMatchImageSnapshot({
				customSnapshotIdentifier: `${currency}-account-operation-list`,
			});
    });
  });
};
