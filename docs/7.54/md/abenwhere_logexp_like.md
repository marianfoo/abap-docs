---
title: "Syntax"
description: |
  ... operand1 NOT LIKE operand2 ESCAPE esc ... Addition: ... ESCAPE esc(#!ABAP_ONE_ADD@1@) Effect This relational expression is true if the value of the operand operand1 matches (does not match) the pattern in the operand operand2. -   The following applies to operand1: -   SQL exp
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_like.htm"
abapFile: "abenwhere_logexp_like.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "types", "abenwhere", "logexp", "like"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Conditions sql\_cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp.htm) → 

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cond_shortref.htm)

sql\_cond - LIKE

Syntax

... operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]* ...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

This relational expression is true if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.

-   The following applies to operand1:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) except for [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm) can be specified.

-   The data type of can be one of the [dictionary types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) CHAR, NUMC, CLNT, LANG, DATS, TIMS, ACCP, CUKY, UNIT, or SSTRING.

-   In a [HAVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) clause, [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") can also be used.

-   The following applies to operand2:

-   [Literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_host_literals.htm) and [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) can be specified.

-   The data type of must be [c](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) or [string](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm).

-   Any trailing blanks are ignored by the pattern, even in the data type string.

-   The content can be a maximum of twice the number of characters in the length of operand1, but no more than 1333 characters. [Character literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_literal_glosry.htm "Glossary Entry") and [constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstant_glosry.htm "Glossary Entry"), however, respect any trailing blanks and a syntax error occurs if this rule is broken. All other data objects ignore any trailing blanks and a runtime error occurs if this rule is broken.

-   The content must match the data type of operand1 in accordance with the rules for [lossless assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). This is checked by the [strict modes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP08 and can raise an exception .

A pattern in operand2 is defined using the following wildcard characters:

-   "%" is any character string (including an empty string)

-   "\_” stands for any character.

The pattern is case-sensitive. If the pattern in operand2 consists of precisely one "%" character, the evaluation of the condition in the database interface is optimized so that the condition is not passed to the database and that, instead, operand1 LIKE '%' is always true regardless of the content of operand1 and operand1 NOT LIKE '%' is always false.

Notes

-   The wildcard characters "\_" and "%" are used as in standard SQL. Elsewhere in ABAP, the wildcard characters "+" and "\*" are used in similar relational expressions, in particular when [ranges table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenranges_table_glosry.htm "Glossary Entry") are used.

-   It is not usually practical to define patterns in operand2 without wildcard characters. Instead, it is best to perform a comparison using [\=](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare.htm).

-   Do not use patterns that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.

-   Due to ABAP SQL-specific optimization, operand1 LIKE '%' is also true if the operand operand1 contains [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry").

-   No columns [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) and no [host expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_expressions.htm) can be specified here on the right side.

-   The trailing blanks in operand2 can also be ignored for the data type string, which is a different property from all other operand positions in ABAP.

-   The special character-like types [n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm), [d](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm), and [t](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) cannot be used on the right side, since the wildcard characters "\_" and "%" required for patterns are invalid content for these types.

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

Pattern synchronization for a numeric column of the table DEMO\_EXPRESSIONS. A [CAST expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_cast.htm) is used here to create the required character-like data type.

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

The addition ESCAPE can be used to define a single-character [escape character](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_character_glosry.htm "Glossary Entry"). esc expects a [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry") [character-like](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") data object with the length 1 containing the escape character. A [literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_host_literals.htm) or a [host variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) can be specified. In the pattern in operand2, the escape character in esc may only be placed before a wildcard character or before the escape character itself. In this case, these lose their special meaning.

If an escape character in operand2 is not placed in front of a valid character, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

Notes

-   The character # is recommended for the escape character esc.

-   One of the wildcard characters "\_" and "%" can be specified as an escape character esc, but is not recommended for reasons of readability.

-   If the pattern in operand2 is created dynamically or comes from outside of the program, care must be taken that any escape characters it contains are not placed in front of characters other than "\_", "%", or the escape character itself. To prevent an exception, escape characters that are part of the patter must be escaped using themselves before being used.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...