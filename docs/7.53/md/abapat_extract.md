  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

AT - Extract

[Quick Reference](javascript:call_link\('abapat_shortref.htm'\))

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

Extras:

[1\. ... FIRST](#!ABAP_ADDITION_1@1@)
[2\. ... field\_groupi *\[*WITH field\_groupj*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... *{*NEW*}**|**{*END OF*}* fieldi](#!ABAP_ADDITION_3@3@)
[4\. ... LAST](#!ABAP_ADDITION_4@4@)

Effect

The statement block of a [LOOP](javascript:call_link\('abaploop-.htm'\)) for extracts can contain control structures for [group level processing](javascript:call_link\('abencontrol_level_processin_glosry.htm'\) "Glossary Entry"). The corresponding control statement is AT. The statements AT and ENDAT define statement blocks that are executed at [group breaks](javascript:call_link\('abencontrol_break_glosry.htm'\) "Glossary Entry"). Group breaks between group levels are a result of the row structure and the processing order in which the LOOP reads the rows of the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry"). Within some of the statement blocks, it is possible to access the automatically created data objects [sum(field)](javascript:call_link\('abapsum_extract.htm'\)) and [cnt(field)](javascript:call_link\('abapcnt.htm'\)).

Apart from the special variants AT FIRST, AT field\_group, and AT LAST, group levels are defined using the variant AT NEW and the sequence of rows in the extract. These are the rows that have the same content in a group key defined in their initial parts. It is possible, from a syntax point of view, to arrange AT control structures in any order and to nest them, however effective group level processing is usually only achieved by the arrangement above. Here, the control structures are specified in accordance with the arrangement of the components in the group key and are not nested.

The statement blocks within the AT\-ENDAT control structures are executed if an appropriate group break is made in the current row. Statements in the LOOP\-ENDLOOP control structure that are not executed within an AT\-ENDAT control structure are executed in each pass of the loop.

Notes

-   In one very common case, the extract dataset is sorted exactly in accordance with the group key.
    
-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) are recommended instead.
    

Addition 1

...  FIRST

Effect

The control level is defined by the first row of the extract dataset.

Addition 2

... field\_groupi *\[*WITH field\_groupj*\]*

Effect

A row that is attached to the extract dataset using the statement [EXTRACT field\_groupi](javascript:call_link\('abapextract.htm'\)). If the WITH addition is specified, the next row must be defined by the field group field\_groupj.

Addition 3

... *{*NEW*}**|**{*END OF*}* fieldi

Effect

The group level is defined by the beginning or end of a group of rows with the same content in the component fieldi and in the component links of fieldi. The content of these components determines the control key. The component field must be part of the field group header. Components whose content is hexadecimal 0 are not included as a control break criterion.

For fieldi, a field symbol can also be specified. If a component of field group header is assigned to the field symbol when the statement is executed, this has the same effect as specifying the respective component. If no data object is assigned to the field symbol, the specification is ignored. If another data object is assigned to the field symbol, a non-handleable exception is raised.

Addition 4

... LAST

Effect

The control level is defined by the last row of the extraction dataset.

Executable Example

[Extracts, Processing](javascript:call_link\('abenextract_at_abexa.htm'\))

Continue
[cnt( )](javascript:call_link\('abapcnt.htm'\))
[sum( )](javascript:call_link\('abapsum_extract.htm'\))