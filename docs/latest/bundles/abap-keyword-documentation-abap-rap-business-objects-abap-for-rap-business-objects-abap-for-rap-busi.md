# ABAP - Keyword Documentation / ABAP - RAP Business Objects / ABAP for RAP Business Objects / ABAP for RAP Business Events

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenrap_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events.htm)
- [abenclass_for_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_for_events.htm)
- [abencl_abap_behavior_event_handler.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_behavior_event_handler.htm)
- [abenmethod_for_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)
- [abapraise_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_entity_event.htm)
- [abenrap_events_local_consume_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events_local_consume_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.958Z

---

### abenrap_events.htm

> **📖 Official SAP Documentation**: [abenrap_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20for%20RAP%20Business%20Events%2C%20ABENRAP_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP for RAP Business Events

The following topics are covered in this section:

-   [CLASS, FOR EVENTS OF, RAP Event Handler Class](javascript:call_link\('abenclass_for_events.htm'\))
-   [CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER](javascript:call_link\('abencl_abap_behavior_event_handler.htm'\))
-   [METHODS, FOR ENTITY EVENT](javascript:call_link\('abenmethod_for_entity_event.htm'\))
-   [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\))
-   [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\))

Continue
[CLASS, FOR EVENTS OF, RAP Event Handler Class](javascript:call_link\('abenclass_for_events.htm'\))
[CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER](javascript:call_link\('abencl_abap_behavior_event_handler.htm'\))
[METHODS, FOR ENTITY EVENT](javascript:call_link\('abenmethod_for_entity_event.htm'\))
[RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\))
![Example](exa.gif "Example") [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\))



**📖 Source**: [abenrap_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events.htm)

### abenclass_for_events.htm

> **📖 Official SAP Documentation**: [abenclass_for_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_for_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for RAP Business Events](javascript:call_link\('abenrap_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20FOR%20EVENTS%20OF%2C%20RAP%20Event%20Handler%20Class%2C%20ABENCLASS_FOR_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CLASS, FOR EVENTS OF, RAP Event Handler Class

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) cl\_event\_handler [DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) PUBLIC *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]* FOR EVENTS OF bdef.
  ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) cl\_event\_handler [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
  ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

The addition FOR EVENTS OF to the definition of a [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") defines a [RAP event handler class](javascript:call_link\('abenrap_event_handler_class_glosry.htm'\) "Glossary Entry").

bdef specifies the name of the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry"). The events that are handled by the class must be defined in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of that root entity. bdef can also be the name of an [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") that exposes an event.

The global class is implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)). Therefore, ABSTRACT and FINAL may or may not be specified.

