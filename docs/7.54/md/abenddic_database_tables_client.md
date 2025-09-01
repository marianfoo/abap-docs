  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_semasspec.htm) → 

Client-Dependence of Database Tables

If the first column of a database table is a key field with the [built-in type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) CLNT, the table is client-specific. In this case, the column contains the [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") evaluated in client copies and in [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry").

Notes

-   Generally, tables in the [delivery class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_delivery.htm) A are client-specific, whereas system tables in the delivery classes E, S, and W are cross-client.

-   The system table T000, which contains the [client IDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of an [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry"), is an exception. The first column has the type CLNT, but the table is cross-client. If the table is accessed using ABAP SQL, the additions [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) and the obsolete [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) cannot be specified.