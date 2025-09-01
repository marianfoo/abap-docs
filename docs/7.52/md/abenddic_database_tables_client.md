  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_semasspec.htm) → 

Client-Dependence of Database Tables

If the first column of a database table is a key field of the [predefined type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) CLNT, the table is client-specific. In this case, the column contains the [client ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_identifier_glosry.htm "Glossary Entry") evaluated in client copies and in automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") in [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry").

Note

Generally, tables in the [delivery class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_delivery.htm) A are client-specific, whereas system tables in the delivery classes E, S, and W are cross-client.