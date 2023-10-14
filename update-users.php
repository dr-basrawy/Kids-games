<?php
//echo ("AAAAAAAAAAAAAAAAAAAAAAAAAA");
// Read the JSON data from the users.json file
$json = file_get_contents('users.json');
$data = json_decode($json, true);
 // Add the new user data to the array
$new_user = array(
    'username' => $_POST['username'],
    'password' => $_POST['password'],
    'name' => $_POST['name'],
    'age' => $_POST['age']
);
$data['users'][] = $new_user;
 // Write the updated JSON data back to the users.json file
$json = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('users.json', $json);
 // Send a response back to the client
$response = array('status' => 'success');
echo json_encode($response);

// header("Location: success.html");
// exit();
?>