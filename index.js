let form = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let errPara = document.getElementById("requestUrlErrMsg");
let requestBody = document.getElementById("requestBody");
let httpReqBody = "";
let requestMethod = document.getElementById("requestMethod");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

function setStatus(abc) {
    responseStatus.value = abc.code;
}

function setResponse(abc) {
    responseBody.value = JSON.stringify(abc);
}

requestUrl.addEventListener("change", function() {
    if (requestUrl.value === "") {
        errPara.textContent = "Required*";
    } else {
        errPara.textContent = "";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    httpReqBody = requestBody.value;
    let options = {
        method: "",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer f0db73eb37c3f48b66e3dc4962e8724ea052ee6f1385ed888056baf98437f73a"
        },
        body: httpReqBody
    };
    if (requestMethod.value === "POST") {
        options.method = "POST";
        fetch(requestUrl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                setStatus(jsonData);
                setResponse(jsonData);
            });
    } else if (requestMethod.value === "PUT") {
        options.method = "PUT";
        fetch(requestUrl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                setStatus(jsonData);
                setResponse(jsonData);
            });
    }


});
