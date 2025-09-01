  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM data_source, ABAPSELECT_DATA_SOURCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM data\_source

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

...  dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*
   *|* cds\_entity*\[* [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\))*\]**\[* [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\))*\]**|**\[* WITH PRIVILEGED ACCESS*\]*
   *|* +cte*\[*[sql\_path](javascript:call_link\('abenabap_sql_path.htm'\))*\]*
   *|* [hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\))
   *|* [@itab](javascript:call_link\('abapselect_itab.htm'\))

Alternatives:

[1\. ... dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... cds\_entity*\[*sql\_para*\]**\[*sql\_path*\]**|**\[* WITH PRIVILEGED ACCESS*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... +cte*\[*sql\_path*\]*](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... hierarchy\_data](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... @itab](#!ABAP_ALTERNATIVE_5@5@)

Effect

Specifies an individual [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") dbtab, [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") view, non-abstract [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity, a common [table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte, [hierarchy data](javascript:call_link\('abenselect_hierarchy_data.htm'\)), an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") [@itab](javascript:call_link\('abapselect_itab.htm'\)), or a [CDS system entity](javascript:call_link\('abencds_system_entity_glosry.htm'\) "Glossary Entry") in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

Regarding views, there is the restriction that only those whose key fields are located together at the beginning of the view can be accessed.

Alternative 1   

... dbtab *|*view  *\[*WITH PRIVILEGED ACCESS*\]*

Addition:

[... WITH PRIVILEGED ACCESS](#!ABAP_ONE_ADD@1@)

Effect

Specifies a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") dbtab or a [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") or an [external DDIC view](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") view. DDIC views on which reads can be performed using SELECT are [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") and [DDIC projection views](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry").

Hints

-   If a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for a DDIC database table or DDIC database view specified as a data source, the SELECT statement accesses the CDS view and not the DDIC database table or the DDIC database view. In this case, it is recommended that the CDS view is used as a data source if possible.
-   A [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"), however its use as a data source in ABAP SQL is [obsolete](javascript:call_link\('abenabap_sql_cds_obsolete.htm'\)) and forbidden in the [strict mode from Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)) because the properties defined for the CDS view can be lost. This applies in particular to [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) and the behavior of the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) and to [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").
-   The database table or view must be specified using the exact name defined for it in the ABAP Dictionary. More specifically, no name for the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") can be prefixed. An ABAP SQL statement always accesses the database schema assigned to the current [database user name](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry"). In cases where the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") or a [service connection](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry") is used, this is the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). In cases where a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") is used, this is the database schema assigned to the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") defined in the secondary connection. Here, each access requires the database table or view to exist under this exact name in the ABAP Dictionary of the current AS ABAP, regardless of the connection.

Example

Reading of the data of the CDS view entity DEMO\_CDS\_SCARR\_SPFLI\_VE.

SELECT \*
       FROM demo\_cds\_scarr\_spfli\_ve
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @FINAL(result).

Addition   

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS is currently ignored by DDIC database tables and DDIC views.

Hints

-   If [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is implemented for DDIC database tables and DDIC views in a future release, the addition WITH PRIVILEGED ACCESS will turn it off.
-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is performed in [strict mode from Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

Alternative 2   

... cds\_entity*\[*sql\_para*\]**\[*sql\_path*\]**|**\[* WITH PRIVILEGED ACCESS*\]*

Additions:

[1\. ... sql\_path](#!ABAP_ADDITION_1@1@)
[2\. ... WITH PRIVILEGED ACCESS](#!ABAP_ADDITION_2@2@)

Effect

Specifies a non-abstract [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity created with the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). Possible CDS entities are:

-   [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")
-   [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
-   [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")

The CDS entity cds\_entity is specified using its name defined after the respective [DEFINE](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) statement of the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

-   If the CDS entity has input parameters, actual parameters must be assigned to them in a parenthesized list [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\)).
-   A path expression [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) can be specified for CDS views or CDS hierarchies with [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). This expression defines its [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") as a data source of the SELECT statement.

CDS table functions and CDS hierarchies are database extensions that are not supported by all database systems. The CDS DDL in ABAP CDS, however, enables CDS entities to be created and used as data sources regardless of the database system. In ABAP programs, CDS entities like this can also be specified as a data source of a SELECT statement regardless of the database system. The following applies here:

-   A catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised if the statement detects that the current database system does not support the feature. The same applies when CDS entities are accessed that contain CDS table functions or CDS hierarchies as data sources.
-   When used, CDS entities like this produce syntax warnings from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry"), which can be hidden using the pragma
    -   ##db\_feature\_mode\[amdp\_table\_function\]

CDS hierarchies are handled like [SQL hierarchies](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") and special [rules](javascript:call_link\('abenselect_hierarchy.htm'\)) apply.

Hints

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports CDS table functions or CDS hierarchies. This requires the constant AMDP\_TABLE\_FUNCTION or HIERARCHIES of the class to be passed to the method in an internal table.
-   [Abstract CDS entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") cannot be accessed in ABAP SQL.
-   There are special [CDS system entities](javascript:call_link\('abencds_system_entities.htm'\)) for usage in ABAP SQL and in ABAP CDS that contain general functionality for generating tabular data.
-   If the name cds\_entity is used to access CDS entities, the syntax check is performed in a [strict mode from Release 7.40, SP05](javascript:call_link\('abenabap_sql_strictmode_740_sp05.htm'\)). Here, the statement is handled more strictly than in the regular syntax check. If [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and DDIC database tables or DDIC views are both accessed in a SELECT statement, the syntax check is performed in a [strict mode from Release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)).
-   If a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is defined for the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is not disabled using the value #NOT\_ALLOWED for the annotation @AccessControl.authorizationCheck or using the addition WITH PRIVILEGED ACCESS, [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is applied to SELECT statements and only data that matches the [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") is read. If no data is read due CDS access control, sy-subrc is set to 4 as usual. When a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is accessed, no implicit access control takes place. This kind of access is [obsolete](javascript:call_link\('abencds_access_obsolete.htm'\)).
-   By default, [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected when an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed, and only current data is read. This default setting can be changed using various methods.

Example

Reading of the data of the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_SCARR\_SPFLI.

SELECT \*
       FROM demo\_cds\_scarr\_spfli
       ORDER BY id, carrier, flight, departure, destination
       INTO TABLE @FINAL(result).

Example

The following source code demonstrates the creation of a series of numbers using the [CDS system table function](javascript:call_link\('abencds_system_tabfunc_glosry.htm'\) "Glossary Entry") SERIES\_GENERATE\_INTEGER.

SELECT \* FROM series\_generate\_integer( step       = 2,
                                       from\_value = 1,
                                       to\_value   = 10 )
  ORDER BY element\_number
  INTO TABLE @FINAL(integer\_series\_gen).
cl\_demo\_output=>display( integer\_series\_gen ).

Addition 1   

... sql\_path

Effect

Specifies a path expression [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) after a CDS entity. In this case, the entity must be a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") (deprecated), or a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") that exposes the first [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of the path expression in its SELECT list or element list. A CDS view must be specified using its name cds\_entity defined after [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)). All [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of the path expression must be exposed in the SELECT lists of the CDS entities involved for use from outside.

The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the last CDS association of the path expression is the data source of the current SELECT statement. The data is read in accordance with the join conditions of the CDS associations and the other conditions of the CDS views involved.

The path expression exposes only the elements of its [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") in the SELECT statement. If an element of this type is used as a [column specified](javascript:call_link\('abenabap_sql_columns.htm'\)) in other clauses of the SELECT statement and the column is assigned to the data source using the column selector ~, an alias name must be defined and used here using [AS](javascript:call_link\('abapfrom_clause.htm'\)). Each path expression in the data source of the FROM clause must have an alias name defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)). This is checked in [strict mode as of release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

Hints

-   A CDS entity cds\_entity with a path expression can be used in [join expressions](javascript:call_link\('abapselect_join.htm'\)), like any other data source.
-   In the SELECT statement, it is not possible to access elements of the entities of the path expression that are in front of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"). This applies more specifically to the elements of the specified entity cds\_entity. Regular access to these elements is possible only if they are specified again as data sources of explicit join expressions in the statement.
-   The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be used if a data source is specified using a path expression.
-   As the path expression is specified directly after cds\_entity, [source](javascript:call_link\('abenabap_sql_path.htm'\)) cannot and must not be specified here.
-   A path expression cannot contain CDS associations of an [abstract CDS entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

Example

Accesses the CDS view DEMO\_CDS\_ASSOC\_SAIRPORT\_TZ with parameter passing and a path expression with the CDS associations \\\_spfli and \\\_scarr in the FROM clause.

SELECT FROM demo\_cds\_assoc\_sairport\_tz( tz = 'UTC+1' )
            \\\_spfli
            \\\_scarr\[ currcode = 'EUR' \]
            AS scarr
       FIELDS carrname
       ORDER BY carrname
       INTO TABLE @FINAL(result).

Executable Example

[Path Expressions, Use in the FROM Clause](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\))

Addition 2   

... WITH PRIVILEGED ACCESS

Effect

The addition WITH PRIVILEGED ACCESS disables [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry").

When a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is accessed to which a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned, its [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") are not evaluated.

The addition WITH PRIVILEGED ACCESS cannot be specified together with a path expression sql\_path. It affects only the CDS entity for which it is specified. It does not affect the CDS entities exposed using CDS associations of the specified CDS entity.

Hints

-   The addition WITH PRIVILEGED ACCESS overrides all delivered and self-defined roles.
-   CDS access control can also be disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED when a non-abstract CDS entity is defined.
-   In [updates](javascript:call_link\('abenauthority_during_update.htm'\)), the addition WITH PRIVILEGED ACCESS must be specified when accessing all CDS entities for which CDS access control is not disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED.
-   If the addition WITH PRIVILEGED ACCESS is specified, the syntax check is performed in [strict mode from Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

Example

Use of the addition WITH PRIVILEGED ACCESS when the CDS view DEMO\_CDS\_AUTHORITY\_LITERAL\_2 is accessed, which is linked with the following CDS role:

@MappingRole: true
define role demo\_cds\_role\_literal\_2 {
  grant select on demo\_cds\_authority\_literal\_2
  where carrid = 'LH'; }

Unlike the program DEMO\_CDS\_AUTH\_LITERAL, the following read reads all data of the view.

SELECT \*
       FROM demo\_cds\_authority\_literal\_2 WITH PRIVILEGED ACCESS
       ORDER BY carrid
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Alternative 3   

... +cte*\[*sql\_path*\]*

Addition:

[... sql\_path](#!ABAP_ONE_ADD@2@)

Effect

Specifies a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") cte in a subquery or the closing [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of a [WITH](javascript:call_link\('abapwith.htm'\)) statement.

The SELECT statement accesses the result set of the common table expression. All common table expressions can be used that were defined in the same WITH statement in front of the current SELECT statement.

Hint

If a common table expression is used as the data source, a temporary database table is accessed, which is available during the WITH statement.

Example

Access to the result set of the common table expression +carriers in a join expression of the FROM clause of the main query of the statement [WITH](javascript:call_link\('abapwith.htm'\)).

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
         INTO TABLE @FINAL(result).

Addition   

... sql\_path

Effect

Specifies a path expression [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)) after a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") +cte that is specified as the data source of a query in a [WITH](javascript:call_link\('abapwith.htm'\)) statement. The common table expression must expose the first association of the path expression with the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)). The association can be a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or a [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry").

The same rules apply as when specifying a path expression after a CDS entity cds\_entity that is specified as a data source. In particular, the path expression must have an alias name defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)).

Example

The [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the path expression \\\_scarr exposed by the common table expression +cte is used as the data source of the [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") of a [WITH](javascript:call_link\('abapwith.htm'\)) statement.

WITH
  +cte AS ( SELECT \*
                   FROM demo\_cds\_assoc\_spfli\_scarr )
             WITH ASSOCIATIONS ( \\\_scarr )
  SELECT carrid, carrname
         FROM +cte\\\_scarr AS scarr
         INTO TABLE @FINAL(result).

Alternative 4   

... hierarchy\_data

Effect

Specifies the following [hierarchy data](javascript:call_link\('abenselect_hierarchy_data.htm'\)):

-   An [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") [hierarchy](javascript:call_link\('abenselect_hierarchy.htm'\))
-   A [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_data.htm'\)) that accesses an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry").

Example

Access to an SQL hierarchy as a data source created by the hierarchy generator [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)).

SELECT hierarchy~\*, hierarchy\_level
       FROM HIERARCHY( SOURCE demo\_cds\_parent\_child\_source
                       CHILD TO PARENT ASSOCIATION \_relat
                       START WHERE id = 'A'
                       MULTIPLE PARENTS ALLOWED ) AS hierarchy
       INTO TABLE @FINAL(result).

Alternative 5   

... @itab

Effect

Specifies an internal table [@itab](javascript:call_link\('abapselect_itab.htm'\)) as a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) whose name itab must be prefixed with the @ character. For more information, see [SELECT - FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

Example

Use of SELECT to access an internal table using as an alternative to the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)). Unlike READ TABLE, the statement SELECT offers a (dynamic) WHERE condition and evaluates the field list for the [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry"). The statement is executed on the AS ABAP and the data in the internal table is not transported to the database.

DATA itab TYPE TABLE OF scarr WITH EMPTY KEY.
...
DATA cond TYPE string.
...
SELECT SINGLE
       FROM @itab AS carriers
       FIELDS carrid, carrname
       WHERE (cond)
       INTO @FINAL(wa).

Continue
[SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\))
[SELECT, FROM @itab](javascript:call_link\('abapselect_itab.htm'\))