---
title: "Syntax"
description: |
  ...   ..., data_source(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm)~, ..., col_spec(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm) AS alias, ...  (column_syntax) ... Alterna
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm"
abapFile: "abapselect_list.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "abapselect", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, select\_clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20select_list%2C%20ABAPSELECT_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, select\_list

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_shortref.htm)

Syntax

... \*
  *|* *{*..., [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm)~\*, ..., [col\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm) *\[*AS alias*\]*, ...*}*
  *|* (column\_syntax) ...

Alternatives:

[1\. ... \*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

SELECT list of the [SELECT clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry"). The specifications determine which columns are used to construct the result set of the SELECT statement and how their values are obtained. There are two static variants and one dynamic variant.

The SELECT list actually passed to the database is determined by the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm). If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly and therefore from the result set as well. If there are no name matches, none of the columns are removed from the result set.

Alternative 1   

... \*

Effect

Defines all columns of the result set using \*. The result set is constructed from all columns in the [data sources](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm), in the order specified there. The columns of the result set inherit their names and data types from the data sources. Only a single data object can be specified after [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) and lists of data objects cannot be specified.

Hints

-   If multiple DDIC database tables are specified after FROM, it is not possible to prevent multiple columns from inheriting the same name when \* is specified.
-   For performance reasons, only those columns that are actually needed should be specified. \* should only be specified if the content of all columns is actually needed.
-   If the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) is used, \* can be transformed implicitly to a list of columns for which there is a name match.
-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm), \* cannot be specified as a SELECT list.
-   If [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) is used, \* cannot be specified as a SELECT list.

Example

Reading of all columns with multiple rows.

SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @FINAL(wa).

Alternative 2   

..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...

Variants:

[1\. ... data\_source~\* ...](#!ABAP_VARIANT_1@1@)
[2\. ... col\_spec *\[*AS alias*\]* ...](#!ABAP_VARIANT_2@2@)

Effect

Comma-separated list with

-   data\_source~\* specifying all columns of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) or
-   the definition of individual columns [col\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm) of the result set.

The individual specifications can be combined in any way, with the exception that data\_source~\* cannot be used together with [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm).

Hints

-   Specifying individual blank-separated columns is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_lists_obsolete.htm).
-   When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.

Variant 1   

... data\_source~\* ...

Effect

Defines multiple columns of the result set using data\_source~\*, where data\_source stands for an individual DDIC database table [dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm), a DDIC view [view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm), a non-abstract CDS entity [cds\_entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm), or an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm). The result set contains all columns of the specified data source data\_source at the relevant positions and in the order of the columns. The names of the database sources or their alias names can be specified for data\_source that are also specified as [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) after [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm). A data source can also be specified more than once. If data\_source~\* is used, only a structure can be specified after [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm), no elementary data objects or lists of data objects.

The following special conditions should be noted:

-   If specified, data\_source~\* cannot be specified together with [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm). It can, however, be combined with [window expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm).
-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm), data\_source~\* cannot be specified in the SELECT list.

Hints

-   For performance reasons, only those columns that are actually needed should be specified. data\_source~\* should, therefore, only be specified if the content of all columns is actually needed.
-   The definition of the result set can also be produced by specifying a single data source data\_source~\*. This defines the same result set as specifying \* but can be different if information is specified after [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) and the resulting behavior.
-   If [UNION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) is used, data\_source~\* cannot be specified in the SELECT list.
-   When data\_source~\* is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Example

Reading of the columns of two DDIC database tables in a [join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm) into an internal table. Two columns are read from SCARR and all columns are read from SPFLI.

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

Definition of individual columns of the result set via specified columns [col\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm), which can be defined using any [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm). The order in which the columns are specified is arbitrary and defines the order of the columns in the result set. Only if a column of the type LCHR or LRAW is specified explicitly as [col](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_columns.htm) must the corresponding length field also be listed directly in front of it. Different specifications can be made after [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm), the interaction of which is described by the column specified there.

Hints

