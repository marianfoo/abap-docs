  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPLACE%20substring%20WITH%2C%20ABAPREPLACE_PATTERN_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPLACE substring WITH - Short Reference

[Reference](javascript:call_link\('abapreplace_obsolete.htm'\))

Syntax

REPLACE substring WITH new INTO dobj
        *\[*IN *{*BYTE*|*CHARACTER*}* MODE*\]*
        *\[*LENGTH len*\]*.

Effect

Obsolete: Searches for a character string or byte string substring in the variable dobj and replaces it with the content of new.

Additions   

-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
-   LENGTH len
    Uses only the first len characters or bytes from substring for searches.