  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Shared Objects in Release 7.0, EhP2

[1\. Handling of memory bottlenecks](#!ABAP_MODIFICATION_1@1@)

[2\. Data references in the shared objects memory](#!ABAP_MODIFICATION_2@2@)

[3\. Area binding](#!ABAP_MODIFICATION_3@3@)

[4\. Methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE replaced](#!ABAP_MODIFICATION_4@4@)

[5\. Service class CL\_SHM\_UTILITIES](#!ABAP_MODIFICATION_5@5@)

Modification 1

Handling of Memory Bottlenecks

From Release 7.0, EhP2, memory bottlenecks in the shared objects memory raise handleable exceptions of the class CX\_SHM\_OUT\_OF\_MEMORY. Previously, unhandleable runtime errors were triggered.

Modification 2

Data References in the Shared Objects Memory

From Release 7.0, EhP2, [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry") can also be created with direct reference to data elements and table types of ABAP Dictionary using the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)).

Modification 3

Area Binding

From Release 7.0, EhP2, the lifetime and visibility of area instances can be bound not only to the current [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") but also to the following:

-   [User sessions](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry")
    
-   [Top level transactions](javascript:call_link\('abentop_level_transaction_glosry.htm'\) "Glossary Entry")
    

.

Modification 4

Methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE Replaced

The methods PROPAGATE\_AREA and PROPAGATE\_INSTANCE of an [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") for transactional areas may no longer be used. Instead, the parameter AFFECT\_SERVER of the methods FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE can be used for areas of this type with the Application Server area binding.

Modification 5

Service Class CL\_SHM\_UTILITIES

The class CL\_SHM\_UTILITIES is used to query the attributes of area instances in programs.