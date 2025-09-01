  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

FOR MODIFY

Syntax

Handler method definitions:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR MODIFY
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_mod) *|* im\_par\_mod *}*
   FOR *{* CREATE bdef *}*
     *|* *{* CREATE bdef\\\_assoc *}*
     *|* *{* UPDATE bdef *}*
     *|* *{* DELETE bdef *}*
     *|* *{* ACTION bdef~action
          *\[*REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_act) *|* req\_act *}* *\]*
          *\[*RESULT *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(res\_act) *|* res\_act *}**\]* *}*
     *|* *{* ACTION *{* bdef~activate
                *|* bdef~edit
                *|* bdef~discard
                *|* bdef~resume *}* *}*
   *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*[failed](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*[reported](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*[mapped](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

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

[Handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that are used for changing operations on [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") and [operation augmentation](javascript:call_link\('abenbdl_augment_projection.htm'\)). They must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). A single method can include multiple, different operations during one processing step. The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), assoc the name of the association, and action the name of an action. It is possible to combine operations in one method.

Variant 1   

... CREATE bdef ...

Effect

Handles create operations.

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [CDS BDL - augment, projection](javascript:call_link\('abenbdl_augment_projection.htm'\))

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_read.htm#!ABAP_ADDITION_3@3@).

Variant 2   

... CREATE bdef\\\_assoc ...

Effect

Handles [create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry").

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [CDS BDL - augment, projection](javascript:call_link\('abenbdl_augment_projection.htm'\))

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the RAP BO instances to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef\\\_assoc](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_read.htm#!ABAP_ADDITION_3@3@).

Variant 3   

... UPDATE bdef ...

Effect

Handles update operations.

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [CDS BDL - augment, projection](javascript:call_link\('abenbdl_augment_projection.htm'\))

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the RAP BO instances to be updated. It is an internal table of type [TYPE TABLE FOR UPDATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 4   

... DELETE bdef ...

Effect

Handles delete operations.

See more details and the required BDEF notations for the variant in the following topic: [CDS BDL - standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances to be deleted. It is an internal table of type [TYPE TABLE FOR DELETE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 5   

... ACTION bdef~action ...

Effect

Handles actions.

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\))
-   [CDS BDL - determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which an action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~action](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
    -   req\_act: See the details in section [... REQUEST ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_1@1@).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   res\_act: See the details in section [... RESULT ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_2@2@).
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 6   

... ACTION bdef~activate ...

Effect

Handles the activate action in [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios.

See more details and the required BDEF notations for the variant in the following topic: [CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the activate action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~activate](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 7   

... ACTION bdef~edit ...

Effect

Handles the edit action in draft scenarios.

See more details and the required BDEF notations for the variant in the following topic: [CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the edit action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~edit](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 8   

... ACTION bdef~discard ...

Effect

Handles the discard action in draft scenarios.

See more details and the required BDEF notations for the variant in the following topic: [CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the discard action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~discard](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Variant 9   

... ACTION bdef~resume ...

Effect

Handles the resume action in draft scenarios.

See the required BDEF notations for the variant in the following topic: [CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_mod: Includes the keys of the RAP BO instances for which the resume action should be executed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~resume](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed, reported and mapped are implicit and predefined changing parameters that return information. They are positioned after the ABAP word CHANGING. See the details in section [... CHANGING ...](abaphandler_meth_modify.htm#!ABAP_ADDITION_3@3@).

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_act is only available in the context of non-draft actions that are specified with a parameter in the BDEF. req\_act is a structure of type [TYPE STRUCTURE FOR GLOBAL FEATURES REQUEST bdef~action](javascript:call_link\('abaptype_structure_for.htm'\)).

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\))
-   [CDS BDL - determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))

Addition 2   

... RESULT ...

Effect

The addition and the parameter res\_act is only available in the context of non-draft actions that are specified with a result in the BDEF. res\_act is an internal table of type [TYPE TABLE FOR ACTION RESULT bdef~action](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference.

See more details and the required BDEF notations for the variant in the following topics:

-   [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\))
-   [CDS BDL - determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))

Addition 3   

... CHANGING ...

Effect

The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters [failed](javascript:call_link\('abaptype_response_for.htm'\)) and [reported](javascript:call_link\('abaptype_response_for.htm'\)) are implicitly available. They are used to return information on failures or messages respectively. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is used. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)).

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down. The first example in the code below shows a handler method definition combining several operations in one method.

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

Executable Examples

-   [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [CDS BDL - Examples of actions](javascript:call_link\('abenbdl_action_abexas.htm'\))
-   The example [ABAP EML - MODIFY AUGMENTING ENTITY](javascript:call_link\('abeneml_modify_augmenting_abexa.htm'\)) demonstrates the three handler methods augment\_create, augment\_update and augment\_cba\_assoc (assoc refers to the name of the association) with a RAP projection business object.