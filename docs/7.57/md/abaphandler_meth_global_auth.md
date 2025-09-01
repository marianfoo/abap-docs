  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR GLOBAL AUTHORIZATION, RAP Handler Method, ABAPHANDLER_METH_GLOBAL_AUTH, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

FOR GLOBAL AUTHORIZATION, RAP Handler Method

Syntax

Handler method definition:

[METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm)*\]*
   FOR GLOBAL AUTHORIZATION
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(im\_par\_gl\_auth) *|* im\_par\_gl\_auth *}*
   REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(req\_gl\_auth) *|* req\_gl\_auth *}*
   FOR bdef
   RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(res\_gl\_auth) *|* res\_gl\_auth *}*
   *\[* [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) reported TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]*.

Effect

[Handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for [global authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm) checks for accessing [RAP BO entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Method Parameters

-   [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   req\_gl\_auth: Request parameter on which the information retrieval for instance-based authorization is based on. It is a structure of type [TYPE STRUCTURE FOR GLOBAL AUTHORIZATION REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm).
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   res\_gl\_auth: Used to store the result of the permission information retrieval. It is a structure of type [TYPE STRUCTURE FOR GLOBAL AUTHORIZATION RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm).
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameter reported ([RAP response parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) is implicitly available. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR REPORTED can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - authorizations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

Example

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

...
METHODS get\_global\_authorizations FOR GLOBAL AUTHORIZATION
    IMPORTING REQUEST requested\_authorizations FOR bdef
    RESULT result.
...

Executable Examples

-   [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [CDS BDL - global authorization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_abexa.htm)