  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.40](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Introduction%20of%20Shared%20Objects%20in%20ABAP%20Release%206.40%2C%20ABENNEWS-640-SHARED_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

Introduction of Shared Objects in ABAP Release 6.40

[Shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry") are data objects (not yet in ABAP release 6.40) and instances of classes in [area instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry"), to which all programs in an [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") have access.

For the following statements, additions can be used when working with shared objects:

[CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass.htm) ... [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm) ...

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object.htm) ... [AREA HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_area_handle.htm)

Addition AREA HANDLE for CREATE DATA is not yet available in the first delivery of ABAP release 6.40.

Transaction SHMA manages the [areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_glosry.htm "Glossary Entry") for shared objects.

For more details, see [Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm).