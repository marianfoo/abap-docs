  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

area class

[Final](javascript:call_link\('abenfinal_glosry.htm'\) "Glossary Entry") global [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"), whose instances are used as [area handles](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") for [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"). The [attributes](javascript:call_link\('abenattribute_glosry.htm'\) "Glossary Entry") of the instances of an area class represent the properties of an [area](javascript:call_link\('abenarea_glosry.htm'\) "Glossary Entry"). The [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of an area class are used to access the area. All area classes are [subclasses](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry") of [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)). When creating areas, area classes of identical names are generated as subclasses of [CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\)). A special predefined area class is [CL\_IMODE\_AREA](javascript:call_link\('abenshm_cl_imode_area.htm'\)), whose instance represents the area handle for the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of a program.

[→ More](javascript:call_link\('abenshm_area_class.htm'\))