---
title: "Syntax"
description: |
  ... func( arg1, arg2 ... ) ... Effect Calls built-in SQL functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_function_glosry.htm 'Glossary Entry') in a SELECT statement(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_v1.htm"
abapFile: "abencds_sql_functions_v1.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "sql", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20sql_functions%2C%20ABENCDS_SQL_FUNCTIONS_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CDS DDL - DDIC-Based View, sql\_functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls built-in [SQL functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_function_glosry.htm "Glossary Entry") in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). For passed arguments arg1, arg2, ..., a built-in SQL function returns a numeric, character-like, or byte-like result. The possible functions are:

-   [Numeric functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm)
-   [String functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)
-   [Coalesce function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v1.htm)

If an argument contains the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result is always the null value (except in the [Coalesce function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v1.htm)). If an argument contains an invalid value or the value range of a result type is exceeded, an exception is raised.

Continue
[CDS DDL - DDIC-Based View, Numeric Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_numeric_v1.htm)
[CDS DDL - DDIC-Based View, String Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v1.htm)
[CDS DDL - DDIC-Based View, coalesce](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_coalesce_expression_v1.htm)