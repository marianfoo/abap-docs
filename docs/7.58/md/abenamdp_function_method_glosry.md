---
title: "AMDP function Implementation"
description: |
  AMDP method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm 'Glossary Entry') with return value(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm 'Glossary Entry') that is indicated by BY DATABASE FUNCTION(https://help.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_method_glosry.htm"
abapFile: "abenamdp_function_method_glosry.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenamdp", "function", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20function%20Implementation%2C%20ABENAMDP_FUNCTION_METHOD_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP function Implementation

[AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") with [return value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") that is indicated by [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod_by_db_proc.htm) in the [implementation part](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of the [class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_glosry.htm "Glossary Entry"). AMDP functions are implemented in an [AMDP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_glosry.htm "Glossary Entry") implementation. An AMDP function implementation for an [AMDP scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") can be called in ABAP programs like a regular [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry"). An AMDP function implementation for an [AMDP table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_table_function_glosry.htm "Glossary Entry"), on the other hand, is generally used to implement a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry"). It can be used as a data source of [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") read statements using the [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"), but cannot be called in ABAP programs. See also [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_function_methods.htm)