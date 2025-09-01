  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FOR%20DETERMINE%2C%20RAP%20Handler%20Method%2C%20ABAPHANDLER_METH_DET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FOR DETERMINE, RAP Handler Method

Syntax

Handler method definition:

[METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_abstract_final.htm)*\]*
  FOR DETERMINE ON *{* SAVE *|* MODIFY *}*
  *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)(im\_par\_det) *|* im\_par\_det *}*
   FOR bdef~det
  *\[* [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) reported TYPE [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm)*\]*.

Variants:

[1\. ... SAVE ...](#!ABAP_VARIANT_1@1@)
[2\. ... MODIFY ...](#!ABAP_VARIANT_2@2@)

Effect

[Handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that are used for [determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm). They must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). det is the name of a [determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm) specified in the BDEF.

Method Parameters

-   [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   im\_par\_det: Includes the keys of [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") instances for which a determination should be executed. It is an internal table of type [TYPE TABLE FOR DETERMINATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm).
        
        The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_parameters.htm)). The use of the ABAP word IMPORTING is optional.
        
-   [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameter reported ([RAP response parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) is implicitly available. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR REPORTED can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [RAP BDL - determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm).

Variant 1   

... SAVE ...

Effect

Used for determinations that are executed during the [RAP save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").

Variant 2   

... MODIFY ...

Effect

The method is called after data changes take place in the [transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry").

Example

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

...
    METHODS det\_on\_save FOR DETERMINE ON SAVE
    IMPORTING keys FOR bdef~det\_save.
METHODS det\_on\_modify FOR DETERMINE ON MODIFY
    IMPORTING keys FOR bdef~det\_mod.
METHODS det\_on\_save2 FOR DETERMINE ON SAVE
    IMPORTING keys FOR bdef~det\_save2
    CHANGING reported TYPE DATA reported TYPE DATA.
...

Executable Examples

-   [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [RAP BDL - determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determination_abexa.htm)