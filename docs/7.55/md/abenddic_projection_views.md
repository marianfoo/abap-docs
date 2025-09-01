  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

DDIC - Projection Views

A DDIC projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a DDIC projection view.

The structure type defined using the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-specific SQL statement that provides the correct result.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only

The projection view can only be used to read data with ABAP SQL.

-   Read, change, delete, and insert

The projection view can only be used to [change](javascript:call_link\('abenopen_sql_writing.htm'\)) data with ABAP SQL.

When lines are inserted using projection views, all table fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Hints

-   As in a [DDIC database table](javascript:call_link\('abenddic_database_tables_client.htm'\)), the client dependency of a projection view is determined by an initial column with the built-in dictionary type CLNT.

-   Like a DDIC database table, the maintenance status of a projection view has a [Display and Maintain](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting.

-   The basis table of a projection view can be a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") and a [global temporary table](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).