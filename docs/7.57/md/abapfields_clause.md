  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FIELDS, ABAPFIELDS_CLAUSE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

SELECT, FIELDS

Syntax

... FIELDS [select\_clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause.htm) ...

Effect

The addition FIELDS must prefix the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry"), if this clause is listed after the [FROM clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm). If the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_clause.htm) is listed in front of the [FROM clause](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm), then FIELDS must not be specified.

Example

Two equivalent SELECT statements and different arrangements of the SELECT and FROM clauses.

SELECT FROM scarr
       FIELDS carrid, carrname
       ORDER BY carrid
       INTO TABLE @FINAL(result1).
SELECT carrid, carrname
       FROM scarr
       ORDER BY carrid
       INTO TABLE @FINAL(result2).
ASSERT result1 = result2.