  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - Performance Note](javascript:call_link\('abenstring_expr_perfo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_exp%20-%20Concatenating%20Strings%2C%20ABENSTRING_CONCATENATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

string\_exp - Concatenating Strings

This example demonstrates how string concatenations can be optimized.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_concatenation DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_concatenation IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10000.
    cl\_demo\_input=>new( )->request( CHANGING field = n ).
    IF n <= 0 OR n >= 100000.
      EXIT.
    ENDIF.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    FINAL(t1) = timer->get\_runtime( ).
    FINAL(result1) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     NEXT s &&= CONV string( i ) ).
    FINAL(t2) = timer->get\_runtime( ).
    FINAL(t21) = t2 - t1.
    FINAL(t3) = timer->get\_runtime( ).
    FINAL(result2) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     LET num = CONV string( i ) IN
                     NEXT s &&= num ).
    FINAL(t4) = timer->get\_runtime( ).
    FINAL(t43) = t4 - t3.
    ASSERT result1 = result2.
    out->write( |Optimization factor: { t21 / t43 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates the optimization of a string concatenation, if a string is lengthened on the right side by appending content during an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) to a string. In this case, the strings are processed in a loop using a [REDUCE expression](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

-   There is no optimization in the first REDUCE expression since an expression is appended to the string s.
-   In the second REDUCE expression, the expression is assigned to a helper variable num using LET. This variable can be appended to s directly without an interim result needing to be produced.

Without optimization, the runtime increases quadratically with the number of iterations, which has a noticeable effect for large numbers n.