  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHAVIOR_HANDLER%2C%20RAP%20Handler%20Class%2C%20ABENABP_CL_ABAP_BEH_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

CL\_ABAP\_BEHAVIOR\_HANDLER, RAP Handler Class

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lcl\_handler [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_HANDLER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
    [handler\_method\_declarations](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
    ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lcl\_handler [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
  [handler\_method\_implementations](javascript:call_link\('abapmethods_for_rap_behv.htm'\))
  ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

A handler class can be defined in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It consists of method declarations [handler\_method\_declarations](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) and implementations [handler\_method\_implementations](javascript:call_link\('abapmethods_for_rap_behv.htm'\)).

A handler class lcl\_handler inherits from class CL\_ABAP\_BEHAVIOR\_HANDLER. For modularization purposes, one behavior pool can define several handler classes. For example, each entity can have its own handler class, or individual handler classes can be defined to distinguish between reading and changing RAP BO entities.

Handler classes are implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)) since instantiating and calling only happens through the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry").

Executable Example

The example [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)) demonstrates RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.