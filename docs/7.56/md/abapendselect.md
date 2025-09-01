  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) → 

ENDSELECT

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm)

Syntax

ENDSELECT.

Effect

The [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement ENDSELECT closes a loop started using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm).

Example

SELECT loop. The [INTO clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) used here cannot be written to a tabular result, which means that, in multirow result sets, a loop is opened that must be closed using ENDSELECT.

SELECT carrid, connid, SUM( seatsocc ) AS seatsocc
       FROM sflight
       GROUP BY carrid, connid
       ORDER BY carrid, connid
       INTO (@DATA(carrid),@DATA(connid),@DATA(seatsocc)).
  ...
ENDSELECT.