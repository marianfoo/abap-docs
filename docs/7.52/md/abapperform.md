---
title: "PERFORM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm) Syntax Forms General subroutine call(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_general.htm) 1. PERFORM subr_identifier(https://help.sap.com/doc/abapdocu_752_index
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform.htm"
abapFile: "abapperform.htm"
keywords: ["do", "if", "try", "method", "abapperform"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) → 

PERFORM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_shortref.htm)

Syntax Forms

[General subroutine call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_general.htm)
1\. PERFORM [subr\_identifier](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_form.htm) *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)*\]*.
[Registration of subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_subr.htm)
2\. PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* *{*ROLLBACK*}* *}*.

Effect

Calls or registers [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry").

Subroutines can be called both statically and dynamically and both internally and externally. Parameter passing can only be done statically. Furthermore, subroutines can be registered for execution at the end of an [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry").

Programming Guideline

[Do not implement in function modules and subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")

Note

Subroutines are [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm). Do not create new subroutines in new programs. Methods should be used instead. Subroutines created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.

Continue
[PERFORM - general](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_general.htm)
[PERFORM - parameter\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapperform_parameters.htm)