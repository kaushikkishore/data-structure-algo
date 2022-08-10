function validIPAddresses(string) {
  const validIps = [];

  let r1 = Math.min(string.length, 4);
  for (let i = 1; i < r1; i++) {
    const ipAddressParts = ["", "", "", ""];
    ipAddressParts[0] = string.substring(0, i);
    if (!isValidPart(ipAddressParts[0])) {
      continue;
    }

    let r2 = i + Math.min(string.length - i, 4);
    for (let j = i + 1; j < r2; j++) {
      ipAddressParts[1] = string.substring(i, j);

      if (!isValidPart(ipAddressParts[1])) {
        continue;
      }

      let r3 = j + Math.min(string.length - j, 4);
      for (let k = j + 1; k < r3; k++) {
        ipAddressParts[2] = string.substring(j, k);
        ipAddressParts[3] = string.substring(k);

        if (isValidPart(ipAddressParts[2]) && isValidPart(ipAddressParts[3])) {
          validIps.push(ipAddressParts.join("."));
        }
      }
    }
  }

  return validIps;
}

function isValidPart(string) {
  if (+string > 255) return false;

  return string.length === (+string + "").length;
}

console.log(JSON.stringify(validIPAddresses("1921680")));
console.log(JSON.stringify(validIPAddresses("1934")));
console.log(JSON.stringify(validIPAddresses("193")));
console.log(JSON.stringify(validIPAddresses("99999999")));
console.log(JSON.stringify(validIPAddresses("33133313")));
console.log(JSON.stringify(validIPAddresses("00010")));
console.log(JSON.stringify(validIPAddresses("100100")));
console.log(JSON.stringify(validIPAddresses("1072310")));
