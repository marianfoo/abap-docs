  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20GROUP%20BY%2C%20ABAPGROUPBY_CLAUSE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, GROUP BY

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_shortref.htm)

Syntax

... GROUP BY *{* *{* [sql\_exp1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) ...
                 [grouping\_sets1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgrouping_sets_clause.htm), [grouping\_sets2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgrouping_sets_clause.htm), ...*}*
             *|* (grouping\_syntax) *}* ...

Additions:

[1\. ... sql\_exp1, sql\_exp2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... grouping\_sets1, grouping\_sets2, ...](#!ABAP_ADDITION_2@2@)
[3\. ... (grouping\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

The addition GROUP BY combines groups of rows of the result set of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") into one row. After GROUP BY, the grouping criteria are specified statically or dynamically. The static specification is a comma-separated list of the following:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry") sql\_exp1, sql\_exp2, ...
-   [Grouping sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengrouping_set_glosry.htm "Glossary Entry") grouping\_sets1, grouping\_sets2, ...

The order of the SQL expressions or grouping sets within the comma-separated list is not important. The dynamic specification is as a parenthesized data object grouping\_syntax.

If used, GROUP BY demands that only individual elements [col\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause_col_spec.htm) and not all the columns are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) using \*. If GROUP BY is used, all columns that are specified directly after SELECT or as an argument of an [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) and not as the argument of an [aggregate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), except the [grouping function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengrouping_function.htm), must be specified in an [aggregate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm). This means that columns not specified after GROUP BY can only be specified after SELECT as the argument of an aggregate function of an aggregate expression, with the exception of the grouping function. The aggregate expressions determine how the content of these columns is determined in the combined row from the content of all the rows of a group. For the grouping function [GROUPING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengrouping_function.htm), the column that is specified as its argument must be listed after GROUP BY.

The SQL expressions specified after GROUP BY cannot have the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB.

Hints

-   GROUP BY cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm). The ABAP SQL statement bypasses the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
-   Using GROUP BY and aggregate functions ensures that aggregates and groups are already built by the database system, not AS ABAP. This can considerably reduce the volume of data that has to be transported from the database to AS ABAP.

Addition 1   

... sql\_exp1, sql\_exp2, ...

Effect

Specifies SQL expressions whose result is used for grouping. A group is formed by the rows that have the same result in all SQL expressions sql\_exp1, sql\_exp2, ... Every [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) specified after GROUP BY must also be specified somewhere in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm), with identical spelling. When specifying individual columns [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm), the same column names as in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) must be specified. It is not possible to specify alias names defined with [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

When a column [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) is specified as the operand of an SQL expression after GROUP BY, the effect on the interaction with the SELECT list is the same as specifying the column individually. A column that is not the argument of an aggregate function in the SELECT list can be specified either individually after GROUP BY or as the operand of an SQL expression. If a column like this is specified as the operand of an SQL expression, it does not need to be specified individually.

All [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm), except for [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) and [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm), possible in the SELECT list can be specified after GROUP BY, with the following restrictions:

-   Each expression must contain at least one column of a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) as its operand.
-   The expressions cannot contain any [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) or ABAP literals as operands, with the exception of statically known constants or literals with the data type i or with a flat character-like type. Only constants defined by [CONSTANTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconstants.htm) are allowed and no [enumerated constants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_constant_glosry.htm "Glossary Entry").

Hints

-   If a grouping criterion specified after GROUP BY contains [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") in the result set, these values are not part of the group of ABAP-specific initial values and form a distinct group instead.
-   If individual columns [col](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm) that are grouped in the SELECT list in an [SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) are specified directly after GROUP BY, multiple groups with the same result can arise. To prevent this, the columns must be grouped after the expression.
-   The spelling of the expressions after GROUP BY and in the SELECT list must be identical. An identical result is not enough. An expression col1 + col2 after GROUP BY does not have the same semantics as an expression col2 + col1 in the SELECT list. An alias name defined with [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) in the SELECT list, however, is ignored.
-   An SQL expression that is specified more than once outside of an aggregate expression in the SELECT list does not need to be specified more than once after GROUP BY. An SQL expression can be specified more than once after GROUP BY but has the same effect has specifying the expression once.
-   After GROUP BY, it is not possible to specify, instead of an expression, the alias name defined in the rule with [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) for the expression.
-   Instead of using commas, only direct column specifications col1, col2, ... in an [obsolete form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_lists_obsolete.htm), can be separated using blanks. Commas must be specified, however, in the [strict modes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strict_modes.htm) of the syntax check from ABAP release 7.40, SP05.
-   If specified columns contain a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) for [CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencte_association_glosry.htm "Glossary Entry"), these must be the same in the GROUP BY clause and in the SELECT list, whereby parameter passing and attribute specifications are also compared.
-   If SQL expressions other than direct column specifications are specified after GROUP BY, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Example

