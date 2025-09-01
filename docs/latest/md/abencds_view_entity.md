---
title: "ABAP CDS - CDS Entities"
description: |
  The following sections describe the possible CDS entities(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm 'Glossary Entry'): -   CDS view entities(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) -   CDS projection v
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm"
abapFile: "abencds_view_entity.htm"
keywords: ["do", "if", "try", "data", "abencds", "view", "entity"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20CDS%20Entities%2C%20ABENCDS_VIEW_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS - CDS Entities

The following sections describe the possible [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm)
-   [CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm)
-   [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_functions.htm)
-   [CDS hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchies.htm)
-   [CDS custom entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entities.htm)
-   [CDS abstract entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm)

Each section first gives an overview of the concept, describes client handling and table buffering for the respective entity, and then describes the associated CDS DDL statement and all possible additions.

Hint

After activation, a CDS entity can be changed into another type of CDS entity. How this works and all possible type changes are described in topic [ABAP CDS - Changing the Type of a CDS Entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transitions.htm).

Continue
[ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm)
[ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm)
[ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_functions.htm)
[ABAP CDS - Hierarchies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_hierarchies.htm)
[ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entities.htm)
[ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm)
[ABAP CDS - Data Source Matrix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_matrix.htm)
[ABAP CDS - Evaluating CDS Metadata](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_read_api.htm)