---
title: "DDIC - Activation Type of Database Tables"
description: |
  The activation type defines whether a DDIC database table can be activated interactively in an ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm) or whether it must be controlled using the ABAP runtime framework environment. This setting is not rele
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_act_type.htm"
abapFile: "abenddic_database_tables_act_type.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "act", "type"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Dependent Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_techspec.htm) → 

DDIC - Activation Type of Database Tables

The activation type defines whether a DDIC database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm) or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00
    
    The default setting in which a DDIC database table can be activated interactively in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm). DDIC database tables in application programming should always have this activation type.
    
-   The following values for the activation type only apply to those DDIC database tables required by the ABAP runtime framework itself and hence only to internal SAP developments:
    -   Activation type 01
        
        The [DDIC runtime object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") of the database table must be created using an [ABAP kernel](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkernel_glosry.htm "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm). This may make it impossible to modify and activate important system tables directly.
        
    -   Activation type 02
        
        The DDIC database table is used in the [ABAP kernel](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkernel_glosry.htm "Glossary Entry"), but the [DDIC runtime object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_tools.htm). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.
        
    -   Activation type 10
        
        The DDIC database table is required before other objects are modified as part of a transport.