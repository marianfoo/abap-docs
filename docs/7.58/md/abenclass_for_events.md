---
title: "CLASS, FOR EVENTS OF, RAP Event Handler Class"
description: |
  Syntax CLASS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) cl_event_handler DEFINITION(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) PUBLIC  ABSTRACT(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/a
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_for_events.htm"
abapFile: "abenclass_for_events.htm"
keywords: ["do", "if", "try", "method", "class", "abenclass", "for", "events"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for RAP Business Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20FOR%20EVENTS%20OF%2C%20RAP%20Event%20Handler%20Class%2C%20ABENCLASS_FOR_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CLASS, FOR EVENTS OF, RAP Event Handler Class

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) cl\_event\_handler [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) PUBLIC *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]* FOR EVENTS OF bdef.
  ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) cl\_event\_handler [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm)
  ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Effect

The addition FOR EVENTS OF to the definition of a [global class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry") defines a [RAP event handler class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_event_handler_class_glosry.htm "Glossary Entry").

bdef specifies the name of the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"). The events that are handled by the class must be defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of that root entity. bdef can also be the name of an [interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") that exposes an event.

The global class is implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm). Therefore, ABSTRACT and FINAL may or may not be specified.

The actual handling of the events is done by [RAP event handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry") that are implemented in the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") of the event handler class.

Hints

-   Event handling is not part of the implementation of the RAP BO that defines an event, nor is it part of any other [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").
-   There can be more than one event handler class for a RAP BO.
-   The event handler methods that are implemented in the CCIMP include of an event handler class are called asynchroneously.

Executable Example

The example [Local Consumption of RAP Business Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_events_local_consume_abexa.htm) demonstrates the use of a RAP event handler class.