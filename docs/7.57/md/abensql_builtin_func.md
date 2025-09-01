---
title: "Syntax"
description: |
  ... sql_func( ... sql_exp ... )(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) ... Effect Calls a built-in function(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) in ABAP SQL. The result is the retu
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_builtin_func.htm"
abapFile: "abensql_builtin_func.htm"
keywords: ["select", "do", "if", "try", "data", "abensql", "builtin", "func"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - sql_func, ABENSQL_BUILTIN_FUNC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

sql\_exp - sql\_func

Syntax

... [sql\_func( ... sql\_exp ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) ...

Effect

Calls a [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) in ABAP SQL. The result is the return value of the function with the associated dictionary type. As a rule, the arguments of the built-in functions cover one or more SQL expressions.

Hints

-   Specifying a built-in function always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm). Built-in functions can only be called in operand positions for which SQL expressions are possible.
-   [Certain built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_expressions.htm) can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If any other functions are used, [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed.

Example

Use of the built-in functions [CONCAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), [CONCAT\_WITH\_SPACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), and [LOWER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm).

SELECT FROM   spfli
       FIELDS CONCAT( CONCAT( LOWER( carrid ), '\_' ),
                              LOWER( CAST( connid AS CHAR ) ) ) AS key,
              CONCAT\_WITH\_SPACE( CONCAT( cityfrom,
                                 ',' ), cityto, 1 ) AS cities
       WHERE carrid = '...'
       INTO TABLE @FINAL(result).

Executable Examples

-   [SQL expressions, arithmetic calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_arith_abexa.htm)
-   [String functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func_abexa.htm)
-   [SQL Expressions, Coalesce Function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_coalesce_abexa.htm)

Continue
[ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm)