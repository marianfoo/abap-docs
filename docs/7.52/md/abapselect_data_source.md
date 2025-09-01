---
title: "Syntax"
description: |
  ...  dbtabview WITH PRIVILEGED ACCESS  cds_entity parameters(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_parameters.htm)path_expr WITH PRIVILEGED ACCESS  +cte  @itab(https://help.sap.com/doc/abapdocu_752_index_htm/7.5
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm"
abapFile: "abapselect_data_source.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abapselect", "source"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) → 

SELECT - data\_source

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm)

Syntax

...  dbtab*|*view *\[*WITH PRIVILEGED ACCESS*\]*
   *|* cds\_entity*\[* [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_parameters.htm)*\]**\[*\\path\_expr*\]**|**\[* WITH PRIVILEGED ACCESS*\]*
   *|* +cte
   *|* [@itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm)

Alternatives:

[1\. ... dbtab*|*view *\[*WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... cds\_entity*\[*parameters*\]**\[*\\path\_expr*\]**|**\[* WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... +cte](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... @itab](#!ABAP_ALTERNATIVE_4@4@)

Effect

Specifies an individual [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") dbtab, [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") view, [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity, a common [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte, or an [internal table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm "Glossary Entry") [@itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) in the [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry").

Alternative 1

... dbtab*|*view *\[*WITH PRIVILEGED ACCESS*\]*

Addition:

[... WITH PRIVILEGED ACCESS](#!ABAP_ONE_ADD@1@)

Effect

Specifies a database table [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") dbtab of a [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") or of an [external view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_view_glosry.htm "Glossary Entry") view. Classic views on which reads can be performed using SELECT are [database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") and [projection views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprojection_view_glosry.htm "Glossary Entry").

Notes

-   If a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") is defined as a [replacement object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) for a database table or database view specified as a data source, the SELECT statement accesses the CDS view and not the database table or the database view. In this case, it is recommended that the CDS view is used as a data source if possible.
    
-   The database table or view must be specified using the exact name defined for it in ABAP Dictionary. More specifically, it cannot be prefixed with the name for the [database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). An Open SQL statement always accesses the database schema assigned to the current [database user name](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). In cases where the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenservice_connection_glosry.htm "Glossary Entry") is used, this is the [ABAP database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In cases where a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used, this is the database schema assigned to the [database user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_user_glosry.htm "Glossary Entry") defined in the secondary connection. Here, each access assumes that the database table or view exists under this exact name in the current AS ABAP ABAP Dictionary, regardless of the connection.
    

Example

Gets the data of the [database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") DEMO\_SCARR\_SPFLI.

SELECT \*
       FROM demo\_scarr\_spfli
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @DATA(result).

Addition

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS is currently ignored by database tables and classic views.

Notes

-   If [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") is implemented for database tables and classic views in a future release, the addition WITH PRIVILEGED ACCESS will turn it off.
    
-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is made in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm).
    

Alternative 2

... cds\_entity*\[*parameters*\]**\[*\\path\_expr*\]**|**\[* WITH PRIVILEGED ACCESS*\]*

Extras:

[1\. ... \\path\_expr](#!ABAP_ADDITION_1@1@)
[2\. ... WITH PRIVILEGED ACCESS](#!ABAP_ADDITION_2@2@)

Effect

Specifies a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity created with the [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry"). Possible CDS entities are:

-   [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")
    
-   [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry")
    

The CDS entity is specified using its name cds\_entity defined after [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) or [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm).

-   If the CDS entity has input parameters, actual parameters must be assigned to these in a [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_parameters.htm) parenthesized list.
    
-   A path expression [\\path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) can be specified for CDS views with associations. This expression defines its target data source as a data source of the SELECT statement.
    

CDS table functions are database extensions that are not supported by all database systems. The ABAP CDS CDS DDL, however, enables CDS entities to be created and used as data sources regardless of the database system. In ABAP programs, CDS entities like this can also be specified as a data source of a SELECT statement regardless of the database system. The following applies here:

-   A handleable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised if the statement detects that the current database system does not support the feature. The same applies when CDS entities are accessed that contain CDS table functions as data sources.
    
-   When used, CDS entities like this produce syntax warnings that can be hidden using the pragma
    

-   ##db\_feature\_mode\[amdp\_table\_function\]

.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports CDS table functions. This requires the constant AMDP\_TABLE\_FUNCTION of the class to be passed to the method in an internal table.
    
-   The name of the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") can also be specified for a CDS view as it is defined in the annotation [@AbapCatalog.sqlViewName](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm). This type of access is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cds_obsolete.htm) and forbidden in [strict mode from Release 7.507.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm), since the CDS database view is accessed directly here handled like any [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry"). Any attributes defined for the CDS view are lost here. This applies in particular to [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) and the behavior of the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm).
    
-   If the name cds\_entity is used to access CDS entities, the syntax check runs in [strict mode from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm). Here, the statement is handled more strictly than in the regular syntax check. If [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") and database tables or classic views are both accessed in a SELECT statement, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm).
    
-   If a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") is defined for the [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") and [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) or using the addition WITH PRIVILEGED ACCESS, [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") is applied to SELECTs and only data that matches the [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") is read. If no data is read due CDS access control, sy-subrc is set to 4 as usual. When a CDS view is accessed using the CDS database view, no implicit access control takes place.
    
-   By default only [current data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_aging.htm) is read when a CDS view is accessed. The default setting can be changed using an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm).
    
-   If a CDS view contains a [pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") or [cluster table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") as data source, no CDS database view is available. Accesses using the CDS entity produces a syntax check warning. When the statement is executed, an exception is raised.
    

Example

Gets the data of the [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SCARR\_SPFLI.

SELECT \*
       FROM demo\_cds\_scarr\_spfli
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @DATA(result).

Addition 1

... \\path\_expr

Effect

Specifies a path expression [\\path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) after a CDS entity. In this case, the entity must be a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") that publishes the first [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) of the path expression in its [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm). The CDS view must be specified using its name cds\_entity defined after [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm). All [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) of the path expression must be published in the [SELECT lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) of the CDS views in question for use from outside.

The target data source of the last association of the path expression is the data source of the current SELECT statement. The data is read in accordance with the join conditions of the associations and the other conditions of the CDS views in question.

The path expression publishes only the elements of its target data source in the SELECT statement. If an element of this type is used as a [column specified](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) in other clauses of the SELECT statement and the column is assigned to the data source using the column selector ~, an alternative table name must be defined and used here using [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm). In [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm), a path expression in the data source of the FROM clause must always have an alternative table name defined with [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm).

Notes

-   A CDS view cds\_view with a path expression can be used in [join expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm), like any other data source.
    
-   In the SELECT statement, it is not possible to access elements of the views of the path expression that are in front of the target data source. This applies more specifically to the elements of the specified view cds\_view. Regular access to these elements is possible only if they are specified again as data sources of explicit join expressions in the statement.
    
-   The addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm) cannot be used if a data source is specified using a path expression.
    

Example

Accesses the CDS view DEMO\_CDS\_ASSOC\_SAIRPORT\_TZ with parameter passing and a path expression with the associations \\\_spfli and \\\_scarr in the FROM clause.

SELECT FROM demo\_cds\_assoc\_sairport\_tz( tz = 'UTC+1' )
            \\\_spfli
            \\\_scarr\[ currcode = 'EUR' \]
            AS scarr
       FIELDS carrname
       ORDER BY carrname
       INTO TABLE @DATA(result).

Executable Example

[Path Expressions, Use in the FROM Clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpath_expr_in_from_clause_abexa.htm)

Addition 2

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS switches [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") off.

When a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") is accessed that is associated with a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry"), its [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are not evaluated.

The addition WITH PRIVILEGED ACCESS cannot be used together with a path expression \\path\_expr. It is applied only to that CDS entity for which it is specified. It is not applied to the CDS entities published using associations of the specified CDS entity.

Notes

-   CDS access control can also be switched off using the annotation [@AccessControl.authorizationCheck:#NOT\_ALLOWED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) when a CDS entity is defined.
    
-   The addition WITH PRIVILEGED ACCESS overrides all delivered and self-defined roles.
    
-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is made in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_752.htm).
    

Example

Uses the addition WITH PRIVILEGED ACCESS when the CDS view DEMO\_CDS\_AUTH\_LITERAL is accessed, which is associated with the following CDS role:

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

Unlike the program DEMO\_CDS\_AUTH\_LITERAL, the following read reads all data of the view.

SELECT \*
       FROM demo\_cds\_auth\_literal WITH PRIVILEGED ACCESS
       ORDER BY carrid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Alternative 3

... +cte

Effect

Specifies a [common table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") cte in a subquery or the closing [main query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmainquery_glosry.htm "Glossary Entry") of a [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm) statement.

The SELECT statement accesses the results set of the common table expression. All common table expressions can be used that were defined in the same WITH statement in front of the current SELECT statement.

Note

If a common table expression is used as the data source, a temporary database table is accessed, which is available during the WITH statement.

Example

Accesses the results set of the common table expression +carriers in a join expression of the FROM clause of the main query of the statement [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm).

WITH +carriers AS (
  SELECT carrid, carrname
         FROM scarr )
  SELECT FROM +carriers
           INNER JOIN spfli
             ON +carriers~carrid = spfli~carrid
         FIELDS +carriers~carrname,
                spfli~connid,
                spfli~cityfrom,
                spfli~cityto
         WHERE spfli~carrid = 'LH'
         INTO TABLE @DATA(result).

Alternative 4

... @itab

Effect

Specifies an internal table [@itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) whose name itab must be prefixed with the @ character. More information can be found under [SELECT - FROM @itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm).

Example

Uses SELECT to access an internal table using as an alternative to the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm). Unlike READ TABLE, the statement SELECT offers a (dynamic) WHERE condition and evaluates the field list for the [inline declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry"). The statement is executed on the application server and the data in the internal table is not transported to the database.

DATA itab TYPE TABLE OF scarr WITH EMPTY KEY.
...
DATA cond TYPE string.
...
SELECT SINGLE
       FROM @itab AS carriers
       FIELDS carrid, carrname
       WHERE (cond)
       INTO @DATA(wa).

Continue
[SELECT - FROM @itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm)