---
title: "SQL Functions for Null Values"
description: |
  The following table shows the SQL functions for null values(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm 'Glossary Entry') that are supported by ABAP CDS(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm 'Glossary Entry') a
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_null.htm"
abapFile: "abensql_functions_null.htm"
keywords: ["do", "try", "data", "types", "abensql", "functions", "null"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions.htm) → 

SQL Functions for Null Values

The following table shows the SQL functions for [null values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry") that are supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

COALESCE( arg1, arg2, ... )

Value of the first argument that does not have a null value.

[x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm)

[x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm)

x

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_coalesce_expression.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_coalesce.htm).