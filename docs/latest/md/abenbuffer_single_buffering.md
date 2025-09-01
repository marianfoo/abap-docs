  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Table%20Buffering%20-%20Single%20Record%20Buffering%2C%20ABENBUFFER_SINGLE_BUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

Table Buffering - Single Record Buffering

Only those rows are buffered that are actually accessed. This requires less space in the buffer than when using generic or full buffering. On the other hand, more administration work is required and significantly more direct database accesses.

If a [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) clause is used to access a non-buffered row and this clause specifies equality conditions joined using AND, an attempt is made to load this row. If the row is not found, this is noted in the buffer and a fully specified WHERE clause is used to avoid a new database access in the next read.

Hints

-   When using single record buffering, any ABAP SQL statements must respect the entire primary key to prevent them from [bypassing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_restrictions.htm) table buffering.
-   Single record buffering is recommended for large amounts of data from which single rows are often read. For comparatively small amounts of data from which many rows are read, [full buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_complete_buffering.htm) is usually preferred since this reduces the number of direct database accesses required for loading.
-   The use of single record buffering depends on the WHERE clause only and not on the use of the addition [SINGLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm).