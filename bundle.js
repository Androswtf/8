/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\nwindow.onload = () => {\r\n\r\nlet w = innerWidth,\r\n    h = innerHeight;\r\n\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, w/h, 0.1, 2000);\r\ncamera.position.set(0,0,0);\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\r\n    antialias: true,\r\n});\r\nrenderer.shadowMap.enabled = true;\r\nrenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__.PCFSoftShadowMap;\r\n\r\nrenderer.setSize(w,h);\r\n\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\nlet light = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff,1)\r\nlight.castShadow = true;\r\nlight.shadow.mapSize.width = 2048;\r\nlight.shadow.mapSize.height = 2048;\r\nlight.position.set(0,5,-3);\r\n\r\nscene.add(light);\r\n\r\nlight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, .5);\r\nlight.position.set(-2,-.5,-3);\r\nscene.add(light)\r\n\r\nlet geom = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1,1,1, 100, 1, 1);\r\nlet material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n    specular: 0x222222,\r\n});\r\nlet cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geom, material);\r\ncube.position.setZ(-4);\r\ncube.castShadow = true;\r\ncube.receiveShadow = true;\r\n\r\nscene.add(cube);\r\n\r\nlet text = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\r\n\r\ntext.load('/normal.jpg', function(text) {\r\n    cube.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n        ...cube.material,\r\n        normalMap: text,\r\n        normalScale: new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(2,2)\r\n    })\r\n});\r\n\r\ntext.load('/base.jpg', function(text) {\r\n    cube.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n        ...cube.material,\r\n        map: text,\r\n    });\r\n});\r\n\r\ntext.load('/ao.jpg', function(text) {\r\n    cube.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n        ...cube.material,\r\n        aoMap: text\r\n    });\r\n});\r\n\r\nlet planeGeom = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(4,4);\r\nlet planeMat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n    color: 0xffffff,\r\n    side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide\r\n});\r\nlet plane = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeom, planeMat);\r\n\r\nplane.rotateX(2);\r\nplane.position.set(0,-1, -4);\r\n\r\nplane.castShadow = false;\r\nplane.receiveShadow = true;\r\n\r\n\r\nscene.add(plane);\r\n\r\nrenderer.setClearColor(0x000000);\r\ncamera.position.set(0,1,-6);\r\n\r\n\r\n\r\nlet startPos = camera.position.x;\r\nlet time = 0;\r\n\r\nfunction loop() {\r\n    time++;\r\n    cube.rotateX(0.01);\r\n    cube.rotateY(0.01);\r\n\r\n    camera.position.setX(startPos + Math.sin(time/100));\r\n    camera.lookAt(0,0,-4);\r\n    renderer.clear();\r\n    renderer.render(scene, camera);\r\n\r\n    requestAnimationFrame(loop);\r\n}\r\n\r\nloop();\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://aaa/./index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;