  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) →  [METHODS, FOR, RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR NUMBERING, RAP Handler Method, ABAPHANDLER_METH_NUMBERING, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

FOR NUMBERING, RAP Handler Method

Syntax

Handler method definition:

[METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) meth *\[*[FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_abstract_final.htm)*\]*
   FOR NUMBERING
   *\[*[IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm)*\]* *{* [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)(im\_par\_num) *|* im\_par\_num *}*
   FOR CREATE bdef
   *\[*[CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) *{* *\[*failed TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*reported TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]* *\[*mapped TYPE [data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm)*\]* *}**\]*.

Effect

[Handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") that is used for the [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm). It must be defined and implemented in a [handler class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The method is implicitly triggered during an ABAP EML create request.

Method Parameters

-   [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   im\_par\_num: Includes [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") instances for which early numbering should be executed. It is an internal table of type [TYPE TABLE FOR CREATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm). The parameter can also be passed by reference (see [REFERENCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_parameters.htm)).
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   The [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters failed, reported and mapped ([RAP response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry")) are implicitly available. It is possible to specify the parameters with the predefined names failed, reported and mapped explicitly following the ABAP word CHANGING. The generic type [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm) can be specified. At runtime, the typed parameters implicitly have the BDEF derived type [TYPE RESPONSE FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm). Instead of DATA, a data type of type TYPE RESPONSE FOR can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm).

Example

Example for a RAP handler method definition. Find demonstrations of method implementations in the executable examples further down.

...
METHODS earlynumbering\_create FOR NUMBERING
    IMPORTING entities FOR CREATE bdef.
...

Executable Example

[Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_handler_methods_abexa.htm): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.