---
title: "SHIFT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm) Syntax SHIFT dobj    BY num PLACES  UP TO substring  LEFTRIGHT CIRCULAR    LEFT DELETING LEADING  RIGHT DELETING TRAILING mask  IN
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_shortref.htm"
abapFile: "abapshift_shortref.htm"
keywords: ["insert", "do", "if", "abapshift", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SHIFT, ABAPSHIFT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

SHIFT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm)

Syntax

SHIFT dobj *\[* *{* *\[* *{*BY num PLACES*}* *|* *{*UP TO substring*}* *\]*
                 *\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]* *}*
           *|* *{* *{*LEFT DELETING LEADING*}*
             *|* *{*RIGHT DELETING TRAILING*}* mask*}* *\]*
           *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

Moves characters or bytes in a character string or byte string dobj.

Additions   

-   [BY num PLACES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_places.htm)
    Moves the characters or bytes by num.
-   [UP TO substring](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_places.htm)
    Moves the characters or bytes up to the substring specified in substring.
-   [*\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_direction.htm)
    Moves the characters or bytes to the left or right. CIRCULAR inserts characters pushed out of the screen on the other side.
-   [*{*LEFT DELETING LEADING*}**|**{*RIGHT DELETING TRAILING*}* mask](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_deleting.htm)
    Moves the characters or bytes by one position to the left or the right as long as the content of the first or last position in dobj is contained in pattern.
-   [IN *{*CHARACTER*|*BYTE*}* MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm)
    Specifies character string or byte string processing.