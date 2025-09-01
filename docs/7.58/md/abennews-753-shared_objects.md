  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.53](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-SHARED_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Shared Objects in ABAP Release 7.53

Modification

Cross-Server Invalidations and Releases

Until now, cross-server invalidations and releases of [area instance versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") were only possible for [transactional areas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_basic_properties.htm). From ABAP release 7.53, cross-server invalidations and releases can be performed for all areas with the Application Server [area binding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_fixed_properties.htm) by using the associated parameter AFFECT\_SERVER of the methods INVALIDATE\_... and FREE\_... of the [area class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_class_glosry.htm "Glossary Entry") in question. The parameter AFFECT\_SERVER is added to the methods of existing area classes when a new generation is performed in transaction SHMA.