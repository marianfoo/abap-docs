---
title: "SET SCREEN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen_shortref.htm) Syntax SET SCREEN dynnr. Effect This statement sets the dynpro(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm 'Glossary Entry') with the dynpro number(https
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen.htm"
abapFile: "abapset_screen.htm"
keywords: ["do", "while", "if", "try", "catch", "data", "abapset", "screen"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_abap_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20SCREEN%2C%20ABAPSET_SCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen_shortref.htm)

Syntax

SET SCREEN dynnr.

Effect

This statement sets the [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_number_glosry.htm "Glossary Entry") specified in dynnr as the [next dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the current dynpro. dynnr expects a data object of the type n and the length 4. It must contain either the dynpro number of a dynpro in the [main program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_group_glosry.htm "Glossary Entry") or the value 0, otherwise an uncatchable exception is raised. The specified next dynpro overwrites the previously defined next dynpro.

The next dynpro is called automatically when the end of [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") processing is reached for the current dynpro. If the dynpro number of the next dynpro is 0, the current dynpro sequence is ended.

Hint

There is always a next dynpro defined while a dynpro is being processed. After a dynpro is called, the next dynpro whose properties are defined statically applies, which can be overwritten using the statement SET SCREEN for as long as the current dynpro is being processed.