  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

FOR PRECHECK

Syntax

Handler method definitions:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR PRECHECK
   *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_pre) *|* im\_par\_pre *}*
   FOR *{* CREATE bdef *}*
     *|* *{* CREATE bdef\\\_assoc *}*
     *|* *{* UPDATE bdef *}*
     *|* *{* DELETE bdef *}*
     *|* *{* ACTION bdef~action
         *\[*REQUEST *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(req\_act\_pre) *|* req\_act\_pre *}* *\]* *}*
   *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*[failed](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*[reported](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

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

[Handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is used for the [precheck](javascript:call_link\('abenbdl_precheck.htm'\)). It must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), assoc the name of the association, and action the name of the action.

See the required BDEF notations in the following topic: [CDS BDL - precheck](javascript:call_link\('abenbdl_precheck.htm'\)).

Variant 1   

... CREATE bdef ...

Effect

Handles the precheck for [create operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 2   

... CREATE bdef\\\_assoc ...

Effect

Handles the precheck for [create-by-association operations](javascript:call_link\('abenbdl_association.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef\\\_assoc](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 3   

... UPDATE bdef ...

Effect

Handles the precheck for [update operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be updated. It is an internal table of type [TYPE TABLE FOR UPDATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 4   

... DELETE bdef ...

Effect

Handles the precheck for [delete operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the keys of the entities to be deleted. It is an internal table of type [TYPE TABLE FOR DELETE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Variant 5   

... ACTION bdef~action ...

Effect

Handles the precheck for [actions](javascript:call_link\('abenbdl_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the keys of the entities for which the action should be processed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~action](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   failed and reported are implicit changing parameters that return information. See the details in section [... CHANGING...](abaphandler_meth_precheck.htm#!ABAP_ADDITION_2@2@).

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_act\_pre is only available in the context of actions that are specified with a parameter in the BDEF.

req\_act\_pre is an importing parameter and specifies Request parameter on which the information retrieval ... is based on. It is a structure of type [TYPE STRUCTURE FOR ACTION REQUEST bdef](javascript:call_link\('abaptype_structure_for.htm'\)).

Addition 2   

... CHANGING ...

Effect

The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters [failed](javascript:call_link\('abaptype_response_for.htm'\)) and [reported](javascript:call_link\('abaptype_response_for.htm'\)) are implicitly available. They are used to return information on failures or messages respectively. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is used. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)).

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

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method for an action within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.