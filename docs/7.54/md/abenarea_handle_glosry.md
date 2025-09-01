  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

area handle

Instance of an [area class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_class_glosry.htm "Glossary Entry"). An area handle allows an ABAP program to access an [area instance version](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry") and the [shared objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_objects_glosry.htm "Glossary Entry") stored there. An area handle is created by the static methods of its area class and is bound to an area instance version. Every attached area handle sets an [area lock](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_lock_glosry.htm "Glossary Entry") on the respective area instance version.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_area_instance_handle.htm)