  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Object Creation, ABENSHM_OBJECTS_CREATE_OBJECT, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Object Creation

A [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the shared memory is created using one of the following statements:

-   [CREATE OBJECT oref AREA HANDLE handle ...](javascript:call_link\('abapcreate_object_area_handle.htm'\))
-   [CREATE DATA dref AREA HANDLE handle ...](javascript:call_link\('abapcreate_data_area_handle.htm'\))

Here, handle is an object reference variable that points to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") that is bound using a change lock to an area instance version under construction. The created object is stored in this area instance version and oref or dref point to the object. When the class instance is created, it must be shared-memory-enabled.

Before the construction of the area instance version is completed using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), the method [SET\_ROOT](javascript:call_link\('abenshm_area_class.htm'\)) of the area handle must be used to define the [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry"). If the construction of the area instance version is completed using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), no references from the area instance version are allowed to point to outside.

The catchable exceptions listed for the above statements can be raised when objects are created.