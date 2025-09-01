---
title: "LOOP AT SCREEN - Short Form"
description: |
  Obsolete Syntax LOOP AT SCREEN. ... ENDLOOP. Effect This is a short form of the statement LOOP AT SCREEN INTO screen.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) ... ENDLOOP.(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm)
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_at_screen_obsolete.htm"
abapFile: "abenloop_at_screen_obsolete.htm"
keywords: ["loop", "do", "try", "data", "internal-table", "abenloop", "screen", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_obsolete.htm) →  [Obsolete ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_obsolet.htm) → 

LOOP AT SCREEN - Short Form

Obsolete Syntax

LOOP AT SCREEN.
  ...
ENDLOOP.

Effect

This is a short form of the statement

[LOOP AT SCREEN INTO screen.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm)
  ...
[ENDLOOP.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Notes

-   The [long form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) with an explicitly declared work area should be used instead of the short form.

-   The short form of the statement LOOP AT SCREEN behaves like the statement [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab.htm) in a loop across an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"), where the built-in structure is used as the header line.