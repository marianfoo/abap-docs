---
title: "BREAK-POINT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapbreak-point.htm) Syntax BREAK-POINT  ID group  log_text . Effect Defines a breakpoint(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbreakpoint_glosry.htm 'Glossary Entry') for branch
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapbreak-point_shortref.htm"
abapFile: "abapbreak-point_shortref.htm"
keywords: ["do", "if", "try", "abapbreak", "point", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  B

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: BREAK-POINT, ABAPBREAK-POINT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

BREAK-POINT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapbreak-point.htm)

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbreakpoint_glosry.htm "Glossary Entry") for branching to ABAP Debugger.

Additions   

-   ID group
    Assigns the breakpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
-   log\_text
    Specifies a supplementary text for the system log.