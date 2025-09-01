  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Root Object, ABENSHM_OBJECTS_ROOT_OBJECT, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Root Object

Each [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") contains an instance of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry") that is marked as the root object.

The figure below shows how shared objects are accessed using the root object. The shared objects of an area instance version are accessed initially from an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), always using the reference variable [ROOT](javascript:call_link\('abenshm_area_class.htm'\)) of the area handle that points to the root object.

![Figure](abdoc_shm.gif)

The root object must be specified using the instance method [SET\_ROOT](javascript:call_link\('abenshm_area_class.htm'\)) of the area handle before the lock is released with the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)) of the area handle after writes.

After binding an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") to an existing area instance version, a reference to the root object can be obtained by accessing the attribute [ROOT](javascript:call_link\('abenshm_area_class.htm'\)) (or the instance method [GET\_ROOT](javascript:call_link\('abenshm_cl_shm_area.htm'\))) of the area handle. The root object can then contain and/or return object and data references to further shared objects of the area instance version.