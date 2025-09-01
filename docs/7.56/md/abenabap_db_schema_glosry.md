---
title: "ABAP database schema"
description: |
  Database schema(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm 'Glossary Entry') of the standard database(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm 'Glossary Entry') assigned to the database user name(https:
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm"
abapFile: "abenabap_db_schema_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abenabap", "schema", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

ABAP database schema

[Database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm "Glossary Entry") of the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") assigned to the [database user name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_user_name_glosry.htm "Glossary Entry") used for database accesses to an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") via the [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry"). If the standard connection is used, a [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry") acting as a [database user](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_user_glosry.htm "Glossary Entry") accesses the objects of this database schema implicitly. The objects of a database that are managed by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") are located in the ABAP database schema. The name of the ABAP database schema of an AS ABAP can be determined using the function module DB\_DBSCHEMA\_CURRENT.