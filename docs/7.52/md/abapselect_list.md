  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) →  [SELECT - select\_clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) → 

SELECT - select\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm)

Syntax

... \*
  *|* *{*..., [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm)~\*, ..., [col\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm) *\[*AS alias*\]*, ...*}*
  *|* (column\_syntax) ...

Alternatives:

[1\. ... \*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ..., data\_source~\*, ..., col\_spec *\[*AS alias*\]*, ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (column\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Effect

SELECT list of the [SELECT clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") statement. This information specifies which columns are used to construct the results set of the SELECT statement and how their values are obtained. There are two static variants and one dynamic variant.

The SELECT list actually passed to the database is determined by the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm). If one or more names match, all the columns for which there are no name matches are removed from the SELECT list implicitly and therefore from the results set too. If there are no name matches, none of the columns are removed from the results set.

Alternative 1

... \*

Effect

Defines all columns of the results set using \*. The results set is constructed from all columns in the [data sources](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm), in the order given there. The columns of the results set take their names and data types from the data sources. Only a single data object can be specified after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) and lists of data objects cannot be specified.

Notes

-   If multiple database tables are specified after FROM, it is not possible to prevent multiple columns from inheriting the same name when \* is specified.
    
-   For performance reasons, only specify those columns that are actually needed. Specify \* only if the content of all columns is actually needed.
    
-   If the addition [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) is used, \* can be transformed implicitly to a list of columns for which there is a name match.
    
-   If [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) is used, \* cannot be specified as a SELECT list.
    
-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm), \* cannot be specified as a SELECT list.
    

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

-   data\_source~\* specifying all columns of a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) or
    
-   specifying individual columns [col\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm).
    

This information can be specified in any combination, with the exception that data\_source~\* cannot be used together with [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm).

Note

When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check. Specifying individual blank-separated columns is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm).

Variant 1

... data\_source~\* ...

Effect

Defines multiple columns of the results set using data\_source~\*, where data\_source stands for an individual database table [dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm), a classic view [view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm), a non-abstract CDS entity [cds\_entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm), or an [internal table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm). The results set contains all columns of the specified database source data\_source in the relevant location and in the order of the columns. The names of the database sources or their alias names can be specified for data\_source that are also specified as [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) after [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm). A data source can also be specified more than once. If data\_source~\* is used, only a structure can be specified after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), no elementary data objects or lists of data objects.

Notes

-   For performance reasons, only specify those columns that are actually needed. data\_source~\* should, therefore, only be specified if the content of all columns is actually needed.
    
-   The definition of the results set can also be produced by specifying a single data source data\_source~\*. This defines the same results set as specifying \*, but can be different if information is specified after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) and due to the resulting behavior.
    
-   If specified, data\_source~\* cannot be combined with [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm).
    
-   data\_source~\* cannot be specified when accessing [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") or [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry").
    
-   If [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm) is used, data\_source~\* cannot be specified in the SELECT list.
    
-   When an internal table [@itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) with elementary row type is accessed in the [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clause of a [common table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm), data\_source~\* cannot be specified in the SELECT list.
    
-   When data\_source~\* is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Reads the columns of two database tables in a [join](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) into an internal table. Two columns are read from SCARR and all columns are read from SPFLI.

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

Defines individual columns of the results set using specified columns [col\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm), the names of columns, [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm), or [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm). The order in which the columns are specified is free and defines the order of the columns in the results set. Only if a column of the type LCHR or LRAW is specified explicitly does the corresponding length field also have to be specified directly before it. An individual column can be specified more than once. Various information can be specified after [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), and the interaction of this information is described by the column specified there.

Notes

-   The obsolete [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_obsolete.htm) without an explicitly specified target area cannot be used when specifying individual columns. The only exception here is when only the aggregation function count( \* ) is specified statically, if no alternative column name and no GROUP BY are specified.
    
-   Instead of using commas, blanks can be used to separate columns specified in an [obsolete form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    

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

An alternative column name cannot be assigned more than once. The name of a column that does not have any alternative names assigned to it should also not be used. The alternative column name is used implicitly in the addition [INTO*|*APPENDING CORRESPONDING FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm). An alternative column name can only be specified after [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm). A non-unique column name used after ORDER BY causes a syntax error or an exception.

Notes

-   If multiple database tables are specified after FROM, alternative names can be used when specifying single columns to avoid having multiple columns with the same name.
    
-   If an alternative column name matches an addition of the SELECT statement exactly, it may be necessary to prefix it with the [escape character !](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennames_escaping.htm).
    

Example

Displays the flight date and average fare of all customers on Lufthansa flights with flight number 0400. The alternative name avg of the aggregate expression is required for the [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm) clause and the inline declaration in the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause.

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

Instead of the previous two static specifications, a data object column\_syntax in parentheses can be specified. When the statement is executed, this data object either contains the syntax shown in static cases (with the exception of [host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expression_glosry.htm "Glossary Entry")) or is initial.

The data object column\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in column\_syntax is, like ABAP Editor, not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows.

If column\_syntax is initial when the statement is executed, select\_list is set implicitly to \* and all columns are read.

If columns are specified dynamically without the addition SINGLE, the results set is always regarded as having multiple rows.

Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_inj_dyn_tokens_scrty.htm).

Notes

-   When [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") or [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") are accessed dynamically, the use of the addition DISTINCT raises a handleable exception.
    
-   If column\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated, and not the header line.
    
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
    
-   In dynamically specified columns, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.
    

-   The literals of the dynamically specified Open SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, Open SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) as follows:

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

[SELECT, Dynamic Token Specification](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_sql_abexa.htm)

Continue
[SELECT - col\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause_col_spec.htm)