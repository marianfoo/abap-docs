---
title: "FOR MODIFY, RAP Handler Method"
description: |
  Syntax Handler method definitions: METHODS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth FINAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm) FOR MODIFY IMPORTING(https://help.sap.com/doc/abapd
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm"
abapFile: "abaphandler_meth_modify.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abaphandler", "meth", "modify"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%20MODIFY%2C%20RAP%20Handler%20Method%2C%20ABAPHANDLER_METH_MODIFY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR MODIFY, RAP Handler Method

Syntax

Handler method definitions:

[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
   FOR MODIFY
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)(im\_par\_mod) *|* im\_par\_mod *}*
   FOR *{* CREATE bdef *}*
     *|* *{* CREATE bdef\\\_assoc *}*
     *|* *{* UPDATE bdef *}*
     *|* *{* DELETE bdef *}*
     *|* *{* ACTION bdef~action
          *\[*REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)(req\_act) *|* req\_act *}* *\]*
          *\[*RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)(res\_act) *|* res\_act *}**\]* *}*
     *|* *{* ACTION *{* bdef~activate
                *|* bdef~edit
                *|* bdef~discard
                *|* bdef~resume *}* *}*
   *\[*[CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) *{* *\[*failed TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*reported TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*mapped TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Variants:

[1\. ... CREATE bdef ...](#!ABAP_VARIANT_1@1@)
[2\. ... CREATE bdef\\\_assoc ...](#!ABAP_VARIANT_2@2@)
[3\. ... UPDATE ...](#!ABAP_VARIANT_3@3@)
[4\. ... DELETE ...](#!ABAP_VARIANT_4@4@)
[5\. ... ACTION bdef~action ...](#!ABAP_VARIANT_5@5@)
[6\. ... ACTION bdef~activate ...](#!ABAP_VARIANT_6@6@)
[7\. ... ACTION bdef~edit ...](#!ABAP_VARIANT_7@7@)
[8\. ... ACTION bdef~discard ...](#!ABAP_VARIANT_8@8@)
[9\. ... ACTION bdef~resume ...](#!ABAP_VARIANT_9@9@)

Additions:

[1\. ... REQUEST ...](#!ABAP_ADDITION_1@1@)
[2\. ... RESULT ...](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING ...](#!ABAP_ADDITION_3@3@)

Effect

[Handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that are used for changing operations on [RAP BO entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") and [operation augmentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm). They must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). A single method can include multiple, different operations during one processing step. The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), assoc the name of the association, and action the name of an action. It is possible to combine operations in one method.

Variant 1   

... CREATE bdef ...

Effect

Handles create operations.

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - operations for associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm)
-   [RAP BDL - augment, projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm)

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 2   

... CREATE bdef\\\_assoc ...

Effect

Handles [create-by-association operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry").

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - operations for associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm)
-   [RAP BDL - augment, projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm)

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the RAP BO instances to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef\\\_assoc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 3   

... UPDATE bdef ...

Effect

Handles update operations.

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - operations for associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm)
-   [RAP BDL - augment, projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm)

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the RAP BO instances to be updated. It is an internal table of type [TYPE TABLE FOR UPDATE bdef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 4   

... DELETE bdef ...

Effect

Handles delete operations.

See more details and the required BDEF notations for the variant in the following topic: [RAP BDL - standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances to be deleted. It is an internal table of type [TYPE TABLE FOR DELETE bdef](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 5   

... ACTION bdef~action ...

Effect

Handles actions.

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm)
-   [RAP BDL - determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm)

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which an action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
    -   req\_act: See the details in section [... REQUEST ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_1@1@).
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   res\_act: See the details in section [... RESULT ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_2@2@).
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 6   

... ACTION bdef~activate ...

Effect

Handles the activate action in [draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) scenarios.

See more details and the required BDEF notations for the variant in the following topic: [RAP BDL - draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the activate action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~activate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 7   

... ACTION bdef~edit ...

Effect

Handles the edit action in draft scenarios.

See more details and the required BDEF notations for the variant in the following topic: [RAP BDL - draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the edit action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~edit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 8   

... ACTION bdef~discard ...

Effect

Handles the discard action in draft scenarios.

See more details and the required BDEF notations for the variant in the following topic: [RAP BDL - draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the discard action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~discard](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 9   

... ACTION bdef~resume ...

Effect

Handles the resume action in draft scenarios.

See the required BDEF notations for the variant in the following topic: [RAP BDL - draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the resume action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~resume](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_act are only available in the context of non-draft actions that are specified with a parameter in the BDEF. req\_act is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef~action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_structure_for.htm).

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm)
-   [RAP BDL - determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm)

Addition 2   

... RESULT ...

Effect

The addition and the parameter res\_act are only available in the context of non-draft actions that are specified with a result in the BDEF. res\_act is an internal table of type [TYPE TABLE FOR ACTION RESULT bdef~action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.

See more details and the required BDEF notations for the variant in the following topics:

-   [RAP BDL - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm)
-   [RAP BDL - determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm)

Addition 3   

... CHANGING ...

Effect

See the details regarding the RAP response parameters that can be specified above.

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down. The first example in the code below shows a handler method definition combining multiple operations in one method.

...
METHODS modify FOR MODIFY
    IMPORTING ent\_cr FOR CREATE bdef
              ent\_upd FOR UPDATE bdef
              keys FOR DELETE bdef.
METHODS create FOR MODIFY
    IMPORTING entities FOR CREATE bdef.
METHODS cba\_child FOR MODIFY
    IMPORTING entities\_cba FOR CREATE bdef\\\_child.
METHODS update FOR MODIFY
    IMPORTING entities FOR UPDATE bdef.
METHODS delete FOR MODIFY
    IMPORTING keys FOR DELETE bdef.
METHODS action1 FOR MODIFY
    IMPORTING keys FOR CREATE bdef~action1.
METHODS action2 FOR MODIFY
    IMPORTING keys FOR CREATE bdef~action2 RESULT result.
METHODS action3 FOR MODIFY
    IMPORTING keys FOR CREATE bdef~action3
    REQUEST requested\_fields RESULT result.
METHODS activate FOR MODIFY
    IMPORTING keys FOR ACTION bdef~activate.
METHODS discard FOR MODIFY
    IMPORTING keys FOR ACTION bdef~discard.
METHODS create FOR MODIFY
    IMPORTING entities FOR CREATE bdef.
METHODS edit FOR MODIFY
    IMPORTING keys FOR ACTION bdef~edit.
METHODS resume FOR MODIFY
    IMPORTING keys FOR ACTION bdef~resume.
...

Executable Examples

-   [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - Examples of actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_abexas.htm)
-   The example [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the three handler methods augment\_create, augment\_update and augment\_cba\_assoc (assoc refers to the name of the association) with a RAP projection business object.