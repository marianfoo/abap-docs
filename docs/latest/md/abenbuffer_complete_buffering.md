  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_puffering.htm) →  [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Table%20Buffering%20-%20Full%20Buffering%2C%20ABENBUFFER_COMPLETE_BUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Table Buffering - Full Buffering

When a row is read, all rows in the table or view are loaded to the [table buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffer_glosry.htm "Glossary Entry"). The buffered table or view is either entirely in the buffer or not at all. In the buffer, the buffered data records are sorted by the key of the table or view. Optimized access requires that the left-aligned part of the primary key or of the fields of a secondary index be as large as possible. If not, the buffer is scanned linearly.

If full buffering is switched on in a client-dependent table or view, generic buffering using the client column as a generic key is performed internally.

Hints

-   In a fully buffered table or view, access to nonexistent data is very fast (see [Buffer Management](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_memory.htm)).
-   For fully buffered tables or views, [restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_restr.htm) that cause [bypassing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuffer_restrictions.htm) the buffer come from the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") only.
-   Full buffering should be used for small amounts of data, such as customizing tables. For larger amounts of data, full buffering is worthwhile only if large quantities of data are read frequently. Writes on fully buffered tables should be performed only rarely.

Example

The table T005 is fully buffered since it is small and accessed often by reads.