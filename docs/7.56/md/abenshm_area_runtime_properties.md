  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Areas](javascript:call_link\('abenshm_areas.htm'\)) → 

Shared Objects - Runtime-Dependent Area Properties

The same points apply to runtime-dependent properties of an area as to [dynamic area properties](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)), with the difference that they can be given default values by a developer but can also be changed without a developer key, for example, by administrators, or in customizing or at runtime.

In the case of [client-dependent areas](javascript:call_link\('abenshm_area_basic_properties.htm'\)), the runtime-dependent area properties can be set individually for each client. The default values are used if no separate runtime-dependent area properties are specified for a client.

-   Area Build Type
    
    This property specifies when [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the area are to be built automatically using the area constructor implemented in the [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)). Possible values are:
    
    -   No Autostart
        
        Area instance versions are not built automatically. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must not be activated if this setting is chosen.
        
    -   Autostart for Read Request
        
        A new area instance version is built automatically if there is a read access and no active area instance version is available. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must be activated.
        
    -   Autostart for Read Request and Every Invalidation
        
        Automatic area building such as in Autostart for read request and also when reads are performed to a displaced or expired area instance version. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must be activated.
        
-   Size of an Area Instance Version
    
    This property specifies the maximum allowed size of an individual [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). Possible values are:
    
    -   No limit
        
        No restriction on size.
        
    -   Maximum ... KB
        
        Size restriction up to a number specified in kilobytes. If the maximum size is less than the current size of an area instance version during operation, read access and no write access is possible. Write access is not possible again until the size of the current area instance version falls below the maximum size.
        
-   Number of Versions of an Area Instance
    
    This property specifies the maximum number of versions of an [area instance](javascript:call_link\('abenarea_instance_glosry.htm'\) "Glossary Entry"). Possible values are:
    
    -   No limit
        
        No restriction.
        
    -   Maximum ...
        
        Restriction up to the number specified. The prerequisite for specifying a number is that the fixed area property [Area instance versioning](javascript:call_link\('abenshm_area_fixed_properties.htm'\)) must be activated. If the maximum number of area instance versions during operation is less than the current number of area instance versions, no versions can be deleted but new versions can be created once the number is below the maximum number allowed.
        
-   Lifetime of an Area Instance
    
    This property controls the lifetime of [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). Possible values are:
    
    -   No specification
        
        The lifetime is not restricted.
        
    -   Expires after ... minutes
        
        If a number is specified here, an area instance version becomes obsolete this number of minutes after a change lock is released.
        
    -   Refresh after ... minutes
        
        If a number is specified here, the area constructor in the [constructor class](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)) is called after a change lock has been released and this number of minutes passes. The prerequisite is that the basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must activated.
        
    -   Without read access ... minutes
        
        If a number is specified here, an area instance version becomes obsolete this number of minutes after a read or a change lock is released.