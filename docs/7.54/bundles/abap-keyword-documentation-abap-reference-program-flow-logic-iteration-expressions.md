# ABAP Keyword Documentation / ABAP − Reference / Program Flow Logic / Iteration Expressions

Included pages: 14



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeniteration_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions.htm)
- [abenfor.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm)
- [abenfor_conditional.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_conditional.htm)
- [abeniteration_expressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm)
- [abencond_iteration_reduce_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_reduce_abexa.htm)
- [abencond_iteration_value_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_value_abexa.htm)
- [abencond_iteration_matrix_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_matrix_abexa.htm)
- [abeninverse_itab_for_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninverse_itab_for_abexa.htm)
- [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)
- [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_constructor_inference.htm)
- [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_type_inference_abexa.htm)

**Bundle Contains**: 11 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.984Z

---

### abeniteration_expressions.htm

> **📖 Official SAP Documentation**: [abeniteration_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) → 

Iteration Expressions

An iteration expression is a subexpression of specific [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") introduced using the iteration operator FOR and performs an iteration here. Alongside the optional use for creating rows in internal tables with the corresponding variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), a special reduction operator REDUCE is available that is based entirely on iteration expressions.

-   [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)).

-   [REDUCE - Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\))

Continue
[FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\))
[REDUCE - Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\))



**📖 Source**: [abeniteration_expressions.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions.htm)

### abenfor.htm

> **📖 Official SAP Documentation**: [abenfor.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

FOR - Iteration Expressions

Syntax

... [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))*|* [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\))*|* [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) type( ... FOR [... UNTIL*|*WHILE ...](javascript:call_link\('abenfor_conditional.htm'\))*|* [... IN ...](javascript:call_link\('abenfor_itab.htm'\)) ... ) ...

Effect

The language element FOR introduces an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") as a subexpression in [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) and in the variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) for conditional iterations. These expressions are used to create (iteratively) the results of any data types using REDUCE or to create rows of internal tables using NEW or VALUE. The iteration steps can be defined as required.

-   Iteration expressions with [IN](javascript:call_link\('abenfor_itab.htm'\)) for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry"). These expressions are used for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") using REDUCE or [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Notes

-   Any FOR variants can be combined in a single constructor expression, where they produce nested iterations.

-   The reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) must contain at least one iteration expression. The variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables can contain iteration expressions.

-   The conditional iterations using [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) provide an expression-oriented alternative to the loop statements [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)). The same applies to the table iterations using [IN](javascript:call_link\('abenfor_itab.htm'\)) and the statement [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)). The direct use of operand positions by the expression-oriented variants helps to avoid using helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR - Conditional Iteration](javascript:call_link\('abenfor_conditional.htm'\))
[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))



**📖 Source**: [abenfor.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm)

### abenfor_conditional.htm

> **📖 Official SAP Documentation**: [abenfor_conditional.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_conditional.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) → 

FOR - Conditional Iteration

Syntax

... FOR var = rhs *\[*THEN expr*\]* UNTIL*|*WHILE [log\_exp](javascript:call_link\('abenlogexp.htm'\)) *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Effect

This syntax form of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") executes a conditional iteration.

-   When this syntax is used in a constructor expression with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)), the reduction result is created in the iteration steps.

-   If this syntax is used in a constructor expression with the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) or with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables, new table rows are created in the iteration steps and added to the tabular result.

The parameters and arguments of the iteration expression must be specified as follows:

-   First a local helper variable var must be declared as an iteration variable and a start value rhs with \= must be assigned to this helper variable. The same applies to the namespace and visibility of var as applies to the helper fields declared in a [LET expression](javascript:call_link\('abaplet.htm'\)). The syntax of the declaration is exactly the same as in a [LET expression](javascript:call_link\('abaplet.htm'\)) and it follows the rules that apply here.

-   The next position depends on the data type of the iteration variable var:

-   If the iteration variable var does not have a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") and is not of type d or t, an expression expr is specified after THEN. The result of this expression can be converted into a data type of var. The expression is calculated for every iteration and its result is assigned to the iteration variable var. This is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

