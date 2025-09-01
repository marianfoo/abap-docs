---
title: "RAP state message"
description: |
  A message(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_message_glosry.htm 'Glossary Entry') in the reported(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) RAP response parameter(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm"
abapFile: "abenrap_state_mes_glosry.htm"
keywords: ["do", "if", "try", "method", "class", "types", "abenrap", "state", "mes", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20state%20message%2C%20ABENRAP_STATE_MES_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP state message

A [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_message_glosry.htm "Glossary Entry") in the [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") of a [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") that refers to the state of an [entity instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry"). A state message is defined with the parameter [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry").

RAP state messages are relevant in the following contexts:

-   Draft-enabled RAP BOs
-   The [cleanup\_finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsaver_class_cleanup_finalize.htm) and [check\_before\_save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_check_before_save.htm) [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") in [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_validation_glosry.htm "Glossary Entry") in [managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")