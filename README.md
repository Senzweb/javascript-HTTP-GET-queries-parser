Парсинг параметров с адресов URL (например, example.com/index.html?param=query)

### Использование



```js

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "query" //параметр определяет возвращаемое значение. 
});

```

### Возвращаемые значения

Функция возвращает массив из строк, в зависимости от параметра ```output:``` в параметрах функции ```QueryParser();```

**Возможные значения:**
- query: При этом функция возвращает значение параметра;
- param: имя параметра

### Пример


```js

// 
//Один параметр
//

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "query" //параметр определяет возвращаемое значение. 
});

//queries = ["abc"]

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "param" //параметр определяет возвращаемое значение. 
});

//queries = ["order"]

// 
//Несколько параметров
//
var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc&per_page=100", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "query" //параметр определяет возвращаемое значение. 
});

//queries = ["abc","100"]

var queries = QueryParser({
     query_url: "https://example.com/index.html?order=abc&per_page=100", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "param" //параметр определяет возвращаемое значение. 
});

//queries = ["order", "per_page"]

```
