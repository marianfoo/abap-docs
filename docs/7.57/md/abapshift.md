  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SHIFT, ABAPSHIFT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improve
ment:)

SHIFT

[Short Reference](javascript:call_link\('abapshift_shortref.htm'\))

Syntax

SHIFT dobj *\[* *{**\[* [places](javascript:call_link\('abapshift_places.htm'\))*\]**\[* [direction](javascript:call_link\('abapshift_direction.htm'\))*\]**}* *|* [deleting](javascript:call_link\('abapshift_deleting.htm'\)) *\]*
           *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Addition:

[... IN *{*CHARACTER*|*BYTE*}* MODE](#!ABAP_ONE_ADD@1@)

Effect

This statement shifts the content of a variable dobj. In [places](javascript:call_link\('abapshift_places.htm'\)), the number of places to be shifted can be specified and in [direction](javascript:call_link\('abapshift_direction.htm'\)), the direction of the shift. In [deleting](javascript:call_link\('abapshift_deleting.htm'\)), the characters to be deleted from the data object by the shift can be specified. If no additions are specified, the content is shifted to the left by one place.

By default, free places created by the shift are filled with blanks or hexadecimal 0 for data objects of fixed length, depending on the processing method. Data objects of type string or xstring are truncated by the number of shifted places when shifted to the left and lengthened by the number of shifted places when shifted to the right.

In character string processing, the trailing blanks are respected for data objects dobj of fixed length.

Hint

To shift a string in an operand position, [shift functions](javascript:call_link\('abenshift_functions.htm'\)) that cover part of the functions of the statement SHIFT can be used.

Example

The shortest form of the statement SHIFT. The content of str is moved one place to the left.

DATA(str) = \`0123456789\`.
SHIFT str.
cl\_demo\_output=>display( str ).

Addition   

... IN *{*CHARACTER*|*BYTE*}* MODE

Effect

The optional addition IN *{*CHARACTER*|*BYTE*}* MODE determines whether [character string or byte string processing](javascript:call_link\('abenstring_processing_statements.htm'\)) is performed. If the addition is not specified, character string processing is performed. Depending on the processing method, dobj, [substring](javascript:call_link\('abapshift_places.htm'\)) and [mask](javascript:call_link\('abapshift_deleting.htm'\)) must be character-like or byte-like.

Example

Shifting a byte string one byte to the left.

DATA(xstr) = CONV xstring( \`AABBCCDDEEFF\` ).
SHIFT xstr IN BYTE MODE.
cl\_demo\_output=>display( xstr ).

Continue
[SHIFT, places](javascript:call_link\('abapshift_places.htm'\))
[SHIFT, direction](javascript:call_link\('abapshift_direction.htm'\))
[SHIFT, deleting](javascript:call_link\('abapshift_deleting.htm'\))