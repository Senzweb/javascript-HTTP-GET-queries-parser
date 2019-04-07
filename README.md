Парсинг параметров с адресов URL (например, example.com/index.html?param=query)

### Использование



```js

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc", 
     output: "query"
});

```

### Параметры 

- query_url: Адрес целевой страницы или текущей страницы (window.location.href);
- output: параметр определяет возвращаемое значение:

### Возвращаемые значения

Функция возвращает массив из строк, в зависимости от параметра ```output:``` в параметрах функции ```QueryParser();```

**Возможные значения:**
- query: При этом функция возвращает значение параметра;
- param: Имя параметра
- pair: Массив объектов (ex: ``` [{id: 'test'}, {per_page: 100}]```)

### Пример


```js

// 
//Один параметр
//

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc",
     output: "query" 
});

//returns: ["abc"];

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc",
     output: "param"  
});

//returns: ["order"];

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc",
     output: "pair"  
});

//returns: [{order: "abc"}];

// 
//Несколько параметров
//
var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc&per_page=100",
     output: "query"
});

//returns: ["abc","100"];

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc&per_page=100",
     output: "param" //параметр определяет возвращаемое значение. 
});

//returns: ["order", "per_page"];

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc&per_page=100",
     output: "pair" //параметр определяет возвращаемое значение. 
});

//returns: [{order: 'abc'},{per_page: 100}];

```
