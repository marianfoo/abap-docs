---
title: "Syntax"
description: |
  ... NULL ... Effect Special null expression in ABAP SQL. The operand NULL represents the null value(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm 'Glossary Entry'). Null expressions are context-dependent and the type of NULL is determined by the context(htt
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_null.htm"
abapFile: "abensql_null.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "data", "abensql", "null"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - sql_null, ABENSQL_NULL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

sql\_exp - sql\_null

Syntax

... NULL ...

Effect

Special null expression in ABAP SQL. The operand NULL represents the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"). Null expressions are context-dependent and the type of NULL is determined by the [context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobj_context_glosry.htm "Glossary Entry"). Generally, null expressions can be used in operand positions of [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm). Any exception is documented for the respective position.

Hints

-   At any operand position, it must be possible to determine an exact type for NULL. If this is not the case, a syntax error occurs or a catchable exception is raised.
-   The expression NULL must not be confused with the relational expression with the predicate syntax [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_null.htm).

Example

Returns the airline code, flight connection number, null value, and distance of all Lufthansa flights. When passing NULL to the result table, the null value is converted to the initial value.

SELECT FROM spfli
       FIELDS carrid,
              connid,
              CAST( NULL AS INT1 ) AS start,
              distance
       WHERE carrid = 'LH'
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Null Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_null_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Null Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_null_abexa.htm)