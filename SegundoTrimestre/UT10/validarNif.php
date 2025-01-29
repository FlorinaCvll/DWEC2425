<?php
header('Content-Type: application/json');

$tipo = isset($_POST['tipo']) ? $_POST['tipo'] : 'dni';
$nif = isset($_POST['nif']) ? $_POST['nif'] : '11223344A';

if (is_valid_dni($nif)) {
    $codigo = "0";
    $mensaje = "El DNI es correcto";
} else {
    $codigo = "-1";
    $mensaje = "El DNI NO es correcto";
}

$objeto = [
    "error" => [
        "codigo" => $codigo,
        "mensaje" => $mensaje
    ]
];

echo json_encode($objeto);

function is_valid_dni($dni) {
    $letter = substr($dni, -1);
    $numbers = substr($dni, 0, -1);
    return substr("TRWAGMYFPDXBNJZSQVHLCKE", $numbers % 23, 1) == $letter && strlen($letter) == 1 && strlen($numbers) == 8;
}
?>