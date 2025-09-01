  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR, RAP Handler Methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%20LOCK%2C%20RAP%20Handler%20Method%2C%20ABAPHANDLER_METH_LOCK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR LOCK, RAP Handler Method

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR LOCK
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_lock) *|* im\_par\_lock *}*
   FOR LOCK bdef
   *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*failed TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*reported TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

Effect

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for the locking of [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") instances corresponding to the lock properties in the behavior definition. This method is automatically called before a modify operation. It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_lock: Includes the keys of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are to be locked. It is an internal table of type [TYPE TABLE FOR KEY OF](javascript:call_link\('abaptype_table_for.htm'\)).
        
        The importing parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))). The use of the ABAP word IMPORTING is optional.
        
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [RAP BDL - locking](javascript:call_link\('abenbdl_locking.htm'\)).

Example

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

...
METHODS lock FOR LOCK IMPORTING keys FOR LOCK bdef.
...

Executable Example

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.