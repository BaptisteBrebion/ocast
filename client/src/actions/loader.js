export const CHARGE_LOADER = "CHARGE_LOADER";
export const CHARGE_LOADER_MAILBOX = "CHARGE_LOADER_MAILBOX";
export const CHARGE_LOADER_CONVERSATION = "CHARGE_LOADER_CONVERSATION";

export const chargeLoader = () => ({
  type: CHARGE_LOADER,
});

export const chargeLoaderMailbox = () => ({
  type: CHARGE_LOADER_MAILBOX,
});

export const chargeLoaderConversation = () => ({
  type: CHARGE_LOADER_CONVERSATION,
});