-   If the iteration variable var has a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), or the variable is of type d or t, THEN expr is optional. If THEN expr is not specified explicitly, THEN var + 1 is added implicitly or the value of the iteration variable is increased by 1 for every iteration.

-   Next a termination condition log\_exp must be specified after UNTIL or WHILE. log\_exp is any [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") whose operands can be any data objects visible in this place and any calls possible here.

-   If the termination condition is specified after UNTIL, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is true, the iteration is ended. At least one iteration step is executed.

-   If the termination condition is specified after WHILE, the logical expression log\_exp is evaluated after every iteration step. If the result of the logical expression is false, the iteration is ended. If the result of the logical expression is false even before the first iteration step, no iteration steps are executed.

-   An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified at the end to define local helper fields. The helper fields are used in every iteration step and can be used to construct the result.

The variables declared in FOR expressions are local. The local data from all outer FOR expressions can be used when their values are defined. The iteration variable and helper variables can be used after the FOR expression, either in additional subexpressions or to construct the result.

The system field sy-index is not set by a FOR expression.

Notes

-   Usually the expression expr (after THEN) and the termination condition log\_exp (after UNTIL or WHILE) depend on the iteration variable var, but this not mandatory. The value of the iteration variable or the termination condition can also be determined in other ways. Status changes, for example, can be queried using method calls.

-   Usually a termination condition after UNTIL is preferable to a termination condition after WHILE in all cases where the termination condition does not have to be checked before the first iteration step.

-   In many cases, iteration expressions for conditional iterations can replace [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)) loops that construct values and internal tables.

-   Multiple sequential FOR expressions with different variants (including the [tabular iterations](javascript:call_link\('abenfor_itab.htm'\))) can be specified in a constructor expression. These expressions then work in the same way as nested loops.

