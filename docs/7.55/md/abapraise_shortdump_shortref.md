---
title: "RAISE SHORTDUMP - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump.htm) Syntax RAISE SHORTDUMP   TYPE cx_class MESSAGE tn(id)   ID mid TYPE mtype NUMBER num  WITH dobj1 ... dobj4 EXPORTING p1 = a1 p2 = a2 ...   oref . Effect Ra
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump_shortref.htm"
abapFile: "abapraise_shortdump_shortref.htm"
keywords: ["do", "if", "class", "abapraise", "shortdump", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  R

RAISE SHORTDUMP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump.htm)

Syntax

RAISE SHORTDUMP
  *{* *{* TYPE cx\_class *\[*MESSAGE tn(id)
                           *|* *{* ID mid TYPE mtype NUMBER num *}*
                             *\[*WITH dobj1 ... dobj4*\]**\]*
                    *\[*EXPORTING p1 = a1 p2 = a2 ...*\]* *}*
  *|* oref *}*.

Effect

Raises a runtime error with an exception object.

Additions

-   TYPE cx\_class *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
    Specifies the exception class of the exception object.
    

-   [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_shortdump_message.htm)
    Passes the specification of a message to the exception object.
    

-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameters p1, p2, ... of the instance constructor of the exception object.
    

-   oref
    Uses an existing exception object, pointed to by oref.