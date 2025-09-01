  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDSELECT%2C%20ABAPENDSELECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDSELECT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_shortref.htm)

Syntax

ENDSELECT.

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement ENDSELECT closes a loop started using [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm).

Example

SELECT loop. The [INTO clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) used here cannot be written to a tabular result, which means that in multirow result sets, a loop is opened that must be closed using ENDSELECT.

SELECT carrid, connid, SUM( seatsocc ) AS seatsocc
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid, connid
       INTO (@FINAL(carrid),@FINAL(connid),@FINAL(seatsocc)).
  ...
ENDSELECT.