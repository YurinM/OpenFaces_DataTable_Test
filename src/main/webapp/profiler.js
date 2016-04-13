var startTime;

function saveStartTime() {
    var d = new Date();
    startTime = d.getTime();
}
function updateProfilerInfo() {
    var performEntries = window.performance.getEntries();
    renderInfo(performEntries);
    setTimeout(updateProfilerInfo, 1000);
}
function loadFinish() {
    var d = new Date();
    var endTime = d.getTime() - startTime;
    document.getElementById("tableLoadTime").innerText = endTime;
}
function updateFrameProfilerInfo() {
    var performEntries = window.performance.getEntries();
    renderFrameInfo(performEntries);
    setTimeout(updateFrameProfilerInfo, 1000);
}
function renderInfo(entries) {
    document.getElementById("requestCounter").innerText = entries.length;
    document.getElementById("minTimeRequest").innerText = _getMinRequest(entries);
    document.getElementById("maxTimeRequest").innerText = _getMaxRequest(entries);
    document.getElementById("avgTimeRequest").innerText = _getAvgRequest(entries);
    document.getElementById("sumTimeRequest").innerText = _getAvgRequest(entries);
    document.getElementById("minTimeResponse").innerText = _getMinResponse(entries);
    document.getElementById("maxTimeResponse").innerText = _getMaxResponse(entries);
    document.getElementById("avgTimeResponse").innerText = _getAvgResponse(entries);
    document.getElementById("sumTimeResponse").innerText = _getSumResponse(entries);
}

function renderFrameInfo(entries) {
    document.getElementById("requestCounterFrapme").innerText = entries.length;
    document.getElementById("minTimeRequestFrapme").innerText = _getMinRequest(entries);
    document.getElementById("maxTimeRequestFrapme").innerText = _getMaxRequest(entries);
    document.getElementById("avgTimeRequestFrapme").innerText = _getAvgRequest(entries);
    document.getElementById("sumTimeRequestFrapme").innerText = _getAvgRequest(entries);
    document.getElementById("minTimeResponseFrapme").innerText = _getMinResponse(entries);
    document.getElementById("maxTimeResponseFrapme").innerText = _getMaxResponse(entries);
    document.getElementById("avgTimeResponseFrapme").innerText = _getAvgResponse(entries);
    document.getElementById("sumTimeResponseFrapme").innerText = _getSumResponse(entries);
}
function _getMaxRequest(entries) {
    var max = 0;
    for (var i = 0; i < entries.length; i++) {
        if (max < (entries[i].responseStart - entries[i].requestStart )) max = (entries[i].responseStart - entries[i].requestStart );
    }
    return max
}

function _getMinRequest(entries) {
    var min = (entries[4].responseStart - entries[4].requestStart );
    for (var i = 0; i < entries.length; i++) {
        if (min > (entries[i].responseStart - entries[i].requestStart )) min = (entries[i].responseStart - entries[i].requestStart );
    }
    return min
}

function _getAvgRequest(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseStart - entries[i].requestStart );
    }
    return all / entries.length;
}


/////////////////////////////

function _getMaxResponse(entries) {
    var max = 0;
    for (var i = 0; i < entries.length; i++) {
        if (max < (entries[i].responseEnd - entries[i].responseStart )) max = (entries[i].responseEnd - entries[i].responseStart );
    }
    return max
}

function _getMinResponse(entries) {
    var min = (entries[0].responseEnd - entries[0].responseStart );
    for (var i = 0; i < entries.length; i++) {
        if (min > (entries[i].responseEnd - entries[i].responseStart)) min = (entries[i].responseEnd - entries[i].responseStart );
    }
    return min
}

function _getAvgResponse(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseEnd - entries[i].responseStart );
    }
    return all / entries.length;
}

function _getSumResponse(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseEnd - entries[i].responseStart );
    }
    return all
}

