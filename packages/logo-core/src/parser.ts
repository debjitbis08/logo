import * as ohm from "ohm-js";
import grammarDef from "./parser/logo.ohm?raw";

const grammar = ohm.grammar(grammarDef);

export type ExpressionNode =
  | { type: "number"; value: number }
  | {
      type: "add" | "sub" | "mul" | "div";
      left: ExpressionNode;
      right: ExpressionNode;
    };

export interface AstNode {
  type: "forward" | "repeat";
  expr?: ExpressionNode;
  body?: AstNode[];
}

export function parse(input: string): AstNode[] {
  const match = grammar.match(input);
  if (match.failed()) throw new Error(match.message);

  const semantics = grammar.createSemantics().addOperation("ast", {
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
        body: block.ast(),
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
    },
  });

  return semantics(match).ast();
}
