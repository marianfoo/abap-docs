  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) →  [SELECT - FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) →  [SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) → 

SELECT - FROM table\_function

Syntax

... [hierarchy\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm) ...

Effect

A table function is a possible data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). If specified, a ABAP SQL-specific table function is transformed to database-specific access by the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") and a tabular result is produced. The query accesses this result in the same way as it accesses a database table or view.

The following table functions are available:

-   [Hierarchy functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhierarchy_function_glosry.htm "Glossary Entry") [hierarchy\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm)

Note

Table functions are handled like any other data source. They can have alternative table names defined using [AS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) and can be used in join expressions. There are no restrictions on which [queries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") they can be used in.

Continue
[SELECT - FROM hierarchy\_function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_hierarchy_functions.htm)