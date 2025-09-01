  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Handler Class](javascript:call_link\('abenabp_handler_class.htm'\)) →  [METHODS, FOR](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) → 

FOR DETERMINE

Syntax

Handler method definition:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
  FOR DETERMINE ON *{* SAVE *|* MODIFY *}*
  *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(im\_par\_det) *|* im\_par\_det *}*
   FOR bdef~det
  *\[* [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) [reported](javascript:call_link\('abaptype_response_for.htm'\)) TYPE [data](javascript:call_link\('abenbuilt_in_types_generic.htm'\))*\]*.

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
    -   The changing parameter [reported](javascript:call_link\('abaptype_response_for.htm'\)) is implicitly available. It is used to return messages. It is possible to specify the parameter with the predefined name reported explicitly following the ABAP word CHANGING. In this case, the generic type [DATA](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) is used. At runtime, the typed parameter implicitly has the BDEF derived type [TYPE RESPONSE FOR REPORTED](javascript:call_link\('abaptype_response_for.htm'\)).

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

Examples

Examples for RAP handler method definitions. Find demonstrations of method implementations in the executable examples further down.

METHODS det\_on\_save FOR DETERMINE ON SAVE
    IMPORTING keys FOR bdef~det\_save.
METHODS det\_on\_modify FOR DETERMINE ON MODIFY
    IMPORTING keys FOR bdef~det\_mod.
METHODS det\_on\_save2 FOR DETERMINE ON SAVE
    IMPORTING keys FOR bdef~det\_save2
    CHANGING reported TYPE DATA reported TYPE DATA.

Executable Examples

-   [Example for RAP Handler Methods](javascript:call_link\('abenrap_handler_methods_abexa.htm'\)): Demonstrates this RAP handler method within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.
-   [CDS BDL - determination](javascript:call_link\('abenbdl_determination_abexa.htm'\))