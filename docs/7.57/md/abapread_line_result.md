---
title: "READ LINE, result"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_shortref.htm) Syntax ... LINE VALUE INTO wa FIELD VALUE dobj1 INTO wa1 dobj2 INTO wa2 .... Additions: 1. ... LINE VALUE INTO wa(#!ABAP_ADDITION_1@1@) 2. ... FIELD VALUE dob
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_result.htm"
abapFile: "abapread_line_result.htm"
keywords: ["do", "if", "try", "class", "data", "types", "field-symbol", "abapread", "line", "result"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Editing List Buffers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_complex.htm) →  [READ LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ LINE, result, ABAPREAD_LINE_RESULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

READ LINE, result

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_line_shortref.htm)

Syntax

... *\[*LINE VALUE INTO wa*\]*
    *\[*FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...*\]*.

Additions:

[1\. ... LINE VALUE INTO wa](#!ABAP_ADDITION_1@1@)
[2\. ... FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...](#!ABAP_ADDITION_2@2@)

Effect

Specifies target fields for READ LINE.

Addition 1   

... LINE VALUE INTO wa

Effect

The addition LINE VALUE assigns the formatted content of the complete list line in the list buffer to the data object wa.

Addition 2   

... FIELD VALUE dobj1 *\[*INTO wa1*\]* dobj2 *\[*INTO wa2*\]* ...

Effect

The addition FIELD VALUE assigns the output areas of individual data objects dobj1 dobj2... that have been output to the list buffer to these data objects, or, if specified, to the data objects wa1 wa2 .... wa or wa1 wa2 ... expects data objects whose data type is covered by the generic type [simple](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_types_generic.htm), except for [enumerated objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry"). The list line or data objects dobj1 dobj2 ... are handled as if they have the data type c, which means that trailing blanks are ignored.

If identically named data objects dobj1 dobj2... appear more than once in a line, only the first object is read. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.

If the output area of a data object addressed in the [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) statement using a field symbol is to be read, and the same data object is no longer assigned to the field symbol, the name of the data object must be specified and not the name of the field symbol.

Hints

-   No [conversion routine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_routine_glosry.htm "Glossary Entry") is executed when an output area is read.
-   The content of the line or of the individual output areas in the list is character-like and formatted according to the rules for the WRITE statement. When the read line or an area is assigned to a data object, the conversion rules apply in the same way as to a [source field of type c](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_c.htm). This can cause problems with the target fields dobj1 dob ... or war war ..., particularly if these fields are numeric and the output contains separators. Due to this, use of READ LINE is mainly recommended for the evaluation of fields that are ready for input. For other evaluations, [HIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphide.htm) can be used to save values in a type-compliant way.