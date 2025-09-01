---
title: "SELECT - GROUP BY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm) Syntax ... GROUP BY   col1(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), col2(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sq
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm"
abapFile: "abapgroupby_clause.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abapgroupby", "clause"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) → 

SELECT - GROUP BY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm)

Syntax

... GROUP BY *{* *{* [col1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), [col2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), ...
                 [sql\_exp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) ... *}*
             *|* (column\_syntax) *}* ...

Extras:

[1\. ... col1, col2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... sql\_exp1, sql\_exp2, ...](#!ABAP_ADDITION_2@2@)
[3\. ... (column\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

In the results set of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry"), the addition GROUP BY combines groups of rows that have the same content in the columns col1, col2, ... or that have the same result in the SQL expressions sql\_exp1, sql\_exp2, ... into a single row. This can be specified either statically as a comma-separated list col1, col2 ..., sql\_exp1, sql\_exp2, ... or dynamically as a parenthesized data object column\_syntax. The order of the columns or SQL expression within the comma-separated list is not important.

If used, GROUP BY demands that only individual elements but not all the columns are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) using \*. If GROUP BY is used, all columns that are specified directly after SELECT or as an argument of an [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) and not as the argument of an [aggregate function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry") must be specified here. This means that columns not specified after GROUP BY can only be specified after SELECT as the argument of an aggregate function. The aggregate functions define how the content of these columns is determined in the combined row from the contents of all the rows of a group.

The addition GROUP BY cannot be specified for [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") and [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry"). The columns specified after GROUP BY cannot have the type STRING, RAWSTRING, LCHR, or LRAW.

Notes

-   If GROUP BY is used, the statement SELECT bypasses [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   Using GROUP BY and aggregate functions ensures that aggregates and groups are assembled by the database system, not the application server. This can considerably reduce the volume of data that has to be transported from the database to the application server.
    
-   If GROUP BY is used together with SQL expressions after SELECT, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Addition 1

... col1, col2, ...

Effect

Specifies individual columns [col1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), [col2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), ..., directly whose content is used for grouping. The same column names must be specified as in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm). Alternative column names cannot be specified.

Notes

-   If a column specified after GROUP BY contains [null values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") in the results set, these values are not part of the group of ABAP-specific initial values and create a distinct group instead.
    
-   If individual columns that are grouped in the SELECT in an [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) are specified after GROUP BY, multiple groups can arise with the same result. To prevent this, the columns must be grouped after the expression.
    
-   When a comma-separated list is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check.
    
-   If specified, the columns col1, col2, ... can contain a [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) for associations of a CDS. These must match in the GROUP BY clause and in the SELECT list (parameter passings and specified attributes can be compared here too).
    
-   Instead of using commas, blanks can be used to separate the columns col1, col2, ... specified in an [obsolete form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm). Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05.
    

Example

The rows of database table SFLIGHT that have the same contents in column CARRID are combined. The lowest and highest values in column PRICE are determined for each of these groups and placed into the combined row.

SELECT FROM sflight
       FIELDS carrid,
              MIN( price ) AS min\_price,
              MAX( price ) AS max\_price
       GROUP BY carrid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Addition 2

... sql\_exp1, sql\_exp2, ...

Effect

Specifies SQL expressions whose result is used for grouping. Every [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) specified after GROUP BY must also be specified somewhere in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), with identical spelling.

When a [column](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) is used as the operand of an SQL expression after GROUP BY, the effect on the interaction with the SELECT list is the same as specifying the column individually. A column that is not the argument of an aggregate function in the SELECT list can be specified either individually or as the operand of an SQL expression after GROUP BY. If a column like this is specified as the operand of an SQL expression, it does not need to be specified individually.

All [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) possible in the SELECT list can be specified after GROUP BY with the following restrictions:

-   Each expression must contain at least one column of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) as its operand.
    
-   The expressions cannot contain any [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) or ABAP literals as operands, with the exception of statically known constants or literals with the
    

-   data type i with any content, but not as an argument of the [numeric functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm) or of the function [COALESCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_coalesce.htm).

-   data type c with length 1 and the content "X" or a blank, but not as an argument of the function [COALESCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_coalesce.htm).

Notes

-   The spelling of the expressions after GROUP BY and in the SELECT list must be identical. An identical result is not enough. An expression col1 + col2 after GROUP BY does not have the same semantics as an expression col2 + col1 in the SELECT list. An alternative column name specified in the SELECT list, however, is ignored.
    
-   An SQL expression that is specified more than once outside of an aggregate expression in the SELECT list does not need to be specified more than once after GROUP BY. An SQL expression can be specified more than once after GROUP BY, but has the same effect has specifying the expression once.
    
-   The alternative column name usually specified in the SELECT list for an expression, cannot be specified after GROUP BY instead of the expression in question.
    
-   If SQL expressions are specified after GROUP BY, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Creates a group using a chaining of the columns CARRID and CONNID.

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid ) AS key,
              MIN( seatsocc ) AS min\_seatsocc,
              MAX( seatsocc ) AS max\_seatsocc
       GROUP BY CONCAT( carrid, connid )
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Use with GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_with_group_by_abexa.htm)

