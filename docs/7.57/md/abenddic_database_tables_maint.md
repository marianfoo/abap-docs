---
title: "DDIC - Display and Maintenance of Database Tables"
description: |
  In ABAP Dictionary, it is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as Data Browser(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_browser_glosry.htm 'Glossary Entry') (transaction SE16 ) and 'Table View Maintenance
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_maint.htm"
abapFile: "abenddic_database_tables_maint.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "maint"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Display and Maintenance of Database Tables, ABENDDIC_DATABASE_TABLES_MAINT, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Display and Maintenance of Database Tables

In ABAP Dictionary, it is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as [Data Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_browser_glosry.htm "Glossary Entry") (transaction SE16 ) and "Table View Maintenance" (transactions SM30 and SM31).

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

Users must always have the correct authorizations before they can use these tools.