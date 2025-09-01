  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - Performance Note](javascript:call_link\('abenstring_expr_perfo.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_exp - Concatenating Strings, ABENSTRING_CONCATENATION_ABEXA, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

string\_exp - Concatenating Strings

This example demonstrates how string concatenations can be optimized.

Source Code   

REPORT demo\_string\_concatenation.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10000.
    cl\_demo\_input=>request( CHANGING field = n ).
    IF n <= 0 OR n >= 100000.
      EXIT.
    ENDIF.
    GET RUN TIME FIELD FINAL(t1).
    FINAL(result1) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     NEXT s &&= CONV string( i ) ).
    GET RUN TIME FIELD FINAL(t2).
    FINAL(t21) = t2 - t1.
    GET RUN TIME FIELD FINAL(t3).
    FINAL(result2) =
      REDUCE string( INIT s = \`\`
                     FOR i = 1 UNTIL i > n
                     LET num = CONV string( i ) IN
                     NEXT s &&= num ).
    GET RUN TIME FIELD FINAL(t4).
    FINAL(t43) = t4 - t3.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( |Optimization factor: { t21 / t43 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example demonstrates the optimization of a string concatenation, if a string is lengthened on the right side by appending content during an [assignment](javascript:call_link\('abenequals_string_expr.htm'\)) to a string. In this case, the strings are processed in a loop using a [REDUCE expression](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

-   There is no optimization in the first REDUCE expression since an expression is appended to the string s.
-   In the second REDUCE expression, the expression is assigned to a helper variable num using LET. This variable can be appended to s directly without an interim result needing to be produced.

Without optimization, the runtime increases quadratically with the number of iterations, which has a noticeable effect for large numbers n.