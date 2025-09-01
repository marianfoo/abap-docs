  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [UNION, INTERSECT, EXCEPT](javascript:call_link\('abapunion.htm'\)) →  [UNION, Examples](javascript:call_link\('abenunion_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Union%20with%20Aggregate%20Expression%2C%20ABENSELECT_UNION_SUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

SELECT, Union with Aggregate Expression

This example demonstrates how a union is created across a table using an aggregate expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_union\_sum DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_union\_sum IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrid ).
    SELECT ' ' AS mark, carrid, connid, fldate, seatsocc
           FROM sflight
           WHERE carrid = @( to\_upper( carrid ) )
           UNION SELECT 'X' AS mark,
                        carrid,
                        connid,
                        "@( CONV d( '00000000' ) ) AS fldate,
                        CAST( '00000000' AS DATS ) AS fldate,
                        SUM( seatsocc ) AS seatsocc
                        FROM sflight
                        WHERE carrid = @( to\_upper( carrid ) )
                        GROUP BY carrid, connid
           ORDER BY carrid, connid, mark, fldate, seatsocc
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

[UNION](javascript:call_link\('abapunion.htm'\)) is used to create the union of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights for a carrier and the second SELECT statement aggregates the flights by connection, adding the number of occupied seats. A [CAST expression](javascript:call_link\('abensql_cast.htm'\)) is used to insert a column for the flight date fldate from the first result set with a suitable data type in the second result set. A comment indicates how this is also possible using a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) in this case. A further column mark is filled with literals to make realistic sorts possible. The entire result contains the aggregated rows located below the associated rows of the first result set and are flagged with X.