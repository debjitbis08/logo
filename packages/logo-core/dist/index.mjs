var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/parser/logo.ohm-bundle.js
var require_logo_ohm_bundle = __commonJS({
  "src/parser/logo.ohm-bundle.js"(exports, module) {
    "use strict";
    var { makeRecipe } = __require("ohm-js");
    var result = makeRecipe(["grammar", { "source": 'Logo {\n  Program    = (Statement __)*\n\n  Statement  = Forward | Repeat\n\n  Forward    = (caseInsensitive<"FORWARD"> | caseInsensitive<"FD">) Exp\n\n  Repeat     = caseInsensitive<"REPEAT"> Exp instructionlist\n  \n  instructionlist\n  	  = "[" applySyntactic<Program> "]"\n\n    Exp\n      = AddExp\n\n    AddExp\n      = AddExp "+" MulExp  -- plus\n      | AddExp "-" MulExp  -- minus\n      | MulExp\n\n    MulExp\n      = MulExp "*" ExpExp  -- times\n      | MulExp "/" ExpExp  -- divide\n      | ExpExp\n\n    ExpExp\n      = PriExp "^" ExpExp  -- power\n      | PriExp\n\n    PriExp\n      = "(" Exp ")"  -- paren\n      | "+" PriExp   -- pos\n      | "-" PriExp   -- neg\n      | number       -- number\n\n  number     = digit+\n  __         = space*\n}' }, "Logo", null, "Program", { "Program": ["define", { "sourceInterval": [9, 37] }, null, [], ["star", { "sourceInterval": [22, 37] }, ["seq", { "sourceInterval": [23, 35] }, ["app", { "sourceInterval": [23, 32] }, "Statement", []], ["app", { "sourceInterval": [33, 35] }, "__", []]]]], "Statement": ["define", { "sourceInterval": [41, 70] }, null, [], ["alt", { "sourceInterval": [54, 70] }, ["app", { "sourceInterval": [54, 61] }, "Forward", []], ["app", { "sourceInterval": [64, 70] }, "Repeat", []]]], "Forward": ["define", { "sourceInterval": [74, 143] }, null, [], ["seq", { "sourceInterval": [87, 143] }, ["alt", { "sourceInterval": [88, 138] }, ["app", { "sourceInterval": [88, 114] }, "caseInsensitive", [["terminal", { "sourceInterval": [104, 113] }, "FORWARD"]]], ["app", { "sourceInterval": [117, 138] }, "caseInsensitive", [["terminal", { "sourceInterval": [133, 137] }, "FD"]]]], ["app", { "sourceInterval": [140, 143] }, "Exp", []]]], "Repeat": ["define", { "sourceInterval": [147, 205] }, null, [], ["seq", { "sourceInterval": [160, 205] }, ["app", { "sourceInterval": [160, 185] }, "caseInsensitive", [["terminal", { "sourceInterval": [176, 184] }, "REPEAT"]]], ["app", { "sourceInterval": [186, 189] }, "Exp", []], ["app", { "sourceInterval": [190, 205] }, "instructionlist", []]]], "instructionlist": ["define", { "sourceInterval": [211, 265] }, null, [], ["seq", { "sourceInterval": [234, 265] }, ["terminal", { "sourceInterval": [234, 237] }, "["], ["app", { "sourceInterval": [238, 261] }, "applySyntactic", [["app", { "sourceInterval": [253, 260] }, "Program", []]]], ["terminal", { "sourceInterval": [262, 265] }, "]"]]], "Exp": ["define", { "sourceInterval": [271, 289] }, null, [], ["app", { "sourceInterval": [283, 289] }, "AddExp", []]], "AddExp_plus": ["define", { "sourceInterval": [310, 336] }, null, [], ["seq", { "sourceInterval": [310, 327] }, ["app", { "sourceInterval": [310, 316] }, "AddExp", []], ["terminal", { "sourceInterval": [317, 320] }, "+"], ["app", { "sourceInterval": [321, 327] }, "MulExp", []]]], "AddExp_minus": ["define", { "sourceInterval": [345, 372] }, null, [], ["seq", { "sourceInterval": [345, 362] }, ["app", { "sourceInterval": [345, 351] }, "AddExp", []], ["terminal", { "sourceInterval": [352, 355] }, "-"], ["app", { "sourceInterval": [356, 362] }, "MulExp", []]]], "AddExp": ["define", { "sourceInterval": [295, 387] }, null, [], ["alt", { "sourceInterval": [310, 387] }, ["app", { "sourceInterval": [310, 327] }, "AddExp_plus", []], ["app", { "sourceInterval": [345, 362] }, "AddExp_minus", []], ["app", { "sourceInterval": [381, 387] }, "MulExp", []]]], "MulExp_times": ["define", { "sourceInterval": [408, 435] }, null, [], ["seq", { "sourceInterval": [408, 425] }, ["app", { "sourceInterval": [408, 414] }, "MulExp", []], ["terminal", { "sourceInterval": [415, 418] }, "*"], ["app", { "sourceInterval": [419, 425] }, "ExpExp", []]]], "MulExp_divide": ["define", { "sourceInterval": [444, 472] }, null, [], ["seq", { "sourceInterval": [444, 461] }, ["app", { "sourceInterval": [444, 450] }, "MulExp", []], ["terminal", { "sourceInterval": [451, 454] }, "/"], ["app", { "sourceInterval": [455, 461] }, "ExpExp", []]]], "MulExp": ["define", { "sourceInterval": [393, 487] }, null, [], ["alt", { "sourceInterval": [408, 487] }, ["app", { "sourceInterval": [408, 425] }, "MulExp_times", []], ["app", { "sourceInterval": [444, 461] }, "MulExp_divide", []], ["app", { "sourceInterval": [481, 487] }, "ExpExp", []]]], "ExpExp_power": ["define", { "sourceInterval": [508, 535] }, null, [], ["seq", { "sourceInterval": [508, 525] }, ["app", { "sourceInterval": [508, 514] }, "PriExp", []], ["terminal", { "sourceInterval": [515, 518] }, "^"], ["app", { "sourceInterval": [519, 525] }, "ExpExp", []]]], "ExpExp": ["define", { "sourceInterval": [493, 550] }, null, [], ["alt", { "sourceInterval": [508, 550] }, ["app", { "sourceInterval": [508, 525] }, "ExpExp_power", []], ["app", { "sourceInterval": [544, 550] }, "PriExp", []]]], "PriExp_paren": ["define", { "sourceInterval": [571, 592] }, null, [], ["seq", { "sourceInterval": [571, 582] }, ["terminal", { "sourceInterval": [571, 574] }, "("], ["app", { "sourceInterval": [575, 578] }, "Exp", []], ["terminal", { "sourceInterval": [579, 582] }, ")"]]], "PriExp_pos": ["define", { "sourceInterval": [601, 620] }, null, [], ["seq", { "sourceInterval": [601, 611] }, ["terminal", { "sourceInterval": [601, 604] }, "+"], ["app", { "sourceInterval": [605, 611] }, "PriExp", []]]], "PriExp_neg": ["define", { "sourceInterval": [629, 648] }, null, [], ["seq", { "sourceInterval": [629, 639] }, ["terminal", { "sourceInterval": [629, 632] }, "-"], ["app", { "sourceInterval": [633, 639] }, "PriExp", []]]], "PriExp_number": ["define", { "sourceInterval": [657, 679] }, null, [], ["app", { "sourceInterval": [657, 663] }, "number", []]], "PriExp": ["define", { "sourceInterval": [556, 679] }, null, [], ["alt", { "sourceInterval": [571, 679] }, ["app", { "sourceInterval": [571, 582] }, "PriExp_paren", []], ["app", { "sourceInterval": [601, 611] }, "PriExp_pos", []], ["app", { "sourceInterval": [629, 639] }, "PriExp_neg", []], ["app", { "sourceInterval": [657, 663] }, "PriExp_number", []]]], "number": ["define", { "sourceInterval": [683, 702] }, null, [], ["plus", { "sourceInterval": [696, 702] }, ["app", { "sourceInterval": [696, 701] }, "digit", []]]], "__": ["define", { "sourceInterval": [705, 724] }, null, [], ["star", { "sourceInterval": [718, 724] }, ["app", { "sourceInterval": [718, 723] }, "space", []]]] }]);
    module.exports = result;
  }
});

