---
title: "update_function_module_glosry"
description: |
  update_function_module_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm"
abapFile: "abenupdate_function_module_glosry.htm"
keywords: ["select", "update", "do", "if", "try", "data", "abenupdate", "function", "module", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

update function module

[Function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") for which the property update module is selected in [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry"). It is the basis of the [update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry") function. An update function module generally performs modifying database accesses and the statement [CALL FUNCTION ... IN UPDATE TASK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_update.htm) can be used to register it for execution later with the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm). When an update function module is created it is assigned either a high or low priority level.