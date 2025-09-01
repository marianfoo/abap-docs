# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Views

Included pages: 8


### abenddic_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Views%2C%20ABENDDIC_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Views

A [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") is a grouping of columns of one or more DDIC database tables, resulting in an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as DDIC structures. Views can be used like DDIC database tables in reading ABAP SQL statements and, with some limitations, also in writing ABAP SQL statements. For this reason, the ABAP DDIC views are in the same namespace as all types of the ABAP Dictionary and hence in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](javascript:call_link\('abenddic_view_names.htm'\)).

The data in a view is not saved physically. It is read from the database from the involved DDIC database tables.

-   Views can be used to restrict data access for a DDIC database table. Access to fields is restricted with projections and access to specific rows is restricted with selections.
-   Views that select from multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-dependent [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") in the current [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). This is done using the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in transaction SE11 by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [DDIC table views](javascript:call_link\('abenddic_table_views.htm'\))
    
    In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)).
    
-   [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\)) (obsolete)
    
    A DDIC external view makes an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") known in ABAP programs and makes it usable like a DDIC table view.
    
    Note: [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry") replaces [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"). The access methods designed specifically for XSC objects are not suitable for XSA objects and have become obsolete. [DDIC external views](javascript:call_link\('abenexternal_view_glosry.htm'\) "Glossary Entry") represent one such access method and have been declared obsolete. See [SAP Note 3116165](https://launchpad.support.sap.com/#/notes/3116165) and [SAP Note 2465027](https://launchpad.support.sap.com/#/notes/2465027).
    

When a view is accessed using the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the database SELECT statement defined in the DDL statement is executed and the result set is returned as if a SELECT were executed on a DDIC database table whose structure matches the structure defined by the view.

Hints

-   Defining views is usually not the job of an ABAP application programmer, but is part of the implementation of data models in ABAP Dictionary. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.
-   The DDIC database tables a view is based on should have suitable [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)). This is important for selections using views.
-   [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)) offers [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and other [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for the implementation of data models and replaces data modeling with DDIC views. CDS entities are defined in a (mostly) platform-independent [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). CDS entities offer advanced modeling capabilities compared to DDIC views.

Continue
[DDIC - Naming Rules for DDIC Views](javascript:call_link\('abenddic_view_names.htm'\))
[DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\))


### abenddic_view_names.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Naming%20Rules%20for%20DDIC%20Views%2C%20ABENDDIC_VIEW_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Naming Rules for DDIC Views

The name of a view defined in the ABAP Dictionary must comply to the following rules:

-   It can have a maximum of 16 characters.
-   It must follow the [naming rules for DDIC types](javascript:call_link\('abenddic_types_names.htm'\)),
-   It must follow the special [naming rules for DDIC structures](javascript:call_link\('abenddic_structures_names.htm'\)), with the exception, that it can always contain an underscore (\_) at the second or third position.
-   It is located in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and by that the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.


### abenddic_table_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Views%2C%20ABENDDIC_TABLE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables
    
    A list of DDIC database tables that are accessed by the view. Multiple tables are associated using joins.
    
-   View fields
    
    A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](javascript:call_link\('abenddic_data_elements.htm'\)) can be assigned to a view field than used for the corresponding table field of the basis table. As a prerequisite, the type of the table field must be defined using a data element with a [domain](javascript:call_link\('abenddic_domains.htm'\)) and the new data element must reference the same domain. This makes it possible to adjust the semantic properties of the view field.
    
-   Key
    
    A key of the view that consists of key fields. The key is derived from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are automatically marked as key fields. All rows determined by the view must be unique with respect to the key. If no key can be identified, all fields of the view are key fields, which negatively impacts performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
    
-   Join conditions
    
    Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the result is the cross product of both basis tables. Each row in a table is combined with each row of the other table. A join condition selects a subset of matching rows from the cross product.
    
-   Selection conditions
    
    Restrict the read rows to specific values of view fields or other fields.
    
    -   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.
    -   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....
    -   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") on the database:

