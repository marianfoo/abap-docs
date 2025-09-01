---
title: "Database Views"
description: |
  A database view is a general view for one or more basis tables. If there are multiple basis tables, they are joined using an inner join. A matching SQL view is created on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_views.htm"
abapFile: "abenddic_database_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenddic", "database", "views"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_views.htm) → 

Database Views

A database view is a general view for one or more basis tables. If there are multiple basis tables, they are joined using an inner join. A matching SQL view is created on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using TYPE. A database view can be accessed using Open SQL, Native SQL, or AMDP, and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_recomm.htm).

Notes

-   A database view can be activated in ABAP Dictionary without its basis tables being defined on the database. The view is also not created on the database in this case.

-   As in a [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_client.htm), the client dependency of a database view is determined by an initial column with the built-in dictionary type CLNT.

-   [Append views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_append_views.htm) are available for enhancing the database views in ABAP Dictionary delivered by SAP without making any modifications.

-   Suitable [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") can be defined as [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) for database views. In this case, reads in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") access the replacement objects rather than the database views.

-   Database views managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_recomm.htm)).

Basis Tables

The basis tables of database views must be [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry"), so that the SQL view can access them. The actual join operation is performed on the database.

Note

The basis tables of [CDS database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") that are generated for [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") can also be other database views.

View Fields

An include mechanism can be used to add individual fields or all fields from the basis tables as view fields of a database view. When individual fields are used, a name other than the name in the basis tables.can be defined for a view field. This name can have a maximum of 30 characters, must meet the naming conventions for component names of [structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm), and cannot be a reserved name. The reserved names that cannot be used are specified in the database table TRESE.

To use all fields, the \* character is used instead of the field name. If the \- character is used for individual fields of a basis table included using \*, all fields up to the fields specified with \- become view fields. If the structure of a database table whose fields were added in this way is modified, the structure of the view is also modified.

Notes

-   If a [foreign key field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") is added as a view field, it keeps this attribute and all associated foreign key fields become the foreign key of the view.

-   For [CDS database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry"), the view fields displayed here as key fields are in no way related to the key fields that are defined using [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) for the [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry").

Join Conditions

The join conditions for the inner join can be formulated using equality relationships between any two table fields in the basis tables. The inner join joins the rows of the basis tables in question as a results set containing all combinations of rows whose columns together meet the join conditions. If there are no rows that meet the join conditions in the basis tables in question, no row is created in the results set. If there is a suitable [foreign key dependency](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_forkeyrel.htm) (including generic and constant foreign keys) between two basis tables, this dependency can be used as a default for defining join conditions in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm).

Maintenance Status

The Access setting in the maintenance status of a database view can have the following values:

-   Read only

The database view can only be used to read data with Open SQL.

-   Read, change, delete, and insert

If the database view contains only a single basis table, data can be [changed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) using Open SQL.

A database view with multiple basis tables can only be read with Open SQL. If a database view contains only a single table, data can be inserted in this table using the view with the Open SQL statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm) or [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm). The following options are available for the content of the table fields not in the view:

-   If the table field is defined with [NOT NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_init.htm) on the database, the field is filled with the corresponding initial value.

-   If the table field is defined with [NOT NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_init.htm) on the database, and there is no initial value, nothing can be inserted and a database error occurs with a corresponding exception.

-   If the table field is not defined with [NOT NULL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_init.htm) on the database, the field is filled with the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry").

Notes

-   A database view should only be used to insert data in the table if the flag for initial values is set for all table fields that are not in the view.

-   It is not usually a problem to modify existing data records using a database view in cases where the database view contains all key fields of the table.

-   Like a database table, the maintenance status of a database view has a [Display and Maintain](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting. In database views containing multiple basis tables, only the setting Display/maintenance not allowed is possible.

Table Buffering

Just like in database tables, it is possible to define for a database view whether the data in the [table buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_buffer_glosry.htm "Glossary Entry") is buffered. The same [buffering types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_buffer.htm) can be defined and [table buffering in Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm) is handled in the same way for views and for database tables with the only difference being that, when data is modified in one of the basis tables, the entire buffer is invalidated when the [buffers are synchronized](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm), regardless of the buffering type In client-specific views, however, this only affects the content of the current client.

The following prerequisites must be met before a database view can be buffered:

-   A basis table can occur in no more than nine buffered database views.

-   If all fields of the database view are key fields, these fields must also be key fields of the basis tables.

-   A view whose data is written to using Open SQL cannot have a [replacement object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm).

Note

No [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) can be created for an existing buffered view whose data can be written to using Open SQL.

Example

The database view DEMO\_SCARR\_SPFLI contains fields of the tables SCARR and SPFLI. Other names are assigned to these fields in the view.

The associated database object could be as follows:

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

The view can be accessed as follows using Open SQL:

SELECT \*
       FROM demo\_scarr\_spfli
       ORDER BY id, carrier, flight
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).