# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Classic Lists / Lists - Editing List Buffers

Included pages: 14



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenabap_lists_complex.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_complex.htm)
- [abapread_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm)
- [abapread_line_result.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line_result.htm)
- [abapmodify_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm)
- [abapmodify_line_modification.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line_modification.htm)
- [abapscroll.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm)
- [abapscroll_list_horizontal.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_horizontal.htm)
- [abapscroll_list_vertical.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_vertical.htm)
- [abapdescribe_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list.htm)
- [abapdescribe_list_page_properties.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list_page_properties.htm)

**Bundle Contains**: 10 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.502Z

---

### abenabap_lists_complex.htm

> **📖 Official SAP Documentation**: [abenabap_lists_complex.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_complex.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Lists - Editing List Buffers

The following statements process lists that are already saved as [screen lists](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry") in the list buffers:

-   [READ LINE](javascript:call_link\('abapread_line.htm'\)),
-   [MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\)),
-   [SCROLL LIST](javascript:call_link\('abapscroll.htm'\)), and
-   [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\))

[Spool lists](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry") that are sent page by page to the SAP spool system cannot be processed in this manner.

Continue
[READ LINE](javascript:call_link\('abapread_line.htm'\))
[MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\))
[SCROLL LIST](javascript:call_link\('abapscroll.htm'\))
[DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\))



**📖 Source**: [abenabap_lists_complex.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists_complex.htm)

### abapread_line.htm

> **📖 Official SAP Documentation**: [abapread_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

READ LINE

[Short Reference](javascript:call_link\('abapread_line_shortref.htm'\))

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                   *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*[result](javascript:call_link\('abapread_line_result.htm'\))*\]*.

Additions:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns the content of a line stored in the list buffer to the system field sy-lisel, and allows other target fields to be specified in [result](javascript:call_link\('abapread_line_result.htm'\)). In addition, all values for this line stored using [HIDE](javascript:call_link\('abaphide.htm'\)) are assigned to the respective variables.

The line to be read is specified using the addition LINE or using CURRENT LINE.

System Fields

sy-subrc

Meaning

0

The specified line exists and was read.

Not 0

The specified line does not exist.

Addition 1   

... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*

Effect

The addition LINE selects a line. The line number is specified by line which expects a data object of type i. The line number is related to a list page of a list level.

The list level can be specified with the addition INDEX, where idx expects a data object, which contains the list index, of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed.

The list page can be specified either with PAGE page or with CURRENT PAGE. page expects a data object of the type i that contains the page number of an existing page of the list level. No line is selected if no line is found for the specified values in line, idx and page. CURRENT PAGE indicates the topmost displayed page of the list, on which the last list event has taken place. No line is selected while creating the basic list. If no addition is specified for the page, the current page (sy-pagno) is selected when the basic list is created, and the page on which the event was raised (sy-cpage) is selected during the processing of a list event.

Addition 2   

... CURRENT LINE

Effect

For the addition CURRENT LINE, the line on which the screen cursor was positioned during a preceding list event (sy-lilli), or the last line read with a preceding READ LINE statement, is selected. No line is selected while creating the basic list.

Example

This example reads all lines of the basic list after selecting a line. The content of the checkbox is assigned to the output data object flag. A target field wa with length 10 is used for the date, since this is the length of the output area and contains separators. If an assignment was made to the output field date, the area length would be reduced. The selected data is displayed in the details list.

DATA: date TYPE d,
      flag TYPE c LENGTH 1,
      wa   TYPE c LENGTH 10.
START-OF-SELECTION.
  date = sy-datum.
  DO 10 TIMES.
    date += sy-index.
    WRITE: / flag AS CHECKBOX, (10) date.
  ENDDO.
AT LINE-SELECTION.
  DO.
    READ LINE sy-index FIELD VALUE flag
                                   date INTO wa.
    IF sy-subrc <> 0.
      EXIT.
    ELSEIF flag = 'X'.
      WRITE / wa.
    ENDIF.
  ENDDO.

