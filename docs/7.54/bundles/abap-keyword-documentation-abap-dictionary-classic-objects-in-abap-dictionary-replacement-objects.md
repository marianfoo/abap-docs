# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Replacement Objects

Included pages: 2


### abenddic_replacement_objects.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) → 

Replacement Objects

A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be assigned to a [transparent](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") [database table](javascript:call_link\('abenddic_database_tables.htm'\)) and classic [database view](javascript:call_link\('abenddic_database_views.htm'\)) in ABAP Dictionary as a replacement object using the name of its [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A prerequisite is that the structure type defined by the CDS view matches the structure of the database table or classic view as follows:

-   The number of components must match.

-   It must be possible to assign a component of the CDS view to each component of the database table or classic view:

-   A [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") is assigned regardless of its name.

-   For all other components of the database table, an identically named element of the CDS view must exist.

The order of the components in the database table and the CDS view does not need to match.

-   The technical type properties [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and number of decimal places must match for all assigned components.

-   The CDS view cannot have any input parameters.

-   It is not possible to have both a replacement object defined and table buffering switched on for a database view whose maintenance status is modifiable.

If a database table or a classic view is accessed and a replacement object is assigned to the table or view in the following cases, the replacement object is evaluated instead of the database table or classic view:

-   When used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). This also applies to [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in any ABAP SQL statement and to the statements [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) and [FETCH](javascript:call_link\('abapfetch.htm'\)). This bypasses any [table buffering](javascript:call_link\('abensap_puffering.htm'\)) defined for the database table or the classic view.

-   When a [foreign key relationship](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") is checked for Web Dynpros or dynpros.

All other access types are still performed on the database table or classic view, such as:

-   Writes in ABAP SQL

-   [Writes](javascript:call_link\('abenopen_sql_writing.htm'\)) in ABAP SQL

-   Use of the addition [SINGLE FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) in the statement [SELECT](javascript:call_link\('abapselect.htm'\))

Writes of this type produce a syntax check warning.

-   Use in other database objects, such as:

-   Use as a data source of a view defined on the database

-   Access from database procedures or database functions

Here it is not important how the database object was created, which means that, in addition to native views, the views defined for [classic](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") [database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary or for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") on the database also do not access the replacement object. A similar principle applies to [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry") and [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"). Even if ABAP SQL is used to access a classic database view in ABAP Dictionary, a CDS view, or a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") comprising database tables with replacement objects, no redirection is performed. In these cases, the replacement object must be accessed directly. For classic database views, a replacement object can be created that performs this task without the need to modify the programs.

-   Access types other than with ABAP SQL, for example:

-   Access with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) FROM [DATABASE](javascript:call_link\('abapimport_medium.htm'\)) or [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) TO [DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)).

-   Access using [Native SQL](javascript:call_link\('abennative_sql.htm'\)) ([ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"), [EXEC SQL](javascript:call_link\('abapexec.htm'\))), and [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

When a replacement object is defined for a database table for a classic database view, the system checks whether the specified CDS view meets the prerequisites. If a CDS view used as a replacement object is changed later and the prerequisites are no longer met, a runtime error DBSQL\_REDIRECT\_INCONSISTENCY occurs when an ABAP SQL read is performed on the database table or on the database view.

No replacement objects can be defined for [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry"). In customer systems, replacement objects can only be defined for self-defined database views and not for database tables.

If there is a diversion to a CDS view for which one or more [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are defined as part of the [CDS access control,](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") the associated access conditions are not evaluated when the replacement object is accessed.

Notes

-   Extreme care should be taken when specifying a replacement object for a database table or a database view. Incorrect usage can cause inconsistencies.

-   Replacement objects are mainly intended for existing aggregate tables. These are database tables, which contain aggregated data from other tables. Instead of aggregating data in an ABAP program and writing data to an aggregate table, which can be exclusively accessed by reads in programs, the aggregation can be performed for every read using the CDS view. This prevents redundant data from being stored. In addition, aggregation on the database can improve performance if it is necessary to read large volumes of data for aggregation in ABAP. Replacement objects can make this possible without invalidating the programs.

-   A prerequisite for assigning a replacement object to an existing database table or database view is that the CDS view returns the expected data and that, apart from aggregation, only ABAP SQL reads are performed on the aggregate table.

-   Once a replacement object is defined, no further writes should be performed on an aggregate table. These writes produce a syntax check warning and are scheduled to be disallowed in an upcoming release.

-   Make sure that, apart from the use of ABAP SQL, no other type of access is performed on an aggregate table with a replacement object. More specifically, CDS views used as a replacement object are not allowed to access the replaced object, because the content is usually no longer updated.

-   It is not advisable to transport table content for which a replacement object is defined. This content is scheduled to no longer be transported in an upcoming release.

-   Table buffering should be deactivated for an aggregate table for which a replacement object is defined to prevent buffer invalidations.

-   In customer systems, it may be useful to define a replacement object for a self-defined classic database view, if a replacement object was defined for one of their basis tables at SAP. In this case, the replacement object of the view must access the replacement object of the basis table.

-   If a database table or a classical view , which a replacement object is defined for, is [extended](javascript:call_link\('abenddic_enhancements.htm'\)) in a follow-on system, the assigned CDS view must also be extended accordingly with [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)).

-   The classic [projection view](javascript:call_link\('abenprojection_view_glosry.htm'\) "Glossary Entry"), [maintenance views](javascript:call_link\('abenmaintenance_view_glosry.htm'\) "Glossary Entry"), and [help views](javascript:call_link\('abenhelp_view_glosry.htm'\) "Glossary Entry") are not defined on the database. Access to their basis tables is carried out on AS ABAP by using ABAP SQL. If a basis table has a replacement object, its reads are redirected as required.

-   Frameworks that use ABAP SQL, such as [Data Browser](javascript:call_link\('abendata_browser_glosry.htm'\) "Glossary Entry"), automatically access replacement objects if these objects are defined for a database table or a database view. Frameworks that use Native SQL or AMDP, such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry"), have to make sure that they access a replacement object rather than the database table or the database view.

-   Wherever possible, any programs that directly accessed aggregate tables or views with aggregate tables as basis tables should be modified so that they directly access the CDS views that are used as replacement objects. However, this cannot usually be done by simply replacing the data source in the relevant SELECT statements. This is because a [client-specific CDS view](javascript:call_link\('abencds_client_handling.htm'\)) does not have a client column and therefore the used target objects no longer match. Furthermore, if a CDS view is accessed directly, the [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") defined for it also have an effect.

-   Replacement objects cannot be defined for the following:

-   [Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))

-   [Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))

-   [Help Views](javascript:call_link\('abenddic_help_views.htm'\))

Executable Example

[Replacement Object for Database Table](javascript:call_link\('abenddic_replacement_object_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Replacement Object for Database Table](javascript:call_link\('abenddic_replacement_object_abexa.htm'\))


### abenddic_replacement_object_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Replacement Objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) → 

Replacement Object for Database Table

This example demonstrates a database table with a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_table\_replacement\_object.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Aggregate table (GTT)
    SELECT FROM demo\_sumdist\_agg
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_agg).
    DELETE FROM demo\_sumdist\_agg.
    "Table with replacement object
    SELECT FROM demo\_sumdist
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result).
    ASSERT result = result\_agg.
    "Direct access to CDS view
    SELECT FROM demo\_cds\_sumdist
           FIELDS @sy-mandt AS mandt, demo\_cds\_sumdist~\*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_cds).
    ASSERT result\_cds = result.
    out->write( result ).
    "Classic view on demo\_sumdist without replacement object
    SELECT FROM demo\_sumdist\_obs
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_view\_obs).
    IF result <> result\_view\_obs.
      out->write(
        'Classic view without replacement object differs.' ).
    ENDIF.
    "Classic view on demo\_sumdist with replacement object
    SELECT FROM demo\_sumdistview
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @DATA(result\_view).
    IF result =  result\_view.
      out->write(
        'Classic view with replacement object is the same.' ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    DELETE FROM demo\_sumdist\_agg.
    INSERT demo\_sumdist\_agg FROM
      ( SELECT
          FROM scarr AS s
            INNER JOIN spfli AS p ON s~carrid = p~carrid
          FIELDS s~carrname,
                 p~distid,
                 SUM( p~distance ) AS sum\_distance
          GROUP BY s~mandt, s~carrname, p~distid ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program accesses two database tables, DEMO\_SUMDIST\_AGG and DEMO\_SUMDIST. These tables are identical except for the fact that the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_SUMDIST is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for DEMO\_SUMDIST.

The database table DEMO\_SUMDIST\_AGG is filled with aggregated data (done here in the static constructor of the class demo). When DEMO\_SUMDIST is accessed, the replacement object performs exactly the same aggregation:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdist(
client,
carrname,
distid,
sum\_distance
)
as select from
scarr as s
join spfli as p on
s.carrid = p.carrid
{
key s.mandt,
key s.carrname,
key p.distid,
sum(p.distance)
}
group by
s.mandt,
s.carrname,
p.distid    

Similar access to the database tables produce similar results, which can be verified using the statement [ASSERT](javascript:call_link\('abapassert.htm'\)).

A third SELECT statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") DEMO\_CDS\_SUMDIST directly. To produce the same results set for the comparison with the other results as when accessing the database tables, the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") must be added, since the results set of a [client-specific CDS view](javascript:call_link\('abencds_client_handling.htm'\)) does not contain a column of this type.

A [classic](javascript:call_link\('abenclassical_view_glosry.htm'\) "Glossary Entry") [database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") DEMO\_SUMDIST\_OBS contains the database table DEMO\_SUMDIST as a basis table. There is no redirect to the replacement object of DEMO\_SUMDIST in a SELECT. A classic database view DEMO\_SUMDISTVIEW that is otherwise similar has the following CDS view as a replacement object:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDIV'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdistview
as select from
demo\_cds\_sumdist
{
key client,
key carrname,
key distid,
sum\_distance
}    

This view accesses the replacement object of the database table DEMO\_SUMDIST. When DEMO\_SUMDISTVIEW is accessed using SELECT, its replacement object is evaluated and the result again matches the preceding result.
