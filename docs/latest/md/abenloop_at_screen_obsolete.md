---
title: "LOOP AT SCREEN, Short Form"
description: |
  Obsolete Syntax LOOP AT SCREEN. ... ENDLOOP. Effect This is a short form of the statement LOOP AT SCREEN INTO screen.(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm) ... ENDLOOP.(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_s
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_screen_obsolete.htm"
abapFile: "abenloop_at_screen_obsolete.htm"
keywords: ["loop", "do", "if", "try", "data", "internal-table", "abenloop", "screen", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete ABAP Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20SCREEN%2C%20Short%20Form%2C%20ABENLOOP_AT_SCREEN_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT SCREEN, Short Form

Obsolete Syntax

LOOP AT SCREEN.
  ...
ENDLOOP.

Effect

This is a short form of the statement

[LOOP AT SCREEN INTO screen.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm)
  ...
[ENDLOOP.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Hints

-   The [long form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_screen.htm) with an explicitly declared work area should be used instead of the short form.
-   The short form of the statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) in a loop across an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), where the built-in structure is used as the header line.