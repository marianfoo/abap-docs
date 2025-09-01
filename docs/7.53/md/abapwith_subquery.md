  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

WITH subquery\_clauses

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

Possible [clauses and additions](javascript:call_link\('abenselect_clauses.htm'\)) of [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. These clauses define the results set of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry").

The results set can be used as a temporary table in subsequent subqueries and in the current WITH statement as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)).

The names of the columns of the result set are defined by the [SELECT](javascript:call_link\('abapselect_list.htm'\)) of the subquery by default. However they can be overwritten in the WITH statement. If a union set is created in the subquery using [UNION](javascript:call_link\('abapunion.htm'\)), the column names are determined by the SELECT list of the first SELECT statement.

If the clauses of the subquery contain dynamic tokens, the common table expression can only be used in other dynamic tokens of the WITH statement.

The addition [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) and the addition [OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) can only be used after [UP TO n ROWS](javascript:call_link\('abapselect_up_to_offset.htm'\)). An ORDER BY clause in a subquery is not supported by all databases. This means a syntax check warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") can occur that can be hidden using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]. If this is detected at runtime on a database that does not support the pragma, a handleable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clauses in [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This requires the constant LIMIT\_IN\_SUBSELECT\_OR\_CTE of this class to be passed to the method in an internal table.
    

-   If a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") is used to access a [](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity associated with a [](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry")[CDS](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") role and for which [](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))[CDS](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, only that data is read implicitly that matches the [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") database view of a CDS view is accessed, no access control takes place.

Example

Subquery of a common table expression +flights with almost all possible clauses. The [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause followed by the addition [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) is not supported by all database, which means a syntax warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") is raised that can be hidden here using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\].

DATA carrids TYPE RANGE OF sflight-carrid.
...
WITH
  +flights AS ( SELECT FROM sflight
                       FIELDS carrid,
                              connid,
                              AVG( seatsocc AS DEC( 16,2 ) ) AS avg
                       WHERE carrid IN @carrids
                       GROUP BY carrid, connid
                       ORDER BY carrid, connid UP TO 1 ROWS )
                       ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]
  SELECT FROM +flights AS f
           INNER JOIN scarr AS s
             ON f~carrid = s~carrid
         FIELDS s~carrname, f~connid, f~avg
         ORDER BY s~carrname, f~connid
         INTO TABLE @DATA(itab).