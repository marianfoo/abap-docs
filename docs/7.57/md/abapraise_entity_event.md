  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE ENTITY EVENT, ABAPRAISE_ENTITY_EVENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

RAISE ENTITY EVENT

Syntax

RAISE ENTITY EVENT bdef~evt FROM tab.

Effect

Raises a [RAP entity event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry").

Since RAP entity events can only be raised on the [root node](javascript:call_link\('abenroot_node_glosry.htm'\) "Glossary Entry") level, bdef must be a [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"). The event evt that is raised must be defined in a [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") or [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"). tab is an internal table of type [TYPE TABLE FOR EVENT bdef~evt](javascript:call_link\('abaptype_table_for.htm'\)).

RAP entity events might be raised in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") in various contexts, however, it is recommended that they are raised during the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [save](javascript:call_link\('abensaver_method_save.htm'\)) or [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)).

The information that is passed always includes a RAP BO instance key of the root entity. If the event is defined with parameters, the information can include more details. For example, an event is raised if a flight is canceled in a flight booking application. In addition to the key to identify the flight, further details like the cancellation reason and a description are passed (via a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")).

Hints

-   An event binding must exist to map an event type to a RAP entity event.
-   Events must be assigned to an outbound channel so that the events can be sent.
-   If your use case is to raise a RAP entity event outside of the behavior pool, you can create a separate [local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") in the behavior pool's [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). There, you might create a [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") in whose implementation part the raising of the event is wrapped.
-   ABAP EML statements should not be used within loops.

Example

The following code snippet demonstrates the implementation of a save\_modified method in which RAP entity events are raised for RAP BO instances that are created and deleted. The event for created RAP BO instances is defined without parameters in the BDEF. The event for deleted instances is defined with parameters. Hence, the [%param](javascript:call_link\('abapderived_types_param.htm'\)) structure is contained in the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). In both cases, the internal tables contained in the [deep structures](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") create and delete are looped across using [iteration expressions](javascript:call_link\('abenfor.htm'\)) with FOR to make sure that events are raised for all relevant instances.

CLASS lsc\_some\_bdef IMPLEMENTATION.
  METHOD save\_modified.
  IF create-some\_bdef IS NOT INITIAL.
    READ ENTITY IN LOCAL MODE some\_bdef
       ALL FIELDS WITH CORRESPONDING #( create-some\_bdef )
       RESULT DATA(created\_tab) FAILED DATA(failed\_cr).
    ENDIF.
  IF created\_tab IS NOT INITIAL.
    "Event defined in BDEF: event created;
    RAISE ENTITY EVENT some\_bdef~created
      FROM VALUE #( FOR <cr> IN created\_tab (
        %key = VALUE #( key\_field = <cr>-key\_field )  ) ).
  ENDIF.
  IF delete-some\_bdef IS NOT INITIAL.
  "Event defined in BDEF: event deleted parameter some\_abstract\_entity;
    RAISE ENTITY EVENT some\_bdef~deleted
      FROM VALUE #( FOR <del> IN delete-some\_bdef (
        %key   = VALUE #( key\_field   = <del>-key\_field )
        %param = VALUE #( reason\_code = '01'
                          description = 'Booking canceled.' ) ) ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.