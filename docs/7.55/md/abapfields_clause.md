  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) → 

SELECT, FIELDS

Syntax

... FIELDS [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) ...

Effect

The addition FIELDS must prefix the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry"), if this clause is listed after the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). If the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) is listed in front of the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm), then FIELDS cannot be specified.

Example

Two SELECT statements with identical values and different arrangements of the SELECT and FROM clauses.

SELECT FROM scarr
       FIELDS carrid, carrname
       ORDER BY carrid
       INTO TABLE @DATA(result1).
SELECT carrid, carrname
       FROM scarr
       ORDER BY carrid
       INTO TABLE @DATA(result2).
ASSERT result1 = result2.