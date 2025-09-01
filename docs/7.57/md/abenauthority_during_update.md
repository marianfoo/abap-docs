---
title: "Authorization Checks During an Update"
description: |
  No authorization checks can be performed during an update(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm 'Glossary Entry'), that is, when processing an update function module(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_g
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthority_during_update.htm"
abapFile: "abenauthority_during_update.htm"
keywords: ["update", "do", "if", "try", "data", "abenauthority", "during"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Authorization Checks During an Update, ABENAUTHORITY_DURING_UPDATE, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Authorization Checks During an Update

No authorization checks can be performed during an [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry"), that is, when processing an [update function module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") triggered by [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm)).

-   During an update, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not perform any authorization checks.
-   During an update, [PFCG conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") of the [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") that are based on authorizations in transaction PFCG are implicitly evaluated in such a way as if the current user had full authorization for all authorization fields of the respective authorization object.

This applies to [local updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_update_glosry.htm "Glossary Entry") and [update sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_session_glosry.htm "Glossary Entry").