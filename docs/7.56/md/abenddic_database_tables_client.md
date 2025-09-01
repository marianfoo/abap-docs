  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Dependent Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_semasspec.htm) → 

DDIC - Client Dependency of Database Tables

If the first column of a DDIC database table is a key field with the [built-in type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) CLNT, the table is client-dependent. In this case, the column contains the [client ID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_identifier_glosry.htm "Glossary Entry") evaluated in client copies and in [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry").

Hints

-   Generally, tables in the [delivery class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_delivery.htm) A are client-dependent, whereas system tables in the delivery classes E, S, and W are client-independent.
-   The system table T000, which contains the [client IDs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry"), is an exception. The first column has the type CLNT, but the table is client-independent. If the table is accessed using ABAP SQL, the additions [USING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) and the obsolete [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) cannot be specified.