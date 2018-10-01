function QueryParser({ query_url: url, output: _returns }) {
    let query = url.split("?")[1], //result - query string without page address "id=someName&userMail=some@mail.com&usText=MemoText"
        params = query.split("&"), //the result is an array of strings from the pairs "id = someName", "userMail=some@mail.com", "usText=MemoText"

        
        result = [],
        result_params = [];

    params.forEach(function (value) {
        let tmp = value.split("=")[1],
            tmp_param = value.split("=")[0];

        if (_returns == "query") {
            result.push(tmp);

            //Checking whether there is in the address #
            if (tmp.includes("#")) {
                result.pop(result.length - 1);
                result.push(tmp.replace('#', ""));
            }
        }

        if (_returns == "params") {
            result_params.push(tmp_param);

            //Checking whether there is in the address #
            if (tmp_param.includes("#")) {
                result_params.pop(result_params.length - 1);
                result_params.push(tmp_param.replace('#', ""));
            }
        }

    });

    if (_returns == "query")
        return result;
    else if (_returns == "params")
        return result_params;
}