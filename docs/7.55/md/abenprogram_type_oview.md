---
title: "ABAP Program Types"
description: |
  The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and it can be executed in the ABAP runtime environment. The following table shows all program types for standalone programs (compilation units(https://help.sap.com/doc/abapdoc
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_oview.htm"
abapFile: "abenprogram_type_oview.htm"
keywords: ["select", "do", "if", "try", "method", "class", "types", "abenprogram", "type", "oview"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) → 

ABAP Program Types

The type of an ABAP program determines, among other things, which declarations and processing blocks a program can contain and it can be executed in the ABAP runtime environment.

The following table shows all program types for standalone programs ([compilation units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry")) and how they affect their properties:

Program Type

Execution

Global Declarations

Processing Blocks

Dynpros

Text Pools

[Executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry")

Statement [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm) or call of a dynpro or selection screen using a [transaction code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except function modules

Yes

Yes

[Class pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry")

[Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls.htm) using a visible method or using a [transaction code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry")

A global class of the class library, local interfaces and classes, statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm)

Methods only

No

Yes

[Function pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry") or [function group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_group_glosry.htm "Glossary Entry")

Call of a function module using [CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function.htm) or of a dynpro is called using a [transaction code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all other declarative statements

All except event blocks for [reporting events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_event_glosry.htm "Glossary Entry")

Yes

Yes

[Interface pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_pool_glosry.htm "Glossary Entry")

None

A global interface of the class library

None

No

No

[Module pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodul_pool_glosry.htm "Glossary Entry")

Call of a dynpro using a [transaction code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry")

Local interfaces and classes, all declarative statements

All except function modules and event blocks for reporting events

Yes

Yes

[Subroutine pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_pool_glosry.htm "Glossary Entry")

External call of local procedures (subroutines or methods)

Local interfaces and classes, all other declarative statements

Event block [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm), subroutines, methods

No

Yes

[Type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") (also [type group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_group_glosry.htm "Glossary Entry"))

None

Statements [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) and [CONSTANTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconstants.htm)

None

No

No

The second column of the table shows the type of execution for which the program type is mainly designated. The third column shows which declarations can be made in the [global declaration part](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenglobal_declaration_sect_glosry.htm "Glossary Entry") of a program with the specified type. The fourth column indicates which [processing blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocessing_block_glosry.htm "Glossary Entry") the program can contain. The fifth indicates whether independent [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") are supported. The final column indicates whether independent [text pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_pool_glosry.htm "Glossary Entry") can be created.

Programming Guideline

[ABAP Program Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_guidl.htm "Guideline")