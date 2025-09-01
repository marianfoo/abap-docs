---
title: "Syntax Conventions in the ABAP Keyword Documentation"
description: |
  The ABAP keyword documentation uses the following syntax conventions: -   ABAP words are displayed in uppercase letters. Example: APPEND, NON-UNIQUE, INTO -   Operands are displayed in lowercase letters. Example: dobj, dbtab -   Parts of statements whose syntax diagrams are shown in another place ar
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_conventions.htm"
abapFile: "abensyntax_conventions.htm"
keywords: ["do", "if", "case", "abensyntax", "conventions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_syntax.htm) → 

Syntax Conventions in the ABAP Keyword Documentation

The ABAP keyword documentation uses the following syntax conventions:

-   ABAP words are displayed in uppercase letters.
    Example:
    APPEND, NON-UNIQUE, INTO
    

-   Operands are displayed in lowercase letters.
    Example:
    dobj, dbtab
    

-   Parts of statements whose syntax diagrams are shown in another place are displayed as pseudo syntax.
    Example:
    selscreen\_options, list\_options
    

-   Periods, commas, colons, and parentheses are displayed as normal. They are part of the ABAP syntax.
    Example:
    . : , ()
    

-   Operators are displayed as normal. They are part of the ABAP syntax.
    Example:
    +, -, \*, /
    

-   Parts of statements that are optional are displayed in square brackets *\[* *\]*. A list of parts of statements in square brackets like this means that some or all of the parts can be used. If at least one part must be used, this is noted in the text. When used as part of the ABAP syntax, square brackets \[ \] are shown in the same color as all other language elements and are not shown in italics.
    Example::
    *\[*NO-GROUPING*\]* *\[*NO-SIGN*\]* *\[*NO-ZERO*\]*
    

-   Light-colored vertical slashes (*|*) between parts of statements mean that only one of the parts specified within a statement can be used. A vertical slash like this always joins immediate neighbors. When used as part of the ABAP syntax, vertical slashes | are shown in the same color as all other language elements.
    Example:
    DDMMYY *|* MMDDYY *|* YYMMDD
    

-   Light-colored curly brackets (*{* *}*) in italics group together related parts of statements, for example on the right or left of vertical slashes. When used as part of the ABAP syntax, curly brackets { } are shown in the same color as all other language elements and are not shown in italics.
    Example:
    *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}*
    

-   A string of dots means that other parts of the statement can be included at this point.
    Example:
    ... AS CHECKBOX