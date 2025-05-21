// src/parser/logo.ohm-bundle.js
import { makeRecipe } from "ohm-js";
var result = makeRecipe(["grammar", { "source": 'Logo {\n  Program    = (Statement __)*\n\n  Statement  = Forward | Repeat | Right\n\n  Forward    = (caseInsensitive<"FORWARD"> | caseInsensitive<"FD">) Exp\n\n  Repeat     = caseInsensitive<"REPEAT"> Exp instructionlist\n\n  Right      = caseInsensitive<"RIGHT"> Exp\n  Left       = caseInsensitive<"LEFT"> Exp\n  \n  instructionlist\n  	  = "[" applySyntactic<Program> "]"\n\n    Exp\n      = AddExp\n\n    AddExp\n      = AddExp "+" MulExp  -- plus\n      | AddExp "-" MulExp  -- minus\n      | MulExp\n\n    MulExp\n      = MulExp "*" ExpExp  -- times\n      | MulExp "/" ExpExp  -- divide\n      | ExpExp\n\n    ExpExp\n      = PriExp "^" ExpExp  -- power\n      | PriExp\n\n    PriExp\n      = "(" Exp ")"  -- paren\n      | "+" PriExp   -- pos\n      | "-" PriExp   -- neg\n      | number       -- number\n\n  number     = digit+\n  __         = space*\n}' }, "Logo", null, "Program", { "Program": ["define", { "sourceInterval": [9, 37] }, null, [], ["star", { "sourceInterval": [22, 37] }, ["seq", { "sourceInterval": [23, 35] }, ["app", { "sourceInterval": [23, 32] }, "Statement", []], ["app", { "sourceInterval": [33, 35] }, "__", []]]]], "Statement": ["define", { "sourceInterval": [41, 78] }, null, [], ["alt", { "sourceInterval": [54, 78] }, ["app", { "sourceInterval": [54, 61] }, "Forward", []], ["app", { "sourceInterval": [64, 70] }, "Repeat", []], ["app", { "sourceInterval": [73, 78] }, "Right", []]]], "Forward": ["define", { "sourceInterval": [82, 151] }, null, [], ["seq", { "sourceInterval": [95, 151] }, ["alt", { "sourceInterval": [96, 146] }, ["app", { "sourceInterval": [96, 122] }, "caseInsensitive", [["terminal", { "sourceInterval": [112, 121] }, "FORWARD"]]], ["app", { "sourceInterval": [125, 146] }, "caseInsensitive", [["terminal", { "sourceInterval": [141, 145] }, "FD"]]]], ["app", { "sourceInterval": [148, 151] }, "Exp", []]]], "Repeat": ["define", { "sourceInterval": [155, 213] }, null, [], ["seq", { "sourceInterval": [168, 213] }, ["app", { "sourceInterval": [168, 193] }, "caseInsensitive", [["terminal", { "sourceInterval": [184, 192] }, "REPEAT"]]], ["app", { "sourceInterval": [194, 197] }, "Exp", []], ["app", { "sourceInterval": [198, 213] }, "instructionlist", []]]], "Right": ["define", { "sourceInterval": [217, 258] }, null, [], ["seq", { "sourceInterval": [230, 258] }, ["app", { "sourceInterval": [230, 254] }, "caseInsensitive", [["terminal", { "sourceInterval": [246, 253] }, "RIGHT"]]], ["app", { "sourceInterval": [255, 258] }, "Exp", []]]], "Left": ["define", { "sourceInterval": [261, 301] }, null, [], ["seq", { "sourceInterval": [274, 301] }, ["app", { "sourceInterval": [274, 297] }, "caseInsensitive", [["terminal", { "sourceInterval": [290, 296] }, "LEFT"]]], ["app", { "sourceInterval": [298, 301] }, "Exp", []]]], "instructionlist": ["define", { "sourceInterval": [307, 361] }, null, [], ["seq", { "sourceInterval": [330, 361] }, ["terminal", { "sourceInterval": [330, 333] }, "["], ["app", { "sourceInterval": [334, 357] }, "applySyntactic", [["app", { "sourceInterval": [349, 356] }, "Program", []]]], ["terminal", { "sourceInterval": [358, 361] }, "]"]]], "Exp": ["define", { "sourceInterval": [367, 385] }, null, [], ["app", { "sourceInterval": [379, 385] }, "AddExp", []]], "AddExp_plus": ["define", { "sourceInterval": [406, 432] }, null, [], ["seq", { "sourceInterval": [406, 423] }, ["app", { "sourceInterval": [406, 412] }, "AddExp", []], ["terminal", { "sourceInterval": [413, 416] }, "+"], ["app", { "sourceInterval": [417, 423] }, "MulExp", []]]], "AddExp_minus": ["define", { "sourceInterval": [441, 468] }, null, [], ["seq", { "sourceInterval": [441, 458] }, ["app", { "sourceInterval": [441, 447] }, "AddExp", []], ["terminal", { "sourceInterval": [448, 451] }, "-"], ["app", { "sourceInterval": [452, 458] }, "MulExp", []]]], "AddExp": ["define", { "sourceInterval": [391, 483] }, null, [], ["alt", { "sourceInterval": [406, 483] }, ["app", { "sourceInterval": [406, 423] }, "AddExp_plus", []], ["app", { "sourceInterval": [441, 458] }, "AddExp_minus", []], ["app", { "sourceInterval": [477, 483] }, "MulExp", []]]], "MulExp_times": ["define", { "sourceInterval": [504, 531] }, null, [], ["seq", { "sourceInterval": [504, 521] }, ["app", { "sourceInterval": [504, 510] }, "MulExp", []], ["terminal", { "sourceInterval": [511, 514] }, "*"], ["app", { "sourceInterval": [515, 521] }, "ExpExp", []]]], "MulExp_divide": ["define", { "sourceInterval": [540, 568] }, null, [], ["seq", { "sourceInterval": [540, 557] }, ["app", { "sourceInterval": [540, 546] }, "MulExp", []], ["terminal", { "sourceInterval": [547, 550] }, "/"], ["app", { "sourceInterval": [551, 557] }, "ExpExp", []]]], "MulExp": ["define", { "sourceInterval": [489, 583] }, null, [], ["alt", { "sourceInterval": [504, 583] }, ["app", { "sourceInterval": [504, 521] }, "MulExp_times", []], ["app", { "sourceInterval": [540, 557] }, "MulExp_divide", []], ["app", { "sourceInterval": [577, 583] }, "ExpExp", []]]], "ExpExp_power": ["define", { "sourceInterval": [604, 631] }, null, [], ["seq", { "sourceInterval": [604, 621] }, ["app", { "sourceInterval": [604, 610] }, "PriExp", []], ["terminal", { "sourceInterval": [611, 614] }, "^"], ["app", { "sourceInterval": [615, 621] }, "ExpExp", []]]], "ExpExp": ["define", { "sourceInterval": [589, 646] }, null, [], ["alt", { "sourceInterval": [604, 646] }, ["app", { "sourceInterval": [604, 621] }, "ExpExp_power", []], ["app", { "sourceInterval": [640, 646] }, "PriExp", []]]], "PriExp_paren": ["define", { "sourceInterval": [667, 688] }, null, [], ["seq", { "sourceInterval": [667, 678] }, ["terminal", { "sourceInterval": [667, 670] }, "("], ["app", { "sourceInterval": [671, 674] }, "Exp", []], ["terminal", { "sourceInterval": [675, 678] }, ")"]]], "PriExp_pos": ["define", { "sourceInterval": [697, 716] }, null, [], ["seq", { "sourceInterval": [697, 707] }, ["terminal", { "sourceInterval": [697, 700] }, "+"], ["app", { "sourceInterval": [701, 707] }, "PriExp", []]]], "PriExp_neg": ["define", { "sourceInterval": [725, 744] }, null, [], ["seq", { "sourceInterval": [725, 735] }, ["terminal", { "sourceInterval": [725, 728] }, "-"], ["app", { "sourceInterval": [729, 735] }, "PriExp", []]]], "PriExp_number": ["define", { "sourceInterval": [753, 775] }, null, [], ["app", { "sourceInterval": [753, 759] }, "number", []]], "PriExp": ["define", { "sourceInterval": [652, 775] }, null, [], ["alt", { "sourceInterval": [667, 775] }, ["app", { "sourceInterval": [667, 678] }, "PriExp_paren", []], ["app", { "sourceInterval": [697, 707] }, "PriExp_pos", []], ["app", { "sourceInterval": [725, 735] }, "PriExp_neg", []], ["app", { "sourceInterval": [753, 759] }, "PriExp_number", []]]], "number": ["define", { "sourceInterval": [779, 798] }, null, [], ["plus", { "sourceInterval": [792, 798] }, ["app", { "sourceInterval": [792, 797] }, "digit", []]]], "__": ["define", { "sourceInterval": [801, 820] }, null, [], ["star", { "sourceInterval": [814, 820] }, ["app", { "sourceInterval": [814, 819] }, "space", []]]] }]);
var logo_ohm_bundle_default = result;

