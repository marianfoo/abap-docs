  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR, RAP Handler Methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%20GLOBAL%20AUTHORIZATION%2C%20RAP%20Handler%20Method%2C%20ABAPHANDLER_METH_GLOBAL_AUTH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

FOR GLOBAL AUTHORIZATION, RAP Handler Method

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR GLOBAL AUTHORIZATION
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_gl\_auth) *|* im\_par\_gl\_auth *}*
   REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_gl\_auth) *|* req\_gl\_auth *}*
   FOR bdef
   RESULT *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(res\_gl\_auth) *|* res\_gl\_auth *}*
   *\[* [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) reported TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]*.

Effect

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for [global authorization](javascript:call_link\('abenbdl_authorization.htm'\)) checks for accessing [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   req\_gl\_auth: Request parameter on which the information retrieval for instance-based authorization is based on. It is a structure of type [TYPE STRUCTURE FOR GLOBAL AUTHORIZATION REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   res\_gl\_auth: Used to store the result of the permission information retrieval. It is a structure of type [TYPE STRUCTURE FOR GLOBAL AUTHORIZATION RESULT](javascript:call_link\('abaptype_structure_for.htm'\)).
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter reported ([RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) is implicitly available. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR REPORTED can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).

Example

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

...
METHODS get\_global\_authorizations FOR GLOBAL AUTHORIZATION
    IMPORTING REQUEST requested\_authorizations FOR bdef
    RESULT result.
...

Executable Examples

-   [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - global authorization](javascript:call_link\('abenbdl_authorization_abexa.htm'\))