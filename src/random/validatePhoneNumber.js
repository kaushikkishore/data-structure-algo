const validatePhoneNumber = (phone) => {
  // 7,8,9 - Must start with
  // 9 // digits could be anything
  // the string should not contain any chars
  // if it is null/empty string then return false
  // if phone conatins chars then retun false

  if (!phone || phone.trim() === "") return false;

  // Regular expression to validate

  const phoneRegex = /[{7|8|9}][0-9]{9}/;

  const result = phoneRegex.test(phone) ? "YES" : "NO";

  console.log(`${phone} ==> ${result}`);
};

validatePhoneNumber("9587456281");

validatePhoneNumber("1252478965");
