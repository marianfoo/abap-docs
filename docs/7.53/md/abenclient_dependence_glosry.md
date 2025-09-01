  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

client dependency

A [database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_table_glosry.htm "Glossary Entry") or [classic view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclassical_view_glosry.htm "Glossary Entry") in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") is client-specific if the first column is a [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry"). The system table T000, which contains the [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") [client IDs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry"), is excluded from this rule. The client dependency of non-abstract [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") is declared using the [ABAP annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencore_annotation_glosry.htm "Glossary Entry") @CLientHandling.type in the [CDS source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_source_code_glosry.htm "Glossary Entry").