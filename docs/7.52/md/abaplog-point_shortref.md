---
title: "LOG-POINT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm) Syntax LOG-POINT ID group SUBKEY sub FIELDS val1 val2 .... Effect Defines a logpoint(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm 'Glossary Entry') to wri
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point_shortref.htm"
abapFile: "abaplog-point_shortref.htm"
keywords: ["do", "try", "abaplog", "point", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  L

LOG-POINT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplog-point.htm)

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Effect

Defines a [logpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogpoint_glosry.htm "Glossary Entry") to write a log entry.

Additions

-   ID group
    Assigns the logpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group, which controls its activation.
    
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
    
-   FIELDS val1 val2 ...
    Writes the values val1, val2, ... to the log.