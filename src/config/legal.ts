export const legalConfig = {
  privacyPolicyUrl: '',
  cookiePolicyUrl: '',
  iubendaSiteId: '',
  iubendaCookiePolicyId: '',
};

export const hasIubendaCookieBanner =
  Boolean(legalConfig.iubendaSiteId && legalConfig.iubendaCookiePolicyId);
