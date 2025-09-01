# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Iteration Expressions / FOR, Iteration Expressions

Included pages: 8


### abenfor.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%2C%20Iteration%20Expressions%2C%20ABENFOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR, Iteration Expressions

Syntax

... [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)*|* [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm)*|* [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm) type( ... FOR [... UNTIL*|*WHILE ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm)
                                 *|* [... IN ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) ...) ...

Effect

The language element FOR introduces an [iteration expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expression_glosry.htm "Glossary Entry") as a subexpression in [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) and in the variants of the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm) and the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) or [WHILE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) for conditional iterations. These expressions are used to iteratively create the results of any data types using REDUCE or to create lines of internal tables using NEW or VALUE. The iteration steps can be defined as required.
-   Iteration expressions with [IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) for [table iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_iteration_glosry.htm "Glossary Entry"). These expressions are used for [table reductions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") using REDUCE or [table comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Hints

-   Any FOR variants can be used in any way in a constructor expression and produce nested iterations.
-   The reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) must contain at least one iteration expression. The variants of the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm) and the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm) for creating internal tables can contain iteration expressions.
-   The conditional iterations using [UNTIL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) or [WHILE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) provide an expression-oriented alternative to the loop statements [DO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm) and [WHILE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhile.htm). The same applies to the table iterations using [IN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) and the statement [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm). The direct use of operand positions on the expression-oriented variants helps to avoid helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR, Conditional Iteration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm)
[Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm)


### abenfor_conditional.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%2C%20Conditional%20Iteration%2C%20ABENFOR_CONDITIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR, Conditional Iteration

Syntax

... FOR var = rhs *\[*THEN expr*\]* UNTIL*|*WHILE [log\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp.htm) *\[*[let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)*\]* ...

Effect

This syntax form of an [iteration expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expression_glosry.htm "Glossary Entry") executes a conditional iteration.

-   If it is used in a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm), the reduction result is created in the iteration steps.
-   If it is used in a constructor expression with the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm) or with the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm) for internal tables, new table lines are created in the iteration steps and inserted into the tabular result.

The parameters and arguments of the iteration expression must be specified as follows:

-   First, a local helper variable var must be declared as an iteration variable and assigned a start value rhs with \=. The same applies to the namespace and visibility of var as to the helper fields declared in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm). The syntax of the declaration is exactly the same as in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) and it follows the rules that apply here.
-   The next position depends on the data type of the iteration variable var:
    -   If the iteration variable var does not have a [numeric data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") and is not of type d or t, an expression expr must be specified after THEN. The result of this expression can be converted into a data type of var. The expression is calculated for every iteration and its result is assigned to the iteration variable var. This is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
    -   If the iteration variable var has a [numeric data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), or is of type d or t, THEN expr is optional. If THEN expr is not specified explicitly, THEN var + 1 is added implicitly or the value of the iteration variable is increased by 1 for every iteration.
-   Afterwards, a termination condition log\_exp must be specified after UNTIL or WHILE. log\_exp is any [logical expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_expression_glosry.htm "Glossary Entry") whose operands can be any data objects visible at this position and any calls possible here.
    -   If the termination condition is specified after UNTIL, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is true, the iteration is ended. At least one iteration step is executed.
    -   If the termination condition is specified after WHILE, the logical expression log\_exp is evaluated before every iteration step. If the result of the logical expression is false, the iteration is terminated. If the result of the logical expression is already false before the first iteration step, no iteration steps are executed.
-   An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) can be specified at the end to define local helper fields. The helper fields are filled in every iteration step and can be used to construct the result.

The variables declared in FOR expressions are local. The local data of all outer FOR expressions can be used when their values are set. The iteration variable and any helper variables can be used after the FOR expression, either in additional subexpressions or to construct the result.

The system field sy-index is not set by a FOR expression.

Hints

