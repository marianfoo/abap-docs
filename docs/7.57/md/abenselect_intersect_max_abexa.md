---
title: "SELECT, Intersection with Aggregate Expression"
description: |
  This example demonstrates how an intersection is created across a table using an aggregate expression. Source Code REPORT DEMO_SELECT_INTERSECT_MAX. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. SELECT carrid, connid, seatsocc FROM sf
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_intersect_max_abexa.htm"
abapFile: "abenselect_intersect_max_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenselect", "intersect", "max", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) →  [INTERSECT, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintersect_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, Intersection with Aggregate Expression, ABENSELECT_INTERSECT_MAX_ABEXA, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, Intersection with Aggregate Expression

This example demonstrates how an intersection is created across a table using an aggregate expression.

Source Code   

REPORT DEMO\_SELECT\_INTERSECT\_MAX.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

[INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm) is used to create the intersection of the result sets of two SELECT statements for the same DDIC database table. The first SELECT statement reads all flights and the second SELECT statement aggregates the flights by connection, determining the maximum number of occupied seats. The entire result contains the aggregated rows checked against the associated rows of the first result set. Only the connections with the highest seats occupation are shown.