---
title: "The Constant space"
description: |
  The program-global constant space has the data type c, length 1, and contains a blank character. Hints -   For the constant space, trailing blanks are ignored in most operand positions, as for all character-like fields with fixed lengths. The constant space should therefore not be used in such posit
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspace.htm"
abapFile: "abenspace.htm"
keywords: ["do", "if", "try", "data", "types", "abenspace"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in.htm) →  [Built-In Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: The Constant space, ABENSPACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

The Constant space

The program-global constant space has the data type c, length 1, and contains a blank character.

Hints

-   For the constant space, trailing blanks are ignored in most operand positions, as for all character-like fields with fixed lengths. The constant space should therefore not be used in such positions.
-   The name space is reserved and cannot be used in any context for other data objects, structure components, attributes, or formal parameters. An exception to this are the obsolete [anonymous components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenanonymous_components.htm) of structures.

Example

The result of the following [concatenation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm) is a string with exactly one blank. The blanks in the first two spaces specified are ignored. Blanks are only respected after SEPARATED BY. Except for space, this example also applies to a [text field literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_field_literal_glosry.htm "Glossary Entry") ' ' with exactly one blank character.

DATA text TYPE string.
CONCATENATE space space INTO text SEPARATED BY space.