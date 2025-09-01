---
title: "RAISE ENTITY EVENT"
description: |
  Syntax RAISE ENTITY EVENT bdef~evt FROM tab. Effect Raises a RAP business event(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm 'Glossary Entry'). The statement can only be used in ABAP behavior pools(https://help.sap.com/doc/abapdocu_758_index_htm/7.58
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_entity_event.htm"
abapFile: "abapraise_entity_event.htm"
keywords: ["delete", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abapraise", "entity", "event"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for RAP Business Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20ENTITY%20EVENT%2C%20ABAPRAISE_ENTITY_EVENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE ENTITY EVENT

Syntax

RAISE ENTITY EVENT bdef~evt FROM tab.

Effect

Raises a [RAP business event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Since RAP business events can only be raised on the [root node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry") level, bdef must be the source name of the RAP BO. In the case of an extension using an interface, it must be the source name of the BDEF interface. The event evt that is raised must be defined in a [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") or [BDEF extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry"). tab is an internal table typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm).

The statement triggers the calling of [RAP event handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry"). The data that is passed in tab always includes a [RAP BO instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") key of the root entity (component group [%key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_key.htm)). If the event is defined with parameters, tab includes the component groups %key and [%param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_param.htm).

Hints

-   RAP business events may be raised in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") in various contexts. However, it is recommended that they are raised during the [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry"). In managed RAP BOs, it is recommended that a [RAP additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_add_save_glosry.htm "Glossary Entry") is specified using the syntax addition [with additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm) and raise the RAP business event in this additional save implementation.
-   If your use case requires raising a RAP business event outside of the behavior pool, you can create a separate [local class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_class_glosry.htm "Glossary Entry") in the behavior pool's [global class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry"). In this local class, you may create a [static method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_method_glosry.htm "Glossary Entry") where the event raising is wrapped in the implementation part.

Further Information

-   [RAP BDL - event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section about [RAP Business Events](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0b925bc556d4491aad395b21ec2566ff?version=sap_cross_product_abap).

Example

The following code snippet demonstrates the implementation of a [save\_modified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_saver_meth_save_modified.htm) method in which RAP business events are raised for RAP BO instances that are created and deleted. The event for created RAP BO instances is defined without parameters in the BDEF. The event for deleted instances is defined with parameters. Therefore, the [%param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_param.htm) component group is contained in the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). In both cases, the internal tables (which have the name of the BDEF) contained in the [deep structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_structure_glosry.htm "Glossary Entry") create (which is of type [TYPE REQUEST FOR CHANGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_request_for.htm)) and delete (which is of type [TYPE REQUEST FOR DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_request_for.htm)) as components are looped across using [iteration expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor.htm) with FOR to make sure that events are raised for all relevant instances.

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

The example [Local Consumption of RAP Business Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_events_local_consume_abexa.htm) demonstrates the use of RAISE ENTITY EVENT statements.