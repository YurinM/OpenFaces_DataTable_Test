/**
 * Created by Пеня on 01.04.2016.
 */
var startTimeL;

function saveStartTimeL() {
    var d = new Date();
    startTimeL = d.getTime();
}
function updateProfilerInfoL() {
    var performEntries = window.performance.getEntries();
    renderInfo(performEntries);
    setTimeout(updateProfilerInfo, 1000);
}
function loadFinishL() {
    var d = new Date();
    var endTime = d.getTime() - startTimeL;
    document.getElementById("tableLoadTime").innerText = endTime;
}
function updateFrameProfilerInfoL() {
    var performEntries = window.performance.getEntries();
    renderFrameInfo(performEntries);
    setTimeout(updateFrameProfilerInfo, 1000);
}
function renderInfoL(entries) {
  /*  document.getElementById("requestCounter").innerText = entries.length;
    document.getElementById("avgTimeRequest").innerText = Math.round(_getAvgRequest(entries));
    document.getElementById("avgTimeResponse").innerText = Math.round(_getAvgResponse(entries));*/
}

function renderFrameInfoL(entries) {
    document.getElementById("requestCounterFrapmeL").innerText = entries.length;
    document.getElementById("minTimeRequestFrapmeL").innerText = Math.round(_getMinRequestL(entries));
    document.getElementById("maxTimeRequestFrapmeL").innerText = Math.round(_getMaxRequestL(entries));
    document.getElementById("avgTimeRequestFrapmeL").innerText = Math.round(_getAvgRequestL(entries));
    document.getElementById("sumTimeRequestFrapmeL").innerText = Math.round(_getAvgRequestL(entries));
    document.getElementById("minTimeResponseFrapmeL").innerText = Math.round(_getMinResponseL(entries));
    document.getElementById("maxTimeResponseFrapmeL").innerText = Math.round(_getMaxResponseL(entries));
    document.getElementById("avgTimeResponseFrapmeL").innerText = Math.round(_getAvgResponseL(entries));
    document.getElementById("sumTimeResponseFrapmeL").innerText = Math.round(_getSumResponseL(entries));
}
function _getMaxRequestL(entries) {
    var max = 0;
    for (var i = 0; i < entries.length; i++) {
        if (max < (entries[i].responseStart - entries[i].requestStart )) max = (entries[i].responseStart - entries[i].requestStart );
    }
    return max
}

function _getMinRequestL(entries) {
    var min = (entries[4].responseStart - entries[4].requestStart );
    for (var i = 0; i < entries.length; i++) {
        if (min > (entries[i].responseStart - entries[i].requestStart )) min = (entries[i].responseStart - entries[i].requestStart );
    }
    return min
}

function _getAvgRequestL(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseStart - entries[i].requestStart );
    }
    return all / entries.length;
}


/////////////////////////////

function _getMaxResponseL(entries) {
    var max = 0;
    for (var i = 0; i < entries.length; i++) {
        if (max < (entries[i].responseEnd - entries[i].responseStart )) max = (entries[i].responseEnd - entries[i].responseStart );
    }
    return max
}

function _getMinResponseL(entries) {
    var min = (entries[0].responseEnd - entries[0].responseStart );
    for (var i = 0; i < entries.length; i++) {
        if (min > (entries[i].responseEnd - entries[i].responseStart)) min = (entries[i].responseEnd - entries[i].responseStart );
    }
    return min
}

function _getAvgResponseL(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseEnd - entries[i].responseStart );
    }
    return all / entries.length;
}

function _getSumResponseL(entries) {
    var all = 0;
    for (var i = 0; i < entries.length; i++) {
        all += (entries[i].responseEnd - entries[i].responseStart );
    }
    return all
}

