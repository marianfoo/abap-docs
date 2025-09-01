---
title: "FREE OBJECT, OLE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_object.htm) Syntax FREE OBJECT ole NO FLUSH. Effect Frees the memory of an automation object(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenole_automation_glosry.htm 'Glossary Entry') ole create
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_object_shortref.htm"
abapFile: "abapfree_object_shortref.htm"
keywords: ["do", "if", "try", "abapfree", "object", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE OBJECT, OLE, ABAPFREE_OBJECT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

FREE OBJECT, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_object.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Effect

Frees the memory of an [automation object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole on the presentation server.

Addition  

-   NO FLUSH
    The effect is that the release is passed to the presentation layer only after function module FLUSH is called or when a [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") changes.