  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Display%20and%20Maintenance%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_MAINT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

DDIC - Display and Maintenance of Database Tables

It is possible to define whether DDIC database tables can be displayed or maintained using certain tools such as [Data Browser](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_browser_glosry.htm "Glossary Entry") (transaction SE16 ) and Table View Maintenance (transactions SM30 and SM31) or Data Preview in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

The following settings are possible:

-   Display/maintenance not allowed
    -   Tables cannot be displayed or maintained using Data Browser (transaction SE16) or using Data Preview in ADT.
    -   No maintenance dialogs can be created using transaction SE54, which means that transactions SM30 and SM31 cannot be used.
-   Display/maintenance allowed with restrictions
    -   Tables can be displayed but not maintained using Data Browser (transaction SE16) or using Data Preview in ADT.
    -   Maintenance dialogs can be created using transaction SE54.
    -   Tables cannot be displayed and maintained with transactions SM30 and SM31. Maintenance dialogs can, however, be used in View Cluster Maintenance (transaction SM34).
-   Display/maintenance allowed
    -   Tables can be displayed and maintained using Data Browser (transaction SE16) or using Data Preview in ADT.
    -   Maintenance dialogs can be created using transaction SE54.
    -   Tables can be displayed and maintained using transactions SM30 and SM31. Maintenance dialogs can be used in View Cluster Maintenance (transaction SM34).
-   Only display allowed
    -   Tables can be displayed but not maintained using Data Browser (transaction SE16) or using Data Preview in ADT.
    -   Maintenance dialogs can be created using transaction SE54 but cannot be used in View Cluster Maintenance (transaction SM34).
    -   Tables cannot be displayed and maintained with transactions SM30 and SM31.

Hint

The current user must have all required authorizations to use these tools.