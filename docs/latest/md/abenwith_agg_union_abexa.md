  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) →  [WITH, Examples](javascript:call_link\('abenwith_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20Aggregation%20for%20Join%20Set%2C%20ABENWITH_AGG_UNION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, Aggregation for Join Set

This example demonstrates how to use [WITH](javascript:call_link\('abapwith.htm'\)) for an aggregation.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_union\_sum\_cte DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_union\_sum\_cte IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
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
             INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This example has the same result as the executable example for a [union with a global temporary table](javascript:call_link\('abenselect_union_sum_gtt_abexa.htm'\)). The source code is almost identical. Here the global temporary table demo\_sflight\_agg has been replaced by a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +agg and both SELECT statements are part of a WITH statement.