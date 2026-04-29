# Modelagem de dados

## Rede de arenas - arenaNetwork Schema

| chave        | valor                        | tipo                               |
| ------------ | ---------------------------- | ---------------------------------- |
| id           | "arenanetwork1"              | chave primária                     |
| nome         | "wild ball"                  | string                             |
| nome oficial | "wild ball ltda."            | string                             |
| endereco     | ["addressid1", "addressid2"] | arenanetwork 1 -> 1 ou n endereços |

| chave        | valor             | tipo                               |
| ------------ | ----------------- | ---------------------------------- |
| id           | "arenanetwork2"   | chave primária                     |
| nome         | "play ball"       | string                             |
| nome oficial | "play ball ltda." | string                             |
| endereco     | ["addressid3"]    | arenanetwork 1 -> 1 ou n endereços |

uma arenaNetwork pode ter um ou vários endereços

## Arena - arena Schema

| chave               | valor      | tipo           |
| ------------------- | ---------- | -------------- |
| id                  | "arenaid1" | chave primária |
| nome                | "arena b1" | string         |
| precoPorHora        | 110.00     | float          |
| capacidadeJogadores | 12         | int            |
| arenaEmDestaque     | true       | boolean        |

| chave               | valor      | tipo           |
| ------------------- | ---------- | -------------- |
| id                  | "arenaid2" | chave primária |
| nome                | "arena b2" | string         |
| precoPorHora        | 150.00     | float          |
| capacidadeJogadores | 14         | int            |
| arenaEmDestaque     | false      | boolean        |

| chave               | valor          | tipo           |
| ------------------- | -------------- | -------------- |
| id                  | "arenaid3"     | chave primária |
| nome                | "arena master" | string         |
| precoPorHora        | 220.00         | float          |
| capacidadeJogadores | 14             | int            |
| arenaEmDestaque     | true           | boolean        |

| chave               | valor          | tipo           |
| ------------------- | -------------- | -------------- |
| id                  | "arenaid4"     | chave primária |
| nome                | "arena tacacá" | string         |
| precoPorHora        | 100.00         | float          |
| capacidadeJogadores | 10             | int            |
| arenaEmDestaque     | false          | boolean        |

Uma arena só pode estar associado a apenas um endereço

## Endereço - address Schema

| chave        | valor                    | tipo                          |
| ------------ | ------------------------ | ----------------------------- |
| id           | "addressid1"             | chave primária                |
| rua          | "rua da liberdade"       | string                        |
| numero       | "22"                     | string                        |
| bairro       | "mooca"                  | string                        |
| cidade       | "são paulo"              | string                        |
| estado       | "sp"                     | string                        |
| pais         | "brasil"                 | string                        |
| arenas       | ["arenaid1", "arenaid2"] | endereco 1 -> 1 ou n arenas   |
| arenaNetwork | "arenanetwork1"          | endereco 1 -> 1 arena network |

| chave        | valor             | tipo                          |
| ------------ | ----------------- | ----------------------------- |
| id           | "addressid2"      | chave primária                |
| rua          | "travessa olimpo" | string                        |
| numero       | "234"             | string                        |
| bairro       | "bela vista"      | string                        |
| cidade       | "são paulo"       | string                        |
| estado       | "sp"              | string                        |
| pais         | "brasil"          | string                        |
| arenas       | ["arenaid3"]      | endereco 1 -> 1 ou n arenas   |
| arenaNetwork | "arenanetwork1"   | endereco 1 -> 1 arena network |

| chave        | valor           | tipo                          |
| ------------ | --------------- | ----------------------------- |
| id           | "addressid3"    | chave primária                |
| rua          | "rua mogolia"   | string                        |
| numero       | "7"             | string                        |
| bairro       | "icoaraci"      | string                        |
| cidade       | "belém"         | string                        |
| estado       | "pa"            | string                        |
| pais         | "brasil"        | string                        |
| arenas       | ["arenaid4"]    | endereco 1 -> 1 ou n arenas   |
| arenaNetwork | "arenanetwork2" | endereco 1 -> 1 arena network |

| chave        | valor           | tipo                          |
| ------------ | --------------- | ----------------------------- |
| id           | "addressid5"    | chave primária                |
| rua          | "rua riskallah" | string                        |
| numero       | "21"            | string                        |
| bairro       | "república"     | string                        |
| cidade       | "são paulo"     | string                        |
| estado       | "sp"            | string                        |
| pais         | "brasil"        | string                        |
| arenas       | null            | endereco 1 -> 1 ou n arenas   |
| arenaNetwork | null            | endereco 1 -> 1 arena network |

um endereço pode ter uma ou várias arenas
Um endereço só pode estar associado a apenas uma arenaNetwork

## Eventos - events Schema

