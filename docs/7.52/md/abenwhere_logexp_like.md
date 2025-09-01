  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - LIKE

Syntax

... operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]* ...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

This relational expression is true if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand1. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

-   The following can be specified for operand2:

-   Literals

-   [Host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) whose name is prefixed with the escape character @.

The data type of operand1 can be one of the [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, NUMC, CLNT, LANG, DATS, TIMS, ACCP, CUKY, UNIT, or SSTRING. The data type of operand2 must be [c](javascript:call_link\('abenbuiltin_types_character.htm'\)) or [string](javascript:call_link\('abenbuiltin_types_character.htm'\)). The content of operand2 should match the data type of operand1 in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is also checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

A pattern in operand2 is defined using the following wildcard characters:

-   "%" is any character string (including an empty string)

-   "\_" is any character

The pattern is case-sensitive. Trailing blanks in operand2 are ignored. This also applies in particular to operands of the type string with trailing blanks that are otherwise respected in ABAP.

If the pattern in operand2 consists of precisely one "%" character, the evaluation of the condition in the database interface is optimized so that the condition is not passed to the database and that, instead, operand1 LIKE '%' is always true regardless of the content of operand1 and operand1 NOT LIKE '%' is always false.

Notes

-   The wildcard characters "\_" and "%" are used as in standard SQL. Elsewhere in ABAP, the wildcard characters "+" and "\*" are used in similar relational expressions, in particular when [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") are used.

-   It is not usually practical to define patterns in operand2 without wildcard characters. Instead, it is best to perform a comparison using [\=](javascript:call_link\('abenwhere_logexp_compare.htm'\)).

-   Do not use patterns that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.

-   Due to Open SQL-specific optimization, operand1 LIKE '%' is also true if the operand operand1 contains [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   No columns and no [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) can be specified here on the right side.

-   The special character-like types [n](javascript:call_link\('abenbuiltin_types_character.htm'\)), [d](javascript:call_link\('abenbuiltin_types_character.htm'\)), and [t](javascript:call_link\('abenbuiltin_types_character.htm'\)) cannot be used on the right side, since the wildcard characters "\_" and "%" required for patterns are invalid content for these types.

Example

Full text search in a table with text columns.

DATA srch\_str TYPE string.
cl\_demo\_input=>request( CHANGING field = srch\_str ).
IF srch\_str IS INITIAL.
  RETURN.
ENDIF.
srch\_str = '%' && srch\_str && '%'.
SELECT \*
       FROM doktl
       WHERE id      = 'SD'      AND
             object  LIKE 'AB%'  AND
             langu   = @sy-langu AND
             typ     = 'E'       AND
             doktext LIKE @srch\_str
       INTO TABLE @DATA(text\_tab)
       UP TO 100 ROWS.
IF sy-subrc = 0.
  cl\_demo\_output=>display( text\_tab ).
ENDIF.

Example

Pattern synchronization for a numeric column of the table DEMO\_EXPRESSIONS. A [CAST expression](javascript:call_link\('abensql_cast.htm'\)) is used here to create the required character-like data type.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @(
  VALUE #( ( id = 'X' num1 = 111 )
           ( id = 'Y' num1 = 222 )
           ( id = 'Z' num1 = 333 ) ) ).
SELECT FROM demo\_expressions
       FIELDS id, num1
       WHERE CAST( num1 AS CHAR ) LIKE '2%'
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Addition

... ESCAPE esc.

Effect

The addition ESCAPE can be used to define a single-character [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry"). esc expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") [character-like](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") data object with the length 1 containing the escape character. A literal or a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) prefixed with @ can be specified. In the pattern in operand2, the escape character in esc may only be placed before a wildcard character or before the escape character itself. In this case, these lose their special meaning.

If an escape character in operand2 is not placed in front of a valid character, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. The addition ESCAPE cannot be used when reading [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry").

Notes

-   The character # is recommended for the escape character esc.

-   One of the wildcard characters "\_" and "%" can be specified as an escape character esc, but is not recommended for reasons of readability.

-   If the pattern in operand2 is created dynamically or comes from outside of the program, care must be taken that any escape characters it contains are not placed in front of characters other than "\_", "%", or the escape character itself. To prevent an exception, escape characters that are part of the patter must be escaped using themselves before being used.

-   In the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05, the escape character @ must be before an esc that is not specified as a literal.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...