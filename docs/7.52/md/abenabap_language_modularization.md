---
title: "Modularization Statements"
description: |
  Each ABAP program is divided into processing blocks(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm 'Glossary Entry'). Each accessible statement of an ABAP program that does not belong to the global declaration part of the program belongs to a processing
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm"
abapFile: "abenabap_language_modularization.htm"
keywords: ["do", "while", "try", "method", "data", "abenabap", "language", "modularization"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) → 

Modularization Statements

Each ABAP program is divided into [processing blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). Each accessible statement of an ABAP program that does not belong to the global declaration part of the program belongs to a [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry").

The possible processing blocks are:

-   [Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_procedures.htm)
    ABAP statements are used to process procedures. Possible [procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") are: [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") , [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry"), and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry")

-   [Dialog modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodule.htm)
    Dialog modules are called from [dynpro flow logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry").

-   [Event blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_blocks.htm)
    The processing of event blocks is triggered by [events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_glosry.htm "Glossary Entry") in the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry").

Processing blocks can be defined in any order in the source code of an ABAP program. Non-declarative statements that appear between or after closed processing blocks cannot be accessed and can never be executed. The syntax check reports dead source code of this nature as errors. Declarative statements that appear between or after closed processing blocks are part of the global data declarations of an ABAP program and are visible in all subsequent processing blocks.

[Macros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmacro_glosry.htm "Glossary Entry") and [include programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninclude_program_glosry.htm "Glossary Entry") can be used to [modularize source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_includes.htm) while avoiding processing blocks.

Programming Guideline

[ABAP Objects as a Programming Model](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline")

Continue
[Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_procedures.htm)
[Dialog Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_module.htm)
[Event Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_blocks.htm)
[Source Code Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_includes.htm)