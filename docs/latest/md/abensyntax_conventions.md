---
title: "ABAP Syntax Conventions"
description: |
  The ABAP keyword documentation documents use the following syntax conventions: -   ABAP words are displayed in uppercase letters. Example: APPEND, NON-UNIQUE, INTO -   Operands are displayed in lowercase letters. Example: dobj, dbtab -   Parts of statements whose syntax diagrams are displayed elsewh
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensyntax_conventions.htm"
abapFile: "abensyntax_conventions.htm"
keywords: ["do", "if", "case", "abensyntax", "conventions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Syntax%20Conventions%2C%20ABENSYNTAX_CONVENTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Syntax Conventions

The ABAP keyword documentation documents use the following syntax conventions:

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
    
    Example:
    *\[*NO-GROUPING*\]* *\[*NO-SIGN*\]* *\[*NO-ZERO*\]*
    
-   Italic vertical bars (*|*) between parts of statements mean that only one of the listed parts can be used within a statement. A vertical bar like this always binds immediate neighbors. Vertical bars | that are part of the ABAP syntax are shown in the same color as all other language elements.
    
    Example:
    DDMMYY *|* MMDDYY *|* YYMMDD
    
-   Italic curly brackets (*{* *}*) group together related parts of statements, for example those on the right or left of vertical bars. Curly brackets { } that are part of the ABAP syntax are shown in the same color as all other language elements and are not shown in italics.
    
    Example:
    *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}*
    
-   A string of dots ... means that other parts of the statement can be included at this point.
    
    Example:
    ... AS CHECKBOX