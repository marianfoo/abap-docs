  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_areas.htm) → 

Areas - Dynamic Area Properties

The dynamic properties of an area are not considered when the [area class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_class_glosry.htm "Glossary Entry") is generated. These properties can be changed by developers only. When the dynamic properties of an area are changed dynamically during operation, the current [area instance versions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") (versions that are being built, active or obsolete) are not affected. The new dynamic properties are not used until the next change lock is set in the corresponding version that is being built.

-   Area Constructor Class

Any global class that implements the interface [SHM\_IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_if_shm_build_instance.htm) can be specified as an area constructor class. The implementation of the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD is used as the area constructor.

An area constructor class has to be specified if automatic area building is activated in the [basic properties](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_area_basic_properties.htm). The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the specified class is called implicitly in a separate [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry") when an area is built automatically.

An area constructor class can be specified if automatic area building is not activated in the basic properties. The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the current area constructor class can be called explicitly in the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") (using the method BUILD generated in every area class).

An example of how to implement the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD in an area constructor class can be found under [Area Constructor Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_area_constructor_class.htm).

-   Displacement Type

This property determines whether and how instances of the area can be displaced. Displacement may be necessary if the available addressing area of the shared memory is not sufficient for all area instance versions. This may be the case in 32-bit systems, but should not be an issue for 64-bit systems. Possible displacement types are:

-   Displacement Not Possible
    Area instance versions cannot be displaced. If the addressing area is no longer sufficient for all area instance versions, this results in a runtime error.

-   Displacement Possible
    Area instance versions can be displaced. The content is lost (complete displacement). Displacement only takes place if no [area handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_handle_glosry.htm "Glossary Entry") is bound to the area instance at the same time, or if there are no locks on the area instance. This means that only those area instances can be displaced that have exactly one version (the active version) with no read lock at the time of displacement.