  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR, Iteration Expressions](javascript:call_link\('abenfor.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%2C%20Conditional%20Iteration%2C%20ABENFOR_CONDITIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR, Conditional Iteration

Syntax

... FOR var = rhs *\[*THEN expr*\]* UNTIL*|*WHILE [log\_exp](javascript:call_link\('abenlogexp.htm'\)) *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Effect

This syntax form of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") executes a conditional iteration.

-   If it is used in a constructor expression with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)), the reduction result is created in the iteration steps.
-   If it is used in a constructor expression with the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) or with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables, new table lines are created in the iteration steps and inserted into the tabular result.

The parameters and arguments of the iteration expression must be specified as follows:

-   First, a local helper variable var must be declared as an iteration variable and assigned a start value rhs with \=. The same applies to the namespace and visibility of var as to the helper fields declared in a [LET expression](javascript:call_link\('abaplet.htm'\)). The syntax of the declaration is exactly the same as in a [LET expression](javascript:call_link\('abaplet.htm'\)) and it follows the rules that apply here.
-   The next position depends on the data type of the iteration variable var:
    -   If the iteration variable var does not have a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") and is not of type d or t, an expression expr must be specified after THEN. The result of this expression can be converted into a data type of var. The expression is calculated for every iteration and its result is assigned to the iteration variable var. This is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
    -   If the iteration variable var has a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), or is of type d or t, THEN expr is optional. If THEN expr is not specified explicitly, THEN var + 1 is added implicitly or the value of the iteration variable is increased by 1 for every iteration.
-   Afterwards, a termination condition log\_exp must be specified after UNTIL or WHILE. log\_exp is any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") whose operands can be any data objects visible at this position and any calls possible here.
    -   If the termination condition is specified after UNTIL, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is true, the iteration is ended. At least one iteration step is executed.
    -   If the termination condition is specified after WHILE, the logical expression log\_exp is evaluated before every iteration step. If the result of the logical expression is false, the iteration is terminated. If the result of the logical expression is already false before the first iteration step, no iteration steps are executed.
-   An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified at the end to define local helper fields. The helper fields are filled in every iteration step and can be used to construct the result.

The variables declared in FOR expressions are local. The local data of all outer FOR expressions can be used when their values are set. The iteration variable and any helper variables can be used after the FOR expression, either in additional subexpressions or to construct the result.

The system field sy-index is not set by a FOR expression.

Hints

-   Usually, the expression expr (after THEN) and the termination condition log\_exp after UNTIL or WHILE depend on the iteration variable var, but this not a prerequisite. The value of the iteration variable or the termination condition can also be determined in other ways. Status changes, for example, can be queried using method calls.
-   Usually, a termination condition after UNTIL is preferable to a termination condition after WHILE in all cases where the termination condition does not have to be checked before the first iteration step.
-   In many cases, iteration expressions for conditional iterations can replace [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)) loops, which construct values and internal tables.
-   Multiple sequential FOR expressions with different variants, including the [tabular iterations](javascript:call_link\('abenfor_itab.htm'\)), can be specified in a constructor expression. These expressions then work in the same way as nested loops.
-   Unlike in a [LET expression](javascript:call_link\('abaplet.htm'\)), a local field symbol cannot be declared instead of the iteration variable var.
-   A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the termination condition does not occur in time, the program is terminated by the runtime framework.

Example

The example creates a string from the numbers 0 to 9.

cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR  i = 1 UNTIL i > 10
                 NEXT s &&= |{ i - 1 }| ) ).

Executable Examples

[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))