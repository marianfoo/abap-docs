  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_areas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Fixed Area Properties, ABENSHM_AREA_FIXED_PROPERTIES, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Fixed Area Properties

Like [basic properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_basic_properties.htm), fixed properties of an area can be only be changed by developers. When the fixed properties of an area are changed at runtime, all area instances of the area are set to the [state](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_state.htm) "expired" and the [area class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_class_glosry.htm "Glossary Entry") must be regenerated in most cases.

-   Area binding
    
    This property determines the visibility and lifetime of the [area instance version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area by specifying a context. The possible contexts are as follows:
    
    -   Application server
        
        Area instance versions exist until the AS instance is shut down. In areas with the area binding Application Server, the methods FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE of the [area class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm) have a parameter called AFFECT\_SERVER that can be used to control cross-server invalidations.
        
    -   User session
        
        Area instances exist until the last [ABAP session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry") ends. In area bindings, every user logon to an AS ABAP counts individually. This also applies in particular when users log on via external interfaces such as RFC or ICF.
        
    -   Top level transaction
        
        The [top level transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentop_level_transaction_glosry.htm "Glossary Entry") is the first program in a call sequence. These area instances exist for as long as the [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry") assigned to a call sequence is loaded, in other words for as long as the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the top level transaction is loaded. In area instances, the [SAP Easy Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_easy_access_glosry.htm "Glossary Entry") program also functions as a top level transaction.
        
-   Area instance versioning
    
    This property determines whether there can be only one or more [area instance versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of an [area instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_glosry.htm "Glossary Entry"). Without versioning, there is only one version and the area instance is equivalent to this area instance version. If versioning is used, there can be multiple versions in different [states](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_state.htm) and an area instance is the set of all area instance versions with the same area instance name.
    
    Without versioning, multiple readers from different internal sessions can access an area instance after its construction but writes are only possible if no read locks are in place. If versioning is used, a change lock can be set on an area instance that still has read locks.
    
    The maximum number of versions of an area instance can be specified in the [runtime-dependent area properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_runtime_properties.htm).