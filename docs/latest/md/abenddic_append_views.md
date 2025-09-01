---
title: "DDIC - Append Views"
description: |
  DDIC database views(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to th
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm"
abapFile: "abenddic_append_views.htm"
keywords: ["select", "do", "if", "try", "data", "abenddic", "append", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Views%2C%20ABENDDIC_APPEND_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Views

[DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to the same rules as the name of a [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A DDIC append view can add further fields from one of the basis tables of a DDIC database view to the database view in question. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. A DDIC append view is assigned to exactly one DDIC database view. More than one DDIC append view can be created for a DDIC database view.

When a DDIC append view is activated, an [append structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry") with this name is created in ABAP Dictionary. Its components are the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is changed automatically when the append view is activated.

Hints

-   DDIC append views are possible only for DDIC database views and not for any other kind of [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm).
-   In [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"), [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") are available to extend [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

Example

The DDIC append view DEMO\_APPEND\_VIEW is added to the DDIC database view DEMO\_ORIGINAL. The program DEMO\_APPEND\_VIEW uses [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the extended view. It displays the components of the original view and of the append view and the result set.