  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

Open SQL - SQL Expressions sql\_exp

Syntax

... [sql\_elem](javascript:call_link\('abensql_elem.htm'\))
  *|* [sql\_func](javascript:call_link\('abensql_builtin_func.htm'\))
  *|* [sql\_num](javascript:call_link\('abensql_arith.htm'\))
  *|* [sql\_cast](javascript:call_link\('abensql_cast.htm'\))
  *|* [sql\_string](javascript:call_link\('abensql_string.htm'\))
  *|* [sql\_case](javascript:call_link\('abensql_case.htm'\)) ...

Effect

SQL expressions are expressions that can be specified in the following positions of Open SQL statements.

-   As [columns specified](javascript:call_link\('abapselect_clause_col_spec.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\))
    
-   As an argument of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and in the [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\))
    
-   On the left side of an [SQL condition](javascript:call_link\('abenwhere_logexp.htm'\))
    
-   As a grouping criterion after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))
    

SQL expressions are passed to the database system, executed there, and the result is passed to the application server if requested. The possible operands are:

-   Suitable columns [col](javascript:call_link\('abenopen_sql_columns.htm'\)) of [data sources](javascript:call_link\('abapselect_data_source.htm'\)). The valid data types are specified in the expressions themselves.
    
-   Literals, [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), which cannot have the type string or xstring.
    

-   Host variables must be prefixed with the escape character @.

-   Literals are handled strictly according to type. This means that string literals are not allowed and only text field literals of the type c can be used as character literals. Empty [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") cannot be specified. The value of a numeric literal must be in the value range of type i, which means it always has type i.

-   SQL expressions whose results can be used in accordance with their data type. SQL expressions cannot be specified in all operand positions.
    

The SQL expression can be used to execute

-   [assignments of columns, literals, host variables, or host expressions](javascript:call_link\('abensql_elem.htm'\))
    
-   [calls of built-in functions](javascript:call_link\('abenopen_sql_functions.htm'\))
    
-   [arithmetic calculations](javascript:call_link\('abensql_arith.htm'\))
    
-   [type modifications](javascript:call_link\('abensql_cast.htm'\))
    
-   [chainings of character strings](javascript:call_link\('abensql_string.htm'\))
    
-   [case distinctions](javascript:call_link\('abensql_case.htm'\))
    

executed. Every expression can be enclosed in [parentheses](javascript:call_link\('abensql_exp_parentheses.htm'\)). The result of an expression is used in the Open-SQL statement in accordance with the operand position, with the data type in nested expressions being specified by the outermost expression.

Notes

-   SQL expressions cannot be used when accessing [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") or [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry").
    
-   Host variables and host expressions as operands of expressions are evaluated before the Open SQL statement is sent to the database system. Specifying a host variable from a SELECT list after INTO in a SELECT loop does not mean that a different value is used in each loop pass.
    
-   No [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) as operands of SQL expressions can currently be specified. SQL expressions can, however, be arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)).
    
-   When SQL expressions are used, the syntax check is performed in a [strict mode from Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the regular syntax check.
    
-   If a host expression occurs in an SQL expression, the syntax check is performed in a [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.
    
-   If required, a column can be specified in an SQL expression using a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) for associations of a CDS view.
    
-   SQL expressions cannot currently be used together with the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)).
    
-   If SQL expressions are specified together with [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) or with the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.
    
-   SQL expressions are not possible if the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is [switched off](javascript:call_link\('abennon_fixed_point_obsolete.htm'\)).
    

Example

Syntax example for specifying SQL expressions in different operand positions in a [SELECT](javascript:call_link\('abapselect.htm'\)) statement

SELECT FROM sflight
       FIELDS CONCAT( carrid, connid ) AS key,
              MAX( seatsmax - seatsocc ) AS max\_free,
              MIN( seatsmax - seatsocc ) AS min\_free
        GROUP BY carrid, connid
        HAVING SUM( seatsmax - seatsocc ) > 100
        ORDER BY key
        INTO TABLE @DATA(itab).

Continue
[sql\_exp - sql\_elem](javascript:call_link\('abensql_elem.htm'\))
[sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\))
[sql\_exp - sql\_arith](javascript:call_link\('abensql_arith.htm'\))
[sql\_exp - sql\_cast](javascript:call_link\('abensql_cast.htm'\))
[sql\_exp - sql\_string](javascript:call_link\('abensql_string.htm'\))
[sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\))
[sql\_exp - ( )](javascript:call_link\('abensql_exp_parentheses.htm'\))
[Examples of SQL Expressions](javascript:call_link\('abensql_expr_abexas.htm'\))