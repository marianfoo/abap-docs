  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) → 

Replacement Objects

A [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") can be assigned to a [transparent](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry") [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and classic [database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) in ABAP Dictionary as a replacement object using the name of its [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"). A prerequisite is that the structure type defined by the CDS view matches the structure of the database table or classic view as follows:

-   The number of components must match.

-   It must be possible to assign a component of the CDS view to each component of the database table or classic view:

-   A [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry") is assigned regardless of its name.

-   For all other components of the database table, an identically named element of the CDS view must exist.

The order of the components in the database table and the CDS view does not need to match.

-   The technical type properties [built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm), length, and number of decimal places must match for all assigned components.

-   The CDS view cannot have any input parameters.

-   It is not possible to have both a replacement object defined and table buffering switched on for a database view whose maintenance status is modifiable.

If a database table or a classic view is accessed and a replacement object is assigned to the table or view in the following cases, the replacement object is evaluated instead of the database table or classic view:

-   When used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). This also applies to [subqueries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") in any ABAP SQL statement and to the statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm) and [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm). This bypasses any [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm) defined for the database table or the classic view.

-   When a [foreign key relationship](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") is checked for Web Dynpros or dynpros.

All other access types are still performed on the database table or classic view, such as:

-   Writes in ABAP SQL

-   [Writes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) in ABAP SQL

-   Use of the addition [SINGLE FOR UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm) in the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm)

Writes of this type produce a syntax check warning.

-   Use in other database objects, such as:

-   Use as a data source of a view defined on the database

-   Access from database procedures or database functions

Here it is not important how the database object was created, which means that, in addition to native views, the views defined for [classic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclassical_view_glosry.htm "Glossary Entry") [database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_view_glosry.htm "Glossary Entry") in ABAP Dictionary or for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") on the database also do not access the replacement object. A similar principle applies to [AMDP procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_glosry.htm "Glossary Entry"). Even if ABAP SQL is used to access a classic database view in ABAP Dictionary, a CDS view, or a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry") comprising database tables with replacement objects, no redirection is performed. In these cases, the replacement object must be accessed directly. For classic database views, a replacement object can be created that performs this task without the need to modify the programs.

-   Access types other than with ABAP SQL, for example:

-   Access with [IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_data_cluster.htm) FROM [DATABASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm) or [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) TO [DATABASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm).

-   Access using [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm) ([ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry"), [EXEC SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec.htm)), and [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry").

When a replacement object is defined for a database table for a classic database view, the system checks whether the specified CDS view meets the prerequisites. If a CDS view used as a replacement object is changed later and the prerequisites are no longer met, a runtime error DBSQL\_REDIRECT\_INCONSISTENCY occurs when an ABAP SQL read is performed on the database table or on the database view.

No replacement objects can be defined for [global temporary tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry"). In customer systems, replacement objects can only be defined for self-defined database views and not for database tables.

If there is a diversion to a CDS view for which one or more [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") are defined as part of the [CDS access control,](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") the associated access conditions are not evaluated when the replacement object is accessed.

Notes

-   Extreme care should be taken when specifying a replacement object for a database table or a database view. Incorrect usage can cause inconsistencies.

-   Replacement objects are mainly intended for existing aggregate tables. These are database tables, which contain aggregated data from other tables. Instead of aggregating data in an ABAP program and writing data to an aggregate table, which can be exclusively accessed by reads in programs, the aggregation can be performed for every read using the CDS view. This prevents redundant data from being stored. In addition, aggregation on the database can improve performance if it is necessary to read large volumes of data for aggregation in ABAP. Replacement objects can make this possible without invalidating the programs.

-   A prerequisite for assigning a replacement object to an existing database table or database view is that the CDS view returns the expected data and that, apart from aggregation, only ABAP SQL reads are performed on the aggregate table.

-   Once a replacement object is defined, no further writes should be performed on an aggregate table. These writes produce a syntax check warning and are scheduled to be disallowed in an upcoming release.

-   Make sure that, apart from the use of ABAP SQL, no other type of access is performed on an aggregate table with a replacement object. More specifically, CDS views used as a replacement object are not allowed to access the replaced object, because the content is usually no longer updated.

-   It is not advisable to transport table content for which a replacement object is defined. This content is scheduled to no longer be transported in an upcoming release.

-   Table buffering should be deactivated for an aggregate table for which a replacement object is defined to prevent buffer invalidations.

-   In customer systems, it may be useful to define a replacement object for a self-defined classic database view, if a replacement object was defined for one of their basis tables at SAP. In this case, the replacement object of the view must access the replacement object of the basis table.

-   If a database table or a classical view , which a replacement object is defined for, is [extended](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) in a follow-on system, the assigned CDS view must also be extended accordingly with [EXTEND VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_extend_view.htm).

-   The classic [projection view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprojection_view_glosry.htm "Glossary Entry"), [maintenance views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmaintenance_view_glosry.htm "Glossary Entry"), and [help views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhelp_view_glosry.htm "Glossary Entry") are not defined on the database. Access to their basis tables is carried out on AS ABAP by using ABAP SQL. If a basis table has a replacement object, its reads are redirected as required.

-   Frameworks that use ABAP SQL, such as [Data Browser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_browser_glosry.htm "Glossary Entry"), automatically access replacement objects if these objects are defined for a database table or a database view. Frameworks that use Native SQL or AMDP, such as [SADL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensadl_glosry.htm "Glossary Entry"), have to make sure that they access a replacement object rather than the database table or the database view.

-   Wherever possible, any programs that directly accessed aggregate tables or views with aggregate tables as basis tables should be modified so that they directly access the CDS views that are used as replacement objects. However, this cannot usually be done by simply replacing the data source in the relevant SELECT statements. This is because a [client-specific CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) does not have a client column and therefore the used target objects no longer match. Furthermore, if a CDS view is accessed directly, the [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") defined for it also have an effect.

-   Replacement objects cannot be defined for the following:

-   [Projection Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm)

-   [Maintenance Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_maintenance_views.htm)

-   [Help Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_help_views.htm)

Executable Example

[Replacement Object for Database Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_replacement_object_abexa.htm)

Continue
![Example](exa.gif "Example") [Replacement Object for Database Table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_replacement_object_abexa.htm)