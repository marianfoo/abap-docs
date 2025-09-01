  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Areas](javascript:call_link\('abenshm_areas.htm'\)) → 

Areas - Fixed Area Properties

Like [basic properties](javascript:call_link\('abenshm_area_basic_properties.htm'\)), fixed properties of an area can be only be changed by developers. When the fixed properties of an area are changed at runtime, all area instances of the area are set to the [state](javascript:call_link\('abenshm_area_instance_state.htm'\)) expired and the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") must be generated again in most cases.

-   Area binding

The context specified for this property defines the visibility and lifetime of the [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the instance. The possible contexts are as follows:

-   Application server
    Area instance versions exist until the application server is shut down. In transactional areas with the Application Server area binding, the methods FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE of the [area class](javascript:call_link\('abenshm_area_class.htm'\)) have a parameter called AFFECT\_SERVER that can be used to control cross-server invalidations.

-   User session
    Area instances exist until the last [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") ends. In area bindings, every user logon to an AS ABAP counts individually. More specifically, this also applies when users log on using external interfaces such as RFC or ICF.

-   Top level transaction
    The [top level transaction](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry") is the first program in a call sequence. These area instances exist for as long as the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") assigned to a call sequence is loaded, in other words for as long as the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the top level transaction is loaded. In area instances, the [SAP Easy Access](javascript:call_link\('abensap_easy_access_glosry.htm'\) "Glossary Entry") program also functions as a top level transaction.

-   Area instance versioning

This property defines whether there can be only one [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") or more than one version of an [area instance](javascript:call_link\('abenarea_instance_glosry.htm'\) "Glossary Entry"). Without versioning, there is only one version and the area instance is equivalent to this area instance version. If versioning is used, there can be multiple versions in different [states](javascript:call_link\('abenshm_area_instance_state.htm'\)) and an area instance is the set of all area instance versions with the same area instance name.

Without versioning, multiple readers from different internal sessions can access an area instance after it has been built. Writes are only possible if no shared locks are in force. If versioning is used, a change lock can be set on an area instance that still has shared locks.

The maximum number of versions of an area instance can be specified in the [runtime-dependent area properties](javascript:call_link\('abenshm_area_runtime_properties.htm'\)).