Addition 3

... (column\_syntax)

Effect

As an alternative to specifying columns statically, a parenthesized data object column\_syntax can be specified, which either contains the syntax of the list of columns or SQL expressions (with the exception of [host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expression_glosry.htm "Glossary Entry")) or is initial when the statement is executed. The same applies to column\_syntax as when specifying columns dynamically as a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

If the content of column\_syntax initial, either all the rows or no rows at all are grouped together. The columns after SELECT must then be specified either solely as arguments of aggregate functions or only directly. If not, this would raise a handleable exception CX\_SY\_OPEN\_SQL\_DB. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_inj_dyn_tokens_scrty.htm).

Notes

-   The conditions for specifying SQL expressions after GROUP BY are particularly relevant for dynamic tokens and a check at runtime verifies whether the expressions match those in the SELECT list:
    
-   No host variables or ABAP literals can usually be specified in SQL expressions in column\_syntax. In particular, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.
    
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
    

-   The literals of the dynamically specified Open SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, Open SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

Example

After entering any column of database table SPFLI the selected data is organized according to this column, which means that similar entries are combined. In count the number of flight connections for the different values in column spflicol is determined. If , for example, "CITYFROM" is entered as spflicol, the number of destinations for each departure city is determined in count. Various possible exceptions are handled in TRY control structures. In particular, user input is tested for validity using a method of the class CL\_ABAP\_DYN\_PRG.

DATA spflicol TYPE c LENGTH 20 VALUE 'CITYFROM'.
cl\_demo\_input=>request( CHANGING field = spflicol ).
TRY.
    spflicol =
      cl\_abap\_dyn\_prg=>check\_column\_name( to\_upper( spflicol ) ).
  CATCH cx\_abap\_invalid\_name.
    cl\_demo\_output=>display( 'Not allowed' ).
    RETURN.
ENDTRY.
DATA dref TYPE REF TO data.
TRY.
    DATA(name) = \`SPFLI-\`  && spflicol.
    CREATE DATA dref TYPE (name).
    ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
  CATCH cx\_sy\_create\_data\_error.
    cl\_demo\_output=>display( 'Not possible' ).
    RETURN.
ENDTRY.
DATA count TYPE i.
DATA(fieldlist) = spflicol && \`, count(\*)\`.
TRY.
    SELECT DISTINCT (fieldlist)
           FROM spfli
           GROUP BY (spflicol)
           ORDER BY (spflicol)
           INTO (@<fs>, @count).
      cl\_demo\_output=>write( |{ <fs> } {
                                count }| ).
    ENDSELECT.
    cl\_demo\_output=>display( ).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( 'Not possible' ).
    RETURN.
ENDTRY.