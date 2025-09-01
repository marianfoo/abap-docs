  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Objects, ABENSHM_OBJECTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Shared Objects - Objects

Objects in the [shared objects memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"), that is, the actual shared objects, are instances of shared-memory-enabled classes or anonymous data objects addressed using references.

A shared-memory-enabled class is declared with the addition [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) of the statement CLASS or has the property Shared memory enabled activated in the Class Builder. Only instances of shared-memory-enabled classes can be stored in the shared objects memory. The static attributes of a shared-memory-enabled class, on the other hand, are stored in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program and not in the shared memory. If different programs access the same shared objects, the static attributes of the associated classes exist multiple times and independently of each other in the programs.

Since area instances without existing area locks are self-contained, a [root object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_object_glosry.htm "Glossary Entry") of a shared-memory-enabled class is required for initial reads.

-   [References to shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_references.htm)
-   [Root object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_root_object.htm)
-   [Object creation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_create_object.htm)
-   [Memory bottlenecks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_out_of_memory.htm)

Continue
[Shared Objects - References](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_references.htm)
[Shared Objects - Root Object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_root_object.htm)
[Shared Objects - Object Creation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_create_object.htm)
[Shared Objects - Memory Bottlenecks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_objects_out_of_memory.htm)