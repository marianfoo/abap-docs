---
title: "Syntax"
description: |
  ...  dbtab view  WITH PRIVILEGED ACCESS  cds_entity sql_para(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_parameters.htm) sql_path(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) WITH PRIVILEGED
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm"
abapFile: "abapselect_data_source.htm"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abapselect", "source"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) → 

SELECT, FROM data\_source

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_shortref.htm)

Syntax

...  dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*
   *|* cds\_entity*\[* [sql\_para](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_parameters.htm)*\]**\[* [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm)*\]**|**\[* WITH PRIVILEGED ACCESS*\]*
   *|* +cte*\[*[sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm)*\]*
   *|* [hierarchy\_data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm)
   *|* [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm)

Alternatives:

[1\. ... dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... cds\_entity*\[*sql\_para*\]**\[*sql\_path*\]**|**\[* WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... +cte*\[*sql\_path*\]*](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... hierarchy\_data](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... @itab](#!ABAP_ALTERNATIVE_5@5@)

Effect

Specifies an individual [DDIC database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_db_table_glosry.htm "Glossary Entry") dbtab, [DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry") view, non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity, a common [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte, [hierarchy data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm), or an [internal table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry") [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm) in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry"). Only views whose key fields are located together at the beginning of the view can be accessed.

Alternative 1

... dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*

Addition:

[... WITH PRIVILEGED ACCESS](#!ABAP_ONE_ADD@1@)

Effect

Specifies an ABAP Dictionary [DDIC database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_db_table_glosry.htm "Glossary Entry") dbtab of a [DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry") or an [external DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexternal_view_glosry.htm "Glossary Entry") view. . Dictionary views on which reads can be performed using SELECT are [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_view_glosry.htm "Glossary Entry") and [DDIC projection views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_proj_view_glosry.htm "Glossary Entry").

Hints

-   If a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") is defined as a [replacement object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_replacement_objects.htm) for a DDIC database table or DDIC database view specified as a data source, the SELECT statement accesses the CDS view and not the DDIC database table or the DDIC database view. In this case, it is recommended that the CDS view is used as a data source if possible.

-   The database table or view must be specified using the exact name defined for it in ABAP Dictionary. More specifically, it cannot be prefixed with the name for the [database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_schema_glosry.htm "Glossary Entry"). An ABAP SQL statement always accesses the database schema assigned to the current [database user name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). In cases where the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") or a [service connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenservice_connection_glosry.htm "Glossary Entry") is used, this is the [ABAP database schema](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). In cases where a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is used, this is the database schema assigned to the [database user](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_user_glosry.htm "Glossary Entry") defined in the secondary connection. Here, each access assumes that the database table or view exists under this exact name in the current AS ABAP's ABAP Dictionary, regardless of the connection.

Example

Gets the data of the [DDIC database view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_view_glosry.htm "Glossary Entry") DEMO\_SCARR\_SPFLI.

SELECT \*
       FROM demo\_scarr\_spfli
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @DATA(result).

Addition

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS is currently ignored by DDIC database tables and DDIC views .

Hints

-   If [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") is implemented for DDIC database tables and DDIC views in a future release, the addition WITH PRIVILEGED ACCESS will turn it off.

-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is made in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm).
    

Alternative 2

... cds\_entity*\[*sql\_para*\]**\[*sql\_path*\]**|**\[* WITH PRIVILEGED ACCESS*\]*

Additions:

[1\. ... sql\_path](#!ABAP_ADDITION_1@1@)
[2\. ... WITH PRIVILEGED ACCESS](#!ABAP_ADDITION_2@2@)

Effect

Specifies a non-abstract [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") cds\_entity created with the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry"). Possible CDS entities are:

-   [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

The CDS entity cds\_entity is specified using its name defined after the respective [DEFINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) statement of the [CDS DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_glosry.htm "Glossary Entry").

-   If the CDS entity has input parameters, actual parameters must be assigned to these in a parenthesized list [sql\_para](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_parameters.htm).

-   A path expression [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) can be specified for CDS views or CDS hierarchies with [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry"). This expression defines its [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") as a data source of the SELECT statement.

CDS table functions and CDS hierarchies are database extensions that are not supported by all database systems. The CDS DDL in ABAP CDS, however, enables CDS entities to be created and used as data sources regardless of the database system. In ABAP programs, CDS entities like this can also be specified as a data source of a SELECT statement regardless of the database system. The following applies here:

-   A catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised if the statement detects that the current database system does not support the feature. The same applies when CDS entities are accessed that contain CDS table functions or CDS hierarchies as data sources.

-   When used, CDS entities like this produce syntax warnings from the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_glosry.htm "Glossary Entry"). These warnings can be hidden using the pragma

-   ##db\_feature\_mode\[amdp\_table\_function\]

CDS hierarchies are handled like [SQL hierarchies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") and special [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm) apply.

Hints

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports CDS table functions or CDS hierarchies. This requires the constant AMDP\_TABLE\_FUNCTION or HIERARCHIES of the class to be passed to the method in an internal table.

-   A [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is a [DDIC database view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_view_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), however its use as a data source in ABAP SQL is [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_cds_obsolete.htm) and forbidden in the [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm). This is because the properties defined for the CDS view are lost. This applies in particular to [client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm) and the behavior of the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) and to [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry").

-   [Abstract CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") cannot be accessed in ABAP SQL.

-   If the name cds\_entity is used to access CDS entities, the syntax check runs in [strict mode from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp05.htm). Here, the statement is handled more strictly than in the regular syntax check. If [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") and DDIC database tables or DDIC views are both accessed in a SELECT statement, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm).

-   If a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") is defined for the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") and [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck or using the addition WITH PRIVILEGED ACCESS, [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") is applied to SELECT statements and only data that matches the [access conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") is read. If no data is read due CDS access control, sy-subrc is set to 4 as usual. When a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is accessed, no implicit access control takes place.

-   By default, [data aging](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_aging_glosry.htm "Glossary Entry") is respected when an [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") is accessed and only current data is read. This default setting can be changed using various methods.
    

Example

Gets the data of the [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SCARR\_SPFLI.

SELECT \*
       FROM demo\_cds\_scarr\_spfli
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @DATA(result).

Addition 1

... sql\_path

Effect

Specifies a path expression [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) after a CDS entity. In this case, the entity must be a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), or a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") that exposes the first [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") of the path expression in its SELECT list or element list. A CDS view must be specified using its name cds\_entity defined after [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm). All [CDS associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") of the path expression must be exposed in the SELECT lists of the CDS entities in question for use from outside.

The [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the last CDS association of the path expression is the data source of the current SELECT statement. The data is read in accordance with the join conditions of the CDS associations and the other conditions of the CDS views in question.

The path expression exposes only the elements of its [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the SELECT statement. If an element of this type is used as a [column specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) in other clauses of the SELECT statement and the column is assigned to the data source using the column selector ~, an alias name must be defined and used here using [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). A path expression in the data source of the FROM clause must have an alias name defined with [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm). This is checked in [strict mode as of release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm).

Hints

-   A CDS entity cds\_entity with a path expression can be used in [join expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm), like any other data source.

-   In the SELECT statement, it is not possible to access elements of the entities of the path expression that are in front of the [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry"). This applies more specifically to the elements of the specified entity cds\_entity. Regular access to these elements is possible only if they are specified again as data sources of explicit join expressions in the statement.

-   The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) cannot be used if a data source is specified using a path expression.

-   As the path expression is specified directly after cds\_entity, [source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) cannot and must not be specified here.

-   A path expression cannot contain CDS associations of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry").

Example

Accesses the CDS view DEMO\_CDS\_ASSOC\_SAIRPORT\_TZ with parameter passing and a path expression with the CDS associations \\\_spfli and \\\_scarr in the FROM clause.

SELECT FROM demo\_cds\_assoc\_sairport\_tz( tz = 'UTC+1' )
            \\\_spfli
            \\\_scarr\[ currcode = 'EUR' \]
            AS scarr
       FIELDS carrname
       ORDER BY carrname
       INTO TABLE @DATA(result).

Executable Example

[Path Expressions, Use in the FROM Clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpath_expr_in_from_clause_abexa.htm)

Addition 2

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS disables [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry").

When a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") is accessed that is associated with a [CDS role](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry"), its [access conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are not evaluated.

The addition WITH PRIVILEGED ACCESS cannot be used together with a path expression sql\_path. It is applied only to that CDS entity for which it is specified. It is not applied to the CDS entities exposed using CDS associations of the specified CDS entity.

Hints

-   The addition WITH PRIVILEGED ACCESS overrides all delivered and self-defined roles.

-   CDS access control can also be disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED when a non-abstract CDS entity is defined.

-   In [updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthority_during_update.htm), the addition WITH PRIVILEGED ACCESS must be specified when accessing all CDS entities for which CDS access control is not disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED.

-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is made in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm).

Example

Uses the addition WITH PRIVILEGED ACCESS when the CDS view DEMO\_CDS\_AUTHORITY\_LITERAL is accessed, which is associated with the following CDS role:

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

... +cte*\[*sql\_path*\]*

Addition:

[... sql\_path](#!ABAP_ONE_ADD@2@)

Effect

Specifies a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") cte in a subquery or the closing [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") of a [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement.

The SELECT statement accesses the result set of the common table expression. All common table expressions can be used that were defined in the same WITH statement in front of the current SELECT statement.

Hint

If a common table expression is used as the data source, a temporary database table is accessed, which is available during the WITH statement.

Example

Accesses the result set of the common table expression +carriers in a join expression of the FROM clause of the main query of the statement [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm).

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

Addition

... sql\_path

Effect

Specifies a path expression [sql\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) after a [common table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") +cte that is specified as the data source of a query in a [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement. The common table expression must expose the first association of the path expression with the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith_associations.htm). The association can be a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") or a [CTE association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencte_association_glosry.htm "Glossary Entry").

The same rules apply as when specifying a path expression after a CDS entity cds\_entity that is specified as a data source. In particular, the path expression must have an alias name defined with [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm).

Example

The [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the path expression \\\_scarr exposed by the common table expression +cte is used as the data source of the [main query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmainquery_glosry.htm "Glossary Entry") of a [WITH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwith.htm) statement.

WITH
  +cte AS ( SELECT \*
                   FROM demo\_cds\_assoc\_spfli\_scarr )
             WITH ASSOCIATIONS ( \\\_scarr )
  SELECT carrid, carrname
         FROM +cte\\\_scarr AS scarr
         INTO TABLE @DATA(result).

Alternative 4

... hierarchy\_data

Effect

Specifies the following [hierarchy data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm):

-   An [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm)

-   A [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") [hierarchy\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm) that accesses an [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry").

Example

Accesses an SQL hierarchy as a data source created by the hierarchy generator [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm).

SELECT hierarchy~\*, hierarchy\_level
       FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS ALLOWED ) AS hierarchy
       INTO TABLE @DATA(result).

Alternative 5

... @itab

Effect

Specifies an internal table [@itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm) as a [host variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm), whose name itab must be prefixed with the @ character. More information can be found under [SELECT - FROM @itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm).

Example

Uses SELECT to access an internal table using as an alternative to the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm). Unlike READ TABLE, the statement SELECT offers a (dynamic) WHERE condition and evaluates the field list for the [inline declaration](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declaration_glosry.htm "Glossary Entry"). The statement is executed on the AS ABAP and the data in the internal table is not transported to the database.

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
[SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm)
[SELECT, FROM @itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_itab.htm)