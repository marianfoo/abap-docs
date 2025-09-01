---
title: "database_interface_glosry"
description: |
  database_interface_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_interface_glosry.htm"
abapFile: "abendatabase_interface_glosry.htm"
keywords: ["do", "try", "class", "data", "abendatabase", "interface", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

database interface

[Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_glosry.htm "Glossary Entry") to an [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") [database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_glosry.htm "Glossary Entry") that is integrated into the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). Statements in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") and Native SQL access the database using the database interface. Accordingly, the database interface is split into an [ABAP SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_interface_glosry.htm "Glossary Entry") and a [Native SQL interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_interface_glosry.htm "Glossary Entry"). Classic [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") still use the database interface to access the database.
The database interface is responsible for data transport between the AS ABAP and [database system](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_system_glosry.htm "Glossary Entry"), implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry"), and [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry").