/**
 * Created by Пеня on 01.04.2016.
 */
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
  /*  document.getElementById("requestCounter").innerText = entries.length;
    document.getElementById("avgTimeRequest").innerText = Math.round(_getAvgRequest(entries));
    document.getElementById("avgTimeResponse").innerText = Math.round(_getAvgResponse(entries));*/
}

function renderFrameInfo(entries) {
    document.getElementById("requestCounterFrapme").innerText = entries.length;
    document.getElementById("minTimeRequestFrapme").innerText = Math.round(_getMinRequest(entries));
    document.getElementById("maxTimeRequestFrapme").innerText = Math.round(_getMaxRequest(entries));
    document.getElementById("avgTimeRequestFrapme").innerText = Math.round(_getAvgRequest(entries));
    document.getElementById("sumTimeRequestFrapme").innerText = Math.round(_getAvgRequest(entries));
    document.getElementById("minTimeResponseFrapme").innerText = Math.round(_getMinResponse(entries));
    document.getElementById("maxTimeResponseFrapme").innerText = Math.round(_getMaxResponse(entries));
    document.getElementById("avgTimeResponseFrapme").innerText = Math.round(_getAvgResponse(entries));
    document.getElementById("sumTimeResponseFrapme").innerText = Math.round(_getSumResponse(entries));
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

