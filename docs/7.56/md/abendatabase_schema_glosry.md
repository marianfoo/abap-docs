---
title: "database_schema_glosry"
description: |
  database_schema_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm"
abapFile: "abendatabase_schema_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abendatabase", "schema", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

database schema

A database schema groups [database objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_object_glosry.htm "Glossary Entry") in a [database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_glosry.htm "Glossary Entry"). Within a database schema, [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") can be used to access the objects of the same schema directly. [Database users](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_user_glosry.htm "Glossary Entry") implicitly access the database schema assigned to their [database user names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). Objects in a different schema can be accessed only by specifying their schema name. Access to a database schema by a database user is regulated by individual authorizations. The objects managed by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") for a database and the implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") are located in the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that is assigned the database user name when the [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") is accessed.