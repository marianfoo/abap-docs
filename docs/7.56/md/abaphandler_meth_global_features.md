  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

FOR GLOBAL FEATURES

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR GLOBAL FEATURES
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_gl\_feat) *|* req\_gl\_feat *}*
   FOR bdef
   RESULT *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(res\_gl\_feat) *|* res\_gl\_feat *}*
   *\[* [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) [reported](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]*.

Effect

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for the [global feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   req\_gl\_feat: Request parameter on which the information retrieval for global feature control is based on. It is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef](javascript:call_link\('abaptype_structure_for.htm'\)).
        
        The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))). The use of the ABAP word IMPORTING is optional.
        
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   res\_gl\_feat: Used to store the result of the information retrieval. It is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES RESULT bdef](javascript:call_link\('abaptype_structure_for.htm'\)). The parameter can also be passed by reference.
    -   The changing parameter [reported](javascript:call_link\('abaptype_response_for.htm'\)) is implicitly available. It is used to return messages. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is used. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](javascript:call_link\('abaptype_response_for.htm'\)).

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)).

Examples

Example for a RAP handler method definition. Find a demonstration of a method implementation in the executable example further down.

METHODS get\_global\_features FOR GLOBAL FEATURES
    IMPORTING REQUEST requested\_features FOR bdef
    RESULT result.

Executable Example

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.