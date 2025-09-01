  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

FOR INSTANCE AUTHORIZATION, AUTHORIZATION

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR *\[*INSTANCE*\]* AUTHORIZATION
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_auth) *|* im\_par\_auth *}*
   REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_auth) *|* req\_auth *}*
   FOR bdef
   RESULT *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(res\_auth) *|* res\_auth *}*
  *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*[failed](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*[reported](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

Effect

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for [instance-based authorization](javascript:call_link\('abenbdl_authorization.htm'\)) checks for accessing [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   im\_par\_auth: Internal table of type [TYPE TABLE FOR AUTHORIZATION KEY](javascript:call_link\('abaptype_table_for.htm'\)).
        
        The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))). The use of the ABAP word IMPORTING is optional.
        
    -   req\_auth: Request parameter on which the information retrieval for instance-based authorization is based on. It is a structure of type [TYPE STRUCTURE FOR AUTHORIZATION REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   res\_auth: Used to store the result of the permission information retrieval. It is an internal table of type [TYPE TABLE FOR AUTHORIZATION RESULT](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters [failed](javascript:call_link\('abaptype_response_for.htm'\)) and [reported](javascript:call_link\('abaptype_response_for.htm'\)) are implicitly available. They are used to return information on failures or messages respectively. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is used. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)).

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - authorizations](javascript:call_link\('abenbdl_authorization.htm'\)).

Examples

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

METHODS get\_instance\_authorizations FOR INSTANCE AUTHORIZATION
    IMPORTING keys REQUEST requested\_authorizations FOR bdef
    RESULT result.
METHODS get\_instance\_authorizations FOR AUTHORIZATION
    IMPORTING keys REQUEST requested\_authorizations FOR bdef RESULT result
    CHANGING failed TYPE DATA reported TYPE DATA.

Executable Example

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.