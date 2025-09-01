---
title: "Syntax"
description: |
  ...   ..., data_source(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm)~, ..., col_spec(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) AS alias, ...  (column_syntax) ... Alternatives: 1
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm"
abapFile: "abapselect_list.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapselect", "list"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, select\_clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) → 

SELECT, select\_list

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

Syntax

... \*
  *|* *{*..., [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm)~\*, ..., [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) *\[*AS alias*\]*, ...*}*
  *|* (column\_syntax) ...

Alternatives:

[1\. ... \*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

SELECT list of the [SELECT clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry") statement. This information specifies which columns are used to construct the result set of the SELECT statement and how their values are obtained. There are two static variants and one dynamic variant.

The SELECT list actually passed to the database is determined by the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm). If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly and therefore from the result set too. If there are no name matches, none of the columns are removed from the result set.

Alternative 1

... \*

Effect

Defines all columns of the result set using \*. The result set is constructed from all columns in the [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm), in the order given there. The columns of the result set take their names and data types from the data sources. Only a single data object can be specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) and lists of data objects cannot be specified.

Hints

-   If multiple DDIC database tables are specified after FROM, it is not possible to prevent multiple columns from inheriting the same name when \* is specified.

-   For performance reasons, only specify those columns that are actually needed. Specify \* only if the content of all columns is actually needed.

-   If the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) is used, \* can be transformed implicitly to a list of columns for which there is a name match.

-   If [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm) is used, \* cannot be specified as a SELECT list.

-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) with elementary line type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm), \* cannot be specified as a SELECT list.
    

Example

Reads all columns of multiple rows.

SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @DATA(wa).

Alternative 2

..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...

Variants:

[1\. ... data\_source~\* ...](#!ABAP_VARIANT_1@1@)
[2\. ... col\_spec *\[*AS alias*\]* ...](#!ABAP_VARIANT_2@2@)

Effect

Comma-separated list with

-   data\_source~\* specifying all columns of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) or

-   the definition of individual columns [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) of the result set.

This information can be specified in any combination, with the exception that data\_source~\* cannot be used together with [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm).

Hint

When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check. Specifying individual blank-separated columns is [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_lists_obsolete.htm).

Variant 1

... data\_source~\* ...

Effect

Defines multiple columns of the result set using data\_source~\*, where data\_source stands for an individual DDIC database table [dbtab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm), a dictionary view [view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm), a non-abstract CDS entity [cds\_entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm), or an [internal table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm). The result set contains all columns of the specified database source data\_source in the relevant location and in the order of the columns. The names of the database sources or their alias names can be specified for data\_source that are also specified as [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) after [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). A data source can also be specified more than once. If data\_source~\* is used, only a structure can be specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm), no elementary data objects or lists of data objects.

Note the following special conditions:

-   If specified, data\_source~\* cannot be combined with [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm). In contrast, it can be combined with [window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm).

-   If [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion.htm) is used, data\_source~\* cannot be specified in the SELECT list.

-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm) with elementary line type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm), data\_source~\* cannot be specified in the SELECT list.

Hints

-   For performance reasons, only specify those columns that are actually needed. data\_source~\* should, therefore, only be specified if the content of all columns is actually needed.

-   The definition of the result set can also be produced by specifying a single data source data\_source~\*. This defines the same result set as specifying \*, but can be different if information is specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) and due to the resulting behavior.

-   When data\_source~\* is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Reads the columns of two DDIC database tables in a [join](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm) into an internal table. Two columns are read from SCARR and all columns are read from SPFLI.

TYPES BEGIN OF structure.
TYPES carrname TYPE scarr-carrname.
INCLUDE TYPE spfli AS spfli.
TYPES url TYPE scarr-url.
TYPES END OF structure.
DATA itab TYPE STANDARD TABLE OF structure WITH EMPTY KEY.
SELECT scarr~carrname, spfli~\*, scarr~url
       FROM scarr INNER JOIN spfli ON scarr~carrid = spfli~carrid
       INTO TABLE @itab.
cl\_demo\_output=>display( itab ).

Variant 2

... col\_spec *\[*AS alias*\]* ...

Addition:

