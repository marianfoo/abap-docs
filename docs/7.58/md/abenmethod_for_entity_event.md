  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for RAP Business Events](javascript:call_link\('abenrap_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20METHODS%2C%20FOR%20ENTITY%20EVENT%2C%20ABENMETHOD_FOR_ENTITY_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

METHODS, FOR ENTITY EVENT

Syntax

RAP event handler method definitions:

[METHODS](javascript:call_link\('abapmethods.htm'\)) meth *\[*[FINAL](javascript:call_link\('abapmethods_abstract_final.htm'\))*\]*
   FOR ENTITY EVENT *\[*[IMPORTING](javascript:call_link\('abapmethods_general.htm'\))*\]* *{* [REFERENCE](javascript:call_link\('abapmethods_parameters.htm'\))(der\_type) *|* der\_type *}* FOR bdef~evt.

RAP event handler method implementations:

[METHOD](javascript:call_link\('abapmethods.htm'\)) meth.
   ...
[ENDMETHOD](javascript:call_link\('abapmethods.htm'\)).

Effect

[RAP event handler methods](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry") must be defined and implemented in the private [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of a [local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry"), which is implemented in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of a [RAP event handler class](javascript:call_link\('abenrap_event_handler_class_glosry.htm'\) "Glossary Entry"). The local class must inherit from CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER.

When a RAP business event is raised using a [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)) ABAP EML statement, the RAP event handler methods are called locally in the system and processed asynchronously.

The following points are relevant concerning the syntax:

-   RAP event handler methods must be defined as [instance methods](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") using the METHODS keyword.
-   The method name meth can be freely chosen.
-   der\_type specifies the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). It is an internal table of type [TYPE TABLE FOR EVENT](javascript:call_link\('abaptype_table_for.htm'\)). If the event is specified with parameters, the BDEF derived type der\_type contains the keys of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") ([%key](javascript:call_link\('abapderived_types_key.htm'\))) for which an event has been raised, along with the parameters ([%param](javascript:call_link\('abapderived_types_param.htm'\))). If the event is specified without parameters, der\_type contains only the keys. If the RAP event handler class is related to a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"), then the keys and parameters are those used in the [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry").
    -   The name of der\_type can be chosen freely.
    -   The BDEF derived type is [passed by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry"). Therefore, instead of just specifying the name of the [formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") der\_type, the syntax can also be ... REFERENCE(der\_type) ....
-   The methods are implicitly final, and only importing parameters are possible. The specification of the additions [FINAL](javascript:call_link\('abapclass_options.htm'\)) and [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) is optional.
-   bdef specifies the name of the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry"). The events handled by the class must be defined in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of that root entity. bdef can also be the name of an [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") that exposes events.
-   The name of RAP BO root entity (or interface BDEF) is followed by a tilde and the (alias) name of the event evt.

For modularization purposes, a single RAP event handler method can handle multiple events. The following code snippet demonstrates the definition of a method that handles three events defined in the BDEF.

METHODS on\_evt FOR ENTITY EVENT
  evt1\_type FOR bdef~evt1
  evt2\_type FOR bdef~evt2
  evt3\_type FOR bdef~evt3.

Hints

-   In a RAP event handler class, a RAP business event can be handled only once, i.e. specifying the parameter for an event in event handler methods more than once is not allowed.
-   Unlike [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") and [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry"), RAP event handler methods do not contain [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") as implicit changing parameters.
-   The syntax ... FOR EVENT ... FOR for event handler method declarations is obsolete. Using this syntax generates a syntax warning. See [METHODS, FOR EVENT, FOR](javascript:call_link\('abapmethods_for_event_rap_obs.htm'\)).
-   Method declarations using this syntax are not to be confused with method declarations in the context of non-RAP [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry"): [METHODS, FOR EVENT](javascript:call_link\('abapmethods_event_handler.htm'\)).
-   When event handler methods are called, they run through their own RAP transaction, i.e. when they are called, the current phase is the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). In general, implementations in event handler methods must fulfill the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry") to guarantee transactional consistency. Therefore, implementations can be included in the event handler method that are allowed in the RAP interaction phase right away. However, if your use case requires implementations in such a method that are reserved for the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") and must not occur in the RAP interaction phase, for example, database modifications using ABAP SQL or calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"), you must explicitly switch in the event handler method implementation to the RAP save sequence by calling [cl\_abap\_tx=>save( ).](javascript:call_link\('abaprap_cl_abap_tx.htm'\)). Otherwise, a runtime error occurs. For more information, see [Invalid Statements and Operations in Transactional Contexts](javascript:call_link\('abapinvalid_stmts_in_tx.htm'\)).
-   In addition to consuming RAP business events locally using RAP handler methods, RAP business events can also be consumed system-externally using the RAP event binding.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

Executable Example

The example [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\)) demonstrates the use of RAP event handler methods.