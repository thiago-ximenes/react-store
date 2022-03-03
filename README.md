# Instruções para trabalhar no projeto

## Git-flow

1. A branch master será a branch de produção.
2. A branch develop é a branch de desenvolvimento.

### Modelo de para trabalhar em uma nova feature

  - git checkout develop && git checkout -b [seu-nome]-[nome-da-feature]

##  API de consumo

Nossa página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
- Para buscar detalhes de um item especifico:
  - Tipo de requisição: `GET`
  - Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID


Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

### Exemplo de requisição para listar categorias

```
"https://api.mercadolibre.com/sites/MLB/categories"
```

O retorno desse endpoint será algo no formato:

```json
[
    {
        "id": "MLB5672",
        "name": "Acessórios para Veículos"
    },
    ...
]
```

### Exemplo de requisição de busca

```
"https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
```

O retorno desse endpoint será algo como o exemplo que temos [neste arquivo](exemplo-motorola.json).