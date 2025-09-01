---
title: "ASSIGN, LOCAL COPY - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_local_copy.htm) Syntax ASSIGN LOCAL COPY OF  INITIAL  dobj+off(len)  (name)  oref->(attr_name)  class(class_name)=>attr(attr_name)  dref->
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_local_copy_shortref.htm"
abapFile: "abapassign_local_copy_shortref.htm"
keywords: ["do", "if", "try", "class", "data", "internal-table", "field-symbol", "abapassign", "local", "copy", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  A

ASSIGN, LOCAL COPY - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_local_copy.htm)

Syntax

ASSIGN LOCAL COPY
  OF *{* *{**\[*INITIAL*\]* *{* dobj*\[*+off*\]**\[*(len)*\]*
                  *|* (name)
                  *|* oref->(attr\_name)
                  *|* *{*class*|*(class\_name)*}*\=>*{*attr*|*(attr\_name)*}*
                  *|* dref->\* *}* *}*
     *|* *{*INITIAL LINE OF *{*itab*|*(itab\_name)*}**}* *}*
  TO <fs>
  *\[*CASTING ...*\]*.

Effect

Obsolete: In a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry"), creates a local [anonymous data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") as a copy of a memory area and assigns it to the field symbol <fs>.

Additions

Specifies the memory area:

-   Additions other than LINE OF - See [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_shortref.htm).
    

-   LINE OF itab*|*(itab\_name) - Copy of a line of an internal table itab.
    

Specifies the content:

-   INITIAL
    Initializes the anonymous data object. Otherwise, the content of the memory area is used.
    

Specifies the data type:

-   CASTING ...
    Specifies the data type used to handle the memory area. See [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_shortref.htm).