---
title: "SELECTION-SCREEN, TABBED BLOCK - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_tabbed.htm) Syntax SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES NO INTERVALS. ... SELECTION-SCREEN END OF BLOCK tblock. Effect Defines a tabstrip(https://help.sap.com/doc/abapdocu_758_i
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_botb_shortref.htm"
abapFile: "abapselection-screen_botb_shortref.htm"
keywords: ["select", "do", "if", "try", "abapselection", "screen", "botb", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20TABBED%20BLOCK%2C%20ABAPSELECTION-SCREEN_BOTB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SELECTION-SCREEN, TABBED BLOCK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_tabbed.htm)

Syntax

SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK tblock.

Effect

Defines a [tabstrip](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentabstrip_control_glosry.htm "Glossary Entry") control or [subscreen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry") area named tblock on the current [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Addition  

-   FOR n LINES
    Defines the number of lines in the tabstrip control in n.
-   NO INTERVALS
    Creates a narrower area.