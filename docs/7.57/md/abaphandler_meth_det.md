  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class and Methods](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR, RAP Handler Methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR DETERMINE, RAP Handler Method, ABAPHANDLER_METH_DET, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

FOR DETERMINE, RAP Handler Method

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
  FOR DETERMINE ON *{* SAVE *|* MODIFY *}*
  *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_det) *|* im\_par\_det *}*
   FOR bdef~det
  *\[* [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) reported TYPE [data](javascript:call_link\('abaptype_response_for.htm'\))*\]*.

Variants:

[1\. ... SAVE ...](#!ABAP_VARIANT_1@1@)
[2\. ... MODIFY ...](#!ABAP_VARIANT_2@2@)

Effect

[Handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that are used for [determinations](javascript:call_link\('abenbdl_determinations.htm'\)). They must be defined and implemented in a [handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The method name meth can be chosen freely. bdef is the name or the alias of the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). det is the name of a [determination](javascript:call_link\('abenbdl_determinations.htm'\)) specified in the BDEF.

Method Parameters

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   im\_par\_det: Includes the keys of [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") instances for which a determination should be executed. It is an internal table of type [TYPE TABLE FOR DETERMINATION](javascript:call_link\('abaptype_table_for.htm'\)).
        
        The parameter can also be passed by reference (see [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))). The use of the ABAP word IMPORTING is optional.
        
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   The [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter reported ([RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry")) is implicitly available. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. The generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) can be specified. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](javascript:call_link\('abaptype_response_for.htm'\)). Instead of DATA, a data type of type TYPE RESPONSE FOR REPORTED can be specified.

BDEF Requirements

See the required BDEF notations for both variants in the topic [CDS BDL - determinations](javascript:call_link\('abenbdl_determinations.htm'\)).

Variant 1   

... SAVE ...

Effect

Used for determinations that are executed during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

Variant 2   

... MODIFY ...

Effect

The method is called after data changes take place in the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry").

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

-   [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [CDS BDL - determination](javascript:call_link\('abenbdl_determination_abexa.htm'\))