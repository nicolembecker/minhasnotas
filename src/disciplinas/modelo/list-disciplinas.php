<?php

    // Instancio minha conexão de banco de dados

    include('../../conexao/conn.php')

    //Criar uma query de consulta ao banco de dados

    $sql = "SELECT * FROM disciplinas";

    //Agora iremos executar nossa query SQL

    $resultado = mysqli_query($conecta, $sql);

    //Iremos testar nossa consulta ao banco de dados, para ver se ela não esta retornando vazia

    if($resultado && mysqli_num_rows($resultado)>0){
        //Associar os registros encontrados em um array
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = array_map('utf8_encode', $linha);
        }
    }
        else{
            $dados = array('erro' => 'Não foi possivel buscar resultados');
        }

    echo json_encode($dados);