-   Usually, the expression expr (after THEN) and the termination condition log\_exp after UNTIL or WHILE depend on the iteration variable var, but this not a prerequisite. The value of the iteration variable or the termination condition can also be determined in other ways. Status changes, for example, can be queried using method calls.
-   Usually, a termination condition after UNTIL is preferable to a termination condition after WHILE in all cases where the termination condition does not have to be checked before the first iteration step.
-   In many cases, iteration expressions for conditional iterations can replace [DO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm) and [WHILE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhile.htm) loops, which construct values and internal tables.
-   Multiple sequential FOR expressions with different variants, including the [tabular iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm), can be specified in a constructor expression. These expressions then work in the same way as nested loops.
-   Unlike in a [LET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm), a local field symbol cannot be declared instead of the iteration variable var.
-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the termination condition does not occur in time, the program is terminated by the runtime framework.

Example

The example creates a string from the numbers 0 to 9.

cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR  i = 1 UNTIL i > 10
                 NEXT s &&= |{ i - 1 }| ) ).

Executable Examples

[Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm)


### abeniteration_expressions_abexas.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20of%20Iteration%20Expressions%2C%20ABENITERATION_EXPRESSIONS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Examples of Iteration Expressions

-   [Creating Values with FOR and REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_reduce_abexa.htm)
-   [Creating Tables Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_value_abexa.htm)
-   [Creating a Matrix Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_matrix_abexa.htm)
-   [Inverse Reads on Internal Table without STEP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninverse_itab_for_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Values with FOR and REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_reduce_abexa.htm)
![Example](exa.gif "Example") [Creating Tables Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_value_abexa.htm)
![Example](exa.gif "Example") [Creating a Matrix Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_matrix_abexa.htm)
![Example](exa.gif "Example") [Inverse Reads on Internal Table without STEP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninverse_itab_for_abexa.htm)


### abencond_iteration_reduce_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Values%20with%20FOR%20and%20REDUCE%2C%20ABENCOND_ITERATION_REDUCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Creating Values with FOR and REDUCE