The actual handling of the events is done by [RAP event handler methods](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry") that are implemented in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the event handler class.

Hints

-   Event handling is not part of the implementation of the RAP BO that defines an event, nor is it part of any other [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").
-   There can be more than one event handler class for a RAP BO.
-   The event handler methods that are implemented in the CCIMP include of an event handler class are called asynchroneously.

Executable Example

The example [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\)) demonstrates the use of a RAP event handler class.



**📖 Source**: [abenclass_for_events.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_for_events.htm)

### abencl_abap_behavior_event_handler.htm

> **📖 Official SAP Documentation**: [abencl_abap_behavior_event_handler.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_behavior_event_handler.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for RAP Business Events](javascript:call_link\('abenrap_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHAVIOR_EVENT_HANDLER%2C%20ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lhe\_event [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
    [event\_handler\_method\_definitions](javascript:call_link\('abenmethod_for_entity_event.htm'\))
    ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lhe\_event [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
    [event\_handler\_method\_declarations](javascript:call_link\('abenmethod_for_entity_event.htm'\))
    ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

A [local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") that inherits from CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER can be implemented in the CCIMP include of a [RAP event handler class](javascript:call_link\('abenrap_event_handler_class_glosry.htm'\) "Glossary Entry") to locally consume [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"). The events are handled by [RAP event handler methods](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry") that are defined ([event\_handler\_method\_definitions)](javascript:call_link\('abenmethod_for_entity_event.htm'\)) and implemented ([event\_handler\_method\_declarations](javascript:call_link\('abenmethod_for_entity_event.htm'\))) in this local class.

The local class is implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)). Therefore, ABSTRACT and FINAL may or may not be specified.

Executable Example

The example [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\)) demonstrates the use of a RAP event handler class.



**📖 Source**: [abencl_abap_behavior_event_handler.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_behavior_event_handler.htm)

### abenmethod_for_entity_event.htm

> **📖 Official SAP Documentation**: [abenmethod_for_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenmethod_for_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)

### abapraise_entity_event.htm

> **📖 Official SAP Documentation**: [abapraise_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_entity_event.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for RAP Business Events](javascript:call_link\('abenrap_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20ENTITY%20EVENT%2C%20ABAPRAISE_ENTITY_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE ENTITY EVENT

Syntax

RAISE ENTITY EVENT bdef~evt FROM tab.

Effect

Raises a [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"). The statement can only be used in [ABAP behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

Since RAP business events can only be raised on the [root node](javascript:call_link\('abenroot_node_glosry.htm'\) "Glossary Entry") level, bdef must be the source name of the RAP BO. In the case of an extension using an interface, it must be the source name of the BDEF interface. The event evt that is raised must be defined in a [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") or [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"). tab is an internal table typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [TYPE TABLE FOR EVENT](javascript:call_link\('abaptype_table_for.htm'\)).

The statement triggers the calling of [RAP event handler methods](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry"). The data that is passed in tab always includes a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") key of the root entity (component group [%key](javascript:call_link\('abapderived_types_key.htm'\))). If the event is defined with parameters, tab includes the component groups %key and [%param](javascript:call_link\('abapderived_types_param.htm'\)).

Hints

-   RAP business events may be raised in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") in various contexts. However, it is recommended that they are raised during the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry"). In managed RAP BOs, it is recommended that a [RAP additional save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") is specified using the syntax addition [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) and raise the RAP business event in this additional save implementation.
-   If your use case requires raising a RAP business event outside of the behavior pool, you can create a separate [local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") in the behavior pool's [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). In this local class, you may create a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") where the event raising is wrapped in the implementation part.

Further Information

-   [RAP BDL - event](javascript:call_link\('abenbdl_event.htm'\))
-   Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

Example

The following code snippet demonstrates the implementation of a [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) method in which RAP business events are raised for RAP BO instances that are created and deleted. The event for created RAP BO instances is defined without parameters in the BDEF. The event for deleted instances is defined with parameters. Therefore, the [%param](javascript:call_link\('abapderived_types_param.htm'\)) component group is contained in the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). In both cases, the internal tables (which have the name of the BDEF) contained in the [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") create (which is of type [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\))) and delete (which is of type [TYPE REQUEST FOR DELETE](javascript:call_link\('abaptype_request_for.htm'\))) as components are looped across using [iteration expressions](javascript:call_link\('abenfor.htm'\)) with FOR to make sure that events are raised for all relevant instances.

...
CLASS lsc\_some\_bdef IMPLEMENTATION.
  METHOD save\_modified.
   IF create-some\_bdef IS NOT INITIAL.
     "Event defined in BDEF: event created;
     RAISE ENTITY EVENT some\_bdef~created
       FROM VALUE #( FOR <cr> IN created\_tab (
         %key = VALUE #( key\_field = <cr>-key\_field )  ) ).
   ENDIF.
   IF delete-some\_bdef IS NOT INITIAL.
   "Event defined in BDEF: event deleted parameter some\_abstract\_entity;
     RAISE ENTITY EVENT some\_bdef~deleted
       FROM VALUE #( FOR <del> IN delete-some\_bdef (
         %key   = VALUE #( key\_field = <del>-key\_field )
         %param = VALUE #( par\_a = '01'
                           par\_b = 'Item deleted' ) ) ).
   ENDIF.
  ENDMETHOD.
ENDCLASS.

Executable Example

The example [Local Consumption of RAP Business Events](javascript:call_link\('abenrap_events_local_consume_abexa.htm'\)) demonstrates the use of RAISE ENTITY EVENT statements.



**📖 Source**: [abapraise_entity_event.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_entity_event.htm)

### abenrap_events_local_consume_abexa.htm

> **📖 Official SAP Documentation**: [abenrap_events_local_consume_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events_local_consume_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrap_events_local_consume_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events_local_consume_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for RAP Business Events](javascript:call_link\('abenrap_events.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Local%20Consumption%20of%20RAP%20Business%20Events%2C%20ABENRAP_EVENTS_LOCAL_CONSUME_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Local Consumption of RAP Business Events

This example demonstrates the local consumption of [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") using a [managed RAP business object](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_RAP\_EVENT\_M.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_rap\_event\_m as select from demo\_tab\_root\_5 {
  key key\_field,
  field1,
  field2,
  field3,
  field4
}

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_EVENT\_M is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

// Note:
// The RAP event handler class for this example is the class
// cl\_demo\_rap\_event\_handler. In the CCIMP include of the class,
// the RAP event handler methods are implemented.
managed with additional save with full data
implementation in class bp\_demo\_rap\_event\_m unique;
strict ( 2 );
define behavior for demo\_rap\_event\_m
persistent table demo\_tab\_root\_5
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  event created;
  event updated parameter DEMO\_ABSTRACT\_ROOT\_1;
  event deleted parameter DEMO\_ABSTRACT\_ROOT\_1;
  field ( readonly : update ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EVENT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

RAP event handler class

The global class of the RAP event handler class is CL\_DEMO\_RAP\_EVENT\_HANDLER. The events are handled in the CCIMP include.

Source Code   

\* Public class definition
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Note:
\*
\* - The RAP event handler class for this example is the class
\*   cl\_demo\_rap\_event\_handler. In the CCIMP include of the class,
\*   the RAP event handler methods are implemented.
\*
\* - The RAP business events in this example are raised using RAISE
\*   ENTITY EVENT statements in the save\_modified saver method that
\*   is implemented in the CCIMP include of the ABAP behavior pool
\*   bp\_demo\_rap\_event\_m.
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS cl\_demo\_rap\_events DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA filter TYPE REF TO if\_xco\_bal\_log\_filter.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_events IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`RAP Demo: Local Consumption of \` &&
    \`RAP Business Events \` ).
    "RAP create operation
    MODIFY ENTITY demo\_rap\_event\_m
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid1'
                      key\_field = 1
                      field1 = 'aaa'
                      field2 = 'bbb'
                      field3 = 11
                      field4 = 111 )
                    ( %cid = 'cid2'
                      key\_field = 2
                      field1 = 'ccc'
                      field2 = 'ddd'
                      field3 = 22
                      field4 = 222 )
                    ( %cid = 'cid3'
                      key\_field = 3
                      field1 = 'eee'
                      field2 = 'fff'
                      field3 = 33
                      field4 = 333 )
                    ( %cid = 'cid4'
                      key\_field = 4
                      field1 = 'ggg'
                      field2 = 'hhh'
                      field3 = 44
                      field4 = 444 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "RAP update operation
    MODIFY ENTITY demo\_rap\_event\_m
      UPDATE FIELDS ( field1 field2 field3 field4 )
      WITH VALUE #( ( key\_field = 2
                      field1 = 'iii\_up'
                      field2 = 'jjj\_up'
                      field3 = 222
                      field4 = 22 )
                    ( key\_field = 3
                      field1 = 'kkk\_up'
                      field2 = 'lll\_up'
                      field3 = 333
                      field4 = 33 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "RAP delete operation
    MODIFY ENTITY demo\_rap\_event\_m
      DELETE FROM VALUE #( ( key\_field = 4 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Note: Due to the asynchronous call of the events, a WAIT statement
    "is included to wait for messages that are raised by events to be
    "written to the business application log so that they can be
    "displayed here.
    WAIT UP TO 3 SECONDS.
    "Retrieving persisted instances
    SELECT key\_field, field1, field2, field3, field4
     FROM demo\_tab\_root\_5
     ORDER BY key\_field
     INTO TABLE @DATA(dbtab\_entries).
    out->write( \`Database table entries after the RAP operations\`
    )->write( dbtab\_entries ).
    "Getting messages from the business application log to demonstrate
    "that the event handler methods have been called
    DATA(log) = cl\_demo\_rap\_event\_handler=>log\_get( filter ).
    out->write( \`Business application log entries created by the \` &&
    \`raised events\`
    )->write( log ).
    IF lines( log ) < 7.
      out->write( \`Note: Not all RAP business events raised in this \` &&
      \`example could be retrieved. Try and run the example again.\` ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_tab\_root\_5.
    "Deleting existing messages from the business application log
    "create filter
    filter = cl\_demo\_rap\_event\_handler=>log\_filter(
      cl\_demo\_rap\_event\_handler=>external\_id ).
    "delete existing messages from log
    cl\_demo\_rap\_event\_handler=>log\_delete( filter ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP class.

The example contains three ABAP EML modify requests: a RAP create, update and delete operation. For each of the operations, an event is raised using a [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)) statement. The events are raised in the [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) RAP saver method.

When the events are raised, the [RAP event handler methods](javascript:call_link\('abenrap_event_handler_meth_glosry.htm'\) "Glossary Entry"), which are implemented in the CCIMP include of the CL\_DEMO\_RAP\_EVENT\_HANDLER class, are called asynchronously. To demonstrate the effect of the events, messages are created and added to the Business Application Log.

In the output of the example, the content of an internal table is displayed that demonstrates the effect of the RAP operations. The internal table is filled by selecting from the database table where the [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") are persisted to. Additionally, the content of an internal table is displayed including the messages that have been inserted into the Business Application Log by the event handler methods.
