---
title: "SET TITLEBAR, List"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_shortref.htm) Syntax SET TITLEBAR title OF PROGRAM prog WITH text1 ... text9. Additions: 1. ... OF PROGRAM prog(#!ABAP_ADDITION_1@1@) 2. ... WITH text1 ... text9(#!ABAP_ADDITION_2@2@)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_list.htm"
abapFile: "abapset_titlebar_list.htm"
keywords: ["do", "if", "try", "class", "abapset", "titlebar", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Display](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlists_displayed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20TITLEBAR%2C%20List%2C%20ABAPSET_TITLEBAR_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET TITLEBAR, List

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_shortref.htm)

Syntax

SET TITLEBAR title *\[*OF PROGRAM prog*\]*
                   *\[*WITH text1 ... text9*\]*.

Additions:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... WITH text1 ... text9](#!ABAP_ADDITION_2@2@)

Effect

In list processing, this statement sets the GUI title specified in title for the display window of the current list level and all following list levels up to the next statement SET TITLEBAR. The statement has mostly the same syntax and semantics as for [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_dynpro.htm).

Unlike in [screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") of dynpros, each list level remains automatically linked with the title set for it. When the display of a higher list level is switched to the display of a lower list level, the latter is displayed with the title that was set for it.

Addition 1   

...  OF PROGRAM prog

Addition 2   

... WITH text1 ... text9

Effect

As for [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_titlebar_dynpro.htm).