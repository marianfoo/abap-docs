  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes for Release 7.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70.htm) → 

Shared Objects to Release 7.0

[1\. Data references in the Shared Objects Memory](#!ABAP_MODIFICATION_1@1@)

[2\. Waiting periods for change locks](#!ABAP_MODIFICATION_2@2@)

Modification 1

Data references in the Shared Objects Memory

Since Release 7.0, data references that point to data objects of the same [area instance version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"), can be stored permanently in the [Shared Objects Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). An instance of a shared memory enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception only occurs if the used data type is unknown to the DETACH\_COMMITmethod in the Shared Objects Memory during execution. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types of the ABAP Dictionary is possible as well.

The opportunity to store data references in closed area instance versions makes it possible - since release 7.0 - to store not only instances of classes, but also [anonymous data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") with the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_area_handle.htm) of the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) as [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry").

Modification 2

Waiting period for change locks

Since release 7.0, a waiting period can be transferred to the parameter WAIT\_TIME for the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the [area class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_class_glosry.htm "Glossary Entry"). The same applies for MULTI\_ATTACH of CL\_SHM\_AREA.