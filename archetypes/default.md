<!-- fichier de template utilisable pour créer de nouvelles pages, à partir du terminal
ici, métadonnées utilisées lors de la génération des pages. -->

+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++
