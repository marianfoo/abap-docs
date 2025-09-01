---
title: "GET BADI - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_badi.htm) Syntax GET BADI  badi FILTERS f1 = x1 f2 = x2 ...    badi TYPE (name)  FILTERS f1 = x1 f2 = x2 ...  FILTER-TABLE ftab  CONTEXT con. Effect Passes a BAdI ref
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_badi_shortref.htm"
abapFile: "abapget_badi_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapget", "badi", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  G

GET BADI - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_badi.htm)

Syntax

GET BADI *{* badi *\[*FILTERS f1 = x1 f2 = x2 ...*\]* *}*
       *|* *{* badi TYPE (name)
              *\[* *{*FILTERS f1 = x1 f2 = x2 ...*}*
              *|* *{*FILTER-TABLE ftab*}**\]* *}*
              *\[*CONTEXT con*\]*.

Effect

Passes a [BAdI reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_reference_glosry.htm "Glossary Entry") to a [BAdI object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_object_glosry.htm "Glossary Entry") to a [BAdI reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry").

Additions

-   TYPE (name)
    Specifies the name of a BAdI dynamically.
    
-   FILTERS f1 = x1 f2 = x2 ...
    Specifies a setting x1, x2, ... for the filters f1, f2, ... of the [BAdIs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_glosry.htm "Glossary Entry") when searching for BAdI implementations.
    
-   FILTER-TABLE ftab
    Specifies the filter setting dynamically in an internal table.
    
-   CONTEXT con
    Specifies a [BAdI context object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbadi_context_object_glosry.htm "Glossary Entry").