  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20to_mixed%20and%20from_mixed%2C%20ABENSTRING_FUNCTION_MIXED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

string\_func - to\_mixed and from\_mixed

This example demonstrates the string functions [to\_mixed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm) and [from\_mixed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencase_functions.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_to\_from\_mixed DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_to\_from\_mixed IMPLEMENTATION.
  METHOD main.
    DATA:
      original  TYPE c LENGTH 30 VALUE 'ABAP\_DOCU\_START',
      to\_sep    TYPE c LENGTH 1  VALUE '\_',
      to\_case   TYPE c LENGTH 1 VALUE 'a',
      to\_min    TYPE i VALUE 1,
      from\_sep  TYPE c LENGTH 1  VALUE '.',
      from\_case TYPE c LENGTH 1  VALUE 'A',
      from\_min  TYPE i VALUE 5.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = original
     )->add\_line(
     )->add\_field( CHANGING field = to\_sep
     )->add\_field( CHANGING field = to\_case
     )->add\_field( CHANGING field = to\_min
     )->add\_line(
     )->add\_field( CHANGING field = from\_sep
     )->add\_field( CHANGING field = from\_case
     )->add\_field( CHANGING field = from\_min
     )->request( ).
    TRY.
        out->write( |original:   { original }| ).
        FINAL(to\_mixed) = to\_mixed( val  = original
                                   sep  = to\_sep
                                   case = to\_case
                                   min  = to\_min ).
        out->write( |to\_mixed:   { to\_mixed }| ).
        FINAL(from\_mixed) = from\_mixed( val  = to\_mixed
                                       sep  = from\_sep
                                       case = from\_case
                                       min  = from\_min ).
        out->write( |from\_mixed: { from\_mixed }| ).
      CATCH cx\_sy\_strg\_par\_val.
        out->write( 'Invalid parameters' ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The class queries the parameters for the functions to\_mixed and from\_mixed. The result of to\_mixed is processed by from\_mixed.