-   [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\))
-   [DDIC projection views](javascript:call_link\('abenddic_projection_views.htm'\))
-   [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\))
-   [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\))

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   To implement a projection, either DDIC database views or DDIC projection views can be used.
-   Only DDIC database tables can be specified as the basis tables of table views. Other views are not possible as basis object.
-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](javascript:call_link\('abenclient_dependency_glosry.htm'\) "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or a DDIC projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored.
-   Table views cannot be maintained using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").
-   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP Core Data Services in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

Continue
[DDIC - Database Views](javascript:call_link\('abenddic_database_views.htm'\))
[DDIC - Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
[DDIC - Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
[DDIC - Help Views](javascript:call_link\('abenddic_help_views.htm'\))


### abenddic_database_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Database%20Views%2C%20ABENDDIC_DATABASE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Database Views

A DDIC database view defines a view on one or more basis tables. If there are multiple basis tables, they are joined using an inner join. An [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") is created as a [database object](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using TYPE. A database view can be accessed using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

-   [Basis Tables](#@@ITOC@@ABENDDIC_DATABASE_VIEWS_1)
-   [View Fields](#@@ITOC@@ABENDDIC_DATABASE_VIEWS_2)
-   [Join Conditions](#@@ITOC@@ABENDDIC_DATABASE_VIEWS_3)
-   [Maintenance Status](#@@ITOC@@ABENDDIC_DATABASE_VIEWS_4)
-   [Table Buffering](#@@ITOC@@ABENDDIC_DATABASE_VIEWS_5)

Hints

-   A DDIC database view can be activated in ABAP Dictionary without its basis tables being defined on the database. The view is also not created on the database in this case.
-   As in a [DDIC database table](javascript:call_link\('abenddic_database_tables_client.htm'\)), the client dependency of a database view is determined by a column with the built-in dictionary type CLNT. This column must be the first column of the view.
-   [DDIC append views](javascript:call_link\('abenddic_append_views.htm'\)) are available for extending DDIC database views delivered by SAP without modifying the original object.
-   Suitable [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be defined as [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) for database views. In this case, reads in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") access the replacement objects rather than the database views.
-   Database views managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Basis Tables   

The basis tables of database views can be [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") and [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry").

View Fields   

The view fields of a DDIC database view can be one or more fields from the basis tables. An include mechanism can be used to add all fields from a basis table. When individual fields are used, a name other than the name in the basis tables can be defined for a view field. This name can have a maximum of 30 characters, must meet the naming conventions for component names of [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), and cannot be a reserved name. The reserved names that cannot be used are specified in the database table TRESE. Fields with the type CHAR can have a maximum of 1333 characters. Fields with the type LRAW or LCHR must be at the end of the view. Only one such field is allowed per view. Furthermore, each field of type LRAW or LCHR must have a field with the type INT2 or INT4 directly in front of it. The value of this integer field specifies the maximum length of the LRAW or LCHR field.

To include all fields from a basis table in a DDIC view, the asterisk character (\*) can be used instead of the field name. If the minus character (\-) is used for individual fields of a basis table included using \*, all fields except for the fields specified with \- become view fields. If the structure of a DDIC database table whose fields were added with \* is modified, the structure of the view is also modified.

Hints

-   If a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") is added as a view field, it keeps its foreign key attribute and all associated foreign key fields become the foreign key of the view.
-   For [CDS-managed DDIC views (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") [](javascript:call_link\('abencds_v1_views.htm'\)), the view fields shown as key fields are in no way related to the key fields defined using [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)) for the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
-   A DDIC database view in the software component SAP\_BASIS can contain a maximum of 750 view fields and the total of the field lengths (the number of bytes in non-character-like fields plus the number of characters in flat character-like fields) must not exceed 4096. A database view in any other software component can contain a maximum of 1500 view fields and the total of the field lengths is not checked in ABAP Dictionary.

Join Conditions   

The join conditions for an inner join that combines two basis tables can be formulated using equality operators between any two table fields in the basis tables. The inner join joins the rows of the basis tables in question. The result set contains all combinations of rows whose columns meet the join conditions. If there are no rows in the basis tables that meet the join conditions, the result set is empty. If there is a suitable [foreign key dependency](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) (including generic and constant foreign keys) between two basis tables, this dependency can be used as a default for defining join conditions in ABAP Dictionary.

Maintenance Status   

The Access setting in the maintenance status of a DDIC database view can have the following values:

-   Read only
    
    The database view can only be used to read data with ABAP SQL.
    
-   Read, change, delete, and insert
    
    If the database view contains only a single basis table, data can be [changed](javascript:call_link\('abenabap_sql_writing.htm'\)) using ABAP SQL.
    

A database view with multiple basis tables can only be read with ABAP SQL. If a database view is based on a single table, data can be inserted in this table using the view with the ABAP SQL statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or [MODIFY](javascript:call_link\('abapinsert_dbtab.htm'\)). Fields from the basis table that are not included in the DDIC view can be handled as follows:

-   If the table field is defined with [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database, the field is filled with the type-specific initial value.
-   If the table field is defined with [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database, and there is no initial value, nothing can be inserted and a database error occurs with a corresponding exception.
-   If the table field is not defined with [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database, the field is filled with the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

Hints

-   A DDIC database view should only be used to insert data in the basis table if the flag for initial values is set for all table fields that are not included in the DDIC view.
-   Modifying existing data records via a DDIC database view does not cause any issues as long as the database view contains all key fields of the table.
-   Like a DDIC database table, the maintenance status of a database view has a [Display and Maintain](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The Display and Maintain setting must match the Access setting. In database views containing multiple basis tables, only the setting Display/maintenance not allowed is possible.

Table Buffering   

Just like in DDIC database tables, it is possible to define for a database view whether the data in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") is buffered. The same [buffering types](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) can be defined and [table buffering in ABAP SQL](javascript:call_link\('abensap_puffering.htm'\)) is handled in the same way for views and for DDIC database tables with the only difference being that, when data is modified in one of the basis tables, the entire buffer is invalidated when the [buffers are synchronized](javascript:call_link\('abenbuffer_synchro.htm'\)), regardless of the buffering type. In client-dependent views, however, this only affects the content of the current client. As for DDIC database tables, the settings for buffering are separate technical settings, that can be transported independently from the view.

The following prerequisites must be met before a DDIC database view can be buffered:

-   A basis table can occur in no more than nine buffered database views.
-   If all fields of the database view are key fields, these fields must also be key fields of the basis tables.
-   A DDIC view that allows ABAP SQL write access must not have a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)).

Hint

For an existing DDIC view that already has a buffer and allows ABAP SQL write access, no [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) can be created.

Example

The DDIC database view DEMO\_SCARR\_SPFLI contains fields of the tables SCARR and SPFLI. Other names are assigned to these fields in the view.

The associated database object looks as follows:

CREATE VIEW DEMO\_SCARR\_SPFLI
   (CLIENT,
   ID,
   CARRIER,
   FLIGHT,
   DEPARTURE,
   DESTINATION )
AS SELECT
   T1."MANDT",
   T2."CARRID",
   T1."CARRNAME",
   T2."CONNID",
   T2."CITYFROM",
   T2."CITYTO"
FROM
    "SCARR" T1,
    "SPFLI" T2
WHERE
    T1."MANDT"  = T2."MANDT" AND
    T1."CARRID" = T2."CARRID"

The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_scarr\_spfli
       ORDER BY id, carrier, flight
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).


### abenddic_projection_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Projection%20Views%2C%20ABENDDIC_PROJECTION_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Projection Views

A DDIC projection view is a DDIC table view that can be used to hide fields from a single basis table. No SQL view is created on the database. No selection conditions can be specified for a DDIC projection view.

The structure type defined by the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-dependent SQL statement.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only
    
    The projection view can only be used to read data with ABAP SQL.
    
-   Read, change, delete, and insert
    
    The projection view can be used to read or [change](javascript:call_link\('abenabap_sql_writing.htm'\)) data with ABAP SQL.
    

When rows are inserted via DDIC projection views, all fields from the basis table that are not part of the DDIC view are given the type-specific initial value. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Hints

-   As in a [DDIC database table](javascript:call_link\('abenddic_database_tables_client.htm'\)), the client dependency of a DDIC projection view is determined by a column with the built-in dictionary type CLNT. This column must be the first column of the view.
-   Like a DDIC database table, the maintenance status of a projection view has a [Display and Maintain](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting.
-   The basis table of a projection view can be a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") or a [global temporary table](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).


### abenddic_maintenance_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Maintenance%20Views%2C%20ABENDDIC_MAINTENANCE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Maintenance Views

A DDIC maintenance view is a DDIC table view intended for performing writes on multiple DDIC database tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A DDIC maintenance view is not created on the database. The structure type defined by a maintenance view can be referenced in ABAP programs using TYPE. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction SE54 can be used to create dialogs called maintenance dialogs for maintenance views, which can themselves be used to edit the content of the tables of the maintenance views jointly in Table View Maintenance (transactions SM30 and SM31).

When data records are inserted using DDIC maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Primary Table and Secondary Tables   

All DDIC database tables grouped in a DDIC maintenance view must be joined using [foreign key dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)), which means that the join conditions of maintenance views are always derived from a foreign key. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

-   The secondary tables must have an N:1 dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An N:1 dependency exists if the secondary table is the [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry") of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") in question.
-   If the secondary table is the [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"), the foreign key fields must be key fields of a table or the foreign key must have the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") N:1 or N:C.

A maintenance view implements an inner join. All key fields of the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

Hint

If a DDIC database table is joined with its [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") in a DDIC maintenance view, the logon language is selected automatically.

Time-Dependent Key   

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. The rows of views with time-dependent keys depend on dates and times.

Hint

When changing a time-dependent view, it is possible to restrict the new entries inserted to those that are only missing time information.

Maintenance Status   

The Access setting in the maintenance status of a maintenance view can have the following values:

-   Read only
    
    The maintenance view can only be used to read data.
    
-   Read, change, delete, and insert
    
    The maintenance view can be used to change, delete, and insert data.
    
-   Read and change
    
    The maintenance view can be used to read and change data, but not delete or insert it.
    
-   Read and change (time-dependent views)
    
    The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.
    

Hint

Like a DDIC database table, the maintenance status of a DDIC maintenance view has a [Display and Maintenance](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting. The setting Display/maintenance not allowed is not possible here.

Maintenance Characteristics of View Fields   

Alongside the maintenance status of the view, characteristics called maintenance characteristics can be defined for each view field:

-   Standard
    
    There are no restrictions on the view field.
    
-   Read-only
    
    The DDIC maintenance view cannot be used to perform writes on the view field.
    
-   Subset
    
    A field of this type is used to construct subsets when data is edited in extended table maintenance. Only a subset of the data is displayed. This subset is defined by entering an appropriate value in this field.
    
-   Hidden
    
    A field of this type is not displayed in extended table maintenance and cannot be edited there. The content is initialized implicitly.
    

Delivery Class   

A DDIC maintenance view also has a [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). The delivery class of a maintenance view is analyzed in the extended table maintenance.

-   If the view is assigned one of the delivery classes G or E, the customer namespace for the entries of the view must be defined in the DDIC database table TRESC.
-   The transport interface of extended table maintenance must match the delivery class.

The delivery class of the basis tables of a maintenance view is not affected by this. The basis tables of a maintenance views have their own [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). This delivery class is used for upgrades and transports between customer systems


### abenddic_help_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Help%20Views%2C%20ABENDDIC_HELP_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Help Views

A DDIC help view is a DDIC table view for use in [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database tables restrict the search help to one single table and DDIC database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not created on the database. The structure type defined by a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a DDIC help view must be taken over from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same rules apply to secondary tables of DDIC help views as to secondary tables of [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\)).

A DDIC help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table is displayed with initial values.

Hints

-   Like other views, DDIC help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.
-   Unlike DDIC database views, DDIC help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, the complete data set would be excluded from the result set.
-   If the selection is only made using a table and its text table, a DDIC help view is not required. The table can be specified directly as a selection method of the search help, since the fields of the text table are also used as parameters in the search help in this case.
-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a DDIC database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.
-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime framework, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.


### abenddic_table_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Views%2C%20ABENDDIC_TABLE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables
    
    A list of DDIC database tables that are accessed by the view. Multiple tables are associated using joins.
    
-   View fields
    
    A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](javascript:call_link\('abenddic_data_elements.htm'\)) can be assigned to a view field than used for the corresponding table field of the basis table. As a prerequisite, the type of the table field must be defined using a data element with a [domain](javascript:call_link\('abenddic_domains.htm'\)) and the new data element must reference the same domain. This makes it possible to adjust the semantic properties of the view field.
    
-   Key
    
    A key of the view that consists of key fields. The key is derived from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are automatically marked as key fields. All rows determined by the view must be unique with respect to the key. If no key can be identified, all fields of the view are key fields, which negatively impacts performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
    
-   Join conditions
    
    Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the result is the cross product of both basis tables. Each row in a table is combined with each row of the other table. A join condition selects a subset of matching rows from the cross product.
    
-   Selection conditions
    
    Restrict the read rows to specific values of view fields or other fields.
    
    -   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.
    -   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....
    -   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") on the database:

-   [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\))
-   [DDIC projection views](javascript:call_link\('abenddic_projection_views.htm'\))
-   [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\))
-   [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\))

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   To implement a projection, either DDIC database views or DDIC projection views can be used.
-   Only DDIC database tables can be specified as the basis tables of table views. Other views are not possible as basis object.
-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](javascript:call_link\('abenclient_dependency_glosry.htm'\) "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or a DDIC projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored.
-   Table views cannot be maintained using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").
-   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP Core Data Services in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

Continue
[DDIC - Database Views](javascript:call_link\('abenddic_database_views.htm'\))
[DDIC - Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
[DDIC - Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
[DDIC - Help Views](javascript:call_link\('abenddic_help_views.htm'\))
