<?php

$FileHandle = fopen('result.pdf', 'w+');

$curl = curl_init();

$instructions = '{
  "parts": [
    {
      "JSX": "index.jsx"
    }
  ]
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.pspdfkit.com/build',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_POSTFIELDS => array(
    'instructions' => $instructions,
    'index.html' => new CURLFILE('index.html')
  ),
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer pdf_live_U5krncSvOfwQP5C9Wcdw9yzV15jDeqshtbendSGKjiV'
  ),
  CURLOPT_FILE => $FileHandle,
));

$response = curl_exec($curl);

curl_close($curl);

fclose($FileHandle);

?>


<a href="result.pdf">click Here to Preview PDF</a>