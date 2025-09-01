  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70.htm) → 

Shared Objects in Release 7.0

[1\. Data references in the shared objects memory](#!ABAP_MODIFICATION_1@1@)

[2\. Waiting time for change locks](#!ABAP_MODIFICATION_2@2@)

Modification 1

Data References in the Shared Objects Memory

From Release 7.0, data references that point to data objects of the same [area instance version](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") can be stored permanently in the [shared objects memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). An instance of a shared memory-enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception is raised only if the used data type is unknown to the method DETACH\_COMMIT in the shared objects memory when the method is executed. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types in ABAP Dictionary is possible either.

The opportunity to store data references in closed area instance versions makes it possible (from Release 7.0) to store not only instances of classes, but also [anonymous data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm) of the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) as [shared objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_glosry.htm "Glossary Entry").

Modification 2

Waiting Time for Change Locks

From Release 7.0, a waiting period can be passed to the parameter WAIT\_TIME for the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the [area class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_class_glosry.htm "Glossary Entry") and for MULTI\_ATTACH in CL\_SHM\_AREA.