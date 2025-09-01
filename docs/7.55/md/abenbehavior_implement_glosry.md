---
title: "ABAP behavior implementation"
description: |
  An ABAP Behavior implementation implements a RAP Business Object behavior(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm 'Glossary Entry'). The behavior of a RAP business object(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosr
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_implement_glosry.htm"
abapFile: "abenbehavior_implement_glosry.htm"
keywords: ["do", "try", "class", "abenbehavior", "implement", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

ABAP behavior implementation

An ABAP Behavior implementation implements a [RAP Business Object behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry"). The behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") is implemented in [local classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_class_glosry.htm "Glossary Entry") of an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") as defined by a [CDS behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). There can be [ABP handler](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class_glosry.htm "Glossary Entry") and [ABP saver classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class_glosry.htm "Glossary Entry"). The local classes are called by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry"), when a RAP BO is accessed.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm)