  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SHIFT - Quick reference

[Reference](javascript:call_link\('abapshift.htm'\))

Syntax

SHIFT dobj *\[* *{* *\[* *{*BY num PLACES*}* *|* *{*UP TO substring*}* *\]*
                 *\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]* *}*
           *|* *{* *{*LEFT DELETING LEADING*}*
             *|* *{*RIGHT DELETING TRAILING*}* mask*}* *\]*
           *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

Moves characters or bytes in a character string or byte string dobj.

Additions

-   [BY num PLACES](javascript:call_link\('abapshift_places.htm'\))
    Moves the characters or bytes by num.
    
-   [UP TO substring](javascript:call_link\('abapshift_places.htm'\))
    Moves the characters or bytes up to the substring specified in substring.
    
-   [*\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]*](javascript:call_link\('abapshift_direction.htm'\))
    Moves the characters or bytes to the left or right. CIRCULAR inserts characters pushed out of the screen on the other side.
    
-   [*{*LEFT DELETING LEADING*}**|**{*RIGHT DELETING TRAILING*}* mask](javascript:call_link\('abapshift_deleting.htm'\))
    Moves the characters or bytes by one position to the left or the right until the content of the first or last position in dobj is displayed in pattern.
    
-   [IN *{*CHARACTER*|*BYTE*}* MODE](javascript:call_link\('abapshift.htm'\))
    Specifies character string or byte string processing.