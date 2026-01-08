class HeaderPage {
  constructor(page) {
    this.page = page;

    this.userDropdown = page.locator('.oxd-userdropdown-name');
    this.logoutLink = page.getByRole('menuitem', { name: 'Logout' });
  }

  async openUserMenu() {
    await this.userDropdown.waitFor({ state: 'visible' });
    await this.userDropdown.click();
  }

  async logout() {
    await this.openUserMenu();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }
}

module.exports = HeaderPage;