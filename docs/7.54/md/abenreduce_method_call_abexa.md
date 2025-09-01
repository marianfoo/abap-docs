  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_itab.htm) →  [Examples of Table Reductions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_reductions_abexas.htm) → 

Table Reductions, Method Calls

This example demonstrates a [reduction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_reduce.htm) of the columns of an internal table to an object.

Source Code

REPORT demo\_reduce\_method\_call.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS to\_string IMPORTING wa          TYPE scarr
                            RETURNING VALUE(text) TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carriers TYPE TABLE OF scarr.
    SELECT \* FROM scarr INTO TABLE @carriers.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
            INIT o = cl\_demo\_output=>new( )
            FOR wa IN carriers
            NEXT o = o->write( to\_string( wa ) ) ).
    out->display( ).  ENDMETHOD.
  METHOD to\_string.
    DO.
      ASSIGN COMPONENT sy-index OF STRUCTURE wa TO FIELD-SYMBOL(<wa>).
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      DESCRIBE FIELD <wa> OUTPUT-LENGTH DATA(olen).
      text = |{ text }{ CONV string( <wa> ) WIDTH = olen + 2 }|.
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, a call of a method to\_string transforms the rows of the internal table carriers after the [FOR expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_itab.htm) to a text string. This string is then passed to the instance method WRITE of an object of the class CL\_DEMO\_OUTPUT. This object is created after INIT and referenced by the local reference variable o. The return value of the method WRITE returns a reference to its own object, which means that the assignment to o does not modify its value but does meet the syntax rule that o must be filled. At the end of processing, the reference to the object in o is assigned to the reference variable out and the content of the internal table written to the object can be displayed using the method DISPLAY.