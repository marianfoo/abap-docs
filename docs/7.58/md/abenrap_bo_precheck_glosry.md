  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BO%20precheck%2C%20ABENRAP_BO_PRECHECK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BO precheck

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") addition that must be implemented by a [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"). A precheck is defined for operations in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of a base business object or in the [projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry").

The implementation method is called before a modify request is executed on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") to prevent unwanted changes from reaching the transactional buffer.

[→ More about](javascript:call_link\('abenbdl_precheck.htm'\))