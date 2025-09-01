---
title: "Strings"
description: |
  Background Strings are dynamic data objects(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_dyn_data_object_guidl.htm 'Guideline') of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte str
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstrings_guidl.htm"
abapFile: "abenstrings_guidl.htm"
keywords: ["do", "if", "case", "data", "types", "internal-table", "abenstrings", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_type_obj_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Strings, ABENSTRINGS_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

Strings

Background   

Strings are [dynamic data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_dyn_data_object_guidl.htm "Guideline") of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte strings can be saved.

In contrast to text and byte fields of a fixed length (c, x data types), the length of strings automatically adapts to the content. Other data types, such as n, d, and t, are also handled as text fields in many operand positions. Strings are deep data objects that are internally managed by references. For this, the following additional memory is required:

-   Strings whose length is less than approximately 30 characters or 60 bytes require between approximately 10 and 40 bytes of additional memory, depending on the string length.
-   For longer strings, the additional memory requirement is approximately 50 bytes, irrespective of the string length.

In the case of assignments between strings, sharing takes effect. This means that only the internal reference is copied first. Sharing is canceled if the source or target object is accessed for modification.

Rule   

Use strings in character string and byte string processing

Use strings rather than fixed length fields for the internal saving and processing of character strings and byte strings.

Details   

Strings are more flexible than fields of a fixed length and usually help to save memory space, because no unnecessary space is occupied by blanks or zeros, and because sharing is implemented for assignments. Furthermore, trailing blanks are always significant in text strings. Text fields simply ignore trailing blanks in many operand positions (but not in all), which may be quite confusing at times.

Exception   

In the following cases, fields of a fixed length should be used instead of strings:

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.
-   Despite [sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadmin_costs_dyn_mem_obj_guidl.htm "Guideline"), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.
-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

Bad Example

The following source code shows an internal table for saving an HTML page whose line type is a text field with a fixed length of 255. Most of the memory space of the internal table, however, is probably wasted on blanks.

TYPES html\_line TYPE c LENGTH 255.
DATA html\_table TYPE TABLE OF html\_line.
APPEND '<HTML>' TO html\_table.
...
APPEND '<BODY>' TO html\_table.
...
APPEND '</BODY>' TO html\_table.
APPEND '</HTML>' TO html\_table.

Good Example

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this makes it more difficult to read, for example, in the ABAP Debugger.

DATA html\_table TYPE TABLE OF string.
APPEND \`<HTML>\` TO html\_table.
...
APPEND \`<BODY>\` TO html\_table.
...
APPEND \`</BODY>\` TO html\_table.
APPEND \`</HTML>\` TO html\_table.