---
title: "ABAP database schema"
description: |
  Database schema(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_schema_glosry.htm 'Glossary Entry') of the standard database(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm 'Glossary Entry') assigned to the database user na
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm"
abapFile: "abenabap_db_schema_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abenabap", "schema", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20database%20schema%2C%20ABENABAP_DB_SCHEMA_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP database schema

[Database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") assigned to the [database user name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_user_name_glosry.htm "Glossary Entry") used for database accesses to an [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") via the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"). If the standard connection is used, a [work process](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_process_glosry.htm "Glossary Entry") acting as a [database user](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_user_glosry.htm "Glossary Entry") accesses the objects of this database schema implicitly. The objects of a database that are managed by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") are located in the ABAP database schema. The name of the ABAP database schema of an AS ABAP can be determined using the function module DB\_DBSCHEMA\_CURRENT.