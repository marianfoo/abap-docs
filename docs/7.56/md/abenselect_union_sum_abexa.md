  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm) →  [UNION, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunion_abexas.htm) → 

SELECT, Union with Aggregate Expression

This example demonstrates how a union is created across a table using an aggregate expression.

Source Code

REPORT demo\_select\_union\_sum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA carrid TYPE sflight-carrid VALUE 'AA'.
    cl\_demo\_input=>request( CHANGING field = carrid ).
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
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm) is used to create the union of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights for a carrier and the second SELECT statement aggregates the flights by connection, adding the number of occupied seats. A [CAST expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cast.htm) is used to insert a column for the flight date fldate from the first result set with a suitable data type in the second result set. A comment indicates how this is also possible using a [host expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_expressions.htm) in this case. A further column mark is filled with literals to make realistic sorts possible. The entire result contains the aggregated rows located below the associated rows of the first result set and are flagged with "X".