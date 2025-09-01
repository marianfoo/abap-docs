---
title: "database_interface_glosry"
description: |
  database_interface_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm"
abapFile: "abendatabase_interface_glosry.htm"
keywords: ["do", "try", "class", "data", "abendatabase", "interface", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

database interface

[Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenintf_gen_glosry.htm "Glossary Entry") to the [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") [database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_glosry.htm "Glossary Entry") that is integrated into the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry"). Statements in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") and Native SQL access the database using the database interface. The database interface is divided into an [ABAP SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") and a [Native SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_interface_glosry.htm "Glossary Entry"). In addition, classic [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") also access the database using the database interface.
The database interface is responsible for data transport between the AS ABAP and the [database system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_system_glosry.htm "Glossary Entry"), implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry"), and [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry").