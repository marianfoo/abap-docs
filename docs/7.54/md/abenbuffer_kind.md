  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm) → 

Table Buffering - Buffering Types

There are three buffering types that can be [configured](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_buffer.htm) for a database table or database view in the ABAP Dictionary:

-   [Single record buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_single_buffering.htm)

-   [Generic buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_generic_buffering.htm)

-   [Full buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_complete_buffering.htm)

Note

If generic buffering or full buffering is activated, and the database table or view is specified statically in an ABAP SQL statement, the [secondary indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_index_glosry.htm "Glossary Entry") of the table are not ignored when the data is read from the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If single record buffering is used, only the primary index is read. A secondary index defined in ABAP Dictionary is evaluated regardless of whether the index was created on the database.

Continue
[Table Buffering - Single Record Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_single_buffering.htm)
[Table Buffering - Generic Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_generic_buffering.htm)
[Table Buffering - Full Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_complete_buffering.htm)