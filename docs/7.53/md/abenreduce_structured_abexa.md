  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR - Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)) → 

Table Reductions, Structured Result

This example demonstrates a reduction of the columns of a table to a structure.

Source Code

REPORT demo\_reduce\_structured.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        id  TYPE string,
        num TYPE i,
      END OF line,
      BEGIN OF result,
        text TYPE string,
        sum  TYPE i,
        max  TYPE i,
      END OF result.
    CLASS-DATA
      itab TYPE TABLE OF line WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>write( itab ).
    DATA(result) = REDUCE result(
                     INIT res = VALUE result( max  = 0
                                              text = \`Result: \` )
                          sep  = \`\`
                     FOR <wa> IN itab
                     NEXT res-text = res-text && sep
                                              && <wa>-id
                          res-sum = res-sum + <wa>-num
                          res-max = nmax( val1 = res-max
                                          val2 = <wa>-num )
                          sep     = \`-\` ).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
  METHOD class\_constructor.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                            min  = 0
                                            max  = 1000 ).
    itab = VALUE #( FOR j = 0 UNTIL j > 9
                    ( id  = sy-abcde+j(1)
                      num = rnd->get\_next( ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Reduces a two-column internal table itab using [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)). The content of the first column of all rows is chained after the [FOR expression](javascript:call_link\('abenfor_in_itab.htm'\)), the total of the second column is calculated, and the maximum value of the second column identified. These values are assigned to the components of the local structure res and the structure provided as the result.

The separator sep in the chaining is declared as a helper variable after INIT. It is initial for the first row read and set to a value here for the evaluation of the following rows.