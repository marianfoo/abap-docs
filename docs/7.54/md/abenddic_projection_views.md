---
title: "Projection Views"
description: |
  A projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a projection view. The structure type defined using the view fields of the projection view can be referenced in ABAP programs usin
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_projection_views.htm"
abapFile: "abenddic_projection_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "abenddic", "projection", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) →  [Classic Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_views.htm) → 

Projection Views

A projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a projection view.

The structure type defined using the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-specific SQL statement that provides the correct result.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only

The projection view can only be used to read data with ABAP SQL.

-   Read, change, delete, and insert

The projection view can only be used to [change](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) data with ABAP SQL.

When rows are inserted using projection views, all table fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_init.htm) on the database.

Notes

-   As in a [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_client.htm), the client dependency of a projection view is determined by an initial column with the built-in dictionary type CLNT.

-   Like a database table, the maintenance status of a projection view has a [Display and Maintain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting.

-   The basis table of a projection view can be a [transparent table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry") and a [global temporary table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).