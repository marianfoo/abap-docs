---
title: "update_function_module_glosry"
description: |
  update_function_module_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_glosry.htm"
abapFile: "abenupdate_function_module_glosry.htm"
keywords: ["update", "do", "try", "data", "abenupdate", "function", "module", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

update function module

[Function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry") for which the property update module is marked in the [Function Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). It is the basis of the [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry") function. An update function module generally contains changing database accesses and the statement [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_update.htm) can be used to register it for later execution with the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm). When an update function module is created, it is assigned either a high or low priority level.