This example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) with the operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_cond\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_cond\_iteration IMPLEMENTATION.
  METHOD main.
    out->next\_section( 'Summation'
      )->write( REDUCE i( INIT sum = 0
                          FOR n = 1 UNTIL n > 10
                          NEXT sum = sum + n )
      )->next\_section( 'Concatenation without THEN'
      )->write( REDUCE string( INIT text = \`Count up:\`
                               FOR n = 1 UNTIL n > 10
                               NEXT text &&= | { n }| )
      )->next\_section( 'Concatenation with THEN'
      )->write( REDUCE string( INIT text = \`Count down:\`
                               FOR n = 10 THEN n - 1 WHILE n > 0
                               NEXT text &&= | { n }| )
      )->next\_section( 'Non arithmetic expression'
      )->write( REDUCE string( INIT text = \`\`
                               FOR t = \`x\` THEN t && \`y\`
                                           UNTIL strlen( t ) > 10
                               NEXT text &&= |{ t } | ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the following simple iterations, which can be used to construct elementary data objects and directly display them in a constructor expression using the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm):

-   The first expression constructs a value of the type i for which the total of the iteration variable n is calculated. n is numeric, which means that THEN does not have to be specified. Each iteration step increases the value of n by 1.
-   The second expression uses the same iteration as the first, but constructs a text string to which each iteration step appends the character representation of n.
-   Like the second expression, the third expression constructs a text string, but uses the addition THEN explicitly to decrement the iteration variable instead of incrementing it.
-   Finally, the fourth expression shows that the iteration variable does not have to be numeric. In this case, THEN must be specified explicitly with a suitable expression. Here, a text string is made longer until it has reached a specific size.


### abencond_iteration_value_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Tables%20Using%20FOR%20and%20VALUE%2C%20ABENCOND_ITERATION_VALUE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Creating Tables Using FOR and VALUE

This example demonstrates [conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) with the operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_cond\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_value\_cond\_iteration IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    out->write(
        VALUE itab(
          FOR j = 11 THEN j + 10 WHILE j < 40
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    out->write(
        VALUE itab(
          FOR j = 31 THEN j - 10 UNTIL j < 10
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm). Two internal tables with different iterations are created and directly output.


### abencond_iteration_matrix_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20a%20Matrix%20Using%20FOR%20and%20VALUE%2C%20ABENCOND_ITERATION_MATRIX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Creating a Matrix Using FOR and VALUE

This example demonstrates how a matrix is created using iterations.

Source Code   

\* Public class definition
CLASS cl\_demo\_matrix DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES: t\_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY,
           t\_rows   TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      rows    TYPE i,
      columns TYPE i,
      x       TYPE i VALUE 1,
      y       TYPE i VALUE 1,
      abcde   TYPE string VALUE 'abcdefghijklmnopqrstuvwxyz'.
    METHODS initialize.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_matrix IMPLEMENTATION.
  METHOD main.
    initialize( ).
    "Old way
    DATA: column     TYPE t\_column,
          matrix\_old TYPE t\_rows.
    DO columns TIMES.
      FINAL(idx) = sy-index - 1.
      CLEAR column.
      DO rows TIMES.
        APPEND abcde+idx(1) && |{ sy-index }| TO column.
      ENDDO.
      APPEND column TO matrix\_old.
    ENDDO.
    "New way
    FINAL(matrix\_new) =
      VALUE t\_rows(
        FOR i = 0 UNTIL i > columns - 1 (
          VALUE t\_column(
            FOR j = 1 UNTIL j > rows
              ( abcde+i(1) && |{ j }| ) ) ) ).
    ASSERT matrix\_new = matrix\_old.
    TRY.
        out->write( matrix\_new\[ x \]\[ y \] ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        out->write( 'Not found' ).
    ENDTRY.
  ENDMETHOD.
  METHOD initialize.
    rows = 100.
    columns = strlen( abcde ).
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = x
     )->add\_field( CHANGING field = y
     )->request( ).
  ENDMETHOD.
ENDCLASS.

Description   

The lines and columns of a matrix are simulated using an internal table whose line types are arrays. These tables are filled using nested [DO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm) loops and equivalent iteration expressions for [conditional iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) in a constructor expression with the operator [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm). The [ASSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassert.htm) statement shows that both internal tables have the same content. It is possible to access each individual element.


### abeninverse_itab_for_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) →  [Examples of Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inverse%20Reads%20on%20Internal%20Table%20without%20STEP%2C%20ABENINVERSE_ITAB_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Inverse Reads on Internal Table without STEP

This example demonstrates a [table reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") implemented by a conditional iteration.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_reverse\_iteration DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_reverse\_iteration IMPLEMENTATION.
  METHOD main.
    DATA
      itab TYPE STANDARD TABLE OF i
           WITH EMPTY KEY
           WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
    itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
    FINAL(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                           WHEN r > 2 THEN r && \` \` ) ).
    out->write( output ).
  ENDMETHOD.
ENDCLASS.

Description   

The example shows how an inverse [table iteration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) could be performed by an iteration expression accessing a table expression before the addition [STEP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_cond.htm) was introduced for direct table iterations.


### abeniteration_expressions_abexas.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [FOR, Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20of%20Iteration%20Expressions%2C%20ABENITERATION_EXPRESSIONS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

Examples of Iteration Expressions

-   [Creating Values with FOR and REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_reduce_abexa.htm)
-   [Creating Tables Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_value_abexa.htm)
-   [Creating a Matrix Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_matrix_abexa.htm)
-   [Inverse Reads on Internal Table without STEP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninverse_itab_for_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Values with FOR and REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_reduce_abexa.htm)
![Example](exa.gif "Example") [Creating Tables Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_value_abexa.htm)
![Example](exa.gif "Example") [Creating a Matrix Using FOR and VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_iteration_matrix_abexa.htm)
![Example](exa.gif "Example") [Inverse Reads on Internal Table without STEP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninverse_itab_for_abexa.htm)
