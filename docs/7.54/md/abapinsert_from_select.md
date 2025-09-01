  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) → 

INSERT, MODIFY dbtab - subquery\_clauses

[Quick Reference](javascript:call_link\('abapinsert_dbtab_shortref.htm'\))

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

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") after the addition FROM of the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) and [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)). These clauses define a result set, which is used as a data source of the INSERT or INSERT statement.

With the exception of the client column, the results set of the subquery must have at least as many columns as the primary key of the database table or the classic view filled using the INSERT statement or modified using the MODIFY statement. It cannot, however, have more columns than the target database table or view .

The following special rules apply:

-   FROM clause
    

-   If the database table or classic view edited using the INSERT or MODIFY statement is [client-specific](javascript:call_link\('abenddic_database_tables_client.htm'\)), at least one data source of the subquery must be client-specific.

-   In the [FROM](javascript:call_link\('abapfrom_clause.htm'\))clause, [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) cannot be switched off using the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)).

-   If the subquery uses default client handling or if client handling is switched using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)), implicit client handling in the INSERT statement or MODIFY statement cannot be switched using [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)).

-   If implicit client handling is switched in the subquery using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)), implicit client handling in the INSERT statement or MODIFY statement must be switched using [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)).

-   SELECT clause
    

-   Any [SELECT lists](javascript:call_link\('abapselect_list.htm'\)) of the subquery specified as comma-separated lists must define one column of the results set for at least every column of the primary key of the database table or classic view in question.
    If the subquery uses default client handling or switches client handling using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)), no client column can be specified as the first column in the SELECT list. In other positions, client columns are not interpreted as client columns.
    If implicit client handling is switched in the subquery using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)), the first column of the SELECT list must be a client column.

-   In a [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the subquery specified using \*, the results set produced for at least every column of the primary key of the database table or classic view in question must contain a column.
    If the subquery uses default client handling or switches client handling using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)), the client column of the results set is ignored.
    If implicit client handling is switched in the subquery using [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)), the client column of the results set is respected.

-   ORDER BY clause
    

-   The addition [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)).

-   The addition [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)).

-   An ORDER BY clause in a subquery is not supported by all databases. This means a syntax check warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") can occur that can be hidden using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]. If this is detected at runtime on a database that does not support the pragma, a handleable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

A further subquery within the subquery cannot access the table or view edited using the INSERT or MODIFY statement.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clauses in [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This requires the constant LIMIT\_IN\_SUBSELECT\_OR\_CTE of this class to be passed to the method in an internal table.
    
-   If a subquery is used, the ABAP SQL statement bypasses [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").
    
-   Implicit client handling of the subquery is not specified by client handling of the INSERT statement or MODIFY statement An addition [USING](javascript:call_link\('abapiumd_client.htm'\)) or [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) of the [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statement or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) statement is ignored by the subquery. The subquery uses either the current client ID or a client specified in the subquery using [USING](javascript:call_link\('abapselect_client.htm'\)). When the result of the subquery is written, however, implicit client handling of the INSERT statement or MODIFY statement applies by default. This can be defined using the additions [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) or [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)).
    

-   If a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") is used to access a [](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity associated with a [](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") role and for which [](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))[CDS](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, only that data is read implicitly that matches the [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") database view of a CDS view is accessed, no access control takes place.

-   The use of a subquery in the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and the us of USING CLIENT or an access in the subquery to the database table or classic view that is filled with an INSERT statement results in the [strict mode as of Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)). If used, [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) applies [strict mode from Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)).
    

Example

Inserts columns of a results set formed by an inner join in a database table.

DELETE FROM demo\_join1.
INSERT demo\_join1
  FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' d = 'd1' )
                         ( a = 'a2' b = 'b2' d = 'd2' )
                         ( a = 'a3' b = 'b3' d = 'd3' ) ) ).
DELETE FROM demo\_join2.
INSERT demo\_join2
  FROM TABLE @( VALUE #( ( d = 'd1' e = 'e1' f = 'f1' )
                         ( d = 'd2' e = 'e2' f = 'f2' )
                         ( d = 'd3' e = 'e3' f = 'f3' ) ) ).
DELETE FROM demo\_join3.
INSERT demo\_join3  FROM ( SELECT FROM demo\_join1 AS d1
                                   INNER JOIN demo\_join2 AS d2
                                     ON d1~d = d2~d
                                 FIELDS d1~a, d1~b, d2~e, d2~f ).
SELECT \*
       FROM demo\_join3
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).