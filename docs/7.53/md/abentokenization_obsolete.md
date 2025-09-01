---
title: "Obsolete Statement Structuring"
description: |
  The following syntax forms are obsolete. They are forbidden within ABAP Objects, and outside of classes they cause the syntax check to issue warnings: -   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after literals(https://help.sap.com/doc/abapdocu_753_inde
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentokenization_obsolete.htm"
abapFile: "abentokenization_obsolete.htm"
keywords: ["do", "if", "class", "abentokenization", "obsolete"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyntax_obsolete.htm) → 

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects, and outside of classes they cause the syntax check to issue warnings:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) can be omitted.

-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that directly follows a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as not existing.