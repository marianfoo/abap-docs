  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) →  [WITH Examples](javascript:call_link\('abenwith_abexas.htm'\)) → 

WITH, Common Table Expressions

This example demonstrates how common table expressions are used in the statement [WITH](javascript:call_link\('abapwith.htm'\)).

Source Code

REPORT demo\_cte.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF struct,
             carrname TYPE scarr-carrname,
             connid   TYPE spfli-connid,
             cityfrom TYPE spfli-cityfrom,
             cityto   TYPE spfli-cityto,
             cnt      TYPE int8,
           END OF struct.
    CLASS-DATA itab TYPE TABLE OF struct WITH EMPTY KEY.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
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
             INTO CORRESPONDING FIELDS of TABLE @itab.
    cl\_demo\_output=>display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A common table expression +conns creates a table of flight connections. A further expression, +cnts, determines the number of entries in the results set of +conns. The closing main query combines the results sets of both common table expressions using a [cross join](javascript:call_link\('abapselect_join.htm'\)). This makes available the number of entries in every row of the results set of the WITH statement. The common table expression +conns is used twice in the WITH statement.