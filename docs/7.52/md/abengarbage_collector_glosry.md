---
title: "garbage_collector_glosry"
description: |
  garbage_collector_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm"
abapFile: "abengarbage_collector_glosry.htm"
keywords: ["delete", "do", "try", "method", "class", "field-symbol", "abengarbage", "collector", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

garbage collector

Deletes [objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_glosry.htm "Glossary Entry") that are no longer referenced by [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry") or [field symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and for which no method is registered as [an event handler](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_handler_glosry.htm "Glossary Entry"). The garbage collector is called periodically by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"). It tracks the [reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_variable_glosry.htm "Glossary Entry") of deleted objects. The static method DO\_GARBAGE\_COLLECTION of [system class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_class_glosry.htm "Glossary Entry") CL\_ABAP\_MEMORY\_UTILITIES can also be used to call the garbage collector explicitly in system programs. See also [weak reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenweak_reference_glosry.htm "Glossary Entry").