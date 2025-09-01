---
title: "Syntax"
description: |
  ... sql_elem1 && sql_elem2  && sql_elem3 ...  ... Effect String expression in ABAP SQL. The operator && concatenates the character strings in two adjacent operands into a single character string. Elementary SQL expressions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string.htm"
abapFile: "abensql_string.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abensql", "string"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_string%2C%20ABENSQL_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_string

Syntax

... sql\_elem1 && sql\_elem2  *\[*&& sql\_elem3 ... *\]* ...

Effect

String expression in ABAP SQL. The operator && concatenates the character strings in two adjacent operands into a single character string. [Elementary SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_elem.htm) can be specified as the operands sql\_elem1, sql\_elem2 with the following restrictions:

-   A literal must be a non-empty [text field literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_literal_glosry.htm "Glossary Entry") of type c.
-   Host variables and host expressions must be of ABAP type c.
-   Columns of [data sources](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) must have one of the dictionary types [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [CLNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result of the concatenation must be no longer than 255 characters. Trailing blanks are handled as follows:

-   Precisely one blank is respected in host variables declared using CONSTANTS and in text field literals consisting only of blanks.
-   In all other cases, trailing blanks are cut off on the right.

The result has the type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in the resulting length and can be assigned to the ABAP types c and string in accordance with the associated [assignment rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_into_conversion.htm).

If the operand of a string expression has the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full string expression is the null value.

Hints

-   Specifying a string expression always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm). String expressions can only be specified for operand positions for which SQL expressions are possible.
-   Strings can also be concatenated using the SQL function [CONCAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm). The function CONCAT is restricted to concatenating two operands but has the following benefits when compared to the operator &&:
    -   It allows any SQL expressions as operands.
    -   It allows more data types.
    -   It does not apply any special handling to constants and text field literals that contain only blanks.
    -   It allows results to be longer than 255 characters.
-   A string expression cannot be evaluated by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine.htm) and always causes [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry") to be bypassed and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Example

The two columns in a result set are created using a concatenation of character-like columns of the data source and of literals.

SELECT FROM spfli
         INNER JOIN scarr
           ON spfli~carrid = scarr~carrid
       FIELDS spfli~carrid && ' ' && '(' && scarr~carrname && ')'
              AS carrier,
              cityfrom && ' ' && '-' && ' ' && cityto
              AS connection
       ORDER BY spfli~carrid, connid
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Concatenations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_string_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Concatenations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_string_abexa.htm)