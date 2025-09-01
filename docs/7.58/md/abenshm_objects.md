  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Objects%2C%20ABENSHM_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Shared Objects - Objects

Objects in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"), that is, the actual shared objects, are instances of shared-memory-enabled classes or anonymous data objects addressed using references.

A shared-memory-enabled class is declared with the addition [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) of the statement CLASS or has the property Shared memory enabled activated in the Class Builder. Only instances of shared-memory-enabled classes can be stored in the shared objects memory. The static attributes of a shared-memory-enabled class, on the other hand, are stored in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of a program and not in the shared memory. If different programs access the same shared objects, the static attributes of the associated classes exist multiple times and independently of each other in the programs.

Since area instances without existing area locks are self-contained, a [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry") of a shared-memory-enabled class is required for initial reads.

-   [References to shared objects](javascript:call_link\('abenshm_objects_references.htm'\))
-   [Root object](javascript:call_link\('abenshm_objects_root_object.htm'\))
-   [Object creation](javascript:call_link\('abenshm_objects_create_object.htm'\))
-   [Memory bottlenecks](javascript:call_link\('abenshm_objects_out_of_memory.htm'\))

Continue
[Shared Objects - References](javascript:call_link\('abenshm_objects_references.htm'\))
[Shared Objects - Root Object](javascript:call_link\('abenshm_objects_root_object.htm'\))
[Shared Objects - Object Creation](javascript:call_link\('abenshm_objects_create_object.htm'\))
[Shared Objects - Memory Bottlenecks](javascript:call_link\('abenshm_objects_out_of_memory.htm'\))