  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_string

Syntax

... sql\_elem1 && sql\_elem2  *\[*&& sql\_elem3 ... *\]* ...

Effect

String expression in ABAP SQL. The operator && chains the character strings in two adjacent operand to a single character string. [Elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) can be specified as the operands sql\_elem1, sql\_elem2, with the following restrictions:

-   A literal must be a non-empty [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") of type c.

-   Host variables and host expressions must be of ABAP type c.

-   Columns of [data sources](javascript:call_link\('abapselect_data_source.htm'\)) must have one of the dictionary types [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the chaining must be no longer than 255 characters. Trailing blanks are handled as follows:

-   Precisely one blank is respected in host variables declared using CONSTANTS and in text field literals consisting only of blanks.

-   In all other cases, trailing blanks are cut off on the right.

The result has the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) in the resulting length and can be assigned to the ABAP types c and string in accordance with the associated [assignment rule](javascript:call_link\('abenselect_into_conversion.htm'\)).

If the operand of a string expression has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full string expression is the null value.

Notes

-   Specifying a string expression always means specifying an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). String expressions can only be specified for operand positions for which SQL expressions are possible.

-   Strings can also be concatenated using the SQL function [CONCAT](javascript:call_link\('abensql_string_func.htm'\)). The function CONCAT is restricted to concatenations of two operands but has the following benefits when compared to the operator &&:

-   Any SQL expressions are permitted as operands.

-   It allows more data types.

-   It does not apply any special handling to constants and text field literals that contain only blanks.

-   It allows results to be longer than 255 characters.

-   A string expression cannot be evaluated in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and always causes [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") to be bypassed.

Example

The two columns in a results set are created using a chaining of character-like columns of the data source and of literals.

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

[SQL expressions, chainings](javascript:call_link\('abensql_expr_string_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SQL Expressions, Chainings](javascript:call_link\('abensql_expr_string_abexa.htm'\))