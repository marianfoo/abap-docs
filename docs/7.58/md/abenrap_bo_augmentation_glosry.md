---
title: "RAP BO augmentation"
description: |
  A RAP BO operation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm 'Glossary Entry') addition that must be implemented by an ABP handler method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm 'Glossary Entry'
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_augmentation_glosry.htm"
abapFile: "abenrap_bo_augmentation_glosry.htm"
keywords: ["do", "if", "try", "method", "data", "abenrap", "augmentation", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BO%20augmentation%2C%20ABENRAP_BO_AUGMENTATION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BO augmentation

A [RAP BO operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") addition that must be implemented by an [ABP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"). Augmentation is defined in the [projection behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") for [RAP standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_standard_operation_glosry.htm "Glossary Entry").

The implementation is called when a [modify request](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") reaches the [business object projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") to add data to the request before it is passed to the corresponding handler of the [projected business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_augment_projection.htm)