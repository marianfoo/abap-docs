  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expressions.htm) →  [FOR - Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm) → 

FOR - Conditional Iteration

Syntax

... FOR var = rhs *\[*THEN expr*\]* UNTIL*|*WHILE [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp.htm) *\[*[let\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm)*\]* ...

Effect

This syntax form of an [iteration expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expression_glosry.htm "Glossary Entry") executes a conditional iteration.

-   When this syntax is used in a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm), the reduction result is created in the iteration steps.

-   If this syntax is used in a constructor expression with the instance operator [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_itab.htm) or with the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm) for internal tables, new table rows are created in the iteration steps and added to the tabular result.

The parameters and arguments of the iteration expression must be specified as follows:

-   First a local helper variable var must be declared as an iteration variable and a start value rhs with \= must be assigned to this helper variable. The same applies to the namespace and visibility of var as applies to the helper fields declared in a [LET expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm). The syntax of the declaration is exactly the same as in a [LET expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm) and it follows the rules that apply here.

-   The next position depends on the data type of the iteration variable var:

-   If the iteration variable var does not have a [numeric data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") and is not of type d or t, an expression expr is specified after THEN. The result of this expression can be converted into a data type of var. The expression is calculated for every iteration and its result is assigned to the iteration variable var. This is a [general expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

-   If the iteration variable var has a [numeric data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), or the variable is of type d or t, THEN expr is optional. If THEN expr is not specified explicitly, THEN var + 1 is added implicitly or the value of the iteration variable is increased by 1 for every iteration.

-   Next a termination condition log\_exp must be specified after UNTIL or WHILE. log\_exp is any [logical expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") whose operands can be any data objects visible in this place and any calls possible here.

-   If the termination condition is specified after UNTIL, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is true, the iteration is ended. At least one iteration step is executed.

-   If the termination condition is specified after WHILE, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is false, the iteration is ended. If the result of the logical expression is false even before the first iteration step, no iteration steps are executed.

-   An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm) can be specified at the end to define local helper fields. The helper fields are used in every iteration step and can be used to construct the result.

The variables declared in FOR expressions are local. The local data from all outer FOR expressions can be used when their values are defined. The iteration variable and helper variables can be used after the FOR expression, either in additional subexpressions or to construct the result.

The system field sy-index is not set by a FOR expression.

Notes

-   Usually the expression expr (after THEN) and the termination condition log\_exp (after UNTIL or WHILE) depend on the iteration variable var, but this not mandatory. The value of the iteration variable or the termination condition can also be determined in other ways. Status changes, for example, can be queried using method calls.

-   Usually a termination condition after UNTIL is preferable to a termination condition after WHILE in all cases where the termination condition does not have to be checked before the first iteration step.

-   In many cases, iteration expressions for conditional iterations can replace [DO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdo.htm) and [WHILE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwhile.htm) loops that construct values and internal tables.

-   Multiple sequential FOR expressions with different variants (including the [tabular iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm)) can be specified in a constructor expression. These expressions then work in the same way as nested loops.

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the termination condition does not occur in time, the program is exited by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.

-   Unlike in a [LET expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm), a local field symbol cannot be declared instead of the iteration variable var.

Example

The example creates a string from the numbers 0 to 9.

cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR  i = 1 UNTIL i > 10
                 NEXT s = s && |{ i - 1 }| ) ).

Executable Examples

[Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expressions_abexas.htm)