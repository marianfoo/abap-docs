---
title: "Shared Objects - Runtime-Dependent Area Properties"
description: |
  The same points apply to runtime-dependent properties of an area as to dynamic area properties(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_dynamic_properties.htm), with the difference that they can be given default values by a developer but can also be changed without a
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_runtime_properties.htm"
abapFile: "abenshm_area_runtime_properties.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "abenshm", "area", "runtime", "properties"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_areas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Runtime-Dependent Area Properties, ABENSHM_AREA_RUNTIME_PROPERTIES,
757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Runtime-Dependent Area Properties

The same points apply to runtime-dependent properties of an area as to [dynamic area properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_dynamic_properties.htm), with the difference that they can be given default values by a developer but can also be changed without a developer key, for example, by administrators, or in customizing or at runtime.

In the case of [client-dependent areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm), the runtime-dependent area properties can be set individually for each client. The default values are used if no separate runtime-dependent area properties are specified for a client.

-   Area Build Type
    
    This property specifies when [area instance versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area are to be built automatically using the area constructor implemented in the [area constructor class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_constructor_class.htm). Possible values are:
    
    -   No autostart
        
        Area instance versions are not built automatically. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm) must be set as None if this setting is chosen.
        
    -   Autostart if read request
        
        A new area instance version is built automatically if there is a read access and no active area instance version is available. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm) must be activated with a value other than None.
        
    -   Autostart if read request and invalidated
        
        Automatic area building such as in Autostart if read request and also when reads are performed to a displaced or expired area instance version. The basic property [automatic area building](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm) must be activated with a value other than None.
        
    
    Values related to the server start:
    
    -   Autostart if read request and server start
        
        Automatic area building such as in Autostart if read request and also at server start.
        
    -   Autostart if read request, invalidated, and server start
        
        Automatic area building such as in Autostart if read request and invalidated and also at server start.
        
    -   Autostart only at server start
        
        Automatic area building is carried out only at server start.
        
    
    The other values can also be selected when using the system user. However, since the user for client-dependent areas is determined by setting the value Using the system user in the [basic properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm), the access is permitted across all clients. Hence, the methods ATTACH\_FOR\_READ, ATTACH\_FOR\_UPDATE, INVALIDATE\_INSTANCE and INVALIDATE\_AREA include a client parameter for these areas. Note: An area is only built if the area, i. e. the instance, exists at the time of storing the buffer content. It is not sufficient to change the settings of the area without initializing an instance of it.
    
-   Size of an Area Instance Version
    
    This property specifies the maximum allowed size of an individual [area instance version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). Possible values are:
    
    -   No limit
        
        No restriction on size.
        
    -   Maximum ... KB
        
        Size restriction up to a number specified in kilobytes. If the maximum size is less than the current size of an area instance version during operation, read access and no write access is possible. Write access is not possible again until the size of the current area instance version falls below the maximum size.
        
-   Number of Versions of an Area Instance
    
    This property specifies the maximum number of versions of an [area instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_glosry.htm "Glossary Entry"). Possible values are:
    
    -   No limit
        
        No restriction.
        
    -   Maximum ...
        
        Restriction up to the number specified. The prerequisite for specifying a number is that the fixed area property [Area instance versioning](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_fixed_properties.htm) must be activated. If the maximum number of area instance versions during operation is less than the current number of area instance versions, no versions can be deleted but new versions can be created once the number is below the maximum number allowed.
        
-   Lifetime of an Area Instance
    
    This property controls the lifetime of [area instance versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). Possible values are:
    
    -   No specification
        
        The lifetime is not restricted.
        
    -   Expires after ... minutes
        
        If a number is specified here, an area instance version becomes obsolete this number of minutes after a change lock is released.
        
    -   Refresh after ... minutes
        
        If a number is specified here, the area constructor in the [constructor class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_dynamic_properties.htm) is called after a change lock has been released and this number of minutes passes. The prerequisite is that the basic property [automatic area building](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm) must activated.
        
    -   Without read access ... minutes
        
        If a number is specified here, an area instance version becomes obsolete this number of minutes after a read or a change lock is released.