---
title: "GET BADI - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm) Syntax GET BADI  badi FILTERS f1 = x1 f2 = x2 ...    badi TYPE (name)  FILTERS f1 = x1 f2 = x2 ...  FILTER-TABLE ftab  CONTEXT con. Effect Passes a BAdI ref
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi_shortref.htm"
abapFile: "abapget_badi_shortref.htm"
keywords: ["do", "if", "try", "internal-table", "abapget", "badi", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET BADI, ABAPGET_BADI_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

GET BADI - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm)

Syntax

GET BADI *{* badi *\[*FILTERS f1 = x1 f2 = x2 ...*\]* *}*
       *|* *{* badi TYPE (name)
              *\[* *{*FILTERS f1 = x1 f2 = x2 ...*}*
              *|* *{*FILTER-TABLE ftab*}**\]* *}*
              *\[*CONTEXT con*\]*.

Effect

Passes a [BAdI reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_reference_glosry.htm "Glossary Entry") to a [BAdI object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_object_glosry.htm "Glossary Entry") to a [BAdI reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry").

Additions   

-   TYPE (name)
    Specifies the name of a BAdI dynamically.
-   FILTERS f1 = x1 f2 = x2 ...
    Specifies a setting x1, x2, ... for the filters f1, f2, ... of the [BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_glosry.htm "Glossary Entry") when searching for BAdI implementations.
-   FILTER-TABLE ftab
    Specifies the filter setting dynamically in an internal table.
-   CONTEXT con
    Specifies a [BAdI context object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_context_object_glosry.htm "Glossary Entry").