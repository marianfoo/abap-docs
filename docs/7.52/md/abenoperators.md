---
title: "Operators"
description: |
  ABAP contains the following operators: -   Operators that perform special operations in operand positions: -   Declaration operators(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declarations.htm) The declaration operators DATA and FIELD-SYMBOL declare variables or field sy
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperators.htm"
abapFile: "abenoperators.htm"
keywords: ["do", "if", "case", "try", "data", "types", "field-symbol", "abenoperators"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_statements.htm) →  [Operators and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperators_expressions.htm) → 

Operators

ABAP contains the following operators:

-   Operators that perform special operations in operand positions:

-   [Declaration operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declarations.htm)
    The declaration operators DATA and FIELD-SYMBOL declare variables or field symbols in operand positions.

-   [Constructor operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm)
    The constructor operators NEW, VALUE, CONV, CORRESPONDING, CAST, REF, EXACT, REDUCE, FILTER, COND, and SWITCH construct values for data objects of specific data types in constructor expressions.

-   Operators that join multiple operands in a single expression:

-   [Assignment operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm)
    The assignment operator \= joins the source field and target field of an assignment. In the case of assignments, the special [casting operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_operator_glosry.htm "Glossary Entry") ?= performs a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"). The operator \= also joins actual parameters with formal parameters, for example in procedure calls or when working with [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry").

-   [Arithmetic operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm)
    The arithmetic operators +, \-, \*, /, DIV, MOD, and \*\* join two or more numeric operands with an arithmetic expression. In addition, the characters + and \- act as signs in arithmetic expressions.

-   [Bit operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm)
    The bit operators BIT-AND, BIT-OR, and BIT-XOR join two or more byte-like operands with a bit expression. The bit operator BIT-NOT negates a byte-like operand.

-   [String operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm)
    The string operator && chains two character-like operands to a string expression.

-   [Relational operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm)
    Relational operators occur in relational expressions, which themselves are components of logical expressions. The [relational operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_operator_glosry.htm "Glossary Entry") \=, <>, <, \>, <=,\>=, BETWEEN, and so on join two or more operands of any data type as a comparison expression. There are additional relational operators for specific data types. The [predicate operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_operator_glosry.htm "Glossary Entry") IS qualifies an operand.

-   [Boolean operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_boole.htm)
    The Boolean operators AND, OR, and EQUIV join the results of individual logical expressions with a logical expression. The result of a logical expression is either true or false. The Boolean operator NOT negates the result of a logical expression.

-   Operator that joins two operands in compilations:

-   [Literal operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenliteral_operator.htm)
    The literal operator & joins two literals or two string templates with a literal or a string template.