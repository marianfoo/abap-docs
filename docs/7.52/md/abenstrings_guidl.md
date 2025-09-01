  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_guidl.htm'\)) → 

Strings

Background

Strings are [dynamic data objects](javascript:call_link\('abenuse_dyn_data_object_guidl.htm'\) "Guideline") of variable length. There are text strings of the string data type and byte strings of the xstring data type, in which character strings or byte strings can be saved.

In contrast to text and byte fields of a fixed length (c, x data types), the length of strings automatically adapts to the content. Other data types, such as n, d, and t, are also handled as text fields in many operand positions. Strings are deep data objects that are internally managed by references. For this, the following additional memory is required:

-   Strings whose length is less than approximately 30 characters or 60 bytes require between approximately 10 and 40 bytes of additional memory, depending on the string length.

-   For longer strings, the additional memory requirement is approximately 50 bytes, irrespective of the string length.

In the case of assignments between strings, sharing takes effect. This means that only the internal reference is copied first. Sharing is canceled if the source or target object is accessed for modification.

Rule

Use strings in character string and byte string processing

Use strings rather than fixed length fields for the internal saving and processing of character strings and byte strings.

Details

Strings are more flexible than fields of a fixed length and usually help to save memory space, because no unnecessary space is occupied by blanks or zeroes, and because sharing is implemented for assignments. Furthermore, trailing blanks are always significant in text strings. Text fields simply ignore trailing blanks in many operand positions (but not in all), which may be quite confusing at times.

Exception

In the following cases, fields of a fixed length should be used instead of strings:

-   The length of the field is critical, for example, for templates or for interfaces to screen fields.

-   Despite [sharing](javascript:call_link\('abenadmin_costs_dyn_mem_obj_guidl.htm'\) "Guideline"), the additional administration work outweighs the benefits which can often be the case for very short strings. If it is obvious that a certain length is never exceeded, short fields of a fixed length can also be used.

-   Structures that only contain character-like components should be handled like a single text field. This is not possible for structures that contain text strings.

Bad Example

The following source code shows an internal table for saving an HTML page whose row type is a text field with a fixed length of 255.

TYPES html\_line TYPE c LENGTH 255.
DATA html\_table TYPE TABLE OF html\_line.
APPEND '<HTML>' TO html\_table.
...
APPEND '<BODY>' TO html\_table.
...
APPEND '</BODY>' TO html\_table.
APPEND '</HTML>' TO html\_table.

Good Example

The following source code shows the above example but uses text strings. The memory space gained should outweigh the additional administration effort considerably. As an alternative to using an internal table, the HTML page can also be concatenated in a single text string; however, this impairs the legibility, for example, in ABAP Debugger.

DATA html\_table TYPE TABLE OF string.
APPEND \`<HTML>\` TO html\_table.
...
APPEND \`<BODY>\` TO html\_table.
...
APPEND \`</BODY>\` TO html\_table.
APPEND \`</HTML>\` TO html\_table.