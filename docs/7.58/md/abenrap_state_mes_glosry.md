  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20state%20message%2C%20ABENRAP_STATE_MES_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP state message

A [message](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") in the [reported](javascript:call_link\('abapeml_response.htm'\)) [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that refers to the state of an [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). A state message is defined with the parameter [%state\_area](javascript:call_link\('abapderived_types_state_area.htm'\)), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry").

RAP state messages are relevant in the following contexts:

-   Draft-enabled RAP BOs
-   The [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) and [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") in [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") in [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")