The rows of the DDIC database table SFLIGHT that have the same content in column CARRID are combined. The lowest and highest values in column PRICE are determined for each of these groups and placed into the combined row.

SELECT FROM sflight
       FIELDS carrid,
              MIN( price ) AS min\_price,
              MAX( price ) AS max\_price
       GROUP BY carrid
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Example

Grouping after a concatenation of the columns CARRID and CONNID.

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid ) AS key,
              MIN( seatsocc ) AS min\_seatsocc,
              MAX( seatsocc ) AS max\_seatsocc
       GROUP BY CONCAT( carrid, connid )
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Executable Example

[SELECT, GROUP BY for SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_with_group_by_abexa.htm)

Addition 2   

... grouping\_sets1, grouping\_sets2, ...

Effect

GROUPING SETS is an addition of the GROUP BY clause that can be used to define multiple grouping sets grouping\_sets1, grouping\_sets2, ... under a GROUP BY clause. The grouping sets are aggregated separately and grouped in a result set. For more information, see [SELECT - GROUP BY, grouping\_sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgrouping_sets_clause.htm).

Addition 3   

... (grouping\_syntax)

Effect

As an alternative to specifying columns statically, a parenthesized data object grouping\_syntax can be specified, which either contains the syntax of the list of SQL expressions (with the exception of [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_expression_glosry.htm "Glossary Entry")) or is initial when the statement is executed. The same applies to grouping\_syntax as when specifying columns dynamically as a [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

If the content of grouping\_syntax is initial, either all the rows or no rows are grouped together. The columns in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) must then be specified either solely as arguments of aggregate functions or only directly. If not, the catchable exception CX\_SY\_OPEN\_SQL\_DB is raised. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_dyn_tokens_scrty.htm).

Hints

-   The conditions for specifying SQL expressions after GROUP BY are particularly relevant for dynamic tokens and a check at runtime verifies whether the expressions match those in the SELECT list.
-   No host variables or ABAP literals can usually be specified in SQL expressions in grouping\_syntax. In particular, static attributes or constants of a class cannot be accessed from outside if the class has a static constructor and the constructor was not yet executed.
-   The class CL\_ABAP\_DYN\_PRG contains methods that support the creation of correct and secure dynamically specified columns.
-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.
-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment.htm) as follows:
    
    -   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".
    -   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".
    
    Comment characters placed within literals are, however, part of the literal.
    

Example

After entering any column of DDIC database table SPFLI the selected data is organized according to this column, which means that similar entries are combined. In count, the number of flight connections for the different values in column spflicol is determined. If, for example, CITYFROM is entered as spflicol, the number of destinations for each departure city is determined in count. Various possible exceptions are handled in TRY control structures. In particular, user input is checked for validity using a method of the class CL\_ABAP\_DYN\_PRG.

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
    FINAL(name) = \`SPFLI-\`  && spflicol.
    CREATE DATA dref TYPE (name).
  CATCH cx\_sy\_create\_data\_error.
    cl\_demo\_output=>display( 'Not possible' ).
    RETURN.
ENDTRY.
DATA count TYPE i.
FINAL(fieldlist) = spflicol && \`, count(\*)\`.
TRY.
    SELECT DISTINCT (fieldlist)
           FROM spfli
           GROUP BY (spflicol)
           ORDER BY (spflicol)
           INTO (@dref->\*, @count).
      cl\_demo\_output=>write( |{ dref->\* } {
                                count }| ).
    ENDSELECT.
    cl\_demo\_output=>display( ).
  CATCH cx\_sy\_dynamic\_osql\_error.
    cl\_demo\_output=>display( 'Not possible' ).
    RETURN.
ENDTRY.

Continue
[SELECT, GROUP BY, grouping\_sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgrouping_sets_clause.htm)
[sql\_agg - GROUPING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengrouping_function.htm)
![Example](exa.gif "Example") [SELECT, GROUP BY for SQL Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_with_group_by_abexa.htm)
![Example](exa.gif "Example") [SELECT, Grouping Sets](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_grouping_sets_abexa.htm)
![Example](exa.gif "Example") [SELECT, Grouping Function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengrouping_function_abexa.htm)