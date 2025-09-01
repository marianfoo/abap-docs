---
title: "DDIC - SQL Functions"
description: |
  The following sections describe the built-in SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm '
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions.htm"
abapFile: "abensql_functions.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abensql", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%2C%20ABENSQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions

The following sections describe the built-in SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry").

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_numeric.htm)
-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_string.htm)
-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_null.htm)
-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_uuid.htm)

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_v2.htm), and [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_functions.htm).

Hint

[Certain SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_expr.htm) can be calculated by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"). If any other SQL expressions are used, [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[DDIC - SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_numeric.htm)
[DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_string.htm)
[DDIC - SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_null.htm)
[DDIC - SQL Functions for UUIDs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_functions_uuid.htm)