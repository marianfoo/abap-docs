  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm) →  [WITH, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwith_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20Common%20Table%20Expressions%2C%20ABENWITH_CTE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, Common Table Expressions

This example demonstrates how common table expressions are used in the statement [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_cte DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES: BEGIN OF struct,
             carrname TYPE scarr-carrname,
             connid   TYPE spfli-connid,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
             cnt      TYPE int8,
           END OF struct.
    DATA itab TYPE TABLE OF struct WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cte IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    carrid = to\_upper( carrid ).
    WITH
      +conns AS (
        SELECT carrname, connid, cityfrom, cityto
              FROM spfli
                JOIN scarr ON spfli~carrid = scarr~carrid
              WHERE spfli~carrid = @carrid ),
      +cnts AS (
        SELECT COUNT(\*) AS cnt
               FROM +conns )
      SELECT \*
             FROM +cnts
               CROSS JOIN +conns
             ORDER BY carrname, connid
             INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

A common table expression +conns creates a table of flight connections. A further expression, +cnts, determines the number of entries in the result set of +conns. The closing main query combines the result sets of both common table expressions using a [cross join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm). This makes available the number of entries in every row of the result set of the WITH statement. The common table expression +conns is used twice in the WITH statement.