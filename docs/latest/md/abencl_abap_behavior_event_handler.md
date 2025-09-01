  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for RAP Business Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHAVIOR_EVENT_HANDLER%2C%20ABENCL_ABAP_BEHAVIOR_EVENT_HANDLER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) lhe\_event [DEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprivate.htm).
    [event\_handler\_method\_definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)
    ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm) lhe\_event [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm)
    [event\_handler\_method\_declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)
    ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm).

Effect

A [local class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_class_glosry.htm "Glossary Entry") that inherits from CL\_ABAP\_BEHAVIOR\_EVENT\_HANDLER can be implemented in the CCIMP include of a [RAP event handler class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_event_handler_class_glosry.htm "Glossary Entry") to locally consume [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"). The events are handled by [RAP event handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry") that are defined ([event\_handler\_method\_definitions)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm) and implemented ([event\_handler\_method\_declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_for_entity_event.htm)) in this local class.

The local class is implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm). Therefore, ABSTRACT and FINAL may or may not be specified.

Executable Example

The example [Local Consumption of RAP Business Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events_local_consume_abexa.htm) demonstrates the use of a RAP event handler class.