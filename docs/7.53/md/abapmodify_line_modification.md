---
title: "MODIFY LINE - source"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_line_shortref.htm) Syntax ... LINE VALUE FROM wa FIELD VALUE dobj1 FROM wa1 dobj2 FROM wa2 ... LINE FORMAT ext_format_options FIELD FORMAT dobj1 ext_format_options1
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_line_modification.htm"
abapFile: "abapmodify_line_modification.htm"
keywords: ["do", "if", "class", "data", "abapmodify", "line", "modification"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Processing Lists in the List Buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists_complex.htm) →  [MODIFY LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_line.htm) → 

MODIFY LINE - source

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_line_shortref.htm)

Syntax

... *\[*LINE VALUE FROM wa*\]*
    *\[*FIELD VALUE dobj1 *\[*FROM wa1*\]*
                 dobj2 *\[*FROM wa2*\]* ...*\]*
    *\[*LINE FORMAT ext\_format\_options*\]*
    *\[*FIELD FORMAT dobj1 ext\_format\_options1
                  dobj2 ext\_format\_options2 ...*\]*.

Extras:

[1\. ... LINE VALUE FROM wa](#!ABAP_ADDITION_1@1@)
[2\. ... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...](#!ABAP_ADDITION_2@2@)
[3\. ... LINE FORMAT ext\_format\_options](#!ABAP_ADDITION_3@3@)
[4\. ... FIELD FORMAT dobj1 ext\_format\_options1 ...](#!ABAP_ADDITION_4@4@)

Effect

Specifies source fields for MODIFY LINE. Additions modify the list line once this has been overwritten with the content of the sy-lisel system field.

Addition 1

... LINE VALUE FROM wa

Effect

The addition LINE VALUE overwrites the whole list line with the content of wa.

Addition 2

... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...

Effect

The addition FIELD VALUE overwrites the output areas of individual dobj1 dobj2 ... data objects that are shown in the list line with the current content of these objects, or (if specified) the content of the data objects wa1 wa2 .... wa or wa1 wa2 ... expect character-like data objects, which are truncated if they are too long. For data objects that are too short, the line or the output areas are padded from the right with blanks. If specified, FIELD VALUE overrides LINE VALUE.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first object is edited. If a data object dobj1 dobj2 ... is not found at all, it is ignored.

Addition 3

... LINE FORMAT ext\_format\_options

Addition 4

... FIELD FORMAT dobj1 ext\_format\_options1 ...

Effect

For ext\_format\_options, one or more additions of the statement [FORMAT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapformat.htm) can be specified. The addition FRAMES cannot be used. The addition LINE FORMAT formats the whole list line accordingly; FIELD FORMAT formats only the output areas of the dobj1 dobj2 ... data objects displayed in the list line. If specified, FIELD FORMAT overrides LINE FORMAT.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first object is edited. If a data object dobj1 dobj2 ... is not found at all, it is ignored.