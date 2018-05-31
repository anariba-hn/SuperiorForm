<?php
include ("./connex.php"); //include db connection. import $cnn variable.
$name     = $_POST['user_name'];
$email    = $_POST['user_email'];
$phone    = $_POST['user_phone'];
$response = array();

if(isset($name, $email, $phone))
{
    $query = "SELECT * FROM tbl_users WHERE user_email = '$email'";
	if (!$result = mysqli_query($cnn, $query))
        exit(mysqli_error($conn));
    if(mysqli_num_rows($result) > 0)
    {
    	while($row = mysqli_fetch_assoc($result))
    	{
    		$response = $row;
    	}

        $response['status'] = 400;
        $response['message'] = "Email Exist";
    }
    else{
        
        $query2 = "INSERT INTO tbl_users(user_name, user_email, user_phone) VALUES('$name','$email','$phone')";
        if (!$result = mysqli_query($cnn, $query2))
        exit(mysqli_error($conn));
        else{
            $response['status'] = 200;
            $response['message'] = "Success";
        }

    }
    
}else{
    $response['status'] = 404;
    $response['message'] = "undefined variables";
}

header('Content-type: application/json; charset=utf8');
echo json_encode($response);

?>