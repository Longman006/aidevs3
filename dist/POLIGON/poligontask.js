// gitversion - 0.1.0+7.Branch.main.Sha.9d30c94cbbdced804ea709a459b236618db3910c
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/api/poligon.api.ts":
/*!***************************************!*\
  !*** ./src/common/api/poligon.api.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
class PoligonApi {
    static sendTaskAnswer(task, answer) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                answer: answer,
                apikey: this.apikey,
                task: task
            };
            const response = yield fetch(this.uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(body)
            });
            const responseBody = yield response.json();
            return responseBody;
        });
    }
}
exports["default"] = PoligonApi;
PoligonApi.apikey = "6e739d5d-219c-4212-b5ff-5b7c8b145f29";
PoligonApi.uri = "https://poligon.aidevs.pl/verify";


/***/ }),

/***/ "./src/common/const/task.const.ts":
/*!****************************************!*\
  !*** ./src/common/const/task.const.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emptyTaskResponse = exports.task1Name = void 0;
exports.task1Name = "POLIGON";
exports.emptyTaskResponse = {
    code: 0,
    message: "No result. "
};


/***/ }),

/***/ "./src/export/POLIGON/poligon.task.ts":
/*!********************************************!*\
  !*** ./src/export/POLIGON/poligon.task.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const poligon_api_1 = __importDefault(__webpack_require__(/*! common/api/poligon.api */ "./src/common/api/poligon.api.ts"));
const task_const_1 = __webpack_require__(/*! common/const/task.const */ "./src/common/const/task.const.ts");
class PoligonApiTask {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://poligon.aidevs.pl/dane.txt", {
                method: "GET"
            });
            const text = yield response.text();
            const arrayResult = text.split("\n").filter((c) => c !== "");
            const answerResponse = yield poligon_api_1.default.sendTaskAnswer(task_const_1.task1Name, arrayResult);
            console.log(arrayResult);
            console.log("code: {1}, message: {2}", answerResponse.code, answerResponse.message);
            return answerResponse;
        });
    }
}
exports["default"] = PoligonApiTask;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/export/POLIGON/poligon.task.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9QT0xJR09OL3BvbGlnb250YXNrLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxNQUFxQixVQUFVO0lBSXRCLE1BQU0sQ0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU07O1lBQzdDLE1BQU0sSUFBSSxHQUFvQjtnQkFDNUIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSTthQUNYLENBQUM7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsTUFBTSxFQUFFLGtCQUFrQjtpQkFDM0I7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUNILE1BQU0sWUFBWSxHQUF3QixNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRSxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0tBQUE7O0FBcEJILGdDQXFCQztBQXBCeUIsaUJBQU0sR0FBRyxzQ0FBc0MsQ0FBQztBQUNoRCxjQUFHLEdBQUcsa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDRnRELGlCQUFTLEdBQUcsU0FBUyxDQUFDO0FBRXRCLHlCQUFpQixHQUF3QjtJQUNwRCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxhQUFhO0NBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRiw0SEFBZ0Q7QUFDaEQsNEdBQW9EO0FBRXBELE1BQXFCLGNBQWM7SUFDcEIsT0FBTzs7WUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsb0NBQW9DLEVBQUU7Z0JBQ2pFLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUVyRSxNQUFNLGNBQWMsR0FBRyxNQUFNLHFCQUFVLENBQUMsY0FBYyxDQUFDLHNCQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sY0FBYyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtDQUNGO0FBZEQsb0NBY0M7Ozs7Ozs7VUNqQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2Uvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2UvLi9zcmMvY29tbW9uL2FwaS9wb2xpZ29uLmFwaS50cyIsIndlYnBhY2s6Ly9zaWkuY3JtLmV4YW1wbGVzLnVpLndlYnJlc291cmNlLy4vc3JjL2NvbW1vbi9jb25zdC90YXNrLmNvbnN0LnRzIiwid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2UvLi9zcmMvZXhwb3J0L1BPTElHT04vcG9saWdvbi50YXNrLnRzIiwid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2lpLmNybS5leGFtcGxlcy51aS53ZWJyZXNvdXJjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NpaS5jcm0uZXhhbXBsZXMudWkud2VicmVzb3VyY2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgVGFza1JlcXVlc3RCb2R5LCBUYXNrUmVxdWVzdFJlc3BvbnNlIH0gZnJvbSBcImNvbW1vbi9tb2RlbC9wb2xpZ29uLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xpZ29uQXBpIHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBhcGlrZXkgPSBcIjZlNzM5ZDVkLTIxOWMtNDIxMi1iNWZmLTViN2M4YjE0NWYyOVwiO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHVyaSA9IFwiaHR0cHM6Ly9wb2xpZ29uLmFpZGV2cy5wbC92ZXJpZnlcIjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBzZW5kVGFza0Fuc3dlcih0YXNrLCBhbnN3ZXIpIHtcclxuICAgIGNvbnN0IGJvZHk6IFRhc2tSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgIGFwaWtleTogdGhpcy5hcGlrZXksXHJcbiAgICAgIHRhc2s6IHRhc2tcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJpLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlQm9keTogVGFza1JlcXVlc3RSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNwb25zZUJvZHk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhc2tSZXF1ZXN0UmVzcG9uc2UgfSBmcm9tIFwiY29tbW9uL21vZGVsL3BvbGlnb24ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0YXNrMU5hbWUgPSBcIlBPTElHT05cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eVRhc2tSZXNwb25zZTogVGFza1JlcXVlc3RSZXNwb25zZSA9IHtcclxuICBjb2RlOiAwLFxyXG4gIG1lc3NhZ2U6IFwiTm8gcmVzdWx0LiBcIlxyXG59O1xyXG4iLCJpbXBvcnQgUG9saWdvbkFwaSBmcm9tIFwiY29tbW9uL2FwaS9wb2xpZ29uLmFwaVwiO1xyXG5pbXBvcnQgeyB0YXNrMU5hbWUgfSBmcm9tIFwiY29tbW9uL2NvbnN0L3Rhc2suY29uc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGlnb25BcGlUYXNrIHtcclxuICBwdWJsaWMgYXN5bmMgZXhlY3V0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BvbGlnb24uYWlkZXZzLnBsL2RhbmUudHh0XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICBjb25zdCBhcnJheVJlc3VsdCA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChjOiBzdHJpbmcpID0+IGMgIT09IFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGFuc3dlclJlc3BvbnNlID0gYXdhaXQgUG9saWdvbkFwaS5zZW5kVGFza0Fuc3dlcih0YXNrMU5hbWUsIGFycmF5UmVzdWx0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheVJlc3VsdCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvZGU6IHsxfSwgbWVzc2FnZTogezJ9XCIsIGFuc3dlclJlc3BvbnNlLmNvZGUsIGFuc3dlclJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGFuc3dlclJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZXhwb3J0L1BPTElHT04vcG9saWdvbi50YXNrLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9