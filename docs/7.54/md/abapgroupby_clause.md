  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - GROUP BY

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... GROUP BY *{* *{* [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)), [sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)) ...
                 [grouping\_sets1](javascript:call_link\('abapgrouping_sets_clause.htm'\)), [grouping\_sets2](javascript:call_link\('abapgrouping_sets_clause.htm'\)), ...*}*
             *|* (grouping\_syntax) *}* ...

Extras:

[1\. ... sql\_exp1, sql\_exp2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... grouping\_sets1, grouping\_sets2, ...](#!ABAP_ADDITION_2@2@)
[3\. ... (grouping\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

The addition GROUP BY collates groups of rows of the result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") in one row. After GROUP BY, the grouping criteria are specified statically or dynamically. The static specification is a comma-separated list of the following:

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") sql\_exp1, sql\_exp2, ...
    
-   [Grouping sets](javascript:call_link\('abengrouping_set_glosry.htm'\) "Glossary Entry") grouping\_sets1, grouping\_sets2, ...
    

The order of the SQL expressions or grouping sets within the comma-separated list is not important. The dynamic specification is as a parenthesized data object grouping\_syntax.

If used, GROUP BY demands that only individual elements [col\_spec](javascript:call_link\('abapselect_clause_col_spec.htm'\)), but not all the columns are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) using \*. If GROUP BY is used, all columns that are specified directly after SELECT or as an argument of an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) and not as the argument of an [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") (except the [grouping function](javascript:call_link\('abengrouping_function.htm'\))) must be specified in an [aggregate expression](javascript:call_link\('abapselect_aggregate.htm'\)). This means that columns not specified after GROUP BY can only be specified after SELECT as the argument of an aggregate function of an aggregate expression (with the exception of the grouping function). The aggregate expressions define how the content of these columns is determined in the combined row from the contents of all the rows of a group. For the grouping function [GROUPING](javascript:call_link\('abengrouping_function.htm'\)), the column that is specified as its argument must be listed after GROUP BY.

The SQL expressions specified after GROUP BY cannot have the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB.

Notes

-   If GROUP BY is used, the statement SELECT bypasses [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").
    
-   Using GROUP BY and aggregate functions ensures that aggregates and groups are assembled by the database system, not AS ABAP. This can considerably reduce the volume of data that has to be transported from the database to AS ABAP.
    

Addition 1

... sql\_exp1, sql\_exp2, ...

Effect

Specifies SQL expressions whose result is used for grouping. A group is formed by the rows that have the same result in all SQL expressions sql\_exp1, sql\_exp2, and so on. Every [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) specified after GROUP BY must also be specified somewhere in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), with identical spelling. When specifying individual columns [col](javascript:call_link\('abenopen_sql_columns.htm'\)), the same column names as in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) must be specified. It is not possible to specify alias names defined with [AS](javascript:call_link\('abapselect_list.htm'\)).

When a column [col](javascript:call_link\('abenopen_sql_columns.htm'\)) is specified as the operand of an SQL expression after GROUP BY, the effect on the interaction with the SELECT list is the same as specifying the column individually. A column that is not the argument of an aggregate function in the SELECT list can be specified either individually or as the operand of an SQL expression after GROUP BY. If a column like this is specified as the operand of an SQL expression, it does not need to be specified individually.

All [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)), possible in the SELECT list can be specified after GROUP BY, with the following restrictions:

-   Each expression must contain at least one column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) as its operand.
    
