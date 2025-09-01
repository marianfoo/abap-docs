  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) → 

WRITE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_shortref.htm)

Syntax

WRITE *{**\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]**}* dobj
      *\[*UNDER other\_dobj*\]*
      *\[*NO-GAP*\]*
      *\[*[int\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm)*\]*
      *\[*[ext\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_ext_options.htm)*\]*
      *\[*[list\_elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_list_elements.htm)*\]*
      *\[*QUICKINFO info*\]*.

Extras:

[1\. ... *\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... UNDER other\_dobj](#!ABAP_ADDITION_2@2@)
[3\. ... NO-GAP](#!ABAP_ADDITION_3@3@)
[4\. ... QUICKINFO info](#!ABAP_ADDITION_4@4@)

Effect

This statement formats the content of the data object dobj and writes it to the current page of the current list in the list buffer. This is either a [screen list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_list_glosry.htm "Glossary Entry") in the list buffer or a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_glosry.htm "Glossary Entry"). dobj is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") with the restriction that no [arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and no [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be specified directly.

For dobj, data types are permitted, which are grouped under the generic type [simple](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm):

-   All [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") data types; flat structures are handled like a data object of type c and can only contain any character-like components.

-   The data types STRING and XSTRING

-   [enumeration types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"); the name (maximum three characters) of the [enumerated constant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") is used in uppercase letters, which defines the the current [enumerated value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_value_glosry.htm "Glossary Entry").

Formatting the Output

The output is formatted in accordance with

-   the same [predefined output formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm) as in the statement [WRITE ... TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) or
    
-   the additions [int\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm).
    

[ext\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_ext_options.htm) allows output to be formatted and the additions [list\_elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_list_elements.htm) allow specific list elements to be displayed. By default, adjacent characters "-" and "|" in a list are joined together to form continuous [lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_lines.htm).

Output Position

The output position is either determined by the [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry"), or specified using pos after AT or by UNDER. The list cursor itself can be adjusted using NO-GAP. At the start of every output, the output position in the list buffer is the same as the output position in the list representation. The positions of individual characters within an output field can differ between the list representation and the list buffer. In both cases, however, the [output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm) is the same.

Output Length

The [output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm) is determined by the data type of dobj or it can be specified with len*|*\**|*\*\* after AT. len specifies an absolute length, whereas \* or \*\* ensures that characters are not truncated by mistake.

Page Break

If the last line of the current page is reached and a subsequent line is displayed, a new page is created. The maximum number of lines is determined by the addition [LINE-COUNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_options.htm) of the [introductory statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") or the statement [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm). For the basics list, the event [END-OF-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-page.htm) is raised when the area reserved for the [page footer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_footer_glosry.htm "Glossary Entry") is reached, and a new page is then created.

Line Break

Once the list cursor is positioned with a previous output statement and if the output length is greater than the area available in the current line of the list buffer, the output goes to the next line. If this line is also not sufficient for a complete output, the output length is shortened accordingly and the output is displayed in this line.

If the list cursor is positioned using by specifying pos or a statement [BACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapback.htm), [NEW-LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-line.htm), [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm), [POSITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapposition.htm) or [SKIP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapskip.htm) and not with a previous output statement, the output is always displayed in the current line, and the output length is shortened, if necessary.

List Cursor

After the output is displayed, the list cursor is positioned by default in the second place after the output; the sy-colno and sy-linno system fields are set accordingly.

Field Help and Input Help

If the data object dobj is declared with reference to a data type from ABAP Dictionary, the field and input help defined here are available in the list displayed on the screen.

Notes

-   In the default setting, the system does not pass a new line that contains only blanks to a list. A blank line is only produced if the list cursor is directly positioned in an existing line, in other words not using a line break. This setting can be changed using the statement [SET BLANK LINES ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_blank_lines.htm).
    
-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") cannot be specified directly, but can be specified in [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenembedded_expression_glosry.htm "Glossary Entry") in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_glosry.htm "Glossary Entry").
    
-   Control characters for line breaks or tabs are ignored in strings that are displayed using WRITE. These characters are displayed as #, like all other non-reproducible characters.
    
-   If the start of a character string, which is output with WRITE, contains an internal ID (key or internal name) for an icon (between two characters "@"), this is displayed in the list as an icon - even without addition [AS ICON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_list_elements.htm). This can lead to unintended output of icons and unexpected effects in terms of the output length. By default, the output length is determined by the length of the character string.
    
-   [Obsolete calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculate_obsolete.htm) used in connection with WRITE are still possible outside of classes.
    
-   The methods of the class CL\_DEMO\_OUTPUT demonstrate how simple WRITE output can be replaced by using a suitable output stream.
    

Example

WRITE output for data objects, function calls, string expressions and method calls.

DATA text TYPE string VALUE 'Hello classical list'.
WRITE / text.
WRITE / |{ text WIDTH = 40 ALIGN = RIGHT }|.
WRITE / to\_upper( text ).
WRITE / |{ 6 \* 7 }|.
WRITE / \`4\` && \`2\`.
WRITE / cl\_abap\_codepage=>convert\_to(
          source      = text
          codepage    = \`UTF-8\` ).

Addition 1

... *\[*AT*\]* *\[*/*\]**\[*pos*\]**\[*(len*|*\**|*\*\*)*\]*

Effect

The output position and length for the current statement WRITE can be defined after AT. The output position of existing output in the list buffer is overwritten with the output length of the new output. Once an existing output is overwritten, the list cursor is placed in the next place (and not the place after this one).

The components of the specified position and length /,pos and len or \* or \*\* must be specified with no blanks and in the given order. If position and length are only specified as numeric literals, the addition AT can be omitted.

-   With /, the output is displayed in the next line after the current line. If no position pos is specified, the output is written from the first column onward. If specified immediately after the positioning of the [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") in a list line (that is not the result of a previous output statement),/ is ignored. This is the case during initial writing to a list page, and after explicit positioning with the statements [SKIP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapskip.htm), [NEW-LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-line.htm), [NEW-PAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page.htm) and [BACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapback.htm).
    
-   The output position is determined by specifying pos. pos expects a data object of type i that contains a value within the current list width. If the value in pos is less than 1, it is ignored. If it is greater than the current list width, there is no output.
    
-   The [output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm) is determined by specifying len, \* or \*\* in parentheses. Using len, an absolute value can be specified. len expects a data object of type i which contains a value greater than zero and which is within the current list width. If is len specified, the number of characters displayed in the list can differ from the number of characters stored in the list buffer. By specifying \* or \*\*, the output length depends on the data type of the data object dobj, as shown in the following table.
    

Data Type

\*

\*\*

c

Number of columns needed in the list to display the entire content; trailing blanks are ignored. This length can be greater than the [implicit length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm).

Doubled length of data object

string

[Implicit length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm)

Doubled length of contained characters.

n, x, xtring

[Implicit length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm)

[Implicit length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm)

d

10

10

t

8 for 24-hour format, 11 for 12-hour format

8 without using the addition [ENVIRONMENT TIME FORMAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), 11 using this addition

(b, s), f, i, int8, p

Length required to output the current value, including thousand separators. The value used here is the value after the application of the possible additions [CURRENCY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [DECIMALS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [NO-SIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [ROUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm) or [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm).

Length required to output the maximum possible values, including signs and thousand separators. The value used here is the value after the application of the possible additions [CURRENCY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [DECIMALS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [NO-SIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [ROUND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm) or [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm).

decfloat16, decfloat34

The same as for \*\* applies here. However, leading and trailing blanks are removed.

24 or 26. These are the predefined output lengths that can also include thousand separators. If the values are too large, exceptions can be raised if one of these formats - O\_SIGN\_AS\_POSTFIX, O\_MONETARY, O\_EXTENDED\_MONETARY - is defined under [STYLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm).

When a [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry") is executed with reference to a data type in ABAP Dictionary, if len is specified, the routine is performed for the relevant specified length, and if \* or \*\* is specified, the routine is performed for the output length specified in ABAP Dictionary. If \* or \*\* is specified, the output length is then determined from the conversion routine result, using the rules explained above. If \* or \*\* is specified when using edit masks ([USING EDIT MASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm), [DD/MM/YYYY ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm)), special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm) apply.

Notes

-   Specifying the output length len after AT should always be preferred over specifying a length for the data object dobj (substring access). In contrast to substring accesses, specifying the output length is not restricted to byte-like and character-like data objects. Furthermore, the assignment of the list output to the data object is lost in substring accesses, which means that it can no longer be addressed in the list.
    
-   The specification of \* or \*\* for the output length ensures that, regardless of data type, all characters from dobj are displayed, even when more columns are needed in the list than positions in the list buffer. With \*, the minimum possible length is used, and with \*\*, the maximum possible length is used.
    
-   If an output position is specified within an existing output, it must be ensured that the position always refers to the characters stored in the list buffer. If characters that require more than one column in the list are displayed, the displayed output position can differ from the specified output position. In addition, the displayed content of a partially overwritten output can be shifted, depending on the characters that overwrote the output.
    

Example

Displays a text field text at different positions, with different output lengths.

DATA: text TYPE string VALUE '0123456789ABCDEF',
      col  TYPE i VALUE 25,
      len  TYPE i VALUE 5.
WRITE text.
WRITE /5(10) text.
WRITE AT col(len) text.

Addition 2

... UNDER other\_dobj

Effect

The output is made in the current line at the place where the data object other\_dobj was the output of a previous WRITE statement. The data object other\_dobj must be written exactly as in the corresponding WRITE statement, including all possible specified offset/lengths and so on. If the data object other\_dobj was not specified before, the addition is ignored. If it was specified more than once, the horizontal output position of the last WRITE statement is used.

The addition UNDER cannot be used together with a position pos specified after AT. For other\_dobj, a [boxed component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry") or component of a boxed component cannot be specified.

Notes

-   Vertical positioning must be carried out by the user. If the [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is positioned underneath the output of other\_dobj, the output also appears underneath. If the list cursor is positioned in the same line in which other\_dobj is displayed, this output is overwritten. If the list cursor is positioned above the output of other\_dobj, the output also appears above.
    
-   The data object other\_dobj should be defined globally in the current program. Using local data objects in procedures may produce unwanted results, for example if the components of the same structures are used in different procedures.
    
-   The data object other\_dobj can also be specified as a field symbol or as a dereferenced data reference. In this case, the field symbol or data reference must not point to a row of an internal table.
    

Example

Table-like output of flight connections.

DATA: carrid TYPE spfli-carrid,
      connid TYPE spfli-connid.
WRITE: 10 'Carrier', 40 'Connection'.
ULINE.
SELECT carrid, connid
       FROM spfli
       INTO (@carrid, @connid).
  WRITE: / carrid UNDER 'Carrier',
           connid UNDER 'Connection'.
ENDSELECT.

Addition 3

... NO-GAP

Effect

The [list cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_cursor_glosry.htm "Glossary Entry") is positioned directly after the output (and not in the place after the next place in the list buffer).

Example

The output of the two WRITE statements is "NoGap".

WRITE: 'No' NO-GAP, 'Gap'.

Addition 4

... QUICKINFO info

Effect

A [tooltip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquick_info_glosry.htm "Glossary Entry") is associated with the output. If the mouse cursor is placed on the output area of dobj, the content of info appears in a colored rectangle. info expects a character-like data object with length 80. Character strings that exceed this length are cut off after position 80.

The addition QUICKINFO is ignored by fields that are ready for input and [line elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_element_glosry.htm "Glossary Entry"). If a list output is overwritten by another output, no tooltip for the overwritten field appears at or after the position where overwriting starts.

Note

The character @ is represented internally in the tooltip text by @@ and it occupies two places rather than just one. This means that for every @ character, there is one less character available to display it.

Example

Additional information about date and time output.

WRITE: (10) sy-datum QUICKINFO 'Date of list creation',
       (8)  sy-uzeit QUICKINFO 'Time of list creation'.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

See [WRITE - TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm)

Continue
[WRITE - Output Length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm)
[WRITE - int\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm)
[WRITE - ext\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_ext_options.htm)
[WRITE - Lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_lines.htm)
[WRITE - list\_elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_list_elements.htm)
[WRITE /.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_skip.htm)