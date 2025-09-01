  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

ABAP SQL - literal

Syntax

... *{* *\[*+*|*\-*\]*n*\[*n*\[*n*\[*...*\]**\]**\]*
    *|* 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` *}* ...

Effect

Appropriate [ABAP literals](javascript:call_link\('abenliteral.htm'\)) can also be specified in reading positions of ABAP SQL statements where [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) are possible. Literals are usually handled like host variables. Literals are not, however, prefixed with the escape character @. The [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") can be used in ABAP SQL. The following applies, depending on the operand position:

-   If a literal is specified in an operand position in which it is handled like an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)), the corresponding rules apply and the literal is mapped to a dictionary type and evaluated accordingly on the database.

-   If a literal is specified in an operand position in which it is not handled like an SQL expression, a [lossless](javascript:call_link\('abapmove_exact.htm'\)) conversion to the data type required in the operand position must be possible. Non-matching literals produce, depending on the [syntax check mode](javascript:call_link\('abenopensql_strict_modes.htm'\)), syntax warnings or syntax errors.

Notes

-   [String literals](javascript:call_link\('abenstring_literal_glosry.htm'\) "Glossary Entry") are possible only in operand positions in which literals cannot be handled as elementary SQL expressions.

-   In some operand positions in which literals are allowed and [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) are prohibited, a literal an still be specified with the syntax @( literal ) and is handled as a literal and not as an expression.

Example

Reads data from the database table SPFLI using ABAP SQL. The rows in question are specified in the WHERE condition. After UP TO, a numeric literal specifies the maximum number of rows to read.

SELECT FROM spfli
       FIELDS 'Lufthansa' AS name,
              cityfrom,
              cityto
       WHERE carrid = 'LH'  AND
             countryfr = 'DE'
       INTO TABLE @DATA(wa)
       UP TO 10 ROWS.