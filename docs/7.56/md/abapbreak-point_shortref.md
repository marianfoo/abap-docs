---
title: "BREAK-POINT - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapbreak-point.htm) Syntax BREAK-POINT  ID group  log_text . Effect Defines a breakpoint(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbreakpoint_glosry.htm 'Glossary Entry') for branch
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapbreak-point_shortref.htm"
abapFile: "abapbreak-point_shortref.htm"
keywords: ["do", "if", "try", "abapbreak", "point", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  B

BREAK-POINT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapbreak-point.htm)

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbreakpoint_glosry.htm "Glossary Entry") for branching to ABAP Debugger.

Additions

-   ID group
    Assigns the breakpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
-   log\_text
    Specifies a supplementary text for the system log.