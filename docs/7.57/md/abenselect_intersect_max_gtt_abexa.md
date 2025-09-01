  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) →  [INTERSECT, Examples](javascript:call_link\('abenintersect_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Intersection with Global Temporary Table, ABENSELECT_INTERSECT_MAX_GTT_ABEXA,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Intersection with Global Temporary Table

This example demonstrates an intersection across a table and a global temporary table (GTT).

Source Code   

REPORT DEMO\_SELECT\_INTERSECT\_MAX\_GTT.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    INSERT demo\_sflight\_agg FROM (
    SELECT carrid,
           connid,
           CAST( '00000000' AS DATS ) AS fldate,
           MAX( seatsocc ) AS seatsocc
           FROM sflight
           GROUP BY carrid, connid ).
    SELECT carrid, connid, seatsocc
           FROM sflight
           INTERSECT SELECT carrid, connid, seatsocc
                        FROM demo\_sflight\_agg
           ORDER BY carrid, connid, seatsocc
           INTO TABLE @FINAL(result).
    DELETE FROM demo\_sflight\_agg.
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example has the same result as the executable example for an [intersection with aggregate expression](javascript:call_link\('abenselect_intersect_max_abexa.htm'\)). Here, however, the SELECT statement is split into two ABAP SQL statements for demonstration purposes:

-   The aggregation is performed in the [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") of an [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statement whose result set is written to a [global temporary table (GTT)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
-   [INTERSECT](javascript:call_link\('abapunion.htm'\)) is used to create the intersection of the result set of a SELECT statement on the table SFLIGHT and a SELECT statement on the GTT.

The GTT must be cleared explicitly before the end of the program to prevent the runtime error COMMIT\_GTT\_ERROR in the next implicit database commit.