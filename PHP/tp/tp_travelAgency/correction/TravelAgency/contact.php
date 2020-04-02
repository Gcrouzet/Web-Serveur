<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Deman de contact</h1>

   Demande de contact prise en compte pour <?php echo $_POST["name"]; ?><br>
   Vous serez contacté à l'adresse communiquée: <?php echo $_POST["email"]; ?><br><br>

   <a href="./index.php?iscontact=o">page d'accueil</a>
   
</body>
</html>