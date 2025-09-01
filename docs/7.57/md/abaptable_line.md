---
title: "Obsolete Syntax"
description: |
  TYPES(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_itab.htm) ... WITH(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_keydef.htm) ... KEY(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_primary_key.htm) TABLE LINE. DATA(https:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptable_line.htm"
abapFile: "abaptable_line.htm"
keywords: ["do", "if", "class", "data", "types", "internal-table", "abaptable", "line"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_declare_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TYPES, DATA, ..., TABLE LINE, ABAPTABLE_LINE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

TYPES, DATA, ..., TABLE LINE

Obsolete Syntax

[TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_itab.htm) ... [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_primary_key.htm) TABLE LINE.
[DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_itab.htm)  ... [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_keydef.htm) ... [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_primary_key.htm) TABLE LINE.
...

Effect

The addition TABLE LINE can also be specified outside of classes in the declaration statements TYPES, DATA, and so on, instead of the pseudo component table\_line in the definition of the primary table key.

Hint

The ABAP Compiler should consider this addition an error, retained only for reasons of downward compatibility. The pseudo component table\_line should always be specified instead of TABLE LINE.

Bad Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY TABLE LINE.

Good Example

TYPES itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.