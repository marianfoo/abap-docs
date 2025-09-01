  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_type.htm) → 

Table Buffering - Single Record Buffering

Only those rows in the table are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhere.htm) clause is used to access a non-buffered row and this clause specifies equality conditions joined using AND, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified WHERE clause is used to avoid a new database access in the next read.

Hints

-   When using single record buffering, any ABAP SQL statements must respect the entire primary key to prevent them from [bypassing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_restrictions.htm) table buffering.
-   Single record buffering is recommended for large tables from which single rows are often read. In comparatively small tables from which many rows are read, [full buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuffer_complete_buffering.htm) is usually preferred since this reduces the number of direct database accesses required for loading.
-   The use of single record buffering depends on the WHERE clause only and not on the use of the addition [SINGLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm).