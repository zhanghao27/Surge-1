var wb = "Free</key><true /><key>Info</key>";

body = $response.body.replace(/Info<\/key>/g, wb );

$done({body});