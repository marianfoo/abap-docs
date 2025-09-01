---
title: "FOR INSTANCE FEATURES, FEATURES"
description: |
  Syntax Handler method definition: METHODS(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) meth FINAL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_abstract_final.htm) FOR INSTANCE FEATURES IMPORTING(https://help.sap.com/d
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_features.htm"
abapFile: "abaphandler_meth_features.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abaphandler", "meth", "features"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm) →  [METHODS, FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) → 

FOR INSTANCE FEATURES, FEATURES

Syntax

Handler method definition:

[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_abstract_final.htm)*\]*
   FOR *\[*INSTANCE*\]* FEATURES
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(im\_par\_feat) *|* im\_par\_feat *}*
   REQUEST *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(req\_feat) *|* req\_feat *}*
   FOR bdef
   RESULT *{* [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)(res\_feat) *|* res\_feat *}*
  *\[*[CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) *{* *\[*[failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*[reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Effect

[Handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for the [instance-based feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The ABAP word INSTANCE is optional.

Method Parameters

-   [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   im\_par\_feat: Internal table of type [TYPE TABLE FOR INSTANCE FEATURES KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm).
        
        The importing parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm)). The use of the ABAP word IMPORTING is optional.
        
    -   req\_feat: Request parameter on which the information retrieval for instance-based feature control is based on. It is a structure of type [TYPE STRUCTURE FOR INSTANCE FEATURES REQUEST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_structure_for.htm). The parameter can also be passed by reference.
-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameters:
    -   res\_feat: Used to store the result of the information retrieval. It is an internal table of type [TYPE TABLE FOR INSTANCE FEATURES RESULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). The parameter can also be passed by reference.
    -   The CHANGING parameters [failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) and [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) are implicitly available. They are used to return information on failures or messages respectively. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_generic.htm) is used. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm).

Examples

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

METHODS get\_instance\_features FOR INSTANCE FEATURES
    IMPORTING keys REQUEST requested\_features FOR bdef
    RESULT result.
METHODS get\_instance\_features FOR FEATURES
    keys REQUEST requested\_authorizations FOR bdef RESULT result
    CHANGING failed TYPE DATA reported TYPE DATA.

Executable Example

[Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.