// src/parser.ts
var semantics = logo_ohm_bundle_default.createSemantics();
semantics.addOperation("eval()", {
  Program(statements, spaces) {
    return statements.children.map((c) => c.eval());
  },
  Forward(_fw, expr) {
    return { type: "forward", expr: expr.eval() };
  },
  Repeat(_rep, expr, block) {
    return {
      type: "repeat",
      expr: expr.eval(),
      body: block.eval()
    };
  },
  Right(_fw, expr) {
    return { type: "turn", expr: expr.eval() };
  },
  Left(_fw, expr) {
    return { type: "turn", expr: -1 * expr.eval() };
  },
  instructionlist(_l, ss, _r) {
    return ss.eval();
  },
  AddExp_plus(left, _op, right) {
    return { type: "add", left: left.eval(), right: right.eval() };
  },
  AddExp_minus(left, _op, right) {
    return { type: "sub", left: left.eval(), right: right.eval() };
  },
  MulExp_times(left, _op, right) {
    return { type: "mul", left: left.eval(), right: right.eval() };
  },
  MulExp_divide(left, _op, right) {
    return { type: "div", left: left.eval(), right: right.eval() };
  },
  PriExp_number(num) {
    return { type: "number", value: Number(num.sourceString) };
  },
  PriExp_paren(_l, expr, _r) {
    return expr.eval();
  },
  number(_digits) {
    return this.sourceString;
  }
});
function parse(input) {
  const match = logo_ohm_bundle_default.match(input);
  if (match.failed()) throw new Error(match.message);
  return semantics(match).eval();
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
      case "turn":
        if (node.expr) executor.turn(evaluateExpr(node.expr));
        break;
    }
  }
}
export {
  evaluate
};
