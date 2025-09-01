  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reading Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

General Expression Positions

General expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which suitable [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") can be specified. The following general expression positions exist:

-   Right side of an assignment with the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\))

-   Operands of [arithmetic expressions](javascript:call_link\('abapcompute_arith.htm'\)) and of [bit expressions](javascript:call_link\('abapcompute_bit.htm'\))

-   [Embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\))

-   Operands of [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry") in [logical expressions](javascript:call_link\('abenlogexp.htm'\))

-   Operand of the statement [CASE](javascript:call_link\('abapcase.htm'\))

-   [Actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for input parameters of methods in [meth( ... )](javascript:call_link\('abapcall_method_parameters.htm'\)), [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)), [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)), and [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\))

-   [Actual parameters](javascript:call_link\('abentyping_arith_expr.htm'\)) for input parameters of function modules in the case of [CALL FUNCTION](javascript:call_link\('abapcall_function_parameter.htm'\))

-   Arguments of [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) [numeric functions](javascript:call_link\('abenmathematical_functions.htm'\)) if they are themselves executed in an arithmetic expression

-   Reference variable oref of statement [RAISE EXCEPTION oref.](javascript:call_link\('abapraise_exception_class.htm'\))

-   The operands behind the addition WITH TABLE KEY of the statements [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) and [DELETE TABLE itab](javascript:call_link\('abapdelete_itab_line.htm'\))

-   The operands behind the addition [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement [READ TABLE itab](javascript:call_link\('abapread_table.htm'\))

-   Work area wa of the following statements:

-   [APPEND wa TO ...](javascript:call_link\('abapappend_linespec.htm'\))

-   [INSERT wa INTO ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   [MODIFY ... FROM wa ...](javascript:call_link\('abapmodify_itab_single.htm'\))

-   Expression exp for dynamic sorts in the case of the following:

-   [SORT itab BY exp](javascript:call_link\('abapsort_itab.htm'\))

-   Source fields of the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), with the restriction that [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") cannot be specified directly and can be specified only as [embedded expressions](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry")

The type restrictions defined by the [operand type](javascript:call_link\('abendata_objects_usage.htm'\)) apply in the operand positions. For example, no [numeric functions](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry") can be specified in a bit expression.

Notes

-   Specifying [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") as actual parameters of methods enables the nesting of method calls in an operand position.

-   The three types of [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") can be executed as operands of relational expressions, but they cannot be mixed in one calculation expression.

Example

Specifies a constructor expressions with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) on the right side of an assignment and specifies a constructor expression with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) as an input parameter for the method DISPLAY of the class CL\_DEMO\_OUTPUT.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR <wa> IN itab
                 NEXT s = s &&  <wa> && \` \` ) ).