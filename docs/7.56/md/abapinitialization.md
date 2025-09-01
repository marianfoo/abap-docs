---
title: "INITIALIZATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization_shortref.htm) Syntax INITIALIZATION. Effect This event keyword defines an event block for initializing an executable program. The associated event is raised by the ABAP runtime framework(https://help.sa
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization.htm"
abapFile: "abapinitialization.htm"
keywords: ["select", "do", "try", "data", "abapinitialization"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_blocks.htm) →  [Reporting Events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_processing_blocks.htm) → 

INITIALIZATION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization_shortref.htm)

Syntax

INITIALIZATION.

Effect

This event keyword defines an event block for initializing an executable program. The associated event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm) of an [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), directly after LOAD-OF-PROGRAM and before the [selection screen processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") of any existing standard selection screen. Here, the input fields of the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be initialized only once, including those fields defined in the [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") linked with the program.

Hint

When an executable program defines a standard selection screen, it is called again by the ABAP runtime framework after it has been executed, whereby the event INITIALIZATION is raised again. However, the initialization of parameters or selection criteria of the selection screen no longer has any effect, since these are automatically filled with previous user entries on the selection screen during the [selection screen event](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") AT SELECTION-SCREEN OUTPUT. To initialize the selection screen explicitly for each call, the event AT SELECTION-SCREEN OUTPUT must be used.

Example

Prefills a parameter on the standard selection screen of an executable program when the event INITIALIZATION is raised.

PARAMETERS p\_langu TYPE pgl\_langu.
INITIALIZATION.
  p\_langu = sy-langu.