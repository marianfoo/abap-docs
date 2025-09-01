  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) →  [EXCEPT, Examples](javascript:call_link\('abenexcept_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Difference with Aggregate Expression, ABENSELECT_EXCEPT_MIN_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Difference with Aggregate Expression

This example demonstrates how a difference is created across a table using an aggregate expression.

Source Code   

REPORT demo\_select\_except\_min.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
    SELECT carrid, connid, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           EXCEPT SELECT carrid,
                        connid,
                        MIN( seatsocc ) AS seatsocc
                        FROM sflight
                        WHERE carrid = @( to\_upper( carrid ) )
                        GROUP BY carrid, connid
           ORDER BY carrid, connid, seatsocc
           INTO TABLE @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

[EXCEPT](javascript:call_link\('abapunion.htm'\)) is used to create the difference of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights for a carrier and the second SELECT statement aggregates the flights by connection, adding the minimum number of occupied seats. The entire result contains only the non-aggregated rows as they are only available in the first result set.