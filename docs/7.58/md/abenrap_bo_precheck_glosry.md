---
title: "RAP BO precheck"
description: |
  A RAP BO operation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm 'Glossary Entry') addition that must be implemented by a RAP handler method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm 'Glossary Entry')
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_precheck_glosry.htm"
abapFile: "abenrap_bo_precheck_glosry.htm"
keywords: ["do", "if", "try", "method", "abenrap", "precheck", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BO%20precheck%2C%20ABENRAP_BO_PRECHECK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BO precheck

A [RAP BO operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") addition that must be implemented by a [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry"). A precheck is defined for operations in the [behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of a base business object or in the [projection business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry").

The implementation method is called before a modify request is executed on the [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") to prevent unwanted changes from reaching the transactional buffer.

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)