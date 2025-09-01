  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_string

Syntax

... operand1 && operand2  *\[*&& operand3 ... *\]* ...

Effect

Character string expression in Open SQL. The operator && chains the character strings in two adjacent operand to a single character string. The operands can have the following data types:

-   Dictionary types [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)), [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)), [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)), [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) for columns of [data sources](javascript:call_link\('abapselect_data_source.htm'\)).

-   ABAP type c for host variables and host expressions.

-   Text field literal of type c. Empty [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") cannot be specified.

The operator && can only be used to chain the elementary operands stated above. Any other expressions cannot be chained. The result of the chaining must be no longer than 255 characters.

Trailing blanks are handled as follows:

-   Precisely one blank is respected in host variables declared using CONSTANTS and in text field literals consisting only of blanks.

-   In all other cases, trailing blanks are cut off on the right.

The result has the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) in the resulting length and can be assigned to the ABAP types c and string in accordance with the associated [assignment rule](javascript:call_link\('abenselect_into_conversion.htm'\)).

If the operand of a string expression has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full string expression is the null value.

Note

Strings can also be concatenated using the SQL function [CONCAT](javascript:call_link\('abensql_string_func.htm'\)). The function CONCAT is restricted to concatenations of two operands but has the following benefits when compared to the operator &&:

-   It allows expressions to be used as operands.

-   It allows more data types.

-   It does not apply any special handling to constants and text field literals that contain only blanks.

-   It allows results to be longer than 255 characters.

Example

The two columns in a results set are created using a chaining of character-like columns of the data source and of literals.

SELECT FROM   spfli
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

[SQL Expressions, CASE and &&](javascript:call_link\('abensql_expr_case_string_abexa.htm'\))