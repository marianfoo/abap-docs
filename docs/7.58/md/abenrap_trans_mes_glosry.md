  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20transition%20message%2C%20ABENRAP_TRANS_MES_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP transition message

A message in the [reported](javascript:call_link\('abapeml_response.htm'\)) [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is semantically related to the current ABAP EML MODIFY request and independent of the state of the [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Unlike [RAP state messages](javascript:call_link\('abenrap_state_mes_glosry.htm'\) "Glossary Entry"), transition messages are [RAP messages](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") that do not have a state area assigned ([%state\_area](javascript:call_link\('abapderived_types_state_area.htm'\))) and are not persisted with the state. Therefore, these messages cannot be accessed at a later point in time.

There are [instance transition messages](javascript:call_link\('abeninstance_rap_trans_mes_glosry.htm'\) "Glossary Entry") and [static transition messages](javascript:call_link\('abenstatic_rap_trans_mes_glosry.htm'\) "Glossary Entry").