  

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