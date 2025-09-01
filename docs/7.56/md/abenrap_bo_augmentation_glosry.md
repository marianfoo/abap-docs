  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

RAP BO augmentation

A [RAP BO operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") addition that must be implemented by an [ABP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"). Augmentation is defined in the [projection behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") for [RAP standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_standard_operation_glosry.htm "Glossary Entry").

The implementation is called when a [modify request](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") reaches the [business object projection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") to add data to the request before it is passed to the corresponding handler of the [projected business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)