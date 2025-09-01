  

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