  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Replacement Objects

A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be assigned to a [transparent](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) and [DDIC database view](javascript:call_link\('abenddic_database_views.htm'\)) in ABAP Dictionary as a replacement object using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A prerequisite is that the structure type defined by the CDS view matches the structure of the DDIC database table or DDIC database view as follows:

-   The number of components must match.
-   It must be possible to assign a component of the CDS view to each component of the DDIC database table or DDIC database view:
    
    -   A [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") is assigned regardless of its name.
    -   For all other components of the DDIC database table, an identically named element of the CDS view must exist.
    
    The order of the components in the DDIC database table and the CDS view does not need to match.
    
-   The technical type properties [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and number of decimal places must match for all assigned components.
-   The CDS view cannot have any input parameters.
-   It is not possible to have both a replacement object defined and table buffering switched on for a DDIC database view whose maintenance status is modifiable.

If a DDIC database table or a DDIC database view is accessed and a replacement object is assigned to the table or view in the following cases, the replacement object is evaluated instead of the DDIC database table or DDIC database view:

-   When used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). This also applies to [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in any ABAP SQL statement and to the statements [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) and [FETCH](javascript:call_link\('abapfetch.htm'\)). This bypasses any [table buffering](javascript:call_link\('abensap_puffering.htm'\)) defined for the DDIC database table or the DDIC database view.
-   When a [foreign key relationship](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") is checked for Web Dynpros or dynpros.

All other access types are still performed on the DDIC database table or DDIC database view, such as:

-   Writes in ABAP SQL
    
    -   [Writes](javascript:call_link\('abenabap_sql_writing.htm'\)) in ABAP SQL
    -   Use of the addition [SINGLE FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) in the statement [SELECT](javascript:call_link\('abapselect.htm'\))
    
    Writes of this type produce a syntax check warning.
    
-   Use in other database objects, such as:
    
    -   Use as a data source of a view defined on the database
    -   Access from database procedures or database functions
    
    Here it is not important how the database object was created, which means that, in addition to native views, the views defined for [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary or for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") on the database also do not access the replacement object. A similar principle applies to [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"). Even if ABAP SQL is used to access a DDIC database view in ABAP Dictionary, a CDS view, or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") comprising DDIC database tables with replacement objects, no redirection is performed. In these cases, the replacement object must be accessed directly. For DDIC database views, a replacement object can be created that performs this task without the need to modify the programs.
    
-   Access types other than with ABAP SQL, for example:
    -   Access using [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) FROM [DATABASE](javascript:call_link\('abapimport_medium.htm'\)), or [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) TO [DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)).
    -   Access using [Native SQL](javascript:call_link\('abennative_sql.htm'\)) ([ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), [EXEC SQL](javascript:call_link\('abapexec.htm'\))), and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

When a replacement object is defined for a DDIC database table for a DDIC database view, the system checks whether the specified CDS view meets the prerequisites. If a CDS view used as a replacement object is changed later and the prerequisites are no longer met, a runtime error DBSQL\_REDIRECT\_INCONSISTENCY occurs when an ABAP SQL read is performed on the DDIC database table or on the DDIC database view.

No replacement objects can be defined for [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry"). In customer systems, replacement objects can only be defined for self-defined database views and not for DDIC database tables.

If there is a diversion to a CDS view for which one or more [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are defined as part of the [CDS access control,](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") the associated access conditions are not evaluated when the replacement object is accessed.

Hints

-   Extreme care should be taken when specifying a replacement object for a DDIC database table or a DDIC database view. Incorrect usage can cause inconsistencies.
-   Replacement objects are mainly intended for existing aggregate tables. These are DDIC database tables, which contain aggregated data from other tables. Instead of aggregating data in an ABAP program and writing data to an aggregate table, which can be exclusively accessed by reads in programs, the aggregation can be performed for every read using the CDS view. This prevents redundant data from being stored. In addition, aggregation on the database can improve performance if it is necessary to read large volumes of data for aggregation in ABAP. Replacement objects can make this possible without invalidating the programs.
-   A prerequisite for assigning a replacement object to an existing DDIC database table or DDIC database view is that the CDS view returns the expected data and that, apart from aggregation, only ABAP SQL reads are performed on the aggregate table.
-   Once a replacement object is defined, no further writes should be performed on an aggregate table. These writes produce a syntax check warning and are scheduled to be disallowed in an upcoming release.
-   Make sure that, apart from the use of ABAP SQL, no other type of access is performed on an aggregate table with a replacement object. More specifically, CDS views used as a replacement object are not allowed to access the replaced object, because the content is usually no longer updated.
-   It is not advisable to transport table content for which a replacement object is defined. This content is scheduled to no longer be transported in an upcoming release.
-   Table buffering should be deactivated for an aggregate table for which a replacement object is defined to prevent buffer invalidations.
-   In customer systems, it may be useful to define a replacement object for a self-defined DDIC database view, if a replacement object was defined for one of their basis tables at SAP. In this case, the replacement object of the view must access the replacement object of the basis table.
-   If a DDIC database table or a DDIC database view , which a replacement object is defined for, is [extended](javascript:call_link\('abenddic_enhancements.htm'\)) in a follow-on system, the assigned CDS view must also be extended accordingly with [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)).
-   The [DDIC projection view](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry"), [DDIC maintenance views](javascript:call_link\('abenmaintenance_view_glosry.htm'\) "Glossary Entry"), and [DDIC help views](javascript:call_link\('abenhelp_view_glosry.htm'\) "Glossary Entry") are not defined on the database. Access to their basis tables is carried out on AS ABAP by using ABAP SQL. If a basis table has a replacement object, its reads are redirected as required.
-   Frameworks that use ABAP SQL, such as [Data Browser](javascript:call_link\('abendata_browser_glosry.htm'\) "Glossary Entry"), automatically access replacement objects if these objects are defined for a DDIC database table or a DDIC database view. Frameworks that use Native SQL or AMDP, such as the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"), have to make sure that they access a replacement object rather than the DDIC database table or the DDIC database view.
-   If possible, programs that previously directly accessed aggregate tables or views with aggregate tables as base tables should be modified in such a way that they access the CDS views used as replacement objects directly. However, this cannot generally be done by simply replacing the data source in the SELECT statements concerned, for example because a client-dependent CDS view has no client column and therefore the target objects used no longer match. In addition, when a CDS view is accessed directly, the [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined for this CDS view have an effect.
-   Replacement objects cannot be defined for the following:
    -   [DDIC Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
    -   [DDIC Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
    -   [DDIC Help Views](javascript:call_link\('abenddic_help_views.htm'\))

Executable Example

[Replacement Object for Database Table](javascript:call_link\('abenddic_replacement_object_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - Replacement Object for Database Table](javascript:call_link\('abenddic_replacement_object_abexa.htm'\))