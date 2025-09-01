  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Table Reductions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reductions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Reduction%2C%20Method%20Calls%2C%20ABENREDUCE_METHOD_CALL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

itab - Table Reduction, Method Calls

This example demonstrates a [reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) of the columns of an internal table to an object.

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_method\_call DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS to\_string IMPORTING wa          TYPE scarr
                      RETURNING VALUE(text) TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_method\_call IMPLEMENTATION.
  METHOD main.
    DATA carriers TYPE TABLE OF scarr.
    SELECT \* FROM scarr INTO TABLE @carriers.
    DATA o TYPE REF TO if\_demo\_output.
    o = REDUCE #(
            INIT o1 = out
            FOR wa IN carriers
            NEXT o1 = o1->write( to\_string( wa ) ) ).
  ENDMETHOD.
  METHOD to\_string.
    DO.
      ASSIGN wa-(sy-index) TO FIELD-SYMBOL(<wa>).
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      FINAL(olen) = CAST cl\_abap\_elemdescr(
          cl\_abap\_typedescr=>describe\_by\_data( <wa> ) )->output\_length.
      text = |{ text }{ CONV string( <wa> ) WIDTH = olen + 2 }|.
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

In this example, a call of a method to\_string transforms the lines of the internal table carriers after the [FOR expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_in_itab.htm) to a text string. This string is then passed to the instance method WRITE of an object of the class CL\_DEMO\_OUTPUT. This object is created after INIT and referenced by the local reference variable o. The return value of the method WRITE returns a reference to its own object, which means that the assignment to o does not modify its value but meets the syntax rule that o must be filled. At the end of processing, the reference to the object in o is assigned to the reference variable out and the content of the internal table written to the object can be displayed using the method DISPLAY.