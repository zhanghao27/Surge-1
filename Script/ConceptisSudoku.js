var obj = "<key>Free</key>\r\n\t\t\t\t<true />\r\n\t\t\t\t<key>Info</key>";

body = $response.body
  .replace(/(<key>Free<\/key>\r\n\t\t\t\t<true \/>\r\n\t\t\t\t)/g, "")
  .replace(/<key>Info<\/key>/g, obj);

$done({ body });