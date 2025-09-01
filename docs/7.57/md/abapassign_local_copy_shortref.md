---
title: "ASSIGN, LOCAL COPY - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_local_copy.htm) Syntax ASSIGN LOCAL COPY OF  INITIAL  dobj+off(len)  (name)  oref->(attr_name)  class(class_name)=>attr(attr_name)  dref->
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_local_copy_shortref.htm"
abapFile: "abapassign_local_copy_shortref.htm"
keywords: ["do", "if", "try", "class", "data", "internal-table", "field-symbol", "abapassign", "local", "copy", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, LOCAL COPY, ABAPASSIGN_LOCAL_COPY_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ASSIGN, LOCAL COPY - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_local_copy.htm)

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

Obsolete: In a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry"), creates a local [anonymous data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") as a copy of a memory area and assigns it to the field symbol <fs>.

Additions   

Specifies the memory area:

-   Additions other than LINE OF - See [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_shortref.htm).
-   LINE OF itab*|*(itab\_name) - Copy of a line of an internal table itab.

Specifies the content:

-   INITIAL
    Initializes the anonymous data object. Otherwise, the content of the memory area is used.

Specifies the data type:

-   CASTING ...
    Specifies the data type used to handle the memory area. See [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_shortref.htm).