[... AS alias](#!ABAP_ONE_ADD@1@)

Effect

Definition of individual columns of the result set via specified columns [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm), which can be defined using any [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm). The order in which the columns are specified is free and defines the order of the columns in the result set. Only if a column of the type LCHR or LRAW is specified explicitly as [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm), does the corresponding length field also have to be specified directly before it. Various information can be specified after [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm), and the interaction of this information is described by the column specified there.

Hints

-   The obsolete [short form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_obsolete.htm) without an explicitly specified target area cannot be used when specifying individual columns. The only exception here is when the aggregation function count( \* ) is used to statically specify "nothing", if no alias name and no GROUP BY are specified.

-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    

Example

Reads two columns from a cell in the DDIC database table SCARR

SELECT SINGLE
       FROM scarr
       FIELDS carrname, url
       WHERE carrid = 'UA'
       INTO @DATA(result).

Addition

... AS alias

Effect

The addition AS can be used to define an alias name alias (with a maximum of thirty characters) in the result set for every specified column col\_spec. The alias name alias must follow the [naming conventions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennaming_conventions.htm) for internal program names and the name table\_line cannot be used. This is checked in [strict mode of the syntax check from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

An alias name cannot be assigned more than once. The name of a column that does not have any alias names assigned to it should also not be used. The alias name is used implicitly in the addition [INTO*|*APPENDING CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm). An alias name can only be specified after [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm). A non-unique column name used after ORDER BY causes a syntax error or an exception.

Hints

-   If multiple DDIC database tables are specified after FROM, alternative names can be used when specifying single columns to avoid having multiple columns with the same name.

-   In particular, an alias name cannot be used as the operand of an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm).

-   If an alias name matches an addition of the SELECT statement exactly, it may be necessary to prefix it with the [escape character !](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennames_escaping.htm).

-   Outside of the [strict syntax check mode from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm), it is also possible for an alias name to contain the minus sign (\-), which allows assignments to be made to component of substructures with the addition CORRESPONDING FIELDS OF in the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause.
    

Example

Displays the flight date and average fare of all customers on Lufthansa flights with flight number 0400. The alternative name avg of the aggregate expression is required for the [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) clause and the inline declaration using [@DATA(...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_into_target.htm) in the [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clauses.

SELECT fldate, AVG( loccuram as DEC( 31,2 ) ) AS avg
       FROM sbook
       WHERE sbook~carrid = 'LH' AND
             sbook~connid = '0400'
       GROUP BY fldate
       ORDER BY avg DESCENDING
       INTO TABLE @DATA(itab).
cl\_demo\_output=>display( itab ).

Alternative 3

... (column\_syntax)

Effect

Instead of the previous two static specifications, a data object column\_syntax in parentheses can be specified. When the statement is executed, this data object either contains the syntax shown in static cases (with the exception of [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_expression_glosry.htm "Glossary Entry")) or is initial.

The data object column\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like line type. The syntax in column\_syntax is not case-sensitive (as in the static syntax). When an internal table is specified, the syntax can be distributed across multiple rows.

If column\_syntax is initial when the statement is executed, select\_list is set implicitly to \* and all columns are read.

If columns are specified dynamically without the addition SINGLE, the result set is always regarded as having multiple rows.

Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or masked before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hints

-   If column\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated, and not the header line.

-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.

-   In dynamically specified columns, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor has not yet been executed.

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

Example

Produces all departure or destination cities of Lufthansa flights, depending on whether 'CITYFROM' or 'CITYTO' is specified. A method of the class CL\_ABAP\_DYN\_PRG is used to check whether the input values are valid.

DATA column TYPE c LENGTH 16 VALUE 'cityfrom'.
cl\_demo\_input=>request( CHANGING field = column ).
TRY.
    column =
      cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
        val = to\_upper( column )
        whitelist = VALUE string\_hashed\_table( ( \`CITYFROM\` )
                                               ( \`CITYTO\` ) ) ).
  CATCH cx\_abap\_not\_in\_whitelist.
    cl\_demo\_output=>display( 'Not allowed' ).
    LEAVE PROGRAM.
ENDTRY.
DATA(name) = \`SPFLI-\` && column.
DATA dref TYPE REF TO data.
CREATE DATA dref TYPE (name).
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
DATA output TYPE TABLE OF string WITH EMPTY KEY.
SELECT DISTINCT (column)
       FROM spfli
       WHERE carrid = 'LH'
       INTO @<fs>.
  output = VALUE #( BASE output ( |{ <fs> }| ) ).
ENDSELECT.
cl\_demo\_output=>display( output ).

Example

Comment character in a dynamically specified token. The lines introduced using \* and the content from the character " are ignored.

DATA: itab    TYPE TABLE OF scarr,
      columns TYPE TABLE OF string.
columns = VALUE #( ( \`\* Comment\` )
                  ( \`carrid, "comment\` )
                  ( \`\* Comment\` )
                  ( \`carrname "comment\` ) ).
SELECT (columns)
       FROM scarr
       INTO CORRESPONDING FIELDS OF TABLE @itab.
cl\_demo\_output=>display( itab ).

Executable Example

[SELECT, Dynamic Token Specification](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_sql_abexa.htm)

Continue
[SELECT, col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm)