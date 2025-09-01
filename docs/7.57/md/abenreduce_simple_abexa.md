  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Table Reduction, Summation of an Array, ABENREDUCE_SIMPLE_ABEXA, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Table Reduction, Summation of an Array

This example demonstrates a simple [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") using [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code   

REPORT demo\_reduce\_simple.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i WITH EMPTY KEY.
    itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ).
    cl\_demo\_output=>write( itab ).
    FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ).
    cl\_demo\_output=>write( sum ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

After the [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)), the content of the table lines in itab is added to the local variable x and this variable is provided as the result. Instead of x = 0, x TYPE i could also be specified after INIT.