| chave             | valor                              | tipo                        |
| ----------------- | ---------------------------------- | --------------------------- |
| id                | "eventid1"                         | chave primária              |
| nome              | "copa united sp"                   | chave primária              |
| valorInscricao    | 600.00                             | float                       |
| quantidadeEquipes | ["teamid1", "", ""]                | event 1 -> 1 ou n teams     |
| quantidadeVagas   | 16                                 | int                         |
| dataInicio        | 11/01/2027                         | DateTime                    |
| dataFim           | 11/03/2027                         | DateTime                    |
| tipo              | "eventtypeid1"                     | event 1 -> 1 eventtype      |
| rodada            | "tournmenteventid2"                | event 1 -> 1 tournmentevent |
| local             | ["addressid1", "addressid2"]       | event 1 -> 1 ou n address   |
| arenas            | ["arenaid1", arenaid2", arenaid3"] | event 1 -> 1 ou n arena     |

| chave             | valor                | tipo                        |
| ----------------- | -------------------- | --------------------------- |
| id                | "eventid2"           | chave primária              |
| nome              | "copa redbull belém" | chave primária              |
| valorInscricao    | 00.00                | float                       |
| quantidadeEquipes | ["", ""]             | int                         |
| quantidadeVagas   | 8                    | int                         |
| dataInicio        | 11/01/2027           | DateTime                    |
| dataFim           | 11/03/2027           | DateTime                    |
| tipo              | "eventtypeid2"       | event 1 -> 1 eventtype      |
| rodada            | "tournmenteventid1"  | event 1 -> 1 tournmentevent |
| local             | ["addressid3"]       | event 1 -> 1 ou n address   |
| arenas            | ["arenaid4"]         | event 1 -> 1 ou n arena     |

## Tipo de evento - eventType Schema

| chave | valor          | tipo           |
| ----- | -------------- | -------------- |
| id    | "eventtypeid1" | chave primária |
| name  | "copa"         | string         |

| chave | valor          | tipo           |
| ----- | -------------- | -------------- |
| id    | "eventtypeid2" | chave primária |
| name  | "liga"         | string         |

| chave | valor          | tipo           |
| ----- | -------------- | -------------- |
| id    | "eventtypeid3" | chave primária |
| name  | "campeonato"   | string         |

## Rodada do evento - tournmentEvent Schema

| chave | valor               | tipo           |
| ----- | ------------------- | -------------- |
| id    | "tournmenteventid1" | chave primária |
| name  | "semanal"           | string         |

| chave | valor               | tipo           |
| ----- | ------------------- | -------------- |
| id    | "tournmenteventid2" | chave primária |
| name  | "dia único"         | string         |

## Equipe - team Schema

| chave     | valor                      | tipo                     |
| --------- | -------------------------- | ------------------------ |
| id        | "teamid1"                  | chave primária           |
| name      | "inter del valle"          | string                   |
| tipo      | "categoryteamid1"          | team 1 -> 1 categoryTeam |
| jogadores | ["playerid1", "playerid2"] | team 1 -> 1 ou n players |
| address   | "addressid5"               | team 1 -> 1 address      |
| phone     | "11934930805"              | string                   |

## categoria do time - categoryTeam Schema

| chave | valor             | tipo           |
| ----- | ----------------- | -------------- |
| id    | "categoryteamid1" | chave primária |
| name  | "amador"          | string         |

| chave | valor             | tipo           |
| ----- | ----------------- | -------------- |
| id    | "categoryteamid2" | chave primária |
| name  | "verificado"      | string         |

| chave | valor             | tipo           |
| ----- | ----------------- | -------------- |
| id    | "categoryteamid3" | chave primária |
| name  | "competitivo"     | string         |

## usuário - user Schema

| chave    | valor                              | tipo             |
| -------- | ---------------------------------- | ---------------- |
| id       | "playerid1"                        | chave primária   |
| name     | "lucas santos"                     | string           |
| email    | "lucas@email.com"                  | string           |
| image    | "/images/backgrounds/banner-1.png" | string           |
| eJogador | ["teamid1"]                        | 1 user -> 1 team |
| posicao  | ["position1"]                      | 1 user -> 1 team |

| chave    | valor                              | tipo             |
| -------- | ---------------------------------- | ---------------- |
| id       | "playerid2"                        | chave primária   |
| name     | "luis fabiano"                     | string           |
| email    | "fabiano@email.com"                | string           |
| image    | "/images/backgrounds/banner-2.png" | string           |
| eJogador | ["teamid1"]                        | 1 user -> 1 team |
| posicao  | ["position1"]                      | 1 user -> 1 team |

## Posições de jogadores - positions Schema

| chave  | valor         | tipo           |
| ------ | ------------- | -------------- |
| id     | "positionid1" | chave primária |
| name   | "atacante"    | string         |
| symbol | "atk"         | string         |

| chave  | valor         | tipo           |
| ------ | ------------- | -------------- |
| id     | "positionid2" | chave primária |
| name   | "defensor"    | string         |
| symbol | "def"         | string         |
