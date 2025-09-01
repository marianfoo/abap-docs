  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_areas.htm) → 

Areas - Basic Properties

An area has the following basic properties:

-   Area name

The name of an area. This is also the name of the generated global [area class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_class.htm) and is therefore unique across the system. It is advisable to follow the naming conventions for global classes in the current system and use the prefix "CL\_".

-   Area root class

The area root class is a global shared-memory-enabled class that has to be assigned to an area when it is defined. A non-empty area instance version has to contain at least one instance of the area root class as a [root object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_object_glosry.htm "Glossary Entry"), from which the other objects are referenced. The attribute ROOT of a corresponding [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") is generated as a reference variable with the static type of the [area root class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_data_class_glosry.htm "Glossary Entry").

-   Client-specific area

An area can be identified as client-specific. In this case, an [area instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_glosry.htm "Glossary Entry") of the area is identified by a [client identifier](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry") and not just by its name. In client-specific areas, the area class methods always make reference to the current client when accessing an area instance. Also in client-specific areas, these methods have the additional input parameter CLIENT, which enables explicit access to other clients. If automatic area building is possible, it is not possible to set locks by specifying the client explicitly . In methods where this makes sense, the value of constant CL\_SHM\_AREA=>ALL\_CLIENTS can be passed to CLIENT to execute it on all clients. In the standard setting, the runtime-dependent area properties are client-specific. There is no check to see whether a specified client actually exists in the system.

-   Automatic area building

If this property is set, a new [area instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_glosry.htm "Glossary Entry") is created automatically at the time selected in the [area build type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_runtime_properties.htm). If this property is set, an [area constructor class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_constructor_class.htm) must be specified in the [dynamic area properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_dynamic_properties.htm) and the area has to be bound to the AS Instance.

-   Transactional area

An [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of a transactional area is not active immediately after the removal of a change lock using the method DETACH\_COMMIT of the [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") and it becomes active after the next [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") instead. Between the time when the lock is removed and the database commit, the area instance version appears as specified in the layout. No new change locks can be set on the area instance and any shared locks access the previous active version. In non-transactional areas, the [state](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_state.htm) of the area instance version is set to active as soon as the method DETACH\_COMMIT is executed.

Transactional areas enable data or objects in the area instance versions to join areas like this with database content. To ensure that the reference between database content and shared objects is not damaged, changes to the shared objects should be made only in contexts in which the database changes were also made in the current application. In updates, for example, any changes to the shared objects should only be made while the corresponding update functional module is being executed.