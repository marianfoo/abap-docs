---
title: "Activation Type of Database Tables"
description: |
  The activation type defines whether a database table can be activated interactively in an ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) or whether the ABAP runtime environment needs to be used instead. This setting is not relevant for database
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_act_type.htm"
abapFile: "abenddic_database_tables_act_type.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "act", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techspec.htm) → 

Activation Type of Database Tables

The activation type defines whether a database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm) or whether the ABAP runtime environment needs to be used instead. This setting is not relevant for database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00

The default setting in which a database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm). Database tables in application programming should always have this activation type.

-   The following values for the activation type only apply to those database tables required by the ABAP runtime environment itself (and hence only to internal SAP developments):

-   Activation type 01
    The [runtime object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_object_glosry.htm "Glossary Entry") of the database table must be created using an [ABAP kernel](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkernel_glosry.htm "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm). This may make it impossible to modify and activate important system tables directly.

-   Activation type 02
    The database table is used in the [ABAP kernel](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenkernel_glosry.htm "Glossary Entry"), but the [runtime object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_object_glosry.htm "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_tools.htm). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.

-   Activation type 10
    The database table is required before other objects are modified as part of a transport.