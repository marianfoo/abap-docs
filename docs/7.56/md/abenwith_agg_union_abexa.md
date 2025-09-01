  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) →  [WITH, Examples](javascript:call_link\('abenwith_abexas.htm'\)) → 

WITH, Aggregation for Join Set

This example demonstrates how to use [WITH](javascript:call_link\('abapwith.htm'\)) for an aggregation.

Source Code

REPORT demo\_select\_union\_sum\_cte.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    WITH +agg AS (
      SELECT carrid,
             connid,
             CAST( '00000000' AS DATS ) AS fldate,
             SUM( seatsocc ) AS seatsocc
             FROM sflight
             WHERE carrid = @( to\_upper( carrid ) )
             GROUP BY carrid, connid )
      SELECT ' ' AS mark, carrid, connid, fldate, seatsocc
             FROM sflight
             WHERE carrid = @( to\_upper( carrid ) )
             UNION SELECT 'X' AS mark,
                          carrid, connid, fldate, seatsocc
                          FROM +agg
             ORDER BY carrid, connid, mark, fldate, seatsocc
             INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example has the same result as the executable example for a [union with a global temporary table](javascript:call_link\('abenselect_union_sum_gtt_abexa.htm'\)). The source code is almost identical. Here the global temporary table demo\_sflight\_agg has been replaced by a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +agg and both SELECT statements are part of a WITH statement.