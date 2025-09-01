  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) → 

Statements for Character String and Byte String Processing

The following table shows the key words for character and byte string processing and the processing supported by these statements.

Keyword

Character String Processing

Byte String Processing

[CONCATENATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconcatenate.htm)

X

X

[FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm)

X

X

[REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm)

X

X

[SHIFT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapshift.htm)

X

X

[SPLIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit.htm)

X

X

[CONDENSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcondense.htm)

X

\-

[CONVERT TEXT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_text.htm)

X

\-

[OVERLAY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapoverlay.htm)

X

\-

[TRANSLATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)

X

\-

[WRITE TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to.htm)

X

\-

[SET BIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_bit.htm)

\-

X

[GET BIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_bit.htm)

\-

X

There is a strict split between character string processing and byte string processing. Each of the key words in the table that supports both character string and byte string processing has the optional addition

... IN *{*CHARACTER*|*BYTE*}* MODE ...

This addition determines which processing is used. If this addition is not specified, character string processing is performed in these statements.

Hints

-   In most cases, [expressions and functions for character string processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) can be used instead of the above statements for character string processing. These have the advantage that expressions can be specified for all operands, which is only possible to a very limited extent in the above statements.
-   In addition to the statements shown here, there is a range of [obsolete statements for character and byte string processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharacter_string_obsolete.htm).

Continue
[CONCATENATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconcatenate.htm)
[FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm)
[REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm)
[SHIFT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapshift.htm)
[SPLIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsplit.htm)
[CONDENSE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcondense.htm)
[CONVERT TEXT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_text.htm)
[OVERLAY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapoverlay.htm)
[TRANSLATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptranslate.htm)
[WRITE, TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to.htm)
[SET BIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_bit.htm)
[GET BIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_bit.htm)