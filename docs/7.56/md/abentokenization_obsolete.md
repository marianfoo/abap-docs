---
title: "Obsolete Statement Structuring"
description: |
  The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes: -   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after literals(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentokenization_obsolete.htm"
abapFile: "abentokenization_obsolete.htm"
keywords: ["do", "if", "class", "abentokenization", "obsolete"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.