-   The expressions cannot contain any [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or ABAP literals as operands, with the exception of statically known constants or literals with the data type i or with a flat character-like type.
    

Notes

-   If a grouping criterion specified after GROUP BY contains [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in the result set, these values are not part of the group of ABAP-specific initial values, they create a distinct group instead.
    
-   If individual columns [col](javascript:call_link\('abenopen_sql_columns.htm'\)) that are grouped in the SELECT list in an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) are specified directly after GROUP BY, multiple groups with the same result can arise. To prevent this, the columns must be grouped after the expression.
    
-   If specified columns contain a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) for [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry"), these must be the same in the GROUP BY clause and in the SELECT list, whereby parameter passing and attribute specifications are compared.
    
-   The spelling of the expressions after GROUP BY and in the SELECT list must be identical. An identical result is not enough. An expression col1 + col2 after GROUP BY does not have the same semantics as an expression col2 + col1 in the SELECT list. An alias name specified with [AS](javascript:call_link\('abapselect_list.htm'\)) in the SELECT list, however, is ignored.
    
-   An SQL expression that is specified more than once outside of an aggregate expression in the SELECT list does not need to be specified more than once after GROUP BY. An SQL expression can be specified more than once after GROUP BY, but has the same effect has specifying the expression once.
    
-   After GROUP BY, it is not possible to specify, instead of an expression, the alias name defined in the rule with [AS](javascript:call_link\('abapselect_list.htm'\)) for the expression.
    
-   Instead of using commas, only direct column specifications col1, col2, and so on in an [obsolete form](javascript:call_link\('abenopen_sql_lists_obsolete.htm'\)), can be separated using blanks. Commas must be specified, however, in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.
    
-   If other SQL expressions are specified as direct column specifications after GROUP BY, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

The rows of database table SFLIGHT that have the same contents in column CARRID are combined. The lowest and highest values in column PRICE are determined for each of these groups and placed into the combined row.

SELECT FROM sflight
       FIELDS carrid,
              MIN( price ) AS min\_price,
              MAX( price ) AS max\_price
       GROUP BY carrid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

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

[SELECT, GROUP BY for SQL expressions](javascript:call_link\('abensql_expr_with_group_by_abexa.htm'\))

Addition 2

... grouping\_sets1, grouping\_sets2, ...

Effect

GROUPING SETS is an addition of the GROUP BY clause used to define multiple grouping sets grouping\_sets1, grouping\_sets2, ... under a GROUP BY clause. The grouping sets are aggregated separately and grouped in a results set. More information can be found under [SELECT - GROUP BY, grouping\_sets](javascript:call_link\('abapgrouping_sets_clause.htm'\)).

Addition 3

... (grouping\_syntax)

Effect

As an alternative to specifying columns statically, a parenthesized data object grouping\_syntax can be specified, which either contains the syntax of the list of SQL expressions (with the exception of [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry")) or is initial when the statement is executed. The same applies to grouping\_syntax as when specifying columns dynamically as a [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

If the content of grouping\_syntax is initial, either all the rows or no rows at all are grouped together. The columns in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) must then be specified either solely as arguments of aggregate functions or only directly. If not, this would raise a handleable exception CX\_SY\_OPEN\_SQL\_DB. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)).

Notes

-   The conditions for specifying SQL expressions after GROUP BY are particularly relevant for dynamic tokens and a check at runtime verifies whether the expressions match those in the SELECT list:
    
-   No host variables or ABAP literals can usually be specified in SQL expressions in grouping\_syntax. In particular, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.
    
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
    

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](javascript:call_link\('abencomment.htm'\)) and ["](javascript:call_link\('abencomment.htm'\)) as follows:

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

Continue
[SELECT - GROUP BY, grouping\_sets](javascript:call_link\('abapgrouping_sets_clause.htm'\))
[sql\_agg - GROUPING](javascript:call_link\('abengrouping_function.htm'\))
![Example](exa.gif "Example") [SELECT, GROUP BY for SQL Expressions](javascript:call_link\('abensql_expr_with_group_by_abexa.htm'\))
![Example](exa.gif "Example") [SELECT, Grouping Sets](javascript:call_link\('abenselect_grouping_sets_abexa.htm'\))
![Example](exa.gif "Example") [GROUPING, Grouping Function](javascript:call_link\('abengrouping_function_abexa.htm'\))