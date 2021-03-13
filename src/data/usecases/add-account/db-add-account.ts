import { AddAccount, AddAccountModel, AccountModel, Hasher, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {

  constructor(
    private hasher: Hasher,
    private addAccountRepository: AddAccountRepository
  ) { }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashed_password = await this.hasher
      .hash(accountData.password)
    const account = await this.addAccountRepository
      .add(Object.assign({}, accountData, { password: hashed_password }))

    return account
  }
}