-   The obsolete [short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_obsolete.htm) without an explicitly specified target area cannot be used when specifying individual columns. The only exception here is when the aggregation function count( \* ) is used to statically specify nothing, if no alias name and no GROUP BY are specified.
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.

Example

Reading of two columns from a cell in the DDIC database table SCARR.

SELECT SINGLE
       FROM scarr
       FIELDS carrname, url
       WHERE carrid = 'UA'
       INTO @FINAL(result).

Addition   

... AS alias

Effect

The addition AS can be used to define an alias name alias with a maximum of thirty characters in the result set for every specified column col\_spec. The alias name alias must follow the [naming conventions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennaming_conventions.htm) for internal program names and the name table\_line cannot be used. This is checked in [strict mode of the syntax check from ABAP release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm).

An alias name cannot be assigned more than once and should not be the name of a column that does not have any alias names assigned to it. The alias name is used implicitly in the addition [INTO*|*APPENDING CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm). An alias name can only be specified after [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm). A non-unique column name used after ORDER BY causes a syntax error or an exception.

Hints

-   If multiple DDIC database tables are specified after FROM, alternative names can be used when specifying single columns to avoid having multiple columns with the same name.
-   In particular, an alias name cannot be used as the operand of an [SQL expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm).
-   If an alias name is to be named exactly like an addition of the SELECT statement, it may be necessary to prefix it with the [escape character !](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennames_escaping.htm).
-   Outside of the [strict syntax check mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm), it is also possible for an alias name to contain the minus sign (\-), which allows assignments to be made to components of substructures with the addition CORRESPONDING FIELDS OF in the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause.

Example

Display of the flight date and average fare of all customers on Lufthansa flights with flight number 0400. The alternative name avg of the aggregate expression is required for the [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm) clause and the inline declaration using [@DATA(...)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_into_target.htm) in the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clauses.

SELECT fldate, AVG( loccuram as DEC( 31,2 ) ) AS avg
       FROM sbook
       WHERE sbook~carrid = 'LH' AND
             sbook~connid = '0400'
       GROUP BY fldate
       ORDER BY avg DESCENDING
       INTO TABLE @FINAL(itab).
cl\_demo\_output=>display( itab ).

Alternative 3   

... (column\_syntax)

Effect

Instead of the previous two static specifications, a data object column\_syntax in parentheses can be specified. When the statement is executed, this data object either contains the syntax shown in static cases with the exception of [host expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_expression_glosry.htm "Glossary Entry") or is initial.

The data object column\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in column\_syntax is not case-sensitive, as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple rows.

If column\_syntax is initial when the statement is executed, select\_list is set implicitly to \* and all columns are read.

If columns are specified dynamically without the addition SINGLE, the result set is always regarded as having multiple rows.

Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hints

-   If column\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated, and not the header line.
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamic column specifications.
-   In dynamically specified columns, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor has not yet been executed.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomment.htm) as follows:
    
    -   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".
    -   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".
    
    Comment characters placed within literals are, however, part of the literal.
    

Example

All departure or destination cities of Lufthansa flights are produced, depending on whether 'CITYFROM' or 'CITYTO' is specified. A method of the class CL\_ABAP\_DYN\_PRG is used to check whether the input values are valid.

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
FINAL(name) = \`SPFLI-\` && column.
DATA dref TYPE REF TO data.
CREATE DATA dref TYPE (name).
DATA output TYPE TABLE OF string WITH EMPTY KEY.
SELECT DISTINCT (column)
       FROM spfli
       WHERE carrid = 'LH'
       INTO @dref->\*.
  output = VALUE #( BASE output ( |{ dref->\* }| ) ).
ENDSELECT.
cl\_demo\_output=>display( output ).

Example

Comment character in a dynamically specified token. The rows introduced using \* and the content from the character " are ignored.

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

[Remove Columns from the SELECT List](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_except_columns_abexa.htm).

Continue
[SELECT, col\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause_col_spec.htm)
![Example](exa.gif "Example") [SELECT, Remove Columns from the SELECT List](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_except_columns_abexa.htm)