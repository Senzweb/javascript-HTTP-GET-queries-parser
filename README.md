Парсинг параметров с адресов URL (например, example.com/index.html?param=query)

### Использование



```
var queries = QueryParser({
     query_url: "https://example.com/index.html?param=query", //Адрес целевой страницы или текущей страницы (window.location.href)
     output: "query" //параметр определяет возвращаемое значение query: вернет значение параметра, params: имя параметра 
});


### Возвращаемые значения

