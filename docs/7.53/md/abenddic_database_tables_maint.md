  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_semasspec.htm) → 

Displaying and Editing Database Tables

In ABAP Dictionary, it is possible to define whether database tables are displayed or edited using certain tools such as [Data Browser](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_browser_glosry.htm "Glossary Entry") (transaction SE16 ) and "Table View Maintenance" (transactions SM30 and SM31) .

The following settings are possible:

-   Display/maintenance not allowed

-   Tables cannot be displayed or edited using Data Browser (transaction SE16).

-   No maintenance dialogs can be created using transaction SE54, which means that transactions SM30 and SM31 cannot be used.

-   Display/maintenance allowed to a limited extent

-   Tables can be displayed but not edited using Data Browser (transaction SE16).

-   Maintenance dialogs can be created using transaction SE54.

-   Tables cannot be displayed and edited with transactions SM30 and SM31. Maintenance dialogs can, however, be used in "View Cluster Maintenance" (transaction SM34).

-   Display/maintenance allowed

-   Tables can be displayed and edited using Data Browser (transaction SE16).

-   Maintenance dialogs can be created using transaction SE54.

-   Tables can be displayed and edited using transactions SM30 and SM31. Maintenance dialogs can be used in "View Cluster Maintenance" (transaction SM34).

Note

Users must always have the correct authorizations before they can use the tools in question.