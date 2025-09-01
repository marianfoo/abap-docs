---
title: "Hints"
description: |
  -   The scope of the save transactional phase extends to the end of the internal session(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm 'Glossary Entry'). Other than ending the internal session, there is no way to reset the transactional phase. -
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_cl_abap_tx.htm"
abapFile: "abaprap_cl_abap_tx.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "abaprap", "abap"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) →  [Controlled SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrolling_sap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_TX%2C%20ABAPRAP_CL_ABAP_TX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_TX

-   [Detecting Violations in the Controlled SAP LUW](#@@ITOC@@ABAPRAP_CL_ABAP_TX_1)

The [static methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_method_glosry.htm "Glossary Entry") of the CL\_ABAP\_TX class can be used to explicitly activate [transactional phases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentr_phase_glosry.htm "Glossary Entry"), thereby controlling the status of the runtime environment and enabling transactional consistency checks with the [controlled SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrolled_sap_luw_glosry.htm "Glossary Entry").

The following methods are available:

-   MODIFY:
    -   Activates the modify transactional phase.
    -   Once the modify phase is activated, you can switch to the save phase by explicitly activating it.
-   SAVE:
    -   Activates the save transactional phase.
    -   Once the save phase is activated, you cannot switch to the modify phase by explicitly activating it.
    -   When the [transaction owner](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_owner_glosry.htm "Glossary Entry") calls the method, the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") is triggered, but without a final commit even if changes to a [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") have been performed.

Hints

-   The scope of the save transactional phase extends to the end of the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Other than ending the internal session, there is no way to reset the transactional phase.
-   The controlled SAP LUW is implicitly supported by [RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry"). [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") and [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") implicitly have a transactional contract assigned which is checked for violations of transactional consistency. Therefore, explicitly activating the transactional phases is usually not needed.
-   The transactional phases are implicitly set when [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") are consumed locally. This means that [RAP event handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry") are started in the modify phase when called. If you want to implement database modifications in [RAP event handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry") implementations, you must explicitly activate the save phase to avoid causing errors detected by the controlled SAP LUW.
-   The methods can be used to check against [specially classified APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapapi_classification.htm).

Example

...
cl\_abap\_tx=>modify( ).
    "The modify transactional phase is activated.
    "For example, database modification operations are not allowed.
...
cl\_abap\_tx=>save( ).
    "The save transactional phase is activated.
    "Unlike above, database modification operations are allowed here.
...

Detecting Violations in the Controlled SAP LUW   

Provided that a transactional phase has been set, checks in a controlled SAP LUW are applied in the following cases:

-   In the context of [ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cloud_glosry.htm "Glossary Entry"), contract violations result in an unconditional [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"). This occurs for all [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") with [ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_version_glosry.htm "Glossary Entry") [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry"). It also occurs for repository objects of a different ABAP language version in an [ABAP Platform](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_platform_glosry.htm "Glossary Entry") configured for ABAP Cloud. Note that the ABAP language version of a repository object can either be set explicitly or derived implicitly, for example from the package or software component.
-   In [RAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry") or when locally consuming [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"), for example, checks are applied automatically. In RAP, if the [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") is specified with [strict(2)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm) mode, contract violations result in an unconditional runtime error. Without strict(2), violations are logged.
-   In other contexts (for example, non-RAP or non-cloud contexts), the [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") CC\_STMT can be enabled for the checks to be performed, otherwise the controlled SAP LUW has no effect. This is particularly relevant for [classic ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_abap_glosry.htm "Glossary Entry").

Further Information

-   [Restrictions in Transactional Phases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_tx.htm)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)

Executable Example

The example [CL\_ABAP\_TX and API Classifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tx_abexa.htm) demonstrates the explicit setting of transactional phases.