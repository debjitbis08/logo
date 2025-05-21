import grammar, { LogoSemantics } from "./parser/logo.ohm-bundle";

const semantics: LogoSemantics = grammar.createSemantics();

export type ExpressionNode =
    | { type: "number"; value: number }
    | {
          type: "add" | "sub" | "mul" | "div";
          left: ExpressionNode;
          right: ExpressionNode;
      };

export interface AstNode {
    type: "forward" | "repeat" | "turn";
    expr?: ExpressionNode;
    body?: AstNode[];
}

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
            body: block.eval(),
        };
    },
    Right(_fw, expr) {
        return { type: "turn", expr: expr.eval() };
    },
    Left(_fw, expr) {
        const value = expr.eval();
        return { type: "turn", expr: { ...value, value: -1 * value.value } };
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
    },
});

export function parse(input: string): AstNode[] {
    const match = grammar.match(input);
    if (match.failed()) throw new Error(match.message);

    return semantics(match).eval();
}
