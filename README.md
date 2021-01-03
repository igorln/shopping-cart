# Welcome to the Shopping Cart project repository!

This is the project to conclude the block 9, JavaScript Asynchronous and Promises, from the [Trybe](https://www.betrybe.com) course.

---

## Deliverable

To deliver your project you must create a Pull Request in this repository. This Pull Request must contain the files `index.html`, `style.css` and `script.js`, which will contain your HTML, CSS and JavaScript code, respectively. You can add other files if you think it is necessary. ⚠️ It is important that your files have exactly these names! ⚠️

## Project requirements

The following are all the project requirements. Read them carefully and follow exactly what is requested. In particular, **pay attention to the id names that some elements of your project must have**. Failure to comply with a requirement, in whole or in part, will impact your assessment.

Your project requirements are automatically evaluated, using the resolution `1366 x 768` (1366 pixels wide by 768 pixels high). Therefore, it is recommended to develop your project using the same resolution, via installation [of this plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) of `Chrome` to facilitate setting that resolution.

You are free to add new behaviors to your project, whether in the form of improvements to proposed requirements or new features, **as long as such additional behaviors do not conflict with the proposed requirements**. In other words, you can do more than you ask, but never less. However, keep in mind that **nothing more than what is requested in the requirements will be evaluated**. This is an opportunity for you to exercise your creativity and experiment with the acquired knowledge.

In this project you will make a **shopping cart** totally dynamic! And the best: consuming data directly from an **API!** That's right. From the acronym _Application Programming Interface_, an API is a point of contact on the internet with a particular service. Through **HTTP requests** to this API it is possible to interact with it in the way that its creator planned it. Here we will use the Free Market API to search for products for sale.

Your project should behave similarly to the gif below when finished, **don't worry about replicating the look, the gif just illustrates the behavior**:

![Project Gif](./docs/out.gif)

The [Mercado Livre API manual](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contains a lot of information about it. We will use some of the _endpoints_, and the form of use is detailed in the first requirement. This project aims to:

- Review your knowledge about JavaScript, CSS and HTML;
- Check your knowledge about asynchronous JavaScript using the free market API.

Your project will only be evaluated if it is going through the _checks_ of **CodeClimate**.

### 1. Product listing

You must create a list of products to be consulted through the Mercado Livre API.

You must use _endpoint_:
```javascript
"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
```
where `$QUERY` should be the value of your search. For this work, the search must be the term `computer`.

The return of this _endpoint_ will be something in the json format. For example, if "computer" is searched:
```json
{
    "site_id": "MLB",
    "query": "computador",
    "paging": {
        "total": 406861,
        "offset": 0,
        "limit": 50,
        "primary_results": 1001
    },
    "results": [
        {
            "id": "MLB1341925291",
            "site_id": "MLB",
            "title": "Processador Intel Core I5-9400f 6 Núcleos 128 Gb",
            "seller": {
                "id": 385471334,
                "permalink": null,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 899,
            "currency_id": "BRL",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2039-10-10T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolivre.com.br/processador-intel-core-i5-9400f-6-nucleos-128-gb/p/MLB13953199",
            "thumbnail": "http://mlb-s2-p.mlstatic.com/813265-MLA32241773956_092019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 74.92,
                "rate": 0,
                "currency_id": "BRL"
            },
            "address": {
                "state_id": "BR-SP",
                "state_name": "São Paulo",
                "city_id": "BR-SP-27",
                "city_name": "São José dos Campos"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "fulfillment",
                    "mandatory_free_shipping"
                ],
                "logistic_type": "fulfillment",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "BR",
                    "name": "Brasil"
                },
                "state": {
                    "id": "BR-SP",
                    "name": "São Paulo"
                },
                "city": {
                    "id": "BR-SP-27",
                    "name": "São José dos Campos"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "ALPHANUMERIC_MODEL",
                    "value_id": "6382478",
                    "value_struct": null,
                    "values": [
                        {
                            "name": "BX80684I59400F",
                            "struct": null,
                            "source": 1,
                            "id": "6382478"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "name": "Modelo alfanumérico",
                    "value_name": "BX80684I59400F",
                    "attribute_group_name": "Outros"
                },
                {
                    "id": "BRAND",
                    "value_struct": null,
                    "attribute_group_name": "Outros",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "name": "Marca",
                    "value_id": "15617",
                    "value_name": "Intel",
                    "values": [
                        {
                            "id": "15617",
                            "name": "Intel",
                            "struct": null,
                            "source": 1
                        }
                    ]
                },
                {
                    "name": "Condição do item",
                    "value_id": "2230284",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "source": 1,
                    "id": "ITEM_CONDITION",
                    "value_name": "Novo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Novo",
                            "struct": null,
                            "source": 1
                        }
                    ]
                },
                {
                    "id": "LINE",
                    "value_name": "Core i5",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "name": "Linha",
                    "value_id": "7769178",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "7769178",
                            "name": "Core i5",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "source": 1
                },
                {
                    "id": "MODEL",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6637008",
                            "name": "i5-9400F",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "name": "Modelo",
                    "value_id": "6637008",
                    "value_name": "i5-9400F",
                    "attribute_group_name": "Outros",
                    "source": 1
                }
            ],
            "differential_pricing": {
                "id": 33580182
            },
            "original_price": null,
            "category_id": "MLB1693",
            "official_store_id": null,
            "catalog_product_id": "MLB13953199",
            "tags": [
                "brand_verified",
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
    ]
}
```

The list of products that should be displayed is _array_ `results` in `JSON` above.

You **must** use the `createProductItemElement (product)` function to create the _HTML_ components for a product.

Add the element returned from the `createProductItemElement (product)` function as a child of the `<section class =" items ">` element.

**Note:** the variables `sku`, in the code provided, refer to the `id` fields returned by the API.

### 2. Add the product to the shopping cart

Each product on the _HTML_ page has a button with the name `Add to cart!`.

When clicking on this button you must make a request to _endpoint_:
```javascript
"https://api.mercadolibre.com/items/$ItemID"
```
where `$ItemID` should be the `id` value of the selected item.

When put the id `MLB1341706310` return of this _endpoint_ will be something like:
```JSON
{
    "id": "MLB1341706310",
    "site_id": "MLB",
    "title": "Processador Amd Ryzen 5 2600 6 Núcleos 64 Gb",
    "subtitle": null,
    "seller_id": 245718870,
    "category_id": "MLB1693",
    "official_store_id": 1929,
    "price": 879,
    "base_price": 879,
    "original_price": null,
    "currency_id": "BRL",
    "initial_quantity": 0,
    "available_quantity": 0,
    "sold_quantity": 0,
    ...
    "warranty": "Garantia de fábrica: 3 anos",
    "catalog_product_id": "MLB9196241",
    "domain_id": "MLB-COMPUTER_PROCESSORS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [],
    "automatic_relist": false,
    "date_created": "2019-10-15T18:13:00.000Z",
    "last_updated": "2019-12-20T18:06:54.000Z",
    "health": null,
    "catalog_listing": true
}
```

Pay attention that JSON should contain only **one** item.

You **must** use the `createCartItemElement ()` function to create the _HTML_ components for a cart item.

Add the element returned from the `createCartItemElement (product)` function as a child of the `<ol class =" cart__items ">` element.

### 3. Remove the item from the shopping cart by clicking on it

When you click on the **product in the shopping cart**, it should be removed from the list.
For this, a function (already existing) called `cartItemClickListener (event)` must be implemented with the necessary logic to perform the removal.

### 4. Load the shopping cart through **LocalStorage** when starting the page

When loading the page, the current state of the shopping cart must be loaded from **LocalStorage**.
For this to work, the shopping cart must be saved to **LocalStorage**, that is, all **additions** and **removals** must be addressed in order for the current list to be saved.

### 5. Add the total value of the shopping cart items asynchronously

Each time an item is added to the shopping cart, it will be necessary to add its values and present them on the main page of the project. We do not want this sum, however, to impact the page load. We must therefore make this sum asynchronously. Use `async / await` to do this. The element whose child is the total price of the items in the cart must have, **mandatorily**, the class `total-price`.

### 6. Button to clear shopping cart

Create a button to remove all items from the shopping cart. It must, **must**, have the `empty-cart` class.

### 7. Add a "loading" text during an API request

An API request takes time and during it, we don't know if everything is right or if something went wrong.
Usually some way is used to show that the request is in progress.
Show the word "loading ..." somewhere on the page **only during** the API request. The element shown during page loading must, **must**, have the class `loading`.
