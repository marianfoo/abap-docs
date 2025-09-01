  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Views](javascript:call_link\('abenddic_views.htm'\)) →  [Classic Views](javascript:call_link\('abenddic_classical_views.htm'\)) → 

Projection Views

A projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a projection view.

The structure type defined using the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using Open SQL but not using Native SQL or AMDP. Projection views can be used to access [pooled table or cluster tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) as well as transparent tables. The database interface transforms an Open SQL statement that accesses a projection view to a platform-specific SQL statement that provides the correct result.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only

The projection view can only be used to read data with Open SQL.

-   Read, change, delete, and insert

The projection view can only be used to [change](javascript:call_link\('abenopen_sql_writing.htm'\)) data with Open SQL.

When rows are inserted using projection views, all table fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Notes

-   As in a [database table](javascript:call_link\('abenddic_database_tables_client.htm'\)), the client dependency of a projection view is determined by an initial column with the built-in dictionary type CLNT.

-   Like a database table, the maintenance status of a projection view has a [Display and Maintain](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting.

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using Open SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).