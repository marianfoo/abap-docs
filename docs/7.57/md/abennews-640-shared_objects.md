  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Introduction of Shared Objects in Release 6.40, ABENNEWS-640-SHARED_OBJECTS, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Introduction of Shared Objects in Release 6.40

[Shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry") are data objects (not yet in Release 6.40) and instances of classes in [area instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry"), to which all programs in an [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") have access.

For the following statements, additions can be used when working with shared objects:

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) ... [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) ...

[CREATE OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object.htm) ... [AREA HANDLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_area_handle.htm)

Addition AREA HANDLE for CREATE DATA is not yet available in the first delivery of Release 6.40.

Transaction SHMA manages the [areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_glosry.htm "Glossary Entry") for shared objects.

For more details, see [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm).