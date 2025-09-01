  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Areas](javascript:call_link\('abenshm_areas.htm'\)) → 

Shared Objects - Dynamic Area Properties

The dynamic properties of an area are ignored when the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") is generated. These properties can be changed by developers only. When the dynamic properties of an area are changed at runtime, the current [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") (versions that are being built, active, or obsolete) are not affected. The new dynamic properties are not used until the next change lock is set in the associated version that is being built.

-   Area constructor class
    
    Any global class that implements the interface [SHM\_IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)) can be specified as an area constructor class. The implementation of the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD is used as the area constructor.
    
    An area constructor class must be specified if automatic area building is activated in the [basic properties](javascript:call_link\('abenshm_area_basic_properties.htm'\)). The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the specified class is called implicitly in a separate [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") when an area is built automatically.
    
    An area constructor class can be specified if automatic area building is not activated in the basic properties. The interface method IF\_SHM\_BUILD\_INSTANCE~BUILD of the current area constructor class can be called explicitly in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") with the method BUILD generated in every area class.
    
    An example for implementing the interface method IF\_SHM\_BUILD\_INSTANCE~BUILD in an area constructor class can be found under [Area Constructor Class](javascript:call_link\('abenshm_area_constructor_class.htm'\)).
    
-   Displacement type
    
    This property determines whether and how instances of the area can be displaced. Displacement may be necessary if the available addressing area of the shared memory is no longer sufficient for all area instance versions. The possible displacement types are as follows:
    
    -   Displacement not possible
        
        Area instance versions cannot be displaced. If the addressing area is no longer sufficient for all area instance versions, a runtime error occurs.
        
    -   Displacement possible
        
        Area instance versions can be displaced. The content is lost during displacement (complete displacement). Displacement only takes place if no [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") is bound to the area instance at the same time or if there are no locks on the area instance. This means that only those area instances can be displaced that have exactly one version (the active version) with no read lock at the time of displacement.