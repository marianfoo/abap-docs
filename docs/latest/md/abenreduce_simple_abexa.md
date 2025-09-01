  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reductions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Reduction%2C%20Summation%20of%20an%20Array%2C%20ABENREDUCE_SIMPLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

itab - Table Reduction, Summation of an Array

This example demonstrates a simple [table reduction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reduction_glosry.htm "Glossary Entry") using [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_simple DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_simple IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i WITH EMPTY KEY.
    itab = VALUE #( FOR j = 1 WHILE j <= 10 ( j ) ).
    out->write( itab ).
    FINAL(sum) = REDUCE i( INIT x = 0 FOR wa IN itab NEXT x += wa ).
    out->write( sum ).
  ENDMETHOD.
ENDCLASS.

Description   

After the [FOR expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_itab.htm), the content of the table lines in itab is added to the local variable x and this variable is provided as the result. Instead of x = 0, x TYPE i could also be specified after INIT.