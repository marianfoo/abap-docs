---
title: "Statements in the Dynpro Flow Logic"
description: |
  The dynpro flow logic is the procedural part of a dynpro(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm 'Glossary Entry'). It is created using an ABAP-like programming language in Screen Painter(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscre
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm"
abapFile: "abenabap_dynpros_dynpro_statements.htm"
keywords: ["loop", "do", "try", "data", "abenabap", "dynpros", "dynpro", "statements"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) → 

Statements in the Dynpro Flow Logic

The dynpro flow logic is the procedural part of a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"). It is created using an ABAP-like programming language in [Screen Painter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_painter_glosry.htm "Glossary Entry") on the Flow Logic tab page. The syntax rules of the dynpro flow logic are largely similar to the rules for ABAP. In particular, statements are ended using a period, chained statements can be formed, and the same rules apply for comments. In suitable positions, literals can be used whose syntax matches that of ABAP [literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral.htm) and whose value range is determined by the requirements of the current statement.

The dynpro flow logic, like ABAP programs, is structured from processing blocks. Possible processing blocks are the four event blocks for the dynpro events [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry"), [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry"), [POH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpov_glosry.htm "Glossary Entry"), which all start with the key word [PROCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpprocess.htm). These event blocks contain a small set of statements that are described in the following sections, and which offer the the following functions:

-   Call dialog modules of the ABAP program using [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpmodule.htm)

-   Control data transports to the ABAP program and handle [error messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") using [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) and [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm)

-   Execute loops using [table controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") with [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynploop.htm)

-   Call [subscreens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubscreen_glosry.htm "Glossary Entry") using [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpcall.htm)

The statements in the event blocks of the dynpro flow logic are normally processed sequentially. Branches result from error handling following input checks in dialog modules. Screen elements in table form are processed in loops.

Note

As well as the statements shown here, a range of [obsolete statements for dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_obsolet.htm) exists.

Continue
[PROCESS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpprocess.htm)
[MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpmodule.htm)
[FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm)
[CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm)
[Table Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_table_controls.htm)
[Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_subscreens.htm)