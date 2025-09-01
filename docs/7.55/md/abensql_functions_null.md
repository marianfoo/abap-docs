---
title: "DDIC - SQL Functions for Null Values"
description: |
  The following table shows the SQL functions for null values(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm 'Glossary Entry') that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_functions_null.htm"
abapFile: "abensql_functions_null.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "null"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_functions.htm) → 

DDIC - SQL Functions for Null Values

The following table shows the SQL functions for [null values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry") that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

Table Buffer

COALESCE

Returns the first non-null value from a specified list.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_coalesce.htm)

x

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_coalesce.htm).