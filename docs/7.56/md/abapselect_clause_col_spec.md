  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, select\_clause](javascript:call_link\('abapselect_clause.htm'\)) →  [SELECT, select\_list](javascript:call_link\('abapselect_list.htm'\)) → 

SELECT, col\_spec

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) ...

Alternatives:

[1\. ... col](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... literal *|* @dobj *|* @( expr )](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... sql\_func *|* sql\_arith *|* sql\_cast *|* sql\_string *|* sql\_case](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... sql\_agg](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... sql\_win](#!ABAP_ALTERNATIVE_5@5@)

Effect

Specifies columns in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). The specified columns are used to construct the result set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") from individual columns. Each column is specified using an [SQL expression](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)). Any SQL expressions and [parentheses](javascript:call_link\('abensql_exp_parentheses.htm'\)) can be used

Each SQL expression uses its arguments to determine a value with a data type that depends on the expression and places this value in the column of the result set. The corresponding data host variable after INTO or APPENDING must be a [suitable](javascript:call_link\('abenselect_into_conversion.htm'\)) choice.

To be able to evaluate the result of SQL expressions except for individual column specifications in [INTO*|*APPENDING CORRESPONDING FIELDS](javascript:call_link\('abapinto_clause.htm'\)), [INTO ...@DATA(...)](javascript:call_link\('abapinto_clause.htm'\)), and [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)), an alias name must be defined using [AS](javascript:call_link\('abapselect_list.htm'\)), which is then used by these additions.

The following sections discuss the special characteristics of the various SQL expressions.

Hint

[Certain SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\)) can be calculated in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry"). If any other SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed.

Alternative 1   

... col

Effect

Direct specification [col](javascript:call_link\('abenabap_sql_columns.htm'\)) of an individual column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)). If the name of a data source is specified directly, its content is placed directly in the associated column of the result set. The data type of a column in the result set is the data type of the corresponding component in the ABAP Dictionary.

The following special conditions apply:

-   If required, the specified column can contain a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)) for [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry"). If the addition CORRESPONDING or an inline declaration @DATA(...) is used in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause, any columns specified using a path expression must have an alias name alias defined using [AS](javascript:call_link\('abapselect_list.htm'\)).
-   If the value of a column of type LRAW or LCHR is read, the associated length field of type INT2 or INT4 must also be read and specified in the list in front of the column of type LRAW or LCHR.

Hints

-   A column can be specified more than once.
-   Directly specified columns can still be listed in the obsolete form of [space-separated lists](javascript:call_link\('abenabap_sql_lists_obsolete.htm'\)).
-   It was possible to specify individual columns directly before the introduction of SQL expressions, so this does not lead to the [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)) of the syntax check, which is otherwise caused by the SQL expressions.

Example

Direct specification of the columns CARRID, CARRNAME, and URL of the DDIC database table SCARR.

SELECT FROM   scarr
       FIELDS carrid, carrname , url
       INTO   TABLE @DATA(itab).

Alternative 2   

... literal *|* @dobj *|* @( expr )

Effect

Specification of a literal [literal](javascript:call_link\('abenabap_sql_literals.htm'\)), host variable [@dobj](javascript:call_link\('abenabap_sql_host_variables.htm'\)), or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)). These are values of the ABAP program that are determined before the query is executed in ABAP and are transferred to the database system, where they are inserted into the result set as a column. A column defined in this way contains the same value in all rows of the result set.

Hints

-   The restrictions on [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) apply with respect to the data types that can be used. More specifically, any host variables specified as field symbols or formal parameters cannot have generic data types.
-   It can be a good idea to specify a literal, a host variable, or a host expression as an elementary expression of a SELECT list to assign a defined value to a column of a result set that is not read from the database.
-   Specifying a constant or a literal as the only element of a SELECT list is one way of defining whether data in a selection exists without having to read data from the database.
-   Literals, host variables, and host expressions are handled as real SQL expressions in the SELECT list, which result in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)) of the syntax check and cannot be used in combination with [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)).

Example

Specification of the constant abap\_true from the type pool ABAP to determine whether a specific row exists.

SELECT SINGLE
       FROM scarr
       FIELDS @abap\_true
       WHERE carrid = '...'
       INTO @DATA(flag).
IF flag IS INITIAL.
  RETURN.
