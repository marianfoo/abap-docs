  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm) →  [METHODS, FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) → 

FOR GLOBAL FEATURES

Syntax

Handler method definition:

[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_abstract_final.htm)*\]*
   FOR GLOBAL FEATURES
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm)*\]* REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(req\_gl\_feat) *|* req\_gl\_feat *}*
   FOR bdef
   RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(res\_gl\_feat) *|* res\_gl\_feat *}*
   *\[* [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm)*\]*.

Effect

[Handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for the [global feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) of [RAP BO entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Method Parameters

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   req\_gl\_feat: Request parameter on which the information retrieval for global feature control is based on. It is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm).
        
        The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)). The use of the ABAP word IMPORTING is optional.
        
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   res\_gl\_feat: Used to store the result of the information retrieval. It is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES RESULT bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm). The parameter can also be passed by reference.
    -   The changing parameter [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) is implicitly available. It is used to return messages. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) is used. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm).

Examples

Example for a RAP handler method definition. Find a demonstration of a method implementation in the executable example further down.

METHODS get\_global\_features FOR GLOBAL FEATURES
    IMPORTING REQUEST requested\_features FOR bdef
    RESULT result.

Executable Example

[Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.