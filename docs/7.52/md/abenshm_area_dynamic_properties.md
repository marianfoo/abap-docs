  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Areas](javascript:call_link\('abenshm_areas.htm'\)) → 

Areas - Dynamic Area Properties

The dynamic properties of an area are not respected when the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") is generated. These properties can be changed by developers only. When the dynamic properties of an area are changed dynamically during operation, the current [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") (versions that are being built, active or obsolete) are not affected. The new dynamic properties are not used until the next change lock is set in the corresponding version that is being built.

-   Area Constructor Class

Any global class that implements the interface [SHM\_IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)) can be specified as an area constructor class. The implementation of the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD is used as the area constructor.

An area constructor class has to be specified if automatic area building is activated in the [basic properties](javascript:call_link\('abenshm_area_basic_properties.htm'\)). The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the specified class is called implicitly in a separate [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") when an area is built automatically.

An area constructor class can be specified if automatic area building is not activated in the basic properties. The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the current area constructor class can be called explicitly in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (using the method BUILD generated in every area class).

An example of how to implement the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD in an area constructor class can be found under [Area Constructor Class](javascript:call_link\('abenshm_area_constructor_class.htm'\)).

-   Displacement Type

This property determines whether and how instances of the area can be displaced. Displacement may be necessary if the available addressing area of the shared memory is not sufficient for all area instance versions. This may be the case in 32-bit systems, but should not be an issue for 64-bit systems. Possible displacement types are:

-   Displacement Not Possible
    Area instance versions cannot be displaced. If the addressing area is no longer sufficient for all area instance versions, a runtime error occurs.

-   Displacement Possible
    Area instance versions can be displaced. The content is lost (complete displacement). Displacement only takes place if no [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") is bound to the area instance at the same time, or if there are no locks on the area instance. This means that only those area instances can be displaced that have exactly one version (the active version) with no shared lock at the time of displacement.