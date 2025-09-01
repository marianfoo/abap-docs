---
title: "Statements for Character String and Byte String Processing"
description: |
  The following table shows the key words for character and byte string processing and the processing supported by these statements. Keyword Character String Processing Byte String Processing CONCATENATE(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm) X X FIND(https
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm"
abapFile: "abenstring_processing_statements.htm"
keywords: ["do", "if", "case", "data", "abenstring", "processing", "statements"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Statements for Character String and Byte String Processing, ABENSTRING_PROCESSING_STA
TEMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Statements for Character String and Byte String Processing

The following table shows the key words for character and byte string processing and the processing supported by these statements.

Keyword

Character String Processing

Byte String Processing

[CONCATENATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm)

X

X

[FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)

X

X

[REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm)

X

X

[SHIFT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm)

X

X

[SPLIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)

X

X

[CONDENSE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcondense.htm)

X

\-

[CONVERT TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)

X

\-

[OVERLAY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapoverlay.htm)

X

\-

[TRANSLATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate.htm)

X

\-

[WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm)

X

\-

[SET BIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_bit.htm)

\-

X

[GET BIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit.htm)

\-

X

There is a strict split between character string processing and byte string processing. Each of the key words in the table that supports both character string and byte string processing has the optional addition

... IN *{*CHARACTER*|*BYTE*}* MODE ...

This addition determines which processing is used. If this addition is not specified, character string processing is performed in these statements.

Hints

-   In most cases, [expressions and functions for character string processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) can be used instead of the above statements for character string processing. These have the advantage that expressions can be specified for all operands, which is only possible to a very limited extent in the above statements.
-   In addition to the statements shown here, there is a range of [obsolete statements for character and byte string processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_obsolete.htm).

Continue
[CONCATENATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm)
[FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm)
[REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm)
[SHIFT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm)
[SPLIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)
[CONDENSE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcondense.htm)
[CONVERT TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)
[OVERLAY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapoverlay.htm)
[TRANSLATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate.htm)
[WRITE, TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm)
[SET BIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_bit.htm)
[GET BIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit.htm)