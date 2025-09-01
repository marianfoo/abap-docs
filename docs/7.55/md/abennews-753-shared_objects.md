  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-753.htm) → 

Shared Objects in Release 7.53

[1\. Cross-server invalidations and releases](#!ABAP_MODIFICATION_1@1@)

Modification 1

Cross-Server Invalidations and Releases

Until now, cross-server invalidations and releases of [area instance versions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") were only possible for [transactional areas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_basic_properties.htm). From Release 7.53, cross-server invalidations and releases can be performed for all areas with the Application Server [area binding](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_fixed_properties.htm) by using the associated parameter AFFECT\_SERVER of the methods INVALIDATE\_... and FREE\_... of the [area class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_class_glosry.htm "Glossary Entry") in question. The parameter AFFECT\_SERVER is added to the methods of existing area classes when a new generation is performed in transaction SHMA.