<?php

$json_disks = file_get_contents('../data/disk-store.json');
$disks = json_decode($json_disks);
header('Content-Type: application/json');
echo json_encode($disks);

?>