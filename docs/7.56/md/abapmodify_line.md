  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

MODIFY LINE

[Short Reference](javascript:call_link\('abapmodify_line_shortref.htm'\))

Syntax

MODIFY *{* *{*LINE line *\[*OF *{*PAGE page*}**|**{*CURRENT PAGE*}**\]*
                     *\[*INDEX idx*\]**}*
       *|* *{*CURRENT LINE*}* *}*
       *\[*[source](javascript:call_link\('abapmodify_line_modification.htm'\))*\]*.

Additions:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement overwrites a line stored in the list buffer with the content of the sy-lisel system field and allows additional modifications according to [source](javascript:call_link\('abapmodify_line_modification.htm'\)). In addition, all values for this line stored using HIDE are assigned to the respective variables.

The first output of a data object in the list buffer with the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) defines the output length, which cannot be changed by the MODIFY statement. The statement MODIFY ignores any specified [alignments](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") that are specified for the output with WRITE and [CENTERED, RIGHT-JUSTIFIED](javascript:call_link\('abapwrite_to_options.htm'\)).

System Fields

sy-subrc

Meaning

0

The specified line exists and was changed.

Not 0

The specified line does not exist.

Hints

-   It is recommended that the system field sy-lisel is filled with the content of the list line to be changed before the statement MODIFY LINE is executed, and that the line is modified exclusively using the information in [source](javascript:call_link\('abapmodify_line_modification.htm'\)), not by changing sy-lisel. The sy-lisel system field is filled either using list events or with the statement [READ LINE](javascript:call_link\('abapread_line.htm'\)).
-   The function modules LIST\_ICON\_PREPARE\_FOR\_MODIFY and LIST\_MODIFY\_QUICKINFO can be used to modify icons and tooltips in list lines.

Addition 1   

... LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*

Addition 2   

... CURRENT LINE

Effect

The line to be changed is specified using the addition LINE or CURRENT LINE. The syntax and description of the additions are the same as for the statement [READ LINE](javascript:call_link\('abapread_line.htm'\)).

Example

When a line in the basic list is double-clicked, the background of the number displayed becomes yellow, and the background of the remaining line becomes green.

START-OF-SELECTION.
  DO 10 TIMES.
    WRITE / sy-index.
  ENDDO.
AT LINE-SELECTION.
  MODIFY CURRENT LINE FIELD FORMAT sy-index COLOR 3
                      LINE FORMAT COLOR 5.

Continue
[MODIFY LINE, source](javascript:call_link\('abapmodify_line_modification.htm'\))