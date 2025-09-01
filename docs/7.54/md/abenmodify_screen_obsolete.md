---
title: "MODIFY SCREEN - Short Form"
description: |
  Obsolete Syntax MODIFY SCREEN. Effect This is a short form of the statement MODIFY SCREEN FROM screen.(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_screen.htm) The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. T
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmodify_screen_obsolete.htm"
abapFile: "abenmodify_screen_obsolete.htm"
keywords: ["do", "if", "data", "abenmodify", "screen", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_obsolete.htm) →  [Obsolete ABAP Statements for Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_obsolet.htm) → 

MODIFY SCREEN - Short Form

Obsolete Syntax

MODIFY SCREEN.

Effect

This is a short form of the statement

[MODIFY SCREEN FROM screen.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_screen.htm)

The short form uses a structure with the name screen implicitly instead of an explicitly declared work area wa. This is either the obsolete built-in structure [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_structure_obsolete.htm) or a structure declared in the current context called screen, which must have the data type SCREEN.

Note

The [long form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_screen.htm) with an explicitly declared work area should be used instead of the short form.