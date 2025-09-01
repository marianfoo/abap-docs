---
title: "FOR READ, RAP Handler Method"
description: |
  Syntax Handler method definitions: METHODS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) meth FINAL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm) FOR READ IMPORTING(https://help.sap.com/doc/abapdocu_757_inde
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm"
abapFile: "abaphandler_meth_read.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abaphandler", "meth", "read"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR READ, RAP Handler Method, ABAPHANDLER_METH_READ, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

FOR READ, RAP Handler Method

Syntax

Handler method definitions:

[METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm)*\]*
   FOR READ
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(im\_par\_read) *|* im\_par\_read *}*
   FOR *{* READ bdef RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(res\_read) *|* res\_read *}* *}*
     *|* *{* READ bdef\\\_assoc FULL *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(full\_rba) *|* full\_rba *}*
                          RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(res\_rba) *|* res\_rba *}*
                          LINK *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(link\_rba) *|* link\_rba *}* *}*
     *|* *{* FUNCTION bdef~function *\[*REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(req\_func) *|* req\_func *}**\]*
                                 RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(res\_func) *|* res\_func *}*  *}*
   *\[*[CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) *{* *\[*failed TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*reported TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Variants:

[1\. ... READ bdef ...](#!ABAP_VARIANT_1@1@)
[2\. ... READ bdef\\\_assoc ...](#!ABAP_VARIANT_2@2@)
[3\. ... FUNCTION bdef~function ...](#!ABAP_VARIANT_3@3@)

Effect

[Handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for read operations in [RAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_glosry.htm "Glossary Entry"). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), assoc the name of the association, and function the name of a function.

The method parameters can be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)), except for the predefined parameters failed and reported.

Additions:

[1\. ... REQUEST ...](#!ABAP_ADDITION_1@1@)
[2\. ... CHANGING ...](#!ABAP_ADDITION_2@2@)

Variant 1   

... READ bdef ...

Effect

Handles the read requests in RAP read operations. BDEF requirement for the read operations: The entities to be read from must be declared after the notation [define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_read: Includes the entities to be read. It is an internal table of type [TYPE TABLE FOR READ IMPORT bdef](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   res\_read: Mandatory parameter used to store the read result. It must be specified after the ABAP word RESULT and is an internal table of type [TYPE TABLE FOR READ RESULT bdef](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters failed and reported ([RAP response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 2   

... READ bdef\\\_assoc ...

Effect

Handles the read requests in [RAP read-by-association operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry"). BDEF requirement for read-by-association operations: The entities to be read from must be declared after the notation [define behavior for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   im\_par\_read: Includes the entities to be read. It is an internal table of type [TYPE TABLE FOR READ IMPORT bdef\\\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   full\_rba: Used to indicate whether the res\_rba parameter, i. e. all target instances, or just the links, i. e. the link\_rba parameter, should be retrieved in the context of read-by-association operations. It is a Boolean value of type c with length 1. full\_rba specified with 'X' respects all target instances. Note that the explicit specification of the FULL parameter with ABAP EML is only possible for the dynamic form of the ABAP EML READ statement ([READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entities_operations.htm)). With the short form ([READ ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_short.htm)) and long form ([READ ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entities_long.htm)), the explicit specification of the full\_rba parameter is not possible. In these cases, the specification is irrelevant because it applies anyway if the links (link\_rba parameter) or the data are requested.
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters.
    -   res\_rba: Used to store the read result. It must be specified after the ABAP word RESULT and is an internal table of type [TYPE TABLE FOR READ RESULT bdef\\\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   link\_rba: Used to store the keys of the source and target entities. It is an internal table of type [TYPE TABLE FOR READ LINK bdef\\\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters failed and reported ([RAP response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

The parameters must be specified in the method definition in the following sequence: ... IMPORTING ... FULL ... RESULT ... LINK ... CHANGING ...

Variant 3   

... FUNCTION bdef~function ...

Effect

Handles the read requests in the context of [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm). See the required BDEF notations for functions in topic [CDS BDL - function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   im\_par\_read: Includes the [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") to be read. It is an internal table of type [TYPE TABLE FOR FUNCTION IMPORT bdef~function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   req\_func: Additional parameter whose availability depends on the BDEF specification. See ... REQUEST ...
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters.
    -   res\_func: Used to store the read result. It must be specified after the ABAP word RESULT and is an internal table of type [TYPE TABLE FOR READ RESULT bdef\\\_assoc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm).
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters failed and reported ([RAP response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

The parameters must be specified in the method definition in the following sequence: ... IMPORTING ... FULL ... RESULT ... LINK ... CHANGING ...

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_func are only available in the context of functions that are specified with the notation [result selective](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm) in the BDEF. req\_func is a structure of type [TYPE STRUCTURE FOR FUNCTION REQUEST bdef~function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_structure_for.htm).

Addition 2   

... CHANGING ...

Effect

See the details regarding the RAP response parameters that can be specified above.

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

...
METHODS read FOR READ
    IMPORTING keys FOR READ bdef RESULT result.
METHODS rba\_assoc FOR READ
    IMPORTING keys\_rba FOR READ bdef\\\_assoc
    FULL result\_requested RESULT result LINK association\_links.
METHODS function1 FOR READ
    IMPORTING keys FOR READ bdef~function1 RESULT result.
METHODS function2 FOR READ
    IMPORTING keys FOR READ bdef~function2
    REQUEST requested\_fields RESULT result.
...

Executable Examples

-   [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [CDS BDL - function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_function_abexa.htm)