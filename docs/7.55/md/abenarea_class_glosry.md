  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

area class

[Final](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfinal_glosry.htm "Glossary Entry") global [class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_glosry.htm "Glossary Entry") whose instances are used as [area handles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_handle_glosry.htm "Glossary Entry") for [shared objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_objects_glosry.htm "Glossary Entry"). The [attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenattribute_glosry.htm "Glossary Entry") of the instances of an area class represent the properties of an [area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_glosry.htm "Glossary Entry"). The [methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_glosry.htm "Glossary Entry") of an area class are used to access the area. All area classes are [subclasses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubclass_glosry.htm "Glossary Entry") of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_abap_memory_area.htm). When creating areas, area classes of the same name are generated as subclasses of [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm). A special predefined area class is [CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_imode_area.htm), whose instance represents the area handle for the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") of a program.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm)