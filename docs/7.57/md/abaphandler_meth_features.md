  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR, RAP Handler Methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR INSTANCE FEATURES, FEATURES, RAP Handler Method, ABAPHANDLER_METH_FEATURES, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

FOR INSTANCE FEATURES, FEATURES, RAP Handler Method

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR *\[*INSTANCE*\]* FEATURES
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_feat) *|* im\_par\_feat *}*
   REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_feat) *|* req\_feat *}*
   FOR bdef
   RESULT *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(res\_feat) *|* res\_feat *}*
  *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*failed TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*reported TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

Effect

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for the [instance-based feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)). It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The ABAP word INSTANCE is optional.

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   im\_par\_feat: Internal table of type [TYPE TABLE FOR INSTANCE FEATURES KEY](javascript:call_link\('abaptype_table_for.htm'\)).
        
        The importing parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))). The use of the ABAP word IMPORTING is optional.
        
    -   req\_feat: Request parameter on which the information retrieval for instance-based feature control is based on. It is a structure of type [TYPE STRUCTURE FOR INSTANCE FEATURES REQUEST](javascript:call_link\('abaptype_structure_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   res\_feat: Used to store the result of the information retrieval. It is an internal table of type [TYPE TABLE FOR INSTANCE FEATURES RESULT](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)).

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

...
METHODS get\_instance\_features FOR INSTANCE FEATURES
    IMPORTING keys REQUEST requested\_features FOR bdef
    RESULT result.
METHODS get\_instance\_features FOR FEATURES
    keys REQUEST requested\_authorizations FOR bdef RESULT result
    CHANGING failed TYPE DATA reported TYPE DATA.
...

Executable Example

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.