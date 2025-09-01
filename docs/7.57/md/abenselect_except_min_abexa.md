  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) →  [EXCEPT, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexcept_abexas.htm) → 

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

[EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) is used to create the difference of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights for a carrier and the second SELECT statement aggregates the flights by connection, adding the minimum number of occupied seats. The entire result contains only the non-aggregated rows as they are only available in the first result set.