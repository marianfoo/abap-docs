---
title: "SET SCREEN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_screen_shortref.htm) Syntax SET SCREEN dynnr. Effect This statement defines the dynpro(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm 'Glossary Entry') with the dynpro number(ht
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_screen.htm"
abapFile: "abapset_screen.htm"
keywords: ["do", "while", "if", "try", "data", "abapset", "screen"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_abap_statements.htm) → 

SET SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_screen_shortref.htm)

Syntax

SET SCREEN dynnr.

Effect

This statement defines the [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") specified in dynnr as the [next dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennext_dynpro_glosry.htm "Glossary Entry") to be processed after the current dynpro. dynnr expects a data object of the type n and the length 4. It must contain either the dynpro number of a dynpro in the [main program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_group_glosry.htm "Glossary Entry") or the value 0; otherwise an unhandleable exception is raised. The specified next dynpro overwrites the previously defined next dynpro.

The next dynpro is called automatically when the end of [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing is reached for the current dynpro. If the dynpro number of the next dynpro is 0, the current dynpro sequence is ended.

Note

There is always a next dynpro defined while a dynpro is being processed. After a dynpro is called, the next dynpro whose properties are defined statically applies; this next dynpro can be overwritten using the statement SET SCREEN for as long as the current dynpro is being processed.