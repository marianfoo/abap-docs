---
title: "Obsolete Syntax"
description: |
  ... BY field1 ASCENDINGDESCENDING AS TEXT field2 ASCENDINGDESCENDING AS TEXT ... Additions: 1. ... ASCENDINGDESCENDING(#!ABAP_ADDITION_1@1@) 2. ... AS TEXT(#!ABAP_ADDITION_2@2@) Effect When a sort key is specified using the addition BY, sorting is not d
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_key.htm"
abapFile: "abapsort_key.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "field-symbol", "abapsort", "key"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_extracts_extended.htm) →  [SORT, Extract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_extract.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SORT%2C%20sort_key%2C%20ABAPSORT_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SORT, sort\_key

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_shortref.htm)

Obsolete Syntax

... BY field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*
       ...

Additions:

[1\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_1@1@)
[2\. ... AS TEXT](#!ABAP_ADDITION_2@2@)

Effect

When a sort key is specified using the addition BY, sorting is not done by field group header, but by the field1 field2 ... fields specified after it. For field1 field2 ..., only components of field group header or field groups that contain only fields of field group header can be specified. The sort order depends on the order in which the components field1 field2 ... are specified. The number of fields to be used for sorting is limited to 50.

For field1 field2 ..., field symbols can also be specified. If a component of the field group header is assigned to a field symbol when the statement is executed, sorting takes place according to the corresponding component. If no data object is assigned to a field symbol, the specification is ignored. If a different data object is assigned to a field symbol, an uncatchable exception is raised.

Hint

No [customizing includes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencustomizing_include_glosry.htm "Glossary Entry") may be specified for field1 field2 ... if they are empty.

Addition 1   

... ASCENDING*|*DESCENDING

If, after a component field1 field2 ..., neither of the ASCENDING or DESCENDING additions is specified, the predefined sort direction is applied. If one of the additions ASCENDING or DESCENDING is specified, it overwrites the default for this component.

Addition 2   

... AS TEXT

Without the addition AS TEXT after a text-like component field1 field2 ..., the default is applied. If the addition AS TEXT is specified after a text-like component, it overwrites the default for this component. In the case of non-text-like components, AS TEXT cannot be specified. If AS TEXT is specified after a field group, the addition only affects the text-like components of this group.