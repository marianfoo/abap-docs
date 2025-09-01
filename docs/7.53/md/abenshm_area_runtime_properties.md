---
title: "Areas - Runtime-Dependent Area Properties"
description: |
  The same points apply to runtime-dependent properties of an area as to dynamic area properties(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_dynamic_properties.htm), with the difference that they can be given default values by a developer and can also be changed without a
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_runtime_properties.htm"
abapFile: "abenshm_area_runtime_properties.htm"
keywords: ["delete", "do", "if", "case", "try", "class", "abenshm", "area", "runtime", "properties"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_areas.htm) → 

Areas - Runtime-Dependent Area Properties

The same points apply to runtime-dependent properties of an area as to [dynamic area properties](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_dynamic_properties.htm), with the difference that they can be given default values by a developer and can also be changed without a developer key (by administrators, for example, or in customizing or at runtime).

In the case of [client-specific areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_basic_properties.htm), the runtime-dependent area properties can be set individually for each client. The default values are used if no separate runtime-dependent area properties are specified for a client.

-   Area Build Type

This property specifies when [area instance versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area are built automatically using the area constructor implemented in the [area constructor class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_constructor_class.htm). Possible values are:

-   No Autostart
    Area instance versions are not built automatically. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_basic_properties.htm) cannot be activated if this setting is chosen.

-   Autostart for Read Request
    A new area instance version is built automatically if there is a read access and no active area instance version is available. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_basic_properties.htm) must be activated.

-   Autostart for Read Request and Every Invalidation
    Automatic area building as in Autostart for read request and also when reads are performed to a displaced or expired area instance version. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_basic_properties.htm) must be activated.

-   Size of an Area Instance Version

This property defines the maximum permitted size of an individual [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). Possible values are:

-   No limit
    No restriction on size.

-   Maximum ... KB
    Size restriction up to a specified number of kilobytes. If the maximum size is less than the current size of an area instance version during operation, read access is still possible, but change access is not. Change access is not possible again until the size of the current area instance version falls below the maximum size.

-   Number of Versions of an Area Instance

This property specifies the maximum number of versions of an [area instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_glosry.htm "Glossary Entry"). Possible values are:

-   No limit
    No restriction.

-   Maximum ...
    Restriction up to the number specified. Before a number can be specified, the fixed area property [Area instance versioning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_fixed_properties.htm) must be activated. If the maximum number of area instance versions during operation is less than the current number of area instance versions, no versions can be deleted although new versions can be created once the number is below the maximum number permitted.

-   Lifetime of an Area Instance

This property defines the lifetime of [area instance versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). Possible values are:

-   No specification
    The lifetime is not restricted.

-   Expires after ... minutes
    If a number is specified here, an area instance version becomes obsolete this number of minutes after a change lock is released.

-   Refresh after ... minutes
    If a number is specified here, the area constructor in the [constructor class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_dynamic_properties.htm) is called after a change lock is released and this number of minutes passes. For this to happen, the basic property [automatic area building](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_basic_properties.htm) must activated.

-   Without read access ... minutes
    If a number is specified here, an area instance version becomes obsolete this number of minutes after a read or change lock is released.