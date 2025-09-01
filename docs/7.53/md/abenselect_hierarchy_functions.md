  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) →  [SELECT - FROM table\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_function.htm) → 

SELECT - FROM hierarchy\_function

Syntax

... [HIERARCHY( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm)
  *|* [HIERARCHY\_DESCENDANTS( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_access.htm)
  *|* [HIERARCHY\_ANCESTORS( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_access.htm)
  *|* [HIERARCHY\_SIBLINGS( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_access.htm) ...

Effect

Specifies a hierarchy function as a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry").

Hierarchy functions are not supported by all databases.

Notes

-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to hierarchy functions. This requires the constant HIERARCHIES of this class to be passed to the method in an internal table.

-   On a [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), the hierarchy functions shown here are transformed to calls of the HANA-specific SQL hierarchy functions using the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry"). More information can be found in the [documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us).

Continue
[SELECT - FROM HIERARCHY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_definition.htm)
[SELECT - FROM hierarchy\_access\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_access.htm)