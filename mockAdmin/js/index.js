function mettiMock()
{
    var parameters = checkParametersValidity();
    if ( typeof parameters === 'string')
    {
        document.getElementById("errorLabel").classList.remove("hidden");
        document.getElementById("errorLabel").innerHTML = "Parametro " + parameters.toString() + " obbligatorio!"
    } 
    else 
    {
        (!document.getElementById("errorLabel").classList.contains("hidden")) ? document.getElementById("errorLabel").classList.add("hidden") : document.getElementById("errorLabel").innerHTML="";
        doMettiMock(parameters);
    }
}

function togliMock()
{
    var parameters = checkParametersValidity();
    if ( typeof parameters === 'string')
    {
        document.getElementById("errorLabel").classList.remove("hidden");
        document.getElementById("errorLabel").innerHTML = "Parametro " + parameters.toString() + " obbligatorio!"
    } 
    else 
    {
        (!document.getElementById("errorLabel").classList.contains("hidden")) ? document.getElementById("errorLabel").classList.add("hidden") : document.getElementById("errorLabel").innerHTML="";
        doTogliMock(parameters);
    }
}

function checkMock()
{
    var parameters = checkParametersValidity();
    if ( typeof parameters === 'string')
    {
        document.getElementById("errorLabel").classList.remove("hidden");
        document.getElementById("errorLabel").innerHTML = "Parametro " + parameters.toString() + " obbligatorio!"
    } 
    else 
    {
        (!document.getElementById("errorLabel").classList.contains("hidden")) ? document.getElementById("errorLabel").classList.add("hidden") : document.getElementById("errorLabel").innerHTML="";
        doCheckMock(parameters);
    }
}


function selectChannel()
{   
    switch (document.getElementById("channel-input").value)
        {
            case "BANVIR":
                optionStr = "<option disabled selected>jvm</option><option>all</option><option>BanvirACVIC</option><option>BanvirAltriCanali</option><option>BanvirIB</option><option>BanvirIB2</option><option>BanvirS_F</option>"
                document.getElementById("jvm-input").innerHTML = optionStr;
                optionStr = "<option disabled selected>machine</option><option>all</option><option>vr0cldibkas01c</option><option>vr0cldibkas02c</option><option>vr0cldibkas03c</option><option>vr0cldibkas04c</option>"
                document.getElementById("machine-input").innerHTML = optionStr;
                break;
            case "CORVIR":
                optionStr = "<option disabled selected>jvm</option><option>all</option><option>CorvirMultiChannel</option><option>CorvirS_F</option>"
                document.getElementById("jvm-input").innerHTML = optionStr;
                optionStr = "<option disabled selected>machine</option><option>all</option><option>vr0cldmazas01c</option><option>vr0cldmazas02c</option><option>vr0cldmazas03c</option>"
                document.getElementById("machine-input").innerHTML = optionStr;
                break;
            case "MOBILE":
                    optionStr = "<option disabled selected>jvm</option><option>all</option><option>MobileMultiChannel</option><option>MobileS_F</option><option>MobileSitoce</option>"
                    document.getElementById("jvm-input").innerHTML = optionStr;
                    optionStr = "<option disabled selected>machine</option><option>all</option><option>vr0cldmblas01c</option><option>vr0cldmblas02c</option><option>vr0cldmblas03c</option>"
                    document.getElementById("machine-input").innerHTML = optionStr;
                    break;
        }
}

function checkParametersValidity()
{
    parametersInput = ["username", "pwd", "channel", "jvm", "machine"];
    parameters = new Array();
    for ( element in parametersInput )
    {
        if (document.getElementById(parametersInput[element] + "-input").value && document.getElementById(parametersInput[element] + "-input").value != parametersInput[element] ) parameters.push(document.getElementById(parametersInput[element] + "-input").value);
        else return parametersInput[element];
    }
    return parameters;
}

function doMettiMock(parameters)
{
    jsonRequest='{"user":"'+ parameters[0].toLowerCase() +'","pwd":"' + parameters[1] + '","channel":"' + parameters[2] + '","jvm":"' + parameters[3] + '","machine":"' + parameters[4] + '"}'
    document.getElementById("background-loader").classList.remove("hidden");
    document.getElementById("img-loader").classList.remove("hidden");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById("background-loader").classList.add("hidden");
            document.getElementById("img-loader").classList.add("hidden");
            document.getElementById("consoleTextarea").value = document.getElementById("consoleTextarea").value + "[" + new Date().toUTCString() + "] \n" + this.responseText;
         }
    };
    xhttp.open("POST", "http://10.224.40.67:5000/mettiMock", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonRequest);
}

function doTogliMock(parameters)
{
    jsonRequest='{"user":"'+ parameters[0].toLowerCase() +'","pwd":"' + parameters[1] + '","channel":"' + parameters[2] + '","jvm":"' + parameters[3] + '","machine":"' + parameters[4] + '"}'
    document.getElementById("background-loader").classList.remove("hidden");
    document.getElementById("img-loader").classList.remove("hidden");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById("background-loader").classList.add("hidden");
            document.getElementById("img-loader").classList.add("hidden");
            document.getElementById("consoleTextarea").value = document.getElementById("consoleTextarea").value + "[" + new Date().toUTCString() + "] \n" + this.responseText;
         }
    };
    xhttp.open("POST", "http://10.224.40.67:5000/togliMock", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonRequest);
}

function doCheckMock(parameters)
{
    jsonRequest='{"user":"'+ parameters[0].toLowerCase() +'","pwd":"' + parameters[1] + '","channel":"' + parameters[2] + '","jvm":"' + parameters[3] + '","machine":"' + parameters[4] + '"}'
    document.getElementById("background-loader").classList.remove("hidden");
    document.getElementById("img-loader").classList.remove("hidden");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById("background-loader").classList.add("hidden");
            document.getElementById("img-loader").classList.add("hidden");
            document.getElementById("consoleTextarea").value = document.getElementById("consoleTextarea").value + "[" + new Date().toUTCString() + "] \n" + this.responseText;
         }
    };
    xhttp.open("POST", "http://10.224.40.67:5000/checkMock", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonRequest);
}

function clearConsole()
{
    document.getElementById("consoleTextarea").value = "";
}