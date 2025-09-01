---
title: "AT, Extract"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_shortref.htm) Obsolete Syntax LOOP. AT FIRST. ... ENDAT. AT field_groupi WITH field_groupj ... ENDAT. AT NEW field1. ... ENDAT. AT NEW field2. ... ENDAT. ...  ...
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_extract.htm"
abapFile: "abapat_extract.htm"
keywords: ["loop", "do", "if", "case", "try", "catch", "data", "internal-table", "field-symbol", "abapat", "extract"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_extracts_extended.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AT%2C%20Extract%2C%20ABAPAT_EXTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AT, Extract

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_shortref.htm)

Obsolete Syntax

LOOP.
  *\[*AT FIRST.
     ...
   ENDAT.*\]*
  *\[*AT field\_groupi *\[*WITH field\_groupj*\]*
     ...
   ENDAT.*\]*
    *\[*AT NEW field1.
       ...
     ENDAT.
      *\[*AT NEW field2.
         ...
       ENDAT.
         *\[*...*\]**\]**\]*
           *\[* ... *\]*
        *\[**\[**\[*...*\]*
        AT END OF field2.
         ...
       ENDAT.*\]*
     AT END OF field1.
       ...
     ENDAT.*\]*
  *\[*AT LAST.
     ...
  ENDAT.*\]*
ENDLOOP.

Additions:

[1\. ... FIRST](#!ABAP_ADDITION_1@1@)
[2\. ... field\_groupi *\[*WITH field\_groupj*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... *{*NEW*}**|**{*END OF*}* fieldi](#!ABAP_ADDITION_3@3@)
[4\. ... LAST](#!ABAP_ADDITION_4@4@)

Effect

The statement block of a [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop-.htm) for extracts can contain control structures for [group level processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_level_processing_glosry.htm "Glossary Entry"). The corresponding control statement is AT. The statements AT and ENDAT define statement blocks that are executed at [group breaks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_break_glosry.htm "Glossary Entry"). Group breaks between group levels are a result of the line structure and the processing order in which the LOOP reads the lines of the [extract dataset](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_dataset_glosry.htm "Glossary Entry"). Within some of the statement blocks, it is possible to access the automatically created data objects [sum(field)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsum_extract.htm) and [cnt(field)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcnt.htm).

Apart from the special variants AT FIRST, AT field\_group, and AT LAST, group levels are defined using the variant AT NEW and using the consecutive lines of the extract. These are the lines that have the same content in a group key defined in their initial parts. It is possible, from a syntax point of view, to arrange AT control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the AT\-ENDAT control structures are executed if an appropriate group break occurs in the current line. Statements in the LOOP\-ENDLOOP control structure that are not listed within an AT\-ENDAT control structure are executed in each loop pass.

Hints

-   In one very common case, the extract dataset is sorted exactly by the group key.
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) should be used instead.

Addition 1   

...  FIRST

Effect

The group level is defined by the first line of the extract dataset.

Addition 2   

... field\_groupi *\[*WITH field\_groupj*\]*

Effect

A line that was appended to the extract dataset using the statement [EXTRACT field\_groupi](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapextract.htm). If the WITH addition is specified, the next line must be defined by the field group field\_groupj.

Addition 3   

... *{*NEW*}**|**{*END OF*}* fieldi

Effect

The group level is defined by the beginning or end of a group of lines with the same content in the component fieldi and in the component left of fieldi. The content of these components determines the group key. The component field must be part of the field group header. Components whose content is hexadecimal 0 are not included as a group break criterion.

For fieldi, a field symbol can also be specified. If a component of field group header is assigned to the field symbol when the statement is executed, this has the same effect as specifying the corresponding component. If no data object is assigned to the field symbol, the specification is ignored. If another data object is assigned to the field symbol, an uncatchable exception is raised.

Addition 4   

... LAST

Effect

The group level is defined by the last line of the extraction dataset.

Executable Example

[Extracts, Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextract_at_abexa.htm)

Continue
[cnt( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcnt.htm)
[sum( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsum_extract.htm)