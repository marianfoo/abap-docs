  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - subquery_clauses, ABENWHERE_LOGEXP_SUBQUERY, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_cond - subquery\_clauses

[Short Reference](javascript:call_link\('abensubquery_shortref.htm'\))

Syntax

... *{* [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source
      [FIELDS](javascript:call_link\('abapfields_clause.htm'\)) [select\_clause](javascript:call_link\('abapselect_clause.htm'\)) *}*
  *|* *{* [select\_clause](javascript:call_link\('abapselect_clause.htm'\))
      [FROM](javascript:call_link\('abapfrom_clause.htm'\)) source *}*
      *\[*[WHERE](javascript:call_link\('abapwhere.htm'\)) [sql\_cond](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))*\]*
      *\[* [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) group*\]* *\[*[HAVING](javascript:call_link\('abaphaving_clause.htm'\)) group\_cond*\]*
      *\[* [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) [*\[*UP TO n ROWS *\[*OFFSET o*\]**\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))*\]*
      *\[*[db\_hints](javascript:call_link\('abenabap_sql_db_hints.htm'\))*\]*  ...

Effect

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in a condition [sql\_cond](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) in ABAP SQL.

In the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, the addition [USING](javascript:call_link\('abapselect_client.htm'\)) cannot specified to affect [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"). Client handling of the subquery depends on the client handling of the outer statement. An addition [USING](javascript:call_link\('abapselect_client.htm'\)) of the outer statement also affects the subquery.

A subquery can be used within the following relational expressions sql\_cond for a subquery:

-   [operand operator *\[*ALL*|*ANY*|*SOME*\]* subquery](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))
-   [*\[*NOT*\]* EXISTS subquery](javascript:call_link\('abenwhere_logexp_exists.htm'\))
-   [*\[*NOT*\]* IN subquery](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) ([scalar subquery](javascript:call_link\('abenscalar_subquery_glosry.htm'\) "Glossary Entry"))
-   [IN subquery with value tuples](javascript:call_link\('abenwhere_logexp_list_in.htm'\))

Conditions of a subquery can themselves contain subqueries. In nested subqueries, the columns specified in the SQL conditions are searched inside out and the columns of inner subqueries hide columns with the same name in outer subqueries.

Only a limited number of SELECT statements can be used as subqueries in an ABAP SQL statement. The maximum number is defined so that the ABAP SQL statement can be executed on all supported database systems. If known statically, more than 50 SELECT statements currently produce a syntax error and otherwise a runtime error. This restriction is independent of whether the subqueries are nested or occur in different relational expressions of the SQL condition.

The addition [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) and the addition [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)). An ORDER BY clause in a subquery is not supported by all databases. This results in a syntax check warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") that can be hidden using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

Hints

-   In a correlated subquery, a DDIC projection view cannot be accessed in the surrounding SELECT statement.
-   If a subquery is used, the ABAP SQL statement bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").
-   If a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") accesses a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that is linked with a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") and for which [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_view_anno_v1.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, only that data is read implicitly that meets the [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") is accessed, no access control takes place. Note that this access is [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).
-   In subqueries that are used in the WHERE condition of a [DELETE](javascript:call_link\('abapdelete_where.htm'\)) or [UPDATE](javascript:call_link\('abapupdate_source.htm'\)) statement, the DDIC database table to be changed cannot be accessed.
-   If a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for a database table or DDIC database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the SELECT statement of the subquery, the subquery accesses the CDS view and not the DDIC database table or the DDIC database view.
-   In the subquery, the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can still be specified outside the [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)) and disables [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) here.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clauses in [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This requires the constant LIMIT\_IN\_SUBSELECT\_OR\_CTE of this class to be passed to the method in an internal table.

Executable Example

[Subquery in WHERE Condition](javascript:call_link\('abenselect_subquery_abexa.htm'\))

Continue
![Example](exa.gif "Example") [sql\_cond - Subquery in WHERE Condition](javascript:call_link\('abenselect_subquery_abexa.htm'\))