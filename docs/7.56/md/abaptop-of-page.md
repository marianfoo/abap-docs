---
title: "TOP-OF-PAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptop-of-page_shortref.htm) Syntax TOP-OF-PAGE DURING LINE-SELECTION. Addition: ... DURING LINE-SELECTION(#!ABAP_ONE_ADD@1@) Effect This statement defines an event block whose event is raised by the ABAP runtim
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptop-of-page.htm"
abapFile: "abaptop-of-page.htm"
keywords: ["select", "do", "if", "try", "class", "abaptop", "page"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_interactive.htm) → 

TOP-OF-PAGE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptop-of-page_shortref.htm)

Syntax

TOP-OF-PAGE *\[*DURING LINE-SELECTION*\]*.

Addition:

[... DURING LINE-SELECTION](#!ABAP_ONE_ADD@1@)

Effect

This statement defines an event block whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") when a list is created when a new page begins, that is, immediately before the first line on a new page is output. All list output produced in the event block is placed below the standard page header of the list. It is not possible to output lines than are available on the page within the event block. The statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page.htm) is ignored within this event block.

All output written to the list in the event block is part of the [page header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpage_header_glosry.htm "Glossary Entry") of the current list page. The top displayed page header cannot be moved when scrolling vertically in a list displayed on the screen.

For each TOP-OF-PAGE event, the placeholders "&1" - "&9" are replaced by the content of the system fields sy-tvar0 - sy-tvar9 in the standard header and the column headers of the standard page header when a basic list is created. Values can be assigned to these system fields in the program.

Addition   

... DURING LINE-SELECTION

Effect

If no addition is specified, an event block is raised for the event TOP-OF-PAGE when a basic list is created. If the addition DURING LINE-SELECTION is specified, an event block is raised for the corresponding events when details lists are created. System fields like sy-lsind must be used to distinguish between the individual details lists.

Continue
![Example](exa.gif "Example") [Lists - Page Header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_top_of_page_abexa.htm)