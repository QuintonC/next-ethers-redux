export const PREFFEREDNETWORK: 'homestead' | 'rinkeby' = 'homestead';

export class ContractData {
  private static MAIN_NET_ADDRESS = '';

  private static TEST_NET_ADDRESS = '';

  private static MAIN_NET_ADDRESS_ABI = [];

  private static TEST_NET_ADDRESS_ABI = [];

  public static readonly ADDRESS =
    PREFFEREDNETWORK === 'rinkeby'
      ? ContractData.TEST_NET_ADDRESS
      : ContractData.MAIN_NET_ADDRESS;

  public static readonly ADDRESS_ABI =
    PREFFEREDNETWORK === 'rinkeby'
      ? ContractData.TEST_NET_ADDRESS_ABI
      : ContractData.MAIN_NET_ADDRESS_ABI;
}
