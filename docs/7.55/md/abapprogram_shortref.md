---
title: "PROGRAM - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm) Syntax PROGRAM prog NO STANDARD PAGE HEADING LINE-SIZE width LINE-COUNT page_lines(footer_lines) MESSAGE-ID mid REDUCED FUNCTIONALITY. Effect Initiates a module
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram_shortref.htm"
abapFile: "abapprogram_shortref.htm"
keywords: ["do", "try", "abapprogram", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  P

PROGRAM - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)

Syntax

PROGRAM prog *\[*NO STANDARD PAGE HEADING*\]*
             *\[*LINE-SIZE width*\]*
             *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Initiates a [module pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or a [subroutine pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") prog.

Additions

-   NO STANDARD PAGE HEADING, LINE-SIZE, LINE-COUNT, MESSAGE-ID
    See [REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_shortref.htm).

-   [REDUCED FUNCTIONALITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprogram.htm)
    Minimizes the components loaded when calling a subroutine pool.