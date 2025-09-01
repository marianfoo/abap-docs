  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Areas](javascript:call_link\('abenshm_areas.htm'\)) → 

Areas - Runtime-Dependent Area Properties

The same points apply to runtime-dependent properties of an area as to [dynamic area properties](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)), with the difference that they can be given default values by a developer and can also be changed without a developer key, by administrators for example, during Customizing or operation.

With [client-dependent areas](javascript:call_link\('abenshm_area_basic_properties.htm'\)), the runtime-dependent area properties can be set individually for each client. The default values are used if no separate runtime-dependent area properties are specified for a client.

-   Area Build Type

This property specifies when [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the area should be built automatically using the area constructor that is implemented in the [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)). Possible values are:

-   No Autostart
    Area instance versions are not built automatically. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must not be activated with this setting.

-   Autostart for Read Request
    A new area instance version is built automatically if there is a read access and no active area instance version is available. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must be activated.

-   Autostart for Read Request and Every Invalidation
    Automatic area building as is the case with Autostart for Read Request, and additionally with read access of a displaced or expired area instance version. The basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) must be activated.

-   Size of an Area Instance Version

This property determines the maximum permitted size of an individual [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). Possible values are:

-   No limit
    No restriction on size.

-   Maximum ... KB
    Size restriction up to a specified number of kilobytes. If the maximum size is less than the current size of an area instance version during operation, read access is still possible, but change access is not. Change access is not possible again until the size of the current area instance version falls below the maximum size.

-   Number of Versions of an Area Instance

This property specifies the maximum number of versions of an [area instance](javascript:call_link\('abenarea_instance_glosry.htm'\) "Glossary Entry"). Possible values are:

-   No limit
    No restriction.

-   Maximum ...
    Restriction up to the number you specify. If you want to specify a number, the fixed area property [area instance versioning](javascript:call_link\('abenshm_area_fixed_properties.htm'\)) must have been activated. If the maximum number of area instance versions during operation is less than the current number of area instance versions, no versions can be deleted although new versions can be created once the number is below the maximum number permitted.

-   Lifetime of an Area Instance

This property controls the lifetime of [area instance versions](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). Possible values are:

-   No specification
    The lifetime is not restricted.

-   Expires after ... minutes
    If a number is specified here, an area instance version becomes obsolete this number of minutes after a change lock is released.

-   Refresh after ... minutes
    If a number is specified here, the area constructor in the [constructor class](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)) is called this number of minutes after a change lock is released. The prerequisite for this is that the basic property [automatic area building](javascript:call_link\('abenshm_area_basic_properties.htm'\)) is activated.

-   Without read access ... minutes
    If a number is specified here, an area instance version becomes obsolete this number of minutes after a read or change lock is released.