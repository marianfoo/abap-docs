  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) →  [SELECT, UP TO, OFFSET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) → 

SELECT, Restriction of the Rows in the Result Set

This example demonstrates the additions [UP TO and OFFSET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm).

Source Code

REPORT demo\_select\_up\_to\_offset.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      o TYPE int8,
      n TYPE int8.
    CLASS-METHODS
      setup.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    setup( ).
    SELECT FROM demo\_expressions
           FIELDS id, num1 AS number, numlong1 AS result
           ORDER BY id, num1
           INTO TABLE @DATA(itab)
           OFFSET @o
           UP TO @n ROWS.
    cl\_demo\_output=>display( itab ).
    DELETE FROM demo\_expressions.  ENDMETHOD.
  METHOD setup.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = o
       )->request(   CHANGING field = n ).
    IF NOT ( ( o BETWEEN 0 AND 2147483646 ) AND
             ( n BETWEEN 0 AND 2147483646 ) ).
      cl\_demo\_output=>display(
        \`Input not in allowed interval!\` ).
      LEAVE PROGRAM.
    ENDIF.
    DELETE FROM demo\_expressions.
    DO strlen( sy-abcde ) TIMES.
      INSERT demo\_expressions FROM @(
        VALUE #( id       = substring( val = sy-abcde
                                       off = sy-index - 1
                                       len = 1 )
                 num1     = sy-index
                 numlong1 = ipow( base = 2 exp = sy-index ) ) ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An offset and a maximum number of rows can be entered for the result set of a SELECT statement.