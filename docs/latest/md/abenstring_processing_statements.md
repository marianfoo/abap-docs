---
title: "Statements for Character String and Byte String Processing"
description: |
  The following table shows the key words for character and byte string processing and the processing supported by these statements. Keyword Character String Processing Byte String Processing CONCATENATE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm) X X FIND(
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_statements.htm"
abapFile: "abenstring_processing_statements.htm"
keywords: ["do", "if", "case", "data", "abenstring", "processing", "statements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Statements%20for%20Character%20String%20and%20Byte%20String%20Processing%2C%20ABENSTRING_PROCESSING_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion%20for%20improvement:)

Statements for Character String and Byte String Processing

The following table shows the key words for character and byte string processing and the processing supported by these statements.

Keyword

Character String Processing

Byte String Processing

[CONCATENATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm)

X

X

[FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm)

X

X

[REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm)

X

X

[SHIFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapshift.htm)

X

X

[SPLIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsplit.htm)

X

X

[CONDENSE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcondense.htm)

X

\-

[CONVERT TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm)

X

\-

[OVERLAY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapoverlay.htm)

X

\-

[TRANSLATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptranslate.htm)

X

\-

[WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm)

X

\-

[SET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_bit.htm)

\-

X

[GET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_bit.htm)

\-

X

There is a strict split between character string processing and byte string processing. Each of the key words in the table that supports both character string and byte string processing has the optional addition

... IN *{*CHARACTER*|*BYTE*}* MODE ...

This addition determines which processing is used. If this addition is not specified, character string processing is performed in these statements.

Hints

-   In most cases, [expressions and functions for character string processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) can be used instead of the above statements for character string processing. These have the advantage that expressions can be specified for all operands, which is only possible to a very limited extent in the above statements.
-   In addition to the statements shown here, there is a range of [obsolete statements for character and byte string processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_string_obsolete.htm).

Continue
[CONCATENATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm)
[FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm)
[REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm)
[SHIFT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapshift.htm)
[SPLIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsplit.htm)
[CONDENSE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcondense.htm)
[CONVERT TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm)
[OVERLAY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapoverlay.htm)
[TRANSLATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptranslate.htm)
[WRITE, TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm)
[SET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_bit.htm)
[GET BIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_bit.htm)