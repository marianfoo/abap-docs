  

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