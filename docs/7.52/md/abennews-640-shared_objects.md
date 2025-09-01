  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-640.htm) → 

Introduction of Shared Objects in Release 6.40

[Shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry") are data objects (not yet in Release 6.40) and instances of classes in [area instances](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm "Glossary Entry"), to which all programs in an [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry") have access.

For the following statements, additions can be used when working with shared objects:

[CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass.htm) ... [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm) ...

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm) ... [AREA HANDLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object_area_handle.htm)

Addition AREA HANDLE for CREATE DATA is not yet available in the first delivery of Release 6.40.

Transaction SHMA manages the [areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_glosry.htm "Glossary Entry") for shared objects.

For more details, see [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm).