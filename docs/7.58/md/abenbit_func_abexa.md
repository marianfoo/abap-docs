  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbinary_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20bit_func%20-%20Setting%20Bits%2C%20ABENBIT_FUNC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

bit\_func - Setting Bits

This example demonstrates how bit-set works.

Source Code   

\* Public class definition
CLASS cl\_demo\_bit\_set DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_bit\_set IMPLEMENTATION.
  METHOD main.
    DATA(number) = 1.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
    IF abs( number ) <= 200.
      out->write( CONV xstring( bit-set( number ) ) ).
    ELSE.
      out->write(
       'Number in Example must not exceed 200' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The output of the class shows how bits are set in a specified place in hexadecimal form.