  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - select\_clause](javascript:call_link\('abapselect_clause.htm'\)) → 

SELECT - select\_list

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... \*
  *|* *{*..., [data\_source](javascript:call_link\('abapselect_data_source.htm'\))~\*, ..., [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)) *\[*AS alias*\]*, ...*}*
  *|* (column\_syntax) ...

Alternatives:

[1\. ... \*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

SELECT list of the [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") statement. This information specifies which columns are used to construct the results set of the SELECT statement and how their values are obtained. There are two static variants and one dynamic variant.

The SELECT list actually passed to the database is determined by the addition [INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)). If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly and therefore from the results set too. If there are no name matches, none of the columns are removed from the results set.

Alternative 1

... \*

Effect

Defines all columns of the results set using \*. The results set is constructed from all columns in the [data sources](javascript:call_link\('abapselect_data_source.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)), in the order given there. The columns of the results set take their names and data types from the data sources. Only a single data object can be specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)) and lists of data objects cannot be specified.

Notes

-   If multiple database tables are specified after FROM, it is not possible to prevent multiple columns from inheriting the same name when \* is specified.
    
-   For performance reasons, only specify those columns that are actually needed. Specify \* only if the content of all columns is actually needed.
    
-   If the addition [INTO CORRESPONDING](javascript:call_link\('abapinto_clause.htm'\)) is used, \* can be transformed implicitly to a list of columns for which there is a name match.
    
-   If [UNION](javascript:call_link\('abapunion.htm'\)) is used, \* cannot be specified as a SELECT list.
    
-   When an internal table [@itab](javascript:call_link\('abapselect_data_source.htm'\)) with elementary row type is accessed in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") after [WITH](javascript:call_link\('abapwith.htm'\)), \* cannot be specified as a SELECT list.
    

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

-   data\_source~\* specifying all columns of a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) or
    
-   specifying individual columns [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)).
    

This information can be specified in any combination, with the exception that data\_source~\* cannot be used together with [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)).

Note

When a comma-separated list is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check. Specifying individual blank-separated columns is [obsolete](javascript:call_link\('abenopen_sql_lists_obsolete.htm'\)).

Variant 1

... data\_source~\* ...

Effect

Defines multiple columns of the results set using data\_source~\*, where data\_source stands for an individual database table [dbtab](javascript:call_link\('abapselect_data_source.htm'\)), a classic view [view](javascript:call_link\('abapselect_data_source.htm'\)), a non-abstract CDS entity [cds\_entity](javascript:call_link\('abapselect_data_source.htm'\)), or an [internal table](javascript:call_link\('abapselect_itab.htm'\)). The results set contains all columns of the specified database source data\_source in the relevant location and in the order of the columns. The names of the database sources or their alias names can be specified for data\_source that are also specified as [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) after [FROM](javascript:call_link\('abapfrom_clause.htm'\)). A data source can also be specified more than once. If data\_source~\* is used, only a structure can be specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)), no elementary data objects or lists of data objects.

Notes

-   For performance reasons, only specify those columns that are actually needed. data\_source~\* should, therefore, only be specified if the content of all columns is actually needed.
    
-   The definition of the results set can also be produced by specifying a single data source data\_source~\*. This defines the same results set as specifying \*, but can be different if information is specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)) and due to the resulting behavior.
    
-   If specified, data\_source~\* cannot be combined with [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)).
    
-   data\_source~\* cannot be specified when accessing [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") or [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry").
    
-   If [UNION](javascript:call_link\('abapunion.htm'\)) is used, data\_source~\* cannot be specified in the SELECT list.
    
-   When an internal table [@itab](javascript:call_link\('abapselect_itab.htm'\)) with elementary row type is accessed in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") after [WITH](javascript:call_link\('abapwith.htm'\)), data\_source~\* cannot be specified in the SELECT list.
    
-   When data\_source~\* is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Reads the columns of two database tables in a [join](javascript:call_link\('abapselect_join.htm'\)) into an internal table. Two columns are read from SCARR and all columns are read from SPFLI.

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

Defines individual columns of the results set using specified columns [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)), the names of columns, [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)), or [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)). The order in which the columns are specified is free and defines the order of the columns in the results set. Only if a column of the type LCHR or LRAW is specified explicitly does the corresponding length field also have to be specified directly before it. An individual column can be specified more than once. Various information can be specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)), and the interaction of this information is described by the column specified there.

Notes

-   The obsolete [short form](javascript:call_link\('abapselect_obsolete.htm'\)) without an explicitly specified target area cannot be used when specifying individual columns. The only exception here is when only the aggregation function count( \* ) is specified statically, if no alternative column name and no GROUP BY are specified.
    
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](javascript:call_link\('abenopen_sql_lists_obsolete.htm'\)). Commas must be specified, however, in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
    

Example

Reads two columns from a cell in the database table SCARR

SELECT SINGLE
       FROM scarr
       FIELDS carrname, url
       WHERE carrid = 'UA'
       INTO @DATA(result).

Addition

... AS alias

Effect

The addition AS can be used to define an alternative column name alias (with a maximum of thirty characters) in the results set for every specified column col\_spec. The alternative column name alias can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.

An alternative column name cannot be assigned more than once. The name of a column that does not have any alternative names assigned to it should also not be used. The alternative column name is used implicitly in the addition [INTO*|*APPENDING CORRESPONDING FIELDS](javascript:call_link\('abapinto_clause.htm'\)). An alternative column name can only be specified after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)). A non-unique column name used after ORDER BY causes a syntax error or an exception.

Notes

-   If multiple database tables are specified after FROM, alternative names can be used when specifying single columns to avoid having multiple columns with the same name.
    
-   If an alternative column name matches an addition of the SELECT statement exactly, it may be necessary to prefix it with the [escape character !](javascript:call_link\('abennames_escaping.htm'\)).
    

Example

Displays the flight date and average fare of all customers on Lufthansa flights with flight number 0400. The alternative name avg of the aggregate expression is required for the [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause and the inline declaration in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause.

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

Instead of the previous two static specifications, a data object column\_syntax in parentheses can be specified. When the statement is executed, this data object either contains the syntax shown in static cases (with the exception of [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry")) or is initial.

The data object column\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type. The syntax in column\_syntax is, like ABAP Editor, not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows.

If column\_syntax is initial when the statement is executed, select\_list is set implicitly to \* and all columns are read.

If columns are specified dynamically without the addition SINGLE, the results set is always regarded as having multiple rows.

Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Notes

-   When [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") or [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") are accessed dynamically, the use of the addition DISTINCT raises a handleable exception.
    
-   If column\_syntax is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is evaluated, and not the header line.
    
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
    
-   In dynamically specified columns, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.
    

-   The literals of the dynamically specified Open SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, Open SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:

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

[SELECT, Dynamic Token Specification](javascript:call_link\('abendynamic_sql_abexa.htm'\))

Continue
[SELECT - col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\))