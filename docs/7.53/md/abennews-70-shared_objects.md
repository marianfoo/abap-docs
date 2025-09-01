  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Shared Objects in Release 7.0

[1\. Data references in the shared objects memory](#!ABAP_MODIFICATION_1@1@)

[2\. Waiting time for change locks](#!ABAP_MODIFICATION_2@2@)

Modification 1

Data References in the Shared Objects Memory

From Release 7.0, data references that point to data objects of the same [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") can be stored permanently in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"). An instance of a shared memory-enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception is raised only if the used data type is unknown to the method DETACH\_COMMIT in the shared objects memory when the method is executed. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types in ABAP Dictionary is possible either.

The opportunity to store data references in closed area instance versions makes it possible (from Release 7.0) to store not only instances of classes, but also [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") using the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) as [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry").

Modification 2

Waiting Time for Change Locks

From Release 7.0, a waiting period can be passed to the parameter WAIT\_TIME for the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") and for MULTI\_ATTACH in CL\_SHM\_AREA.