// src/parser.ts
var import_logo = __toESM(require_logo_ohm_bundle());
var semantics = import_logo.default.createSemantics();
function parse(input) {
  const match = import_logo.default.match(input);
  if (match.failed()) throw new Error(match.message);
  semantics.addOperation("ast", {
    Program(statements, spaces) {
      return statements.children.map((c) => c.ast());
    },
    Forward(_fw, expr) {
      return { type: "forward", expr: expr.ast() };
    },
    Repeat(_rep, expr, block) {
      return {
        type: "repeat",
        expr: expr.ast(),
        body: block.ast()
      };
    },
    instructionlist(_l, ss, _r) {
      return ss.ast();
    },
    AddExp_plus(left, _op, right) {
      return { type: "add", left: left.ast(), right: right.ast() };
    },
    AddExp_minus(left, _op, right) {
      return { type: "sub", left: left.ast(), right: right.ast() };
    },
    MulExp_times(left, _op, right) {
      return { type: "mul", left: left.ast(), right: right.ast() };
    },
    MulExp_divide(left, _op, right) {
      return { type: "div", left: left.ast(), right: right.ast() };
    },
    PriExp_number(num) {
      return { type: "number", value: Number(num.sourceString) };
    },
    PriExp_paren(_l, expr, _r) {
      return expr.ast();
    },
    number(_digits) {
      return this.sourceString;
    }
  });
  return semantics(match).ast();
}

// src/evaluate.ts
function evaluateExpr(expr) {
  switch (expr.type) {
    case "number":
      return expr.value;
    case "add":
      return evaluateExpr(expr.left) + evaluateExpr(expr.right);
    case "sub":
      return evaluateExpr(expr.left) - evaluateExpr(expr.right);
    case "mul":
      return evaluateExpr(expr.left) * evaluateExpr(expr.right);
    case "div":
      return evaluateExpr(expr.left) / evaluateExpr(expr.right);
  }
}
function evaluate(input, executor) {
  const ast = parse(input);
  runAst(ast, executor);
}
function runAst(nodes, executor) {
  for (const node of nodes) {
    switch (node.type) {
      case "forward":
        if (node.expr) executor.move(evaluateExpr(node.expr));
        break;
      case "repeat":
        if (node.expr && node.body) {
          const count = evaluateExpr(node.expr);
          for (let i = 0; i < count; i++) {
            runAst(node.body, executor);
          }
        }
        break;
    }
  }
}
export {
  evaluate
};
