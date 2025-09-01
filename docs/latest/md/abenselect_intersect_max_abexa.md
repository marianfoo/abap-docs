  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) →  [INTERSECT, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintersect_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Intersection%20with%20Aggregate%20Expression%2C%20ABENSELECT_INTERSECT_MAX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

SELECT, Intersection with Aggregate Expression

This example demonstrates how an intersection is created across a table using an aggregate expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_intrsct\_max DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_intrsct\_max IMPLEMENTATION.
  METHOD main.
    SELECT carrid, connid, seatsocc
           FROM sflight
           INTERSECT SELECT carrid,
                            connid,
                            MAX( seatsocc ) AS seatsocc
                            FROM sflight
                            GROUP BY carrid, connid
           ORDER BY carrid, connid, seatsocc
           INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

[INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) is used to create the intersection of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights and the second SELECT statement aggregates the flights by connection, determining the maximum number of occupied seats. The entire result contains the aggregated rows checked against the associated rows of the first result set. Only the connections with the highest seats occupation are shown.