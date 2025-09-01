---
title: "function_module_exit_glosry"
description: |
  function_module_exit_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_module_exit_glosry.htm"
abapFile: "abenfunction_module_exit_glosry.htm"
keywords: ["do", "if", "try", "abenfunction", "module", "exit", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: function module exit, ABENFUNCTION_MODULE_EXIT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

function module exit

[Customer exit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencustomer_exit_glosry.htm "Glossary Entry") for [ABAP programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_glosry.htm "Glossary Entry") in the form of empty or partially implemented [function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_module_glosry.htm "Glossary Entry") delivered with the standard SAP system. Integrated into ABAP programs using the statement [CALL CUSTOMER-FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_customer-function.htm). The function module [interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintf_gen_glosry.htm "Glossary Entry") are predefined by SAP. The implementation can be empty or partially predefined. The customer must fully implement and activate them using [transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry") CMOD. Function module exits should be replaced by [BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_glosry.htm "Glossary Entry").