  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) → 

Statements for Character String and Byte String Processing

The following table shows the key words for character string and byte string processing and the processes supported by these statements.

Keyword

Character String Processing

Byte String Processing

[CONCATENATE](javascript:call_link\('abapconcatenate.htm'\))

X

X

[FIND](javascript:call_link\('abapfind.htm'\))

X

X

[REPLACE](javascript:call_link\('abapreplace.htm'\))

X

X

[SHIFT](javascript:call_link\('abapshift.htm'\))

X

X

[SPLIT](javascript:call_link\('abapsplit.htm'\))

X

X

[CONDENSE](javascript:call_link\('abapcondense.htm'\))

X

\-

[CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\))

X

\-

[OVERLAY](javascript:call_link\('abapoverlay.htm'\))

X

\-

[TRANSLATE](javascript:call_link\('abaptranslate.htm'\))

X

\-

[WRITE TO](javascript:call_link\('abapwrite_to.htm'\))

X

\-

[SET BIT](javascript:call_link\('abapset_bit.htm'\))

\-

X

[GET BIT](javascript:call_link\('abapget_bit.htm'\))

\-

X

There is a strict split between character string processing and byte string processing. Each of the key words in the table that supports both character string and byte string processing has the optional addition

... IN *{*CHARACTER*|*BYTE*}* MODE ...

This addition defines which processing is used. If this addition is not specified, character string processing is used in these statements.

Notes

-   In most cases, [expressions and functions for string processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) can be used instead of the above statements for string processing. These have the advantage that expressions can be specified for all operands, which is only possible to a very limited extent in the above statements.

-   As well as the statements shown here, a range of [obsolete statements for character and byte string processing](javascript:call_link\('abencharacter_string_obsolete.htm'\)) exists.

Continue
[CONCATENATE](javascript:call_link\('abapconcatenate.htm'\))
[FIND](javascript:call_link\('abapfind.htm'\))
[REPLACE](javascript:call_link\('abapreplace.htm'\))
[SHIFT](javascript:call_link\('abapshift.htm'\))
[SPLIT](javascript:call_link\('abapsplit.htm'\))
[CONDENSE](javascript:call_link\('abapcondense.htm'\))
[CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\))
[OVERLAY](javascript:call_link\('abapoverlay.htm'\))
[TRANSLATE](javascript:call_link\('abaptranslate.htm'\))
[WRITE - TO](javascript:call_link\('abapwrite_to.htm'\))
[SET BIT](javascript:call_link\('abapset_bit.htm'\))
[GET BIT](javascript:call_link\('abapget_bit.htm'\))