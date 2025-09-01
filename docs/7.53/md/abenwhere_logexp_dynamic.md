---
title: "Syntax"
description: |
  ... (cond_syntax) ... Effect A logical expression can be specified dynamically as a parenthesized data object cond_syntax that contains the syntax of a logical expression sql_cond(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) valid here or is initial when the
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm"
abapFile: "abenwhere_logexp_dynamic.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abenwhere", "logexp", "dynamic"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) → 

sql\_cond - (cond\_syntax)

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)

Syntax

... (cond\_syntax) ...

Effect

A logical expression can be specified dynamically as a parenthesized data object cond\_syntax that contains the syntax of a logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) valid here or is initial when the statement is executed. The result of the logical expression (cond\_syntax) is determined by the result of the contained logical expression. If cond\_syntax is initial when the statement is executed, the logical expression is true.

The data object cond\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in cond\_syntax is not case-sensitive (as in the static syntax). When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

The logical expression in cond\_syntax can be joined using AND or OR or negated using NOT and a dynamic logical expression (cond\_syntax) can be specified as a single relational expression of a composite logical expression. [Host expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_expression_glosry.htm "Glossary Entry") are not allowed in dynamic logical expressions.

If a dynamic SQL condition (cond\_syntax) is used for a read, the content of cond\_syntax is evaluated once for each [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). Any changes made to the content of cond\_syntax in a SELECT loop or WITH loop are ignored by the logical expression.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm).

Notes

-   It is also possible to evaluate an internal table specified after the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) of a [main query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmainquery_glosry.htm "Glossary Entry") in a logical expression.

-   It is possible to check a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") in a dynamic logical expression.

-   If cond\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated, and not the header line.

-   Dynamic logic expressions can also be created interactively using [dynamic selections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfree_selections.htm).

-   When a condition is specified dynamically, the syntax check can take place only at runtime. Therefore, specifying a logical expression at runtime needs more execution time than a corresponding expression specified in the program text.

-   The data objects specified in a dynamic condition should be declared in the same context, if possible, since searches in higher contexts at runtime are more unwieldy.

-   The class CL\_ABAP\_DYN\_PRG contains methods that make it possible to create correct and secure dynamic SQL conditions.

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

-   In dynamic SQL conditions, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.

-   When a [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry") is specified dynamically, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Example

Creates a dynamic comparison from user input. In the case of incorrect syntax or incorrect semantics, exceptions are raised that are handled using the common superclass. Any [SQL injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm "Glossary Entry") are prevented by checks made on the entered column name. If this were not the case, a user could, for example, enter "CARRID <> value OR CARRID" in the field column, producing a condition "CARRID <> value OR CARRID = value", which would be true regardless of the entry made in the field value.

DATA: column TYPE c LENGTH 30,
      value  TYPE c LENGTH 30.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column
  )->add\_field( CHANGING field = value )->request( ).
TRY.
    cl\_abap\_dyn\_prg=>check\_column\_name( column ).
  CATCH cx\_abap\_invalid\_name.
    cl\_demo\_output=>display( 'Invalid column name' ).
    RETURN.
ENDTRY.
DATA(cond\_syntax) = column &&  \` = @value\`.
TRY.
    SELECT \*
           FROM spfli
           WHERE (cond\_syntax)
           INTO TABLE @DATA(spfli\_tab).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( \`Wrong WHERE condition!\` ).
ENDTRY.

Example

Creating a dynamic WHERE condition by chaining user input as shown below is even more risky than the previous example. Any [SQL injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm "Glossary Entry") must be prevented by transforming quotation marks in the entry value. A user can, for example, enter "CARRID" in column and "LH' OR CARRID <> 'LH" in value, which would produce the condition "CARRID = 'LH' OR CARRID <> 'LH'" (always true) if the quotation marks were not transformed. Once applied, the method QUOTE of the class CL\_ABAP\_DYN\_PRG, which also adds quotation marks at the beginning and end, produces the condition "CARRID = 'LH'' OR CARRID <> ''LH'". The handling of consecutive quotation marks in [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuntyped_character_literals.htm) results in the column CARRID being compared precisely with the entered value, making the result of the condition always false.

DATA: column TYPE c LENGTH 30,
      value  TYPE c LENGTH 30.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = column
  )->add\_field( CHANGING field = value )->request( ).
TRY.
    cl\_abap\_dyn\_prg=>check\_column\_name( column ).
  CATCH cx\_abap\_invalid\_name.
    cl\_demo\_output=>display( 'Invalid column name' ).
    RETURN.
ENDTRY.
DATA(cond\_syntax) = column && \` = \` && cl\_abap\_dyn\_prg=>quote( value ).
TRY.
    SELECT \*
           FROM spfli
           WHERE (cond\_syntax)
           INTO TABLE @DATA(spfli\_tab).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( \`Wrong WHERE condition!\` ).
ENDTRY.