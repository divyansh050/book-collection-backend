// import { clientIpValidator } from "valid-ip-scope";

const LOCALHOST_IPS: readonly string[] = [
  "::1",
  "::ffff:127.0.0.1",
  "127.0.0.1",
];

type IpValidationResult = {
  isValid: boolean;
  reason?: string;
};

export const validateIp = (ip: string | undefined): IpValidationResult => {
  // if (!ip) return { isValid: false, reason: "IP is empty" };

  // commenting this code for now

  // if (LOCALHOST_IPS.includes(ip)) {
  //   return { isValid: false, reason: "Localhost IP not allowed" };
  // }

  /// comment out the usage of clientIpValidator as the package is not getting installed maybe some issue from their end last update 1 month ago

  return {
    isValid: true, // clientIpValidator(ip),
    reason: true /* clientIpValidator(ip) */ ? undefined : "Invalid IP format",
  };
};
