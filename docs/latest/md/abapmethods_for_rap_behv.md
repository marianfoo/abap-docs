---
title: "METHODS, FOR, RAP Handler Methods"
description: |
  Syntax Handler method definitions: METHODS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth FINAL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm) FOR  DETERMINE ON  SAVE  MODIFY (https://he
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm"
abapFile: "abapmethods_for_rap_behv.htm"
keywords: ["update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "abapmethods", "for", "rap", "behv"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%2C%20RAP%20Handler%20Methods%2C%20ABAPMETHODS_FOR_RAP_BEHV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

METHODS, FOR, RAP Handler Methods

Syntax

Handler method definitions:

[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
   FOR *{* [DETERMINE ON *{* SAVE *|* MODIFY *}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_det.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_auth.htm)  ...  *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [GLOBAL FEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_features.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [*\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_auth.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [*\[*INSTANCE*\]* FEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_features.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [LOCK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_lock.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [NUMBERING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_numbering.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [PRECHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_precheck.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ...  *}*
     *|* *{* [READ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_read.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
     *|* *{* [VALIDATE ON SAVE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_validate.htm) ... *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* ... FOR ... *}*
   *\[*[CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) *{* *\[*[failed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*[reported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*[mapped](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm) TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Handler method implementations:

[METHOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth.
   ...
[ENDMETHOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm).

Effect

[Handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name (meth) can be freely chosen except for the predefined [draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm) (whose implementation is only relevant if they are specified with with additional implementation in the BDEF) and the method names in the context of [augment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm) operations. The METHODS statements of handler methods in behavior pools contain RAP-specific ABAP words like FOR MODIFY, FOR CREATE or FOR READ as well as optional or mandatory ABAP words like REQUEST and RESULT that are followed by parameters typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry").

The following list provides an overview on parameters of handler methods:

-   Nearly all parameters are typed with [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that have [RAP components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm). The parameters' names can be chosen freely.
-   Each handler method must have at least one importing parameter. The addition [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) is optional since it is used implicitly.
-   All handler methods have changing parameters. The changing parameters for retrieving mapping information (mapped) or information on failures (failed) and error messages (reported) have predefined names and are used implicitly. The addition [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) and the explicit specification of those changing parameters is optional. The availability of the mapped, failed and reported parameters depends on the handler method used. When used explicitly, for example, for the method ... FOR MODIFY ... FOR CREATE ..., the syntax can be as follows:
    
    METHODS create FOR MODIFY
        IMPORTING entities FOR CREATE bdef
        CHANGING failed TYPE DATA mapped TYPE DATA reported TYPE DATA.
    
    For the explicit declaration of the changing parameters, the generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) is used. At runtime, the typed parameters, e. g. failed, implicitly has the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm).
    
-   In many cases, parameters can be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)), however, they cannot be passed by value ([VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)). Hence, the importing parameters cannot be changed in the methods.

At least one of the three methods with the predefined names MODIFY, READ and LOCK must be implemented in each handler class. Apart from that, helper methods can be implemented.

Hints

-   It is recommended that the CHANGING parameters failed, reported and mapped are filled with returned information, for example, if an instance cannot be read. The components of each of the CHANGING parameters can vary depending on how it is typed with a BDEF derived type. Here is an example on how a CHANGING parameter can be filled within the method implementation:
    
    LOOP AT import\_params ASSIGNING FIELD-SYMBOL(<fs>).
    ...
      APPEND VALUE #( %key = <fs>-%key
                      %fail = if\_abap\_behv=>cause-not\_found
                      ... ) TO failed-bdef.
      APPEND VALUE #( %msg  = new\_message\_with\_text(
                         severity = if\_abap\_behv\_message=>severity-error
                         text = 'Issue occurred.'
                         %key = <fs>-%key
                      ... ) TO reported-bdef.
    ENDLOOP.
    
-   In some cases, the F2 help of the [ADT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") shows further CHANGING parameters for RAP handler methods apart from failed, reported and mapped. RESULT is a RAP-specific ABAP word that must be explicitly specified. Hence, the CHANGING parameter result cannot be specified using the ABAP word CHANGING:
    
    METHODS read FOR READ IMPORTING keys FOR READ bdef RESULT result.
    
    Similarly, the IMPORTING parameter requested\_field must be specified in combination with the ABAP word REQUEST in the handler method definition.
    
-   The handler method FOR MODIFY can handle multiple entities and operations within one processing step. However, it might be useful to split the handler method implementation into separate methods in the interest of readability and keeping the complexity on a lower level. In doing so, multiple RAP handler classes within one ABP or multiple ABPs can be defined. The following handler method definition demonstrates a handler method FOR MODIFY that includes multiple operations:
    
    ...
    METHODS modify\_meth FOR MODIFY IMPORTING
       create\_imp\_param FOR CREATE bdef
       update\_imp\_param FOR UPDATE bdef
       delete\_imp\_param FOR DELETE bdef
       action\_imp\_param FOR ACTION bdef~action
       cba\_imp\_param FOR CREATE bdef\\\_assoc.
    ...
    
-   Exceptions cannot be raised in handler methods, hence, the addition [RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) cannot be used.
-   Obsolete language elements in the context of handler methods:
    -   Addition [FOR BEHAVIOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_behavior.htm) for the variants READ, MODIFY and LOCK.
    -   [METHODS, FOR DETERMINATION, VALIDATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_det_val_obs.htm)

Example

The following code snippet shows several handler method definitions. The method create includes an explicit specification of the CHANGING keyword and the parameters for the information retrieval.

...
    METHODS create FOR MODIFY
    IMPORTING entities FOR CREATE demo\_bdef
    CHANGING failed TYPE DATA mapped TYPE DATA reported TYPE DATA.
METHODS cba\_child FOR MODIFY
    IMPORTING entities\_cba FOR CREATE demo\_bdef\\\_assoc.
METHODS update FOR MODIFY
    IMPORTING entities FOR UPDATE demo\_bdef.
METHODS delete FOR MODIFY
    IMPORTING keys FOR DELETE demo\_bdef.
METHODS read FOR READ
    IMPORTING keys FOR READ demo\_bdef RESULT result.
METHODS rba\_child FOR READ
    IMPORTING keys\_rba FOR READ demo\_bdef\\\_child
    FULL result\_requested RESULT result LINK association\_links.
...

Executable Examples

-   The example [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm) demonstrates RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   The example [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the three handler methods augment\_create, augment\_update and augment\_cba\_assoc (assoc refers to the name of the association) with a RAP projection business object.

Continue
[FOR DETERMINE, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_det.htm)
[FOR INSTANCE AUTHORIZATION, AUTHORIZATION, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_auth.htm)
[FOR INSTANCE FEATURES, FEATURES, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_features.htm)
[FOR GLOBAL AUTHORIZATION, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_auth.htm)
[FOR GLOBAL FEATURES, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_features.htm)
[FOR LOCK, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_lock.htm)
[FOR MODIFY, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm)
[FOR NUMBERING, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_numbering.htm)
[FOR PRECHECK, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_precheck.htm)
[FOR READ, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_read.htm)
[FOR VALIDATE, RAP Handler Method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_validate.htm)
![Example](exa.gif "Example") [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm)