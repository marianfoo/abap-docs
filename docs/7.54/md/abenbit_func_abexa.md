  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbinary_functions.htm) → 

Bit function

This example demonstrates how bit-set works.

Source Code

REPORT demo\_bit\_set.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(number) = 1.
    cl\_demo\_input=>request( CHANGING field = number ).
    IF abs( number ) <= 200.
      cl\_demo\_output=>display( CONV xstring( bit-set( number ) ) ).
    ELSE.
      cl\_demo\_output=>display(
       'Number in Example must not exceed 200' ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The output of the program shows how bits are set in a specified place in hexadecimal form.