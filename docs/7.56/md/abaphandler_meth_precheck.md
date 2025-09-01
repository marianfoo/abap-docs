---
title: "FOR PRECHECK"
description: |
  Syntax Handler method definitions: METHODS(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) meth FINAL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_abstract_final.htm) FOR PRECHECK IMPORTING(https://help.sap.com/doc/abapdocu_756_
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_precheck.htm"
abapFile: "abaphandler_meth_precheck.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abaphandler", "meth", "precheck"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm) →  [METHODS, FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) → 

FOR PRECHECK

Syntax

Handler method definitions:

[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_abstract_final.htm)*\]*
   FOR PRECHECK
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(im\_par\_pre) *|* im\_par\_pre *}*
   FOR *{* CREATE bdef *}*
     *|* *{* CREATE bdef\\\_assoc *}*
     *|* *{* UPDATE bdef *}*
     *|* *{* DELETE bdef *}*
     *|* *{* ACTION bdef~action
         *\[*REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(req\_act\_pre) *|* req\_act\_pre *}* *\]* *}*
   *\[*[CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) *{* *\[*[failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*[reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Variants:

[1\. ... CREATE bdef ...](#!ABAP_VARIANT_1@1@)
[2\. ... CREATE bdef\\\_assoc ...](#!ABAP_VARIANT_2@2@)
[3\. ... UPDATE ...](#!ABAP_VARIANT_3@3@)
[4\. ... DELETE ...](#!ABAP_VARIANT_4@4@)
[5\. ... ACTION bdef~action ...](#!ABAP_VARIANT_5@5@)

Additions:

[1\. ... REQUEST ...](#!ABAP_ADDITION_1@1@)
[2\. ... CHANGING ...](#!ABAP_ADDITION_2@2@)

Effect

[Handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for the [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), assoc the name of the association, and action the name of the action.

See the required BDEF notations in the following topic: [CDS BDL - precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm).

Variant 1   

... CREATE bdef ...

Effect

Handles the precheck for [create operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 2   

... CREATE bdef\\\_assoc ...

Effect

Handles the precheck for [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef\\\_assoc](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 3   

... UPDATE bdef ...

Effect

Handles the precheck for [update operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_pre: Includes the entities to be updated. It is an internal table of type [TYPE TABLE FOR UPDATE bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 4   

... DELETE bdef ...

Effect

Handles the precheck for [delete operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_pre: Includes the keys of the entities to be deleted. It is an internal table of type [TYPE TABLE FOR DELETE bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 5   

... ACTION bdef~action ...

Effect

Handles the precheck for [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).

Method parameters:

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_pre: Includes the keys of the entities for which the action should be processed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_act\_pre is only available in the context of actions that are specified with a parameter in the BDEF.

req\_act\_pre is an importing parameter and specifies Request parameter on which the information retrieval ... is based on. It is a structure of type [TYPE STRUCTURE FOR ACTION REQUEST bdef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm).

Addition 2   

... CHANGING ...

Effect

The [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters [failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) and [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) are implicitly available. They are used to return information on failures or messages respectively. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) is used. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

METHODS precheck\_create FOR PRECHECK
    IMPORTING entities FOR CREATE bdef.
METHODS precheck\_cba\_assoc FOR PRECHECK
    IMPORTING entities\_cba FOR CREATE bdef\\\_assoc.
METHODS precheck\_update FOR PRECHECK
    IMPORTING entities FOR UPDATE bdef.
METHODS precheck\_delete FOR PRECHECK
    IMPORTING keys FOR DELETE bdef.
METHODS precheck\_action FOR PRECHECK
    IMPORTING entities FOR CREATE bdef~action.

Executable Example

[Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method for an action within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.