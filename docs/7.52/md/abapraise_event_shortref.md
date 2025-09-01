---
title: "RAISE EVENT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm) Syntax RAISE EVENT evt EXPORTING p1 = a1 p2 = a2 .... Effect Raises an event in a method. Addition -   EXPORTING p1 = a1 p2 = a2 ... Passes actual parameters a1, a2, ... to the input parameter p1, p2
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event_shortref.htm"
abapFile: "abapraise_event_shortref.htm"
keywords: ["do", "try", "method", "abapraise", "event", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  R

RAISE EVENT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm)

Syntax

RAISE EVENT evt *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*.

Effect

Raises an event in a method.

Addition

-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameter p1, p2 of the [event handler](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_handler_glosry.htm "Glossary Entry").