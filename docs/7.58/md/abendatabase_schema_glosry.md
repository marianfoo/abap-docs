---
title: "database_schema_glosry"
description: |
  database_schema_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm"
abapFile: "abendatabase_schema_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abendatabase", "schema", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20database%20schema%2C%20ABENDATABASE_SCHEMA_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

database schema

A database schema groups [database objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_object_glosry.htm "Glossary Entry") in a [database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_glosry.htm "Glossary Entry"). Within a database schema, [SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_glosry.htm "Glossary Entry") can be used to access the objects of the same schema directly. [Database users](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_user_glosry.htm "Glossary Entry") implicitly access the database schema assigned to their [database user names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_user_name_glosry.htm "Glossary Entry"). Objects in a different schema can be accessed only by specifying their schema name. Access to a database schema by a database user is regulated by individual authorizations. The objects managed by the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") for a database and the implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") are located in the [ABAP database schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") that is assigned the database user name when the [standard connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") in [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") is accessed.