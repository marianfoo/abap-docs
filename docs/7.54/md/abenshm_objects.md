---
title: "Shared Objects - Objects"
description: |
  Objects in the shared objects memory(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_memory_glosry.htm 'Glossary Entry'), that is, the actual shared objects, are instances of shared memory-enabled classes or anonymous data objects that are addressed using references.
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects.htm"
abapFile: "abenshm_objects.htm"
keywords: ["do", "if", "try", "class", "data", "abenshm", "objects"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Objects

Objects in the [shared objects memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"), that is, the actual shared objects, are instances of shared memory-enabled classes or anonymous data objects that are addressed using references.

A shared-memory-enabled class is declared with the addition [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_options.htm) of the statement CLASS, or has the property Shared Memory Enabled activated in Class Builder. Only instances of shared-memory-enabled classes can be stored in the shared objects memory. The static attributes of a shared memory-enabled class, on the other hand, are not saved in the shared memory but in the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program. If different programs access the same shared objects, the static attributes of the corresponding classes exist multiple times and independently from each other in the programs.

Since area instances are self-contained without existing area locks, a [root object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_object_glosry.htm "Glossary Entry") of a shared memory-enabled class is required for the initial access.

-   [References to Shared Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_references.htm)

-   [Root Object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_root_object.htm)

-   [Object Creation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_create_object.htm)

-   [Memory Bottlenecks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_out_of_memory.htm)

Continue
[Shared Objects - References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_references.htm)
[Shared Objects - Root Object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_root_object.htm)
[Shared Objects - Creating Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_create_object.htm)
[Shared Objects - Memory Bottlenecks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_out_of_memory.htm)