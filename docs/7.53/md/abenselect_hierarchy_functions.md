  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT - FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT - FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT - FROM table\_function](javascript:call_link\('abenselect_table_function.htm'\)) → 

SELECT - FROM hierarchy\_function

Syntax

... [HIERARCHY( ... )](javascript:call_link\('abenselect_hierarchy_definition.htm'\))
  *|* [HIERARCHY\_DESCENDANTS( ... )](javascript:call_link\('abenselect_hierarchy_access.htm'\))
  *|* [HIERARCHY\_ANCESTORS( ... )](javascript:call_link\('abenselect_hierarchy_access.htm'\))
  *|* [HIERARCHY\_SIBLINGS( ... )](javascript:call_link\('abenselect_hierarchy_access.htm'\)) ...

Effect

Specifies a hierarchy function as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in a ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

Hierarchy functions are not supported by all databases.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) to check whether the current database system or a database system accessed using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") supports access to hierarchy functions. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.

-   On a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), the hierarchy functions shown here are transformed to calls of the HANA-specific SQL hierarchy functions using the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry"). More information can be found in the [documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us).

Continue
[SELECT - FROM HIERARCHY](javascript:call_link\('abenselect_hierarchy_definition.htm'\))
[SELECT - FROM hierarchy\_access\_function](javascript:call_link\('abenselect_hierarchy_access.htm'\))