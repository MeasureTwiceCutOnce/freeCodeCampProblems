//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
  }

  console.log(
telephoneCheck("555-555-5555"),
telephoneCheck("8oo-six427676;laskdjf"),
telephoneCheck("(555) 555-5555"),
telephoneCheck("+91 (123) 456-7890"),
telephoneCheck("123.456.7890"),
telephoneCheck("1234567890"),
telephoneCheck("800-692-7753"),
  )