---
title: "Syntax"
description: |
  ...  FROM(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) source FIELDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfields_clause.htm) select_clause(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith_subquery.htm"
abapFile: "abapwith_subquery.htm"
keywords: ["select", "insert", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abapwith", "subquery"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20subquery_clauses%2C%20ABAPWITH_SUBQUERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, subquery\_clauses

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab_shortref.htm)

Syntax

... *{* [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) source
      [FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfields_clause.htm) [select\_clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm) *}*
  *|* *{* [select\_clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm)
      [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) source *}*
      *\[*[WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm)*\]*
      *\[* [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm) group*\]* *\[*[HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) group\_cond*\]*
      *\[* [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) [*\[*UP TO n ROWS *\[*OFFSET o*\]**\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm)*\]*
      *\[*[db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm)*\]*  ...

Effect

Possible [clauses and additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_clauses.htm) of [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") of a [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwith.htm) statement. These clauses define the result set of a [common table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommon_table_expression_glosry.htm "Glossary Entry").

The result set can be used as a temporary table in subsequent subqueries and in the main query of the current WITH statement as a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm).

The names of the columns of the result set are defined by the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of the subquery by default. However, they can be overwritten in the WITH statement. If a union set, an intersection set, or a difference set is created in the subquery using [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm), or [EXCEPT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion.htm) the column names are determined by the SELECT list of the first SELECT statement.

If the clauses of the subquery contain dynamic tokens, the common table expression can only be used in other dynamic tokens of the WITH statement.

The addition [UP TO n ROWS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) can only be used after [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) and the addition [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) can only be used after [UP TO n ROWS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm). An ORDER BY clause in a subquery is not supported by all databases. This means a syntax check warning from the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") can occur that can be hidden using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\]. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

Hints

-   If a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") accesses a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") that is linked with a [CDS role](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_role_glosry.htm "Glossary Entry") and for which [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) clause or [PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_privileged_access.htm) for the complete SELECT statement, only that data is read that meets the [access condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") defined in the CDS role. If data cannot be read, ABAP programs cannot distinguish whether this is due to the conditions of the SELECT statement, the conditions of the CDS entity, or an associated CDS role. If the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is accessed, no access control takes place.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) clauses in [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry"). This requires the constant LIMIT\_IN\_SUBSELECT\_OR\_CTE of this class to be passed to the method in an internal table.

Example

Subquery of a common table expression +flights with almost all possible clauses. Since the [ORDER BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) clause followed by the addition [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) is not supported by all databases, a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") is raised that can be hidden here using the pragma ##db\_feature\_mode\[limit\_in\_subselect\_or\_cte\].

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
         INTO TABLE @FINAL(itab).

Example

This example demonstrates a common table expression in which all clauses of the subquery and the main query are specified as dynamic tokens. In the [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) clause, the addition [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_into_target.htm) and the declaration operator [@FINAL(...)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_into_target.htm) are used to declare a generic data reference variable that points to the result in an anonymous data object.

DATA carrid TYPE spfli-carrid VALUE 'LH'.
cl\_demo\_input=>request( CHANGING field = carrid ).
DATA:
  sel\_sub1 TYPE string VALUE \`cityfrom AS city\`,
  sel\_sub2 TYPE string VALUE \`cityto AS city\`,
  frm\_sub  TYPE string VALUE \`spfli\`,
  whr\_sub  TYPE string VALUE \`carrid = @carrid\`,
  sel\_main TYPE string VALUE \`\*\`,
  frm\_main TYPE string VALUE \`sgeocity\`,
  whr\_main TYPE string VALUE \`city IN ( SELECT city FROM +cities )\`.
WITH
  +cities AS (
    SELECT (sel\_sub1)
           FROM (frm\_sub)
           WHERE (whr\_sub)
    UNION DISTINCT
    SELECT (sel\_sub1)
           FROM (frm\_sub)
           WHERE (whr\_sub) )
  SELECT (sel\_main)
         FROM (frm\_main)
         WHERE (whr\_main)
         INTO TABLE NEW @FINAL(result).
cl\_demo\_output=>display( result->\* ).