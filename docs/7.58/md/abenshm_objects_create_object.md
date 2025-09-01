  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Object%20Creation%2C%20ABENSHM_OBJECTS_CREATE_OBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Shared Objects - Object Creation

A [shared object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the shared memory is created using one of the following statements:

-   [CREATE OBJECT oref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_area_handle.htm)
-   [CREATE DATA dref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm)

Here, handle is an object reference variable that points to an [area handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_handle_glosry.htm "Glossary Entry") that is bound using a change lock to an area instance version under construction. The created object is stored in this area instance version and oref or dref point to the object. When the class instance is created, it must be shared-memory-enabled.

Before the construction of the area instance version is completed using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_cl_shm_area.htm), the method [SET\_ROOT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_class.htm) of the area handle must be used to define the [root object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_object_glosry.htm "Glossary Entry"). If the construction of the area instance version is completed using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_cl_shm_area.htm), no references from the area instance version are allowed to point to outside.

The catchable exceptions listed for the above statements can be raised when objects are created.