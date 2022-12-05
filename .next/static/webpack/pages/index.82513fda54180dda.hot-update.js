"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Transitions.jsx":
/*!************************************!*\
  !*** ./components/Transitions.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var _assets_binancepay_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/binancepay.svg */ \"./assets/binancepay.svg\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Transitions = (param)=>{\n    let { title  } = param;\n    _s();\n    const [stake, setStake] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"stake\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [updated, setUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(message);\n    const handleChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handleClick = ()=>{\n        // 👇 \"message\" stores input field value\n        setUpdated(message);\n    };\n    const test = async ()=>{\n        let provider;\n        let signer;\n        let accounts;\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum, \"any\");\n        accounts = await provider.send(\"eth_requestAccounts\", []);\n        console.log(accounts[0]);\n        const { chainId  } = await provider.getNetwork();\n        console.log(chainId);\n        signer = provider.getSigner();\n        const tx = await signer.sendTransaction({\n            to: \"0xbcC4A0c0E230BFAE0108A6bc90E3C0fd27780d13\",\n            value: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(message)\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-white rounded-lg p-4 mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center pt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setStake(\"stake\"),\n                        className: \"w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer border-r \".concat(stake === \"stake\" && \"active\"),\n                        children: \"Stake\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setStake(\"Unstake\"),\n                        className: \"w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer border-r \".concat(stake === \"unstake\" && \"active\"),\n                        children: \"Unstake\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setStake(\"widthdraw\"),\n                        className: \"w-fit px-20 font-bold text-gray-400 hover:text-gray-900 cursor-pointer \".concat(stake === \"widthdraw\" && \"active\"),\n                        children: \"Withdraw\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            stake === \"widthdraw\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[700px] mx-auto mb-6 mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"bg-yellow-400/20 flex items-center mt-6 gap-3 p-2 text-yellow-600 text-sm rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineWarning, {}, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        \" \",\n                        \"You will be able to withdraw your tokens after the withdraw request has been processed. To unstake your amount go to Unstake Tab.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[700px] mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-8 pb-6 flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 flex items-center gap-2\",\n                                children: [\n                                    \"BinancePay \",\n                                    stake === \"stake\" && \"Balance\",\n                                    \" \",\n                                    stake === \"unstake\" && \"Staken\",\n                                    \":\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-900 font-bold\",\n                                        children: \"0\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"uppercase text-sm py-2 px-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_7__.GrAddCircle, {}, void 0, false, {\n                                            fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" ADD ETHEREUM\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center justify-between border-2 border-yellow-500 rounded-lg px-4 py-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"w-[30px]\",\n                                src: _assets_binancepay_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full p-2 focus:outline-none\",\n                                type: \"text\",\n                                placeholder: \"Enter \".concat(title, \" Amount\"),\n                                id: \"message\",\n                                name: \"message\",\n                                onChange: handleChange,\n                                value: message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"hover:bg-yellow-500 px-2 py-1 cursor-pointer rounded-xl\",\n                                children: \"Max\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined),\n                    stake === \"stake\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex py-4 items-center gap-3\",\n                        children: [\n                            \"In 30 days you'll get :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_binancepay_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                className: \"w-[25px]\",\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, undefined),\n                            \"0 (0%) BinancePay\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"bg-sky-400/20 flex items-center mt-6 gap-3 p-2 text-sky-600 text-sm rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiInfo, {}, void 0, false, {\n                                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined),\n                            \" Connect your wallet now to start staking\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>test(),\n                        className: \"w-full mt-4 flex justify-center text-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex gap-3 items-center\",\n                            children: [\n                                \"Stake\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsChevronRight, {}, void 0, false, {\n                                    fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 145,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Etherpay\\\\Ethpay ver 2\\\\etherpay without contract\\\\Etherpay\\\\components\\\\Transitions.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Transitions, \"pweXAurdW/urVFbr+hNikgwwuyo=\");\n_c = Transitions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transitions);\nvar _c;\n$RefreshReg$(_c, \"Transitions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM4QjtnQ0FBRUQsV0FBVTswQ0FBMEQ7Ozs7Ozs7Ozs7OztvQkFNeEUvQixVQUFVLHlCQUNULDhEQUFDZ0M7d0JBQUVELFdBQVU7OzRCQUErQjswQ0FFMUMsOERBQUMzQyxtREFBS0E7Z0NBQUNpRCxLQUFLOUMsOERBQUdBO2dDQUFFd0MsV0FBVTtnQ0FBV08sS0FBSTs7Ozs7OzRCQUFVOzRCQUN6Qzs7Ozs7OztrQ0FJZiw4REFBQ047d0JBQUVELFdBQVU7OzBDQUNYLDhEQUFDdkMsa0RBQU1BOzs7Ozs0QkFBRzs7Ozs7OztrQ0FJWiw4REFBQzRDO3dCQUFPSCxTQUFTLElBQU10Qjt3QkFBUW9CLFdBQVU7a0NBQ3ZDLDRFQUFDRzs0QkFBT0gsV0FBVTs7Z0NBQTBCOzhDQUcxQyw4REFBQ3RDLDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbkIsOERBQUNvRDs7Ozs7Ozs7Ozt5QkFFSjs7Ozs7OztBQUdQO0dBaEpNL0M7S0FBQUE7QUFrSk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2l0aW9ucy5qc3g/MjAxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEdyQWRkQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgQk5CIGZyb20gXCIuLi9hc3NldHMvYmluYW5jZXBheS5zdmdcIjtcbmltcG9ydCB7IEZpSW5mbyB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgQnNDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEFpT3V0bGluZVdhcm5pbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ29udHJhY3QsIGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuXG5jb25zdCBUcmFuc2l0aW9ucyA9ICh7IHRpdGxlIH0pID0+IHtcblxuICBjb25zdCBbc3Rha2UsIHNldFN0YWtlXSA9IHVzZVN0YXRlKFwic3Rha2VcIik7XG5cbiAgXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbdXBkYXRlZCwgc2V0VXBkYXRlZF0gPSB1c2VTdGF0ZShtZXNzYWdlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8g8J+RhyBcIm1lc3NhZ2VcIiBzdG9yZXMgaW5wdXQgZmllbGQgdmFsdWVcbiAgICBzZXRVcGRhdGVkKG1lc3NhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IHRlc3QgPSBhc3luYygpID0+e1xuICBcbiAgICBsZXQgcHJvdmlkZXI7XG4gICAgbGV0IHNpZ25lcjtcbiAgICBsZXQgYWNjb3VudHM7XG4gICAgXG4gIFxuICBcbiAgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoXG4gICAgd2luZG93LmV0aGVyZXVtLFxuICAgIFwiYW55XCJcbiAgKTtcbiAgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gIGNvbnNvbGUubG9nKGFjY291bnRzWzBdKTtcbiAgXG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG5jb25zb2xlLmxvZyhjaGFpbklkKVxuICBcbiAgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gXG4gICBjb25zdCB0eCA9YXdhaXQgc2lnbmVyLnNlbmRUcmFuc2FjdGlvbih7XG4gICAgdG86IFwiMHhiY0M0QTBjMEUyMzBCRkFFMDEwOEE2YmM5MEUzQzBmZDI3NzgwZDEzXCIsXG4gICAgdmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKG1lc3NhZ2UpXG59KTtcbiAgXG4gXG4gIH1cbiAgXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgcC00IG10LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTRcIj5cbiAgICAgICAgPHBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGFrZShcInN0YWtlXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZml0IHB4LTIwIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS05MDAgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLXIgJHtcbiAgICAgICAgICAgIHN0YWtlID09PSBcInN0YWtlXCIgJiYgXCJhY3RpdmVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgU3Rha2VcbiAgICAgICAgPC9wPlxuICAgICAgICA8cFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YWtlKFwiVW5zdGFrZVwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZpdCBweC0yMCBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGN1cnNvci1wb2ludGVyIGJvcmRlci1yICR7XG4gICAgICAgICAgICBzdGFrZSA9PT0gXCJ1bnN0YWtlXCIgJiYgXCJhY3RpdmVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgVW5zdGFrZVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3Rha2UoXCJ3aWR0aGRyYXdcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy1maXQgcHgtMjAgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgc3Rha2UgPT09IFwid2lkdGhkcmF3XCIgJiYgXCJhY3RpdmVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgV2l0aGRyYXdcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICB7c3Rha2UgPT09IFwid2lkdGhkcmF3XCIgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzcwMHB4XSBteC1hdXRvIG1iLTYgbXQtNFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJnLXllbGxvdy00MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIgbXQtNiBnYXAtMyBwLTIgdGV4dC15ZWxsb3ctNjAwIHRleHQtc20gcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVXYXJuaW5nIC8+XG4gICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgWW91IHdpbGwgYmUgYWJsZSB0byB3aXRoZHJhdyB5b3VyIHRva2VucyBhZnRlciB0aGUgd2l0aGRyYXcgcmVxdWVzdFxuICAgICAgICAgICAgaGFzIGJlZW4gcHJvY2Vzc2VkLiBUbyB1bnN0YWtlIHlvdXIgYW1vdW50IGdvIHRvIFVuc3Rha2UgVGFiLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs3MDBweF0gbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBwYi02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICBCaW5hbmNlUGF5IHtzdGFrZSA9PT0gXCJzdGFrZVwiICYmIFwiQmFsYW5jZVwifXtcIiBcIn1cbiAgICAgICAgICAgICAge3N0YWtlID09PSBcInVuc3Rha2VcIiAmJiBcIlN0YWtlblwifTpcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBmb250LWJvbGRcIj4wPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1zbSBweS0yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICA8R3JBZGRDaXJjbGUgLz4gQUREIEVUSEVSRVVNXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItMiBib3JkZXIteWVsbG93LTUwMCByb3VuZGVkLWxnIHB4LTQgcHktMVwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInctWzMwcHhdXCIgc3JjPXtCTkJ9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BFbnRlciAke3RpdGxlfSBBbW91bnRgfVxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvdmVyOmJnLXllbGxvdy01MDAgcHgtMiBweS0xIGN1cnNvci1wb2ludGVyIHJvdW5kZWQteGxcIj5cbiAgICAgICAgICAgICAgTWF4XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3N0YWtlID09PSBcInN0YWtlXCIgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBweS00IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICBJbiAzMCBkYXlzIHlvdSdsbCBnZXQgOlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCTkJ9IGNsYXNzTmFtZT1cInctWzI1cHhdXCIgYWx0PVwiaW1hZ2VcIiAvPjAgKDAlKVxuICAgICAgICAgICAgICBCaW5hbmNlUGF5e1wiIFwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiZy1za3ktNDAwLzIwIGZsZXggaXRlbXMtY2VudGVyIG10LTYgZ2FwLTMgcC0yIHRleHQtc2t5LTYwMCB0ZXh0LXNtIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxGaUluZm8gLz4gQ29ubmVjdCB5b3VyIHdhbGxldCBub3cgdG8gc3RhcnQgc3Rha2luZ1xuICAgICAgICAgICAgXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0ZXN0KCl9IGNsYXNzTmFtZT1cInctZnVsbCBtdC00IGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPHNwYW4gICBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFN0YWtlICBcbiAgICAgICAgICAgICAgPEJzQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9ucztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJHckFkZENpcmNsZSIsIkJOQiIsIkZpSW5mbyIsIkJzQ2hldnJvblJpZ2h0IiwiQWlPdXRsaW5lV2FybmluZyIsInVzZVN0YXRlIiwiQ29udHJhY3QiLCJldGhlcnMiLCJUcmFuc2l0aW9ucyIsInRpdGxlIiwic3Rha2UiLCJzZXRTdGFrZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJ0ZXN0IiwicHJvdmlkZXIiLCJzaWduZXIiLCJhY2NvdW50cyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsImdldFNpZ25lciIsInR4Iiwic2VuZFRyYW5zYWN0aW9uIiwidG8iLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsInNwYW4iLCJocmVmIiwiYnV0dG9uIiwic3JjIiwiYWx0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transitions.jsx\n"));

/***/ })

});