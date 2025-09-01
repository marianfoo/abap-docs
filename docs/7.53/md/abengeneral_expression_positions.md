---
title: "General Expression Positions"
description: |
  General expression positions are reading positions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm 'Glossary Entry') in which suitable data objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm 'Glossary Entry'),
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expression_positions.htm"
abapFile: "abengeneral_expression_positions.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abengeneral", "expression", "positions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_positions_read.htm) → 

General Expression Positions

General expression positions are [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") in which suitable [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry"), [calculation expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), [built-in functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") can be specified. The following general expression positions exist:

-   Right side of an assignment with the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm)

-   Operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm) and of [bit expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_bit.htm)

-   [Embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm)

-   Operands of [comparison expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_expression_glosry.htm "Glossary Entry") in [logical expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm)

-   Operand of the statement [CASE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcase.htm)

-   [Actual parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_arith_expr.htm) for input parameters of methods in [meth( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm), [RAISE EVENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_event.htm), [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object.htm), and [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm)

-   [Actual parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_arith_expr.htm) for input parameters of function modules in the case of [CALL FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_parameter.htm)

-   Arguments of [predefined](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_functions.htm) [numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_functions.htm) if they are themselves executed in an arithmetic expression

-   Reference variable oref of statement [RAISE EXCEPTION oref.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm)

-   The operands behind the addition WITH TABLE KEY of the statements [READ TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) and [DELETE TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm)

-   The operands behind the addition [WITH KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_free.htm) of the statement [READ TABLE itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm)

-   Work area wa of the following statements:

-   [APPEND wa TO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend_linespec.htm)

-   [INSERT wa INTO ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_itab_linespec.htm)

-   [MODIFY ... FROM wa ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_single.htm)

-   Expression exp for dynamic sorts in the case of the following:

-   [SORT itab BY exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm)

-   Source fields of the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm), with the restriction that [arithmetic expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified directly and can be specified only as [embedded expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_template_glosry.htm "Glossary Entry")

The type restrictions defined by the [operand type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_usage.htm) apply in the operand positions. For example, no [numeric functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry") can be specified in a bit expression.

Notes

-   Specifying [functional methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry") as actual parameters of methods enables the nesting of method calls in an operand position.

-   The three types of [calculation expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalculation_expression_glosry.htm "Glossary Entry") can be executed as operands of relational expressions, but they cannot be mixed in one calculation expression.

Example

Specifies a constructor expressions with the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) on the right side of an assignment and specifies a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm) as an input parameter for the method DISPLAY of the class CL\_DEMO\_OUTPUT.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR <wa> IN itab
                 NEXT s = s &&  <wa> && \` \` ) ).