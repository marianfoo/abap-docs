  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - LIKE

Syntax

... operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]* ...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

This relational expression is true if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.

-   The following applies to operand1:
    -   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
    -   The data type of can be one of the character-like [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, NUMC, CLNT, LANG, DATS, TIMS, ACCP, CUKY, UNIT, or SSTRING.
    -   In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.
-   The following applies to operand2:
    -   [Literals](javascript:call_link\('abenabap_sql_literals.htm'\)) and [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) can be specified.
    -   The data type must be [c](javascript:call_link\('abenbuiltin_types_character.htm'\)) or [string](javascript:call_link\('abenbuiltin_types_character.htm'\)).
    -   Any trailing blanks are ignored by the pattern, even in the data type string.
    -   The content can be a maximum of twice the number of characters in the length of operand1, but no more than 1333 characters. [Character literals](javascript:call_link\('abencharacter_literal_glosry.htm'\) "Glossary Entry") and [constants](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry"), however, respect any trailing blanks and a syntax error occurs if this rule is broken. All other data objects ignore trailing blanks and a runtime error occurs if this rule is broken.
    -   The content of untyped literals and host variables must match the data type of operand1 in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

A pattern in operand2 is defined using the following wildcard characters:

-   "%" is any character string, including an empty string
-   "\_" stands for any character.

The pattern is case-sensitive. If the pattern in operand2 consists of exactly one "%" character, the evaluation of the condition in the database interface is optimized so that the condition is not passed to the database and operand1 LIKE '%' is always true regardless of the content of operand1 and operand1 NOT LIKE '%' is always false instead.

Hints

-   The wildcard characters "\_" and "%" are used as in standard SQL. Elsewhere in ABAP, the wildcard characters "+" and "\*" are used in similar relational expressions, in particular when [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") are used.
-   It is not usually beneficial to define patterns in operand2 without wildcard characters. Instead, it is best to perform a comparison using [\=](javascript:call_link\('abenwhere_logexp_compare.htm'\)).
-   Patterns that are closed by wildcard characters should not be used to search for trailing blanks. The semantics of searches of this type depend on the database system that is used and in general do not produce the required result.
-   Due to ABAP SQL-specific optimization, operand1 LIKE '%' is also true if the operand operand1 contains [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").
-   No columns [col](javascript:call_link\('abenabap_sql_columns.htm'\)) and no [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) can be specified here on the right side.
-   That trailing blanks in operand2 are also ignored for the data type string is different to all other operand positions in ABAP.
-   The special character-like types [n](javascript:call_link\('abenbuiltin_types_character.htm'\)), [d](javascript:call_link\('abenbuiltin_types_character.htm'\)), and [t](javascript:call_link\('abenbuiltin_types_character.htm'\)) cannot be used on the right side, since the wildcard characters "\_" and "%" required for patterns are invalid content for these types.
-   The maximum number of characters on the right side is twice the maximum in operand1 because, in theory, each character can be prefixed with an escape character defined using ESCAPE.

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

Pattern comparison for a numeric column of the table DEMO\_EXPRESSIONS. A [CAST expression](javascript:call_link\('abensql_cast.htm'\)) is used here to create the required character-like data type.

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

The addition ESCAPE can be used to define a single-character [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry"). esc expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") [character-like](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") data object with the length 1 containing the escape character. A [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) can be specified. In the pattern in operand2, the escape character in esc may only be placed in front of a wildcard character or the escape character itself. In this case, they lose their special meaning.

If an escape character in operand2 is not placed in front of a valid character, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

Hints

-   The character # is recommended for the escape character esc.
-   One of the wildcard characters "\_" and "%" can be specified as an escape character esc, but is not recommended for reasons of readability.
-   If the pattern in operand2 is created dynamically or comes from outside of the program, it must be ensured that any escape characters it contains are not placed in front of characters other than "\_", "%", or the escape character itself. To prevent the corresponding exception, escape characters that are part of the pattern must be escaped by themselves before being used.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...