---
title: "Obsolete Statement Structuring"
description: |
  The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes: -   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after literals(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentokenization_obsolete.htm"
abapFile: "abentokenization_obsolete.htm"
keywords: ["do", "if", "class", "abentokenization", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensyntax_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Statement Structuring, ABENTOKENIZATION_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.