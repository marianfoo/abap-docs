---
title: "TYPES BEGIN OF - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_struc.htm) Syntax TYPES BEGIN OF struc_type. ... TYPES   ... BOXED. INCLUDE ...(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type_shortref.htm) ... DATA END OF struc_type. Effect De
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_begin_of_shortref.htm"
abapFile: "abaptypes_begin_of_shortref.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "begin", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  T

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPES BEGIN OF, ABAPTYPES_BEGIN_OF_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

TYPES BEGIN OF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_struc.htm)

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES   ... *\[*BOXED*\]*.
  [INCLUDE ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_type_shortref.htm)
  ...
DATA END OF struc\_type.

Effect

Defines a structured data type struc\_type, whose components can be defined by any TYPES statements or copied by INCLUDE from other structures.

Addition  

-   [BOXED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_boxed.htm)
    Declares a substructure as a static [boxed component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_box_glosry.htm "Glossary Entry").