  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) → 

Syntax Conventions in the ABAP Keyword Documentation

The ABAP keyword documentation documents are based on the following syntax conventions:

-   ABAP words are displayed in uppercase letters.
    Example:
    APPEND, NON-UNIQUE, INTO
    

-   Operands are displayed in lowercase letters.
    Example:
    dobj, dbtab
    

-   Parts of statements whose syntax diagrams are displayed elsewhere, are shown as pseudo syntax.
    Example:
    selscreen\_options, list\_options
    

-   Periods, commas, colons, and parentheses are displayed as normal. They are part of the ABAP syntax.
    Example:
    . : , ()
    

-   Operators are displayed as normal. They are part of the ABAP syntax.
    Example:
    +, -, \*, /
    

-   Parts of statements that are optional are displayed in italic square brackets *\[* *\]*. A list of statement parts in such brackets means that some or all of the parts can be used. If at least one part has to be used, this is noted in the text. Square brackets \[ \] that are part of the ABAP syntax are shown in the same color as all other language elements and are not shown in italics.
    Example::
    *\[*NO-GROUPING*\]* *\[*NO-SIGN*\]* *\[*NO-ZERO*\]*
    

-   Light vertical slashes (*|*) between parts of statements mean that only one of the listed parts can be used within a statement. A vertical slash like this always binds immediate neighbors. Vertical slashes | that are part of the ABAP syntax are shown in the same color as all other language elements.
    Example:
    DDMMYY *|* MMDDYY *|* YYMMDD
    

-   Light italic curly brackets (*{* *}*) group together related parts of statements, for example those on the right or left of vertical slashes. Curly brackets { } that are part of the ABAP syntax are shown in the same color as all other language elements and are not shown in italics.
    Example:
    *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}*
    

-   A string of dots ... means that other parts of the statement can be included at this point.
    Example:
    ... AS CHECKBOX