-   A maximum runtime can be configured using the [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the termination condition does not occur in time, the program is exited by the runtime environment. The profile parameter rdisp/max\_wprun\_time, on the other hand, is obsolete.

-   Unlike in a [LET expression](javascript:call_link\('abaplet.htm'\)), a local field symbol cannot be declared instead of the iteration variable var.

Example

The example creates a string from the numbers 0 to 9.

cl\_demo\_output=>display(
  REDUCE string( INIT s = \`\`
                 FOR  i = 1 UNTIL i > 10
                 NEXT s = s && |{ i - 1 }| ) ).

Executable Examples

[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))



**📖 Source**: [abenfor_conditional.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_conditional.htm)

### abeniteration_expressions_abexas.htm

> **📖 Official SAP Documentation**: [abeniteration_expressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) → 

Examples of Iteration Expressions

Continue
![Example](exa.gif "Example") [Creating Values with FOR and REDUCE](javascript:call_link\('abencond_iteration_reduce_abexa.htm'\))
![Example](exa.gif "Example") [Creating Tables Using FOR and VALUE](javascript:call_link\('abencond_iteration_value_abexa.htm'\))
![Example](exa.gif "Example") [Creating a Matrix Using FOR and VALUE](javascript:call_link\('abencond_iteration_matrix_abexa.htm'\))
![Example](exa.gif "Example") [Inverse Reads on Internal Table with FOR](javascript:call_link\('abeninverse_itab_for_abexa.htm'\))



**📖 Source**: [abeniteration_expressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm)

### abencond_iteration_reduce_abexa.htm

> **📖 Official SAP Documentation**: [abencond_iteration_reduce_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_reduce_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

Creating Values with FOR and REDUCE

The example demonstrates [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code

REPORT demo\_reduce\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'Summation'
      )->write( REDUCE i( INIT sum = 0
                          FOR n = 1 UNTIL n > 10
                          NEXT sum = sum + n )
      )->next\_section( 'Concatenation without THEN'
      )->write( REDUCE string( INIT text = \`Count up:\`
                               FOR n = 1 UNTIL n > 10
                               NEXT text = text && | { n }| )
      )->next\_section( 'Concatenation with THEN'
      )->write( REDUCE string( INIT text = \`Count down:\`
                               FOR n = 10 THEN n - 1 WHILE n > 0
                               NEXT text = text && | { n }| )
      )->next\_section( 'Non arithmetic expression'
      )->write( REDUCE string( INIT text = \`\`
                               FOR t = \`x\` THEN t && \`y\`
                                           UNTIL strlen( t ) > 10
                               NEXT text = text && |{ t } | )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the following simple iterations, which can be used to construct elementary data objects in a constructor expression using the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) and display them directly:

-   The first expression constructs a value of the type i for which the total of the iteration variable n is calculated. n is numeric, which means that THEN does not need to be specified. Each iteration step raises the value of n by 1.

-   The second expression uses the same iteration as the first, but constructs a text string to which each iteration step appends the character representation of n.

-   Like the second expression, the third expression constructs a text string, but uses the addition THEN explicitly to decrement the iteration variable instead of incrementing it.

-   Finally, the fourth expression demonstrates that the iteration variable does not have to be numeric. In this case, THEN must be specified explicitly with a suitable expression. Here, a text string is made longer until it has reached a specific size.



**📖 Source**: [abencond_iteration_reduce_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_reduce_abexa.htm)

### abencond_iteration_value_abexa.htm

> **📖 Official SAP Documentation**: [abencond_iteration_value_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_value_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

Creating Tables Using FOR and VALUE

The example demonstrates [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) with the operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

Source Code

REPORT demo\_value\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    cl\_demo\_output=>write(
        VALUE itab(
          FOR j = 11 THEN j + 10 WHILE j < 40
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    cl\_demo\_output=>write(
        VALUE itab(
          FOR j = 31 THEN j - 10 UNTIL j < 10
          ( col1 = j col2 = j + 1 col3 = j + 2  ) ) ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates the construction of internal tables using condition iterations with a constructor expression and the corresponding variant of the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). Two internal tables with different iterations are created and the output produced directly.



**📖 Source**: [abencond_iteration_value_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_value_abexa.htm)

### abencond_iteration_matrix_abexa.htm

> **📖 Official SAP Documentation**: [abencond_iteration_matrix_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_matrix_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

Creating a Matrix Using FOR and VALUE

This example demonstrates how a matrix is created using iterations.

Source Code

REPORT demo\_matrix.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES: t\_column TYPE STANDARD TABLE OF string   WITH EMPTY KEY,
           t\_rows   TYPE STANDARD TABLE OF t\_column WITH EMPTY KEY.
    CLASS-METHODS: main.
  PRIVATE SECTION.
    CLASS-DATA:
      rows    TYPE i,
      columns TYPE i,
      x       TYPE i VALUE 1,
      y       TYPE i VALUE 1.
    CLASS-METHODS initialize.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    initialize( ).
    "Old way
    DATA: column     TYPE t\_column,
          matrix\_old TYPE t\_rows.
    DO columns TIMES.
      DATA(idx) = sy-index - 1.
      CLEAR column.
      DO rows TIMES.
        APPEND sy-abcde+idx(1) && |{ sy-index }| TO column.
      ENDDO.
      APPEND column TO matrix\_old.
    ENDDO.
    "New way
    DATA(matrix\_new) =
      VALUE t\_rows(
        FOR i = 0 UNTIL i > columns - 1 (
          VALUE t\_column(
            FOR j = 1 UNTIL j > rows
              ( sy-abcde+i(1) && |{ j }| ) ) ) ).
    ASSERT matrix\_new = matrix\_old.
    TRY.
        cl\_demo\_output=>display( matrix\_new\[ x \]\[ y \] ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        cl\_demo\_output=>display( 'Not found' ).
    ENDTRY.  ENDMETHOD.
  METHOD initialize.
    rows = 100.
    columns = strlen( sy-abcde ).
    cl\_demo\_input=>add\_field( CHANGING field = x ).
    cl\_demo\_input=>add\_field( CHANGING field = y ).
    cl\_demo\_input=>request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The rows and columns of a matrix are simulated using an internal table whose row types are arrays. These tables are filled using nested [DO](javascript:call_link\('abapdo.htm'\)) loops and equivalent iterations expressions for [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) in a constructor expression with the operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)). The [ASSERT](javascript:call_link\('abapassert.htm'\)) statement shows that both internal tables have the same content. It is possible to access each individual element.



**📖 Source**: [abencond_iteration_matrix_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_iteration_matrix_abexa.htm)

### abeninverse_itab_for_abexa.htm

> **📖 Official SAP Documentation**: [abeninverse_itab_for_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninverse_itab_for_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) →  [Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\)) → 

Inverse Reads on Internal Table with FOR

This example demonstrates how sequential inverse reads are performed on an internal table.

Source Code

REPORT demo\_value\_cond\_iteration.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA
      itab TYPE STANDARD TABLE OF i
           WITH EMPTY KEY
           WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
    itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
    DATA(output) =
      REDUCE string(
        INIT o = \`\`
        FOR  i = lines( itab ) THEN i - 1 WHILE i > 0
        NEXT o = o && COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN
                              WHEN r > 2 THEN r && \` \` ) ).
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a conditional iteration, an internal table is read using WHILE and a table expression. The table expression uses the secondary table key sort\_key and the result is created in a conditional expression using cond. The example shows how to bypass the restriction that inverse [table iterations](javascript:call_link\('abenfor_itab.htm'\)) cannot be performed.



**📖 Source**: [abeninverse_itab_for_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninverse_itab_for_abexa.htm)

### abeniteration_expressions_abexas.htm

> **📖 Official SAP Documentation**: [abeniteration_expressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [FOR - Iteration Expressions](javascript:call_link\('abenfor.htm'\)) → 

Examples of Iteration Expressions

Continue
![Example](exa.gif "Example") [Creating Values with FOR and REDUCE](javascript:call_link\('abencond_iteration_reduce_abexa.htm'\))
![Example](exa.gif "Example") [Creating Tables Using FOR and VALUE](javascript:call_link\('abencond_iteration_value_abexa.htm'\))
![Example](exa.gif "Example") [Creating a Matrix Using FOR and VALUE](javascript:call_link\('abencond_iteration_matrix_abexa.htm'\))
![Example](exa.gif "Example") [Inverse Reads on Internal Table with FOR](javascript:call_link\('abeninverse_itab_for_abexa.htm'\))



**📖 Source**: [abeniteration_expressions_abexas.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeniteration_expressions_abexas.htm)

### abenfor.htm

> **📖 Official SAP Documentation**: [abenfor.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

FOR - Iteration Expressions

Syntax

... [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\))*|* [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\))*|* [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) type( ... FOR [... UNTIL*|*WHILE ...](javascript:call_link\('abenfor_conditional.htm'\))*|* [... IN ...](javascript:call_link\('abenfor_itab.htm'\)) ... ) ...

Effect

The language element FOR introduces an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") as a subexpression in [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) and in the variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables.

There are two main variants of iteration expressions:

-   Iteration expressions with [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) for conditional iterations. These expressions are used to create (iteratively) the results of any data types using REDUCE or to create rows of internal tables using NEW or VALUE. The iteration steps can be defined as required.

-   Iteration expressions with [IN](javascript:call_link\('abenfor_itab.htm'\)) for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry"). These expressions are used for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") using REDUCE or [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") using NEW or VALUE. The iteration steps here evaluate an existing internal table.

Notes

-   Any FOR variants can be combined in a single constructor expression, where they produce nested iterations.

-   The reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) must contain at least one iteration expression. The variants of the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) and the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for creating internal tables can contain iteration expressions.

-   The conditional iterations using [UNTIL](javascript:call_link\('abenfor_conditional.htm'\)) or [WHILE](javascript:call_link\('abenfor_conditional.htm'\)) provide an expression-oriented alternative to the loop statements [DO](javascript:call_link\('abapdo.htm'\)) and [WHILE](javascript:call_link\('abapwhile.htm'\)). The same applies to the table iterations using [IN](javascript:call_link\('abenfor_itab.htm'\)) and the statement [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)). The direct use of operand positions by the expression-oriented variants helps to avoid using helper variables. Furthermore, they also enable certain tasks, such as creating values iteratively, to be expressed more concisely and more elegantly.

Continue
[FOR - Conditional Iteration](javascript:call_link\('abenfor_conditional.htm'\))
[Examples of Iteration Expressions](javascript:call_link\('abeniteration_expressions_abexas.htm'\))



**📖 Source**: [abenfor.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor.htm)

### abenconstructor_expression_reduce.htm

> **📖 Official SAP Documentation**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

REDUCE - Reduction Operator

Syntax

... REDUCE type(
      *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
      INIT *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}**|**{*x1*|*<x1> TYPE dtype1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}**|**{*x2*|*<x2> TYPE dtype2*}*
           ...
      [FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
      [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
      ...
      NEXT ...
           *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}*
           ... ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the reduction operator REDUCE creates a result of a data type specified using type from one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry"). The following can be specified for type:

-   A non-generic data type dtype.

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

-   If the data type required in an operand position is unique and known completely, this type is used.

-   If the operand type is not known completely, the type of the first declaration after INIT (which is always known) is used, except if the constructor expression is passed to an actual parameter with a generically typed formal parameter.

-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)).

The parameters and arguments of the constructor expression must be specified as follows:

-   Firstly, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified for defining local helper fields whose value is used within the expression but can no longer be modified there.

-   An addition INIT must then be specified followed by any number of declarations. The declarations after INIT create local variables x1, x2, ... or field symbols <x1>, <x2>, ... to which the same applies with respect to namespace and visibility as to the helper fields declared in a [LET expression](javascript:call_link\('abaplet.htm'\)). The syntax of the declaration is one of the following:

-   It is the same as in a [LET expression](javascript:call_link\('abaplet.htm'\)) and it follows the rules that apply here.

-   Initial variables or field symbols of the specified data type dtype can be created using TYPE.

At least one variable or one field symbol must be specified. The variables or field symbols declared after INIT can only be used after NEXT. In particular, they cannot be used to declare other variables or field symbols.

-   The first variable x1 or the first field symbol <x1> determines the result of the expression and the data type must be convertible to the result type type.

-   All other variables or field symbols declared after INIT are optional helper fields that can be on the left side of assignments after NEXT (unlike those declared after LET).

-   At least one [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") must then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) and it is also possible to specify multiple consecutive iteration expressions.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the result is created in custom iteration steps.

-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the rows of existing internal tables are evaluated. This is known as a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry"), since any values can be constructed from the rows of existing internal tables.

-   Assignments must then be specified after NEXT that are executed for every iteration of the last FOR expression. A value or memory area must be assigned to all variables and field symbols declared after INIT. In the case of structured variables or field symbols, it is enough to make an assignment to one of their components.

-   The assignment on the right side rhs to variables x is made in accordance with the rules of a regular assignment using the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), which means that any of the potential calls and expressions can be specified for rhs.

-   Only the result of a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") wrexp can be assigned to a field symbol. The same applies here as in assignments of writable expressions using [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), which means that only the expressions specified there can be used.

The assignments can be specified in any order and they are evaluated from to left to right. Each non-structured variable or field symbol declared after INTIT can be specified precisely once as the left side. In the case of structured variables or field symbols, either the full structure can be specified as the left side or each component once. Alongside the data objects of the program, all local variables and field symbols of the expression visible after the last FOR expression can be used in the operand positions on the right side:

-   All variables and field symbols declared after LET.

-   All variables and field symbols declared after INIT.

-   The wa1, wa2, ... or <fs1>, <fs2>, .... filled by the FOR expressions. This enables the content of the rows of the internal tables to be accessed and the result constructed.

Any helper fields declared after INTIT can only be specified in reading positions on the right side.

After the full evaluation, the content of the first variable x1 or the memory area pointed to by the first field symbol <x1> is assigned to the temporary result of the expression of type type in accordance with the [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)).

Notes

-   The name of the operator REDUCE is explained as follows:

-   [Conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are generally used to reduce sets of data objects to a single data object.

-   [Table iterations](javascript:call_link\('abenfor_itab.htm'\)) for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") are generally used to reduce the content of the internal tables in question to a summary value. The result type can be any type and does not have to be less complex than the internal tables, but this property should only be exploited in exceptional cases. When constructing tables from tables, it is best to use [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") instead.

-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be implemented more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).

-   When a local field symbol <xi> is used on the left side of assignments after NEXT, it should be noted that the assignments are not made to the value referenced by the field symbol (as in INIT and LET). Instead, the field symbol is set in the same way as in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

-   Unlike in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), an assignment of a REDUCE expression to a structure or an internal table does not overwrite them in full before the FOR expressions are processed. The structure or internal table can be used directly anywhere in the expression.

-   If a variable is declared in the first position after INIT and the VALUE operator is specified with the character # on the right side, the result type type of the REDUCE expression is used for this character if possible.

-   Table reductions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
    

Example

Calculation of the total of the numbers from 1 to 10 via REDUCE.

cl\_demo\_output=>display(
  REDUCE i( INIT s = 0
            FOR  i = 1 UNTIL i > 10
            NEXT s = s + i ) ).

Executable Examples

-   [Creating Values with FOR and REDUCE](javascript:call_link\('abencond_iteration_reduce_abexa.htm'\))

-   [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)).

Continue
[REDUCE - Type Inference for Actual Parameter](javascript:call_link\('abenreduce_constructor_inference.htm'\))
![Example](exa.gif "Example") [Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))



**📖 Source**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)

### abenreduce_constructor_inference.htm

> **📖 Official SAP Documentation**: [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_constructor_inference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE - Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

REDUCE - Type Inference for Actual Parameter

The following constructor expression can be passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type:

[REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) #( ... INIT ... FOR ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the first declaration after INIT matches the generic type of the formal parameter, this data type is used.

-   If the data type of the first declaration after INIT does not match the generic type of the formal parameter, the type is derived from the generic type as follows:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.

Notes

-   The data type of the first declaration after INIT is always identified statically.

-   Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.
    

Example

The operator REDUCE generates a result of type string in this case. The generic parameter p has this type during the execution of the method. This is shown by the value "g" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE DATA(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( REDUCE #( INIT s = 0
                        FOR  i = 1 UNTIL i > 10
                        NEXT s = s + i ) ).

Executable Example

[Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))



**📖 Source**: [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_constructor_inference.htm)

### abenreduce_type_inference_abexa.htm

> **📖 Official SAP Documentation**: [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_type_inference_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE - Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

Reduce Operator, Type Inference

This example demonstrates a type inference for the conversion operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code

REPORT demo\_reduce\_type\_inference.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    CLASS-METHODS:
      main,
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    demo=>meth1( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    demo=>meth1( p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 = r2 + 1 ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    "demo=>meth2( p = REDUCE #( INIT r2 = num
    "                           FOR i = 1
    "                           UNTIL i > 9
    "                           NEXT r2 = r2 + 1 ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    demo=>meth3( p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 = r2 + 1 ) ) ##type.
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DESCRIBE FIELD p TYPE type.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      DESCRIBE FIELD p LENGTH length IN CHARACTER MODE.
    ENDIF.
    cl\_demo\_output=>write( |{ type } { length }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Passes constructor expressions with the conversion operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)) apply when identifying the operand type.

-   Fully typed formal parameter

When the method meth1 is called with a fully typed formal parameter, the operand type for # is identified using this parameter and the result of the reduction is converted to c with length 10 in both calls.

-   Formal parameter typed generically with c

The operand type for # is identified from the first declaration after INIT.

-   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.

-   It is not possible to perform a call with the type i of the declaration after INIT, since it does not match the typing and there are no inference rules for the generic type c.

-   Formal parameter typed generically with csequence

-   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.

-   In the second call, the type i of the declaration after INIT does not match the generic type and the type string is used. This is indicated by a syntax check warning.



**📖 Source**: [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreduce_type_inference_abexa.htm)

### abenconstructor_expression_reduce.htm

> **📖 Official SAP Documentation**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

REDUCE - Reduction Operator

Syntax

... REDUCE type(
      *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
      INIT *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}**|**{*x1*|*<x1> TYPE dtype1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}**|**{*x2*|*<x2> TYPE dtype2*}*
           ...
      [FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
      [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
      ...
      NEXT ...
           *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}*
           ... ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the reduction operator REDUCE creates a result of a data type specified using type from one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry"). The following can be specified for type:

-   A non-generic data type dtype.

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

-   If the data type required in an operand position is unique and known completely, this type is used.

-   If the operand type is not known completely, the type of the first declaration after INIT (which is always known) is used, except if the constructor expression is passed to an actual parameter with a generically typed formal parameter.

-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)).

The parameters and arguments of the constructor expression must be specified as follows:

-   Firstly, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified for defining local helper fields whose value is used within the expression but can no longer be modified there.

-   An addition INIT must then be specified followed by any number of declarations. The declarations after INIT create local variables x1, x2, ... or field symbols <x1>, <x2>, ... to which the same applies with respect to namespace and visibility as to the helper fields declared in a [LET expression](javascript:call_link\('abaplet.htm'\)). The syntax of the declaration is one of the following:

-   It is the same as in a [LET expression](javascript:call_link\('abaplet.htm'\)) and it follows the rules that apply here.

-   Initial variables or field symbols of the specified data type dtype can be created using TYPE.

At least one variable or one field symbol must be specified. The variables or field symbols declared after INIT can only be used after NEXT. In particular, they cannot be used to declare other variables or field symbols.

-   The first variable x1 or the first field symbol <x1> determines the result of the expression and the data type must be convertible to the result type type.

-   All other variables or field symbols declared after INIT are optional helper fields that can be on the left side of assignments after NEXT (unlike those declared after LET).

-   At least one [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") must then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) and it is also possible to specify multiple consecutive iteration expressions.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the result is created in custom iteration steps.

-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the rows of existing internal tables are evaluated. This is known as a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry"), since any values can be constructed from the rows of existing internal tables.

-   Assignments must then be specified after NEXT that are executed for every iteration of the last FOR expression. A value or memory area must be assigned to all variables and field symbols declared after INIT. In the case of structured variables or field symbols, it is enough to make an assignment to one of their components.

-   The assignment on the right side rhs to variables x is made in accordance with the rules of a regular assignment using the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), which means that any of the potential calls and expressions can be specified for rhs.

-   Only the result of a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") wrexp can be assigned to a field symbol. The same applies here as in assignments of writable expressions using [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), which means that only the expressions specified there can be used.

The assignments can be specified in any order and they are evaluated from to left to right. Each non-structured variable or field symbol declared after INTIT can be specified precisely once as the left side. In the case of structured variables or field symbols, either the full structure can be specified as the left side or each component once. Alongside the data objects of the program, all local variables and field symbols of the expression visible after the last FOR expression can be used in the operand positions on the right side:

-   All variables and field symbols declared after LET.

-   All variables and field symbols declared after INIT.

-   The wa1, wa2, ... or <fs1>, <fs2>, .... filled by the FOR expressions. This enables the content of the rows of the internal tables to be accessed and the result constructed.

Any helper fields declared after INTIT can only be specified in reading positions on the right side.

After the full evaluation, the content of the first variable x1 or the memory area pointed to by the first field symbol <x1> is assigned to the temporary result of the expression of type type in accordance with the [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)).

Notes

-   The name of the operator REDUCE is explained as follows:

-   [Conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are generally used to reduce sets of data objects to a single data object.

-   [Table iterations](javascript:call_link\('abenfor_itab.htm'\)) for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") are generally used to reduce the content of the internal tables in question to a summary value. The result type can be any type and does not have to be less complex than the internal tables, but this property should only be exploited in exceptional cases. When constructing tables from tables, it is best to use [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") instead.

-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be implemented more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).

-   When a local field symbol <xi> is used on the left side of assignments after NEXT, it should be noted that the assignments are not made to the value referenced by the field symbol (as in INIT and LET). Instead, the field symbol is set in the same way as in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

-   Unlike in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), an assignment of a REDUCE expression to a structure or an internal table does not overwrite them in full before the FOR expressions are processed. The structure or internal table can be used directly anywhere in the expression.

-   If a variable is declared in the first position after INIT and the VALUE operator is specified with the character # on the right side, the result type type of the REDUCE expression is used for this character if possible.

-   Table reductions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
    

Example

Calculation of the total of the numbers from 1 to 10 via REDUCE.

cl\_demo\_output=>display(
  REDUCE i( INIT s = 0
            FOR  i = 1 UNTIL i > 10
            NEXT s = s + i ) ).

Executable Examples

-   [Creating Values with FOR and REDUCE](javascript:call_link\('abencond_iteration_reduce_abexa.htm'\))

-   [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)).

Continue
[REDUCE - Type Inference for Actual Parameter](javascript:call_link\('abenreduce_constructor_inference.htm'\))
![Example](exa.gif "Example") [Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))
