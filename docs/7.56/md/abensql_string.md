  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_string

Syntax

... sql\_elem1 && sql\_elem2  *\[*&& sql\_elem3 ... *\]* ...

Effect

String expression in ABAP SQL. The operator && concatenates the character strings in two adjacent operand into a single character string. [Elementary SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_elem.htm) can be specified as the operands sql\_elem1, sql\_elem2 with the following restrictions:

-   A literal must be a non-empty [text field literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_field_literal_glosry.htm "Glossary Entry") of type c.
-   Host variables and host expressions must be of ABAP type c.
-   Columns of [data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) must have one of the dictionary types [CHAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CLNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), or [UNIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm).

The result of the concatenation must be no longer than 255 characters. Trailing blanks are handled as follows:

-   Precisely one blank is respected in host variables declared using CONSTANTS and in text field literals consisting only of blanks.
-   In all other cases, trailing blanks are cut off on the right.

The result has the type [CHAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) in the resulting length and can be assigned to the ABAP types c and string in accordance with the associated [assignment rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_into_conversion.htm).

If the operand of a string expression has the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full string expression is the null value.

Hints

-   Specifying a string expression always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm). String expressions can only be specified for operand positions for which SQL expressions are possible.
-   Strings can also be concatenated using the SQL function [CONCAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_string_func.htm). The function CONCAT is restricted to concatenating two operands but has the following benefits when compared to the operator &&:
    -   It allows any SQL expressions as operands.
    -   It allows more data types.
    -   It does not apply any special handling to constants and text field literals that contain only blanks.
    -   It allows results to be longer than 255 characters.
-   A string expression cannot be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffer_glosry.htm "Glossary Entry") and always causes [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") to be bypassed.

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
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL expressions, concatenations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_string_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Concatenations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_string_abexa.htm)