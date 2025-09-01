# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Replacement Objects

Included pages: 2


### abenddic_replacement_objects.htm

---
title: "DDIC - Replacement Objects"
description: |
  A transparent(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm 'Glossary Entry') DDIC database table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) and DDIC database view(https://help.sap.com/doc/aba
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm"
abapFile: "abenddic_replacement_objects.htm"
keywords: ["select", "update", "do", "if", "case", "try", "data", "types", "abenddic", "replacement", "objects"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Replacement%20Objects%2C%20ABENDDIC_REPLACEMENT_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Replacement Objects

A [transparent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry") [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) and [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) can be assigned a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") as a replacement object using the name of its [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). A prerequisite is that the structure type defined by the CDS view matches the structure of the DDIC database table or DDIC database view as follows:

-   The number of components must match.
-   It must be possible to assign a component of the CDS view to each component of the DDIC database table or DDIC database view:
    
    -   A [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") is assigned regardless of its name.
    -   For all other components of the DDIC database table, an identically named element of the CDS view must exist.
    
    The order of the components in the DDIC database table and the CDS view does not need to match.
    
-   The technical type properties [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), length, and number of decimal places must match for all assigned components.
-   The CDS view must not have any input parameters.
-   A DDIC database view whose maintenance status is modifiable cannot have both a replacement object defined and table buffering switched on.

When accessing a DDIC database table or a DDIC database view with a replacement object assigned, the access is redirected to the replacement object in the following cases:

-   When used as a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"). This also applies to [subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") in any ABAP SQL statement and to the statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm) and [FETCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfetch.htm). If [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_puffering.htm) is defined for the DDIC database table or the DDIC database view in question, this table buffer is bypassed.
-   When a [foreign key relationship](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") is checked for Web Dynpros or dynpros.

All other access types are still performed on the DDIC database table or DDIC database view, such as:

-   Writes in ABAP SQL:
    
    -   [Write access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) statements in ABAP SQL.
    -   Use of the addition [SINGLE FOR UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm) in the statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm).
    
    Writes of this type produce a syntax check warning.
    
-   Use in other database objects, such as:
    
    -   Use as a data source of a view defined on the database.
    -   Access from database procedures or database functions.
    
    Here it is not important how the database object was created. Native views, as well as the database views defined for [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") or for [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") also do not access the replacement object. The same applies to [AMDP procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_procedure_glosry.htm "Glossary Entry") and [AMDP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry") and they do not access the replacement object. Even if ABAP SQL is used to access a DDIC database view, a CDS view, or a [CDS table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry") with DDIC database tables with replacement object as basis tables, the call is not redirected to the replacement object. The replacement object must be accessed directly. For DDIC database views, a new replacement object can be created that is used a replacement, without the need of modifying consumer programs.
    
-   Access types other than with ABAP SQL, for example:
    -   Access using [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) FROM [DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm), or [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) TO [DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm).
    -   Access using [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) ([ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry"), [EXEC SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec.htm)), and [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry").

When a replacement object is defined for a DDIC database table for a DDIC database view, the system checks whether the specified CDS view meets the prerequisites. If a CDS view used as a replacement object is changed later and the prerequisites are no longer met, a runtime error DBSQL\_REDIRECT\_INCONSISTENCY occurs when an ABAP SQL read is performed on the DDIC database table or on the DDIC database view.

No replacement objects can be defined for [global temporary tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry"). In customer systems, replacement objects can only be defined for user-defined database views and not for DDIC database tables.

If there is a redirection to a CDS view for which one or more [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") are defined as part of the [CDS access control,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") the associated access conditions are not evaluated when the replacement object is accessed.

Hints

-   Extreme care should be taken when specifying a replacement object for a DDIC database table or a DDIC database view. Incorrect usage can cause inconsistencies.
-   Replacement objects are mainly intended for existing aggregate tables. These are DDIC database tables that contain aggregated data from other tables. Instead of aggregating data in an ABAP program and storing it in an aggregate table, which can be exclusively accessed by reads in consumer programs, the aggregation can be performed for every read using the CDS view. This prevents redundant data from being stored. In addition, aggregation on the database can improve performance if it is necessary to read large volumes of data for aggregation in ABAP. Replacement objects allow refactoring of source code without invalidating consumer programs.
-   A prerequisite for assigning a replacement object to an existing DDIC database table or DDIC database view is that the CDS view returns the expected data and that, apart from aggregation, only ABAP SQL reads are performed on the aggregate table.
-   Once a replacement object is defined, no further writes should be performed on an aggregate table. These writes produce a syntax check warning and are scheduled to be disallowed in an upcoming release.
-   Make sure that, apart from the use of ABAP SQL, no other type of access is performed on an aggregate table with a replacement object. In particular, the CDS view that is assigned as replacement object must not access the replaced object, because the content of replaced objects is usually no longer updated.
-   Do not transport table content for which a replacement object is defined.
-   Table buffering should be deactivated for an aggregate table for which a replacement object is defined to prevent buffer invalidations.
-   In customer systems, it may be useful to define a replacement object for a user-defined DDIC database view, if a replacement object was defined for one of their basis tables at SAP. In this case, the replacement object of the view must access the replacement object of the basis table.
-   If a DDIC database table or a DDIC database view, which a replacement object is defined for, is [extended](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) in a follow-on system, the assigned CDS view must also be extended with [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry").
-   [DDIC projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_proj_view_glosry.htm "Glossary Entry"), [DDIC maintenance views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmaintenance_view_glosry.htm "Glossary Entry"), and [DDIC help views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhelp_view_glosry.htm "Glossary Entry") are not created on the database. Access to their basis tables is carried out on AS ABAP by using ABAP SQL. If a basis table has a replacement object, reads are redirected to the replacement object.
-   Frameworks that use ABAP SQL, such as [Data Browser](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_browser_glosry.htm "Glossary Entry"), automatically access replacement objects if these objects are defined for a DDIC database table or a DDIC database view. Frameworks that use Native SQL or AMDP, such as the [RAP query engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_query_engine_glosry.htm "Glossary Entry"), do not automatically access replacement objects. The developers have to make sure that they access a replacement object rather than the replaced object.
-   If possible, programs that previously directly accessed aggregate tables or views with aggregate tables as base tables should be modified in such a way that they access the CDS views used as replacement objects directly. However, it is not possible to simply replace the data source in the SELECT statements concerned, for example because a client-dependent CDS view has no client column and therefore the target objects used no longer match. In addition, when a CDS view is accessed directly, the [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") defined for this CDS view apply and might restrict the result set.
-   Replacement objects cannot be defined for the following DDIC views:
    -   [DDIC Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm)
    -   [DDIC Maintenance Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm)
    -   [DDIC Help Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm)
        
        For [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"), replacement objects are not supported at all.
        

Executable Example

[Replacement Object for Database Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_object_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - Replacement Object for Database Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_object_abexa.htm)


### abenddic_replacement_object_abexa.htm

---
title: "DDIC - Replacement Object for Database Table"
description: |
  This example demonstrates a DDIC database table with a replacement object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplacement_object_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_table_rplcmnt_object DEFINITION INHERITING FROM cl
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_object_abexa.htm"
abapFile: "abenddic_replacement_object_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abenddic", "replacement", "object", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Replacement Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Replacement%20Object%20for%20Database%20Table%2C%20ABENDDIC_REPLACEMENT_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

DDIC - Replacement Object for Database Table

This example demonstrates a DDIC database table with a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_rplcmnt\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_table\_rplcmnt\_object IMPLEMENTATION.
  METHOD main.
    "Aggregate table (GTT)
    SELECT FROM demo\_sumdist\_agg
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_agg).
    DELETE FROM demo\_sumdist\_agg.
    "Table with replacement object
    SELECT FROM demo\_sumdist
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result).
    ASSERT result = result\_agg.
    "Direct access to CDS view
    SELECT FROM demo\_cds\_sumdist
           FIELDS @sy-mandt AS mandt, demo\_cds\_sumdist~\*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_cds).
    ASSERT result\_cds = result.
    out->write( result ).
    "Classic view on demo\_sumdist without replacement object
    SELECT FROM demo\_sumdist\_obs
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_view\_obs).
    IF result <> result\_view\_obs.
      out->write(
        'Classic view without replacement object differs.' ).
    ENDIF.
    "Classic view on demo\_sumdist with replacement object
    SELECT FROM demo\_sumdistview
           FIELDS \*
           ORDER BY PRIMARY KEY
           INTO TABLE @FINAL(result\_view).
    IF result =  result\_view.
      out->write(
        'Classic view with replacement object is the same.' ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
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

Description   

This class accesses two DDIC database tables, DEMO\_SUMDIST\_AGG and DEMO\_SUMDIST. These tables are identical except for the fact that the [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST is defined as a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm) for DEMO\_SUMDIST.

The DDIC database table DEMO\_SUMDIST\_AGG is filled with aggregated data (done here in the static constructor of the class demo). When DEMO\_SUMDIST is accessed, the replacement object performs exactly the same aggregation:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SUDI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sumdist(
    client,
    carrname,
    distid,
    sum\_distance
  )
  as select from scarr as s
    join         spfli as p on s.carrid = p.carrid
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

Both similar accesses to the DDIC database tables produce the same results, which is verified using the statement [ASSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassert.htm).

A third SELECT statement accesses the [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") DEMO\_CDS\_SUMDIST directly. To produce the same result set as when accessing the DDIC database tables, a [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry") must be added, since the result set of a [client-dependent CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependent_glosry.htm "Glossary Entry") does not contain a client column.

A [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") DEMO\_SUMDIST\_OBS contains the DDIC database table DEMO\_SUMDIST as a basis table. There is no redirect to the replacement object of DEMO\_SUMDIST in a SELECT. A DDIC database view DEMO\_SUMDISTVIEW that is otherwise similar has the following CDS view as a replacement object:

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

This view accesses the replacement object of the DDIC database table DEMO\_SUMDIST. When DEMO\_SUMDISTVIEW is accessed using SELECT, its replacement object is evaluated and the result again matches the preceding result.
