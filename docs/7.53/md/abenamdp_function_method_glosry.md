---
title: "AMDP Function Implementation"
description: |
  AMDP method(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm 'Glossary Entry') with return value(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreturn_value_glosry.htm 'Glossary Entry') indicated by BY DATABASE FUNCTION(https://help.sap.com/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_method_glosry.htm"
abapFile: "abenamdp_function_method_glosry.htm"
keywords: ["do", "try", "method", "class", "data", "abenamdp", "function", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

AMDP Function Implementation

[AMDP method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") with [return value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreturn_value_glosry.htm "Glossary Entry") indicated by [BY DATABASE FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm) in the [implementation part](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenimplementation_part_glosry.htm "Glossary Entry") of the [class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_glosry.htm "Glossary Entry"). AMDP functions are implemented in an [AMDP function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_glosry.htm "Glossary Entry") implementation. An AMDP function implementation for an [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry")[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_scalar_function_glosry.htm "Glossary Entry") scalar function can be called in ABAP programs in the same way as a regular [functional method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_method_glosry.htm "Glossary Entry"). An AMDP function implementation for an [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry")[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") table function, on the other hand, is generally used to implement a [CDS table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_table_function_glosry.htm "Glossary Entry"). It can be used as the data source of [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") read statements using the [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), but it cannot be called in ABAP programs. See also [AMDP procedure implementation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_function_methods.htm)