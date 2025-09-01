---
title: "Syntax"
description: |
  ... UUID( ) ... Effect Calls the UUID function as an SQL expression(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The function UUID does not have any parameters and creates a new unique UUID(https://help.sap.com/doc/aba
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_uuid.htm"
abapFile: "abensql_uuid.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abensql", "uuid"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - SQL Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20UUID%20Function%2C%20ABENSQL_UUID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - UUID Function

Syntax

... UUID( ) ...

Effect

Calls the UUID function as an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The function UUID does not have any parameters and creates a new unique [UUID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuuid_glosry.htm "Glossary Entry") of the type [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with the length 16 for each row read from the result set.

Hint

When used, the function UUID applies the [strict syntax check mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm).

Example

Creation of a UUID for each row read from the DDIC database table SCARR. These UUIDs are unique for each row and for each execution of the statement.

SELECT carrid, carrname, uuid( ) AS uuid
       FROM scarr
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).