---
title: "PERFORM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_shortref.htm) Syntax Forms General Subroutine Call(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_general.htm) 1. PERFORM subr_identifier(https://help.sap.com/doc/abapdocu_756_index
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform.htm"
abapFile: "abapperform.htm"
keywords: ["do", "if", "try", "method", "abapperform"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencall_procedures.htm) → 

PERFORM

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_shortref.htm)

Syntax Forms

[General Subroutine Call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_general.htm)
1\. PERFORM [subr\_identifier](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_form.htm) *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_parameters.htm)*\]*.
[Registration of Subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_on_commit.htm)
2\. PERFORM subr ON *{* *{*COMMIT *\[*LEVEL idx*\]**}* *|* *{*ROLLBACK*}* *}*.

Effect

Calls or registers [subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_glosry.htm "Glossary Entry").

Subroutines can be called statically and dynamically, internally and externally. Parameters can only be passed if they are called statically. Furthermore, subroutines can be registered for execution at the end of an [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry").

Programming Guideline

[Do not implement in function modules and subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")

Hint

Subroutines are obsolete. No new subroutines should be created in new programs. Methods should be used instead. Subroutines that have been created in existing programs for internal modularization can continue to be called. Whenever possible, however, external subroutine calls from other programs should be avoided.

Continue
[PERFORM, general](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_general.htm)
[PERFORM, parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapperform_parameters.htm)