Continue
[READ LINE, result](javascript:call_link\('abapread_line_result.htm'\))



**📖 Source**: [abapread_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm)

### abapread_line_result.htm

> **📖 Official SAP Documentation**: [abapread_line_result.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line_result.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [READ LINE](javascript:call_link\('abapread_line.htm'\)) → 

READ LINE, result

[Short Reference](javascript:call_link\('abapread_line_shortref.htm'\))

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

The addition FIELD VALUE assigns the output areas of individual data objects dobj1 dobj2... that have been output to the list buffer to these data objects, or, if specified, to the data objects wa1 wa2 .... wa or wa1 wa2 ... expects data objects whose data type is covered by the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), except for [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"). The list line or data objects dobj1 dobj2 ... are handled as if they have the data type c, which means that trailing blanks are ignored.

If identically named data objects dobj1 dobj2... appear more than once in a line, only the first object is read. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.

If the output area of a data object addressed in the [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement using a field symbol is to be read, and the same data object is no longer assigned to the field symbol, the name of the data object must be specified and not the name of the field symbol.

Hints

-   No [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") is executed when an output area is read.
-   The content of the line or of the individual output areas in the list is character-like and formatted according to the rules for the WRITE statement. When the read line or an area is assigned to a data object, the conversion rules apply in the same way as to a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). This can cause problems with the target fields dobj1 dob ... or war war ..., particularly if these fields are numeric and the output contains separators. Due to this, use of READ LINE is mainly recommended for the evaluation of fields that are ready for input. For other evaluations, [HIDE](javascript:call_link\('abaphide.htm'\)) can be used to save values in a type-compliant way.



**📖 Source**: [abapread_line_result.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line_result.htm)

### abapread_line.htm

> **📖 Official SAP Documentation**: [abapread_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

READ LINE

[Short Reference](javascript:call_link\('abapread_line_shortref.htm'\))

Syntax

READ *{* *{*LINE line *\[**{*OF PAGE page*}**|**{*OF CURRENT PAGE*}**\]*
                   *\[*INDEX idx*\]**}*
     *|* *{*CURRENT LINE*}* *}*
     *\[*[result](javascript:call_link\('abapread_line_result.htm'\))*\]*.

Additions:

[1\. ... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... CURRENT LINE](#!ABAP_ADDITION_2@2@)

Effect

This statement assigns the content of a line stored in the list buffer to the system field sy-lisel, and allows other target fields to be specified in [result](javascript:call_link\('abapread_line_result.htm'\)). In addition, all values for this line stored using [HIDE](javascript:call_link\('abaphide.htm'\)) are assigned to the respective variables.

The line to be read is specified using the addition LINE or using CURRENT LINE.

System Fields

sy-subrc

Meaning

0

The specified line exists and was read.

Not 0

The specified line does not exist.

Addition 1   

... LINE line *\[**{*OF PAGE page *}**|**{*OF CURRENT PAGE*}**\]* *\[*INDEX idx*\]*

Effect

The addition LINE selects a line. The line number is specified by line which expects a data object of type i. The line number is related to a list page of a list level.

The list level can be specified with the addition INDEX, where idx expects a data object, which contains the list index, of type i. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed.

The list page can be specified either with PAGE page or with CURRENT PAGE. page expects a data object of the type i that contains the page number of an existing page of the list level. No line is selected if no line is found for the specified values in line, idx and page. CURRENT PAGE indicates the topmost displayed page of the list, on which the last list event has taken place. No line is selected while creating the basic list. If no addition is specified for the page, the current page (sy-pagno) is selected when the basic list is created, and the page on which the event was raised (sy-cpage) is selected during the processing of a list event.

Addition 2   

... CURRENT LINE

Effect

For the addition CURRENT LINE, the line on which the screen cursor was positioned during a preceding list event (sy-lilli), or the last line read with a preceding READ LINE statement, is selected. No line is selected while creating the basic list.

Example

This example reads all lines of the basic list after selecting a line. The content of the checkbox is assigned to the output data object flag. A target field wa with length 10 is used for the date, since this is the length of the output area and contains separators. If an assignment was made to the output field date, the area length would be reduced. The selected data is displayed in the details list.

DATA: date TYPE d,
      flag TYPE c LENGTH 1,
      wa   TYPE c LENGTH 10.
START-OF-SELECTION.
  date = sy-datum.
  DO 10 TIMES.
    date += sy-index.
    WRITE: / flag AS CHECKBOX, (10) date.
  ENDDO.
AT LINE-SELECTION.
  DO.
    READ LINE sy-index FIELD VALUE flag
                                   date INTO wa.
    IF sy-subrc <> 0.
      EXIT.
    ELSEIF flag = 'X'.
      WRITE / wa.
    ENDIF.
  ENDDO.

Continue
[READ LINE, result](javascript:call_link\('abapread_line_result.htm'\))



**📖 Source**: [abapread_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_line.htm)

### abapmodify_line.htm

> **📖 Official SAP Documentation**: [abapmodify_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abapmodify_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm)

### abapmodify_line_modification.htm

> **📖 Official SAP Documentation**: [abapmodify_line_modification.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line_modification.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\)) → 

MODIFY LINE, source

[Short Reference](javascript:call_link\('abapmodify_line_shortref.htm'\))

Syntax

... *\[*LINE VALUE FROM wa*\]*
    *\[*FIELD VALUE dobj1 *\[*FROM wa1*\]*
                 dobj2 *\[*FROM wa2*\]* ...*\]*
    *\[*LINE FORMAT ext\_format\_options*\]*
    *\[*FIELD FORMAT dobj1 ext\_format\_options1
                  dobj2 ext\_format\_options2 ...*\]*.

Additions:

[1\. ... LINE VALUE FROM wa](#!ABAP_ADDITION_1@1@)
[2\. ... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...](#!ABAP_ADDITION_2@2@)
[3\. ... LINE FORMAT ext\_format\_options](#!ABAP_ADDITION_3@3@)
[4\. ... FIELD FORMAT dobj1 ext\_format\_options1 ...](#!ABAP_ADDITION_4@4@)

Effect

Specifies source fields for MODIFY LINE. The additions modify the list line once this has been overwritten with the content of the sy-lisel system field.

Addition 1   

... LINE VALUE FROM wa

Effect

The addition LINE VALUE overwrites the entire list line with the content of wa.

Addition 2   

... FIELD VALUE dobj1 *\[*FROM wa1*\]* dobj2 *\[*FROM wa2*\]* ...

Effect

The addition FIELD VALUE overwrites the output areas of individual dobj1 dobj2 ... data objects that are shown in the list line with the current content of these objects, or (if specified) the content of the data objects wa1 wa2 .... wa or wa1 wa2 ... expect character-like data objects, which are truncated if they are too long. For data objects that are too short, the line or the output areas are filled from the right with blanks. If specified, FIELD VALUE overrides LINE VALUE.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first one is processed. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.

Addition 3   

... LINE FORMAT ext\_format\_options

Addition 4   

... FIELD FORMAT dobj1 ext\_format\_options1 ...

Effect

For ext\_format\_options, one or more additions of the statement [FORMAT](javascript:call_link\('abapformat.htm'\)) can be specified. The addition FRAMES cannot be used. The addition LINE FORMAT formats the whole list line accordingly; FIELD FORMAT formats only the output areas of the dobj1 dobj2 ... data objects displayed in the list line. If specified, FIELD FORMAT overrides LINE FORMAT.

If data objects dobj1 dobj2... appear more than once in a line with the same name, only the first one is processed. If a data object dobj1 dobj2 ... does not exist at all, the specification is ignored.



**📖 Source**: [abapmodify_line_modification.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line_modification.htm)

### abapmodify_line.htm

> **📖 Official SAP Documentation**: [abapmodify_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abapmodify_line.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_line.htm)

### abapscroll.htm

> **📖 Official SAP Documentation**: [abapscroll.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

SCROLL LIST

[Short Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

SCROLL LIST *\[*[horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))*\]*
            *\[*[vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))*\]*
            *\[*INDEX idx*\]*.

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement scrolls the display area of a list stored in the list buffer to the position specified in [horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\)) and/or [vertical](javascript:call_link\('abapscroll_list_vertical.htm'\)). At least one of these additions must be specified, whereby all horizontal specifications refer to the columns of a displayed list. The corresponding section is displayed when the list is next displayed.

If the SCROLL statement is not used, a list is displayed during the initial display, starting from the first column of the first line. If the user navigates from a details list back to a lower list level, the list is displayed with the section in which it was last displayed. The SCROLL statement sets a new first column, a new first line, or both. Each SCROLL statement sets only the size specified in it, without changing any positions that are not affected.

Addition   

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object of type i, which contains the list index. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx is not available, sy-subrc is set to the value 8.

System Fields

sy-subrc

Meaning

0

Screen section was scrolled successfully.

4

Complete scrolling not possible because the list margin was reached.

8

Scrolling not possible because the specified list level does not exist.

Hint

While scrolling through the list that is being created (sy-lsind), it should be noted that a SCROLL statement is ignored prior to the first output statement, since the list does not yet exist in the list buffer.

Example

By double-clicking the basic list, it is possible to scroll down this list in the event block [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) to the page entered in a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). The lines on the page retain their original position with reference to the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") by using sy-staro. However, it is not necessary to set the column to sy-staco explicitly, since this position is retained during vertical scrolling.

REPORT LINE-COUNT 100 LINE-SIZE 100
       NO STANDARD PAGE HEADING.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
PARAMETERS page TYPE i.
SELECTION-SCREEN END OF SCREEN 500.
START-OF-SELECTION.
  DO 10000 TIMES.
    WRITE sy-index.
  ENDDO.
TOP-OF-PAGE.
  ULINE.
  WRITE sy-pagno.
  ULINE.
AT LINE-SELECTION.
  CALL SELECTION-SCREEN 500 STARTING AT 10 10.
  SCROLL LIST TO COLUMN sy-staco
              TO PAGE page LINE sy-staro.

Continue
[SCROLL LIST, horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))
[SCROLL LIST, vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))



**📖 Source**: [abapscroll.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm)

### abapscroll_list_horizontal.htm

> **📖 Official SAP Documentation**: [abapscroll_list_horizontal.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_horizontal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [SCROLL LIST](javascript:call_link\('abapscroll.htm'\)) → 

SCROLL LIST, horizontal

[Short Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

... *{*TO COLUMN col*}*
  *|* *{**{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]**}* ...

Alternatives:

[1\. ... TO COLUMN col](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LEFT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... RIGHT *\[*BY n PLACES*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

These additions are used to scroll horizontally in the list.

Hint

When scrolling horizontally using the statement SCROLL, only the upper or lower limit of data objects displayed should be specified because the positions in the list buffer and in the list displayed only match for these values.

Alternative 1   

... TO COLUMN col

Effect

The addition TO COLUMN specifies the value from col for the first column in the screen segment. col expects a data object of type i. If the value in col is less than or equal to 0, it is processed as 1. If it is greater than the current line width, it is processed like this line width and sy-subrc is set to 4.

Example

Before the first display, the main list is scrolled to column 25. Since [SET LEFT SCROLL-BOUNDARY](javascript:call_link\('abapset_scroll-boundary.htm'\)) is specified, the display of the IDs of the carriers stays fixed.

DATA scarr\_wa TYPE scarr.
SELECT \*
       FROM scarr
       INTO @scarr\_wa.
  WRITE: / scarr\_wa-carrid COLOR COL\_KEY.
  SET LEFT SCROLL-BOUNDARY.
  WRITE: scarr\_wa-carrname,
         scarr\_wa-currcode,
         (40) scarr\_wa-url.
ENDSELECT.
SCROLL LIST TO COLUMN 25.

Alternative 2   

... LEFT *\[*BY n PLACES*\]*

Effect

The addition LEFT without BY n PLACES sets the first column in the screen segment to the value 1. The addition LEFT with BY n PLACES sets the current first column (sy-staco) minus the value in n as the first column in the display segment. n expects a data object of type i. If the result is less than or equal to 0, it is processed as 1 and sy-subrc is set to 4.

Alternative 3   

... RIGHT *\[*BY n PLACES*\]*

Effect

The addition RIGHT without BY n PLACES sets the line length (sy-linsz) minus the window width (sy-scols minus 2) for the first column in the screen segment. If the result is less than or equal to 0, it is processed as 1. The addition RIGHT with BY n PLACES enters the current first column (sy-staco) plus the value in n for the first column in the display segment; n expects a data object of type i. If the result is greater than the current line length, it is processed like the current line length and sy-subrc is set to 4.



**📖 Source**: [abapscroll_list_horizontal.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_horizontal.htm)

### abapscroll_list_vertical.htm

> **📖 Official SAP Documentation**: [abapscroll_list_vertical.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_vertical.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [SCROLL LIST](javascript:call_link\('abapscroll.htm'\)) → 

SCROLL LIST, vertical

[Short Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

... *{*TO *{**{*FIRST PAGE*}**|**{*LAST PAGE*}**|**{*PAGE pag*}**}* *\[*LINE lin*\]**}*
  *|* *{**{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]**}* ...

Alternatives:

[1\. ... TO FIRST PAGE](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TO LAST PAGE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... TO PAGE pag](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*](#!ABAP_ALTERNATIVE_4@4@)

Addition:

[... LINE lin](#!ABAP_ONE_ADD@1@)

Effect

These additions are used to scroll vertically in the list.

Alternative 1   

... TO FIRST PAGE

Effect

The addition TO FIRST PAGE sets the top page of the screen segment to the first page of the list.

Alternative 2   

... TO LAST PAGE

Effect

The addition TO LAST PAGE sets the top page of the screen segment to the last page of the list.

Alternative 3   

... TO PAGE pag

Effect

The addition TO PAGE pag sets the top page of the screen segment to the page specified in pag. pag expects a data object of type i. If the value in pag is 0 or less, it is processed as 1. If it is greater than the number of pages, it is processed like this number of pages and sy-subrc is set to 4.

Addition   

... LINE lin

Effect

The addition LINE specifies which line is displayed first on the pages selected using PAGE. If the addition LINE is not used, the list is displayed starting with the first line on the selected page. If the addition LINE is specified, the line on the selected page specified in lin is displayed under the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry"), not counting the page header. lin expects a data object of type i. If the value in lin is 0 or less, it is processed as 1. If it is greater than the page length, it is processed like this page length and sy-subrc is set to 4.

Alternative 4   

... *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*

Effect

The additions FORWARD and BACKWARD without n PAGES move the current screen segment up or down by the current number of lines in the GUI window (sy-srows). The [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the top page displayed is always displayed first.

The additions FORWARD and BACKWARD with n PAGES define the top page in the screen segment on the page derived by adding or subtracting the value in n from the current top page. n expects a data object of type i. If the resulting value is less than or equal to 0 or is greater than the number of pages, it is processed as 1 or like this number of pages and sy-subrc is set to 4. The resulting page is displayed starting with the first line.



**📖 Source**: [abapscroll_list_vertical.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll_list_vertical.htm)

### abapscroll.htm

> **📖 Official SAP Documentation**: [abapscroll.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

SCROLL LIST

[Short Reference](javascript:call_link\('abapscroll_shortref.htm'\))

Syntax

SCROLL LIST *\[*[horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))*\]*
            *\[*[vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))*\]*
            *\[*INDEX idx*\]*.

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement scrolls the display area of a list stored in the list buffer to the position specified in [horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\)) and/or [vertical](javascript:call_link\('abapscroll_list_vertical.htm'\)). At least one of these additions must be specified, whereby all horizontal specifications refer to the columns of a displayed list. The corresponding section is displayed when the list is next displayed.

If the SCROLL statement is not used, a list is displayed during the initial display, starting from the first column of the first line. If the user navigates from a details list back to a lower list level, the list is displayed with the section in which it was last displayed. The SCROLL statement sets a new first column, a new first line, or both. Each SCROLL statement sets only the size specified in it, without changing any positions that are not affected.

Addition   

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object of type i, which contains the list index. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx is not available, sy-subrc is set to the value 8.

System Fields

sy-subrc

Meaning

0

Screen section was scrolled successfully.

4

Complete scrolling not possible because the list margin was reached.

8

Scrolling not possible because the specified list level does not exist.

Hint

While scrolling through the list that is being created (sy-lsind), it should be noted that a SCROLL statement is ignored prior to the first output statement, since the list does not yet exist in the list buffer.

Example

By double-clicking the basic list, it is possible to scroll down this list in the event block [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) to the page entered in a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). The lines on the page retain their original position with reference to the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") by using sy-staro. However, it is not necessary to set the column to sy-staco explicitly, since this position is retained during vertical scrolling.

REPORT LINE-COUNT 100 LINE-SIZE 100
       NO STANDARD PAGE HEADING.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
PARAMETERS page TYPE i.
SELECTION-SCREEN END OF SCREEN 500.
START-OF-SELECTION.
  DO 10000 TIMES.
    WRITE sy-index.
  ENDDO.
TOP-OF-PAGE.
  ULINE.
  WRITE sy-pagno.
  ULINE.
AT LINE-SELECTION.
  CALL SELECTION-SCREEN 500 STARTING AT 10 10.
  SCROLL LIST TO COLUMN sy-staco
              TO PAGE page LINE sy-staro.

Continue
[SCROLL LIST, horizontal](javascript:call_link\('abapscroll_list_horizontal.htm'\))
[SCROLL LIST, vertical](javascript:call_link\('abapscroll_list_vertical.htm'\))



**📖 Source**: [abapscroll.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm)

### abapdescribe_list.htm

> **📖 Official SAP Documentation**: [abapdescribe_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

DESCRIBE LIST

[Short Reference](javascript:call_link\('abapdescribe_list_shortref.htm'\))

Syntax

DESCRIBE LIST *{* *{*NUMBER OF  *{*LINES*|*PAGES*}* n*}*
              *|* *{*LINE linno PAGE page*}*
              *|* *{*PAGE pagno [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\))*}* *}*
              *\[*INDEX idx*\]*.

Alternatives:

[1\. ... NUMBER OF *{*LINES*|*PAGES*}* n](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE linno PAGE page](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... PAGE pagno page\_properties](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement assigns the properties of a list stored in a list buffer to the variables n, page, or the variables specified in [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\)).

System Fields

sy-subrc

Meaning

0

The list property was successfully specified.

4

The line specified in linno or page specified in pagno cannot be found.

8

The list level specified in idx cannot be found.

Hint

The statement DESCRIBE LIST should only be used for completed lists, because not all properties of a list can be read when it is being created.

Addition   

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object of type i, which contains the list index. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx does not exist, the variables are not changed and sy-subrc is set to the value 8.

Alternative 1   

... NUMBER OF *{*LINES*|*PAGES*}* n

Effect

If specified, LINES expects the number of lines, PAGES expects the number of pages in the list stored in n. n expects a data object of the type i. The number of lines is counted from the first to the last line described by an output statement and contains the page headers and page footers. The blank lines inserted automatically between the list pages are not counted.

Alternative 2   

... LINE linno PAGE page

Effect

The corresponding page for the line number specified in linno is determined and stored in page. linno and page expect data objects of the type i. If the line specified in linno does not exist, page is not changed and sy-subrc is set to 4. The page headers and page footers are respected in the line count, but not the blank lines inserted automatically between the list pages.

Alternative 3   

... PAGE pagno page\_properties

Effect

Various properties [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) for the page number specified in pagno are determined and passed to the specified variables. At least one addition must be specified after pagno. pagno expects the data type i. If the page specified in pagno does not exist, the variables are not changed and sy-subrc is set to the value 4.

Example

Determines some properties of the last page of the list currently displayed using two DESCRIBE statements in a list event.

DATA: last\_page  TYPE i,
      lines      TYPE i,
      first\_line TYPE i,
      top\_lines  TYPE i.
...
AT LINE-SELECTION.
  DESCRIBE LIST: NUMBER OF PAGES last\_page,
                 PAGE last\_page LINES lines
                                FIRST-LINE first\_line
                                TOP-LINES  top\_lines.

Continue
[DESCRIBE LIST, page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\))



**📖 Source**: [abapdescribe_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list.htm)

### abapdescribe_list_page_properties.htm

> **📖 Official SAP Documentation**: [abapdescribe_list_page_properties.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list_page_properties.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) →  [DESCRIBE LIST](javascript:call_link\('abapdescribe_list.htm'\)) → 

DESCRIBE LIST, page\_properties

[Short Reference](javascript:call_link\('abapdescribe_list_shortref.htm'\))

Syntax

... *\[*LINE-SIZE width*\]*
    *\[*LINE-COUNT page\_lines*\]*
    *\[*LINES lines*\]*
    *\[*FIRST-LINE first\_line*\]*
    *\[*TOP-LINES top\_lines*\]*
    *\[*TITLE-LINES title\_lines*\]*
    *\[*HEAD-LINES header\_lines*\]*
    *\[*END-LINES footer\_lines*\]* ...

Additions:

[1\. ... LINE-SIZE width](#!ABAP_ADDITION_1@1@)
[2\. ... LINE-COUNT page\_lines](#!ABAP_ADDITION_2@2@)
[3\. ... LINES lines](#!ABAP_ADDITION_3@3@)
[4\. ... FIRST-LINE first\_line](#!ABAP_ADDITION_4@4@)
[5\. ... TOP-LINES top\_lines](#!ABAP_ADDITION_5@5@)
[6\. ... TITLE-LINES title\_lines](#!ABAP_ADDITION_6@6@)
[7\. ... HEAD-LINES header\_lines](#!ABAP_ADDITION_7@7@)
[8\. ... END-LINES footer\_lines](#!ABAP_ADDITION_8@8@)

Effect

Determines the properties of pages using DESCRIBE LIST. The data type i is expected for all target fields.

Addition 1   

... LINE-SIZE width

Effect

Inserts the line length of the page defined using the addition LINE-SIZE of the statement at the start of the program or of [NEW-PAGE](javascript:call_link\('abapnew-page.htm'\)) after width.

Addition 2   

... LINE-COUNT page\_lines

Effect

Inserts the page length defined using the addition LINE-COUNT of the statement at the start of the program or of NEW-PAGE after page\_lines.

Addition 3   

... LINES lines

Effect

Inserts the number of lines output on the page including the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") and [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") after lines.

Addition 4   

... FIRST-LINE first\_line

Effect

Inserts the line number of the first line of the page, with respect to the entire list, after first\_line. The [page headers](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") and [page footers](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") are respected in the line count, but not the blank lines inserted automatically between the list pages.

Addition 5   

... TOP-LINES top\_lines

Effect

Inserts the number of lines of the [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry") of the page after top\_lines. The standard page header and the lines output by the event TOP-OF-PAGE are respected in the count.

Addition 6   

... TITLE-LINES title\_lines

Effect

Inserts the number of lines of the standard title of the [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry") of the page after title\_lines.

Addition 7   

... HEAD-LINES header\_lines

Effect

Inserts the number of lines of the column headers of the [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry") of the page after header\_lines.

Addition 8   

... END-LINES footer\_lines

Effect

Inserts the number of lines reserved by the addition LINE-COUNT of the statement at the start of the program for the [page footer](javascript:call_link\('abenpage_footer_glosry.htm'\) "Glossary Entry") after footer\_lines.



**📖 Source**: [abapdescribe_list_page_properties.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list_page_properties.htm)

### abapdescribe_list.htm

> **📖 Official SAP Documentation**: [abapdescribe_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapdescribe_list.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdescribe_list.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Editing List Buffers](javascript:call_link\('abenabap_lists_complex.htm'\)) → 

DESCRIBE LIST

[Short Reference](javascript:call_link\('abapdescribe_list_shortref.htm'\))

Syntax

DESCRIBE LIST *{* *{*NUMBER OF  *{*LINES*|*PAGES*}* n*}*
              *|* *{*LINE linno PAGE page*}*
              *|* *{*PAGE pagno [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\))*}* *}*
              *\[*INDEX idx*\]*.

Alternatives:

[1\. ... NUMBER OF *{*LINES*|*PAGES*}* n](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINE linno PAGE page](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... PAGE pagno page\_properties](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... INDEX idx](#!ABAP_ONE_ADD@1@)

Effect

This statement assigns the properties of a list stored in a list buffer to the variables n, page, or the variables specified in [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\)).

System Fields

sy-subrc

Meaning

0

The list property was successfully specified.

4

The line specified in linno or page specified in pagno cannot be found.

8

The list level specified in idx cannot be found.

Hint

The statement DESCRIBE LIST should only be used for completed lists, because not all properties of a list can be read when it is being created.

Addition   

... INDEX idx

Effect

The list level can be specified with the addition INDEX, where idx expects a data object of type i, which contains the list index. The value of idx must be greater than or equal to 0. If the addition INDEX is not specified, the list level 0 (the basic list itself) is selected when the basic list is created and the list level at which the event was raised (sy-listi) is selected when a list event is processed. If the list level specified in idx does not exist, the variables are not changed and sy-subrc is set to the value 8.

Alternative 1   

... NUMBER OF *{*LINES*|*PAGES*}* n

Effect

If specified, LINES expects the number of lines, PAGES expects the number of pages in the list stored in n. n expects a data object of the type i. The number of lines is counted from the first to the last line described by an output statement and contains the page headers and page footers. The blank lines inserted automatically between the list pages are not counted.

Alternative 2   

... LINE linno PAGE page

Effect

The corresponding page for the line number specified in linno is determined and stored in page. linno and page expect data objects of the type i. If the line specified in linno does not exist, page is not changed and sy-subrc is set to 4. The page headers and page footers are respected in the line count, but not the blank lines inserted automatically between the list pages.

Alternative 3   

... PAGE pagno page\_properties

Effect

Various properties [page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\)) for the page number specified in pagno are determined and passed to the specified variables. At least one addition must be specified after pagno. pagno expects the data type i. If the page specified in pagno does not exist, the variables are not changed and sy-subrc is set to the value 4.

Example

Determines some properties of the last page of the list currently displayed using two DESCRIBE statements in a list event.

DATA: last\_page  TYPE i,
      lines      TYPE i,
      first\_line TYPE i,
      top\_lines  TYPE i.
...
AT LINE-SELECTION.
  DESCRIBE LIST: NUMBER OF PAGES last\_page,
                 PAGE last\_page LINES lines
                                FIRST-LINE first\_line
                                TOP-LINES  top\_lines.

Continue
[DESCRIBE LIST, page\_properties](javascript:call_link\('abapdescribe_list_page_properties.htm'\))
