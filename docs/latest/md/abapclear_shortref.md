  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLEAR%2C%20ABAPCLEAR_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLEAR - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear.htm)

Syntax

CLEAR dobj *\[* *{*WITH val *\[*IN *{*CHARACTER*|*BYTE *}* MODE*\]**}*
           *|* *{*WITH NULL*}* *\]*.

Effect

Initializes a data object dobj by assigning the type-dependent [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry").

Additions   

-   WITH val
    Fills the data object with the characters or bytes specified in val.
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
-   [WITH NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclear_with_null.htm)
    Obsolete: Replaces all the bytes in dobj with the hexadecimal value 0.