---
title: "SKIP - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip.htm) Syntax SKIP  n  TO LINE line . Effect Positions the list cursor in a line of the current list. Additions -   n Positions the list cursor(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip_shortref.htm"
abapFile: "abapskip_shortref.htm"
keywords: ["do", "if", "try", "abapskip", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SKIP%2C%20ABAPSKIP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SKIP - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapskip.htm)

Syntax

SKIP *{* *\[*n*\]*
     *|* *{*TO LINE line*}* *}*.

Effect

Positions the list cursor in a line of the current list.

Additions   

-   n
    Positions the [list cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_cursor_glosry.htm "Glossary Entry") n lines underneath the current line. If not specified, n is set implicitly to 1.
-   TO LINE line
    Positions the list cursor in the line line.