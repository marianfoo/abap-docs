  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, abap\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_additions.htm) →  [SELECT, UP TO, OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Restriction%20of%20the%20Rows%20in%20the%20Result%20Set%2C%20ABENSELECT_UP_TO_OFFSET_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

SELECT, Restriction of the Rows in the Result Set

This example demonstrates the additions [UP TO and OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_up\_to\_offset DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      o TYPE int8,
      n TYPE int8.
    METHODS
      setup.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_up\_to\_offset IMPLEMENTATION.
  METHOD main.
    setup( ).
    SELECT FROM demo\_expressions
           FIELDS id, num1 AS number, numlong1 AS result
           ORDER BY id, num1
           INTO TABLE @FINAL(itab)
           OFFSET @o
           UP TO @n ROWS.
    out->write( itab ).
    DELETE FROM demo\_expressions.
  ENDMETHOD.
  METHOD setup.
    cl\_demo\_input=>new(
       )->add\_field( CHANGING field = o
       )->request(   CHANGING field = n ).
    IF NOT ( ( o BETWEEN 0 AND 2147483646 ) AND
             ( n BETWEEN 0 AND 2147483646 ) ).
      out->write(
        \`Input not in allowed interval!\` ).
      RETURN.
    ENDIF.
    DELETE FROM demo\_expressions.
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    DO strlen( abcde ) TIMES.
      INSERT demo\_expressions FROM @(
        VALUE #( id       = substring( val = abcde
                                       off = sy-index - 1
                                       len = 1 )
                 num1     = sy-index
                 numlong1 = ipow( base = 2 exp = sy-index ) ) ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

An offset and a maximum number of rows can be entered for the result set of a SELECT statement.