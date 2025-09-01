  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) →  [EXCEPT, Examples](javascript:call_link\('abenexcept_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Difference%20with%20Global%20Temporary%20Table%2C%20ABENSELECT_EXCEPT_MIN_GTT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

SELECT, Difference with Global Temporary Table

This example demonstrates a difference across a table and a global temporary table (GTT).

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_except\_min\_gtt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_except\_min\_gtt IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    INSERT demo\_sflight\_agg FROM (
    SELECT carrid,
           connid,
           CAST( '00000000' AS DATS ) AS fldate,
           MIN( seatsocc ) AS seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           GROUP BY carrid, connid ).
    SELECT carrid, connid, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           EXCEPT SELECT carrid, connid, seatsocc
                         FROM demo\_sflight\_agg
           ORDER BY carrid, connid, seatsocc
           INTO TABLE @FINAL(result).
    DELETE FROM demo\_sflight\_agg.
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

This example has the same result as the executable example for a [difference with aggregate expression](javascript:call_link\('abenselect_except_min_abexa.htm'\)). Here, however, the SELECT statement is split into two ABAP SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") of an [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statement whose result set is written to a [global temporary table (GTT)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
-   [EXCEPT](javascript:call_link\('abapunion.htm'\)) is used to create the difference of the result set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the execution to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.