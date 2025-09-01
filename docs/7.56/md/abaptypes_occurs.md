---
title: "TYPES, OCCURS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_occurs_shortref.htm) Obsolete Syntax TYPES dtype  TYPE REF TO type  LIKE REF TO dobj  OCCURS n. Effect This statement is forbidden in classes. The statement has the same functi
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_occurs.htm"
abapFile: "abaptypes_occurs.htm"
keywords: ["do", "try", "class", "types", "internal-table", "abaptypes", "occurs"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_declare_obsolete.htm) → 

TYPES, OCCURS

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_occurs_shortref.htm)

Obsolete Syntax

TYPES dtype *{* *{*TYPE *\[*REF TO*\]* type*}*
            *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n.

Effect

This statement is forbidden in classes. The statement has the same function as the following [TYPES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptypes_itab.htm) statement for defining [standard table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") types, and is replaced by the following:

TYPES dtype *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
            *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
            WITH NON-UNIQUE DEFAULT KEY
            INITIAL SIZE n.