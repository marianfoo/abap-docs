  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

sql\_cond - subquery\_clauses

[Quick Reference](javascript:call_link\('abensubquery_shortref.htm'\))

Syntax

... *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
      *\[*[WHERE](javascript:call_link\('abapwhere.htm'\)) [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\))*\]*
      *\[* [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[*[HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
      *\[* [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) [*\[*UP TO n ROWS *\[*OFFSET o*\]**\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))*\]*
      *\[*[db\_hints](javascript:call_link\('abenosql_db_hints.htm'\))*\]*  ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in a condition [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)) in Open SQL.

The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) must not be specified n the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause. The automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") of the subquery is performed in accordance with the client handling of the outer statement. If specified, an addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) of the outer statement also applies to the subquery.

A subquery can be used within the following relational expressions sql\_cond for a subquery:

-   [operand operator *\[*ALL*|*ANY*|*SOME*\]* subquery](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))

-   [*\[*NOT*\]* EXISTS subquery](javascript:call_link\('abenwhere_logexp_exists.htm'\))

-   [*\[*NOT*\]* IN subquery](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\))

Conditions of a subquery can themselves contain subqueries. In nested subqueries, the columns specified in the SQL conditions are searched inside out and the columns of inner subqueries obscure columns with the same name in outer subqueries.

-   A subquery with a single-column results set (which means that the SELECT list in result of the subquery contains only one element) is known as a scalar subquery.

-   A subquery that uses columns from the surrounding SELECT statement in its SQL conditions is known as a correlated subquery. It must be possible to assign the column uniquely to a [data source](javascript:call_link\('abapselect_data_source.htm'\)) in the surrounding SELECT statement. A correlated subquery is evaluated for each individual row of the results set in the surrounding SELECT statement.

Only a limited number of SELECT statements can be used as subqueries in an Open SQL statement. The maximum number is defined so that the Open SQL statement can be executed on all supported database systems. If statically identifiable, more than 50 SELECT statements produce a syntax error or a runtime error. This restriction is independent of whether the subqueries are nested or occur in different relational expressions of the SQL condition.

The addition [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) and the addition [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)). An ORDER BY clause in a subquery is not supported by all databases. This means a syntax check warning can occur that can be hidden using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]. If this is detected at runtime on a database that does not support the pragma, a handleable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

Notes

-   Subqueries cannot be used when accessing [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") or [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry").

-   In a correlated subquery, a projection view cannot be accessed in the surrounding SELECT statement.

-   If a subquery is used, the Open SQL statement bypasses [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").

-   If a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") is used to access a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") associated with a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") and for which [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, only that data is read implicitly that matches the [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of a CDS view is accessed, no access control takes place.

-   In subqueries that are used in the WHERE condition of a [DELETE](javascript:call_link\('abapdelete_where.htm'\)) or [UPDATE](javascript:call_link\('abapupdate_source.htm'\)) statement, there may be no access to the database table to be changed.

-   If a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for a database table or database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the SELECT statement of the subquery, the subquery accesses the CDS view and not the database table or the database view.

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clauses in [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This requires the constant LIMIT\_IN\_SUBSELECT\_OR\_CTE of this class to be passed to the method in an internal table.

Executable Example

[Subquery in WHERE Condition](javascript:call_link\('abenselect_subquery_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Subquery in WHERE Condition](javascript:call_link\('abenselect_subquery_abexa.htm'\))