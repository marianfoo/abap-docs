---
title: "DDIC - Display and Maintenance of Database Tables"
description: |
  In ABAP Dictionary, it is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as Data Browser(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_browser_glosry.htm 'Glossary Entry') (transaction SE16 ) and 'Table View Maintenance
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_maint.htm"
abapFile: "abenddic_database_tables_maint.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "maint"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_semasspec.htm) → 

DDIC - Display and Maintenance of Database Tables

In ABAP Dictionary, it is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as [Data Browser](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_browser_glosry.htm "Glossary Entry") (transaction SE16 ) and "Table View Maintenance" (transactions SM30 and SM31) .

The following settings are possible:

-   Display/maintenance not allowed

-   Tables cannot be displayed or maintained using Data Browser (transaction SE16).

-   No maintenance dialogs can be created using transaction SE54, which means that transactions SM30 and SM31 cannot be used.

-   Display/maintenance allowed to a limited extent

-   Tables can be displayed but not maintained using Data Browser (transaction SE16).

-   Maintenance dialogs can be created using transaction SE54.

-   Tables cannot be displayed and maintained with transactions SM30 and SM31. Maintenance dialogs can, however, be used in "View Cluster Maintenance" (transaction SM34).

-   Display/maintenance allowed

-   Tables can be displayed and maintained using Data Browser (transaction SE16).

-   Maintenance dialogs can be created using transaction SE54.

-   Tables can be displayed and maintained using transactions SM30 and SM31. Maintenance dialogs can be used in "View Cluster Maintenance" (transaction SM34).

Hint

Users must always have the correct authorizations before they can use the tools in question.