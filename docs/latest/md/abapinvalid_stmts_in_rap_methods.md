---
title: "Restrictions in RAP Handler and Saver Methods"
description: |
  The following restrictions apply to operations and/or statements in the RAP handler methods(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm 'Glossary Entry') and RAP saver methods(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ab
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_rap_methods.htm"
abapFile: "abapinvalid_stmts_in_rap_methods.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abapinvalid", "stmts", "rap", "methods"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Restrictions%20in%20RAP%20Handler%20and%20Saver%20Methods%2C%20ABAPINVALID_STMTS_IN_RAP_METHODS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Restrictions in RAP Handler and Saver Methods

The following restrictions apply to operations and/or statements in the [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") and [RAP saver methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). X means it is allowed.

RAP handler methods for ...

Operation

[Augmentation implementations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm)

[Feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_feature_control_glosry.htm "Glossary Entry")

[Precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_precheck_glosry.htm "Glossary Entry")

[Authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry")

[Locking](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_locking_glosry.htm "Glossary Entry")

[Reading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_read_operation_glosry.htm "Glossary Entry")

Create, update and delete

Determinations ON MODIFY

Determinations ON SAVE

Validations ON SAVE

Functions

Actions

ABAP EML requests raising events

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

ABAP EML read requests

X

X

X

X

X

X

X

X

X

X

X

X

ABAP EML GET PERMISSIONS

X

X

X

X

X

X

X

X

X

X

X

X

ABAP EML modify requests

X (but only with the addition AUGMENTING)

\-

\-

\-

\-

\-

X

X

X

\-

\-

X

ABAP EML [key conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_key.htm)

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

ABAP EML SET LOCKS

\-

\-

\-

\-

X

\-

X

X

X

\-

\-

X

Enqueue locks

\-

X

X

X

X

X

X

X

X

X

X

X

[Authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_check_glosry.htm "Glossary Entry")

X

X

X

X

X

X

X

X

\-

\-

X

X

Calling function modules for update task and background processing

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

Database modifications using the standard connection

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

ABAP SQL SELECT statements

X

X

X

X

X

X

X

X

X

X

X

X

PERFORM ON *\[*COMMIT *|* ROLLBACK*\]*

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

COMMIT *\[*WORK *|* ENTITIES*\]*, ROLLBACK *\[*WORK *|* ENTITIES*\]*

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

Explicit database commits

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

Implicit database commits

X

X

X

X

X

X

X

X

X

X

X

X

APIs classified with IF\_ABAP\_TX\_SURFACE

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

APIs classified with IF\_ABAP\_TX\_FUNCTIONAL

X

X

X

X

X

X

X

X

X

X

X

X

APIs classified with IF\_ABAP\_TX\_READ

X

X

X

X

X

X

X

X

X

X

X

X

APIs classified with IF\_ABAP\_TX\_MODIFY

\-

\-

\-

\-

\-

\-

X

X

X

\-

\-

X

APIs classified with IF\_ABAP\_TX\_SAVE

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

RAP saver methods

Operation

FINALIZE

CHECK\_BEFORE\_SAVE

CLEANUP

CLEANUP\_FINALIZE

ADJUST\_NUMBERS

SAVE/SAVE\_MODIFIED

MAP\_MESSAGES

ABAP EML requests raising events

\-

\-

\-

\-

X

X

\-

ABAP EML read requests

X

X

X

X

X

X

X

ABAP EML GET PERMISSIONS

X

X

\-

X

X

\-

X

ABAP EML modify requests

X

\-

\-

X

\-

\-

\-

ABAP EML [key conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_key.htm)

\-

\-

\-

\-

\-

X

\-

ABAP EML SET LOCKS

X

\-

\-

\-

\-

\-

\-

Enqueue locks

X

X

\-

\-

X

X

\-

[Authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthorization_check_glosry.htm "Glossary Entry")

\-

\-

\-

\-

\-

\-

\-

Calling function modules for update task and background processing

\-

\-

\-

\-

X

X

\-

Database modifications using the standard connection

\-

\-

\-

\-

X

X

\-

ABAP SQL SELECT statements

X

X

X

X

X

X

X

PERFORM ON *\[*COMMIT *|* ROLLBACK*\]*

\-

\-

\-

\-

X

X

\-

COMMIT *\[*WORK *|* ENTITIES*\]*, ROLLBACK *\[*WORK *|* ENTITIES*\]*

\-

\-

\-

\-

\-

\-

\-

Explicit database commits

\-

\-

\-

\-

\-

\-

\-

Implicit database commits

X

X

X

X

\-

\-

\-

APIs classified with IF\_ABAP\_TX\_SURFACE

\-

\-

\-

\-

\-

\-

\-

APIs classified with IF\_ABAP\_TX\_FUNCTIONAL

X

X

X

X

X

X

X

APIs classified with IF\_ABAP\_TX\_READ

X

X

X

X

X

X

X

APIs classified with IF\_ABAP\_TX\_MODIFY

X

\-

\-

X

\-

\-

\-

APIs classified with IF\_ABAP\_TX\_SAVE

\-

\-

\-

\-

X

X

\-

Further Information

-   [CL\_ABAP\_TX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_cl_abap_tx.htm)
-   [API Classifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapapi_classification.htm)
-   [Restrictions in Transactional Phases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_tx.htm)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)