ENDIF.

Alternative 3   

... sql\_func *|* sql\_arith *|* sql\_cast *|* sql\_string *|* sql\_case

Effect

Specification of a non elementary SQL expression in the form of a built-in function [sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)), of an arithmetic expression [sql\_arith](javascript:call_link\('abensql_arith.htm'\)), cast expression [sql\_cast](javascript:call_link\('abensql_cast.htm'\)), string expression [sql\_string](javascript:call_link\('abensql_string.htm'\)), or case distinction [sql\_case](javascript:call_link\('abensql_case.htm'\)). The values of these expressions are calculated in the database. The rules and restrictions described for these apply. The values of the data source columns specified as operands are the selected values of the current row.

Hint

The non elementary SQL expressions result in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)) of the syntax check and cannot be used in combination with [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)). No [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") can be modified in the expressions.

Example

Use of a non elementary SQL expression as a column specification.

SELECT CONCAT\_WITH\_SPACE( carrname && ' (' && carrid && '),', url, 1 )
       FROM scarr
       INTO TABLE @DATA(itab).

Alternative 4   

... sql\_agg

Effect

Specifies an aggregate expression [sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)), in which a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) or an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) is specified as an argument of an [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry"). An aggregate function uses the values from multiple rows of the specified column or SQL expression to calculate a single value with a data type that depends on the aggregate function, and then places this value in the column of the result set.

The following rules apply when aggregate expressions are used in the SELECT list:

-   If aggregate expressions are used, all column names that are not specified within an aggregate expression must be specified after the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)). The aggregate functions evaluate the content of the groups defined by GROUP BY in the database system and pass the result to the merged rows of the result set.
-   If the addition FOR ALL ENTRIES is used before [WHERE](javascript:call_link\('abapwhere.htm'\)), no aggregate expressions can be used except COUNT( \* ). In cases like these, the aggregate expression is not evaluated in the database, but is emulated on the AS ABAP.
-   If columns are only used within aggregate expressions in the SELECT list, the result set has just one row and the addition GROUP BY is not required. If a non-table-like target area is specified after INTO for aggregated-only columns and without the addition GROUP BY after a single SELECT statement, that is, not in the case of multiple statements joined using [UNION](javascript:call_link\('abapunion.htm'\)), the statement ENDSELECT cannot be specified, as is also the case when using the addition SINGLE. If the aggregate expression COUNT( \* ) is not used, an internal table can be specified after INTO regardless of the addition GROUP BY and the first row of this table filled.
-   In the case of exclusively aggregated columns without GROUP BY, the result set also contains a row if no data is found in the database. If COUNT( \* ) is used, the column in question contains the value 0. The columns of the other aggregate functions contain initial values. This row is assigned to the data object specified after INTO and, unless COUNT( \* ) is used only statically and an alias name is not specified, sy-subrc is set to 0 and sy-dbcnt is set to 1.
-   If COUNT( \* ) is used as the only static column specified and an alias name is not specified using [AS](javascript:call_link\('abapselect_list.htm'\)) and GROUP BY is not specified at the same time, the addition INTO can be omitted. The number of selected rows can then be taken from the system field sy-dbcnt. If more than 2,147,483,647 rows are selected, sy-dbcnt contains the value -1. If no data is found on the database, sy-dbcnt is set to 0 and sy-subrc is set to 4.

Hints

-   Aggregate expressions cannot be specified together with [data\_source~\*](javascript:call_link\('abapselect_list.htm'\)) in the comma-separated list.
-   If [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) are used as operands of SQL expressions, the same rules apply as if they were specified directly.
-   It was possible to specify individual aggregate expressions directly before the introduction of SQL expressions, so this does not lead to the [strict mode](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)) of the syntax check, which is otherwise brought about by SQL expressions.

Example

Determination of the number of rows in the DDIC database table SCARR.

SELECT FROM   scarr
       FIELDS COUNT( \* )
       INTO   @DATA(wa).

Alternative 5   

... sql\_win

Effect

Specifies a window expression [sql\_win](javascript:call_link\('abapselect_over.htm'\)) in which a [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") is applied to a [window](javascript:call_link\('abenwindow_glosry.htm'\) "Glossary Entry") of the result set. Window expressions can only be specified in the SELECT list.