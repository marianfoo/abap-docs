---
title: "Authorization Checks during an Update"
description: |
  No authorization checks can be performed during an update(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm 'Glossary Entry'), that is, when processing an update function module(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_g
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthority_during_update.htm"
abapFile: "abenauthority_during_update.htm"
keywords: ["update", "do", "if", "try", "data", "abenauthority", "during"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw.htm) → 

Authorization Checks during an Update

No authorization checks can be performed during an [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry"), that is, when processing an [update function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") triggered by [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm)).

-   During an update, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not perform any authorization checks.
-   During an update, [PFCG conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpfcg_condition_glosry.htm "Glossary Entry") of the [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") that are based on authorizations in transaction PFCG are implicitly evaluated in such a way as if the current user had full authorization for all authorization fields of the respective authorization object.

This applies to [local updates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_update_glosry.htm "Glossary Entry") and [update sessions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_session_glosry.htm "Glossary Entry").