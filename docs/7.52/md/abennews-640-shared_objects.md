  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Introduction of Shared Objects in Release 6.40

[Shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") are data objects (not yet in Release 6.40) and instances of classes in [area instances](javascript:call_link\('abenarea_instance_glosry.htm'\) "Glossary Entry") in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), to which all programs in an [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") have access.

For the following statements, additions can be used when working with shared objects:

[CLASS](javascript:call_link\('abapclass.htm'\)) ... [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) ...

[CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) ... [AREA HANDLE](javascript:call_link\('abapcreate_object_area_handle.htm'\))

Addition AREA HANDLE for CREATE DATA is not yet available in the first delivery of Release 6.40.

Transaction SHMA manages the [areas](javascript:call_link\('abenarea_glosry.htm'\) "Glossary Entry") for shared objects.

For more details, see [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)).