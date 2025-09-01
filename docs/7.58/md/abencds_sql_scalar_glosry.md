---
title: "SQL-based scalar function"
description: |
  CDS scalar function(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm 'Glossary Entry') that is evaluated by an SQL environment. SQL-based scalar functions can be used in CDS view entities(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/aben
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_glosry.htm"
abapFile: "abencds_sql_scalar_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abencds", "sql", "scalar", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL-based%20scalar%20function%2C%20ABENCDS_SQL_SCALAR_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SQL-based scalar function

[CDS scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_function_glosry.htm "Glossary Entry") that is evaluated by an SQL environment. SQL-based scalar functions can be used in [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in operand positions that expect scalar values.

SQL-based scalar functions can be [user-defined functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_func_glosry.htm "Glossary Entry") or [system functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_system_func_glosry.htm "Glossary Entry").

A CDS scalar function consists of three development objects:

-   A [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using [DEFINE SCALAR FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_scalar_function.htm) in a [CDS data definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_definition_glosry.htm "Glossary Entry").
-   A [scalar function implementation reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_scalar_func_impl_ref.htm) that binds the scalar function to the SQL environment and to an [AMDP function implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm "Glossary Entry").
-   An [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") that implements the scalar function as [database function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_function_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm)