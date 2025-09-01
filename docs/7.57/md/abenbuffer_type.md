  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_puffering.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Table Buffering - Buffering Types, ABENBUFFER_TYPE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Table Buffering - Buffering Types

The following buffering types can be defined for a DDIC database table, DDIC database view or CDS view entity:

-   [Table Buffering - Single Record Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_single_buffering.htm)
-   [Table Buffering - Generic Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_generic_buffering.htm)
-   [Table Buffering - Full Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_complete_buffering.htm)

The buffering type is defined and transported separately from the buffered entity.

-   For DDIC database tables and DDIC database views this is done as [part](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm) of their [technical settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_techspec.htm).
-   For CDS view entities, a tuning object named [CDS entity buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_buffer_glosry.htm "Glossary Entry") is defined that relates buffering to the layers core, localization, industry, partner and customer.

Hint

If generic buffering or full buffering is activated, and the database table or view is specified statically in an ABAP SQL statement, the [secondary indexes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_index_glosry.htm "Glossary Entry") of the table are not ignored when the data is read from the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). If single record buffering is used, only the primary index is read. A secondary index defined in the ABAP Dictionary is evaluated regardless of whether the index was created on the database or not.

Continue
[Table Buffering - Single Record Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_single_buffering.htm)
[Table Buffering - Generic Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_generic_buffering.htm)
[Table Buffering - Full Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_complete_buffering.htm)