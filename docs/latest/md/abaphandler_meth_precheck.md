  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR, RAP Handler Methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%20PRECHECK%2C%20RAP%20Handler%20Method%2C%20ABAPHANDLER_METH_PRECHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR PRECHECK, RAP Handler Method

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
   *\[*[CHANGING](javascript:call_link\('abapmethods_general.htm'\)) *{* *\[*failed TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *\[*reported TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]* *}**\]*.

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

See the required BDEF notations in the following topic: [RAP BDL - precheck](javascript:call_link\('abenbdl_precheck.htm'\)).

Variant 1   

... CREATE bdef ...

Effect

Handles the precheck for [create operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 2   

... CREATE bdef\\\_assoc ...

Effect

Handles the precheck for [create-by-association operations](javascript:call_link\('abenbdl_association.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be created. It is an internal table of type [TYPE TABLE FOR CREATE bdef\\\_assoc](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 3   

... UPDATE bdef ...

Effect

Handles the precheck for [update operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the entities to be updated. It is an internal table of type [TYPE TABLE FOR UPDATE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 4   

... DELETE bdef ...

Effect

Handles the precheck for [delete operations](javascript:call_link\('abenbdl_standard_operations.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the keys of the entities to be deleted. It is an internal table of type [TYPE TABLE FOR DELETE bdef](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Variant 5   

... ACTION bdef~action ...

Effect

Handles the precheck for [actions](javascript:call_link\('abenbdl_action.htm'\)).

Method parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_pre: Includes the keys of the entities for which the action should be processed. It is an internal table of type [TYPE TABLE FOR ACTION IMPORT bdef~action](javascript:call_link\('abaptype_table_for.htm'\)). The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters failed and reported ([RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed and reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

Addition 1   

... REQUEST ...

Effect

The addition and the parameter req\_act\_pre are only available in the context of actions that are specified with a parameter in the BDEF.

req\_act\_pre is an importing parameter and specifies Request parameter on which the information retrieval ... is based on. It is a structure of type [TYPE STRUCTURE FOR ACTION REQUEST bdef](javascript:call_link\('abaptype_structure_for.htm'\)).

Addition 2   

... CHANGING ...

Effect

See the details regarding the RAP response parameters that can be specified above.

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

...
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
...

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Operation Precheck](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/f6e3880b641649b1b8247486579a1c9b?version=sap_cross_product_abap).

Executable Example

[Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method for an action within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.