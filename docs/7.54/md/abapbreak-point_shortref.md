---
title: "BREAK-POINT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapbreak-point.htm) Syntax BREAK-POINT  ID group  log_text . Effect Defines a breakpoint(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbreakpoint_glosry.htm 'Glossary Entry') for branch
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapbreak-point_shortref.htm"
abapFile: "abapbreak-point_shortref.htm"
keywords: ["do", "if", "try", "abapbreak", "point", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  B

BREAK-POINT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapbreak-point.htm)

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbreakpoint_glosry.htm "Glossary Entry") for branching to ABAP Debugger.

Additions

-   ID group
    Assigns the breakpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
    
-   log\_text
    Specifies a supplementary text for the system log.