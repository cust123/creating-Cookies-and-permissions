setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires =" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
};

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cookieArr = cDecoded.split(";");
  let value;
  cookieArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });
  return value;
};

document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 15);
});

document.querySelector("#deccookies-btn").addEventListener("click", () => {
  setCookie("cookieConsent", "declined", -1); // Setting the cookie to be declined
  document.querySelector("#cookies").style.display = "none"; // Hide the cookie consent message
});

cookieMessage = () => {
  if (!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
};
window.addEventListener("load", cookieMessage);
