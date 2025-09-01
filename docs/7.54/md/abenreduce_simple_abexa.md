  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) →  [Examples of Table Reductions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reductions_abexas.htm) → 

Table Reductions, Summation of an Array

This example demonstrates a simple [table reduction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reduction_glosry.htm "Glossary Entry") using [REDUCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm).

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
    DATA(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x = x + wa ).
    cl\_demo\_output=>write( sum ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

After the [FOR expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_itab.htm), the content of the table rows in itab is added to the local variable x and this variable is provided as the result. Instead of x = 0, x TYPE i could also be specified after INIT.