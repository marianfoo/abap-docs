---
title: "Syntax"
description: |
  ... func( arg1, arg2 ... ) ... Effect Calls built-in SQL functions(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_function_glosry.htm 'Glossary Entry') in a SELECT statement(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) of
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_v2.htm"
abapFile: "abencds_sql_functions_v2.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "sql", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v2.htm) → 

CDS DDL - CDS View Entity, sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_function_glosry.htm "Glossary Entry") in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm)
-   [String functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm)
-   [Coalesce function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_coalesce_expression_v2.htm)

If an argument contains the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"), the result is always the null value, except in the coalesce function. If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[CDS DDL - CDS View Entity, Numeric Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_numeric_v2.htm)
[CDS DDL - CDS View Entity, String Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_character_v2.htm)
[CDS DDL - CDS View Entity, Coalesce Function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_coalesce_expression_v2.htm)