---
title: "SELECT - FIELDS"
description: |
  Syntax ... FIELDS select_clause(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) ... Effect The addition FIELDS must prefix the SELECT clause select_clause(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) of a query(https://he
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfields_clause.htm"
abapFile: "abapfields_clause.htm"
keywords: ["select", "do", "if", "try", "data", "abapfields", "clause"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) → 

SELECT - FIELDS

Syntax

... FIELDS [select\_clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) ...

Effect

The addition FIELDS must prefix the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"), if this clause is listed after the [FROM clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm). If the SELECT clause [select\_clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause.htm) is listed in front of the [FROM clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm), then FIELDS cannot be specified.

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