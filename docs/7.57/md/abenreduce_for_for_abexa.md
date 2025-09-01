  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_reductions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Multiple FOR Expressions, ABENREDUCE_FOR_FOR_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Multiple FOR Expressions

This example demonstrates a [reduction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_reduce.htm) of the columns of a nested internal table to a text string.

Source Code   

REPORT demo\_reduce\_for\_for.
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
      END OF line,
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE STANDARD TABLE OF line WITH EMPTY KEY,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line2.
    FINAL(out) = cl\_demo\_output=>new( ).
    FINAL(itab1) = VALUE itab1(
      ( col1 = 1 col2 = VALUE line1-col2( ( col1 = 111 col2 = 112 )
                                          ( col1 = 121 col2 = 122 ) ) )
      ( col1 = 2 col2 = VALUE line1-col2( ( col1 = 211 col2 = 212 )
                                          ( col1 = 221 col2 = 222 ) ) )
      ( col1 = 3 col2 = VALUE line1-col2( ( col1 = 311 col2 = 312 )
                                          ( col1 = 321 col2 = 322 ) ) )
                             ).
    LOOP AT itab1 INTO FINAL(line1).
      out->write( name = |ITAB1, Line { sy-tabix }, COL2|
                  data = line1-col2 ).
    ENDLOOP.
    FINAL(result) = REDUCE string(
      INIT text TYPE string
      FOR wa1 IN itab1
      FOR wa2 IN wa1-col2
      NEXT text =
             |{ text } { wa1-col1 }, { wa2-col1 }, { wa2-col2 }\\n| ).
    out->write\_html( \`<b>Result</b>\`
      )->write(  result  ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example uses the same nested source table as in the executable example for [table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_cmprhnsns_for_for_abexa.htm). Its VALUE operator is replaced here by the REDUCE operator with the data type string and the content of the nested loop is chained to the text string after the last [FOR expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_itab.htm).